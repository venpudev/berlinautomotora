# Configuración de Email - Berlin Automotora

## Variables de Entorno Requeridas

Para que el formulario de contacto funcione correctamente, necesitas configurar las siguientes variables de entorno:

### 1. Configuración de Email (Resend)

```bash
EMAIL_SERVICE=resend
EMAIL_API_KEY=tu_api_key_de_resend_aqui
```

**Pasos para configurar Resend:**
1. Ve a [resend.com](https://resend.com)
2. Crea una cuenta gratuita
3. Obtén tu API key desde el dashboard
4. Configura el dominio `berlinautomotora.cl` (opcional pero recomendado)

### 2. Configuración de hCaptcha

```bash
PUBLIC_HCAPTCHA_SITE_KEY=tu_site_key_de_hcaptcha
HCAPTCHA_SECRET_KEY=tu_secret_key_de_hcaptcha
```

**Pasos para configurar hCaptcha:**
1. Ve a [hcaptcha.com](https://hcaptcha.com)
2. Crea una cuenta gratuita
3. Crea un nuevo sitio
4. Obtén las keys Site y Secret

### 3. Configuración en Vercel

1. Ve a tu proyecto en Vercel
2. Ve a Settings > Environment Variables
3. Agrega las variables:
   - `EMAIL_API_KEY`
   - `HCAPTCHA_SECRET_KEY`
   - `PUBLIC_HCAPTCHA_SITE_KEY` (ya configurada)

### 4. Configuración Local

Crea un archivo `.env` en la raíz del proyecto:

```bash
EMAIL_SERVICE=resend
EMAIL_API_KEY=tu_api_key_aqui
PUBLIC_HCAPTCHA_SITE_KEY=tu_site_key_aqui
HCAPTCHA_SECRET_KEY=tu_secret_key_aqui
```

## Funcionalidades Implementadas

✅ **Formulario de Contacto**
- Validación de campos requeridos
- Verificación hCaptcha
- Envío de emails a contacto@berlinautomotora.cl
- Respuesta automática al usuario

✅ **Enlaces Funcionales**
- "Ver Stock Completo" → /catalogo
- "Financiamiento Flexible" → /financiamiento
- Formulario de financiamiento → Zoho Forms

✅ **Diseño Responsivo**
- Optimizado para móvil, tablet y desktop
- Logos de partners más grandes
- Loop continuo en sliders
- Mejor UX/UI general

## Próximos Pasos

1. Configurar las variables de entorno
2. Probar el formulario de contacto
3. Verificar que los emails lleguen correctamente
4. Hacer deploy a producción
