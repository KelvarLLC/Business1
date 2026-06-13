import Link from "next/link";
import { ArrowRight, ClipboardCheck, Clock3, Gauge, MailCheck } from "lucide-react";

const workflowTypes = [
  {
    icon: MailCheck,
    title: "Lead follow-up",
    text: "New inquiries arrive, but response, qualification, or next steps are too manual."
  },
  {
    icon: ClipboardCheck,
    title: "Client handoff",
    text: "Sold work needs cleaner intake, owner assignment, kickoff prep, and delivery context."
  },
  {
    icon: Clock3,
    title: "Appointment reminders",
    text: "Bookings need confirmations, reminders, exception alerts, or reschedule tracking."
  },
  {
    icon: Gauge,
    title: "Reporting rhythm",
    text: "Key numbers need a dashboard, recurring summary, or exception view without copy-paste."
  }
];

const intakeQuestions = [
  "Which workflow is costing the most time or follow-up right now?",
  "Where does the workflow start, and which tool is the source of truth?",
  "What gets missed, delayed, repeated, or handed off badly?",
  "Who owns the next action when the workflow runs correctly?",
  "What would make the first version clearly worth keeping?"
];

const emailBody = encodeURIComponent(`Hi Kelvar,

I want to scope an automation review.

Workflow type:
Current tools involved:
What happens manually today:
What gets missed or delayed:
Best first win:
Timeline or urgency:

Thanks,`);

export default function StartPage() {
  return (
    <main className="page-shell">
      <section className="page-hero">
        <p className="eyebrow">Start here</p>
        <h1>Turn one messy workflow into the first automation win.</h1>
        <p>
          Pick the workflow that is leaking the most time, answer a few practical questions, and Kelvar can scope a
          first version that is small enough to ship and useful enough to keep.
        </p>
        <a
          className="primary-action dark"
          href={`mailto:Kelvarllc.com@outlook.com?subject=Automation%20Review%20Request&body=${emailBody}`}
        >
          Start by email <ArrowRight size={18} />
        </a>
      </section>

      <section className="proof">
        <div className="proof-copy">
          <p className="section-kicker">Choose the first system</p>
          <h2>Start with the workflow that has the clearest pain.</h2>
        </div>
        <div className="proof-metrics" aria-label="Workflow types">
          {workflowTypes.map((workflow) => {
            const Icon = workflow.icon;
            return (
              <div key={workflow.title}>
                <Icon aria-hidden="true" size={26} />
                <strong>{workflow.title}</strong>
                <span>{workflow.text}</span>
              </div>
            );
          })}
        </div>
      </section>

      <section className="contact-grid">
        <div>
          <p className="section-kicker">Discovery intake</p>
          <h2>Send enough context to make the first review useful.</h2>
        </div>
        <ol>
          {intakeQuestions.map((question) => (
            <li key={question}>{question}</li>
          ))}
        </ol>
      </section>

      <section className="contact-note">
        <h2>A bounded automation plan, not a vague brainstorm.</h2>
        <p>
          The first review turns your notes into a recommended workflow scope, required inputs, likely risks, and the
          smallest useful version to build first.
        </p>
        <Link className="text-link" href="/services">
          Compare service packages <ArrowRight size={17} />
        </Link>
      </section>
    </main>
  );
}
