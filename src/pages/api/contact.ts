import type { APIRoute } from "astro";
import React from "react";
import { renderToStaticMarkup } from "react-dom/server";
import { ContactFormEmail } from "@/emails/contact-form";
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

    // 6. Generar contenido del correo en HTML utilizando renderToStaticMarkup
    const htmlContent = "<!DOCTYPE html>" + renderToStaticMarkup(
      React.createElement(ContactFormEmail, {
        name: data.name,
        email: data.email,
        subject: data.subject,
        message: data.message,
        phone: data.phone,
        company: data.company,
        logoUrl: `${siteConfig.canonicalUrl}/oleomac.png`,
      })
    );

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
