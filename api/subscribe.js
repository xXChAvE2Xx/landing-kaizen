const { confirmationHtml } = require('../lib/email-template');

const RESEND_API_URL = 'https://api.resend.com';

function isValidEmail(email) {
  return (
    typeof email === 'string' &&
    email.length <= 254 &&
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
  );
}

function escapeHtml(str) {
  return String(str).replace(/[&<>"']/g, (c) => ({
    '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;',
  }[c]));
}

async function sendEmail(apiKey, from, to, html, subject) {
  const r = await fetch(`${RESEND_API_URL}/emails`, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${apiKey}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ from, to, subject, html }),
  });
  if (!r.ok) {
    const text = await r.text();
    throw new Error(`Resend email error ${r.status}: ${text}`);
  }
}

async function addContact(apiKey, audienceId, email) {
  const r = await fetch(`${RESEND_API_URL}/audiences/${audienceId}/contacts`, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${apiKey}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ email, unsubscribed: false }),
  });

  if (r.ok) return;

  const data = await r.json().catch(() => ({}));
  const message = (data && data.message) || '';
  const alreadyOnList = /already exists|duplicate/i.test(message);
  if (!alreadyOnList) {
    throw new Error(`Resend contacts error ${r.status}: ${message}`);
  }
}

module.exports = async (req, res) => {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).json({ error: 'Método no permitido' });
  }

  let body = req.body;
  if (!body || typeof body === 'string') {
    try {
      body = JSON.parse(body || '{}');
    } catch {
      body = {};
    }
  }

  const email = String(body.email || '').trim().toLowerCase();
  const honeypot = body.company;

  // Campo trampa para bots: si viene lleno, respondemos "éxito" sin hacer nada.
  if (honeypot) {
    return res.status(200).json({ ok: true });
  }

  if (!isValidEmail(email)) {
    return res.status(400).json({ error: 'Ese correo no se ve válido.' });
  }

  const apiKey = process.env.RESEND_API_KEY;
  const audienceId = process.env.RESEND_AUDIENCE_ID;
  const fromEmail = process.env.RESEND_FROM_EMAIL || 'Kaizen <onboarding@resend.dev>';
  const adminEmail = process.env.ADMIN_NOTIFY_EMAIL;

  if (!apiKey || !audienceId) {
    console.error('Faltan las variables de entorno RESEND_API_KEY o RESEND_AUDIENCE_ID');
    return res.status(500).json({ error: 'El servidor no está configurado todavía.' });
  }

  try {
    await addContact(apiKey, audienceId, email);
  } catch (err) {
    console.error('No se pudo guardar el contacto en Resend:', err);
    return res.status(502).json({ error: 'No se pudo guardar tu correo. Intenta de nuevo.' });
  }

  // El correo de confirmación es "best effort": sin un dominio verificado en
  // Resend, el remitente de pruebas (onboarding@resend.dev) solo puede enviar
  // al correo dueño de la cuenta de Resend, así que esto puede fallar para
  // el resto de las personas y no debe tumbar la respuesta — el contacto ya
  // quedó guardado en la Audiencia, que es lo importante.
  const emailAttempts = [
    sendEmail(apiKey, fromEmail, email, confirmationHtml(), 'Estás en la lista — Kaizen'),
  ];

  if (adminEmail) {
    emailAttempts.push(
      sendEmail(
        apiKey,
        fromEmail,
        adminEmail,
        `<p>Nuevo registro en la lista de espera de Kaizen: <strong>${escapeHtml(email)}</strong></p>`,
        'Nuevo registro — Kaizen'
      )
    );
  }

  const results = await Promise.allSettled(emailAttempts);
  results.forEach((result) => {
    if (result.status === 'rejected') {
      console.error('No se pudo enviar un correo:', result.reason);
    }
  });

  return res.status(200).json({ ok: true });
};
