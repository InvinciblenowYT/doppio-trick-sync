# Nuxt Minimal Starter

Look at the [Nuxt documentation](https://nuxt.com/docs/getting-started/introduction) to learn more.

## Setup

Make sure to install dependencies:

```bash
# pnpm
pnpm install

```

## Development Server

Start the development server on `http://localhost:3000`:

```bash
# pnpm
pnpm run dev

```

## Production

Build the application for production:

```bash
# pnpm
pnpm run build

```

Locally preview production build:

```bash
# pnpm
pnpm run preview

```

Check out the [deployment documentation](https://nuxt.com/docs/getting-started/deployment) for more information.

## Content (Sveltia CMS)

Content lives in `content/` as JSON and is edited via the CMS at `/admin` on **prod only**.
Every save is a commit to `main`, which triggers a production deploy.

- Don't edit `content/` on `dev` — merge `main` into `dev` regularly to pick up content changes.
- `/admin` is hidden on the dev deployment. Locally it's available; use "Work with Local Repository" to edit files without GitHub.
- GitHub OAuth is handled by `server/api/auth`. Set `NUXT_GITHUB_CLIENT_ID` / `NUXT_GITHUB_CLIENT_SECRET` (Vercel, Production only) from a GitHub OAuth App with callback `https://<domain>/api/auth/callback`.
