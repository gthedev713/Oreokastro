# Stella Attiva — Boutique Website

A premium marketing site for **Stella Attiva**, a women-owned fashion boutique in
Oreokastro, Thessaloniki (5.0★ on Google).

## Stack

- React + TypeScript + Vite
- Tailwind CSS (HSL design tokens in `src/index.css`)
- Framer Motion (carousels, 3D tilt, accordion, scroll reveals)

## Develop

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # type-check + production build to dist/
npm run lint
```

## Editing business details

All copy, hours, services and reviews live in `src/data/business.ts`.
Update `phoneDisplay` / `phoneHref` there once a public phone number is available.
