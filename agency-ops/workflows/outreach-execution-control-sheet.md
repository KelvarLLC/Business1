# Outreach Execution Control Sheet

## Purpose

Give the first outbound test a simple operating control so drafts, approval, mailbox actions, follow-up timing, and lead-record updates all happen in the same order.

This sheet applies to the current Lead Intake Command System / Follow-Up Engine campaign for Dallas/Fort Worth home-service prospects.

## Current Approval Status

- Outreach sending: not approved.
- Draft creation in mailbox: pending user choice.
- Recommended mailbox: `Kelvarllc.com@outlook.com`.
- Recommended first batch: DFW HVAC, Cool Tech, and Lone-Star Roof Systems.
- Recommended follow-up timing: 3 business days after the first email if no reply.

Do not send any email until the user explicitly approves sending.

## Recommended First-Batch Queue

| Order | Prospect | Current stage | Draft source | Recommended action | Follow-up trigger |
| --- | --- | --- | --- | --- | --- |
| 1 | DFW HVAC | lead-identified | `agency-ops/leads/2026-06-13-dallas-home-services-outreach-drafts.md` | Create Outlook draft for review | 3 business days after send if no reply |
| 2 | Cool Tech | lead-identified | `agency-ops/leads/2026-06-13-dallas-home-services-outreach-drafts.md` | Create Outlook draft for review | 3 business days after send if no reply |
| 3 | Lone-Star Roof Systems | lead-identified | `agency-ops/leads/2026-06-13-dallas-home-services-outreach-drafts.md` | Create Outlook draft for review | 3 business days after send if no reply |

## Draft Creation Checklist

Use this checklist when the user approves mailbox draft creation.

1. Use Outlook unless the user chooses Gmail.
2. Create drafts only; do not send.
3. Use the saved subject line and body from the draft source.
4. Keep the CTA to one question: whether a simple workflow map would be useful.
5. Do not add claims about guaranteed revenue, guaranteed lead capture, compliance advice, or existing internal problems that have not been confirmed.
6. After drafts are created, report which drafts exist and ask for send approval.

## Send Approval Checklist

Use this checklist only after the user has reviewed the drafts and approves sending.

1. Confirm the sender mailbox.
2. Confirm the final recipient address for each prospect.
3. Confirm send date and local timezone.
4. Send only the approved batch.
5. Update each lead record with:
   - outreach status
   - mailbox used
   - date sent
   - follow-up due date
   - current stage
6. Update the pipeline summary with the active follow-up dates.

## Reply Handling Rules

When a reply comes in:

- Positive or curious reply: move the lead to `qualification-in-progress` or `discovery-needed` and create discovery notes.
- Objection or timing issue: keep the lead in `lead-identified` or move to nurture with the objection captured.
- Clear no: move the lead to `closed-lost` and record the reason.
- Referral to another contact: update contact channel and draft a new response for approval.

Do not promise a build, price, implementation timeline, or guaranteed outcome from an email reply alone.

## Follow-Up Rules

If no reply arrives after 3 business days:

1. Use the saved follow-up template from `agency-ops/leads/2026-06-13-dallas-home-services-outreach-drafts.md`.
2. Keep the follow-up short and connected to the original workflow-map question.
3. Create a draft first unless the user has explicitly approved sending follow-ups for the batch.
4. After a follow-up is sent, update the matching lead record and pipeline summary.

## Second-Batch Candidates

Hold these until the first batch is reviewed, revised, or sent:

- Southern Botanical
- Prestonwood Landscape Services
- Dane Roofing

Second-batch draft source: `agency-ops/leads/2026-06-13-dallas-home-services-outreach-drafts-batch-2.md`.

## Decision Options For User

Recommended next approval choice:

1. Create Outlook drafts for DFW HVAC, Cool Tech, and Lone-Star Roof Systems.
2. Revise the first-batch copy first.
3. Use Gmail instead of Outlook.
4. Hold outbound and continue website/deployment readiness work.

## Current Next Step

Ask the user to choose one of the decision options above. If they say to keep going but do not approve outreach, continue non-destructive website, intake, proposal, or delivery-system improvements inside `agency-ops/`.
