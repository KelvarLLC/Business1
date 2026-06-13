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
- Current capture method: structured `/start` intake console that opens a prefilled email to `Kelvarllc.com@outlook.com`
- Stage 1 hosted intake spec: `agency-ops/workflows/hosted-form-to-email-implementation-spec.md`

## Known Blockers

- Local package installation has not completed in the current container because npm registry access returned HTTP 403 for `@types/node`.
- Direct repository clone from the current container has also failed with a 403 CONNECT tunnel response.
- A full `npm run build` has not yet been completed in this environment.
- Vercel project connection, domain selection, and environment setup have not been confirmed.
- Stage 1 hosted form-to-email is specified but not implemented; a handler, vendor, or email provider still needs to be selected.

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
- Mobile layout has no overlapping nav, hero text, CTA buttons, workflow choices, form fields, or service rows.
- The `/start` page explains the review request clearly enough for a prospect to act.

### Lead Capture QA

Until a permanent capture tool is selected:

- Test the `/start` intake console.
- Confirm workflow category selection changes the selected state.
- Confirm required fields prevent incomplete submission.
- Confirm consent is required before submission.
- Confirm the submit action opens an email addressed to `Kelvarllc.com@outlook.com`.
- Confirm the email body includes name, business, email, phone, website, workflow type, current tools, manual steps, missed or delayed items, best first win, urgency, and the non-commitment review note.
- Confirm received website inquiries can be converted into lead records under `agency-ops/leads/`.

When Stage 1 hosted form-to-email is selected and implemented:

- Follow `agency-ops/workflows/hosted-form-to-email-implementation-spec.md`.
- Confirm required fields are validated server-side or by the selected vendor.
- Confirm consent is required.
- Confirm spam protection or honeypot behavior is enabled.
- Confirm successful submission sends one internal notification to `Kelvarllc.com@outlook.com`.
- Confirm visitor success and failure states work.
- Confirm direct email remains available as fallback.
- Confirm no public auto-reply, pricing, sales promise, or project commitment is sent automatically.
- Confirm lead records are still created manually after human review.
- Confirm the selected handler, vendor, or email provider is documented here.

## Vercel Setup Notes

Recommended initial Vercel settings:

- Project name: `kelvar-automation-website` or similar.
- Root directory: `agency-ops/website`.
- Production branch: `main`.
- Build command: `npm run build`.
- Install command: `npm install`.
- Current Stage 0 environment variables: none required for the static and mailto-based version.

Stage 1 hosted form-to-email may require environment variables such as:

```text
CONTACT_FORM_TO_EMAIL=Kelvarllc.com@outlook.com
CONTACT_FORM_FROM_EMAIL=[verified sender]
CONTACT_FORM_PROVIDER_API_KEY=[secret]
CONTACT_FORM_PROVIDER_DOMAIN=[if required]
```

Do not commit secrets. Do not connect auto-sending email, CRM writes, or paid scheduling workflows until the capture workflow is explicitly chosen and reviewed.

## Launch Checklist

Before marking the website launched:

- Build passes.
- Vercel preview renders all core routes.
- Primary CTA path works.
- Structured `/start` intake opens a correctly formatted email, or the Stage 1 hosted form has passed all lead capture QA.
- Contact fallback works.
- Website brief reflects the deployed state.
- Roadmap marks deployment complete and moves the next priority to lead capture upgrade or outreach approval.
- Memory action log records the deployment status and any remaining follow-up.

## Post-Launch Follow-Up

Within the next operating cycle after deployment:

- Replace the mailto-based intake with the Stage 1 hosted form-to-email path if the site launched with Stage 0.
- Add simple analytics or conversion tracking if available.
- Create one internal demo or mini case study that can become proof on the website.
- Review outreach replies and website inquiries together so offer language improves from real signals.

## Current Next Step

Run the build in an environment with npm registry access, then connect Vercel with `agency-ops/website/` as the project root. Use `agency-ops/workflows/hosted-form-to-email-implementation-spec.md` when choosing and implementing the Stage 1 capture handler.
