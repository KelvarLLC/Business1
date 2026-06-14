# Agency KPI Tracker Spec

## Purpose

Define the operating metrics Kelvar LLC should track across lead generation, outreach, replies, discovery, proposals, delivery, proof, website launch, and intake readiness.

This spec does not create public claims or guarantee business outcomes. It defines the internal measurement system for the agency.

## Current Scope

- Repository: `KelvarLLC/Business1`
- Workspace: `agency-ops/`
- Primary offer: Lead Intake Command System / Follow-Up Engine
- Current market test: Dallas/Fort Worth home-services prospects
- Current website status: not launched
- Current outreach status: no outreach sent

## Source Files

- `agency-ops/ops/current-command-brief.md`
- `agency-ops/ops/30-day-launch-command-plan.md`
- `agency-ops/ops/next-move-command-board.md`
- `agency-ops/ops/agency-automation-control-loop.md`
- `agency-ops/ops/outreach-learning-log.md`
- `agency-ops/leads/2026-06-14-dallas-six-lead-follow-up-tracker.md`
- `agency-ops/proposals/dallas-six-lead-proposal-readiness-snapshot.md`
- `agency-ops/ops/website-launch-blocker-dashboard.md`
- `agency-ops/ops/website-launch-evidence-log.md`

## KPI Categories

### 1. Prospecting Metrics

Track the quantity and quality of lead sources.

| Metric | Definition | Current baseline | Source |
| --- | --- | ---: | --- |
| Prospects identified | Total prospects recorded in lead/prospect files | 6 Dallas leads plus prior H Med Spa | Lead records |
| Qualified-for-review prospects | Prospects with visible intake signal and offer fit | 6 Dallas leads | Readiness packets |
| Strong outreach prospects | Prospects scoring 21+ in readiness packet | 6 Dallas leads | Readiness packets |
| New lead records created | Lead records created this period | TBD | `agency-ops/leads/` |
| Niche segments tested | Distinct markets with prospect lists | Home services, med spa | Prospect lists |

### 2. Outreach Metrics

Track controlled market contact only after approval.

| Metric | Definition | Current baseline | Source |
| --- | --- | ---: | --- |
| Mailbox drafts created | Drafts created in Gmail/Outlook | 0 | Mailbox + tracker |
| Emails sent | Approved outbound emails sent | 0 | Mailbox + tracker |
| Follow-ups sent | Approved follow-up emails sent | 0 | Mailbox + tracker |
| Reply count | Prospect replies received | 0 | Mailbox + lead records |
| Positive/curious replies | Replies showing interest or curiosity | 0 | Reply kit + tracker |
| No-interest replies | Clear no or not-now responses | 0 | Reply kit + tracker |
| No-reply count | Prospects with no reply after follow-up window | 0 | Tracker |

### 3. Conversion Metrics

Track movement from reply to discovery and proposal readiness.

| Metric | Definition | Current baseline | Source |
| --- | --- | ---: | --- |
| Discovery-needed leads | Leads needing workflow review | 6 baseline before replies | Proposal snapshot |
| Discovery calls booked | Calls scheduled from replies/inquiries | 0 | Lead records |
| Discovery calls completed | Calls completed with notes | 0 | Discovery notes |
| Proposal-outline-ready leads | Leads with enough facts for outline | 0 | Proposal scorecard |
| Proposal-draft-ready leads | Leads with enough facts for proposal draft | 0 | Proposal scorecard |
| Proposals sent | Proposals actually sent | 0 | Mailbox + proposal records |
| Won engagements | Accepted projects | 0 | Lead/client records |
| Closed-lost leads | Closed with reason recorded | 0 | Lead records |

### 4. Delivery Metrics

Track delivery readiness and future client work.

| Metric | Definition | Current baseline | Source |
| --- | --- | ---: | --- |
| Client-specific delivery plans | Delivery plans created for won/pending work | 0 | `agency-ops/delivery/` |
| Implemented workflows | Workflows delivered to clients | 0 | Delivery records |
| QA-passed workflows | Delivered workflows with QA evidence | 0 | Delivery QA notes |
| Handoff packets completed | Client handoff documentation complete | 0 | Delivery records |
| Proof candidates captured | Delivery outcomes eligible for proof review | 0 | Proof capture system |
| Public proof approved | Client-approved public proof items | 0 | Proof capture records |

### 5. Website And Launch Metrics

Track readiness without overstating launch status.

| Metric | Definition | Current baseline | Source |
| --- | --- | ---: | --- |
| Build checks attempted | Dependency/build checks attempted | Prior blocked attempts | Evidence log |
| Build checks passed | Successful `npm run build` results | 0 | Evidence log |
| Preview URLs recorded | Vercel or equivalent preview URLs recorded | 0 | Evidence log |
| Routes QA-passed | Core routes passing QA | 0 | Route QA checklist |
| Stage 0 intake QA-passed | `/start` mailto behavior verified | 0 | Stage 0 test script |
| Launch decision records completed | Formal launch decisions recorded | 0 | Launch decision records |
| Public launch status | Current public launch status | not launched | Launch status |

### 6. Intake Upgrade Metrics

Track Stage 1 readiness without selecting providers prematurely.

| Metric | Definition | Current baseline | Source |
| --- | --- | ---: | --- |
| Stage 1 handler scorecards completed | Handler/vendor choices scored | 0 | Handler scorecard |
| Stage 1 provider selected | Provider/route selected with approval | no | Decision record |
| Stage 1 implementation started | Builder work begun | no | Implementation ticket |
| Stage 1 notification QA passed | Internal notification tested | no | Evidence log |
| Stage 1 success/failure QA passed | Visitor states tested | no | Evidence log |
| Auto-reply enabled | Any auto-reply active | no | Approval record |
| CRM/sheet/repo auto-write enabled | Any automated write active | no | Approval record |

## Weekly KPI Review Template

```markdown
# Weekly KPI Review - [Week Of]

## Snapshot

- Prospects identified:
- Strong outreach prospects:
- Drafts created:
- Emails sent:
- Replies received:
- Positive replies:
- Discovery calls booked:
- Proposal-outline-ready:
- Proposal-draft-ready:
- Proposals sent:
- Won engagements:
- Website build status:
- Website launch status:
- Intake stage:

## What Changed

- Revenue:
- Website:
- Intake:
- Proposal/delivery:
- Proof:

## Signals Learned

- Objections:
- Copy notes:
- Offer notes:
- Website/FAQ notes:

## Blockers

- Approval blockers:
- Environment blockers:
- Tool/provider blockers:
- Client/prospect blockers:

## Next Week Focus

1.
2.
3.
```

## Dashboard Row Template

Use for a spreadsheet or future markdown dashboard.

| Date | Prospects | Drafts | Sends | Replies | Positive replies | Discoveries | Proposal-ready | Proposals sent | Wins | Website status | Intake status | Main blocker | Next action |
| --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | --- | --- | --- | --- |
| TBD | 6 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | not launched | Stage 0 specified | Draft/send/build approvals and environment access | Create approved drafts or continue readiness work |

## Measurement Rules

- Count an email as sent only if a connected mailbox tool actually sends it or the user confirms an external send with enough detail to record.
- Count a reply only when the actual reply is available or summarized with enough evidence to classify.
- Count a proposal as sent only when it was actually delivered through an approved channel.
- Count proof as public only after client approval and measurement status are recorded.
- Count website launch status only from `agency-ops/ops/website-launch-status.md` and completed launch decision records.
- Do not use estimated revenue, guaranteed ROI, or speculative client results as KPI facts.

## Current KPI Baseline

As of 2026-06-14:

- Six Dallas home-services leads are ready for controlled outreach review.
- No mailbox drafts have been created.
- No outreach has been sent.
- No replies or discovery calls exist.
- No proposals have been sent.
- Website is not launched.
- Stage 0 intake is specified but not deployed/preview-QA verified.
- Stage 1 hosted intake is specified but not selected, built, or live.

## Recommended Next KPI Move

Create a weekly KPI review file after the first real external action occurs, such as:

- mailbox drafts created,
- first email sent,
- first reply received,
- website build checked,
- Vercel preview created,
- Stage 0 intake QA completed.

Until then, this spec is the baseline measurement contract.
