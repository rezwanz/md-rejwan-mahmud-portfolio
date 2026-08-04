# Portfolio Website — Full Build Plan
**For: Md. Rejwan Mahmud — Software / Web Developer**
**Hand this entire document to any AI (or dev) to build the site.**

---

## 1. Constraints & Tech Stack (locked in)

- **Hosting:** GitHub Pages only (static hosting, no server, no database).
- **Framework:** React + Vite (fast build, clean modern workflow, builds to static files GitHub Pages can serve).
- **Styling:** Tailwind CSS (utility-first, fast to theme, easy for an AI to generate consistently).
- **Animation:** Framer Motion (scroll reveals, hover states, page transitions) — lightweight, very common, AI-friendly.
- **Icons:** lucide-react.
- **Routing:** Single-page app with anchor-scroll sections (Hero, About, Skills, Projects, Experience, Contact). No React Router needed — simpler to host, no 404 issues on GitHub Pages refresh.
- **Contact form:** No backend available, so use **Formspree** or **EmailJS** (both have free tiers, work with a static form, send email directly to your inbox — no server needed).
- **Content storage:** No database. All content (projects, skills, experience) lives in a single typed `data/content.ts` (or `.json`) file — acts like a lightweight CMS. Easy to update later without touching layout code.
- **Deployment:** GitHub Actions workflow that builds the Vite app and pushes the `dist/` output to the `gh-pages` branch (or GitHub Pages "deploy from Actions" source) on every push to `main`. Custom domain via Cloudflare: add a `CNAME` file in `public/` with your domain, and point Cloudflare DNS (CNAME or A records to GitHub Pages IPs) — keep Cloudflare proxy **DNS only** (grey cloud) initially to avoid SSL handshake issues with GitHub Pages, then switch to proxied once it's confirmed working.

---

## 2. Design System

### 2.1 Color Palette — **Teal** (recommended primary choice)
Teal reads as modern, calm, trustworthy — great fit for "clean & minimal, professional" developer portfolios, and distinguishes from the extremely common blue/purple dev-portfolio look.

```
--color-bg:          #0B1120   (near-black navy — dark mode base)
--color-bg-light:    #FFFFFF   (light mode base)
--color-surface:     #111827   (dark mode cards)
--color-surface-light: #F8FAFC (light mode cards)
--color-primary:     #14B8A6   (teal-500 — accents, CTAs, links)
--color-primary-dark:#0D9488   (teal-600 — hover states)
--color-primary-light:#5EEAD4  (teal-300 — highlights, glow)
--color-text:        #E5E7EB   (dark mode body text)
--color-text-light:  #1F2937   (light mode body text)
--color-muted:       #64748B   (secondary text, both modes)
--color-border:      #1E293B   (dark mode borders)
```

Include a **light/dark mode toggle** (default to dark — reads more premium for a dev portfolio, and is very in-trend for 2026). Persist choice in `localStorage`.

### 2.2 Typography
- **Headings:** "Space Grotesk" or "Sora" (modern, geometric, slightly technical feel — pairs well with teal).
- **Body:** "Inter" (extremely readable, standard for professional sites).
- **Code/monospace accents** (for a "dev" touch — e.g. labeling skills like `<Skills />`): "JetBrains Mono" or "Fira Code".
- Type scale: use a modular scale (e.g. 1.25 ratio) — H1 ~3.5rem down to body ~1rem, generous line-height (1.6+) for body text.

### 2.3 Visual Language
- Generous white space, minimal borders, soft shadows (avoid heavy skeuomorphism).
- Subtle grain/gradient mesh or a soft teal glow blob behind the hero (very current "professional but not boring" trend) — done in pure CSS, no images.
- Rounded corners (`rounded-2xl`/`rounded-3xl`) for cards.
- Micro-interactions: hover-lift on project cards, magnetic buttons, smooth scroll, subtle cursor-follow glow (optional, skip if it feels gimmicky).
- Section reveal animations on scroll (fade + slide-up, staggered for lists) via Framer Motion `whileInView`.

---

## 3. Site Structure & Sections

1. **Navbar** — sticky, blurred/glass background on scroll, logo/initials, section links, dark/light toggle, resume download button.
2. **Hero** — name, rotating role text (e.g. "Web Developer / React Developer / Problem Solver" via a typewriter effect), one-line value proposition, CTA buttons ("View Projects", "Contact Me"), social icons (GitHub, LinkedIn, email), subtle animated background.
3. **About** — short bio, photo (optional stylized/duotone), quick facts (location, years of experience, current focus), maybe a "currently learning" badge.
4. **Skills** — grouped by category (Frontend, Backend, Database, Tools/DevOps) as icon + label chips. Your current site uses an infinite auto-scrolling marquee of tech logos (Swiper.js) — worth keeping, just re-themed with Framer Motion's `animate` + `repeat: Infinity` instead (removes a dependency, same effect).
5. **Experience/Timeline** — vertical timeline component, role, company, dates, 2-3 bullet achievements each.
6. **Projects** — grid of cards: image/screenshot, title, short description, tech-stack tags, GitHub + live-demo links. Include a filter by tag (All / Frontend / Full-stack / etc.) if 6+ projects.
7. **Education/Certifications** — compact list or cards.
8. **Contact** — form (via Formspree/EmailJS), plus direct email/social links as backup. Success/error state handled client-side.
9. **Footer** — copyright, quick links, "built with" note (optional), back-to-top button.

Optional additions worth considering:
- **Testimonials** section if you have any client/colleague quotes.
- **Blog** — if you want to write, an MDX-based static blog is very doable with Vite and still deploys to GitHub Pages.
- **GitHub stats card** (contribution graph / stats via github-readme-stats image embed) — a nice authentic touch for developers.

---

## 4. Content You'll Need to Prepare

- Short bio (2-3 versions: one-liner for hero, ~100 words for About).
- List of skills grouped by category.
- 4-8 projects: title, 2-3 sentence description, tech tags, GitHub link, live link, 1 screenshot each.
- Work/experience history with dates and bullet achievements.
- Education history.
- Resume PDF (for the download button).
- Profile photo (optional but recommended — builds trust).
- Contact email + social links (GitHub, LinkedIn, X/Twitter, etc.).

---

## 5. Non-Functional Requirements (don't skip these)

- **Responsive**: mobile-first, test at 375px, 768px, 1280px+.
- **Accessibility**: semantic HTML, alt text on all images, sufficient color contrast (teal-on-dark needs checking — keep text itself in the light/muted colors above, use teal for accents/icons only), keyboard-navigable nav and form.
- **Performance**: lazy-load project images, compress screenshots (WebP), keep total JS bundle lean (Vite + Tailwind already helps a lot).
- **SEO**: proper `<title>`, meta description, Open Graph tags (so link previews look good when shared), favicon.
- **Analytics** (optional, no backend needed): Cloudflare Web Analytics (free, privacy-friendly, just a script tag) — fits perfectly since your domain is already on Cloudflare.

---

## 6. Ready-to-Use Master Prompt (copy this to any AI to build it)

```
Build me a modern, professional portfolio website with the following exact specs:

TECH STACK: React + Vite, Tailwind CSS, Framer Motion for animations, lucide-react for icons.
Single-page app with smooth-scroll anchor navigation (no React Router).
Must be fully static and deployable to GitHub Pages (no backend, no database).

DESIGN:
- Color palette: teal-based, dark mode by default with a light mode toggle
  (persisted in localStorage). Colors: bg #0B1120, surface #111827, primary
  teal #14B8A6 (hover #0D9488, highlight #5EEAD4), text #E5E7EB, muted #64748B.
- Fonts: "Space Grotesk" or "Sora" for headings, "Inter" for body,
  "JetBrains Mono" for small code-style accents.
- Clean, minimal, professional feel — generous whitespace, rounded-2xl cards,
  soft shadows, subtle gradient/glow accents behind the hero, no heavy skeuomorphism.
- Scroll-reveal animations (fade + slide-up, staggered) using Framer Motion's
  whileInView. Hover-lift on cards. Sticky glassmorphism navbar.

SECTIONS (in order): Navbar, Hero (name, rotating role typewriter text,
tagline, CTA buttons, social icons), About (bio + quick facts), Skills
(grouped icon chips: Frontend/Backend/Tools), Experience (vertical timeline),
Projects (filterable card grid with tech tags + GitHub/live links), Education,
Contact (working form via Formspree — I'll provide the endpoint — plus direct
email/social links), Footer.

CONTENT STRUCTURE: put all editable content (bio, skills, projects,
experience, education) in a single data/content.ts file so it's easy to
update without touching components.

DEPLOYMENT: include a GitHub Actions workflow (.github/workflows/deploy.yml)
that builds the Vite app and deploys dist/ to GitHub Pages on every push to
main. Include a public/CNAME file placeholder for a custom domain.

ACCESSIBILITY & SEO: semantic HTML, alt text, keyboard-navigable, proper
meta tags, Open Graph tags, favicon.

I'm attaching a content.ts file with my real bio, skills, experience,
education, projects, and contact info — use that directly instead of
placeholders.
```

---

## 7. Deployment Cheat-Sheet (Cloudflare + GitHub Pages)

1. In your GitHub repo → Settings → Pages → set source to "GitHub Actions."
2. Add the deploy workflow (AI will generate it from the prompt above).
3. Add `public/CNAME` containing your domain (e.g. `yourdomain.com`).
4. In Cloudflare DNS: add a `CNAME` record pointing your domain (or `www`) to `yourusername.github.io`, set to **DNS only** (grey cloud) at first.
5. In GitHub repo Settings → Pages, enter your custom domain and enable "Enforce HTTPS" once the certificate provisions (can take a few minutes to an hour).
6. Once HTTPS is confirmed working, you can switch the Cloudflare record to "Proxied" (orange cloud) for Cloudflare's CDN/caching benefits.

---

*Palette note: teal was chosen over light-green/light-purple because it best matches "clean, minimal, professional" for a developer portfolio while still standing out from the extremely common blue theme — but section 2.1's CSS variables are structured so swapping to green or purple is a one-line change if you change your mind later.*
