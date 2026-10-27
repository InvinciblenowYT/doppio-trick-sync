// GitHub OAuth for Sveltia CMS, ported from https://github.com/sveltia/sveltia-cms-auth
// The CMS opens /api/auth in a popup, GitHub redirects back to /api/auth/callback,
// and the callback page hands the token to the CMS window via postMessage.
import type { H3Event } from 'h3'

export const CSRF_COOKIE = 'cms-auth-csrf'

const DEFAULT_SCOPE = 'repo,user'
const ALLOWED_SCOPES = ['repo', 'public_repo', 'user', 'read:user', 'user:email']

// Only accept scopes from the allow list; anything else falls back to the default
export const getScope = (requested?: string) => {
  const scopes = (requested ?? '').split(/[\s,]+/).filter(Boolean)

  if (scopes.length && scopes.every((scope) => ALLOWED_SCOPES.includes(scope))) {
    return scopes.join(',')
  }

  return DEFAULT_SCOPE
}

export const getOrigin = (event: H3Event) =>
  getRequestURL(event, { xForwardedHost: true, xForwardedProto: true }).origin

const serialize = (value: unknown) => JSON.stringify(value ?? null).replaceAll('<', '\\u003c')

// The CMS and this endpoint share an origin, so the token is only ever posted back to it
export const sendAuthResult = (
  event: H3Event,
  result: { token: string } | { error: string; errorCode?: string },
) => {
  const provider = 'github'
  const state = 'token' in result ? 'success' : 'error'
  const message = `authorization:${provider}:${state}:${JSON.stringify({ provider, ...result })}`

  deleteCookie(event, CSRF_COOKIE, { path: '/' })
  setResponseHeader(event, 'Content-Type', 'text/html;charset=UTF-8')

  return `<!doctype html><html><body><script>
    (() => {
      const origin = ${serialize(getOrigin(event))};
      const message = ${serialize(message)};

      window.addEventListener('message', (event) => {
        if (event.data === 'authorizing:${provider}' && event.origin === origin) {
          window.opener?.postMessage(message, origin);
        }
      });
      window.opener?.postMessage('authorizing:${provider}', origin);
    })();
  </script></body></html>`
}
