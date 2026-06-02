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
     * URL del sitio web de la empresa.
     * @example "https://kutral.cl"
     */
    url: string;
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

import logo from "@/public/oleomac.svg"

export const businessInfo: BusinessInfo = {
  brand: {
    url: logo.src,
    name: "Oleomac",
    legalName: "Oleomac E.I.R.L.",
    rut: "00.000.000-0",
    tagline: "Servicios y Montajes Oleohidráulicos de Precisión",
    description: "Somos una empresa regional con años de trayectoria en el mercado oleohidráulico. Nos especializamos en la reparación y mantención de componentes, montajes oleohidráulicos, y la construcción y modificación de equipos con diseños innovadores para entregar soluciones rápidas, reales y a costos razonables.",
    shortDescription: "Empresa regional especializada en servicios, mantención, montajes y construcción de equipos oleohidráulicos."
  },
  contact: {
    email: "vosses@oleomac-anf.cl",
    phone: "+56 9 8449 1811",
    whatsapp: "+56984491811",
    whatsappMessage: "Hola Oleomac, quisiera solicitar una cotización para un proyecto o servicio oleohidráulico.",
    formDestinationEmail: "vosses@oleomac-anf.cl",
  },
  location: {
    address: "Avenida Radomiro Tomic 7793",
    city: "Antofagasta",
    region: "Región de Antofagasta",
    mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.3481491745423!2d-70.38827372481617!3d-23.59182397877995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x96afd5697d27e997%3A0x44613bb47432eb67!2sAv.%20Radomiro%20Tomic%207793%2C%20Antofagasta!5e0!3m2!1ses!2scl!4v1717085000000!5m2!1ses!2scl",
    mapDirectionsUrl: "https://maps.google.com/?q=Avenida+Radomiro+Tomic+7793,+Antofagasta",
  },
  hours: {
    weekday: "08:00 - 17:00",
  },
  socials: {
    instagram: "https://www.instagram.com/oleo_mac2026/"
  },
  clients: [],
  testimonials: [],
  certifications: [
    { name: "Norma ISO 4406/99", issuer: "Certificación de Limpieza de Fluidos" },
    { name: "ISO 8434-1 / SAE J514", issuer: "Sistemas de Montaje de Piping" }
  ],
  gallery: [
    {
      url: "/assets-oleomac/img1.avif",
      title: "Reparación y Mantención",
      description: "Intervención de componentes dañados y mantenciones preventivas."
    },
    {
      url: "/assets-oleomac/img2.avif",
      title: "Montajes Oleohidráulicos",
      description: "Montaje de líneas de conducción rígida en acero carbono e inoxidable."
    },
    {
      url: "/assets-oleomac/img3.avif",
      title: "Construcción de Equipos",
      description: "Fabricación de centrales hidráulicas y unidades a la medida."
    },
    {
      url: "/assets-oleomac/img4.avif",
      title: "Análisis y Conteo Láser",
      description: "Análisis de fluidos con contador de partículas láser."
    },
    {
      url: "/assets-oleomac/img5.avif",
      title: "Limpieza por Flushing",
      description: "Limpieza interna de conductos con flujo turbulento."
    },
    {
      url: "/assets-oleomac/img6.avif",
      title: "Importación y Repuestos",
      description: "Venta de componentes oleohidráulicos y repuestos multimarca."
    },
    {
      url: "/assets-oleomac/img11.avif",
      title: "Diagnóstico Hidráulico",
      description: "Evaluación técnica de parámetros y presión de fluidos en terreno."
    },
    {
      url: "/assets-oleomac/img12.avif",
      title: "Banco de Pruebas",
      description: "Certificación de funcionamiento de cilindros y bombas hidráulicas."
    },
    {
      url: "/assets-oleomac/img13.avif",
      title: "Mangueras de Alta Presión",
      description: "Armado, prensado y testeo de conexiones oleohidráulicas."
    },
    {
      url: "/assets-oleomac/img15.avif",
      title: "Servicios en Terreno",
      description: "Asistencia, diagnóstico y mantenimiento hidráulico directo en faena."
    },
    {
      url: "/assets-oleomac/img16.avif",
      title: "Infraestructura de Taller",
      description: "Taller equipado para el desarme y reparación de grandes componentes."
    },
    {
      url: "/assets-oleomac/img17.avif",
      title: "Válvulas y Distribución",
      description: "Mantención y configuración experta de bancos de válvulas industriales."
    }
  ],
  team: [
    {
      name: "Victor Ossas",
      role: "Fundador y Jefe Operaciones",
      email: "vosses@oleomac-anf.cl"
    },
    {
      name: "Nombre Apellido",
      role: "Cargo o Rol",
      email: "vosses@oleomac-anf.cl"
    },
    {
      name: "Nombre Apellido",
      role: "Cargo o Rol",
      email: "vosses@oleomac-anf.cl"
    }
  ],
  hiring: false,
  whatsappContacts: [
    {
      name: "Oleomac Servicios",
      department: "Cotizaciones y Servicios",
      phone: "56984491811",
      message: "Hola Oleomac, quisiera solicitar una cotización para un proyecto o servicio oleohidráulico.",
    },
  ],
  seo: {
    geo: { latitude: -23.591824, longitude: -70.388274 },
    priceRange: "$$",
    areaServed: ["Antofagasta", "Calama", "Mejillones", "Tocopilla", "Región de Antofagasta", "Chile"],
    faq: [
      {
        question: "¿Qué servicios oleohidráulicos ofrecen?",
        answer: "Ofrecemos análisis de fluidos con contador de partículas láser, análisis de rendimiento volumétrico de bombas y motores, microfiltrado, limpieza flushing, montaje de piping rígido en acero carbono/inoxidable, y reparación de componentes dañados."
      },
      {
        question: "¿Qué tipo de equipos fabrican o construyen?",
        answer: "Fabricamos centrales oleohidráulicas, equipos de microfiltrado, bancos de pruebas para componentes, unidades de trasvasije y unidades auxiliares de poder (A.P.U.), adaptados a los requerimientos del cliente."
      },
      {
        question: "¿Dónde están ubicados y cuál es su horario?",
        answer: "Estamos ubicados en Avenida Radomiro Tomic 7793, Antofagasta. Atendemos de Lunes a Viernes de 08:00 a 17:00 horas."
      },
      {
        question: "¿Venden repuestos o componentes oleohidráulicos?",
        answer: "Sí, realizamos importación de componentes oleohidráulicos y venta de repuestos especializados para maquinarias móviles e industriales."
      }
    ],
  },
};
