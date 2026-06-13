import Link from "next/link";

export default function AboutPage() {
  return (
    <main className="page-shell">
      <section className="page-hero">
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
          <Link className="primary-action dark" href="/contact">
            Talk through a workflow
          </Link>
        </div>
      </section>
    </main>
  );
}
