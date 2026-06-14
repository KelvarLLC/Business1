# Dallas Six-Lead Proposal Readiness Snapshot

## Purpose

Create a reusable proposal-readiness snapshot for the six Dallas/Fort Worth home-services leads before any proposal work begins.

This file does not approve outreach, pricing, mailbox drafts, or proposal sending. It gives the operator a clean way to decide what must be known before a lead can move from reply or discovery into a scoped proposal.

## Current Scope

Offer: Lead Intake Command System / Follow-Up Engine

Leads covered:

- DFW HVAC
- Cool Tech
- Lone-Star Roof Systems
- Southern Botanical
- Prestonwood Landscape Services
- Dane Roofing

Supporting files:

- `agency-ops/leads/2026-06-14-dallas-first-batch-revenue-readiness.md`
- `agency-ops/leads/2026-06-14-dallas-second-batch-revenue-readiness.md`
- `agency-ops/leads/2026-06-14-dallas-six-lead-follow-up-tracker.md`
- `agency-ops/workflows/home-services-lead-intake-discovery-call-script.md`
- `agency-ops/proposals/lead-intake-proposal-decision-scorecard.md`
- `agency-ops/proposals/lead-intake-proposal-assembly-kit.md`
- `agency-ops/offers/lead-intake-scope-menu.md`

## Readiness Categories

Use these after a reply, website inquiry, or discovery call.

| Category | Meaning | Allowed next action |
| --- | --- | --- |
| Not proposal-ready | Interest is unclear or no discovery data exists. | Ask focused questions or keep in nurture. |
| Proposal-outline-ready | Pain and first-win direction are clear, but tools, scope, or owner details are missing. | Draft an outline only; do not quote final pricing. |
| Proposal-draft-ready | Pain, intake source, tools, first win, owner, and package path are clear enough for a bounded proposal draft. | Use proposal assembly kit to draft a proposal for review. |
| Nurture / close | No fit, no urgency, no decision path, or no meaningful pain. | Record reason and stop active pursuit or set nurture note. |

## Minimum Facts Needed Before Proposal Drafting

A lead is not proposal-draft-ready until these are known:

- Primary intake source: website form, phone, email, ads, referrals, marketplace, or mixed.
- Current submission destination: inbox, CRM, field-service tool, spreadsheet, form dashboard, or unknown.
- First response owner: owner, admin, dispatcher, sales team, office, or other.
- Follow-up gap: routing, first response, scheduling, quote status, reminders, reporting, or no clear gap.
- Desired first win: blueprint, single-source build, follow-up visibility upgrade, or other.
- Current tools to keep: CRM, field-service platform, email, calendar, spreadsheet, phone system, or other.
- Manual steps causing friction.
- Approval owner and maintenance owner.
- Any must-avoid constraint, such as no CRM rebuild, no auto-send, no paid tools, or no process disruption.

## Six-Lead Snapshot

| Lead | Current stage | Readiness now | Likely package path | Known strongest angle | Missing facts before proposal draft |
| --- | --- | --- | --- | --- | --- |
| DFW HVAC | lead-identified | Not proposal-ready | Follow-up visibility upgrade or single-source build | Protect 2-business-hour estimate response rhythm | Submission destination, response owner, tracking method, follow-up process, tools, decision owner |
| Cool Tech | lead-identified | Not proposal-ready | Single-source build or follow-up visibility upgrade | Service-type routing for HVAC and commercial refrigeration requests | Submission destination, category routing, urgency rules, owner, current tool stack, decision owner |
| Lone-Star Roof Systems | lead-identified | Not proposal-ready | Single-source build | Detailed estimate form can route by project type, photos, insurance flag, and appointment preference | Submission destination, photo handling, routing rules, scheduling workflow, tools, decision owner |
| Southern Botanical | lead-identified | Not proposal-ready | Single-source build or follow-up visibility upgrade | Quote routing by property type, service interest, budget, and contact preference | Submission destination, sales/admin owner, routing by service, quote status workflow, tools, decision owner |
| Prestonwood Landscape Services | lead-identified | Not proposal-ready | Follow-up visibility upgrade | Commercial quote intake with property type, service interest, budget, and best time to call | Submission destination, assignment logic, best-time-to-call handling, status tracking, tools, decision owner |
| Dane Roofing | lead-identified | Not proposal-ready | Single-source build or blueprint | Residential, commercial, and storm-damage inquiry classification | Submission destination, request routing, inspection follow-up, phone/form tracking, tools, decision owner |

## Proposal-Readiness Scoring

After a reply or discovery call, score each factor from 0 to 2.

```text
0 = unknown or weak
1 = partially known
2 = clear enough for scoped proposal work
```

| Factor | Score |
| --- | ---: |
| Pain is specific | 0-2 |
| Primary intake source is known | 0-2 |
| Current tools are known | 0-2 |
| First response owner is known | 0-2 |
| Follow-up gap is known | 0-2 |
| First-win package path is known | 0-2 |
| Decision owner is known | 0-2 |
| Constraints are known | 0-2 |

Total possible score: 16.

Decision bands:

- 13-16: proposal-draft-ready
- 9-12: proposal-outline-ready
- 5-8: more discovery needed
- 0-4: nurture, close, or ask one clarifying question

## Package Path Decision Notes

### Blueprint

Best when:

- The prospect is interested but current process is unclear.
- Multiple tools or owners are involved.
- The buyer wants clarity before implementation.
- There is not enough information for a build proposal.

Do not oversell. The deliverable is a mapped workflow and recommendation.

### Single-Source Build

Best when:

- One intake source is clearly the main pain.
- The form, inbox, or request path can feed a simple tracker or notification workflow.
- The buyer wants a practical first build.

Keep scope to one intake source, one tracker destination, and one follow-up mechanism unless discovery proves more is needed.

### Follow-Up Visibility Upgrade

Best when:

- Leads are captured, but status and follow-up are unclear after first response.
- The buyer needs open-request visibility, reminders, and simple reporting.

Start with internal reminders and status tracking. Do not include auto-send unless explicitly approved.

## Proposal Snapshot Template

Use this after a qualified reply or discovery call.

```markdown
## Proposal Readiness Snapshot: [Business]

- Date:
- Current pipeline stage:
- Reply or discovery source:
- Primary intake source:
- Current tools:
- First response owner:
- Current follow-up process:
- Main pain:
- First-win candidate:
- Likely package path: blueprint / single-source build / follow-up visibility upgrade
- Known constraints:
- Decision owner:
- Maintenance owner:
- Proposal-readiness score:
- Readiness category:
- Missing facts:
- Recommended next action:
```

## Current Operating Recommendation

Do not draft client-specific proposals for any of the six Dallas leads yet. All six are still at `lead-identified` with no replies, discovery calls, or confirmed internal process details.

Best next proposal-related move after a positive reply:

1. Use `agency-ops/workflows/home-services-lead-intake-discovery-call-script.md` to capture the missing facts.
2. Score the lead with this snapshot.
3. Use `agency-ops/proposals/lead-intake-proposal-decision-scorecard.md` to confirm whether the lead is proposal-draft-ready, proposal-outline-ready, discovery-needed, or nurture/close.
4. Use `agency-ops/proposals/lead-intake-proposal-assembly-kit.md` only after the score supports proposal work.
