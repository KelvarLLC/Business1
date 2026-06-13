# Kelvar LLC Website

This is the Vercel-friendly website foundation for Kelvar LLC's automation agency work. The site is the public flagship for the agency's AI automation ecosystem.

## Positioning

Kelvar builds practical AI automation ecosystems for service businesses that need faster follow-up, cleaner handoffs, and less manual admin work.

## Primary Website Goal

Convert qualified visitors into discovery or audit conversations for narrow, sellable automation packages.

## Current Site Pages

- `/`: homepage with full-bleed systems-map hero and service fleet overview.
- `/services`: detailed service package page.
- `/about`: operating philosophy and agency focus.
- `/contact`: discovery request path and qualification prompts.

## Structure

- `app/`: Next.js App Router pages and global styling.
- `public/images/`: source image assets kept locally when available.
- `content/`: positioning notes, briefs, and future copy planning.

## Local Development

```bash
npm install
npm run dev
```

## Build Check

```bash
npm run build
```

## Deployment

Deploy from `agency-ops/website/` as the project root in Vercel.

## Current Offer Focus

- Lead intake and follow-up automation.
- Client onboarding handoff automation.
- Appointment reminder automation.
- Lightweight reporting dashboard automation.

## Tone Guidelines

- Professional, direct, and practical.
- Outcome-focused rather than hype-heavy.
- Confident about automation value without promising guaranteed revenue.
- Use the internal ecosystem vision to shape structure, but keep public copy buyer-friendly.

## Next Improvements

1. Add local image or generated visual assets if the brand direction calls for more inspectable media.
2. Connect contact intent to a lead intake and qualification workflow.
3. Add case studies once real client work exists.
4. Run a full local or CI build check when GitHub/network access is available to the execution environment.
