# Website Route QA Checklist

## Purpose

Create a route-by-route QA checklist for the Kelvar LLC website under `agency-ops/website/` so preview and production checks can be performed consistently once build and deployment access are available.

This checklist does not mark the website preview-ready, production-ready, or publicly launched. It records what must be checked before a launch decision record can safely change status.

## Current Website Truth

- Website source: `agency-ops/website/`
- Framework: Next.js App Router
- Current launch status: not launched
- Build status in current environment: not verified
- Intended deployment root: `agency-ops/website/`
- Current Stage 0 intake path: structured mailto console at `/start`
- Current intake destination: `Kelvarllc.com@outlook.com`
- Stage 1 hosted intake: specified but not live

## Source Control Documents

- `agency-ops/ops/website-launch-status.md`
- `agency-ops/ops/website-launch-evidence-log.md`
- `agency-ops/ops/website-vercel-deployment-handoff-ticket.md`
- `agency-ops/ops/website-launch-decision-record-template.md`
- `agency-ops/ops/website-deployment-readiness.md`
- `agency-ops/website/content/website-brief.md`

## Required Build Checks

Run when dependency installation is available:

```bash
cd agency-ops/website
npm install
npm run build
```

Record results in:

- `agency-ops/ops/website-launch-evidence-log.md`
- A completed launch decision record if status may change

Do not change launch status from build output alone.

## Global QA Checks

Use on desktop and mobile.

### Layout And Rendering

- Page renders without server/client errors.
- No blank page, hydration error, or missing route.
- Text is readable and does not overflow containers.
- Header and footer are visible where expected.
- Navigation fits on mobile and desktop.
- No obvious content overlap, clipping, or layout shift.
- Images, backgrounds, and visual sections load or fail gracefully.
- Visual tone matches practical AI automation ecosystem positioning.

### Navigation

- Header logo/home link routes correctly.
- Main navigation routes correctly.
- Footer links route correctly.
- Primary CTA routes to `/start` unless a page intentionally uses direct email.
- Services route links to relevant offer pages where applicable.
- Browser back/forward behavior works normally.

### Accessibility And Usability

- Pages have clear headings.
- Buttons and links have meaningful labels.
- Forms/inputs are keyboard reachable.
- Focus states are visible enough to use.
- Color contrast is acceptable for core text and CTAs.
- Mobile tap targets are not cramped.

### Business Claim Safety

- No claim that client results exist unless approved proof exists.
- Demo proof is clearly labeled as demo proof, not client result proof.
- No guaranteed revenue, guaranteed lead volume, or guaranteed speed claim.
- No implication that Stage 1 hosted intake is live.
- No claim that the website is launched unless launch status has changed.

## Route Checklist

### `/` Home

Desktop checks:

- Hero renders with clear Kelvar LLC / AI automation ecosystem positioning.
- Main CTA is visible above the fold and points to `/start`.
- Service fleet or offer overview is visible and scannable.
- Command-center / armada visual language supports the business offer without overwhelming clarity.
- Sections lead logically from problem to service modules to next action.

Mobile checks:

- Hero text wraps cleanly.
- CTA remains visible and tappable.
- Visual elements do not cover text.
- Service sections stack cleanly.
- Footer is readable.

CTA checks:

- Primary CTA routes to `/start`.
- Any services CTA routes to `/services` or relevant offer route.
- No CTA points to a non-existent route.

### `/services`

Desktop checks:

- Service modules are easy to compare.
- Lead Intake Command System is clearly represented.
- Other offers remain practical and scoped.
- Links to `/lead-intake` and `/start` work where present.

Mobile checks:

- Service modules do not become oversized marketing cards.
- Text stays readable.
- CTAs remain accessible.

Business checks:

- Copy does not overpromise broad AI transformation.
- Offers stay narrow enough to sell and deliver.

### `/lead-intake`

Desktop checks:

- Page clearly explains Lead Intake Command System / Follow-Up Engine.
- Demo proof section is clearly labeled as demo workflow proof.
- FAQ addresses CRM replacement, existing tools, auto-send safety, and what happens after review request.
- CTA routes to `/start`.

Mobile checks:

- Demo proof section remains readable.
- FAQ accordion or sections fit without overlap.
- CTA is reachable after core content.

Safety checks:

- No real client proof is implied.
- Auto-send is not presented as default.
- Workflow is framed as routing, visibility, and follow-up support.

### `/about`

Desktop checks:

- About copy translates the AI ecosystem ambition into practical buyer-facing language.
- Principles are clear and businesslike.
- Page supports trust without unsupported claims.

Mobile checks:

- Ambition/principles sections stack cleanly.
- Text remains readable without cramped spacing.

Business checks:

- Internal empire/armada language is translated into practical service language.
- No claim of scale, team size, client results, or deployment status beyond evidence.

### `/contact`

Desktop checks:

- Contact path is clear.
- Direct email fallback is visible if intended.
- CTA or link to `/start` exists.
- Discovery framing asks for workflow details, not broad vague AI interest.

Mobile checks:

- Contact details are tappable/readable.
- CTA does not overlap with other content.
- Email link works where present.

Business checks:

- Contact language routes toward qualification, discovery, or review request.

### `/start`

Desktop checks:

- Structured intake console renders.
- Prospect can choose or describe workflow pain.
- Contact, workflow, tools, manual steps, missed items, first win, urgency, and consent fields are visible as designed.
- Submit/review action opens a formatted email to `Kelvarllc.com@outlook.com`.
- Failure or fallback behavior is understandable.

Mobile checks:

- All inputs are usable on small screens.
- Labels remain associated with inputs.
- Long fields do not overflow.
- CTA remains reachable after completing fields.

Stage 0 intake checks:

- Mailto recipient is `Kelvarllc.com@outlook.com`.
- Email subject is clear enough to recognize as a review request.
- Email body includes structured fields from the intake console.
- Consent language is present before submission.
- If no email client opens, direct email fallback is available somewhere on the site.

Safety checks:

- No auto-reply is implied.
- No CRM/sheet/repository auto-write is claimed.
- No Stage 1 hosted form-to-email success state is shown unless Stage 1 is actually implemented.

## Responsive Viewports To Check

Minimum manual QA viewports:

| Device type | Suggested viewport |
| --- | --- |
| Mobile narrow | 360 x 740 |
| Mobile large | 430 x 932 |
| Tablet | 768 x 1024 |
| Desktop | 1440 x 900 |
| Wide desktop | 1920 x 1080 |

Record any layout issue with:

- Route
- Viewport
- Description
- Screenshot or preview link if available
- Severity: blocker / major / minor
- Recommended fix

## CTA QA Matrix

| Source route | CTA/link | Expected target | Status |
| --- | --- | --- | --- |
| `/` | Primary start/review CTA | `/start` | pending QA |
| `/` | Services link | `/services` | pending QA |
| `/services` | Lead Intake detail link | `/lead-intake` | pending QA |
| `/services` | Start/review CTA | `/start` | pending QA |
| `/lead-intake` | Start/review CTA | `/start` | pending QA |
| `/about` | Start/contact CTA | `/start` or `/contact` | pending QA |
| `/contact` | Start/review CTA | `/start` | pending QA |
| Footer | Email/contact link | direct email or `/contact` | pending QA |

## Evidence Recording Template

Use this format in `agency-ops/ops/website-launch-evidence-log.md` after QA:

```markdown
## Evidence Entry

- Date and time:
- Operator:
- Repo: `KelvarLLC/Business1`
- Commit or branch checked:
- Work area: `agency-ops/website/`
- Action type: preview QA / intake QA / blocker
- Environment: local / Vercel preview / production
- Preview or production URL:
- Routes checked:
- Viewports checked:
- Result:
- Blockers:
- Major issues:
- Minor issues:
- Decision impact: no status change / preview-ready candidate / launch-hold
- Follow-up action:
```

## Launch Decision Rule

After QA, do not mark the site preview-ready, production-ready, or publicly launched unless:

1. Build evidence exists.
2. Preview or deployment URL exists if evaluating preview/production status.
3. Route QA is complete for core routes.
4. Stage 0 intake behavior is tested.
5. Known issues are documented.
6. A launch decision record is completed.
7. Required user approval is recorded for public launch.

## Current Recommendation

Use this checklist when build/deployment access is available. Until then, keep website status as `not launched`, keep Stage 0 intake truth clear, and continue repo-backed readiness work without claiming deployment or launch.