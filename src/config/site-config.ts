/**
 * Configuración técnica y SEO global para la plantilla Oxen Start.
 * Administrado por el desarrollador/técnico que realiza el despliegue.
 */
export interface SiteConfig {
  /**
   * URL canónica del sitio web. Se utiliza para generar sitemaps y meta-tags.
   * @example "https://www.ejemplo.cl"
   */
  canonicalUrl: string;

  /**
   * Configuración de internacionalización (i18n) nativa de Astro.
   */
  i18n: {
    /**
     * El locale por defecto del sitio web.
     * @example "es-CL"
     */
    defaultLocale: string;
    /**
     * Lista de todos los locales soportados por el sitio.
     * @example ["es-CL", "en"]
     */
    locales: string[];
    /**
     * Configuración del locale fallback cuando falten traducciones.
     */
    fallback?: Record<string, string>;
  };

  /**
   * Valores por defecto para el motor de búsqueda (SEO) y redes sociales.
   */
  seo: {
    /**
     * Título por defecto de las páginas.
     * @example "Constructora El Sol | Casas a medida en Antofagasta"
     */
    defaultTitle: string;
    /**
     * Descripción por defecto de las páginas.
     * @example "Construimos la casa de tus sueños en Antofagasta. Más de 15 años de experiencia en obras civiles de calidad."
     */
    defaultDescription: string;
    /**
     * Nombre del autor o agencia desarrolladora.
     * @example "Oxen Start"
     */
    author: string;
    /**
     * Ruta o URL absoluta de la imagen Open Graph por defecto.
     * @example "/og-image.jpg"
     */
    defaultOgImage: string;
    /**
     * Tipo de sitio para Open Graph.
     * @example "website"
     */
    ogType: string;
  };

  /**
   * Configuración técnica del formulario de contacto.
   */
  form: {
    /**
     * Proveedor del servicio de envíos.
     * @example "resend"
     */
    provider: "resend";
    /**
     * Dirección de correo electrónico verificada y dedicada del dominio desde la cual se envían los correos.
     * @example "contacto@oxenmail.com"
     */
    from: string;
    /**
     * Prefijo del asunto para los correos recibidos.
     * @example "[Oxen Start - Formulario de Contacto] "
     */
    subjectPrefix: string;
    /**
     * Mensajes devueltos al cliente tras el envío.
     */
    messages: {
      /**
       * Mensaje de éxito al enviar el formulario.
       * @example "Mensaje enviado exitosamente. Nos pondremos en contacto contigo a la brevedad."
       */
      success: string;
      /**
       * Mensaje de error general en el envío.
       * @example "Hubo un error al enviar tu mensaje. Por favor, inténtalo de nuevo o contáctanos por WhatsApp."
       */
      error: string;
    };
  };

  /**
   * IDs opcionales para herramientas de analítica y marketing.
   */
  analytics?: {
    /**
     * ID de Google Analytics 4 (Measurement ID).
     * @example "G-XXXXXXXXXX"
     */
    googleAnalyticsId?: string;
    /**
     * ID del Píxel de Meta (Facebook Pixel).
     * @example "123456789012345"
     */
    metaPixelId?: string;
  };
}

export const siteConfig: SiteConfig = {
  canonicalUrl: "https://iteloogs.co",
  i18n: {
    defaultLocale: "es-CL",
    locales: ["es-CL", "en"],
  },
  seo: {
    defaultTitle: "Iteloogs | Moving Goods Smarter Across Every Destination",
    defaultDescription:
      "We are a logistics company committed to delivering speed, accuracy, and accountability across every shipment. With over a decade of expertise, we optimize global supply chains through smart, scalable, and sustainable solutions.",
    author: "Oxen Start",
    defaultOgImage: "/og-image.jpg",
    ogType: "website",
  },
  form: {
    provider: "resend",
    from: "hello@iteloogs.co",
    subjectPrefix: "[Contact Web] ",
    messages: {
      success:
        "Thank you for contacting us! Your message has been received and we will respond to you shortly.",
      error:
        "We couldn't send your message right now. Please try again or reach out directly.",
    },
  },
  analytics: {
    googleAnalyticsId: "G-DEMO123456",
    metaPixelId: "1234567890",
  },
};
