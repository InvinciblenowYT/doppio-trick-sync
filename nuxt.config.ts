// https://nuxt.com/docs/api/configuration/nuxt-config
const isProd = process.env.ENVIRONMENT === 'prod'

export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  app: {
    head: {
      meta: isProd
        ? []
        : [
            { name: 'robots', content: 'noindex, nofollow' },
            { name: 'googlebot', content: 'noindex, nofollow' },
          ],
    },
  },
  routeRules: {
    '/**': {
      headers: isProd ? {} : { 'X-Robots-Tag': 'noindex, nofollow' },
    },
  },
})
