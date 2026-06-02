import type { APIRoute } from "astro";
import { contactSchema } from "@/lib/schemas/contact-schema";
import { getResendClient } from "@/lib/resend";
import { siteConfig } from "@/config/site-config";
import { businessInfo } from "@/config/business-info";

// Deshabilitamos prerendering para esta ruta específica ya que procesa solicitudes dinámicas POST.
export const prerender = false;

export const POST: APIRoute = async ({ request, locals }) => {
  try {
    // 1. Validar Content-Type
    const contentType = request.headers.get("content-type");
    if (!contentType || !contentType.includes("application/json")) {
      return new Response(
        JSON.stringify({
          success: false,
          message: "Formato de solicitud no válido. Debe ser application/json.",
        }),
        { status: 400, headers: { "Content-Type": "application/json" } }
      );
    }

    // 2. Parsear el body
    const body = await request.json();

    // 3. Validar con Zod
    const result = contactSchema.safeParse(body);
    if (!result.success) {
      // Devolver errores detallados por campo
      const fieldErrors = result.error.flatten().fieldErrors;
      return new Response(
        JSON.stringify({
          success: false,
          message: "Datos del formulario no válidos.",
          errors: fieldErrors,
        }),
        { status: 422, headers: { "Content-Type": "application/json" } }
      );
    }

    const data = result.data;

    // 4. Honeypot check: Si hay texto en este campo oculto, simulamos éxito para despistar al bot sin enviar correo.
    if (data.honeypot && data.honeypot.trim() !== "") {
      console.warn("[Anti-Spam] Envío bloqueado por Honeypot.");
      return new Response(
        JSON.stringify({
          success: true,
          message: siteConfig.form.messages.success,
        }),
        { status: 200, headers: { "Content-Type": "application/json" } }
      );
    }

    // 5. Inicializar cliente Resend con la key del runtime de Cloudflare o .env
    // En Astro con adaptador Cloudflare, locals.runtime.env contiene las variables del Worker
    const runtime = (locals as { runtime?: { env?: Record<string, string> } })?.runtime;
    const cloudflareEnv = runtime?.env;
    const resendApiKey = cloudflareEnv?.RESEND_API_KEY;
    
    const resend = getResendClient(resendApiKey);

    // 6. Preparar contenido del correo en HTML con diseño premium e inline styles
    const htmlContent = `
      <!DOCTYPE html>
      <html lang="es">
      <head>
        <meta charset="utf-8">
        <style>
          body {
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
            color: #1e293b;
            line-height: 1.6;
            margin: 0;
            padding: 20px;
            background-color: #f8fafc;
          }
          .container {
            max-width: 600px;
            margin: 0 auto;
            background: #ffffff;
            border: 1px solid #e2e8f0;
            border-radius: 12px;
            overflow: hidden;
            box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.05);
          }
          .header {
            background-color: #0f172a;
            padding: 24px;
            color: #ffffff;
            text-align: center;
          }
          .header h2 {
            margin: 0;
            font-size: 20px;
            font-weight: 600;
            letter-spacing: -0.025em;
          }
          .header p {
            margin: 4px 0 0 0;
            font-size: 13px;
            color: #94a3b8;
          }
          .content {
            padding: 32px;
          }
          .field {
            margin-bottom: 24px;
            border-bottom: 1px solid #f1f5f9;
            padding-bottom: 16px;
          }
          .field:last-child {
            margin-bottom: 0;
            border-bottom: none;
            padding-bottom: 0;
          }
          .label {
            font-weight: 600;
            color: #475569;
            font-size: 12px;
            text-transform: uppercase;
            letter-spacing: 0.05em;
          }
          .value {
            font-size: 15px;
            margin-top: 6px;
            color: #0f172a;
            white-space: pre-wrap;
          }
          .value a {
            color: #2563eb;
            text-decoration: none;
          }
          .value a:hover {
            text-decoration: underline;
          }
          .footer {
            background-color: #f8fafc;
            font-size: 11px;
            color: #64748b;
            text-align: center;
            padding: 20px;
            border-top: 1px solid #e2e8f0;
          }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h2>Nuevo Lead de Contacto Web</h2>
            <p>Formulario enviado desde el sitio de ${businessInfo.brand.name}</p>
          </div>
          <div class="content">
            <div class="field">
              <div class="label">Nombre del Remitente:</div>
              <div class="value">${data.name}</div>
            </div>
            <div class="field">
              <div class="label">Correo Electrónico:</div>
              <div class="value"><a href="mailto:${data.email}">${data.email}</a></div>
            </div>
            ${data.company ? `
            <div class="field">
              <div class="label">Empresa / Razón Social:</div>
              <div class="value">${data.company}</div>
            </div>
            ` : ""}
            ${data.phone ? `
            <div class="field">
              <div class="label">Teléfono de Contacto:</div>
              <div class="value"><a href="tel:${data.phone}">${data.phone}</a></div>
            </div>
            ` : ""}
            <div class="field">
              <div class="label">Asunto:</div>
              <div class="value">${data.subject}</div>
            </div>
            <div class="field">
              <div class="label">Mensaje:</div>
              <div class="value">${data.message}</div>
            </div>
          </div>
          <div class="footer">
            Mensaje procesado automáticamente para ${businessInfo.brand.legalName} (RUT: ${businessInfo.brand.rut}).<br>
            Desplegado con Oxen Start en Cloudflare Workers.
          </div>
        </div>
      </body>
      </html>
    `;

    // 7. Enviar correo vía Resend
    const { error: resendError } = await resend.emails.send({
      from: siteConfig.form.from,
      to: [businessInfo.contact.formDestinationEmail],
      replyTo: data.email,
      subject: `${siteConfig.form.subjectPrefix}${data.subject} - De: ${data.name}`,
      html: htmlContent,
    });

    if (resendError) {
      console.error("[Resend Error] Detalles del error:", resendError);
      return new Response(
        JSON.stringify({
          success: false,
          message: siteConfig.form.messages.error,
          error: resendError.message,
        }),
        { status: 502, headers: { "Content-Type": "application/json" } }
      );
    }

    // 8. Respuesta de éxito
    return new Response(
      JSON.stringify({
        success: true,
        message: siteConfig.form.messages.success,
      }),
      { status: 200, headers: { "Content-Type": "application/json" } }
    );
  } catch (error: unknown) {
    const err = error instanceof Error ? error : new Error(String(error));
    console.error("[API Contact Error] Excepción capturada:", err);
    return new Response(
      JSON.stringify({
        success: false,
        message: "Ocurrió un error inesperado al procesar tu solicitud.",
        error: err.message,
      }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }
};
