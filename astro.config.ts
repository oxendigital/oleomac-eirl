import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";
import cloudflare from "@astrojs/cloudflare";
import { siteConfig } from "./src/config/site-config";

// https://astro.build/config
export default defineConfig({
  site: siteConfig.canonicalUrl,
  output: "server",
  adapter: cloudflare(),
  integrations: [
    react(),
    sitemap({
      filter: (page) => !page.includes("/api/"),
    }),
  ],
  i18n: {
    defaultLocale: siteConfig.i18n.defaultLocale,
    locales: siteConfig.i18n.locales,
  },
  vite: {
    plugins: [tailwindcss()],
  },
});
