// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
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
      version: '1.0.0',
    },
  },

  modules: [
    "@nuxt/a11y",
    "@nuxtjs/tailwindcss",
    "nuxt-lucide-icons",
    "@nuxtjs/color-mode",
    "@nuxt/image",
  ],
});