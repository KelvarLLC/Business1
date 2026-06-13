import Link from "next/link";
import { ArrowRight } from "lucide-react";

const services = [
  {
    name: "Lead Intake and Follow-Up Automation",
    problem: "New inquiries arrive through scattered forms, email, calls, and spreadsheets.",
    included: "Intake routing, qualification prompts, follow-up reminders, owner assignment, and pipeline status tracking.",
    bestFit: "Service businesses that lose time responding manually or miss qualified leads.",
    outcome: "A tighter path from inquiry to booked discovery or clear disqualification."
  },
  {
    name: "Client Onboarding Handoff Automation",
    problem: "Sold work stalls because intake, files, expectations, and next steps are handled by memory.",
    included: "Client intake forms, internal handoff notes, milestone reminders, kickoff checklists, and delivery-start tracking.",
    bestFit: "Teams that sell successfully but feel friction between close and delivery.",
    outcome: "New clients enter delivery with the right context already organized."
  },
  {
    name: "Appointment Reminder Automation",
    problem: "Appointments, consultations, or service windows get missed because reminders are inconsistent.",
    included: "Reminder timing, confirmation tracking, reschedule prompts, no-show flags, and owner notifications.",
    bestFit: "Local and service operators where each missed slot has real revenue cost.",
    outcome: "Fewer manual check-ins and clearer visibility into who is confirmed."
  },
  {
    name: "Lightweight Reporting Dashboard Automation",
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
        <h1>Automation packages built around one expensive manual workflow at a time.</h1>
        <p>
          Each service starts with a narrow operational problem, then ships a working system with documentation,
          testing, and practical handoff notes.
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
              Scope this workflow <ArrowRight size={17} />
            </Link>
          </article>
        ))}
      </section>
    </main>
  );
}
