# Website Deployment Readiness

## Purpose

Prepare the Kelvar LLC website in `agency-ops/website/` for a clean Vercel deployment without losing track of current verification blockers, required setup decisions, and post-launch checks.

## Current Status

- Website source: `agency-ops/website/`
- Framework: Next.js App Router
- Intended deploy target: Vercel
- Required project root in Vercel: `agency-ops/website/`
- Current public positioning: practical AI automation ecosystems for service businesses
- Current primary CTA: `/start`
- Current offer-specific landing page: `/lead-intake`
- Current capture method: prefilled email to `Kelvarllc.com@outlook.com`

## Known Blockers

- Local package installation has not completed in the current container because npm registry access returned HTTP 403 for `@types/node`.
- Direct repository clone from the current container has also failed with a 403 CONNECT tunnel response.
- A full `npm run build` has not yet been completed in this environment.
- Vercel project connection, domain selection, and environment setup have not been confirmed.

## Pre-Deployment Checklist

### Repository And Project Setup

- Confirm the assigned repository is `KelvarLLC/Business1`.
- Confirm the deployment root is `agency-ops/website/`.
- Confirm Vercel is connected to the `main` branch.
- Confirm the Vercel framework preset detects Next.js.
- Confirm install command is `npm install` unless the project later switches package managers.
- Confirm build command is `npm run build`.
- Confirm output settings are left at the Next.js default unless Vercel requires otherwise.

### Local Or CI Verification

Run these checks in an environment with registry access:

```bash
cd agency-ops/website
npm install
npm run build
```

Pass criteria:

- Dependencies install without registry or lockfile errors.
- Next.js build completes without TypeScript, lint, routing, metadata, or CSS errors.
- Home, services, lead-intake, about, contact, and start routes compile.
- Header and footer links resolve to existing routes.
- No placeholder-only CTA remains on the primary conversion path.

### Website Content QA

Review the deployed preview for:

- Clear first-viewport positioning for Kelvar LLC.
- Public copy remains professional and buyer-facing.
- AI ecosystem and armada language supports the offer without making vague promises.
- Primary CTAs point to `/start` or `/lead-intake` intentionally.
- Direct email fallback is visible where useful.
- Mobile layout has no overlapping nav, hero text, CTA buttons, or service rows.
- The `/start` page explains the review request clearly enough for a prospect to act.

### Lead Capture QA

Until a permanent capture tool is selected:

- Test the `/start` prefilled email link.
- Confirm recipient is `Kelvarllc.com@outlook.com`.
- Confirm the email body requests workflow type, current tools, manual steps, missed or delayed items, best first win, and urgency.
- Confirm received website inquiries can be converted into lead records under `agency-ops/leads/`.

When a permanent capture path is selected, update this checklist and `agency-ops/workflows/website-lead-intake-workflow.md`.

## Vercel Setup Notes

Recommended initial Vercel settings:

- Project name: `kelvar-automation-website` or similar.
- Root directory: `agency-ops/website`.
- Production branch: `main`.
- Build command: `npm run build`.
- Install command: `npm install`.
- Environment variables: none required for the current static/prefilled-email version.

Do not connect auto-sending email, CRM writes, or paid scheduling workflows until the capture workflow is explicitly chosen and reviewed.

## Launch Checklist

Before marking the website launched:

- Build passes.
- Vercel preview renders all core routes.
- Primary CTA path works.
- Contact fallback works.
- Website brief reflects the deployed state.
- Roadmap marks deployment complete and moves the next priority to lead capture upgrade or outreach approval.
- Memory action log records the deployment status and any remaining follow-up.

## Post-Launch Follow-Up

Within the next operating cycle after deployment:

- Add a permanent form, scheduler, or CRM-backed intake path.
- Add simple analytics or conversion tracking if available.
- Create one internal demo or mini case study that can become proof on the website.
- Review outreach replies and website inquiries together so offer language improves from real signals.

## Current Next Step

Run the build in an environment with npm registry access, then connect Vercel with `agency-ops/website/` as the project root.