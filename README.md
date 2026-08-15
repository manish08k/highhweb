# HIGHH — marketing site

Next.js 14 (App Router) + TypeScript + Tailwind CSS + Framer Motion.

## Run locally

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Build

```bash
npm run build
npm start
```

## Project structure

```
src/
  app/                 route + layout + global metadata
  components/
    layout/            Navbar, Footer
    hero/               Hero, HeroVisual (animated pipeline)
    sections/           Capabilities, InteractiveDemo, Runtime,
                        Process, Stack, FAQ, FinalCTA
    product/            ProductWindow (reusable app-chrome shell)
    ui/                 Container, Section, Button, Badge
    motion/             Reveal, Stagger scroll-in wrappers
  styles/globals.css    design tokens + base styles
tailwind.config.ts       color / type / spacing / radius tokens
```

## Design tokens

All colors, spacing, radii, and type sizes live in `tailwind.config.ts`.
Do not hardcode hex values in components — extend the token file instead.

Brand mark, copy, and every UI mockup describe what HIGHH actually does today
(products, AI agents, automations) — there are no placeholder customer logos,
testimonials, or invented metrics in this build. Replace `hello@highh.example`
and the footer legal links before shipping to production.
