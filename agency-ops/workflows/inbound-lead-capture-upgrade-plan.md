# Inbound Lead Capture Upgrade Plan

## Purpose

Upgrade the website's current intake into a cleaner inbound lead capture system that still fits the agency's current stage: small, controlled, easy to review, and connected to the `agency-ops/` pipeline.

## Current Intake Baseline

- Website entry route: `/start`
- Offer landing route: `/lead-intake`
- Current capture method: structured form UI that opens a prefilled email to `Kelvarllc.com@outlook.com`
- Current qualification destination: lead record under `agency-ops/leads/`
- Current workflow reference: `agency-ops/workflows/website-lead-intake-workflow.md`
- Stage 1 implementation spec: `agency-ops/workflows/hosted-form-to-email-implementation-spec.md`

The first no-vendor intake upgrade is complete: `/start` now collects structured fields before opening the email request. This is better than a plain email CTA, but it is still not a true hosted form endpoint, sheet queue, CRM entry, or automated confirmation workflow.

## Upgrade Goals

- Capture structured lead details without relying on the prospect to preserve email formatting.
- Reduce manual sorting time after a website inquiry arrives.
- Keep human review before any sales response is sent.
- Preserve repository-backed lead records as the durable business system of record.
- Avoid adding a heavy CRM before the agency has enough lead volume to justify it.

## Required Intake Fields

Minimum fields for the first permanent capture path:

- Name
- Business name
- Email
- Phone, optional
- Website, optional
- Workflow pain category
- Current tools involved
- What happens manually today
- What gets missed, delayed, or forgotten
- Best first win
- Timeline or urgency
- Consent to be contacted

Recommended hidden or operational fields:

- Source page, such as `/start` or `/lead-intake`
- Submitted timestamp
- Initial offer fit
- Initial pipeline stage
- Owner or reviewer
- Follow-up deadline

## Upgrade Stages

### Stage 0: Structured Mailto Console

Status: complete.

How it works:

- `/start` presents a structured intake form.
- The visitor chooses a workflow category and fills required details.
- Submission opens a formatted email to `Kelvarllc.com@outlook.com`.
- Human review turns the inquiry into a lead record and next action.

Best fit:

- Current pre-deployment or earliest live website state.
- No vendor setup required.
- Works as a low-risk bridge before a hosted capture path is chosen.

Tradeoffs:

- The visitor still needs an email client.
- Submissions are not automatically stored in a queue.
- No automatic acknowledgement is sent.

### Stage 1: Form-To-Email First

Best fit: fastest low-risk launch after deployment.

Implementation reference:

- `agency-ops/workflows/hosted-form-to-email-implementation-spec.md`

How it works:

- Replace the mailto submit behavior with a hosted form endpoint or simple server-backed form handler.
- Send formatted submissions to `Kelvarllc.com@outlook.com`.
- Show a visitor confirmation state.
- Keep direct email available as fallback.
- Manually create or update lead records in `agency-ops/leads/` after review.

Pros:

- Removes dependence on the visitor's email client.
- Low operational complexity.
- Keeps human review in place.

Tradeoffs:

- Lead records are still manual.
- Reporting remains limited.
- Requires a form handler, vendor, or email provider configuration.

Recommended use:

- Use this for the first live website version if no CRM or sheet destination has been chosen.

### Stage 2: Form-To-Sheet Lead Queue

Best fit: early pipeline tracking.

How it works:

- Website form sends structured submissions to a spreadsheet lead queue.
- Each row contains required fields, source page, timestamp, stage, owner, and next action.
- Qualified leads still get durable lead records in `agency-ops/leads/`.

Pros:

- Easier to sort, filter, and review multiple inquiries.
- Better for daily or weekly pipeline review.
- Still simple enough for early operations.

Tradeoffs:

- Requires a sheet destination and basic data hygiene.
- Repository records may lag unless review cadence is consistent.

Recommended use:

- Use this after the website is live and outbound starts producing enough replies or inquiries to need a queue.

### Stage 3: Form-To-CRM With Drafted Replies

Best fit: after repeatable lead flow exists.

How it works:

- Website form creates a CRM lead or deal.
- Automation assigns preliminary offer fit and pipeline stage.
- A draft response or discovery outline is generated for human approval.
- Proposal-ready opportunities are copied into repository-backed artifacts.

Pros:

- Strongest long-term sales workflow.
- Better follow-up tracking.
- Easier to scale across multiple offers.

Tradeoffs:

- More setup work.
- Higher risk of complexity before the agency has proven lead volume.

Recommended use:

- Use only after the first few qualified leads show consistent intake patterns.

## Recommended Next Choice

After deployment, move from Stage 0 to Stage 1: hosted form-to-email.

Reason: Stage 0 is enough to launch carefully, but Stage 1 removes the visitor email-client dependency while preserving manual review and avoiding premature CRM complexity. Once the agency has a handful of real inquiries, upgrade to Stage 2 or Stage 3 based on volume and follow-up needs.

## First Permanent Implementation Scope

When approved, update the website so `/start` uses a real form endpoint.

Initial scope:

- Keep the current structured form UI.
- Replace mailto submission with a hosted form endpoint or server-backed handler.
- Follow `agency-ops/workflows/hosted-form-to-email-implementation-spec.md` for fields, validation, email format, confirmation state, QA, rollback, and environment variables.
- Keep direct email available as a fallback on the contact page.
- Route submissions to `Kelvarllc.com@outlook.com` until a sheet or CRM is chosen.
- Add a short confirmation state that sets expectations without promising unapproved response timing.
- Update `agency-ops/workflows/website-lead-intake-workflow.md` with the selected capture path.
- Update `agency-ops/ops/website-deployment-readiness.md` with any required environment variables or vendor setup.

## Human Review Rules

Do not auto-send sales replies yet.

For each website inquiry:

1. Review the submission.
2. Create or update a lead record.
3. Assign preliminary stage and offer fit.
4. Draft a short reply or discovery question set.
5. Send only after human approval unless the user later approves a specific auto-response policy.

## Follow-Up SLA Recommendation

- New website inquiry: review within 1 business day.
- Good-fit lead: reply with discovery next step within 1 business day.
- Nurture lead: reply with a narrowing question or useful next step within 2 business days.
- Poor-fit lead: send a polite decline or redirect when appropriate.

## Success Criteria For Stage 1

The next upgrade is successful when:

- Prospects can submit without opening an email client.
- The agency receives complete enough details to qualify the lead.
- Every inquiry can be mapped to a pipeline stage.
- No automatic claims, promises, or sales commitments are sent without review.
- The workflow is documented well enough for a future operator to repeat.
- The deployment notes include the selected handler or vendor and required environment variables.

## Current Next Step

Run the website build check, deploy the current Stage 0 intake carefully, then choose the Stage 1 form endpoint or vendor using `agency-ops/workflows/hosted-form-to-email-implementation-spec.md` as the implementation guide.
