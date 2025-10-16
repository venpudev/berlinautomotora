import type { APIRoute } from 'astro';

export const POST: APIRoute = async ({ request }) => {
  try {
    const data = await request.json();
    const { name, phone, email, message, 'h-captcha-response': hcaptchaResponse } = data;

    // Verificar que todos los campos requeridos estén presentes
    if (!name || !phone || !email || !message || !hcaptchaResponse) {
      return new Response(JSON.stringify({ 
        error: 'Todos los campos son requeridos' 
      }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    // Verificar hCaptcha
    const hcaptchaSecret = import.meta.env.HCAPTCHA_SECRET_KEY;
    if (!hcaptchaSecret) {
      console.error('HCAPTCHA_SECRET_KEY no está configurado');
      return new Response(JSON.stringify({ 
        error: 'Error de configuración del servidor' 
      }), {
        status: 500,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    // Verificar hCaptcha con el servidor de hCaptcha
    const hcaptchaVerifyResponse = await fetch('https://hcaptcha.com/siteverify', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: new URLSearchParams({
        secret: hcaptchaSecret,
        response: hcaptchaResponse,
        remoteip: request.headers.get('x-forwarded-for') || request.headers.get('x-real-ip') || 'unknown'
      })
    });

    const hcaptchaResult = await hcaptchaVerifyResponse.json();
    if (!hcaptchaResult.success) {
      return new Response(JSON.stringify({ 
        error: 'Verificación de seguridad fallida' 
      }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    // Configurar el servicio de email (usando Resend como ejemplo)
    const emailService = import.meta.env.EMAIL_SERVICE || 'resend';
    const apiKey = import.meta.env.EMAIL_API_KEY;
    
    if (!apiKey) {
      console.error('EMAIL_API_KEY no está configurado');
      return new Response(JSON.stringify({ 
        error: 'Error de configuración del servidor de email' 
      }), {
        status: 500,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    // Preparar el contenido del email
    const emailContent = `
      <h2>Nuevo mensaje de contacto - Berlin Automotora</h2>
      <p><strong>Nombre:</strong> ${name}</p>
      <p><strong>Teléfono:</strong> ${phone}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Mensaje:</strong></p>
      <p>${message.replace(/\n/g, '<br>')}</p>
      <hr>
      <p><small>Enviado desde el formulario de contacto de Berlin Automotora</small></p>
    `;

    // Enviar email usando Resend
    const emailResponse = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: 'Berlin Automotora <noreply@berlinautomotora.cl>',
        to: ['contacto@berlinautomotora.cl'],
        subject: `Nuevo mensaje de contacto de ${name}`,
        html: emailContent,
        reply_to: email
      })
    });

    if (!emailResponse.ok) {
      const errorData = await emailResponse.json();
      console.error('Error enviando email:', errorData);
      return new Response(JSON.stringify({ 
        error: 'Error enviando el mensaje. Por favor, intenta nuevamente.' 
      }), {
        status: 500,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    return new Response(JSON.stringify({ 
      success: true,
      message: 'Mensaje enviado correctamente' 
    }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' }
    });

  } catch (error) {
    console.error('Error en send-email API:', error);
    return new Response(JSON.stringify({ 
      error: 'Error interno del servidor' 
    }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    });
  }
};