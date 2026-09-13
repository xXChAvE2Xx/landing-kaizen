// Cuerpo del correo de confirmación que recibe cada persona que se registra
// en la lista de espera. Basado en el diseño de correo-lista-espera.html.
//
// TODO antes de que esto sea "real": cambia el enlace https://kaizen.mx y la
// dirección física de ejemplo ("Av. Ejemplo 123...") por los datos reales del
// negocio cuando los tengas.

function confirmationHtml() {
  return `<!DOCTYPE html>
<html lang="es">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width,initial-scale=1">
<meta name="color-scheme" content="light dark">
<meta name="supported-color-schemes" content="light dark">
<title>Estás en la lista — Kaizen</title>
<!--[if mso]>
<style>body,table,td,a{font-family:Arial,Helvetica,sans-serif !important}</style>
<![endif]-->
<style>
@media only screen and (max-width:620px){
  .kz-pad{padding-left:24px !important;padding-right:24px !important}
  .kz-h1{font-size:26px !important;line-height:34px !important}
  .kz-stack{display:block !important;width:100% !important}
}
</style>
</head>
<body style="margin:0;padding:0;background-color:#121214;">
<span style="display:none !important;visibility:hidden;opacity:0;color:transparent;height:0;width:0;overflow:hidden;mso-hide:all;">Ya guardamos tu lugar. Te escribimos en cuanto Kaizen esté disponible.</span>

<table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%" style="background-color:#121214;">
<tr>
<td align="center" style="padding:32px 12px;">

  <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="600" style="width:600px;max-width:600px;background-color:#1D1D21;border-radius:20px;border:1px solid #2A2A30;">

    <tr>
      <td class="kz-pad" align="center" style="padding:36px 40px 0 40px;">
        <table role="presentation" cellpadding="0" cellspacing="0" border="0">
          <tr>
            <td style="padding-right:9px;" valign="middle">
              <div style="width:26px;height:26px;border:3px solid #C7A977;border-radius:13px;border-top-color:#1D1D21;font-size:0;line-height:0;">&nbsp;</div>
            </td>
            <td valign="middle" style="font-family:Arial,Helvetica,sans-serif;font-size:19px;font-weight:bold;color:#F4F2EC;letter-spacing:-0.4px;mso-line-height-rule:exactly;line-height:26px;">Kaizen</td>
          </tr>
        </table>
      </td>
    </tr>

    <tr>
      <td class="kz-pad" style="padding:30px 40px 0 40px;">
        <p style="margin:0 0 14px 0;font-family:'Courier New',Courier,monospace;font-size:11px;letter-spacing:2px;color:#C7A977;text-transform:uppercase;mso-line-height-rule:exactly;line-height:16px;">Tu lugar está guardado</p>
        <h1 class="kz-h1" style="margin:0 0 16px 0;font-family:Arial,Helvetica,sans-serif;font-size:30px;font-weight:bold;color:#F4F2EC;letter-spacing:-0.8px;mso-line-height-rule:exactly;line-height:38px;">Gracias por registrarte</h1>
        <p style="margin:0 0 14px 0;font-family:Arial,Helvetica,sans-serif;font-size:15px;color:#C4C2BA;mso-line-height-rule:exactly;line-height:25px;">Ya estás en la lista de Kaizen. Seguimos puliendo los últimos detalles de la app y todavía no tenemos fecha de lanzamiento, pero en cuanto abramos te escribimos a este correo: serás de los primeros en entrar.</p>
        <p style="margin:0;font-family:Arial,Helvetica,sans-serif;font-size:15px;color:#C4C2BA;mso-line-height-rule:exactly;line-height:25px;">Mientras tanto, esto es lo que te va a estar esperando.</p>
      </td>
    </tr>

    <tr>
      <td class="kz-pad" style="padding:26px 40px 0 40px;">
        <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%" style="width:100%;background-color:#141417;border-radius:14px;border:1px solid #2A2A30;">
          <tr>
            <td style="padding:20px 22px 6px 22px;font-family:'Courier New',Courier,monospace;font-size:10px;letter-spacing:2px;color:#9C9A93;text-transform:uppercase;mso-line-height-rule:exactly;line-height:15px;">Lo que tendrás</td>
          </tr>
          <tr>
            <td style="padding:0 22px 6px 22px;">
              <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%">
                <tr>
                  <td width="18" valign="top" style="font-family:Arial,Helvetica,sans-serif;font-size:15px;color:#C7A977;mso-line-height-rule:exactly;line-height:24px;">—</td>
                  <td style="font-family:Arial,Helvetica,sans-serif;font-size:14px;color:#F4F2EC;mso-line-height-rule:exactly;line-height:24px;padding-bottom:8px;"><strong style="font-weight:bold;">Tarjetas de crédito como son de verdad.</strong> <span style="color:#C4C2BA;">Fecha de corte, fecha límite y la proyección de lo que pagarás el mes que entra.</span></td>
                </tr>
                <tr>
                  <td width="18" valign="top" style="font-family:Arial,Helvetica,sans-serif;font-size:15px;color:#C7A977;mso-line-height-rule:exactly;line-height:24px;">—</td>
                  <td style="font-family:Arial,Helvetica,sans-serif;font-size:14px;color:#F4F2EC;mso-line-height-rule:exactly;line-height:24px;padding-bottom:8px;"><strong style="font-weight:bold;">Meses sin y con intereses.</strong> <span style="color:#C4C2BA;">Capturas el total, eliges el plazo y la app lleva el conteo de tus pagos.</span></td>
                </tr>
                <tr>
                  <td width="18" valign="top" style="font-family:Arial,Helvetica,sans-serif;font-size:15px;color:#C7A977;mso-line-height-rule:exactly;line-height:24px;">—</td>
                  <td style="font-family:Arial,Helvetica,sans-serif;font-size:14px;color:#F4F2EC;mso-line-height-rule:exactly;line-height:24px;padding-bottom:8px;"><strong style="font-weight:bold;">Tu monto asegurado.</strong> <span style="color:#C4C2BA;">Defines lo que apartas cada mes y te avisamos antes de que un gasto se lo coma.</span></td>
                </tr>
                <tr>
                  <td width="18" valign="top" style="font-family:Arial,Helvetica,sans-serif;font-size:15px;color:#C7A977;mso-line-height-rule:exactly;line-height:24px;">—</td>
                  <td style="font-family:Arial,Helvetica,sans-serif;font-size:14px;color:#F4F2EC;mso-line-height-rule:exactly;line-height:24px;padding-bottom:16px;"><strong style="font-weight:bold;">Captura en dos toques.</strong> <span style="color:#C4C2BA;">Escribes el monto y guardas. El resto se calcula solo.</span></td>
                </tr>
              </table>
            </td>
          </tr>
        </table>
      </td>
    </tr>

    <tr>
      <td class="kz-pad" style="padding:24px 40px 0 40px;">
        <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%" style="width:100%;background-color:#1D1D21;border-radius:14px;border:1px solid rgba(199,169,119,0.3);">
          <tr>
            <td style="padding:18px 22px;font-family:Arial,Helvetica,sans-serif;font-size:14px;color:#C4C2BA;mso-line-height-rule:exactly;line-height:23px;">
              <strong style="color:#E2CB9E;font-weight:bold;">El plan gratuito es gratuito de verdad:</strong> cuentas y tarjetas ilimitadas, meses, presupuesto, calendario y análisis, desde tu teléfono. Premium añade la nube y el acceso desde todos tus dispositivos.
            </td>
          </tr>
        </table>
      </td>
    </tr>

    <tr>
      <td class="kz-pad" align="center" style="padding:28px 40px 0 40px;">
        <table role="presentation" cellpadding="0" cellspacing="0" border="0">
          <tr>
            <td align="center" bgcolor="#C7A977" style="border-radius:12px;">
              <a href="https://kaizen.mx" style="display:block;padding:15px 34px;font-family:Arial,Helvetica,sans-serif;font-size:15px;font-weight:bold;color:#0B0B0C;text-decoration:none;mso-line-height-rule:exactly;line-height:20px;">Ver qué estamos construyendo</a>
            </td>
          </tr>
        </table>
      </td>
    </tr>

    <tr>
      <td class="kz-pad" align="center" style="padding:18px 40px 34px 40px;">
        <p style="margin:0;font-family:Arial,Helvetica,sans-serif;font-size:12px;color:#9C9A93;mso-line-height-rule:exactly;line-height:20px;">No te volveremos a escribir hasta que haya algo real que contarte.</p>
      </td>
    </tr>

    <tr>
      <td style="padding:0 40px;"><div style="height:1px;background-color:#2A2A30;font-size:0;line-height:0;">&nbsp;</div></td>
    </tr>

    <tr>
      <td class="kz-pad" align="center" style="padding:22px 40px 30px 40px;">
        <p style="margin:0 0 8px 0;font-family:'Courier New',Courier,monospace;font-size:10px;letter-spacing:3px;color:#9C9A93;mso-line-height-rule:exactly;line-height:16px;">改善 &middot; MEJORA CONTINUA</p>
        <p style="margin:0 0 8px 0;font-family:Arial,Helvetica,sans-serif;font-size:11px;color:#9C9A93;mso-line-height-rule:exactly;line-height:18px;">Kaizen &middot; Av. Ejemplo 123, Col. Centro, 44100 Guadalajara, Jalisco, México</p>
        <p style="margin:0;font-family:Arial,Helvetica,sans-serif;font-size:11px;color:#9C9A93;mso-line-height-rule:exactly;line-height:18px;">Recibes este correo porque pediste aviso del lanzamiento. <a href="https://kaizen.mx/baja" style="color:#C7A977;text-decoration:underline;">Darme de baja</a></p>
      </td>
    </tr>

  </table>

</td>
</tr>
</table>
</body>
</html>
`;
}

module.exports = { confirmationHtml };
