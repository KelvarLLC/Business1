# Lead Intake Already-Has-CRM Objection Path

Last updated: 2026-06-14 03:02 CDT

## Status And Guardrails

This is an internal, simulation-ready operating artifact for the Lead Intake Command System / Follow-Up Engine.

Use it when a prospect replies that they already use a CRM, field-service platform, scheduler, or lead-management tool.

This is not:

- a real prospect reply,
- sent outreach,
- a mailbox draft,
- a proposal,
- a pricing quote,
- a recommendation to replace the prospect's CRM,
- a client commitment,
- or approval to contact anyone.

Do not use this to criticize a prospect's existing system. The goal is to find the gap around the tool, or politely close/nurture if there is no gap.

## Simulated Trigger

Possible replies:

```text
We already use ServiceTitan.
```

```text
We have Jobber for this.
```

```text
Our CRM already handles leads.
```

```text
We are already using HubSpot / Housecall Pro / Service Fusion / FieldEdge / a spreadsheet.
```

Reply category:

- Category 4: Already Has CRM / Tool.

Pipeline interpretation:

- Existing tool does not automatically mean poor fit.
- The opportunity depends on whether the current tool is actually solving capture, routing, follow-up, and owner visibility.
- Keep the lead at `qualification-in-progress` if they mention gaps.
- Move to `nurture` or `closed-lost` if they are clearly satisfied and no workflow pain remains.

## Immediate Response Goal

The response should:

- respect the existing system,
- avoid implying the CRM is bad,
- ask about gaps around the system,
- position Kelvar as a workflow layer or cleanup layer when appropriate,
- move toward discovery only if a pain remains.

The response should not:

- suggest replacing the CRM by default,
- claim integration compatibility without checking,
- promise automation inside a named tool before access/discovery,
- quote a price,
- or offer auto-send behavior as the default.

## Draft-Only Response

Use only as internal draft copy until the user explicitly approves mailbox draft creation or sending.

```text
Subject: Re: estimate follow-up

Hi [Name],

That makes sense. If your CRM is already capturing, routing, and following up on leads cleanly, there may not be much to fix.

Where I can sometimes help is around the edges: missed form submissions, stale leads, reminders that are not being checked, duplicate entry, or owner visibility into what is still waiting on follow-up.

If any of those are still a pain, I can map the gap around the system you already use. If your current setup is working well, no worries at all.

Best,
Jameson
Kelvar LLC
```

## Gap Discovery Questions

Ask only if the prospect indicates a pain remains.

1. Which tool are you using today?
2. Where do new requests enter before they reach that tool?
3. Are all website, phone, email, and referral leads making it into the system?
4. Who checks whether a new lead was contacted?
5. What happens when a lead is stale or waiting on a reply?
6. Are reminders inside the tool being used consistently?
7. Is there a daily owner view of new, contacted, waiting, and follow-up-due leads?
8. What still gets tracked manually outside the CRM?
9. What should stay human-reviewed?
10. What would make the existing tool easier for the team to trust?

## Scope Path Classifier

Use `agency-ops/offers/lead-intake-scope-menu.md` after the tool and gap are known.

### Path A: CRM Is Working / No Pain

Use when:

- Prospect says the tool handles the workflow well.
- No missed-lead, stale-lead, routing, owner visibility, or follow-up issue is confirmed.

Pipeline move:

- `closed-lost` if clearly not interested.
- `nurture` if there may be future process cleanup.

Recommended response:

- Acknowledge and close politely.
- Do not keep following up after a clear no.

### Path B: CRM Edge Cleanup

Use when:

- CRM exists but some leads are not reliably captured.
- Staff still copy data manually.
- Leads arrive by email, form, phone notes, or referrals outside the CRM.

Likely offer shape:

- Workflow map.
- Lead-source inventory.
- Gap list.
- Recommended one-source intake improvement.

Proposal readiness:

- Discovery-needed until source, tracker, owner, and gap are known.

### Path C: Follow-Up And Owner Visibility Upgrade

Use when:

- CRM captures leads but stale leads are hard to see.
- Reminders or tasks are ignored.
- Owner wants a daily/weekly visibility layer.
- Team does not trust the pipeline view.

Likely offer shape:

- Follow-up due view.
- Owner summary.
- Status cleanup.
- Reminder/task review process.
- Human-reviewed draft prompts if approved.

Proposal readiness:

- Proposal-outline-ready after tool, owner, stale-lead definition, and desired review rhythm are known.

### Path D: Full CRM Rebuild Request

Use when:

- Prospect wants a full migration, replacement, or complex integration before a narrow first win is defined.

Pipeline move:

- Qualify carefully.
- Avoid oversized phase one.
- Recommend first mapping the current workflow and choosing a narrow pilot.

Guardrail:

- Do not promise migration, deep integration, or platform replacement without explicit scope and approval.

## Lead Record Update Shape

Add this to the relevant lead record if a real CRM objection arrives.

```markdown
## Reply Update - YYYY-MM-DD

- Reply category: already has CRM/tool
- Summary: Prospect said they already use [tool] for lead handling.
- Current stage: qualification-in-progress / nurture / closed-lost
- Buying signal: weak / moderate if they mention gaps
- Tool/system mentioned: [tool]
- Pain confirmed: none yet / missed leads / stale follow-up / owner visibility / duplicate entry / manual workaround
- Missing information: exact tool role, intake sources, stale-lead definition, owner review process, follow-up behavior
- Recommended response: acknowledge existing tool and ask whether gaps remain around capture, stale leads, or owner visibility
- Likely scope-menu path: CRM edge cleanup / follow-up visibility upgrade / nurture / closed-lost
- Next action: approved clarification response, discovery ask, nurture, or close
- Follow-up due: only if not a clear no
```

## Tracker Update Shape

If this were real, update the six-lead tracker like this:

| Field | Value |
| --- | --- |
| Reply status | already-has-crm |
| Pipeline stage | qualification-in-progress / nurture / closed-lost |
| Tool mentioned | [tool] |
| Pain confirmed | none / capture gap / stale follow-up / owner visibility / duplicate entry |
| Proposal readiness | discovery-needed unless gap is clear |
| Next action | approved clarification response or close/nurture |
| Guardrail | do not position as CRM replacement by default |

## Proposal Readiness Check

Do not create a proposal until these are known:

- Tool name.
- Whether the tool is the tracker of record.
- Which lead sources feed into it.
- What still falls outside the tool.
- Who owns first response.
- What stale or missed lead means to the team.
- What view or reminder is missing.
- What should remain manual.

Proposal-readiness classification:

- Tool named but no pain: nurture or closed-lost.
- Tool named plus vague pain: discovery-needed.
- Tool named plus confirmed gap and owner: proposal-outline-ready.
- Tool named plus source, gap, owner, timing, and desired first win: proposal-draft-ready.

## Safe Positioning Language

Use this positioning internally and in approved drafts:

"Kelvar does not need to replace the CRM to help. The first question is whether the existing system is catching the right leads, showing the right owner, and surfacing follow-up at the right time. If it already does that well, there may not be a project. If the gaps are around stale leads, missed handoffs, or owner visibility, the first win can be a small workflow layer around the system already in place."

## Failure Modes To Avoid

- Insulting or dismissing the prospect's existing tool.
- Assuming the CRM is badly configured.
- Promising compatibility with named tools before discovery.
- Turning a small visibility problem into a CRM rebuild.
- Quoting pricing before the gap is known.
- Continuing follow-up after the prospect says they are all set.

## Related Files

- `agency-ops/workflows/lead-intake-reply-response-kit.md`
- `agency-ops/offers/lead-intake-scope-menu.md`
- `agency-ops/workflows/home-services-lead-intake-discovery-call-script.md`
- `agency-ops/proposals/lead-intake-proposal-decision-scorecard.md`
- `agency-ops/proposals/lead-intake-proposal-assembly-kit.md`
- `agency-ops/proposals/2026-06-14-dfw-hvac-simulated-positive-reply-to-proposal-path.md`
- `agency-ops/proposals/2026-06-14-lead-intake-pricing-request-response-path.md`
- `agency-ops/ops/autonomous-safe-run-queue.md`
