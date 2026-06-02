import { Resend } from "resend";

/**
 * Obtiene una instancia tipada del cliente de Resend.
 * Soporta la lectura tanto de variables locales (dev) como del runtime de Cloudflare Workers.
 * 
 * @param envApiKey Clave opcional pasada directamente desde el runtime de Cloudflare Workers.
 * @returns Instancia de Resend configurada.
 */
export function getResendClient(envApiKey?: string): Resend {
  const apiKey = envApiKey || import.meta.env.RESEND_API_KEY;
  
  if (!apiKey) {
    throw new Error("RESEND_API_KEY no está configurada. Por favor, revísalo en tu archivo .env o en el panel de Cloudflare Pages.");
  }

  return new Resend(apiKey);
}
