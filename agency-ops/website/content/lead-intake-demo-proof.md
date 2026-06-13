# Lead Intake Demo Proof

## Purpose

Create a clear internal demo artifact that can support the website, outreach conversations, discovery calls, and proposals without pretending to be a real client case study.

This is demo proof, not client proof. Do not describe it as a client result, revenue outcome, or deployed customer system until a real engagement exists.

## Demo Name

Lead Intake Command System: Roofing Estimate Request Demo

## Buyer Problem

A local roofing company receives estimate requests from its website, but the owner and office manager do not always see them quickly. Some leads get a first reply, some wait too long, and follow-up depends on memory.

## Demo Scenario

A homeowner submits an after-hours estimate request:

- Name: Taylor Morgan
- Email: taylor@example.com
- Phone: 555-0100
- ZIP code: 75201
- Service requested: roof leak inspection
- Message: water spot appeared after a storm; wants a quote this week
- Submitted: Friday evening

## Current Manual Risk

Without a simple workflow:

- The request sits in an inbox until Monday.
- Nobody owns the next action.
- The lead may not be marked contacted.
- Follow-up is not scheduled if the homeowner does not respond.
- The owner cannot quickly see whether the lead is new, waiting, qualified, or closed.

## Demo Workflow

1. Capture the estimate request from the primary source.
2. Normalize the request into a lead record.
3. Set initial stage to `new`.
4. Assign owner to office manager.
5. Set next action to `call or reply next business morning`.
6. Flag urgency because the message includes storm/leak context.
7. If not marked contacted by the next business morning, prompt the owner.
8. If contacted but no response within 3 business days, prompt a follow-up.
9. Show the lead in a simple owner view with stage, age, owner, and next action.

## Demo Output

Example normalized lead record:

```text
lead_id: demo-roofing-001
created_at: Friday 7:18 PM
source: Website estimate form
lead_name: Taylor Morgan
email: taylor@example.com
phone: 555-0100
service_requested: Roof leak inspection
location: 75201
message_summary: Storm-related water spot; wants quote this week
stage: new
owner: Office manager
next_action: Call or reply next business morning
next_follow_up_at: Monday 9:00 AM
qualification_notes: Potential urgent inspection; service area assumed pending confirmation
```

## What The Demo Proves

The demo proves the shape of the solution, not a guaranteed business outcome:

- A scattered inquiry can become a structured lead record.
- The next action can be assigned instead of left implicit.
- Follow-up timing can be visible.
- The owner can review stuck leads without searching the inbox.
- Phase one can be useful without a full CRM rebuild.

## Website-Safe Copy

Use wording like this on the website or in proposal material:

"Demo workflow: a roofing estimate request becomes a structured lead record with an owner, next action, and follow-up reminder so the team can see what needs attention before the lead goes cold."

Avoid wording like this:

- "Proven to increase revenue."
- "Guaranteed to close more jobs."
- "Client results showed..."
- "Automatically handles all sales follow-up."

## Outreach-Safe Explanation

Use this when explaining the offer to a prospect:

"The first version can be simple: capture one estimate request path, put it into a tracker, assign a next action, and remind the team if nobody follows up. It is not a full CRM rebuild. It is the first workflow that makes missed leads harder to ignore."

## Demo To Proposal Bridge

If a prospect responds positively, adapt the demo into their context:

- Replace roofing estimate request with their highest-value inquiry type.
- Replace website form with their primary lead source.
- Replace office manager with their real owner or team role.
- Replace follow-up timing with their preferred timing.
- Replace tracker with their current CRM, spreadsheet, board, or chosen destination.

## Related Artifacts

- `agency-ops/offers/lead-intake-follow-up-automation.md`
- `agency-ops/workflows/lead-intake-follow-up-workflow-spec.md`
- `agency-ops/workflows/lead-intake-discovery-outline.md`
- `agency-ops/delivery/lead-intake-follow-up-delivery-plan-starter.md`
- `agency-ops/website/app/lead-intake/page.tsx`

## Current Next Step

Use this demo as internal proof and sales explanation until a real client result or case study exists.