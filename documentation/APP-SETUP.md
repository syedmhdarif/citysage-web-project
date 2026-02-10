# CitySage — Website Structure & Implementation Brief

> Purpose: a clear, actionable markdown brief for developers and Claude AI to build CitySage-Web (Next.js static site). This file describes routes, page content, components, integrations, deployment, and design notes.

---

## Table of contents

1. Overview
2. Top navigation (menus)
3. Routes & page-level specs
4. Reusable components
5. Content types & frontmatter examples
6. Integrations (Instagram, AI chat iframe)
7. Animations & UI libraries
8. Accessibility & SEO checklist
9. Folder structure (recommended for Next.js)
10. Build & deployment (GitHub Pages temporary; production notes)
11. Handover notes for the next owner

---

## 1) Overview

CitySage is primarily a content-driven site with a few dynamic integrations: an Instagram feed, an embedded AI chat (`https://urbandata.my/embed`), and lightweight UI animations. The site should be authored in a way that content editors can update static pages or Markdown posts easily. The initial delivery will be a static export (Next.js `output: 'export'`) for deployment to GitHub Pages as a temporary live URL.

Tone: professional, clear, and urban-tech friendly. Use the live site copy as a baseline and improve clarity and concision as needed.

---

## 2) Top navigation (menus)

```
Home
About
Services & Solutions
Academy
Project
Ecosystem
  ├ Technology
  ├ Events
  └ Research
AI Workers (Action button)
Request Demo (Action button)
```

Notes: `Ecosystem` is a parent menu with 3 child pages. `Request Demo` should be styled as a CTA (button) in the header.

---

## 3) Routes & page-level specs

```
/                         # Home
/about                    # About
/services                 # Services & Solutions
/academy                  # Academy
/project                  # Project (portfolio)
/ecosystem/technology     # Technology
/ecosystem/events         # Events
/ecosystem/research       # Research
/ai-workers               # AI Workers (gallery + detail pages)
/ai-workers/[slug]        # agent detail pages (C‑Siti, C‑Kimi, etc.)
/request-demo             # Request Demo (form)
/privacy                  # Privacy Policy
/terms                    # Terms & Conditions
/contact                  # Contact page
/blog/* (optional)        # Blog posts or news (Markdown or headless CMS)
```

### Home page sections

* Hero (title, subtitle, 2 CTAs — Request Demo & Learn More)
* Key solution pillars (cards)
* Featured AI Workers (carousel or card grid)
* Latest news / IG feed (carousel)
* Testimonials / logos
* Footer (contact, social, legal)

### AI Worker detail page

* Header card (name, role, summary)
* Capabilities / use cases
* Example interactions (short transcripts)
* Related projects or case studies
* CTA: Request Demo

---

## 4) Reusable components

* `Header` (responsive nav, CTA button)
* `Footer` (social links, small sitemap)
* `Hero` (title, kicker, CTAs)
* `Card` (generic: used for projects, services, agents)
* `BlogList` / `PostCard`
* `Form` (Request Demo, Contact)
* `IGFeed` (wrapper component for Instagram grid/carousel)
* `EmbedFrame` (wrapper that renders iframe safely)
* `Layout` (wraps pages, handles meta tags)

---

## 5) Content types & frontmatter examples

Prefer Markdown for blog/research posts. Example frontmatter:

```md
---
title: "Smart Waste: Kuala Lumpur Pilot"
description: "Pilot study of smart waste sensors and route optimization."
date: 2026-01-15
author: "CitySage"
slug: "smart-waste-kl"
tags: ["smart-city","waste-management","case-study"]
---

Page body here...
```

For simple pages (About, Services) you can keep content as MDX or static JSX pages so designers have more control.

---

## 6) Integrations

### Instagram

Two options:

1. **Quick embed** — use a third-party widget (SnapWidget, LightWidget) to deliver an embeddable grid/slider. Pros: easy. Cons: third-party dependence.

2. **Official Graph API** — use Instagram Graph API to pull recent media server-side (requires Facebook app, tokens). Pros: reliable & customizable; Cons: more setup and token management.

Implementation notes for a simple MVP:

* Create `components/IGFeed.tsx` that accepts either `embedHtml` (from widget) or `posts` (array from API).
* Use `loading="lazy"` and accessible `alt` text where available.

### AI Chat (UrbanData Embed)

Embed as an iframe where appropriate (Home, AI Workers or Demo pages). Example:

```html
<!-- components/EmbedFrame.tsx -->
<iframe
  src="https://urbandata.my/embed"
  title="UrbanData AI Chat"
  width="100%"
  height="600"
  style={{border: 'none'}}
  loading="lazy"
></iframe>
```

Security: sandboxing an iframe is recommended if 3rd party content is untrusted. Example: `sandbox="allow-scripts allow-same-origin"` — test functionality first.

---

## 7) Animations & UI libraries

**If using vanilla static pages**: Tailwind CSS + AOS (Animate On Scroll) or small CSS keyframe animations.

**If using React**: Tailwind + Framer Motion for interactive, smooth animations.

Recommendation: Use Framer Motion for card hover/entrance transitions, and avoid heavy animation on scroll for accessibility.

---

## 8) Accessibility & SEO checklist

* Semantic HTML (header, nav, main, footer)
* ARIA labels where necessary
* Images with `alt` attributes
* Color contrast >= WCAG AA
* Mobile-first responsive design
* Proper meta tags (title, description, open graph) — handled via page `Layout`
* Sitemap.xml and robots.txt (generate during build or via static files)

---

## 9) Recommended folder structure (Next.js)

```
/src
  /components
  /layouts
  /pages               # or /app for App Router (if chosen)
  /public
    /images
  /content             # markdown posts, page content
  /lib                 # helper functions (IG, fetchers)
  /styles
  next.config.js
  package.json
```

Notes: If you use Next.js App Router, follow the `app/` conventions. For a simple static export, `pages/` + `next export` is sufficient.

---

## 10) Build & Deployment — GitHub Pages (temporary)

1. In `next.config.js` for GitHub Pages under a repo (user.github.io/REPO):

```js
// next.config.js
const repoName = 'CitySage-Web';
export default {
  output: 'export',
  trailingSlash: true,
  // If deploying to username.github.io/repo, uncomment and set basePath
  // basePath: `/${repoName}`,
  // assetPrefix: `/${repoName}/`,
};
```

2. Add scripts to `package.json`:

```json
"scripts": {
  "build": "next build",
  "export": "next export",
  "build:export": "next build && next export",
  "deploy:gh": "npx gh-pages -d out -b gh-pages"
}
```

3. Workflow (local):

* `npm run build:export` → produces `/out` folder
* `npm run deploy:gh` → pushes `/out` to `gh-pages` branch

4. Alternative: Use GitHub Actions to run `npm run build:export` and push `out` to `gh-pages` automatically.

Production hosting recommendation: Vercel or Cloudflare Pages for smoother Next.js support.

---

## 11) Handover notes

* Keep content in `/content` with clear Markdown frontmatter.
* Document Instagram token and how to rotate it (if using Graph API).
* Provide credentials for domain, GitHub, hosting, and analytics to the new owner.
* Include a short `README.md` in the repo root with build & deploy steps.

---

## Next steps (pick any)

* Convert this brief into a `README.md` at repo root (I can do this).
* Generate a GitHub Actions workflow file for auto-deploy to `gh-pages`.
* Create starter Next.js pages/components scaffold using this structure.

---

*Prepared for CitySage Web build — use this file as the canonical brief for designers, developers, and Claude AI.*
