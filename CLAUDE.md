# Zaza Teach – Operational Defaults

- Git remote: origin -> https://github.com/Drgblack/zaza-teach-website.git
- Default branch: main (protected; PRs only)
- Local path (Windows): C:\Users\User\zaza-teach-website

## Vercel
- Project: zaza-teach-website (team: zaza-d3c15292)
- Build command: npm run build
- Install command: npm ci
- Output: .next
- Framework: Next.js (App Router)
- Environment: Production builds from main
- Preview builds from feature/*

## Node & Tooling
- Node: 18.x (pin in .nvmrc and Vercel project settings)
- Package manager: npm (lock with package-lock.json)
- Lint/typecheck in CI: npm run lint && npm run typecheck

## Env Vars (set in Vercel)
- NEXT_PUBLIC_SITE_URL=https://zazateach.com  (or preview URL)
- NEXT_PUBLIC_SIGNUP_URL=https://app.zazateach.com/signup  (CTA destination URL)
- NEXT_TELEMETRY_DISABLED=1  (optional, disables Next.js telemetry)
- (add any API keys the app actually uses)

## Domains
- Primary: zazateach.com → Production
- Preview: *.vercel.app

## Deploy Flow
1) Create feature branch: feature/<short-task-name>
2) Commit & push → Preview deploy link appears
3) Open PR → auto checks must pass
4) Merge to main → Production deploy