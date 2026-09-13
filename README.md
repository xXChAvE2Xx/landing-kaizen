# Kaizen — Landing de lista de espera

Landing page estática + una función serverless (`/api/subscribe`) que guarda
cada correo en una Audiencia de Resend y le manda un correo de confirmación.
No usa base de datos: Resend hace las dos cosas (lista de contactos + envío).

## Estructura

```
landing/
├── index.html          → la landing (todo el diseño, en un solo archivo)
├── api/subscribe.js     → función serverless: valida el correo, lo guarda
│                          en Resend y dispara los correos
├── lib/email-template.js→ el HTML del correo de confirmación
├── .env.example         → variables de entorno necesarias
└── package.json
```

## 1. Configurar Resend

Ya tienes cuenta, así que solo falta:

1. **API key**: Resend → *API Keys* → *Create API Key*. Cópiala.
2. **Audiencia**: Resend → *Audiences* → *Create Audience* (por ejemplo,
   "Lista de espera Kaizen"). Copia su ID (aparece en la URL o al abrirla).
3. **Dominio (todavía no lo tienes)**: sin verificar un dominio propio en
   Resend → *Domains*, el remitente de pruebas `onboarding@resend.dev` **solo
   puede enviarte correo a ti mismo** (la cuenta con la que te registraste en
   Resend). Los demás correos que la gente registre **sí se guardan bien** en
   la Audiencia — lo único que no llega en modo de pruebas es el correo de
   confirmación a terceros.
   - Cuando compres un dominio (por ejemplo desde Vercel, Namecheap, etc.),
     ve a Resend → *Domains* → *Add Domain*, sigue las instrucciones para
     agregar los registros DNS, espera a que se verifique, y luego cambia
     `RESEND_FROM_EMAIL` a algo como `Kaizen <avisos@tudominio.com>`. A partir
     de ahí, el correo de confirmación llega a cualquier persona.
   - Mientras tanto, configura `ADMIN_NOTIFY_EMAIL` con tu propio correo para
     que te llegue un aviso cada vez que alguien se registre (ese sí funciona
     desde ya, porque te lo manda a ti).

## 2. Variables de entorno

Copia `.env.example` a `.env` y llena los valores para probar localmente:

```bash
cp .env.example .env
```

En producción (Vercel), estas mismas variables se configuran en
**Project → Settings → Environment Variables**:

- `RESEND_API_KEY`
- `RESEND_AUDIENCE_ID`
- `RESEND_FROM_EMAIL` (opcional, tiene un valor por defecto)
- `ADMIN_NOTIFY_EMAIL` (opcional, pero recomendado mientras no tengas dominio)

## 3. Probar en local

Necesitas el CLI de Vercel (gratis):

```bash
npm install -g vercel
vercel dev
```

Abre la URL que te muestre (normalmente `http://localhost:3000`), llena el
formulario y revisa la consola de esa terminal si algo falla — ahí se loguean
los errores de Resend.

## 4. Desplegar en Vercel (gratis)

**Opción rápida (sin GitHub):**

```bash
vercel
```

Sigue las preguntas (elige la carpeta `landing` como raíz del proyecto la
primera vez). Al terminar te da una URL pública. Cuando quieras publicar
cambios nuevos:

```bash
vercel --prod
```

**Opción con GitHub (despliegue automático en cada push):**

1. Sube esta carpeta a un repositorio de GitHub.
2. En [vercel.com](https://vercel.com) → *Add New* → *Project* → importa ese
   repositorio.
3. Antes del primer deploy, agrega las variables de entorno del paso 2 en
   *Environment Variables*.
4. Cada `git push` a la rama principal despliega solo.

En ambos casos, el plan gratuito de Vercel (Hobby) es suficiente para esto.

## 5. Ver quién se registró

Resend → *Audiences* → tu audiencia → ahí aparece la lista de contactos, con
opción de exportar a CSV.

## Pendientes para cuando el producto avance

- Cambiar el enlace `https://kaizen.mx` y la dirección física de ejemplo en
  `lib/email-template.js` por los datos reales (dominio propio y, si aplica,
  domicilio del negocio).
- Verificar un dominio en Resend para que el correo de confirmación llegue a
  cualquier persona, no solo a ti.
