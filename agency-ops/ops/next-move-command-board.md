# Next Move Command Board

## Purpose

Show the highest-value next moves available to the Automation Agency Operator inside `KelvarLLC/Business1` and `agency-ops/`.

This board is designed to answer: "What else can the operator do now?"

It ranks moves across revenue, website, intake, delivery, proof, and operating-system improvement while keeping approval gates visible.

## Current Operating Boundary

- Repository: `KelvarLLC/Business1`
- Workspace: `agency-ops/`
- Quick state: `agency-ops/ops/current-command-brief.md`
- Tool posture: GitHub and connected tools/apps may be used for relevant repo-scoped work.
- Sensitive actions: still require clear action-level approval.

## Current Agency State

### Revenue System

Ready assets:

- Six Dallas lead records.
- Two Dallas draft-only outreach batches.
- First-batch readiness packet.
- Second-batch readiness packet.
- Six-lead follow-up tracker.
- Home-services discovery call script.
- Dallas proposal-readiness snapshot.
- Reply response kit.
- Scope menu.
- Proposal assembly kit.

Current status:

- No outreach sent.
- No mailbox drafts created.
- First gated decision remains Outlook draft creation for the first three Dallas leads.

### Website System

Ready assets:

- Website source under `agency-ops/website/`.
- Website brief.
- Route QA checklist.
- Deployment readiness checklist.
- Vercel handoff ticket.
- Launch evidence log.
- Launch decision record template.
- Website launch status.

Current status:

- Website is not launched.
- Build is not verified in this environment.
- Vercel project, preview URL, production URL, and domain evidence are not recorded.
- Stage 0 mailto intake is current truth.

### Intake System

Ready assets:

- Stage 0 `/start` structured mailto console.
- Website lead-intake workflow.
- Hosted form-to-email implementation spec.
- Stage 1 handler decision scorecard.
- Stage 1 hosted intake implementation ticket.

Current status:

- Stage 1 hosted intake is specified but not live.
- No handler/vendor selected.
- No environment variables configured.
- No auto-reply, CRM write, sheet queue, or repository auto-write enabled.

### Delivery System

Ready assets:

- Lead Intake workflow spec.
- Lead Intake delivery plan starter.
- Proposal starter.
- Scope menu.
- Proof and case-study capture system.

Current status:

- No won client engagement recorded.
- Delivery system is ready for the first qualified project but no client-specific delivery plan is needed yet.

## Priority Board

| Priority | Move | Type | Why it matters | Gate |
| ---: | --- | --- | --- | --- |
| 1 | Create Outlook drafts for DFW HVAC, Cool Tech, and Lone-Star Roof Systems | Revenue activation | Starts controlled market contact with the strongest first-batch leads | Requires explicit draft-creation approval; send remains separate |
| 2 | Create website launch blocker dashboard | Website readiness | Separates environment blockers, evidence blockers, and approval blockers | Safe non-destructive repo artifact |
| 3 | Create Stage 0 intake test record template | Website/intake QA | Makes `/start` mailto QA repeatable once preview exists | Safe non-destructive repo artifact |
| 4 | Create first-client delivery simulation | Delivery readiness | Shows what a Lead Intake engagement would look like from intake to handoff | Safe if clearly labeled simulation |
| 5 | Create outreach learning log | Pipeline intelligence | Captures objections, replies, copy changes, and niche lessons over time | Safe non-destructive repo artifact |
| 6 | Create agency KPI tracker spec | Operating system | Defines metrics for prospects, drafts, sends, replies, discovery, proposals, wins, delivery, and proof | Safe non-destructive repo artifact |
| 7 | Create Stage 1 intake provider comparison record | Intake architecture | Prepares provider/tool choice without selecting a vendor | Safe if no paid provider is selected |
| 8 | Create route-by-route website issue log template | Website QA | Converts future preview QA into fixable issues | Safe non-destructive repo artifact |

## Best Immediate Demonstration Move

Recommended next non-gated action:

> Create a website launch blocker dashboard that separates blockers into environment, repository, deployment, intake, approval, proof, and follow-up categories.

Why this is useful:

- The website is a central public asset but not launched.
- Existing docs explain what to do, but a blocker dashboard makes the status easier to act on.
- It avoids pretending deployment is complete.
- It gives a future builder or operator a clean checklist of what must change before launch status can move.

## Best Immediate Gated Move

Recommended approval-gated action:

> Create Outlook drafts for DFW HVAC, Cool Tech, and Lone-Star Roof Systems for review only. Do not send until a second explicit approval.

Why this is useful:

- The readiness packets, tracker, discovery script, and proposal snapshot are now in place.
- Draft creation is reviewable and reversible.
- Sending can remain a separate decision.

## What I Can Show Next

### Revenue Demonstrations

1. Mailbox draft creation for first-batch leads, if explicitly approved.
2. A simulated reply-handling exercise using the reply response kit.
3. A proposal outline mockup for a hypothetical positive DFW HVAC reply.
4. A lead scoring dashboard for future prospect batches.
5. A niche expansion plan for another market, such as dental, med spa, legal intake, home cleaning, or B2B service firms.

### Website Demonstrations

1. Launch blocker dashboard.
2. Stage 0 `/start` intake QA script.
3. Preview QA issue-log template.
4. Website copy improvement pass based on Dallas lead objections.
5. Stage 1 hosted-intake architecture decision record.

### Delivery Demonstrations

1. Simulated client delivery plan for a roofing estimate intake workflow.
2. Implementation blueprint that is tool-neutral across Zapier, Make, n8n, Airtable, Sheets, and CRM tools.
3. QA and failure-mode checklist for lead capture, routing, reminders, and reporting.
4. Client handoff packet outline.
5. First 30-day maintenance checklist after launch.

### Operating-System Demonstrations

1. Agency KPI tracker spec.
2. Weekly operator review template.
3. Multi-agent handoff template.
4. Tool/provider decision record template.
5. Objections-and-learning log.

## Decision Rules

Continue automatically when:

- The action is non-destructive.
- The file stays inside `agency-ops/`.
- The work improves outreach, discovery, proposal, delivery, website, intake, proof, QA, or operating continuity.
- No email, deployment, pricing, paid vendor, public proof, auto-send, or destructive change is performed.

Ask or wait for clear approval when:

- Creating mailbox drafts.
- Sending any email or follow-up.
- Publishing pricing or quoting final project cost.
- Selecting paid tools or vendors.
- Changing deployment, DNS, production, or launch status.
- Publishing client proof.
- Enabling auto-send.
- Touching any repository other than `KelvarLLC/Business1`.

## Current Recommendation

Keep building the non-gated readiness stack until the user chooses to approve the first outreach action.

Next safe artifact:

> `agency-ops/ops/website-launch-blocker-dashboard.md`

Next gated action:

> Create first-batch Outlook drafts for review only.
