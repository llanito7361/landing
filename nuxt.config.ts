// nuxt.config.ts
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  ssr: true,
  pages: true,

  app: {
    head: {
      title: 'mi proyect'
    }
  },

  modules: ['@nuxt/ui']
})