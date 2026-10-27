const isProd = process.env.ENVIRONMENT === 'prod'

export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  runtimeConfig: {
    // Set via NUXT_GITHUB_CLIENT_ID / NUXT_GITHUB_CLIENT_SECRET
    githubClientId: '',
    githubClientSecret: '',
  },
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
    // Content is edited on prod only (commits go to main); hide the CMS on other deployments.
    // Locally it stays available, e.g. for Sveltia's local repository mode.
    ...(!isProd && {
      '/admin': { redirect: '/' },
      '/admin/**': { redirect: '/' },
      '/api/auth': { redirect: '/' },
      '/api/auth/**': { redirect: '/' },
    }),
  },
})

