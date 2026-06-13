import Link from "next/link";
import {
  ArrowRight,
  Bot,
  Check,
  Clock,
  DatabaseZap,
  FileCheck2,
  Gauge,
  MailCheck,
  Orbit,
  Radar,
  Route
} from "lucide-react";

const fleet = [
  {
    title: "Lead intake command",
    text: "Capture inquiries, qualify the right ones, assign ownership, and start follow-up before momentum fades."
  },
  {
    title: "Follow-up engines",
    text: "Turn quiet prospects and pending clients into timed reminders, useful prompts, and visible next steps."
  },
  {
    title: "Onboarding docks",
    text: "Move sold work into intake forms, file requests, kickoff context, and delivery-ready handoff notes."
  },
  {
    title: "Reporting beacons",
    text: "Refresh operating numbers, flag exceptions, and send owner-ready summaries without manual copy-paste."
  }
];

const outcomes = [
  { icon: Clock, label: "Faster response", text: "Lead and client follow-up flows that trigger when work enters the system." },
  { icon: FileCheck2, label: "Cleaner handoffs", text: "Intake, ownership, and delivery context packaged before work starts." },
  { icon: Gauge, label: "Better visibility", text: "Lightweight reporting that highlights what changed and what needs attention." },
  { icon: MailCheck, label: "Less chasing", text: "Reminder and follow-up paths that reduce manual check-ins." }
];

const process = [
  "Map the manual workflow",
  "Choose the first useful AI system",
  "Build the smallest reliable launch version",
  "Document the handoff",
  "Tune the fleet after real usage"
];

export default function Home() {
  return (
    <main>
      <section className="hero">
        <div className="system-map" aria-hidden="true">
          <div className="star-field" />
          <div className="galactic-arm" />
          <div className="orbit orbit-one" />
          <div className="orbit orbit-two" />
          <div className="orbit orbit-three" />
          <div className="route route-a" />
          <div className="route route-b" />
          <div className="route route-c" />
          <div className="command-node">AI</div>
          <div className="fleet-node node-a">Intake</div>
          <div className="fleet-node node-b">Follow-up</div>
          <div className="fleet-node node-c">Handoff</div>
          <div className="fleet-node node-d">Reports</div>
          <div className="fleet-node node-e">Delivery</div>
        </div>
        <div className="hero-scrim" />
        <div className="hero-content">
          <p className="eyebrow">AI ecosystem armada for service operators</p>
          <h1>Kelvar LLC</h1>
          <p className="hero-line">
            Build a connected fleet of practical AI systems that capture leads, coordinate follow-up, launch client work,
            surface reporting signals, and keep delivery moving.
          </p>
          <div className="hero-actions">
            <Link className="primary-action" href="/contact">
              Map your first workflow <ArrowRight size={18} />
            </Link>
            <Link className="secondary-action" href="/services">
              View the fleet
            </Link>
          </div>
        </div>
        <div className="hero-status" aria-label="Automation fleet status">
          <span>Command layer online</span>
          <span>5 launch modules</span>
          <span>Built for small service teams</span>
        </div>
      </section>

      <section className="section intro">
        <div className="section-kicker">The operating problem</div>
        <div className="intro-grid">
          <h2>Most growth leaks through ordinary admin work.</h2>
          <p>
            Missed follow-ups, repeated intake questions, unclear handoffs, stale reports, and scattered reminders are
            not strategy problems. They are workflow problems. Kelvar turns those recurring tasks into a coordinated AI
            automation ecosystem that is easy to run, explain, and improve.
          </p>
        </div>
      </section>

      <section className="section fleet-band">
        <div className="section-heading">
          <p className="section-kicker">Service fleet</p>
          <h2>Start with one ship. Connect the armada as the business grows.</h2>
        </div>
        <div className="fleet-list">
          {fleet.map((service, index) => (
            <article className="fleet-row" key={service.title}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <div>
                <h3>{service.title}</h3>
                <p>{service.text}</p>
              </div>
              <Check aria-hidden="true" size={22} />
            </article>
          ))}
        </div>
      </section>

      <section className="section command-layer">
        <div className="command-copy">
          <p className="section-kicker">Command layer</p>
          <h2>Built for operators who need relief, not theater.</h2>
          <p>
            Each engagement is scoped around a visible business outcome: faster response time, cleaner handoffs, fewer
            missed appointments, or reporting that arrives before it is requested.
          </p>
        </div>
        <div className="system-stack" aria-label="AI ecosystem layers">
          <div>
            <Radar size={24} />
            <strong>Signal</strong>
            <span>What changed, arrived, stalled, or needs action?</span>
          </div>
          <div>
            <Route size={24} />
            <strong>Routing</strong>
            <span>Who owns the next step, and when should it happen?</span>
          </div>
          <div>
            <Bot size={24} />
            <strong>AI assist</strong>
            <span>What can be drafted, summarized, classified, or prepared?</span>
          </div>
          <div>
            <DatabaseZap size={24} />
            <strong>Record</strong>
            <span>Where should the decision, status, and handoff live?</span>
          </div>
        </div>
      </section>

      <section className="section proof">
        <div className="proof-copy">
          <p className="section-kicker">Business outcomes</p>
          <h2>The first win should be obvious to the team using it.</h2>
        </div>
        <div className="proof-metrics" aria-label="Business outcomes">
          {outcomes.map((outcome) => {
            const Icon = outcome.icon;
            return (
              <div key={outcome.label}>
                <Icon size={26} />
                <strong>{outcome.label}</strong>
                <span>{outcome.text}</span>
              </div>
            );
          })}
        </div>
      </section>

      <section className="section process">
        <p className="section-kicker">Delivery path</p>
        <h2>A simple route from scattered process to working automation ecosystem.</h2>
        <ol>
          {process.map((step) => (
            <li key={step}>{step}</li>
          ))}
        </ol>
      </section>

      <section className="final-cta">
        <div>
          <p className="section-kicker">Ready when the workflow is costing you time</p>
          <h2>Bring one messy process. Leave with a scoped automation plan.</h2>
        </div>
        <Link className="primary-action dark" href="/contact">
          Request a review <ArrowRight size={18} />
        </Link>
        <Orbit aria-hidden="true" className="cta-orbit" />
      </section>
    </main>
  );
}
