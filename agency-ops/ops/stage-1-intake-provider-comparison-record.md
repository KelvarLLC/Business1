# Stage 1 Intake Provider Comparison Record

## Purpose

Prepare the Stage 1 `/start` intake upgrade decision without selecting a paid provider, configuring secrets, changing deployment settings, or claiming hosted intake is live.

Stage 1 means replacing the current structured mailto path with a direct form submission that notifies `Kelvarllc.com@outlook.com` while preserving human review.

## Current Status

- Current intake stage: Stage 0 structured mailto console
- Stage 1 status: specified but not live
- Handler/vendor selected: no
- Paid provider approved: no
- Environment variables configured: no
- Auto-reply enabled: no
- CRM/sheet/repository auto-write enabled: no
- Public claim allowed: no, do not claim Stage 1 is live

## Source Files

- `agency-ops/workflows/stage-1-intake-handler-decision-scorecard.md`
- `agency-ops/workflows/hosted-form-to-email-implementation-spec.md`
- `agency-ops/workflows/stage-1-hosted-intake-implementation-ticket.md`
- `agency-ops/workflows/inbound-lead-capture-upgrade-plan.md`
- `agency-ops/ops/stage-0-intake-test-script.md`
- `agency-ops/ops/website-launch-blocker-dashboard.md`

## Options To Compare

This record compares categories, not final vendors.

| Option | Description | Current decision status |
| --- | --- | --- |
| Stay Stage 0 | Keep structured mailto until build/preview and outreach signal justify upgrade | viable fallback |
| Server-backed route | Add a website route/API handler that validates form data and sends internal notification | not selected |
| Hosted form vendor | Use a third-party form service to forward submissions to Outlook | not selected |
| Automation platform webhook | Use Make/Zapier/n8n/webhook style receiver to forward or process submissions | not selected |

## Hard Requirements

Reject any option that cannot support these requirements:

- Direct submission without relying on visitor email client.
- Internal notification to `Kelvarllc.com@outlook.com`.
- Required field validation.
- Consent requirement.
- Spam guardrail or honeypot.
- Success and error states.
- Direct email fallback.
- No public auto-reply unless separately approved.
- No automatic CRM write, pricing quote, scheduling prompt, or repository lead record unless separately approved.
- No committed secrets.
- Rollback path to Stage 0 mailto.

## Comparison Matrix

Score each option from 0 to 3 using the Stage 1 intake handler decision scorecard.

```text
0 = poor or unknown
1 = weak
2 = acceptable
3 = strong
```

| Factor | Stay Stage 0 | Server-backed route | Hosted form vendor | Automation platform webhook |
| --- | ---: | ---: | ---: | ---: |
| Deployment fit | 3 | TBD | TBD | TBD |
| Setup speed | 3 | TBD | TBD | TBD |
| Deliverability confidence | 1 | TBD | TBD | TBD |
| Spam control | 1 | TBD | TBD | TBD |
| Privacy/data control | 2 | TBD | TBD | TBD |
| Maintenance burden | 3 | TBD | TBD | TBD |
| Rollback safety | 3 | TBD | TBD | TBD |
| Cost control | 3 | TBD | TBD | TBD |
| Total | 19 | TBD | TBD | TBD |
| Decision band | acceptable fallback | unscored | unscored | unscored |

## Option Notes

### Stay Stage 0

Best when:

- Build/deployment is not verified.
- No preview URL exists.
- No intake volume exists yet.
- No handler/provider decision is approved.

Strengths:

- No new provider.
- No secrets.
- Easy rollback because this is the current state.
- Honest while website launch evidence is missing.

Weaknesses:

- Relies on visitor email client.
- Lower submission reliability.
- Harder to track failed attempts.
- Not a permanent capture system.

Current recommendation:

- Keep Stage 0 until build/preview evidence exists or the user approves a specific Stage 1 path.

### Server-Backed Route

Best when:

- Vercel or selected deployment environment is confirmed.
- Build passes.
- Environment variables can be configured securely.
- Email provider path is approved.

Strengths:

- Highest control over validation, formatting, data handling, and future upgrades.
- Clean path to later sheet/CRM capture if approved.
- No external form branding.

Risks:

- Requires email provider selection or existing trusted sender path.
- Requires secure secret handling.
- Requires code, build, deployment, and QA.

Open questions:

- Which email service is approved, if any?
- Can environment variables be configured in the deployment platform?
- What sender/from address should be used?
- What logging should be retained, if any?

### Hosted Form Vendor

Best when:

- Speed matters and a trustworthy vendor is acceptable.
- Form forwarding can be tested quickly.
- Privacy, branding, and cost are acceptable.

Strengths:

- Faster setup than custom route in many cases.
- Vendor may provide spam protection.
- Lower code burden.

Risks:

- Vendor account becomes an operational dependency.
- Free tiers may include branding, limits, or weaker deliverability.
- Data retention/privacy settings need review.
- Future CRM/sheet integration may require rework.

Open questions:

- Is a paid plan required?
- Is branding acceptable?
- Can submissions forward reliably to Outlook?
- Can spam protection and consent be enforced?

### Automation Platform Webhook

Best when:

- A no-code automation platform is already approved.
- The agency wants a path toward later routing, sheet logging, or CRM updates.
- The webhook can be protected from spam or misuse.

Strengths:

- Can evolve into richer lead routing later.
- Useful if the agency standardizes on one automation platform.
- Can support internal notifications and structured logging.

Risks:

- May create premature platform dependency.
- May require paid plan or account setup.
- Webhook security/spam controls must be handled.
- Can tempt scope creep into auto-replies or CRM writes before approval.

Open questions:

- Which platform is approved for agency operations?
- Is webhook security sufficient?
- Are costs acceptable?
- Who maintains failed runs?

## Decision Record Template

Use this before implementation:

```markdown
## Stage 1 Intake Provider Decision

- Date:
- Operator:
- Current website status:
- Build evidence available: yes / no
- Preview URL available: yes / no
- Option selected: stay Stage 0 / server-backed route / hosted form vendor / automation platform webhook
- Score summary:
- Why selected:
- Why alternatives rejected:
- Paid provider involved: yes / no
- Approval recorded for paid provider: yes / no / n/a
- Secrets required: yes / no
- Environment variables required:
- Rollback path:
- QA required before live:
- Decision impact: no status change / implementation-ready / hold
```

## Stage 1 Implementation Readiness Checklist

Do not implement until these are true:

- Decision record is completed.
- Build/deployment path is known.
- Provider/route is approved if paid or external.
- Required environment variables are identified.
- Test submission plan exists.
- Success and failure states are defined.
- Spam guardrail is defined.
- Direct email fallback remains available.
- No auto-reply, CRM write, sheet write, repo write, or auto-send is included unless separately approved.

## Current Recommendation

Stay on Stage 0 for now.

Reason:

- Website build and preview evidence are not recorded.
- Vercel project/root evidence is not recorded.
- No provider or email service is approved.
- No intake volume signal exists yet.

Best next evidence to collect before selecting Stage 1:

1. Build result.
2. Preview URL.
3. Stage 0 `/start` QA result.
4. User preference for server-backed route versus hosted vendor if Stage 1 becomes urgent.

## Current Status

Comparison record created. No Stage 1 provider selected. No paid provider approved. No environment variables configured. Stage 1 remains specified but not live.
