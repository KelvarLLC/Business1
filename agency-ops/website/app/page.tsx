import Link from "next/link";
import { ArrowRight, Check, Clock, FileCheck2, Gauge, MailCheck } from "lucide-react";

const heroImageUrl =
  "https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=2200&q=86";

const services = [
  {
    title: "Lead intake and follow-up",
    text: "Capture new inquiries, qualify the right ones, route next steps, and keep follow-up from slipping."
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
        <img
          src={heroImageUrl}
          alt="Service business team coordinating work around a laptop"
          className="hero-image"
        />
        <div className="hero-scrim" />
        <div className="hero-content">
          <p className="eyebrow">Practical automation for service businesses</p>
          <h1>Kelvar LLC</h1>
          <p className="hero-line">
            We build the intake, follow-up, onboarding, reminder, and reporting systems that keep small teams moving.
          </p>
          <div className="hero-actions">
            <Link className="primary-action" href="/contact">
              Start discovery <ArrowRight size={18} />
            </Link>
            <Link className="secondary-action" href="/services">
              View services
            </Link>
          </div>
        </div>
      </section>

      <section className="section intro">
        <div className="section-kicker">The business problem</div>
        <div className="intro-grid">
          <h2>Most growth leaks through ordinary admin work.</h2>
          <p>
            Missed follow-ups, repeated intake questions, unclear handoffs, and stale reports are not strategy problems.
            They are workflow problems. Kelvar turns those recurring tasks into focused automation systems that are easy
            to run, explain, and improve.
          </p>
        </div>
      </section>

      <section className="section services-band">
        <div className="section-heading">
          <p className="section-kicker">Core offers</p>
          <h2>Start narrow. Ship something useful.</h2>
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
          <p className="section-kicker">How we work</p>
          <h2>Designed for operators who need relief, not theater.</h2>
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
        <p className="section-kicker">Delivery model</p>
        <h2>A simple path from manual process to working system.</h2>
        <ol>
          {process.map((step) => (
            <li key={step}>{step}</li>
          ))}
        </ol>
      </section>

      <section className="final-cta">
        <p className="section-kicker">Ready when the workflow is costing you time</p>
        <h2>Bring one messy process. Leave with a scoped automation plan.</h2>
        <Link className="primary-action dark" href="/contact">
          Request a review <ArrowRight size={18} />
        </Link>
      </section>
    </main>
  );
}
