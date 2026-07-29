// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  // Keep the whole site out of search engine indexes.
  routeRules: {
    '/**': { headers: { 'X-Robots-Tag': 'noindex, nofollow' } }
  }
})
