# Oxen Start

Template de sitio web corporativo de alto rendimiento para PYMEs B2B chilenas. Pensado para desplegarse rápido, personalizarse desde archivos de configuración centralizados, y escalar de forma 100% gratuita.

El sitio web está compilado de forma **100% estática (Astro 6 en modo static)** y desplegado en Cloudflare Pages, lo que garantiza **costo $0, ancho de banda ilimitado y cero consumo de minutos de procesamiento de Workers por visitas**. El procesamiento dinámico del formulario de contacto se delega de forma externa y segura a una API centralizada en Cloudflare Workers (`oxen-forms-api`).

---

## Stack

| Capa | Tecnología | Características |
|---|---|---|
| Framework | Astro 6 (Estático Puro) | Cero ejecución de JS en servidor durante visitas ordinarias. |
| UI | React 19 + shadcn/ui (Tailwind v4) | Carga reactiva de componentes dinámicos en el cliente. |
| Deploy | Cloudflare Pages (Assets Estáticos) | Hosting gratis, ilimitado, veloz y seguro a través de CDN. |
| Formulario | React Hook Form + Zod + API Externa | Validación local y envío AJAX seguro a la API de la agencia. |
| Estilos | Tailwind v4 con variables CSS | Fácil personalización de marca a través de CSS nativo. |
| i18n | Astro i18n nativo (ES-CL + EN) | Soporte multiidioma basado en carpetas y routing estático. |
| SEO/AEO | Schema.org @graph | JSON-LD para LocalBusiness, WebSite y FAQPage (motores IA). |

---

## Estructura del proyecto

```
src/
├── config/
│   ├── business-info.ts   ← Datos públicos del cliente (RUT, WhatsApp, dirección)
│   ├── site-config.ts     ← URL canónica, i18n, analytics
│   └── translations.ts    ← Textos por idioma (contenido + SEO)
│
├── layouts/
│   └── base-layout.astro  ← Estructura HTML común, SEO, Schema.org, analytics
│
├── pages/
│   ├── index.astro        ← Página principal (ES-CL)
│   ├── 404.astro          ← Error 404 estático
│   └── en/
│       ├── index.astro    ← Página principal (EN)
│       └── 404.astro      ← Error 404 (EN)
│
├── components/
│   ├── sections/          ← Secciones de la landing
│   │   ├── navbar.astro
│   │   ├── hero.astro
│   │   ├── client-logos.astro
│   │   ├── about.astro
│   │   ├── process.astro
│   │   ├── services.astro
│   │   ├── gallery.astro
│   │   ├── testimonials.astro
│   │   ├── team.astro
│   │   ├── cta.astro
│   │   └── footer.astro
│   ├── forms/
│   │   └── contact-form.tsx  ← Formulario React que envía el post a la API externa
│   └── whatsapp-widget.tsx
│
└── styles/global.css      ← Variables de tema (colores de la marca)
```

---

## Checklist de onboarding para un nuevo cliente

### 1. Clonar e instalar dependencias

```bash
git clone <url-repo> nombre-cliente
cd nombre-cliente
pnpm install
```

### 2. Configurar los datos de la empresa — `src/config/business-info.ts`

Completa la información pública del negocio. El sitio web se inyectará de estos datos dinámicamente y generará el marcado enriquecido de Google (Schema.org).

| Campo | Descripción | Ejemplo |
|---|---|---|
| `brand.name` | Nombre comercial | `"Kutral Climatización"` |
| `brand.legalName` | Razón social | `"Kutral Ltda."` |
| `brand.rut` | RUT empresa | `"76.543.210-K"` |
| `brand.tagline` | Eslogan corto | `"Calidez en el norte"` |
| `contact.email` | Email público mostrado en la web | `"contacto@kutral.cl"` |
| `contact.phone` | Teléfono formateado visible | `"+56 9 8765 4321"` |
| `contact.whatsapp` | WhatsApp internacional | `"+56987654321"` |
| `location.address` | Dirección física | `"Av. Grecia 1450, Of. 402"` |
| `location.city` | Ciudad o comuna | `"Antofagasta"` |
| `location.region` | Región | `"Región de Antofagasta"` |

*Nota: Los campos opcionales como `location.mapEmbedUrl`, `clients[]`, `testimonials[]` y `certifications[]` activan o desactivan secciones de la landing de manera automática.*

### 3. Configuración del Sitio y Dominio — `src/config/site-config.ts`

Configura la URL definitiva del proyecto (canónica) y los idiomas activos.

```ts
export const siteConfig: SiteConfig = {
  canonicalUrl: "https://www.nombrecliente.cl",  // URL de producción del cliente
  i18n: {
    defaultLocale: "es-CL",
    locales: ["es-CL", "en"], // Mantener solo los idiomas requeridos
  },
  analytics: {
    googleAnalyticsId: "G-XXXXXXXXXX",  // Dejar vacío si no se usa
    metaPixelId: "",
  },
}
```

### 4. Textos de la Web y Metadatos de SEO — `src/config/translations.ts`

Actualiza los textos de cada sección y el SEO (título, descripción y keywords del buscador) por cada idioma activo.

### 5. Configurar el nombre del proyecto estático — `wrangler.jsonc`

Modifica el identificador del proyecto estático en el archivo de la raíz:

```json
{
  "name": "nombre-cliente-estatico",
  "assets": {
    "directory": "./dist",
    "not_found_handling": "404-page"
  }
}
```

---

## Integración de Formularios de Contacto (Seguro y Reutilizable)

El formulario de contacto de este proyecto se comunica de forma segura mediante HTTPS POST con la API centralizada de la agencia (`oxen-forms-api`), alojada de forma independiente en Cloudflare Workers.

### Configuración del Frontend:
1. En [src/components/forms/contact-form.tsx](file:///home/melendezdev/Dev/personal/oleomac-eirl/src/components/forms/contact-form.tsx#L50) se envía la propiedad `clientId: "oleomac"` (o el identificador correspondiente de tu nuevo cliente).
2. Durante el desarrollo local, si no se detecta la variable `PUBLIC_CONTACT_API_URL`, el frontend intentará llamar a `/api/contact` como fallback.
3. En producción, el formulario apuntará a la URL de tu API centralizada cargada desde la variable de compilación.

> [!NOTE]
> **¿Cómo funciona esto para futuros clientes? (Escalabilidad de Onboarding)**
> No necesitas crear ni configurar una API de correo para cada nuevo sitio. La API es única y centralizada:
> 1. **En la API centralizada (`oxen-forms-api`):** Agrega la configuración del cliente (su correo destino, logo, color corporativo y dominio CORS autorizado) en `clients.ts` y redespliega el Worker (1 minuto).
> 2. **En el frontend de este repositorio:** Cambia la propiedad `clientId` en el componente `contact-form.tsx` por el nuevo identificador creado (ej: `"kutral"`).
> 3. **En GitHub:** Crea el repositorio del cliente y en sus secretos añade las 3 variables. El `ACCOUNT_ID`, `API_TOKEN` y la `PUBLIC_CONTACT_API_URL` serán exactamente los mismos para todas las webs de tus clientes, facilitando una configuración en serie.

---

## Flujo de Despliegue Automatizado (CI/CD) sin Costos

Para evitar consumir la cuota de **500 builds al mes gratis** de Cloudflare Pages, el proyecto incluye un flujo de automatización con **GitHub Actions** en `.github/workflows/deploy.yml`. Las compilaciones se realizan en GitHub y el resultado compilado se publica directo a Cloudflare en segundos.

### Configuración en el Repositorio de GitHub:
Antes de realizar tu primer `git push`, ve a **Settings > Secrets and variables > Actions > Secrets** en el repositorio del cliente e ingresa los siguientes secretos:

1. **`CLOUDFLARE_ACCOUNT_ID`:** El ID de tu cuenta de Cloudflare (se obtiene en la sección Workers & Pages de tu panel de Cloudflare).
2. **`CLOUDFLARE_API_TOKEN`:** Un token de acceso de Cloudflare creado con permisos para editar proyectos de Cloudflare Pages (se obtiene en *My Profile > API Tokens > API Tokens* en Cloudflare).
3. **`PUBLIC_CONTACT_API_URL`:** La URL de producción de tu API de formularios centralizada (ej. `https://oxen-forms-api.tu-subdominio.workers.dev`). Esta variable se inyecta en el build estático para que el formulario sepa a dónde enviar los datos.

Una vez configurados los secretos, cada cambio que subas a la rama `main` compilará y se desplegará de forma 100% automatizada e ilimitada.

---

## Personalización del Tema de Colores

Para cambiar la paleta de colores del cliente no necesitas tocar componentes. Edita las variables CSS semánticas en `src/styles/global.css`:

```css
:root {
  --background: oklch(1 0 0);           /* Fondo general (blanco) */
  --foreground: oklch(0.145 0 0);       /* Texto principal */
  --primary: oklch(0.645 0.246 85.08);   /* Naranja/Amarillo corporativo del cliente */
  --muted: oklch(0.97 0 0);             /* Fondos secundarios (gris) */
}
```

Edita la variable `--primary` tanto en `:root` como en la clase `.dark` (modo oscuro) para adaptarla a la identidad corporativa del cliente.
