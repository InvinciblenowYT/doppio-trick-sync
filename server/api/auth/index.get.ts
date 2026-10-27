import { randomUUID } from 'node:crypto'

export default defineEventHandler((event) => {
  const { githubClientId, githubClientSecret } = useRuntimeConfig(event)
  const { provider, scope } = getQuery(event)

  if (provider !== 'github') {
    return sendAuthResult(event, {
      error: 'Your Git backend is not supported by the authenticator.',
      errorCode: 'UNSUPPORTED_BACKEND',
    })
  }

  if (!githubClientId || !githubClientSecret) {
    return sendAuthResult(event, {
      error: 'OAuth app client ID or secret is not configured.',
      errorCode: 'MISCONFIGURED_CLIENT',
    })
  }

  const csrfToken = randomUUID().replaceAll('-', '')

  // Lax so the cookie survives the redirect back from GitHub
  setCookie(event, CSRF_COOKIE, csrfToken, {
    httpOnly: true,
    secure: true,
    sameSite: 'lax',
    path: '/',
    maxAge: 600,
  })

  const params = new URLSearchParams({
    client_id: githubClientId,
    redirect_uri: `${getOrigin(event)}/api/auth/callback`,
    scope: getScope(typeof scope === 'string' ? scope : undefined),
    state: csrfToken,
  })

  return sendRedirect(event, `https://github.com/login/oauth/authorize?${params}`)
})
