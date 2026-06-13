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

## Current Intake Method

The `/start` page guides the prospect through four common workflow categories and a short discovery prompt. The current submission path is a prefilled email to `Kelvarllc.com@outlook.com` with the following fields:

- Workflow type
- Current tools involved
- What happens manually today
- What gets missed or delayed
- Best first win
- Timeline or urgency

This is intentionally lightweight until a scheduling or form tool is selected.

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
5. If proposal-ready, create a client-specific proposal from the closest starter file.

## Recommended Future Automation

When a form, scheduling tool, CRM, or email automation path is chosen, replace the prefilled email flow with a structured intake workflow:

1. Website form captures intake fields.
2. Form submission creates a lead record or CRM row.
3. Workflow assigns offer fit and preliminary stage.
4. Owner receives a summary and recommended next action.
5. Prospect receives a confirmation or scheduling prompt.
6. Qualified leads generate a discovery checklist or proposal starter.

## Required Future Decisions

- Preferred form or scheduling tool.
- Whether submissions should enter a spreadsheet, CRM, issue tracker, or repository-backed lead record first.
- Which mailbox should send confirmation messages.
- Whether first responses should be draft-first or auto-sent after approval.
- How quickly website leads should receive follow-up.

## Current Next Step

Use the `/start` page as the public intake path, then select the permanent capture tool when the website is ready to deploy.
