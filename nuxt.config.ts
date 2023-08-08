// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["@nuxtjs/google-fonts"],
  googleFonts: {
    families: {
      Montserrat: [100, 400, 600]
    }
  },
  app: {
    head: {
      title: 'tortaCMS Nuxt Theme',
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1'
    }
  },
})