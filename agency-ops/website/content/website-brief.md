# Kelvar LLC Website Brief

## Purpose

Create the first public-facing website for Kelvar LLC's automation agency offer. The site positions the business as a practical automation partner for small service businesses with recurring intake, follow-up, onboarding, reminder, reporting, and delivery friction.

## Visual Thesis

Command-center galactic armada: a dark full-bleed systems-map hero, grounded neutral content sections, restrained motion, and one green operational accent that keeps the cosmic direction tied to practical workflow clarity.

## Content Plan

- Home: brand, ecosystem promise, service fleet, command-layer model, business outcomes, delivery process, and discovery CTA.
- Services: five narrow automation modules with problem, included scope, best fit, and expected outcome.
- Start: structured intake console for routing a prospect's first workflow pain into an automation review request.
- Lead Intake landing page: focused conversion path for the first strongest offer, including best-fit signals, build scope, demo workflow proof, launch outcomes, practical FAQ, and CTA.
- About: operating philosophy, public brand doctrine, and translation of the armada idea into practical modular systems.
- Contact: discovery prompt and direct email fallback.

## Interaction Thesis

- Hero content enters with a restrained lift animation while the background system map drifts slowly.
- Orbit, route, fleet-node, offer-node, intake-console, demo-record, FAQ, ambition, and principle visuals create the sense of a living AI ecosystem without distracting from the offer.
- CTAs, service rows, workflow choices, form states, demo rows, FAQ rows, and principle rows use small hover and layout transitions to make the site feel responsive and tactile.

## Primary CTA

Map the first workflow through the structured `/start` automation review console.

## Current Intake Path

- Route: `/start`
- Current behavior: structured form UI that formats the prospect's answers into a prefilled email to `Kelvarllc.com@outlook.com`.
- Purpose: collect enough contact, workflow, tool, pain, first-win, and urgency detail to qualify the lead manually.
- Limitation: still mailto-based; no hosted form endpoint, CRM, sheet queue, or auto-response is connected yet.

## Stage 1 Hosted Intake Path

- Artifact: `agency-ops/workflows/hosted-form-to-email-implementation-spec.md`
- Purpose: replace the mailto behavior with a hosted form-to-email endpoint while preserving human review.
- Destination: `Kelvarllc.com@outlook.com`
- Required behavior: validate fields, require consent, send one internal notification, show success or failure state, keep direct email fallback, and avoid auto-sent sales replies.
- Deployment dependency: form handler, vendor, or server-backed email provider plus required environment variables.

Website-safe summary:

"The current intake console is ready to become a hosted form-to-email workflow when the deployment environment and form handler are selected. Until then, the mailto path remains the safe fallback."

## Current Offer-Specific Landing Page

- Route: `/lead-intake`
- Offer: Lead Intake Command System
- Purpose: convert service-business visitors who recognize missed lead, slow follow-up, scattered intake, or unclear owner/status pain.
- Connected from: Services page primary CTA and first service module CTA.
- Current proof section: includes a clearly labeled demo workflow showing a roofing estimate request becoming a structured lead record with owner, next action, and follow-up timing.
- Current FAQ section: answers whether this is a CRM rebuild, whether existing tools can be used, whether messages auto-send, and what happens after a review request.

## Current Brand Doctrine

- Artifact: `agency-ops/ops/brand-doctrine-and-public-voice.md`
- Website implementation: `agency-ops/website/app/about/page.tsx`
- Purpose: keep the user's high-ambition AI ecosystem language translated into practical buyer-facing copy.
- Public rule: communicate ambition through concrete systems, proof, narrow first steps, and visible human judgment.
- Internal rule: keep the AI Galactic Empire and armada language as strategic metaphor unless intentionally adapted into polished public language.

Website-safe summary:

"Kelvar starts with one painful workflow, turns it into a visible operating system, and keeps improving the system until follow-up, handoffs, and client work are easier to trust."

## Current Demo Proof

- Artifact: `agency-ops/website/content/lead-intake-demo-proof.md`
- Website implementation: `agency-ops/website/app/lead-intake/page.tsx`
- Demo: Roofing estimate request becomes a structured lead record with owner, next action, follow-up timing, and owner visibility.
- Use: internal demo, proposal explanation, and website-safe proof copy.
- Limitation: this is not a client case study and must not be described as a real customer result.

Website-safe summary:

"Demo workflow: a roofing estimate request becomes a structured lead record with an owner, next action, and follow-up reminder so the team can see what needs attention before the lead goes cold."

## Proof And Case Study Capture

- Artifact: `agency-ops/workflows/client-proof-and-case-study-capture-system.md`
- Purpose: turn real delivery work into trustworthy website, proposal, outreach, and case-study proof without fabricating outcomes or exposing client information.
- Current public proof level: demo proof only.
- Next public proof level: anonymized process proof after a real client delivery and explicit client approval.
- Website rule: do not add client names, testimonials, measured results, screenshots, or public case studies until approval and measurement status are recorded.

Proof ladder:

1. Internal demo proof.
2. Delivery artifact proof.
3. Client-approved process proof.
4. Client-approved result proof.
5. Public case study.

## Next Website Improvements

1. Run a full build check in an environment with npm registry access.
2. Connect deployment to Vercel from `agency-ops/website/`.
3. Replace the mailto-based structured intake with the Stage 1 hosted form-to-email path from `agency-ops/workflows/hosted-form-to-email-implementation-spec.md`.
4. Add a real scheduling link once the agency chooses its booking tool.
5. Add true case-study proof once the first client result exists and the proof-capture workflow records approval.
6. Tune demo proof, FAQ copy, and About page brand-language intensity based on actual prospect questions and objections.
