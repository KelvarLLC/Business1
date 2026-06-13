import Link from "next/link";
import { ArrowRight } from "lucide-react";

const questions = [
  "Where does the workflow start?",
  "What happens manually today?",
  "What gets missed, delayed, or repeated?",
  "Which tools already hold the data?",
  "What would a good first win look like?"
];

export default function ContactPage() {
  return (
    <main className="page-shell">
      <section className="page-hero contact-hero">
        <p className="eyebrow">Discovery</p>
        <h1>Bring the manual workflow that keeps stealing attention.</h1>
        <p>
          Kelvar will turn it into a scoped automation plan with the inputs, systems, risks, timeline, and first useful
          version clearly defined.
        </p>
        <div className="hero-actions contact-actions">
          <Link className="primary-action dark" href="/start">
            Start the intake <ArrowRight size={18} />
          </Link>
          <a className="secondary-action light" href="mailto:Kelvarllc.com@outlook.com?subject=Automation%20Discovery%20Request">
            Email directly
          </a>
        </div>
      </section>

      <section className="contact-grid">
        <div>
          <p className="section-kicker">Discovery questions</p>
          <h2>Useful context for a first review.</h2>
        </div>
        <ol>
          {questions.map((question) => (
            <li key={question}>{question}</li>
          ))}
        </ol>
      </section>

      <section className="contact-note">
        <h2>Prefer a guided start?</h2>
        <p>
          Use the intake page to identify the workflow type, gather the right context, and send a cleaner review request.
        </p>
        <Link className="text-link" href="/start">
          Open the intake path <ArrowRight size={17} />
        </Link>
      </section>
    </main>
  );
}
