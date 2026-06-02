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
    servicesList: { title: string; desc: string }[];
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
    quickLinks: string;
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
      trustedMovement: "SERVICIOS Y MONTAJES OLEOHIDRÁULICOS",
      tagline: "Especialistas en el campo de la oleohidráulica, mantención de componentes y montajes para instalaciones móviles e industriales.",
      titlePart1: "Servicios &",
      titlePart2: "Montajes",
      titleOutline: "Oleohidráulicos",
      desc: "Proveemos soluciones reales, rápidas y a costos razonables para la mantención, reparación y fabricación de equipos oleohidráulicos.",
      getStarted: "Solicitar Cotización",
    },
    about: {
      label: "ACERCA DE NOSOTROS",
      title: "Somos una empresa regional con años de trayectoria y experiencia aplicada en el campo de la oleohidráulica.",
      desc: "La fidelidad de nuestros clientes nos confirma el rumbo que día a día recorremos para entregar un mejor servicio en cada proyecto, comprendiendo sus necesidades con costos razonables, rapidez y soluciones reales.",
      stat1Num: "100%",
      stat1Desc: "Compromiso con la confiabilidad de sus equipos",
      stat2Num: "Norma ISO",
      stat2Desc: "Limpieza certificada de fluidos hidráulicos",
      visionTitle: "Nuestro Rumbo",
      visionHeading: "Calidad y rapidez de respuesta",
      visionDesc: "Entregar servicios de excelencia en oleohidráulica y montajes industriales, apoyándonos en herramientas e instrumentos de última tecnología para garantizar la máxima eficiencia operacional.",
      missionTitle: "Nuestro Compromiso",
      missionHeading: "Soluciones reales y confiables",
      missionDesc: "Prestar servicios fiables de mantenimiento y reparación, utilizando instrumentación avanzada como contadores de partículas láser y flujómetros en línea para certificar el rendimiento de cada componente.",
    },
    gallery: {
      label: "NUESTRAS OBRAS",
      slides: [
        {
          title: "Reparación y Mantención",
          desc: "Intervención y restauración de componentes oleohidráulicos dañados.",
        },
        {
          title: "Montajes Oleohidráulicos",
          desc: "Instalación de líneas de conducción rígida en acero carbono e inoxidable.",
        },
        {
          title: "Fabricación de Equipos",
          desc: "Construcción de centrales hidráulicas y equipos de microfiltrado.",
        },
        {
          title: "Análisis de Fluidos",
          desc: "Conteo de partículas láser certificado bajo norma ISO 4406/99.",
        },
        {
          title: "Limpieza por Flushing",
          desc: "Limpieza interna de conductos con flujo turbulento.",
        },
        {
          title: "Componentes y Repuestos",
          desc: "Importación de componentes especializados y venta de repuestos.",
        },
      ],
    },
    services: {
      label: "SERVICIOS",
      titlePart1: "Nuestra Oferta de Servicios",
      titlePart2: "y Soluciones Oleohidráulicas",
      servicesList: [
        {
          title: "Reparación y Mantención de Componentes",
          desc: "Restauramos componentes dañados y aplicamos mantenciones preventivas estratégicas, sugiriendo mejoras de diseño para evitar fallas recurrentes. Contamos con instrumentos de última tecnología para evaluar el desgaste y la contaminación del fluido, permitiéndole programar detenciones preventivas y evitar fallas catastróficas que pongan en riesgo su continuidad operacional y rentabilidad."
        },
        {
          title: "Montajes Oleohidráulicos de Piping Rígido",
          desc: "Diseñamos y ejecutamos el montaje de líneas de conducción rígida en acero carbono e inoxidable bajo normas internacionales (ISO 8434-1 y SAE J514) para equipos móviles e industriales. Garantizamos la pureza del sistema mediante flushing con flujo turbulento y un proceso de microfiltrado certificado con conteo láser (norma ISO 4406/99), protegiendo sus componentes desde el primer día."
        },
        {
          title: "Construcción y Modificación de Equipos",
          desc: "Diseñamos y fabricamos equipos hidráulicos a medida con tecnología innovadora: desde unidades de prueba de cilindros y tableros de control de válvulas, hasta sistemas de filtrado de alta/baja viscosidad, unidades de trasvasije, flushing y centrales de poder APU. Además, realizamos modificaciones de ingeniería para potenciar el rendimiento y la eficiencia de su maquinaria actual."
        },
        {
          title: "Importaciones, Ventas e Ingeniería",
          desc: "Consolidamos sus requerimientos de repuestos con un servicio ágil de importación y venta de componentes oleohidráulicos de marcas globales. Nos convertimos en su socio estratégico de suministro técnico, garantizando tiempos de respuesta competitivos y asesoría de ingeniería especializada para asegurar la compatibilidad de cada pieza. ¡Compruébelo!"
        }
      ],
      viewMore: "Solicitar servicios",
    },
    team: {
      label: "EQUIPO",
      titlePart1: "Especialistas calificados en",
      titlePart2: "terreno e instrumentación",
      joinTitle: "Únete a nuestro equipo",
      joinDesc: "Buscamos técnicos especialistas en oleohidráulica y mecánicos de montaje para integrarse a nuestro equipo en Antofagasta.",
      openPositions: "Postular",
    },
    cta: {
      label: "SOLUCIONES OLEOHIDRÁULICAS",
      titlePart1: "Evite fallas catastróficas y",
      titlePart2: "pérdidas en su producción",
      desc: "Realice un diagnóstico de rendimiento volumétrico o coordine un microfiltrado para sus sistemas hidráulicos hoy mismo.",
      workTogether: "Contáctenos Ahora",
      exploreServices: "Ver Todos los Servicios",
    },
    contact: {
      label: "CONTACTO",
      titlePart1: "Hable con un",
      titlePart2: "especialista técnico",
      desc: "¿Tiene alguna consulta técnica, requiere repuestos o necesita agendar un análisis de fluidos? Escríbanos y le responderemos a la brevedad.",
      mainOffice: "Taller y Oficina",
      callSupport: "Llamar por Teléfono",
      emailUs: "Enviar Correo",
      businessHours: "Horario de Atención",
      weekday: "Lunes a Viernes",
      saturday: "",
      sunday: "",
    },
    contactForm: {
      nameLabel: "Nombre Completo",
      namePlaceholder: "ej. Juan Pérez",
      phoneLabel: "Teléfono (Opcional)",
      phonePlaceholder: "ej. +56 9 1234 5678",
      emailLabel: "Dirección de Correo",
      emailPlaceholder: "juan.perez@ejemplo.com",
      companyLabel: "Nombre de la Empresa",
      companyPlaceholder: "ej. Minera Andes S.A.",
      subjectLabel: "Asunto",
      subjectPlaceholder: "ej. Solicitud de cotización",
      messageLabel: "Mensaje",
      messagePlaceholder: "Describa el servicio, componente o consulta que necesita realizar...",
      sending: "Enviando...",
      send: "Enviar Mensaje",
      successToast: "¡Gracias por contactarnos! Mensaje recibido con éxito.",
      errorToast: "No pudimos enviar su mensaje en este momento. Por favor reinténtelo o contáctenos por WhatsApp.",
    },
    footer: {
      ctaTitle: "¿Listo para optimizar sus sistemas?",
      ctaDesc: "Agende hoy una inspección técnica o solicite una cotización de repuestos.",
      quickLinks: "Enlaces Rápidos",
      developedBy: "Desarrollado y mantenido por",
      privacy: "Política de Privacidad",
      terms: "Términos de Servicio",
      backToTop: "[ Volver Arriba ↑ ]",
    },
    seo: {
      title: "Oleomac E.I.R.L. | Servicios, Montajes y Reparaciones Oleohidráulicas en Antofagasta",
      description: "Empresa líder en el mercado oleohidráulico de Antofagasta. Reparación de componentes, montajes de piping, microfiltrado, limpieza flushing y fabricación de centrales.",
      keywords: "oleohidraulica Antofagasta, reparacion de componentes hidraulicos, montajes oleohidraulicos, piping hidraulico, microfiltrado de fluidos, flushing hidraulico, centrales hidraulicas, repuestos hidraulicos Chile",
    },
    whatsappWidget: {
      title: "WhatsApp Oleomac",
      subtitle: "Haga clic en un área para iniciar un chat con nuestros técnicos.",
      helpTooltip: "¿Necesita asistencia?",
      chatTooltip: "Chatea con nosotros",
      ariaOpen: "Abrir chat de WhatsApp",
      ariaClose: "Cerrar chat",
    },
    clientLogos: {
      label: "Empresas que confían en nosotros",
    },
    process: {
      label: "NUESTRO PROCESO",
      titlePart1: "Metodología de",
      titlePart2: "Trabajo",
      steps: [
        {
          title: "Recepción y Diagnóstico",
          desc: "Evaluamos el desgaste de componentes o la contaminación del fluido utilizando instrumentos de última generación.",
        },
        {
          title: "Propuesta Técnica",
          desc: "Diseñamos la solución óptima de reparación, montaje o fabricación con presupuestos y plazos claros.",
        },
        {
          title: "Ejecución y Filtrado",
          desc: "Realizamos el trabajo mecánico o montaje y aplicamos flushing/microfiltrado para garantizar la pureza del sistema.",
        },
        {
          title: "Certificación y Entrega",
          desc: "Certificamos la limpieza final del fluido bajo la norma ISO 4406/99 y entregamos el equipo 100% operativo.",
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
      trustedMovement: "OLEOHYDRAULIC SERVICES AND ASSEMBLY",
      tagline: "Specialists in the oleohydraulic field, component maintenance, and assembly for mobile and industrial setups.",
      titlePart1: "Services &",
      titlePart2: "Assembly",
      titleOutline: "Oleohydraulic",
      desc: "We provide real, fast, and cost-effective solutions for the maintenance, repair, and manufacturing of hydraulic equipment.",
      getStarted: "Get a Quote",
    },
    about: {
      label: "ABOUT US",
      title: "We are a regional company with years of track record and applied experience in the oleohydraulic field.",
      desc: "Our clients' loyalty confirms the direction we take every day to deliver a better service in each project, understanding their needs with reasonable costs, quick response, and real solutions.",
      stat1Num: "100%",
      stat1Desc: "Commitment to the reliability of your equipment",
      stat2Num: "ISO Standard",
      stat2Desc: "Certified cleanliness of hydraulic fluids",
      visionTitle: "Our Direction",
      visionHeading: "Quality and quick response",
      visionDesc: "To deliver excellence in oleohydraulics and industrial assembly, using cutting-edge tools and instruments to ensure maximum operational efficiency.",
      missionTitle: "Our Commitment",
      missionHeading: "Real and reliable solutions",
      missionDesc: "To provide reliable maintenance and repair services, utilizing advanced instrumentation like laser particle counters and in-line flow meters to certify the performance of each component.",
    },
    gallery: {
      label: "OUR PROJECTS",
      slides: [
        {
          title: "Repair & Maintenance",
          desc: "Intervention and restoration of damaged oleohydraulic components.",
        },
        {
          title: "Oleohydraulic Assembly",
          desc: "Installation of rigid fluid piping lines in carbon and stainless steel.",
        },
        {
          title: "Equipment Manufacturing",
          desc: "Construction of hydraulic power units (HPU) and microfiltration systems.",
        },
        {
          title: "Fluid Analysis",
          desc: "Certified laser particle counting under ISO 4406/99 standard.",
        },
        {
          title: "Flushing Services",
          desc: "Internal line cleaning with turbulent flow.",
        },
        {
          title: "Components & Spare Parts",
          desc: "Import of specialized components and sale of replacement parts.",
        },
      ],
    },
    services: {
      label: "SERVICES",
      titlePart1: "Our Service Offerings",
      titlePart2: "and Oleohydraulic Solutions",
      servicesList: [
        {
          title: "Component Repair & Maintenance",
          desc: "We restore damaged components and apply strategic preventive maintenance, recommending design upgrades to prevent recurrent issues. Equipped with state-of-the-art instruments, we evaluate wear and fluid contamination, enabling you to schedule planned shutdowns and avoid catastrophic failures that risk your operational continuity."
        },
        {
          title: "Rigid Piping Oleohydraulic Assembly",
          desc: "We specialize in the assembly of rigid piping lines in carbon and stainless steel using ISO 8434-1 and SAE J514 connection standards for mobile and industrial applications. We guarantee system purity through turbulent flushing and certified microfiltration with laser particle counting (ISO 4406/99 standard), safeguarding your components."
        },
        {
          title: "Equipment Construction & Modification",
          desc: "We manufacture custom hydraulic equipment with innovative designs, including cylinder test benches, valve actuator units, high/low viscosity filtration systems, transfer units, flushing rigs, and APU power packs. We also engineer custom modifications to maximize the performance and efficiency of your existing machinery."
        },
        {
          title: "Imports, Sales & Engineering",
          desc: "We streamline your parts procurement through agile import and sales services for global oleohydraulic brands. As your supply partner, we combine fast delivery times with specialized engineering support to guarantee perfect component compatibility. Put us to the test!"
        }
      ],
      viewMore: "Request services",
    },
    team: {
      label: "OUR TEAM",
      titlePart1: "Qualified specialists in",
      titlePart2: "the field and instrumentation",
      joinTitle: "Join our team",
      joinDesc: "We look for hydraulic technicians and assembly mechanics to join our team in Antofagasta.",
      openPositions: "Apply Now",
    },
    cta: {
      label: "OLEOHYDRAULIC SOLUTIONS",
      titlePart1: "Prevent catastrophic failures",
      titlePart2: "and production losses",
      desc: "Perform a volumetric performance diagnosis or schedule a microfiltration service for your hydraulic systems today.",
      workTogether: "Contact Us Now",
      exploreServices: "View All Services",
    },
    contact: {
      label: "CONTACT",
      titlePart1: "Talk to a",
      titlePart2: "technical specialist",
      desc: "Have a technical question, need spare parts, or want to schedule a fluid analysis? Write to us and we will reply shortly.",
      mainOffice: "Workshop & Office",
      callSupport: "Call Us",
      emailUs: "Email Us",
      businessHours: "Business Hours",
      weekday: "Monday to Friday ",
      saturday: "",
      sunday: "",
    },
    contactForm: {
      nameLabel: "Full Name",
      namePlaceholder: "e.g. John Doe",
      phoneLabel: "Phone Number (Optional)",
      phonePlaceholder: "e.g. +56 9 1234 5678",
      emailLabel: "Email Address",
      emailPlaceholder: "john.doe@example.com",
      companyLabel: "Company Name (Optional)",
      companyPlaceholder: "e.g. Minera Andes S.A.",
      subjectLabel: "Subject",
      subjectPlaceholder: "e.g. Inquiry about services",
      messageLabel: "Message",
      messagePlaceholder: "Describe in detail what services, components or solutions you are looking for...",
      sending: "Sending...",
      send: "Send Message",
      successToast: "Thank you for contacting us! Your message has been received.",
      errorToast: "We couldn't send your message right now. Please try again or reach out directly.",
    },
    footer: {
      ctaTitle: "Ready to optimize your systems?",
      ctaDesc: "Schedule a technical inspection or request a spare parts quote today.",
      quickLinks: "Quick Links",
      developedBy: "Developed and maintained by",
      privacy: "Privacy Policy",
      terms: "Terms of Service",
      backToTop: "[ Back to Top ↑ ]",
    },
    seo: {
      title: "Oleomac E.I.R.L. | Oleohydraulic Services, Assembly & Repairs in Antofagasta",
      description: "Leading company in the oleohydraulic market of Antofagasta. Component repairs, piping assembly, microfiltration, flushing, and HPU manufacturing.",
      keywords: "oleohydraulics Antofagasta, hydraulic component repairs, oleohydraulic assembly, hydraulic piping, fluid microfiltration, hydraulic flushing, hydraulic power units, spare parts Chile",
    },
    whatsappWidget: {
      title: "WhatsApp Oleomac",
      subtitle: "Click an area to start a conversation with our technical team.",
      helpTooltip: "Need help?",
      chatTooltip: "Chat with us",
      ariaOpen: "Open WhatsApp chat",
      ariaClose: "Close chat",
    },
    clientLogos: {
      label: "Companies that trust us",
    },
    process: {
      label: "OUR PROCESS",
      titlePart1: "Our Work",
      titlePart2: "Methodology",
      steps: [
        {
          title: "Reception & Diagnosis",
          desc: "We evaluate component wear or fluid contamination in the field using state-of-the-art instruments.",
        },
        {
          title: "Technical Proposal",
          desc: "We design the optimal repair, assembly, or manufacturing solution with clear budgets and timelines.",
        },
        {
          title: "Execution & Filtration",
          desc: "We carry out the mechanical work or assembly and apply flushing/microfiltration to ensure system purity.",
        },
        {
          title: "Certification & Delivery",
          desc: "We certify final fluid cleanliness under ISO 4406/99 standard and deliver the fully operational equipment.",
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
