// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from "@tailwindcss/vite";
export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  css: ["./app/assets/css/main.css"],
  vite: {
    plugins: [tailwindcss()],
  },
  devtools: { enabled: false },
  app: {
    head: {
      title: "Room",
      meta: [
        {
          name: "description",
          content: "Landing page para propaganda de quartos",
        },
      ],
    },
  },

  runtimeConfig: {
    public: {
      version: "1.0.0",
    },
  },

  modules: [
    "@nuxt/a11y",
    "nuxt-lucide-icons",
    "@nuxtjs/color-mode",
    "@nuxt/image",
    "@nuxt/ui",
  ],
});