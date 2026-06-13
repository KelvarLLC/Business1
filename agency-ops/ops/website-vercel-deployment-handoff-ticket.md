# Website Vercel Deployment Handoff Ticket

## Purpose

Turn the website deployment readiness notes into an executable deployment work order for the Kelvar LLC website under `agency-ops/website/`.

This ticket is for a builder or operator with repository, npm registry, and Vercel access. It is not approval to deploy, change DNS, configure paid services, send outreach, or mark the site publicly launched without verification.

## Source References

Use these files as the deployment context:

- `agency-ops/ops/website-deployment-readiness.md`
- `agency-ops/website/content/website-brief.md`
- `agency-ops/workflows/website-lead-intake-workflow.md`
- `agency-ops/workflows/inbound-lead-capture-upgrade-plan.md`
- `agency-ops/workflows/hosted-form-to-email-implementation-spec.md`
- `agency-ops/workflows/stage-1-intake-handler-decision-scorecard.md`
- `agency-ops/workflows/stage-1-hosted-intake-implementation-ticket.md`
- `agency-ops/ops/30-day-launch-command-plan.md`

## Current State

- Website source path: `agency-ops/website/`
- Framework: Next.js App Router
- Intended deployment target: Vercel
- Current primary CTA: `/start`
- Current offer landing page: `/lead-intake`
- Current intake stage: Stage 0 structured mailto console
- Current recipient: `Kelvarllc.com@outlook.com`
- Stage 1 hosted form-to-email is specified but not live
- Local build in the current container is blocked by npm registry access
- Direct repository clone in the current container is blocked by a 403 CONNECT tunnel response

## Deployment Goals

Deploy the current website safely enough to review in a Vercel preview or production environment without overstating launch status.

A deployment can be considered ready only when:

- Dependencies install successfully.
- Build succeeds.
- Core routes render.
- CTAs route correctly.
- Stage 0 intake mailto behavior works, or Stage 1 hosted form has passed QA.
- Direct email fallback works.
- Mobile layout is checked.
- Deployment status is recorded in the roadmap and memory after completion.

## Required Build Check

Run in an environment with npm registry access:

```bash
cd agency-ops/website
npm install
npm run build
```

Pass criteria:

- Install completes without registry, lockfile, or dependency errors.
- Build completes without TypeScript or Next.js route errors.
- Home, services, lead-intake, about, contact, and start routes compile.
- Metadata and navigation compile.
- CSS imports compile.

If the build fails:

1. Record the error summary.
2. Fix only website-related issues inside `agency-ops/website/`.
3. Re-run build.
4. Do not mark deployment ready until build passes.

## Vercel Project Setup

Recommended settings:

- Project root: `agency-ops/website`
- Framework preset: Next.js
- Production branch: `main`
- Install command: `npm install`
- Build command: `npm run build`
- Output settings: Vercel defaults for Next.js

Do not connect unrelated repositories or deploy from a different root.

## Environment Variables

Stage 0 mailto deployment:

- No form-provider environment variables required.

Stage 1 hosted form-to-email deployment may require:

```text
CONTACT_FORM_TO_EMAIL=Kelvarllc.com@outlook.com
CONTACT_FORM_FROM_EMAIL=[verified sender]
CONTACT_FORM_PROVIDER_API_KEY=[secret]
CONTACT_FORM_PROVIDER_DOMAIN=[if required]
```

Rules:

- Do not commit secrets.
- Do not set provider variables until a handler or vendor is selected.
- Do not remove the direct email fallback.
- Do not enable auto-replies without explicit approval.

## Preview QA Checklist

After a Vercel preview exists, review:

- Home page first viewport clearly identifies Kelvar LLC.
- Services page shows the automation modules.
- Lead Intake page shows demo proof and FAQ without claiming client results.
- About page includes the public brand doctrine and ambition section.
- Contact page has direct email fallback.
- Start page fields render and fit on desktop and mobile.
- Header and footer navigation links work.
- Primary CTAs point to `/start` or `/lead-intake` intentionally.
- No visible placeholder copy remains on primary conversion paths.
- No content implies the site is live before launch is confirmed.

## Intake QA Checklist

For Stage 0 launch:

- `/start` required fields block incomplete submission.
- Consent is required.
- Submit opens a formatted email to `Kelvarllc.com@outlook.com`.
- Email body includes the required intake fields.
- Direct email fallback is visible on the Contact page.

For Stage 1 launch, also require:

- Handler/vendor decision scorecard completed.
- Hosted submission endpoint or vendor is selected.
- Required environment variables are configured securely.
- Successful submission sends one internal notification email.
- Success state appears.
- Error state appears on failure.
- Spam guardrail or honeypot works.
- No public auto-reply, CRM write, pricing quote, scheduling prompt, or repository lead record is created automatically.

## Launch Decision Gate

Before marking the website launched, confirm:

- Build passed.
- Preview QA passed.
- Intake QA passed.
- Deployment root is correct.
- Domain or production URL is known.
- User approves marking the site as launched if this is a public launch.
- Roadmap, website brief, deployment readiness, and memory are updated after launch.

## Rollback Plan

If deployment fails or the live site is not ready:

1. Do not claim launch.
2. Keep current repo state as source of truth.
3. Record failure summary in `agency-ops/ops/website-deployment-readiness.md`.
4. Keep Stage 0 mailto fallback available.
5. Re-run build and preview QA after fixes.

If Stage 1 intake fails:

1. Restore or keep Stage 0 mailto behavior.
2. Keep direct email fallback visible.
3. Record the failure and selected handler/vendor status.
4. Do not claim hosted capture is live until retested.

## Handoff Record Template

Use this after deployment work:

```markdown
## Website Deployment Handoff Record

- Date:
- Operator:
- Vercel project:
- Deployment URL:
- Domain, if any:
- Commit deployed:
- Build status:
- Preview QA status:
- Intake stage deployed: Stage 0 mailto / Stage 1 hosted form-to-email
- Intake QA status:
- Environment variables configured:
- Known issues:
- Rollback notes:
- Public launch approved: yes / no
- Follow-up actions:
```

## Current Status

Ticket ready. Deployment still requires npm registry access, Vercel access, successful build, preview QA, intake QA, and approval before public launch is claimed.
