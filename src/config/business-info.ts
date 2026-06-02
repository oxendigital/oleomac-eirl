/**
 * Información comercial y de contacto específica de la pyme cliente.
 * Este archivo puede ser completado directamente por el cliente o un ejecutivo de cuentas.
 */
export interface BusinessInfo {
  /**
   * Datos de identidad corporativa y legal de la empresa.
   */
  brand: {
    /**
     * Nombre comercial o de fantasía que se muestra en el sitio.
     * @example "Kutral Climatización"
     */
    name: string;
    /**
     * Razón social completa para facturación u otros fines legales.
     * @example "Servicios de Climatización Kutral Limitada"
     */
    legalName: string;
    /**
     * Rol Único Tributario (RUT) de la empresa.
     * @example "76.543.210-K"
     */
    rut: string;
    /**
     * Eslogan o frase corta descriptiva.
     * @example "Calidez y confort en el norte de Chile"
     */
    tagline: string;
    /**
     * Explicación detallada de la propuesta de valor del negocio.
     * @example "Somos una empresa antofagastina especializada en el diseño, instalación y mantenimiento de sistemas de aire acondicionado y calefacción para hogares, oficinas y sector industrial."
     */
    description: string;
    /**
     * Descripción corta del negocio para mostrar en resúmenes o enlaces.
     * @example "Calidez y confort en el norte de Chile"
     */
    shortDescription: string;
  };

  /**
   * Información de contacto directo con el negocio.
   */
  contact: {
    /**
     * Correo electrónico público de contacto.
     * @example "contacto@kutral.cl"
     */
    email: string;
    /**
     * Teléfono de contacto formateado para mostrar al usuario.
     * @example "+56 9 8765 4321"
     */
    phone: string;
    /**
     * Teléfono móvil en formato internacional (sin espacios) exclusivo para WhatsApp.
     * Debe seguir el formato exacto para la API de WhatsApp Link.
     * @example "+56987654321"
     */
    whatsapp: string;
    /**
     * Mensaje predeterminado que se abrirá en la conversación de WhatsApp al pulsar el botón flotante.
     * @example "Hola Kutral, me gustaría solicitar una cotización para aire acondicionado."
     */
    whatsappMessage: string;
    /**
     * Dirección de correo de destino donde Resend enviará los leads recogidos por el formulario.
     * Este correo puede ser diferente del email público del cliente.
     * @example "ventas.kutral@gmail.com"
     */
    formDestinationEmail: string;
  };

  /**
   * Detalles de ubicación física del establecimiento.
   */
  location: {
    /**
     * Dirección completa (calle y número).
     * @example "Av. Grecia 1450, Oficina 402"
     */
    address: string;
    /**
     * Ciudad o comuna.
     * @example "Antofagasta"
     */
    city: string;
    /**
     * Región chilena correspondiente.
     * @example "Región de Antofagasta"
     */
    region: string;
    /**
     * URL completa generada por Google Maps (dentro del parámetro src del iframe) para mostrar la ubicación.
     * @example "https://www.google.com/maps/embed?pb=..."
     */
    mapEmbedUrl?: string;
    /**
     * Enlace de redirección externa hacia Google Maps para navegación directa.
     * @example "https://maps.app.goo.gl/..."
     */
    mapDirectionsUrl?: string;
  };

  /**
   * Horarios de atención estructurados por día de la semana.
   */
  hours: {
    /**
     * Horario regular de Lunes a Viernes.
     * @example "Lunes a Viernes de 09:00 a 18:30"
     */
    weekday: string;
    /**
     * Horario regular de Sábados.
     * @example "Sábados de 09:00 a 14:00"
     */
    saturday?: string;
    /**
     * Horario de Domingos y festivos.
     * @example "Cerrado"
     */
    sunday?: string;
  };

  /**
   * Enlaces directos a perfiles oficiales en redes sociales (todos opcionales).
   */
  socials?: {
    /** Enlace al perfil de Instagram. */
    instagram?: string;
    /** Enlace a la página de Facebook. */
    facebook?: string;
    /** Enlace al perfil de LinkedIn. */
    linkedin?: string;
    /** Enlace al canal de YouTube. */
    youtube?: string;
    /** Enlace a la cuenta de TikTok. */
    tiktok?: string;
  };

  /**
   * Opcional: Galería de imágenes y trabajos del negocio.
   * Permite al técnico parametrizar las fotos sin tocar el componente Gallery.astro.
   */
  gallery?: {
    url: string;
    title: string;
    description: string;
  }[];
  /**
   * Opcional: Miembros del equipo de la empresa.
   */
  team?: {
    name: string;
    role: string;
    email?: string;
    linkedin?: string;
    imageUrl?: string;
  }[];

  /**
   * Opcional: Empresas o clientes con los que se ha trabajado.
   * Se muestran en la franja de confianza debajo del Hero.
   * Si no se define logoUrl, se muestra el nombre en texto.
   */
  clients?: {
    name: string;
    logoUrl?: string;
    url?: string;
  }[];

  /**
   * Opcional: Testimonios de clientes para la sección de prueba social.
   * Se muestra la sección solo si hay al menos un testimonio.
   */
  testimonials?: {
    quote: string;
    name: string;
    role: string;
    company: string;
    imageUrl?: string;
  }[];

  /**
   * Opcional: Certificaciones, acreditaciones o membresías del negocio.
   * Se muestran como badges en la sección About.
   */
  certifications?: {
    name: string;
    issuer?: string;
  }[];

  /**
   * Opcional: Contactos para el widget flotante de WhatsApp.
   * Permite definir múltiples agentes o áreas (ventas, soporte, etc.).
   * Si está vacío o no se define, el widget usa businessInfo.contact.whatsapp como único contacto.
   */
  whatsappContacts?: {
    /** Nombre del agente o área de atención. */
    name: string;
    /** Descripción breve del rol o área (ej: "Ventas y Proyectos"). */
    department: string;
    /**
     * Número en formato internacional sin +, espacios ni guiones.
     * @example "56912345678"
     */
    phone: string;
    /** Mensaje predeterminado que se abre en el chat. */
    message?: string;
    /** URL de imagen de perfil del agente (opcional). */
    imageUrl?: string;
  }[];

  /**
   * Opcional: ¿Está la empresa buscando reclutar personal activamente?
   * Si es true, muestra la tarjeta de "Trabaja con nosotros" en la sección de equipo.
   */
  hiring?: boolean;

  /**
   * Datos opcionales para SEO avanzado y AEO (Answer Engine Optimization).
   * Se inyectan en el schema.org JSON-LD del layout base.
   */
  seo?: {
    /**
     * Coordenadas geográficas del establecimiento principal.
     * Mejoran el posicionamiento local y el schema LocalBusiness.
     * @example { latitude: -33.4979, longitude: -70.6145 }
     */
    geo?: { latitude: number; longitude: number };
    /**
     * Rango de precios aproximado (estilo Google Maps).
     * @example "$" | "$$" | "$$$" | "$$$$"
     */
    priceRange?: string;
    /**
     * Áreas geográficas donde opera la empresa.
     * Se incluyen en el campo areaServed del schema.
     * @example ["Santiago", "Valparaíso", "Concepción"]
     */
    areaServed?: string[];
    /**
     * Preguntas y respuestas frecuentes del negocio.
     * Se emiten como FAQPage schema (crítico para AEO/AI answer engines).
     * @example [{ question: "¿Tienen servicio a regiones?", answer: "Sí, operamos en todo Chile." }]
     */
    faq?: { question: string; answer: string }[];
  };
}

export const businessInfo: BusinessInfo = {
  brand: {
    name: "Iteloogs Servicios",
    legalName: "Iteloogs Servicios Industriales y Montajes Limitada",
    rut: "76.432.190-K",
    tagline: "Montajes Industriales, Climatización y Mantenimiento de Precisión",
    description: "Somos una empresa chilena especializada en el diseño, montaje y mantenimiento de infraestructura industrial. Con más de 12 años de trayectoria, entregamos soluciones integrales de climatización, estructuras metálicas y mantenimiento preventivo para el sector industrial, comercial y minero a lo largo de Chile.",
    shortDescription: "Somos una empresa chilena especializada en el diseño, montaje y mantenimiento de infraestructura industrial."
  },
  contact: {
    email: "contacto@iteloogs.cl",
    phone: "+56 2 2987 6543",
    whatsapp: "+56987654321",
    whatsappMessage: "Hola Iteloogs, quisiera solicitar una cotización para un proyecto de montaje o mantenimiento industrial.",
    formDestinationEmail: "proyectos@iteloogs.cl",
  },
  location: {
    address: "Av. Las Industrias 4850, Bodega 12",
    city: "San Joaquín, Santiago",
    region: "Región Metropolitana",
    mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3326.852179836561!2d-70.6253457!3d-33.5002014!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9662dae89456bbd9%3A0x6b4458f2762e5b8e!2sSan%20Joaqu%C3%ADn%2C%20Regi%C3%B3n%20Metropolitana!5e0!3m2!1ses!2scl!4v1717085000000!5m2!1ses!2scl",
    mapDirectionsUrl: "https://maps.app.goo.gl/Santiago",
  },
  hours: {
    weekday: "Lunes a Viernes de 08:30 a 18:00",
    saturday: "Sábados de 09:00 a 13:00",
    sunday: "Cerrado",
  },
  socials: {
    linkedin: "https://linkedin.com/company/iteloogs-servicios",
    instagram: "https://instagram.com/iteloogs",
    facebook: "https://facebook.com/iteloogs",
  },
  clients: [
    { name: "Minera del Pacífico" },
    { name: "Industrias Alimentarias del Sur" },
    { name: "Grupo Logístico Andino" },
    { name: "Constructora Vial Norte" },
    { name: "Plásticos Meridional" },
  ],
  testimonials: [
    {
      quote: "Iteloogs ejecutó el montaje de nuestra nueva línea de producción dentro del plazo comprometido y con un estándar de seguridad impecable. Altamente recomendados para proyectos críticos.",
      name: "Roberto Fuentes",
      role: "Gerente de Operaciones",
      company: "Minera del Pacífico S.A.",
    },
    {
      quote: "Llevamos 3 años trabajando con ellos en el mantenimiento preventivo de nuestros equipos HVAC. Cero fallas no programadas desde que iniciamos el contrato. Excelente equipo técnico.",
      name: "Claudia Reyes",
      role: "Jefa de Planta",
      company: "Industrias Alimentarias del Sur",
    },
    {
      quote: "Resolvieron en menos de 48 horas una falla crítica en nuestra sala de servidores que nos tenía al borde de detener la producción. Respuesta rápida y profesionalismo total.",
      name: "Andrés Muñoz",
      role: "Director de Infraestructura",
      company: "Grupo Logístico Andino",
    },
  ],
  certifications: [
    { name: "ISO 9001:2015", issuer: "Bureau Veritas" },
    { name: "OHSAS 18001", issuer: "Mutual de Seguridad" },
    { name: "Empresa Socia", issuer: "ACHS" },
  ],
  hiring: false,
  whatsappContacts: [
    {
      name: "Iteloogs Servicios",
      department: "Proyectos y Cotizaciones",
      phone: "56987654321",
      message: "Hola Iteloogs, quisiera solicitar una cotización para un proyecto de montaje o mantenimiento industrial.",
    },
  ],
  seo: {
    geo: { latitude: -33.4979, longitude: -70.6145 },
    priceRange: "$$",
    areaServed: ["Santiago", "Valparaíso", "Concepción", "Antofagasta", "Chile"],
    faq: [
      {
        question: "¿En qué regiones de Chile operan?",
        answer: "Operamos en todo Chile con base principal en la Región Metropolitana (Santiago). Desarrollamos proyectos en minería en el norte, industrias en la RM y Biobío, y atendemos otras regiones según requerimiento.",
      },
      {
        question: "¿Qué tipo de proyectos de montaje realizan?",
        answer: "Realizamos montaje de estructuras metálicas, tuberías industriales, equipos HVAC, sistemas de ventilación mecánica y redes de fluidos para plantas industriales, mineras y comerciales en Chile.",
      },
      {
        question: "¿Ofrecen mantenimiento preventivo y correctivo?",
        answer: "Sí. Contamos con equipos técnicos para mantenimiento preventivo programado y mantenimiento correctivo de emergencia de sistemas de climatización HVAC e infraestructura industrial.",
      },
      {
        question: "¿Trabajan con empresas medianas y grandes?",
        answer: "Trabajamos principalmente con pymes industriales, empresas constructoras, empresas mineras y corporaciones que requieren soporte técnico especializado en montaje y mantenimiento de instalaciones.",
      },
    ],
  },
};
