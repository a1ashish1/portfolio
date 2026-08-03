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

## Ask Ashish (portfolio chatbot)

The home page includes an **Ask Ashish** assistant grounded in portfolio content + a synced resume extract (Gemini free tier).

### One-time setup

1. Create a free key at [Google AI Studio](https://aistudio.google.com/apikey)
2. Restrict it by HTTP referrer to `https://a1ashish1.in/*` and `http://localhost:3000/*`
3. Local: copy `.env.example` → `.env.local` and set `NEXT_PUBLIC_GEMINI_API_KEY`
4. Production: add GitHub Actions secret `NEXT_PUBLIC_GEMINI_API_KEY` (same name)

### Updating the resume (automatic on push)

`siteConfig.resumeUrl` in `src/data/content.ts` is the source of truth.

| Change | What to do |
| --- | --- |
| Replace the PDF **on the same Drive link** | Push to `main`. CI runs `npm run sync:resume` before build. |
| Use a **new Drive link** | Update `resumeUrl` in `content.ts`, keep the file shared as “Anyone with the link”, then push. |
| Refresh locally without deploying | `npm run sync:resume` |

Do **not** hand-edit `src/data/resume.generated.ts` — it is auto-generated.

```bash
npm run sync:resume   # pull latest PDF text into the knowledge base
npm run chat:smoke    # optional: smoke-test answers against Gemini
```
