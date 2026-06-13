# Inbound Lead Capture Upgrade Plan

## Purpose

Upgrade the website's current prefilled-email intake into a cleaner inbound lead capture system that still fits the agency's current stage: small, controlled, easy to review, and connected to the `agency-ops/` pipeline.

## Current Intake Baseline

- Website entry route: `/start`
- Offer landing route: `/lead-intake`
- Current capture method: prefilled email to `Kelvarllc.com@outlook.com`
- Current qualification destination: lead record under `agency-ops/leads/`
- Current workflow reference: `agency-ops/workflows/website-lead-intake-workflow.md`

The current email-first setup is acceptable for a pre-launch or early-launch site, but it should be upgraded before meaningful paid traffic or broad outreach points prospects at the website.

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

## Recommended Implementation Options

### Option 1: Form-To-Email First

Best fit: fastest low-risk launch.

How it works:

- Replace the `mailto:` CTA with a hosted form or simple website form endpoint.
- Send formatted submissions to `Kelvarllc.com@outlook.com`.
- Manually create or update lead records in `agency-ops/leads/` after review.

Pros:

- Fastest setup.
- Low operational complexity.
- Keeps human review in place.

Tradeoffs:

- Lead records are still manual.
- Reporting remains limited.

Recommended use:

- Use this for the first live website version if no CRM or sheet destination has been chosen.

### Option 2: Form-To-Sheet Lead Queue

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

### Option 3: Form-To-CRM With Drafted Replies

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

Start with Option 1: form-to-email first.

Reason: it removes the awkward `mailto:` dependency while preserving manual review and avoiding premature CRM complexity. Once the agency has a handful of real inquiries, upgrade to Option 2 or Option 3 based on volume and follow-up needs.

## First Implementation Scope

When approved, update the website so `/start` uses a real form flow.

Initial scope:

- Replace prefilled email CTA with a structured form UI or hosted form embed.
- Keep direct email available as a fallback on the contact page.
- Preserve the existing `/start` page logic and copy structure where possible.
- Route submissions to `Kelvarllc.com@outlook.com` until a sheet or CRM is chosen.
- Add a short confirmation state that sets expectations for response timing.
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

## Success Criteria

The upgrade is successful when:

- Prospects can submit without opening an email client.
- The agency receives complete enough details to qualify the lead.
- Every inquiry can be mapped to a pipeline stage.
- No automatic claims, promises, or sales commitments are sent without review.
- The workflow is documented well enough for a future operator to repeat.

## Current Next Step

Choose the permanent first capture path. Recommended: form-to-email first, then sheet or CRM after lead volume justifies it.