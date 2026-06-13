# Website Launch Decision Record Template

## Purpose

Use this record when the Kelvar LLC website is ready for preview, production deployment, domain launch, or a launch hold decision.

This template turns deployment work into a clear business decision. It prevents the website from being treated as launched just because a preview exists, a build passed, or a deployment URL was created.

## Source References

Use these files before completing this record:

- `agency-ops/ops/website-deployment-readiness.md`
- `agency-ops/ops/website-vercel-deployment-handoff-ticket.md`
- `agency-ops/website/content/website-brief.md`
- `agency-ops/workflows/website-lead-intake-workflow.md`
- `agency-ops/workflows/inbound-lead-capture-upgrade-plan.md`
- `agency-ops/workflows/stage-1-intake-handler-decision-scorecard.md`
- `agency-ops/workflows/stage-1-hosted-intake-implementation-ticket.md`
- `agency-ops/workflows/client-proof-and-case-study-capture-system.md`

## Decision Summary

- Decision date:
- Decision owner:
- Operator or builder:
- Repository:
- Website source path: `agency-ops/website/`
- Commit reviewed:
- Deployment target:
- Deployment URL:
- Domain reviewed, if any:
- Decision type: preview ready / production ready / public launch approved / launch hold
- Final decision: go / hold
- Reason for decision:

## Required Evidence

### Build Evidence

- Dependency install status:
- Build command run:
- Build result:
- Build log location or summary:
- TypeScript, routing, metadata, or CSS issues:
- Fixes made, if any:

Go criteria:

- Dependencies install successfully.
- `npm run build` completes successfully.
- Home, services, lead-intake, about, contact, and start routes compile.
- No unresolved build, route, metadata, or CSS errors remain.

### Preview Evidence

- Preview URL:
- Desktop review completed:
- Mobile review completed:
- Navigation review completed:
- CTA review completed:
- Content review completed:
- Known visual issues:

Go criteria:

- First viewport clearly identifies Kelvar LLC.
- Home, services, lead-intake, about, contact, and start routes render.
- Header and footer links work.
- Primary CTAs route intentionally to `/start` or `/lead-intake`.
- No major overlap, clipping, broken content, or placeholder text appears on primary paths.
- Demo proof remains labeled as demo proof and does not imply client results.

### Intake Evidence

Current intake stage: Stage 0 structured mailto / Stage 1 hosted form-to-email

Stage 0 checks:

- `/start` required fields tested:
- Consent requirement tested:
- Formatted email opens to `Kelvarllc.com@outlook.com`:
- Email body includes captured intake fields:
- Contact page direct email fallback works:

Stage 1 checks, only if implemented:

- Handler/vendor decision scorecard completed:
- Handler or vendor selected:
- Environment variables configured securely:
- Successful internal notification tested:
- Success state tested:
- Error state tested:
- Spam or honeypot guardrail tested:
- Direct email fallback tested:
- No auto-reply enabled without approval:
- No CRM write or repository lead record created automatically without approval:

Go criteria:

- Stage 0 mailto works, or Stage 1 hosted form-to-email passes all required checks.
- Direct email fallback remains available.
- Human review remains required before sales reply, quote, proposal, CRM update, or repository lead record.

### Business Readiness Evidence

- Website brief matches deployed state:
- Roadmap ready to update after decision:
- 30-day launch plan ready to update after decision:
- Memory/action log ready to update after decision:
- Public proof level reviewed:
- Case-study or testimonial language reviewed:
- Outreach copy does not claim unverified launch status:

Go criteria:

- Public copy does not overstate results, launch status, automation behavior, or client proof.
- Any proof shown is labeled by evidence level.
- User has approved public launch if the decision is beyond preview readiness.

## Decision Options

### Preview Ready

Use when the site can be reviewed from a Vercel preview URL but is not yet publicly launched.

Required before selecting:

- Build passed.
- Preview routes render.
- Intake behavior is testable.
- Known issues are documented.

Follow-up actions:

- Share preview for review.
- Fix any priority visual, route, or intake issues.
- Do not mark site publicly launched.

### Production Ready

Use when the site is technically ready for production deployment, but public launch approval or domain work is still pending.

Required before selecting:

- Build passed.
- Preview QA passed.
- Intake QA passed.
- Deployment root confirmed as `agency-ops/website/`.
- Rollback path understood.

Follow-up actions:

- Request public launch approval if needed.
- Prepare roadmap, website brief, and memory updates after launch.

### Public Launch Approved

Use only when the user has explicitly approved public launch or marking the site launched.

Required before selecting:

- Build passed.
- Preview QA passed.
- Intake QA passed.
- Production URL or domain is known.
- User approval is recorded.
- Public copy and proof level are reviewed.

Follow-up actions:

- Record launched URL.
- Update `agency-ops/ops/website-deployment-readiness.md`.
- Update `agency-ops/ops/agency-roadmap.md`.
- Update `agency-ops/website/content/website-brief.md`.
- Update memory action log and artifact index.
- Move next priority to Stage 1 intake upgrade or first controlled outreach batch.

### Launch Hold

Use when any required check is incomplete, failed, unknown, or approval-gated.

Common hold reasons:

- npm install failed.
- `npm run build` failed.
- Vercel root is wrong.
- Core route does not render.
- Mobile layout has major issues.
- Intake does not open or submit correctly.
- Direct email fallback is broken.
- Stage 1 handler or vendor is not selected.
- Environment variables are missing or unsafe.
- Public launch approval is missing.
- Copy implies unapproved proof, launch status, or automation behavior.

Follow-up actions:

- Record the hold reason.
- Assign the next fix.
- Keep Stage 0 mailto fallback available.
- Do not claim launch.

## Completed Record

Copy this section for each actual decision.

```markdown
## Website Launch Decision Record

- Decision date:
- Decision owner:
- Operator or builder:
- Commit reviewed:
- Deployment URL:
- Domain, if any:
- Decision type:
- Final decision:
- Reason:
- Build status:
- Preview QA status:
- Intake stage reviewed:
- Intake QA status:
- Public proof status:
- User approval status:
- Known issues:
- Required fixes:
- Follow-up owner:
- Follow-up due date:
- Repository updates completed:
- Memory updates completed:
```

## Current Status

Template ready. No launch decision has been made from this template yet. Current website status remains not publicly launched until build, preview QA, intake QA, deployment root, and approval are recorded.