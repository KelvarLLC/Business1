# Dallas Six-Lead Follow-Up Tracker

## Purpose

Keep the first six Dallas/Fort Worth home-services prospects organized from draft review through send, reply handling, follow-up, discovery, proposal readiness, or closeout.

This tracker does not approve mailbox draft creation or sending. It is a control surface so outreach does not become scattered once action-level approval is given.

## Scope

Offer: Lead Intake Command System / Follow-Up Engine

Campaign: Dallas/Fort Worth home-services quote, estimate, and contact intake review

Current sender recommendation if approved later: Outlook / `Kelvarllc.com@outlook.com`

Approval gates:

- Mailbox drafts: not created until explicitly approved.
- Initial sends: not sent until explicitly approved after draft review.
- Follow-up sends: not sent until explicitly approved unless a future instruction approves a specific follow-up sequence.
- Pricing: not quoted from this tracker.
- Deployment or website status: not changed by this tracker.

## Source Files

- `agency-ops/workflows/outreach-execution-control-sheet.md`
- `agency-ops/leads/2026-06-13-outreach-review-and-send-plan.md`
- `agency-ops/leads/2026-06-14-dallas-first-batch-revenue-readiness.md`
- `agency-ops/leads/2026-06-14-dallas-second-batch-revenue-readiness.md`
- `agency-ops/workflows/lead-intake-reply-response-kit.md`
- `agency-ops/offers/lead-intake-scope-menu.md`

## Tracker Table

| Batch | Prospect | Current stage | Readiness score | Draft source | Mailbox draft status | Send status | Date sent | Follow-up due | Reply status | Next action | Notes |
| --- | --- | --- | ---: | --- | --- | --- | --- | --- | --- | --- | --- |
| 1 | DFW HVAC | lead-identified | 23 | `2026-06-13-dallas-home-services-outreach-drafts.md` | not created | not sent | TBD | TBD | no reply | Await action-level approval to create Outlook draft | Strong hook: 2-business-hour response expectation. |
| 1 | Cool Tech | lead-identified | 23 | `2026-06-13-dallas-home-services-outreach-drafts.md` | not created | not sent | TBD | TBD | no reply | Await action-level approval to create Outlook draft | Strong hook: HVAC plus commercial refrigeration request categories. |
| 1 | Lone-Star Roof Systems | lead-identified | 24 | `2026-06-13-dallas-home-services-outreach-drafts.md` | not created | not sent | TBD | TBD | no reply | Await action-level approval to create Outlook draft | Strong hook: detailed estimate fields, photos, insurance-claim flag, appointment preference. |
| 2 | Southern Botanical | lead-identified | 23 | `2026-06-13-dallas-home-services-outreach-drafts-batch-2.md` | not created | not sent | TBD | TBD | no reply | Hold until first batch is reviewed, sent, or intentionally held | Strong hook: rich quote-form routing data. |
| 2 | Prestonwood Landscape Services | lead-identified | 23 | `2026-06-13-dallas-home-services-outreach-drafts-batch-2.md` | not created | not sent | TBD | TBD | no reply | Hold until first batch is reviewed, sent, or intentionally held | Strong hook: commercial quote intake and best-time-to-call field. |
| 2 | Dane Roofing | lead-identified | 21 | `2026-06-13-dallas-home-services-outreach-drafts-batch-2.md` | not created | not sent | TBD | TBD | no reply | Hold until first batch is reviewed, sent, or intentionally held | Strong hook: residential, commercial, and storm-damage inquiry classification. |

## Follow-Up Timing Rule

Default follow-up timing after an approved send:

- Follow up 3 business days after the initial email if no reply.
- Create a follow-up draft first unless follow-up sending has also been explicitly approved.
- Keep the follow-up tied to the original workflow-map question.

Business-day examples:

| Initial send day | Default follow-up due |
| --- | --- |
| Monday | Thursday |
| Tuesday | Friday |
| Wednesday | Monday |
| Thursday | Tuesday |
| Friday | Wednesday |

## Reply Classification

Use `agency-ops/workflows/lead-intake-reply-response-kit.md` before responding.

| Reply type | Stage update | Next action |
| --- | --- | --- |
| Interested or curious | qualification-in-progress | Draft response, ask discovery questions, prepare discovery notes. |
| Wants a call | discovery-needed | Draft scheduling reply and prepare discovery outline. |
| Pricing question | qualification-in-progress | Use scope menu; do not quote final pricing without enough context. |
| Already has CRM or tool | nurture or qualification-in-progress | Acknowledge existing system and offer workflow map around it. |
| Not interested | closed-lost or nurture | Record reason and do not keep pushing. |
| Referral to another contact | lead-identified | Update contact channel and draft new response for approval. |
| Sensitive data or compliance question | paused-human-review | Avoid advice; ask for human review before replying. |

## Lead Record Update Checklist After Any Approved Send

Update the matching lead record with:

- Outreach status: sent
- Mailbox used
- Date sent
- Follow-up due date
- Reply status: no reply yet
- Current pipeline stage: outreach-sent or lead-identified with outreach sent noted
- Link back to this tracker

Update this tracker with:

- Mailbox draft status
- Send status
- Date sent
- Follow-up due
- Any reply classification
- Next action owner

## Lead Record Update Checklist After Any Reply

Update the matching lead record with:

- Reply date
- Reply summary
- Reply category
- Buying signal or objection
- Missing information
- Recommended next step
- Pipeline stage update

Update this tracker with:

- Reply status
- Next action
- Follow-up due, if applicable

## First-Batch Operating Sequence

Recommended sequence when action-level approval is given:

1. Create Outlook drafts for DFW HVAC, Cool Tech, and Lone-Star Roof Systems.
2. Keep them unsent for user review.
3. If revised, update the saved outreach draft source or add a dated revision note.
4. Send only after explicit send approval.
5. Record send dates and follow-up due dates here and in lead records.
6. Hold second-batch sends until first-batch signal is reviewed.

## Second-Batch Operating Sequence

Recommended sequence after first-batch review:

1. Decide whether second-batch copy should inherit any first-batch learning.
2. Create Outlook drafts for Southern Botanical, Prestonwood Landscape Services, and Dane Roofing only if approved.
3. Keep them unsent for review.
4. Send only after explicit send approval.
5. Record send dates and follow-up due dates here and in lead records.

## Current Status Summary

- Six leads are identified and scored.
- First-batch and second-batch draft-only copy exists in repository files.
- No mailbox drafts have been created.
- No outreach has been sent.
- No follow-up dates exist because no send has occurred.
- The next gated decision remains: create first-batch Outlook drafts for review only, or continue non-destructive preparation.
