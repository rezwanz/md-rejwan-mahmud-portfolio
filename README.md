# Md. Rejwan Mahmud — Portfolio

A single-page portfolio built with React, Vite, TypeScript, Tailwind CSS, and Framer Motion. Fully static — deploys to GitHub Pages via GitHub Actions.

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

All site copy — bio, skills, experience, education, projects, social links — lives in
[`src/data/content.ts`](src/data/content.ts). Edit that file to update the site; components
don't need to change.

Things still marked as placeholders you should fill in before going live:

- `public/resume.pdf` (or update `site.resumeUrl` in `content.ts`) — the resume download button links here.
- `contact.formspreeEndpoint` in `content.ts` — create a form at [Formspree](https://formspree.io) and paste your endpoint.
- `public/og-image.png` — a 1200×630 social share image referenced by the Open Graph tags in `index.html`.
- `public/CNAME` — currently a placeholder domain; replace with your real domain or delete the file if you're not using a custom domain.
- Project `github` / `live` links in `content.ts` are empty for a few entries — add them if available.

Also worth double-checking: the **Codeware Limited** (May 2024–Present) and **Skylark Soft Limited**
(Apr 2024–Mar 2025) entries in `experience` have overlapping dates — confirm which end date is correct.

## Deployment

`.github/workflows/deploy.yml` builds the app and deploys `dist/` to GitHub Pages on every push to `main`.
In your repo: **Settings → Pages → Source → GitHub Actions**.

For a custom domain via Cloudflare, see the deployment cheat-sheet in `Plan/portfolio-website-plan.md`.
