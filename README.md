# Ashish Kumar — Portfolio

Personal portfolio built with Next.js 14, TypeScript, Tailwind CSS, and Framer Motion.

## Stack

- **Next.js 14** (App Router, Static Export)
- **TypeScript**
- **Tailwind CSS 3**
- **Framer Motion** — scroll-triggered animations, micro-interactions
- **Lucide React** — icons

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Build & Deploy

```bash
npm run build
```

Generates a static export in the `out/` directory — deployable to Vercel, GitHub Pages, Netlify, or any static host.

### GitHub Pages

Set the `Source` to the `out/` directory, or use a GitHub Action to build and deploy.

### Vercel

Connect the repo and deploy — Vercel auto-detects Next.js. Remove `output: "export"` from `next.config.mjs` to enable SSR features.

## Project Structure

```
src/
├── app/              # Next.js App Router (layout, page, globals)
├── components/
│   ├── layout/       # Navbar, Footer
│   ├── sections/     # Hero, About, Experience, Skills, Achievements, Contact
│   └── ui/           # Reusable UI primitives
├── data/             # Centralized content (easy to update)
└── lib/              # Utilities
```

## Editing Content

All text content lives in `src/data/content.ts` — update experience, skills, achievements, and links in one place.
