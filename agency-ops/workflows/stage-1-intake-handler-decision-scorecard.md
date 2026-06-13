# Stage 1 Intake Handler Decision Scorecard

## Purpose

Choose the safest and simplest Stage 1 capture path for the `/start` website intake form before implementation begins.

This scorecard decides between:

1. Server-backed route inside the Next.js website app.
2. Hosted form vendor that forwards submissions to `Kelvarllc.com@outlook.com`.

This is a decision tool only. It does not approve a paid provider, create accounts, set environment variables, deploy code, or change the live website.

## Source References

Use this with:

- `agency-ops/workflows/hosted-form-to-email-implementation-spec.md`
- `agency-ops/workflows/stage-1-hosted-intake-implementation-ticket.md`
- `agency-ops/ops/website-deployment-readiness.md`
- `agency-ops/workflows/inbound-lead-capture-upgrade-plan.md`

## Decision Principles

Choose the option that is:

- Fast enough to ship.
- Easy to test.
- Easy to roll back.
- Low maintenance.
- Compatible with the website deployment environment.
- Clear about privacy, spam handling, and email deliverability.
- Free of premature CRM, auto-reply, or sales automation complexity.

## Hard Requirements

Any option must support:

- Direct submission without opening the visitor's email client.
- Internal notification to `Kelvarllc.com@outlook.com`.
- Required field validation.
- Consent requirement.
- Spam guardrail or honeypot.
- Success and error states.
- Direct email fallback.
- No public auto-reply unless separately approved.
- No automatic CRM write, pricing quote, scheduling prompt, or repository lead record.
- No committed secrets.

If an option cannot meet these requirements, reject it for Stage 1.

## Scorecard

Score each category from 0 to 3.

```text
0 = poor or unknown
1 = weak
2 = acceptable
3 = strong
```

### 1. Deployment Fit

How well does the option fit the current website deployment path?

- 0: Cannot run in the intended deployment environment.
- 1: Requires unclear platform workarounds.
- 2: Works with setup effort.
- 3: Fits naturally with the deployment root and framework.

### 2. Setup Speed

How quickly can the option be implemented and tested?

- 0: Slow or blocked by account/provider uncertainty.
- 1: Multiple new setup steps.
- 2: Reasonable setup.
- 3: Fast, clear, and low-friction.

### 3. Deliverability Confidence

How likely is the internal notification to arrive reliably?

- 0: Unknown or poor deliverability.
- 1: Deliverability depends on unverified sender details.
- 2: Acceptable with setup.
- 3: Strong deliverability path with clear verification.

### 4. Spam Control

Can the option prevent or reduce junk submissions?

- 0: No spam control.
- 1: Basic client-side checks only.
- 2: Honeypot, rate limit, or vendor protection available.
- 3: Strong simple protections without heavy setup.

### 5. Privacy And Data Control

Does the option keep intake data handled responsibly?

- 0: Unclear or risky data handling.
- 1: Data handling is vendor-dependent and poorly documented.
- 2: Acceptable if settings are reviewed.
- 3: Clear control over what is sent, stored, and retained.

### 6. Maintenance Burden

How much ongoing maintenance does the option create?

- 0: High burden.
- 1: Frequent vendor/dashboard maintenance likely.
- 2: Manageable.
- 3: Minimal ongoing burden.

### 7. Rollback Safety

How easy is it to return to Stage 0 mailto if something fails?

- 0: Hard to rollback.
- 1: Rollback requires multiple changes.
- 2: Rollback is straightforward.
- 3: Rollback is immediate and well-contained.

### 8. Cost Control

How well does the option avoid premature spend?

- 0: Requires paid setup immediately.
- 1: Free tier unclear or risky.
- 2: Low-cost or free path available.
- 3: No new spend required for initial testing.

## Decision Bands

Total possible score: 24.

- 20-24: strong Stage 1 choice.
- 15-19: acceptable if weak areas are documented.
- 9-14: use only if stronger option is blocked.
- 0-8: reject for Stage 1.

## Option A: Server-Backed Route

Use this when:

- Vercel or the selected deployment environment supports the route cleanly.
- A reliable email provider can be configured.
- Required environment variables can be set safely.
- The team wants more control over validation, formatting, and future upgrades.

Strengths:

- Strong control over validation and email format.
- Easier to evolve toward sheet or CRM capture later.
- No external form branding.
- Clear rollback to mailto if isolated well.

Risks:

- Requires provider credentials and environment variables.
- Requires email deliverability setup.
- Requires build/deployment verification.
- Requires code ownership and maintenance.

Best when:

- The deployment environment and email provider are known.
- Build access is available.
- Secret handling is ready.

## Option B: Hosted Form Vendor

Use this when:

- The agency needs the fastest no-code or low-code path.
- Vendor forwarding to `Kelvarllc.com@outlook.com` can be tested easily.
- Spam protection is built in.
- The vendor terms, privacy behavior, branding, and cost are acceptable.

Strengths:

- Fast setup if a trusted vendor is already available.
- Less custom code.
- Built-in spam controls may be available.
- Easier for a non-technical operator to maintain in the short term.

Risks:

- Vendor account and settings become operational dependencies.
- Data handling needs review.
- Free tiers may add branding, limits, or deliverability constraints.
- Future sheet or CRM upgrade may require rework.

Best when:

- Speed matters more than code control.
- No reliable email provider is ready for a server route.
- The vendor is simple, low-risk, and easy to leave.

## Recommended Default

Default to server-backed route only if these are true:

- Build/deployment access is available.
- Environment variables can be configured safely.
- Email provider choice is approved.
- Notification delivery can be tested.

Otherwise, hold at Stage 0 mailto or use a hosted form vendor only after reviewing cost, privacy, branding, spam controls, and rollback.

## Decision Record Template

Use this before implementation:

```markdown
## Stage 1 Intake Handler Decision

- Date:
- Decider:
- Selected option: server-backed route / hosted form vendor / remain Stage 0
- Reason:
- Server-backed route score:
- Hosted vendor score:
- Chosen provider or vendor, if any:
- Required environment variables:
- Cost status: none / free tier / paid approval needed
- Privacy notes:
- Spam protection:
- Rollback approach:
- Approval needed before implementation:
- Next action:
```

## Current Recommendation

Remain at Stage 0 until build/deployment access and provider setup are available. When ready, score server-backed route first. Use a hosted vendor only if it is materially faster and passes privacy, cost, spam, and rollback checks.
