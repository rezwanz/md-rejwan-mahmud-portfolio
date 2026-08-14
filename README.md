# Md. Rejwan Mahmud — Portfolio

A single-page portfolio built with React, Vite, TypeScript, Tailwind CSS, and Framer Motion. Fully static — deploys to Cloudflare Pages (or GitHub Pages via the included GitHub Actions workflow).

## Stack

- React + Vite + TypeScript
- Tailwind CSS v4 (teal design system, dark mode by default with a toggle)
- Framer Motion (scroll reveals, marquee, page transitions)
- lucide-react + react-icons (UI and brand/skill icons)

## Getting started

```bash
npm install
npm run dev      # start dev server
npm run build    # type-check + production build to dist/
npm run preview  # preview the production build locally
```

## Editing content

All site copy — bio, skills, experience, education, projects, certifications, services, social links — lives in
[`src/data/content.ts`](src/data/content.ts). Edit that file to update the site; components don't need to change.
A reference mirror lives in [`Plan/content.ts`](Plan/content.ts) — re-sync it whenever `src/data/content.ts` changes.

## Before going live

- **Contact form:** wired to Formspree (`contact.formspreeEndpoint` in `content.ts`). Submissions go to your inbox at formspree.io — no server needed, works on any static host.
- **Resume PDF:** replace `public/assets/files/resume-md-rejwan-mahmud.pdf` (or update `site.resumeUrl`
  in `content.ts`). The navbar/footer download buttons link here.
- **Project links:** a few entries in `projects` have no `live` and/or `github` link yet — add them
  if available.

## Deployment

### Cloudflare Pages (primary)

1. Push this repo to GitHub and connect it in the Cloudflare dashboard → **Workers & Pages → Create → Pages → Connect to Git**.
2. Cloudflare auto-detects Vite. Build command `npm run build`, output directory `dist`.
3. Set your custom domain in **Custom domains**. Done — no other config needed (single-page anchor site, no routing).

### GitHub Pages (alternative)

`.github/workflows/deploy.yml` builds the app and deploys `dist/` to GitHub Pages on every push to `main`.
In your repo: **Settings → Pages → Source → GitHub Actions**. The `public/CNAME` file points at `rejwan.dev`.

For Cloudflare DNS setup, see the cheat-sheet in `Plan/portfolio-website-plan.md`.
