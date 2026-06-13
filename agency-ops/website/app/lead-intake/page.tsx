import Link from "next/link";
import { ArrowRight, Check, Clock, MailCheck, Route, ShieldCheck } from "lucide-react";

const signals = [
  "New leads arrive through more than one channel",
  "Follow-up depends on whoever remembers first",
  "Qualified prospects go quiet before discovery",
  "There is no simple status view for owner, urgency, and next step"
];

const build = [
  {
    label: "Capture",
    text: "Collect the right lead details from forms, inboxes, calls, or spreadsheets."
  },
  {
    label: "Qualify",
    text: "Classify fit, urgency, missing details, and likely next action."
  },
  {
    label: "Route",
    text: "Assign the owner, status, reminder timing, and handoff note."
  },
  {
    label: "Follow up",
    text: "Prepare the next message and keep stale opportunities visible."
  }
];

const outcomes = [
  { icon: Clock, title: "Faster first response", text: "Reduce the lag between inquiry and next step." },
  { icon: MailCheck, title: "Fewer dropped leads", text: "Keep qualified conversations from disappearing into inbox noise." },
  { icon: Route, title: "Clear ownership", text: "Give every lead a visible stage, owner, and next action." },
  { icon: ShieldCheck, title: "Reusable system", text: "Launch with documentation, handoff notes, and a tuning path." }
];

const demoRecord = [
  ["Source", "Website estimate form"],
  ["Request", "Storm-related roof leak inspection"],
  ["Stage", "New"],
  ["Owner", "Office manager"],
  ["Next action", "Call or reply next business morning"],
  ["Follow-up", "Prompt if not contacted by Monday 9:00 AM"]
];

export default function LeadIntakePage() {
  return (
    <main>
      <section className="offer-hero">
        <div className="offer-map" aria-hidden="true">
          <div className="offer-grid" />
          <div className="offer-core">Lead</div>
          <span className="offer-node offer-node-a">Inbox</span>
          <span className="offer-node offer-node-b">Form</span>
          <span className="offer-node offer-node-c">Owner</span>
          <span className="offer-node offer-node-d">Next step</span>
        </div>
        <div className="offer-hero-copy">
          <p className="eyebrow">Lead intake command system</p>
          <h1>Stop losing good leads to slow follow-up.</h1>
          <p>
            Kelvar builds a focused AI workflow that captures inquiries, qualifies fit, routes ownership, and keeps the
            next follow-up visible until the lead is booked, nurtured, or disqualified.
          </p>
          <div className="hero-actions">
            <Link className="primary-action" href="/start">
              Map this workflow <ArrowRight size={18} />
            </Link>
            <Link className="secondary-action" href="/services">
              View all modules
            </Link>
          </div>
        </div>
      </section>

      <section className="section offer-signal">
        <div>
          <p className="section-kicker">Best fit</p>
          <h2>This is the first module when lead response is leaking revenue.</h2>
        </div>
        <ul>
          {signals.map((signal) => (
            <li key={signal}>
              <Check size={20} />
              <span>{signal}</span>
            </li>
          ))}
        </ul>
      </section>

      <section className="section offer-build">
        <p className="section-kicker">What gets built</p>
        <h2>A narrow system that can launch before the whole business is automated.</h2>
        <div className="build-rail">
          {build.map((item, index) => (
            <article key={item.label}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <h3>{item.label}</h3>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section demo-proof">
        <div className="demo-copy">
          <p className="section-kicker">Demo workflow</p>
          <h2>A roofing estimate request becomes a visible next action.</h2>
          <p>
            This is a demo scenario, not a client case study. It shows the shape of the system: capture the request,
            assign ownership, set the next action, and make stale follow-up visible.
          </p>
        </div>
        <div className="demo-panel" aria-label="Demo lead record">
          <div className="demo-panel-header">
            <span>Demo lead</span>
            <strong>Roof leak inspection</strong>
          </div>
          <div className="demo-record">
            {demoRecord.map(([label, value]) => (
              <div key={label}>
                <span>{label}</span>
                <strong>{value}</strong>
              </div>
            ))}
          </div>
          <p>
            The first version does not need a full CRM rebuild. It needs one reliable path from inquiry to owner,
            status, and follow-up.
          </p>
        </div>
      </section>

      <section className="section offer-outcomes">
        <div>
          <p className="section-kicker">Launch outcome</p>
          <h2>The team gets a working command path, not a strategy deck.</h2>
        </div>
        <div className="outcome-grid">
          {outcomes.map((outcome) => {
            const Icon = outcome.icon;
            return (
              <div key={outcome.title}>
                <Icon size={25} />
                <strong>{outcome.title}</strong>
                <span>{outcome.text}</span>
              </div>
            );
          })}
        </div>
      </section>

      <section className="final-cta">
        <div>
          <p className="section-kicker">First fleet module</p>
          <h2>Bring the current lead path. Leave with the first automation scope.</h2>
        </div>
        <Link className="primary-action dark" href="/start">
          Request a lead workflow review <ArrowRight size={18} />
        </Link>
      </section>
    </main>
  );
}
