import Link from "next/link";
import { ArrowRight } from "lucide-react";

const principles = [
  {
    title: "Narrow first",
    text: "Start with one workflow painful enough to matter and small enough to ship."
  },
  {
    title: "Human judgment stays visible",
    text: "Use reminders and draft responses before auto-send behavior unless the rules are explicit."
  },
  {
    title: "Reusable by default",
    text: "Every offer, workflow, proposal, and delivery note should become easier to reuse the next time."
  }
];

export default function AboutPage() {
  return (
    <main className="page-shell">
      <section className="page-hero about-hero">
        <p className="eyebrow">About</p>
        <h1>Kelvar LLC builds AI systems operators can trust after launch.</h1>
        <p>
          The agency is focused on small service businesses that need cleaner lead handling, faster client follow-up,
          repeatable delivery workflows, and better visibility without overbuilding.
        </p>
      </section>

      <section className="about-layout">
        <div>
          <p className="section-kicker">Operating principles</p>
          <h2>Practical beats impressive.</h2>
        </div>
        <div className="about-copy">
          <p>
            A good automation removes a recurring burden, creates a clearer handoff, and leaves the team with a system
            they understand. Kelvar favors narrow scopes, reusable workflows, clean documentation, and post-launch
            improvement over flashy one-off builds.
          </p>
          <p>
            The galactic armada idea is translated into something operators can actually use: a modular service fleet.
            One system handles the first painful workflow. The next system connects to it. Over time, intake, follow-up,
            onboarding, reminders, reporting, and delivery become one coordinated operating layer.
          </p>
          <Link className="primary-action dark" href="/start">
            Map the first workflow <ArrowRight size={18} />
          </Link>
        </div>
      </section>

      <section className="section ambition-band">
        <div>
          <p className="section-kicker">The ambition</p>
          <h2>One workflow, then the next, until the business has an operating system.</h2>
        </div>
        <div className="ambition-copy">
          <p>
            Kelvar exists to turn scattered manual effort into connected systems. The work starts modestly: one intake
            path, one handoff, one reminder, one dashboard. The direction is larger: a business where important work is
            captured, routed, followed up, and improved instead of forgotten.
          </p>
          <div className="principle-list">
            {principles.map((principle) => (
              <article key={principle.title}>
                <h3>{principle.title}</h3>
                <p>{principle.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
