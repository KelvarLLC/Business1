# Website Launch Blocker Dashboard

## Purpose

Give Kelvar LLC a single dashboard for what is blocking website preview readiness, production readiness, public launch approval, and Stage 1 hosted intake.

This dashboard does not change launch status. It organizes blockers so future build, preview, Vercel, intake, and approval work can move quickly without overstating what is live.

## Current Status

- Website source: `agency-ops/website/`
- Current launch status: not launched
- Build status: not verified in current environment
- Vercel preview: not recorded
- Production URL/domain: not recorded
- Current intake stage: Stage 0 structured mailto console
- Stage 1 hosted intake: specified but not live
- Public proof level: demo proof only

## Source Of Truth Files

- `agency-ops/ops/current-command-brief.md`
- `agency-ops/ops/website-launch-status.md`
- `agency-ops/ops/website-launch-evidence-log.md`
- `agency-ops/ops/website-route-qa-checklist.md`
- `agency-ops/ops/website-deployment-readiness.md`
- `agency-ops/ops/website-vercel-deployment-handoff-ticket.md`
- `agency-ops/ops/website-launch-decision-record-template.md`
- `agency-ops/workflows/stage-1-intake-handler-decision-scorecard.md`
- `agency-ops/workflows/stage-1-hosted-intake-implementation-ticket.md`

## Blocker Summary

| Blocker category | Current status | Severity | Owner / next action | Status impact |
| --- | --- | --- | --- | --- |
| Repository scope | Confirmed `KelvarLLC/Business1` and `agency-ops/` | Clear | Continue repo-contained work only | No blocker |
| Dependency install | Not verified; prior npm registry access failed for `@types/node` | Blocker | Run `npm install` in environment with registry access | Blocks build evidence |
| Build | Not verified | Blocker | Run `npm run build` after dependency install | Blocks preview-ready status |
| Direct clone | Prior direct clone failed with 403 CONNECT tunnel | Blocker in current environment | Use GitHub connector for file operations; use CI or accessible environment for build | Blocks local checkout-based QA |
| Vercel project | Not confirmed | Blocker | Connect repo with root `agency-ops/website` | Blocks preview/deployment evidence |
| Preview URL | Not recorded | Blocker | Create or inspect Vercel preview | Blocks preview QA |
| Production URL/domain | Not recorded | Later blocker | Record domain or production URL after preview readiness | Blocks public-launch approval |
| Route QA | Checklist exists; not executed against preview | Blocker | Use `website-route-qa-checklist.md` after preview exists | Blocks preview-ready status |
| Stage 0 intake QA | Not verified in preview/production | Blocker | Test `/start` mailto behavior in preview | Blocks production-ready status |
| Stage 1 hosted intake | Specified but not selected or live | Not launch blocker for Stage 0 | Score handler/vendor before implementation | Blocks Stage 1 claim only |
| Proof claims | Demo proof only | Clear if labeled correctly | Keep proof labeled as demo proof | Blocks client-result claims |
| Public launch approval | Not recorded | Blocker | Complete launch decision record and get explicit approval | Blocks public-launch status |

## Status Transition Requirements

### To Mark Preview-Ready Candidate

Required evidence:

- Dependencies install successfully.
- Build passes.
- Vercel preview URL exists.
- Deployment root is confirmed as `agency-ops/website`.
- Core routes render: `/`, `/services`, `/lead-intake`, `/about`, `/contact`, `/start`.
- Header, footer, and primary CTAs route correctly.
- Major layout issues are absent or recorded.
- Stage 0 intake is at least visible and testable.
- Launch decision record is created with preview-ready candidate status.

Current state: not eligible.

Primary blockers:

- Dependency install not verified.
- Build not verified.
- Preview URL not recorded.
- Route QA not executed.

### To Mark Production-Ready Candidate

Required evidence:

- Preview-ready requirements are satisfied.
- Production deployment or production URL exists.
- Stage 0 intake mailto behavior passes QA, or Stage 1 hosted intake passes all QA.
- Direct email fallback works.
- Public proof review confirms demo-only proof is not overstated.
- Known issues are documented.
- Rollback path is understood.
- Launch decision record is created with production-ready candidate status.

Current state: not eligible.

Primary blockers:

- Preview-ready evidence missing.
- Production URL/domain not recorded.
- Intake QA not executed.

### To Mark Public Launch Approved

Required evidence:

- Production-ready candidate requirements are satisfied.
- User explicitly approves public launch status.
- Launch decision record captures approval.
- Website brief, launch status, roadmap, and memory are updated after approval.

Current state: not eligible.

Primary blockers:

- Production-ready evidence missing.
- User launch approval not recorded.

### To Mark Stage 1 Hosted Intake Live

Required evidence:

- Handler/vendor decision scorecard completed.
- Handler/vendor or server-backed route selected.
- Any provider cost or paid setup approved.
- Required environment variables configured securely.
- Submission sends one internal notification to `Kelvarllc.com@outlook.com`.
- Required fields validated.
- Consent required.
- Spam guardrail or honeypot works.
- Success and failure states tested.
- Direct email fallback remains available.
- No auto-reply, CRM write, scheduling prompt, pricing quote, or repository lead creation occurs unless separately approved.

Current state: not eligible.

Primary blockers:

- Handler/vendor not selected.
- Environment variables not configured.
- Stage 1 implementation not built or tested.

## Blocker Details

### Environment Blockers

Current:

- npm install cannot be trusted in the current environment because prior registry access failed.
- Direct clone previously failed due to a 403 CONNECT tunnel response.

Workaround:

- Use GitHub connector for repo-backed file updates.
- Run build and preview checks in CI, Vercel, or another environment with npm registry access.

### Deployment Blockers

Current:

- Vercel project setup is not recorded.
- Root directory confirmation is pending.
- Preview URL is not recorded.

Required next evidence:

- Vercel project name.
- Preview URL.
- Commit deployed.
- Root directory: `agency-ops/website`.
- Build result.

### Intake Blockers

Current:

- Stage 0 mailto exists in source but has not been QA-tested in preview/production.
- Stage 1 hosted form-to-email is not live.

Required next evidence for Stage 0:

- `/start` form renders.
- Required fields behave as expected.
- Consent is required.
- Submission opens email to `Kelvarllc.com@outlook.com`.
- Email body includes structured intake fields.
- Direct email fallback exists.

Required next evidence for Stage 1:

- Handler/vendor decision.
- Secure environment variable setup.
- Successful notification test.
- Success/failure state test.
- Spam guardrail test.

### Proof Blockers

Current:

- Public proof level is demo proof only.
- No client result, testimonial, screenshot, metric, or case study is approved.

Safe position:

- Keep demo proof clearly labeled.
- Do not publish client claims.

### Approval Blockers

Current:

- Public launch approval is not recorded.
- DNS/domain approval is not recorded.
- Paid provider approval is not recorded.
- Stage 1 provider approval is not recorded.

Safe position:

- Keep website status as not launched.
- Keep Stage 1 as specified but not live.

## Evidence To Collect Next

| Evidence item | Where to record | Required for |
| --- | --- | --- |
| Dependency install result | `website-launch-evidence-log.md` | Build evidence |
| Build result | `website-launch-evidence-log.md` | Preview-ready candidate |
| Vercel project/root | `website-launch-evidence-log.md` and deployment handoff record | Preview-ready candidate |
| Preview URL | `website-launch-evidence-log.md` | Route QA |
| Route QA result | `website-launch-evidence-log.md` | Preview-ready candidate |
| Stage 0 intake QA result | `website-launch-evidence-log.md` | Production-ready candidate |
| Launch decision record | New file from launch decision template | Any status change |
| User public-launch approval | Launch decision record | Public-launch approved |

## Current Operator Recommendation

Do not mark the website preview-ready, production-ready, publicly launched, or Stage 1-live yet.

Best next technical action:

1. Run dependency install and build in an environment with npm registry access.
2. Create or inspect Vercel preview with root `agency-ops/website`.
3. Use `agency-ops/ops/website-route-qa-checklist.md` for route and intake QA.
4. Record evidence in `agency-ops/ops/website-launch-evidence-log.md`.
5. Complete a launch decision record before changing status.

Best next repo-only action if environment remains blocked:

- Keep launch docs, intake docs, proposal readiness, and outreach readiness current.
