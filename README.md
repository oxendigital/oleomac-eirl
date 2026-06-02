# Oxen Start

Template de sitio web corporativo para PYMEs B2B chilenas. Pensado para desplegarse rápido, personalizarse desde archivos de configuración centralizados, y escalar a medida que el negocio crece.

Construido sobre **Astro 6 + Cloudflare Workers**. Sin base de datos, sin servidor propio. Todo vive en el plan gratuito de Cloudflare.

---

## Stack

| Capa | Tecnología |
|---|---|
| Framework | Astro 6 (SSR) |
| UI | React 19 + shadcn/ui (Tailwind v4) |
| Deploy | Cloudflare Workers (adapter oficial) |
| Formulario | React Hook Form + Zod + Resend v6 |
| Estilos | Tailwind v4 con variables semánticas CSS |
| i18n | Astro i18n nativo (ES-CL + EN, extensible) |
| SEO/AEO | Schema.org @graph (LocalBusiness + WebSite + FAQPage) |

---

## Estructura del proyecto

```
src/
├── config/
│   ├── business-info.ts   ← TODO lo del cliente va aquí
│   ├── site-config.ts     ← URL canónica, i18n, analytics
│   └── translations.ts    ← Textos por idioma (contenido + SEO)
│
├── layouts/
│   └── base-layout.astro  ← HTML base, SEO, Schema.org, analytics
│
├── pages/
│   ├── index.astro        ← Página principal (ES)
│   ├── 404.astro
│   ├── api/contact.ts     ← Endpoint Worker para el formulario
│   └── en/
│       ├── index.astro    ← Página principal (EN)
│       └── 404.astro
│
├── components/
│   ├── sections/          ← Secciones modulares de la landing
│   │   ├── navbar.astro
│   │   ├── hero.astro
│   │   ├── client-logos.astro   ← Se oculta si no hay clientes
│   │   ├── about.astro
│   │   ├── process.astro
│   │   ├── services.astro
│   │   ├── gallery.astro
│   │   ├── testimonials.astro   ← Se oculta si no hay testimonios
│   │   ├── team.astro
│   │   ├── cta.astro
│   │   └── footer.astro
│   ├── forms/
│   │   └── contact-form.tsx
│   └── whatsapp-widget.tsx
│
└── styles/global.css      ← Variables de tema (colores, tipografía)
```

---

## Checklist de despliegue para un nuevo cliente

### 1. Clonar e instalar

```bash
git clone <url-repo> nombre-cliente
cd nombre-cliente
pnpm install
```

### 2. Configurar el cliente — `src/config/business-info.ts`

Este es el único archivo que el técnico de onboarding necesita completar para la mayoría de los clientes. Todo el sitio se alimenta desde aquí.

#### Campos obligatorios

| Campo | Descripción | Ejemplo |
|---|---|---|
| `brand.name` | Nombre comercial | `"Kutral Climatización"` |
| `brand.legalName` | Razón social | `"Kutral Ltda."` |
| `brand.rut` | RUT empresa | `"76.543.210-K"` |
| `brand.tagline` | Eslogan corto | `"Calidez en el norte"` |
| `brand.description` | Descripción larga de la empresa | — |
| `brand.shortDescription` | Descripción corta (footer, widget) | — |
| `contact.email` | Email público | `"contacto@kutral.cl"` |
| `contact.phone` | Teléfono formateado | `"+56 9 8765 4321"` |
| `contact.whatsapp` | Número WhatsApp internacional | `"+56987654321"` |
| `contact.whatsappMessage` | Mensaje preescrito del widget | — |
| `contact.formDestinationEmail` | Email que recibe leads del formulario | `"ventas@kutral.cl"` |
| `location.address` | Dirección física | `"Av. Grecia 1450, Of. 402"` |
| `location.city` | Ciudad o comuna | `"Antofagasta"` |
| `location.region` | Región | `"Región de Antofagasta"` |
| `hours.weekday` | Horario Lun-Vie | `"09:00 a 18:30"` |

#### Campos opcionales (activan funcionalidades automáticamente)

| Campo | Efecto al completar |
|---|---|
| `location.mapEmbedUrl` | Muestra mapa Google Maps en la sección de contacto |
| `location.mapDirectionsUrl` | Agrega link "Ver en Google Maps" |
| `hours.saturday` / `hours.sunday` | Muestra esos horarios en contacto y footer |
| `socials.linkedin/instagram/facebook/youtube/tiktok` | Aparecen en footer y donde corresponda |
| `clients[]` | Activa la franja "Empresas que nos eligen" bajo el Hero |
| `testimonials[]` | Activa la sección de testimonios (desaparece si está vacío) |
| `certifications[]` | Muestra badges de certificaciones en la sección About |
| `whatsappContacts[]` | Multi-contacto en el widget de WhatsApp (por defecto usa `contact.whatsapp`) |
| `team[]` | Reemplaza equipo de demo con el equipo real del cliente |
| `gallery[]` | Reemplaza galería de demo con imágenes reales |
| `hiring` | `true` muestra tarjeta "Únete al equipo" en la sección Team |
| `seo.geo` | Coordenadas GPS → mejora Local SEO (schema GeoCoordinates) |
| `seo.priceRange` | Rango de precios → aparece en schema LocalBusiness |
| `seo.areaServed[]` | Zonas de cobertura → schema areaServed |
| `seo.faq[]` | Preguntas frecuentes → schema FAQPage (AEO para motores IA) |

### 3. Configuración técnica — `src/config/site-config.ts`

```ts
export const siteConfig: SiteConfig = {
  canonicalUrl: "https://www.nombrecliente.cl",  // URL final del sitio
  i18n: {
    defaultLocale: "es-CL",
    locales: ["es-CL", "en"],   // Quitar "en" si el cliente no necesita inglés
  },
  analytics: {
    googleAnalyticsId: "G-XXXXXXXXXX",  // Opcional
    metaPixelId: "123456789",           // Opcional
  },
  // ...
}
```

### 4. Textos y SEO por idioma — `src/config/translations.ts`

Cada idioma en `translations` tiene una sección `seo` con título, descripción y keywords específicos para ese mercado. **Actualizar siempre antes de lanzar.**

```ts
es: {
  seo: {
    title: "Nombre Cliente | Servicio principal en Ciudad, Chile",
    description: "Descripción de 150-160 caracteres...",
    keywords: "keyword1, keyword2, ciudad, Chile",
  },
  // ...
}
```

Los textos de cada sección (Hero, About, Services, etc.) también viven aquí, permitiendo adaptar el tono y propuesta de valor sin tocar componentes.

### 5. Configurar Cloudflare — `wrangler.jsonc`

```jsonc
{
  "name": "oxen-kutral-climatizacion",   // slug único por cliente
  // ...
}
```

### 6. Variables de entorno

```bash
cp .env.example .env
```

Completar `RESEND_API_KEY` con la clave de Resend. En Cloudflare Pages, agregar la variable en **Settings → Environment variables** (para Production y Preview).

### 7. Verificar localmente

```bash
pnpm dev
```

- `http://localhost:4321` — versión español
- `http://localhost:4321/en` — versión inglés (si está habilitado)
- Enviar el formulario de contacto y confirmar que llega el email
- Verificar que el widget de WhatsApp abre con el mensaje correcto

### 8. Build y deploy

```bash
pnpm build                           # Compilar
npx wrangler pages deploy dist       # Deploy directo a Cloudflare
```

O simplemente push a la rama conectada a Cloudflare Pages para CI/CD automático.

---

## Personalización del tema

Todos los colores del sitio están definidos como variables CSS en `src/styles/global.css`. Los componentes usan clases semánticas de Tailwind (`bg-background`, `text-foreground`, `bg-primary`, etc.) que apuntan a esas variables. **Cambiar el tema no requiere tocar ningún componente.**

```css
/* src/styles/global.css */
:root {
  --background: oklch(1 0 0);           /* Blanco — fondo general */
  --foreground: oklch(0.145 0 0);       /* Negro — texto principal */
  --primary: oklch(0.42 0.15 250);      /* Azul — color de acento */
  --muted: oklch(0.97 0 0);             /* Gris claro — fondos alternos */
  /* ... */
}

.dark {
  --background: oklch(0.145 0 0);
  --primary: oklch(0.68 0.12 250);
  /* ... */
}
```

Para cambiar el color principal del cliente: editar `--primary` en `:root` y `.dark`.

---

## Agregar un nuevo idioma

1. Añadir el locale en `site-config.ts`:
   ```ts
   locales: ["es-CL", "en", "pt-BR"]
   ```

2. Agregar la clave en `translations.ts` (TypeScript fallará en build si falta alguna):
   ```ts
   export const translations: Record<"es" | "en" | "pt", Translations> = {
     "pt": { nav: {...}, hero: {...}, seo: {...}, ... }
   }
   ```

3. Crear `src/pages/pt/index.astro` copiando `src/pages/en/index.astro`.

El selector de idiomas en el navbar se actualiza automáticamente. Los hreflang y og:locale:alternate también.

---

## Secciones disponibles

El orden actual del funnel de conversión:

| # | Sección | Archivo | Se oculta automáticamente si... |
|---|---|---|---|
| 1 | Navbar | `navbar.astro` | — |
| 2 | Hero | `hero.astro` | — |
| 3 | Logos de clientes | `client-logos.astro` | `businessInfo.clients` está vacío |
| 4 | About + Certificaciones | `about.astro` | Certificaciones se ocultan si el array está vacío |
| 5 | Proceso / Cómo trabajamos | `process.astro` | — (textos en translations) |
| 6 | Servicios | `services.astro` | — |
| 7 | Galería | `gallery.astro` | — |
| 8 | Testimonios | `testimonials.astro` | `businessInfo.testimonials` está vacío |
| 9 | Equipo | `team.astro` | Tarjeta "Join" se oculta si `hiring: false` |
| 10 | CTA | `cta.astro` | — |
| 11 | Contacto + Mapa | `index.astro` | Mapa se oculta si no hay `mapEmbedUrl` |
| 12 | Footer | `footer.astro` | — |

Para **reordenar secciones**, cambiar el orden de los imports en `src/pages/index.astro` y `src/pages/en/index.astro`.

Para **ocultar una sección** por completo, eliminar su import y uso en ambas páginas.

---

## SEO y AEO

El `base-layout.astro` inyecta automáticamente en cada página:

- `<title>` y `<meta description>` por idioma (desde `translations[locale].seo`)
- `<meta keywords>` por idioma
- `<link rel="canonical">`
- `<link rel="alternate" hreflang>` para cada locale registrado + `x-default`
- `og:locale` y `og:locale:alternate` dinámicos
- `<meta name="robots" content="index, follow, max-image-preview:large...">`
- Schema.org `@graph` con:
  - `LocalBusiness` (dirección, horarios, geo, teléfono, areaServed, priceRange)
  - `WebSite`
  - `FAQPage` — generado desde `businessInfo.seo.faq[]` (AEO: optimizado para motores de IA como ChatGPT, Perplexity, Google AI)

Para páginas internas que no deban indexarse (ej. thank-you):
```astro
<BaseLayout noindex={true}>
```

---

## Formulario de contacto

El formulario usa **Resend** para el envío. El endpoint en `src/pages/api/contact.ts` corre como Cloudflare Worker y:

1. Valida el cuerpo con Zod (mismo schema que el frontend)
2. Revisa el campo honeypot anti-spam
3. Envía el email al `contact.formDestinationEmail` definido en `business-info.ts`

Si el cliente quiere cambiar el email de destino sin tocar código: solo actualizar `contact.formDestinationEmail` en `business-info.ts`.

---

## Dependencias clave

| Paquete | Versión | Uso |
|---|---|---|
| `astro` | 6.x | Framework base |
| `@astrojs/cloudflare` | 13.x | Adapter SSR para Workers |
| `tailwindcss` | 4.x | Estilos utilitarios |
| `shadcn` | 4.x | Componentes UI (Button, Input, Form, etc.) |
| `react` | 19.x | Componentes interactivos (formulario, widget) |
| `react-hook-form` | 7.x | Manejo de formularios |
| `zod` | 4.x | Validación de schema |
| `resend` | 6.x | Envío de emails |
| `sonner` | 2.x | Notificaciones toast |

---

## Requisitos del entorno

- **Node.js** ≥ 22.12.0
- **pnpm** (gestor de paquetes)
- Cuenta **Cloudflare** (plan gratuito suficiente)
- Cuenta **Resend** (plan gratuito: 3.000 emails/mes)
