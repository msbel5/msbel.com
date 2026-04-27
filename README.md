# msbel.com

Personal portfolio + writing site for Muhammet Sıddık Bel.
The umbrella for the Bluebird fleet — Alcyone, Pegasus, Ember, and friends.

Built with Astro 5, deployed on Cloudflare Pages, hosted from `msbel.com`
with project demos on `*.msbel.com` subdomains.

---

## Stack

| Layer        | Choice                                                       |
| ------------ | ------------------------------------------------------------ |
| Generator    | **Astro 5** (zero JS by default, content collections)        |
| Content      | **Markdown** for posts, TypeScript for project metadata      |
| Hosting      | **Cloudflare Pages** (free, 100 sites, unlimited bandwidth)  |
| DNS          | Cloudflare (msbel.com already on Cloudflare)                 |
| Fonts        | Fraunces (display) + Geist Sans (body) + Geist Mono          |
| Animations   | Native CSS — View Transitions + scroll-driven animations     |

No bundler runtime, no client-side router, no Tailwind, no JS framework.
Pure static output — `dist/` is just HTML, CSS, and (when needed) tiny JS islands.

## Local development

```bash
# Requires Node 18+
npm install
npm run dev          # localhost:4321
npm run build        # build to dist/
npm run preview      # preview the production build
```

## Site structure

```
src/
├── components/
│   ├── Header.astro          ← top nav (sticky, glass)
│   ├── Footer.astro          ← Bukowski quote + meta
│   └── ProjectCard.astro     ← project entry (status dot, links)
├── content/
│   ├── config.ts             ← Astro collection schema
│   └── writing/              ← blog posts as .md / .mdx
├── data/
│   └── projects.ts           ← single source of truth for projects
├── layouts/
│   └── Base.astro            ← <html><head> + meta + slots
├── pages/
│   ├── index.astro           ← homepage
│   ├── about.astro           ← bio + experience + stack
│   ├── 404.astro             ← lost at sea
│   ├── rss.xml.ts            ← RSS feed
│   ├── projects/
│   │   ├── index.astro       ← all projects, grouped by year
│   │   └── [slug].astro      ← per-project detail
│   └── writing/
│       ├── index.astro       ← post list
│       └── [...slug].astro   ← post detail
├── styles/
│   └── global.css            ← design system (colors, type, motion)
└── public/
    ├── favicon.svg           ← bluebird star
    ├── robots.txt
    └── _headers              ← Cloudflare Pages security headers
```

## Adding a new project

1. Edit `src/data/projects.ts`, append a new `Project` object
2. (Optional) drop a Markdown long-form write-up under `src/content/writing/`
3. (Optional) deploy the live demo to its own Cloudflare Pages project at `<slug>.msbel.com`

## Adding a new blog post

```bash
# Create src/content/writing/2026-MM-DD-slug.md
---
title: 'Post title'
description: 'One-line summary for og:description and RSS'
pubDate: '2026-MM-DD'
tags: ['ml', 'pi', 'notes']
---

Post body in Markdown.
```

The post will auto-appear on `/writing/`, RSS, and sitemap on next build.

## Deploying to Cloudflare Pages — first time

This site lives on `msbel.com` (already on Cloudflare DNS).

1. **Create the GitHub repo**

   ```bash
   cd C:/Users/msbel/projects/msbel.com
   git init
   git add .
   git commit -m "feat: initial site"
   gh repo create msbel5/msbel.com --public --source=. --push
   ```

2. **Connect Cloudflare Pages** → [dash.cloudflare.com](https://dash.cloudflare.com)
   - Workers & Pages → Create → Pages → Connect to Git
   - Pick `msbel5/msbel.com`
   - Build settings:
     - Framework preset: **Astro**
     - Build command: `npm run build`
     - Build output: `dist`
     - Root directory: (leave empty)
   - Save & deploy

3. **Map `msbel.com` apex + `www.msbel.com`**
   - Pages project → Custom domains → Add `msbel.com`
   - Add `www.msbel.com` as second custom domain (Cloudflare will set up redirect)
   - DNS auto-updates because msbel.com is on Cloudflare

4. **Verify** at `https://msbel.com` — full HTTPS, edge-cached.

After this, every `git push` to `main` auto-deploys in ~30 seconds.

## Subdomain showcase plan

The fleet pattern uses `*.msbel.com` wildcard:

| Subdomain               | Project                | Hosting                         |
| ----------------------- | ---------------------- | ------------------------------- |
| `trading.msbel.com`     | Alcyone trading bot    | Cloudflare Tunnel → Pi 5         |
| `qa.msbel.com`          | Pegasus QA agent       | Cloudflare Pages (own repo)      |
| `dnd.msbel.com`         | DnD AI Telegram bot    | Cloudflare Pages (landing) + Pi  |
| `health.msbel.com`      | HealthMonitor          | Cloudflare Pages (own repo)      |
| `alcyone.msbel.com`     | Pi heartbeat dashboard | Cloudflare Tunnel → Pi 5         |

Add a wildcard CNAME on Cloudflare DNS once, then each subdomain is a
new Pages project (or Tunnel route) — no more DNS work.

## License

Code: MIT.
Words and design: © Muhammet Sıddık Bel.
