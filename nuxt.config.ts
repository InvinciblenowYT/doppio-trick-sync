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
      ...(!isProd && {
        headers: {
          'X-Robots-Tag': 'noindex, nofollow',
        },
      }),
    },
  },
})

