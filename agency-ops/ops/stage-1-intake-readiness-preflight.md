# Stage 1 Intake Readiness Preflight

Date: 2026-06-14
Status: Internal readiness preflight
Workspace: `agency-ops/`
Area: Website intake capture
Current intake stage: Stage 0 structured mailto
Target intake stage: Stage 1 direct form-to-email submission

## Purpose

Prepare the Stage 1 `/start` intake upgrade without selecting a paid provider, configuring secrets, changing deployment settings, or claiming hosted intake is live.

This preflight sits between the Stage 1 decision scorecard, provider comparison record, hosted form-to-email implementation spec, and builder implementation ticket. It defines the exact evidence and approvals required before Stage 1 work can move from specified to implementation-ready.

This is not a provider selection, implementation approval, environment-variable change, deployment action, launch-status change, auto-reply approval, CRM write, repository auto-write, public proof item, or client-facing automation approval.

## Source Files

- `agency-ops/workflows/inbound-lead-capture-upgrade-plan.md`
- `agency-ops/workflows/stage-1-intake-handler-decision-scorecard.md`
- `agency-ops/ops/stage-1-intake-provider-comparison-record.md`
- `agency-ops/workflows/hosted-form-to-email-implementation-spec.md`
- `agency-ops/workflows/stage-1-hosted-intake-implementation-ticket.md`
- `agency-ops/ops/stage-0-intake-test-script.md`
- `agency-ops/ops/stage-0-intake-test-result-record-template.md`
- `agency-ops/ops/website-deployment-readiness.md`
- `agency-ops/ops/website-launch-blocker-dashboard.md`
- `agency-ops/ops/website-launch-evidence-log.md`

## Current Status

- Stage 0 mailto intake exists.
- Stage 0 intake test script exists.
- Stage 0 intake test-result record template exists.
- Stage 1 direct capture is specified.
- Stage 1 handler/vendor is not selected.
- Paid provider approval is not recorded.
- Email provider approval is not recorded.
- Environment variables are not configured.
- Build verification is not recorded in this environment.
- Preview URL is not recorded.
- Stage 1 is not live.

## Preflight Decision Bands

Use these bands before implementation:

| Band | Meaning | Allowed next action |
| --- | --- | --- |
| Hold | Missing build, preview, provider, or approval evidence | Keep Stage 0 and collect evidence |
| Decision-ready | Enough evidence to choose server route, hosted vendor, or stay Stage 0 | Complete decision record; do not implement yet |
| Implementation-ready | Decision recorded, approvals clear, secrets identified, QA plan ready | Start implementation only if explicitly approved |
| QA-ready | Implementation exists in preview/local environment | Run Stage 1 QA; do not claim live yet |
| Live-ready | QA passed and launch approval recorded | Update launch evidence/status only after approval |

Current band: Hold.

Reason: build/preview evidence and handler/provider approval are not recorded.

## Hard Stop Conditions

Stop before implementation if any are true:

- No build or preview evidence exists.
- No handler/vendor decision has been recorded.
- A paid provider would be required but paid-provider approval is missing.
- Email sending credentials or environment variables are required but not identified.
- Secrets would need to be committed to repository files.
- The selected option cannot preserve direct email fallback.
- The selected option includes auto-reply, CRM write, sheet write, repository write, pricing quote, scheduling prompt, or auto-send behavior without separate approval.
- Rollback to Stage 0 is unclear.

## Required Evidence Before Decision-Ready

| Evidence | Current status | Required before decision-ready |
| --- | --- | --- |
| Website build result | Missing / blocked in current environment | Build pass, CI pass, or documented blocker |
| Preview URL or local runnable environment | Missing | Preview/local route available for testing |
| Stage 0 intake QA result | Template exists, no completed run | Completed test result or documented blocker |
| Stage 1 requirement confirmation | Spec exists | Confirmed notification recipient, required fields, consent, spam guardrail, fallback |
| Handler/provider category score | Partial category comparison exists | Score server-backed route, hosted vendor, and/or stay Stage 0 |
| Cost posture | No paid provider approved | Confirm no-cost path or approval needed |
| Privacy posture | Not final | Confirm what data is sent, stored, and retained |
| Rollback plan | Stage 0 fallback exists | Confirm exact rollback action |

## Required Evidence Before Implementation-Ready

| Evidence | Required condition |
| --- | --- |
| Decision record | Completed and saved in repository |
| Selected option | Server-backed route, hosted vendor, automation webhook, or remain Stage 0 |
| Approval status | Explicitly recorded for paid provider, external vendor, email service, and implementation |
| Environment variables | Names identified; values kept outside repository |
| Notification recipient | `Kelvarllc.com@outlook.com` unless explicitly changed |
| Sender/from behavior | Known and testable |
| Spam control | Honeypot, rate limit, vendor protection, or equivalent defined |
| Validation | Required fields and consent checks defined |
| Success state | Visitor success message defined |
| Failure state | Visitor error/fallback path defined |
| Internal email format | Submission summary format defined |
| QA plan | Desktop/mobile/negative tests ready |
| Rollback | Stage 0 mailto fallback remains available |

## Stage 1 Minimum Field Set

Do not expand beyond this without a separate reason:

- Name.
- Business name.
- Email.
- Phone, optional unless later required.
- Workflow pain category.
- Current process summary.
- Main tool or tracker, if any.
- Desired first win.
- Consent checkbox.
- Honeypot/spam field hidden from normal visitors.

## Internal Notification Format

Recommended email subject:

```text
New Kelvar intake request - [Business Name]
```

Recommended email body:

```text
New website intake request

Name:
Business:
Email:
Phone:
Workflow pain:
Current process:
Current tool/tracker:
Desired first win:
Consent confirmed: yes/no
Submitted at:
Source route: /start

Recommended next internal action:
- Create or update lead record.
- Classify pipeline stage.
- Use website lead intake workflow.
- Do not send a reply until approved.
```

## QA Checklist Before Live Claim

Run these checks in a preview or local environment after implementation:

- Valid submission sends internal notification.
- Required fields block incomplete submission.
- Consent is required.
- Honeypot or spam guardrail is active.
- Success state is clear.
- Failure state gives direct email fallback.
- No auto-reply is sent unless separately approved.
- No CRM/sheet/repository write occurs unless separately approved.
- Submission does not expose secrets.
- Desktop layout works.
- Mobile layout works.
- Rollback to Stage 0 is confirmed.

## Decision Record Stub

Use this when evidence is ready:

```markdown
## Stage 1 Intake Readiness Decision

- Date:
- Current band: hold / decision-ready / implementation-ready / QA-ready / live-ready
- Build evidence:
- Preview/local evidence:
- Stage 0 QA evidence:
- Selected option:
- Score summary:
- Required provider or service:
- Paid provider approval:
- Environment variables required:
- Notification recipient:
- Spam control:
- Privacy notes:
- Rollback path:
- QA plan:
- Approval still needed:
- Next action:
```

## Current Recommendation

Stay on Stage 0 until build/preview evidence exists and a handler/provider decision is recorded.

Highest-value next safe actions:

1. Run build or collect CI evidence when available.
2. Run Stage 0 intake QA in a local or preview environment when available.
3. Score Stage 1 options after deployment path is known.
4. Keep Stage 1 implementation ticket ready, but do not implement until approval and evidence are complete.

## Guardrail

Broad permission to keep going means repo-scoped preparation, QA documentation, and readiness work may continue. It does not approve provider selection, paid accounts, secrets, environment variable changes, deployment, launch-status changes, public claims, auto-replies, CRM writes, repository auto-writes, mailbox drafts, sent outreach, pricing, scheduling, or auto-send behavior.
