import Link from "next/link";
import { ArrowRight, Check, Clock, FileCheck2, Gauge, MailCheck, Orbit } from "lucide-react";

const services = [
  {
    title: "Lead intake and follow-up",
    text: "Capture inquiries, qualify the right ones, route next steps, and keep follow-up from slipping."
  },
  {
    title: "Client onboarding handoffs",
    text: "Turn sold work into organized intake, reminders, owner assignments, and delivery-ready context."
  },
  {
    title: "Appointment reminders",
    text: "Reduce no-shows with confirmation flows, reminder timing, and simple exception tracking."
  },
  {
    title: "Lightweight reporting",
    text: "Refresh recurring numbers, flag exceptions, and send owner-ready summaries without manual copy-paste."
  }
];

const process = [
  "Map the manual workflow",
  "Scope the smallest useful automation",
  "Build and test the handoff",
  "Launch with documentation",
  "Tune after real usage"
];

export default function Home() {
  return (
    <main>
      <section className="hero">
        <div className="system-map" aria-hidden="true">
          <div className="star-field" />
          <div className="orbit orbit-one" />
          <div className="orbit orbit-two" />
          <div className="command-node">AI</div>
          <div className="fleet-node node-a">Lead</div>
          <div className="fleet-node node-b">Follow-up</div>
          <div className="fleet-node node-c">Handoff</div>
          <div className="fleet-node node-d">Reports</div>
        </div>
        <div className="hero-scrim" />
        <div className="hero-content">
          <p className="eyebrow">Practical AI automation ecosystems</p>
          <h1>Kelvar LLC</h1>
          <p className="hero-line">
            Build a connected fleet of intake, follow-up, onboarding, reminder, reporting, and delivery systems for your service business.
          </p>
          <div className="hero-actions">
            <Link className="primary-action" href="/contact">
              Request an audit <ArrowRight size={18} />
            </Link>
            <Link className="secondary-action" href="/services">
              View service fleet
            </Link>
          </div>
        </div>
      </section>

      <section className="section intro">
        <div className="section-kicker">The operating problem</div>
        <div className="intro-grid">
          <h2>Most growth leaks through ordinary admin work.</h2>
          <p>
            Missed follow-ups, repeated intake questions, unclear handoffs, and stale reports are not strategy problems.
            They are workflow problems. Kelvar turns those recurring tasks into focused AI automation systems that are easy
            to run, explain, and improve.
          </p>
        </div>
      </section>

      <section className="section services-band">
        <div className="section-heading">
          <p className="section-kicker">Service fleet</p>
          <h2>Start narrow. Connect the systems. Compound the wins.</h2>
        </div>
        <div className="service-list">
          {services.map((service, index) => (
            <article className="service-row" key={service.title}>
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

      <section className="section proof">
        <div className="proof-copy">
          <p className="section-kicker">Command layer</p>
          <h2>Built for operators who need relief, not theater.</h2>
          <p>
            Each engagement is scoped around a visible business outcome: faster response time, cleaner handoffs, fewer
            missed appointments, or reporting that arrives before it is requested.
          </p>
        </div>
        <div className="proof-metrics" aria-label="Business outcomes">
          <div>
            <Clock size={26} />
            <strong>Faster response</strong>
            <span>Lead and client follow-up flows that trigger when work enters the system.</span>
          </div>
          <div>
            <FileCheck2 size={26} />
            <strong>Cleaner handoffs</strong>
            <span>Intake, ownership, and delivery context packaged before work starts.</span>
          </div>
          <div>
            <Gauge size={26} />
            <strong>Better visibility</strong>
            <span>Lightweight reporting that highlights what needs attention.</span>
          </div>
          <div>
            <MailCheck size={26} />
            <strong>Less chasing</strong>
            <span>Reminder and follow-up paths that reduce manual check-ins.</span>
          </div>
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
