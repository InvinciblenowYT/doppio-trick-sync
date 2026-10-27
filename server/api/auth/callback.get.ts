export default defineEventHandler(async (event) => {
  const { githubClientId, githubClientSecret } = useRuntimeConfig(event)
  const { code, state } = getQuery(event)
  const csrfToken = getCookie(event, CSRF_COOKIE)

  if (typeof code !== 'string' || typeof state !== 'string') {
    return sendAuthResult(event, {
      error: 'Failed to receive an authorization code. Please try again later.',
      errorCode: 'AUTH_CODE_REQUEST_FAILED',
    })
  }

  if (!csrfToken || state !== csrfToken) {
    return sendAuthResult(event, {
      error: 'Potential CSRF attack detected. Authentication flow aborted.',
      errorCode: 'CSRF_DETECTED',
    })
  }

  if (!githubClientId || !githubClientSecret) {
    return sendAuthResult(event, {
      error: 'OAuth app client ID or secret is not configured.',
      errorCode: 'MISCONFIGURED_CLIENT',
    })
  }

  let data: { access_token?: string; error?: string; error_description?: string }

  try {
    data = await $fetch('https://github.com/login/oauth/access_token', {
      method: 'POST',
      headers: { Accept: 'application/json' },
      body: { code, client_id: githubClientId, client_secret: githubClientSecret },
    })
  } catch {
    return sendAuthResult(event, {
      error: 'Failed to request an access token. Please try again later.',
      errorCode: 'TOKEN_REQUEST_FAILED',
    })
  }

  if (!data.access_token) {
    return sendAuthResult(event, {
      error: data.error_description ?? data.error ?? 'Failed to request an access token.',
      errorCode: 'TOKEN_REQUEST_FAILED',
    })
  }

  return sendAuthResult(event, { token: data.access_token })
})
