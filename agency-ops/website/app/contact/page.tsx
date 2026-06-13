import Link from "next/link";

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
        <a className="primary-action dark" href="mailto:Kelvarllc.com@outlook.com?subject=Automation%20Discovery%20Request">
          Email Kelvar
        </a>
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
        <h2>Prefer a written start?</h2>
        <p>
          Send a short description of the workflow, the tools involved, and the cost of leaving it manual. A scoped
          recommendation can start from there.
        </p>
        <Link className="text-link" href="/services">
          Review service packages
        </Link>
      </section>
    </main>
  );
}
