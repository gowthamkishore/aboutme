# Gowtham Kishore — Portfolio

Personal portfolio site, built with [Next.js](https://nextjs.org) and statically exported for deployment on GitHub Pages at [gowthamkishore.github.io/PersonalPortfolio](https://gowthamkishore.github.io/PersonalPortfolio).

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see the result. The page auto-updates as you edit files under `src/app` and `src/components`.

## Build

```bash
npm run build
```

`next.config.ts` sets `output: "export"`, so `npm run build` produces a fully static site in `out/` — no server runtime required.

## Deployment

The site deploys to **GitHub Pages** via [`.github/workflows/deploy-gh-pages.yml`](.github/workflows/deploy-gh-pages.yml), which builds and publishes `out/` on every push to `main`. `next.config.ts` sets `basePath: "/PersonalPortfolio"` to match the repo-scoped Pages URL.

## Tech Stack

- [Next.js](https://nextjs.org) (App Router, static export)
- [React](https://react.dev) 19
- [Tailwind CSS](https://tailwindcss.com) 4
- [Phosphor Icons](https://phosphoricons.com)
