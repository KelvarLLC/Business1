import Link from "next/link";
import { ArrowRight } from "lucide-react";

const services = [
  {
    name: "Lead Intake Command System",
    problem: "New inquiries arrive through scattered forms, email, calls, and spreadsheets.",
    included: "Intake routing, qualification prompts, owner assignment, follow-up timing, and pipeline status tracking.",
    bestFit: "Service businesses that lose time responding manually or miss qualified leads.",
    outcome: "A tighter path from inquiry to booked discovery or clear disqualification."
  },
  {
    name: "Follow-Up Engine",
    problem: "Promising prospects and active clients go quiet because every check-in depends on memory.",
    included: "Timed reminders, response prompts, stalled-thread flags, prepared draft language, and status visibility.",
    bestFit: "Teams with sales or client success work that depends on consistent human follow-through.",
    outcome: "Fewer dropped conversations and a more reliable path to the next decision."
  },
  {
    name: "Client Onboarding Dock",
    problem: "Sold work stalls because intake, files, expectations, and next steps are handled by memory.",
    included: "Client intake forms, internal handoff notes, milestone reminders, kickoff checklists, and delivery-start tracking.",
    bestFit: "Teams that sell successfully but feel friction between close and delivery.",
    outcome: "New clients enter delivery with the right context already organized."
  },
  {
    name: "Appointment Reminder Beacon",
    problem: "Appointments, consultations, or service windows get missed because reminders are inconsistent.",
    included: "Reminder timing, confirmation tracking, reschedule prompts, no-show flags, and owner notifications.",
    bestFit: "Local and service operators where each missed slot has real revenue cost.",
    outcome: "Fewer manual check-ins and clearer visibility into who is confirmed."
  },
  {
    name: "Reporting Signal Grid",
    problem: "Recurring numbers are copied manually and key issues are noticed late.",
    included: "Data refresh workflow, dashboard structure, exception flags, and owner-ready summary updates.",
    bestFit: "Small teams that need simple operational visibility without a heavy analytics project.",
    outcome: "A repeatable reporting rhythm that shows what changed and what needs action."
  }
];

export default function ServicesPage() {
  return (
    <main className="page-shell">
      <section className="page-hero">
        <p className="eyebrow">Services</p>
        <h1>Automation modules built around one expensive manual workflow at a time.</h1>
        <p>
          Each service starts with a narrow operational problem, then ships a working system with testing,
          documentation, and handoff notes. Add modules over time until the business has a coordinated AI ecosystem.
        </p>
        <Link className="primary-action dark" href="/start">
          Start with your workflow <ArrowRight size={18} />
        </Link>
      </section>

      <section className="service-detail-list">
        {services.map((service) => (
          <article className="service-detail" key={service.name}>
            <h2>{service.name}</h2>
            <dl>
              <div>
                <dt>Problem solved</dt>
                <dd>{service.problem}</dd>
              </div>
              <div>
                <dt>What is included</dt>
                <dd>{service.included}</dd>
              </div>
              <div>
                <dt>Best fit</dt>
                <dd>{service.bestFit}</dd>
              </div>
              <div>
                <dt>Expected outcome</dt>
                <dd>{service.outcome}</dd>
              </div>
            </dl>
            <Link className="text-link" href="/start">
              Scope this module <ArrowRight size={17} />
            </Link>
          </article>
        ))}
      </section>
    </main>
  );
}
