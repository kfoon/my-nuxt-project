// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-05-15',
  devtools: { enabled: true },
  css: ["~/assets/css/main.css", "vue-toastification/dist/index.css"],
  build: { transpile: ["vue-toastification"] },
  modules: ['@nuxt/eslint', '@nuxtjs/tailwindcss']  
})

