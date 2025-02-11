// astro.config.mjs
import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react"; // Agregamos la integración de React

// https://astro.build/config
export default defineConfig({
  integrations: [
    tailwind(), // Mantenemos Tailwind CSS
    react()     // Agregamos React
  ]
});