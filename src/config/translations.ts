export interface Translations {
  nav: {
    home: string;
    product: string;
    production: string;
    team: string; // Cambiado de testimonials a team
    contact: string;
  };
  hero: {
    trustedMovement: string;
    tagline: string;
    titlePart1: string;
    titlePart2: string;
    titleOutline: string;
    desc: string;
    getStarted: string;
  };
  about: {
    label: string;
    title: string;
    desc: string;
    stat1Num: string;
    stat1Desc: string;
    stat2Num: string;
    stat2Desc: string;
    visionTitle: string;
    visionHeading: string;
    visionDesc: string;
    missionTitle: string;
    missionHeading: string;
    missionDesc: string;
  };
  gallery: {
    label: string;
    slides: {
      title: string;
      desc: string;
    }[];
  };
  services: {
    label: string;
    titlePart1: string;
    titlePart2: string;
    servicesList: string[];
    viewMore: string;
  };
  team: {
    label: string;
    titlePart1: string;
    titlePart2: string;
    joinTitle: string;
    joinDesc: string;
    openPositions: string;
  };
  cta: {
    label: string;
    titlePart1: string;
    titlePart2: string;
    desc: string;
    workTogether: string;
    exploreServices: string;
  };
  contact: {
    label: string;
    titlePart1: string;
    titlePart2: string;
    desc: string;
    mainOffice: string;
    callSupport: string;
    emailUs: string;
    businessHours: string;
    weekday: string;
    saturday: string;
    sunday: string;
  };
  contactForm: {
    nameLabel: string;
    namePlaceholder: string;
    phoneLabel: string;
    phonePlaceholder: string;
    emailLabel: string;
    emailPlaceholder: string;
    companyLabel: string;
    companyPlaceholder: string;
    subjectLabel: string;
    subjectPlaceholder: string;
    messageLabel: string;
    messagePlaceholder: string;
    sending: string;
    send: string;
    successToast: string;
    errorToast: string;
  };
  footer: {
    ctaTitle: string;
    ctaDesc: string;
    networkStatus: string;
    quickLinks: string;
    copyright: string;
    developedBy: string;
    privacy: string;
    terms: string;
    backToTop: string;
  };
  seo: {
    /** Título completo de la página para la etiqueta <title> y og:title. */
    title: string;
    /** Meta descripción de la página (160 caracteres idealmente). */
    description: string;
    /** Palabras clave separadas por coma para la etiqueta <meta name="keywords">. */
    keywords: string;
  };
  whatsappWidget: {
    title: string;
    subtitle: string;
    helpTooltip: string;
    chatTooltip: string;
    ariaOpen: string;
    ariaClose: string;
  };
  clientLogos: {
    label: string;
  };
  process: {
    label: string;
    titlePart1: string;
    titlePart2: string;
    steps: { title: string; desc: string }[];
  };
  testimonials: {
    label: string;
    titlePart1: string;
    titlePart2: string;
  };
}

export const translations: Record<"es" | "en", Translations> = {
  es: {
    nav: {
      home: "Inicio",
      product: "Quiénes Somos",
      production: "Servicios",
      team: "Nuestro Equipo",
      contact: "Contacto",
    },
    hero: {
      trustedMovement: "SERVICIOS INDUSTRIALES Y MONTAJES",
      tagline: "Especialistas en ingeniería, climatización HVAC y mantenimiento para plantas productivas en Chile.",
      titlePart1: "Ingeniería &",
      titlePart2: "Montajes",
      titleOutline: "De Precisión",
      desc: "Proveemos soluciones integrales y soporte técnico especializado que aseguran la continuidad operacional y eficiencia de su infraestructura industrial.",
      getStarted: "Solicitar Cotización",
    },
    about: {
      label: "CONÓCENOS",
      title: "Somos un socio estratégico en ingeniería de montajes mecánicos y climatización industrial para el sector corporativo.",
      desc: "Con más de 12 años de experiencia en el mercado chileno, optimizamos instalaciones mediante proyectos a la medida, eficientes y bajo estrictas normas de seguridad laboral.",
      stat1Num: "12 AÑOS",
      stat1Desc: "De trayectoria en obras y mantenimiento industrial",
      stat2Num: "250+",
      stat2Desc: "Proyectos industriales completados exitosamente",
      visionTitle: "Nuestra Visión",
      visionHeading: "Liderando la continuidad operacional",
      visionDesc: "Ser el principal referente técnico del país en montaje industrial y climatización HVAC. Buscamos simplificar la ejecución de instalaciones complejas mediante altos estándares de calidad, seguridad y cumplimiento.",
      missionTitle: "Nuestra Misión",
      missionHeading: "Compromiso técnico en terreno",
      missionDesc: "Proporcionar soporte industrial experto a través de un equipo calificado para asegurar la productividad de nuestros clientes, creando relaciones a largo plazo basadas en la confianza.",
    },
    gallery: {
      label: "NUESTRAS OBRAS",
      slides: [
        {
          title: "Sistemas HVAC Industriales",
          desc: "Montaje y puesta en marcha de chillers de climatización.",
        },
        {
          title: "Montaje de Estructuras",
          desc: "Fabricación e izamiento de vigas y techumbre industrial.",
        },
        {
          title: "Soporte Técnico 24/7",
          desc: "Atención correctiva inmediata de sistemas térmicos críticos.",
        },
        {
          title: "Piping y Redes de Fluidos",
          desc: "Instalación de tuberías industriales para conducción de fluidos.",
        },
        {
          title: "Mantención de Plantas",
          desc: "Ejecución de pautas preventivas y paradas de planta programadas.",
        },
        {
          title: "Ingeniería Térmica",
          desc: "Diseño y cálculo de proyectos de ventilación mecánica.",
        },
      ],
    },
    services: {
      label: "SERVICIOS",
      titlePart1: "Soluciones de Ingeniería Especializada",
      titlePart2: "Para la Continuidad de su Planta",
      servicesList: [
        "Climatización Comercial e Industrial (HVAC)",
        "Montaje Mecánico y de Estructuras Metálicas",
        "Mantenimiento Industrial Preventivo y Correctivo",
        "Ingeniería de Piping y Redes de Fluidos",
      ],
      viewMore: "Ver Servicios",
    },
    team: {
      label: "NUESTRO EQUIPO",
      titlePart1: "Líderes comprometidos con la",
      titlePart2: "seguridad y excelencia",
      joinTitle: "Únete a nuestro equipo técnico",
      joinDesc: "Buscamos profesionales que valoren la disciplina, la seguridad y el crecimiento en terreno. Envíanos tus antecedentes.",
      openPositions: "Postular",
    },
    cta: {
      label: "PROYECTOS INDUSTRIALES",
      titlePart1: "Garantice la continuidad de su",
      titlePart2: "infraestructura y equipos",
      desc: "Trabajemos juntos en su próximo proyecto de montaje o planifique el mantenimiento de su planta con total cumplimiento normativo.",
      workTogether: "Comenzar Proyecto",
      exploreServices: "Ver Catálogo de Servicios",
    },
    contact: {
      label: "CONTACTO",
      titlePart1: "Póngase en contacto con",
      titlePart2: "nuestros especialistas",
      desc: "¿Tiene un requerimiento o necesita coordinar una visita técnica en terreno? Escríbanos y un ingeniero le responderá a la brevedad.",
      mainOffice: "Oficina y Talleres",
      callSupport: "Llamar a Oficina",
      emailUs: "Enviar Correo",
      businessHours: "Horario de Atención",
      weekday: "Lunes a Viernes",
      saturday: "Sábados",
      sunday: "Domingos",
    },
    contactForm: {
      nameLabel: "Nombre Completo",
      namePlaceholder: "ej. Juan Pérez",
      phoneLabel: "Teléfono (Opcional)",
      phonePlaceholder: "ej. +56 9 1234 5678",
      emailLabel: "Dirección de Correo",
      emailPlaceholder: "juan.perez@ejemplo.com",
      companyLabel: "Nombre de la Empresa",
      companyPlaceholder: "ej. Constructora Andes S.A.",
      subjectLabel: "Asunto",
      subjectPlaceholder: "ej. Consulta sobre servicios",
      messageLabel: "Mensaje",
      messagePlaceholder: "Describe en detalle qué servicios o soluciones necesitas...",
      sending: "Enviando...",
      send: "Enviar Mensaje",
      successToast: "¡Gracias por contactarnos! Mensaje recibido con éxito.",
      errorToast: "No pudimos enviar tu mensaje en este momento. Por favor reinténtalo o contáctanos.",
    },
    footer: {
      ctaTitle: "¿Listo para optimizar sus instalaciones?",
      ctaDesc: "Agende hoy una inspección técnica o solicite una cotización.",
      networkStatus: "Operaciones Activas a Nivel Nacional",
      quickLinks: "Enlaces Rápidos",
      copyright: "Todos los derechos reservados.",
      developedBy: "Desarrollado y mantenido por",
      privacy: "Política de Privacidad",
      terms: "Términos de Servicio",
      backToTop: "[ Volver Arriba ↑ ]",
    },
    seo: {
      title: "Iteloogs Servicios | Montajes Industriales, Climatización y Mantenimiento en Chile",
      description: "Empresa chilena especializada en montaje industrial, climatización HVAC y mantenimiento preventivo para plantas productivas. Más de 12 años de trayectoria en Santiago y todo Chile.",
      keywords: "montaje industrial Chile, climatización HVAC Santiago, mantenimiento industrial preventivo, estructuras metálicas, piping industrial, montaje de equipos, plantas productivas Chile",
    },
    whatsappWidget: {
      title: "Contáctanos",
      subtitle: "Selecciona el área con la que deseas comunicarte para iniciar un chat.",
      helpTooltip: "¿Necesitas ayuda?",
      chatTooltip: "Chatea con nosotros",
      ariaOpen: "Abrir chat de WhatsApp",
      ariaClose: "Cerrar chat",
    },
    clientLogos: {
      label: "Empresas que nos eligen",
    },
    process: {
      label: "PROCESO",
      titlePart1: "Cómo",
      titlePart2: "trabajamos",
      steps: [
        {
          title: "Solicitud y Diagnóstico",
          desc: "Recibimos su requerimiento y agendamos una visita técnica en terreno para evaluar el alcance real del proyecto.",
        },
        {
          title: "Propuesta Técnica",
          desc: "Elaboramos una propuesta detallada con especificaciones técnicas, plazos y presupuesto ajustado a su operación.",
        },
        {
          title: "Ejecución Certificada",
          desc: "Nuestro equipo técnico ejecuta el proyecto bajo estrictos estándares de seguridad y calidad operacional.",
        },
        {
          title: "Entrega y Soporte",
          desc: "Entregamos documentación técnica, garantía de trabajo y soporte post-entrega para su tranquilidad.",
        },
      ],
    },
    testimonials: {
      label: "TESTIMONIOS",
      titlePart1: "Lo que dicen",
      titlePart2: "nuestros clientes",
    },
  },
  en: {
    nav: {
      home: "Home",
      product: "About Us",
      production: "Services",
      team: "Our Team",
      contact: "Contact Us",
    },
    hero: {
      trustedMovement: "INDUSTRIAL SERVICES AND ASSEMBLY",
      tagline: "Specialists in engineering, commercial HVAC, and plant maintenance services in Chile.",
      titlePart1: "Engineering &",
      titlePart2: "Assembly",
      titleOutline: "Precision OPs",
      desc: "We provide comprehensive solutions and specialized technical support to ensure the operational continuity and efficiency of your industrial infrastructure.",
      getStarted: "Get a Quote",
    },
    about: {
      label: "ABOUT US",
      title: "We are a strategic partner in mechanical assembly engineering and industrial HVAC systems for the corporate sector.",
      desc: "With over 12 years of experience in the Chilean market, we optimize facilities through custom, efficient projects under strict occupational safety regulations.",
      stat1Num: "12 YRS",
      stat1Desc: "Of track record in industrial assembly and maintenance",
      stat2Num: "250+",
      stat2Desc: "Industrial projects successfully completed",
      visionTitle: "Our Vision",
      visionHeading: "Leading operational continuity",
      visionDesc: "To be the main technical reference in the country for industrial assembly and HVAC systems. We aim to simplify complex installations through high standards of quality, safety, and compliance.",
      missionTitle: "Our Mission",
      missionHeading: "Technical commitment in the field",
      missionDesc: "To provide expert industrial support through a qualified team to ensure our clients' productivity, creating long-term relationships based on trust.",
    },
    gallery: {
      label: "OUR PROJECTS",
      slides: [
        {
          title: "Industrial HVAC Systems",
          desc: "Installation and commissioning of commercial chillers.",
        },
        {
          title: "Structural Assembly",
          desc: "Fabrication and lifting of industrial steel beams.",
        },
        {
          title: "24/7 Technical Support",
          desc: "Immediate corrective action for critical thermal systems.",
        },
        {
          title: "Industrial Piping & Fluid Networks",
          desc: "Installation of fluid piping lines for processing plants.",
        },
        {
          title: "Plant Maintenance",
          desc: "Execution of preventive routines and planned plant shutdowns.",
        },
        {
          title: "Thermal Engineering",
          desc: "Design and calculations for forced ventilation systems.",
        },
      ],
    },
    services: {
      label: "SERVICES",
      titlePart1: "Specialized Engineering Solutions",
      titlePart2: "For Your Plant's Continuity",
      servicesList: [
        "Commercial & Industrial Climatization (HVAC)",
        "Mechanical & Structural Steel Assembly",
        "Preventive & Corrective Industrial Maintenance",
        "Industrial Piping & Fluid Networks",
      ],
      viewMore: "View Services",
    },
    team: {
      label: "OUR TEAM",
      titlePart1: "Leaders committed to safety",
      titlePart2: "and engineering excellence",
      joinTitle: "Join our technical team",
      joinDesc: "We look for professionals who value discipline, work safety, and field growth. Send us your resume.",
      openPositions: "Apply Now",
    },
    cta: {
      label: "INDUSTRIAL PROJECTS",
      titlePart1: "Ensure the continuity of your",
      titlePart2: "infrastructure and equipment",
      desc: "Let's work together on your next structural project or plan your plant's critical maintenance with full regulatory compliance.",
      workTogether: "Start Project",
      exploreServices: "View Catalog",
    },
    contact: {
      label: "CONTACT",
      titlePart1: "Get in touch with",
      titlePart2: "our specialists",
      desc: "Do you have a project requirement or need to schedule a technical field visit? Write to us and a specialist engineer will reply shortly.",
      mainOffice: "Office & Workshops",
      callSupport: "Office Call",
      emailUs: "Email Us",
      businessHours: "Business Hours",
      weekday: "Monday - Friday",
      saturday: "Saturdays",
      sunday: "Sundays",
    },
    contactForm: {
      nameLabel: "Full Name",
      namePlaceholder: "e.g. John Doe",
      phoneLabel: "Phone Number (Optional)",
      phonePlaceholder: "e.g. +56 9 1234 5678",
      emailLabel: "Email Address",
      emailPlaceholder: "john.doe@example.com",
      companyLabel: "Company Name (Optional)",
      companyPlaceholder: "e.g. Acme Corporation",
      subjectLabel: "Subject",
      subjectPlaceholder: "e.g. Inquiry about services",
      messageLabel: "Message",
      messagePlaceholder: "Describe in detail what services or solutions you are looking for...",
      sending: "Sending...",
      send: "Send Message",
      successToast: "Thank you for contacting us! Your message has been received.",
      errorToast: "We couldn't send your message right now. Please try again or reach out directly.",
    },
    footer: {
      ctaTitle: "Ready to optimize your facilities?",
      ctaDesc: "Schedule a technical inspection or request a quote today.",
      networkStatus: "Active Operations Nationwide",
      quickLinks: "Quick Links",
      copyright: "All rights reserved.",
      developedBy: "Developed and maintained by",
      privacy: "Privacy Policy",
      terms: "Terms of Service",
      backToTop: "[ Back to Top ↑ ]",
    },
    seo: {
      title: "Iteloogs Services | Industrial Assembly, HVAC & Precision Maintenance in Chile",
      description: "Chilean company specialized in industrial assembly, commercial HVAC systems, and preventive maintenance for manufacturing plants. 12+ years serving Santiago and all of Chile.",
      keywords: "industrial assembly Chile, HVAC systems Santiago, preventive industrial maintenance, structural steel, industrial piping, equipment installation, manufacturing plants Chile",
    },
    whatsappWidget: {
      title: "Contact Us",
      subtitle: "Select the area you want to chat with to start a conversation.",
      helpTooltip: "Need help?",
      chatTooltip: "Chat with us",
      ariaOpen: "Open WhatsApp chat",
      ariaClose: "Close chat",
    },
    clientLogos: {
      label: "Companies that choose us",
    },
    process: {
      label: "PROCESS",
      titlePart1: "How we",
      titlePart2: "work",
      steps: [
        {
          title: "Request & Assessment",
          desc: "We receive your requirements and schedule a technical site visit to evaluate the real scope of the project.",
        },
        {
          title: "Technical Proposal",
          desc: "We prepare a detailed proposal with technical specifications, timelines, and budget tailored to your operation.",
        },
        {
          title: "Certified Execution",
          desc: "Our technical team executes the project under strict safety and operational quality standards.",
        },
        {
          title: "Delivery & Support",
          desc: "We provide technical documentation, workmanship warranty, and post-delivery support for your peace of mind.",
        },
      ],
    },
    testimonials: {
      label: "TESTIMONIALS",
      titlePart1: "What our",
      titlePart2: "clients say",
    },
  },
};
