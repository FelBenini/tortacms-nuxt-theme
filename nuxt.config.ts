import highlightjs from 'highlight.js'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["@nuxtjs/google-fonts", '@nuxt/content'],
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
  content: {
    markdown: {
      anchorLinks: false
    }
  },
  routeRules: {
    '/': {swr: 150},
    '/**': {isr: true}
  }
})