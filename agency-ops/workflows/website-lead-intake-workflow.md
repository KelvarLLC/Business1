# Website Lead Intake Workflow

## Purpose

Convert website visitors with a manual workflow pain into structured automation review requests that can move into lead qualification, discovery, proposal, and delivery planning.

## Current Website Entry Points

- Header CTA: `/start`
- Homepage hero CTA: `/start`
- Homepage final CTA: `/start`
- Services page CTA: `/start`
- Contact page primary CTA: `/start`
- Footer CTA: `/start`
- Lead Intake offer CTA: `/lead-intake`

## Current Intake Method

The `/start` page now uses a structured intake console. The visitor chooses one workflow pain category, fills out contact and workflow fields, confirms consent to be contacted, and submits the form.

Current Stage 0 behavior:

- The form formats the submission into a prefilled email.
- The email is addressed to `Kelvarllc.com@outlook.com`.
- No third-party form vendor, CRM, sheet, or auto-send workflow is connected yet.
- Human review is still required before any sales response or project commitment.

Stage 1 implementation target:

- Replace mailto submission with a hosted form-to-email endpoint.
- Send a formatted internal notification to `Kelvarllc.com@outlook.com`.
- Show a visitor confirmation state.
- Keep direct email available as fallback.
- Continue manual lead record creation after review.
- Use `agency-ops/workflows/hosted-form-to-email-implementation-spec.md` as the implementation guide.

Captured fields:

- Name
- Business
- Email
- Phone, optional
- Website, optional
- Workflow type
- Current tools involved
- What happens manually today
- What gets missed or delayed
- Best first win
- Timeline or urgency
- Consent to be contacted

This is the current interim path: more structured than a plain email CTA, but still intentionally lightweight until a permanent form, sheet, or CRM destination is selected.

## Stage 1 Submission Handling

When the hosted form-to-email path is implemented:

1. Validate required fields and consent server-side.
2. Reject or flag spam-like submissions.
3. Send a formatted internal notification to `Kelvarllc.com@outlook.com`.
4. Show a success or failure state to the visitor.
5. Do not auto-send sales replies.
6. Do not create automatic commitments, pricing, or project promises.
7. Create a repository lead record manually only after human review confirms the inquiry is real.

Reference:

- `agency-ops/workflows/hosted-form-to-email-implementation-spec.md`

## Lead Qualification Rules

Classify incoming website leads using the repository pipeline stages.

### Good-Fit Signals

- Prospect has one clear workflow causing visible time loss, missed follow-up, handoff friction, no-shows, or reporting delay.
- Prospect can name the current tools involved.
- Prospect can define what a useful first win would look like.
- Workflow fits one of the current service packages:
  - Lead intake and follow-up automation
  - Client onboarding handoff automation
  - Appointment reminder automation
  - Lightweight reporting dashboard automation

### Nurture Signals

- Prospect has a real pain but cannot yet define the workflow, tools, owner, or first win.
- Prospect wants broad AI transformation before choosing one operational process.
- Prospect lacks access to the source systems but may be able to gather it later.

### Poor-Fit Signals

- Request is outside service business operations or outside the agency's current offer set.
- Prospect asks for guaranteed revenue outcomes rather than workflow improvement.
- Scope requires legal, medical, financial, or compliance-sensitive automation before human review.
- Prospect needs a full custom software product instead of a bounded workflow automation.

## First Response Path

1. Create or update a lead record in `agency-ops/leads/` when a real prospect arrives.
2. Assign the clearest pipeline stage.
3. Summarize the workflow pain, likely offer fit, missing inputs, and recommended next step.
4. If qualified, request discovery details or draft a discovery call outline.
5. If proposal-ready, use `agency-ops/proposals/lead-intake-proposal-decision-scorecard.md` before assembling a proposal.
6. If the scorecard supports it, create a client-specific proposal from the closest starter file and assembly kit.

## Recommended Future Automation

When a form service, scheduling tool, CRM, sheet, or email automation path is chosen, replace the mailto-based submission with a true structured intake workflow:

1. Website form captures intake fields.
2. Form submission creates a lead record, CRM row, or lead queue entry.
3. Workflow assigns offer fit and preliminary stage.
4. Owner receives a summary and recommended next action.
5. Prospect receives a confirmation or scheduling prompt.
6. Qualified leads generate a discovery checklist or proposal starter.

## Required Future Decisions

- Preferred form, scheduling, sheet, or CRM destination.
- Whether submissions should enter a spreadsheet, CRM, issue tracker, or repository-backed lead record first.
- Which mailbox should send confirmation messages.
- Whether first responses should be draft-first or auto-sent after approval.
- How quickly website leads should receive follow-up.
- Which hosted form endpoint, vendor, or server-backed email provider will power Stage 1.

## Current Next Step

Use the structured `/start` intake console as the public intake path, then replace the mailto submission with the Stage 1 hosted form-to-email path when the website is ready for broader traffic and the form handler or vendor is chosen.
