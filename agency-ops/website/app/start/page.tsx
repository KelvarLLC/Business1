"use client";

import type { FormEvent } from "react";
import { useState } from "react";
import Link from "next/link";
import { ArrowRight, Check, ClipboardCheck, Clock, Gauge, MailCheck, Send } from "lucide-react";

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
    icon: Clock,
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

function clean(value: FormDataEntryValue | null) {
  return typeof value === "string" && value.trim() ? value.trim() : "Not provided";
}

export default function StartPage() {
  const [selectedWorkflow, setSelectedWorkflow] = useState(workflowTypes[0].title);
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const body = `Hi Kelvar,

I want to scope an automation review.

Name: ${clean(formData.get("name"))}
Business: ${clean(formData.get("business"))}
Email: ${clean(formData.get("email"))}
Phone: ${clean(formData.get("phone"))}
Website: ${clean(formData.get("website"))}

Workflow type: ${selectedWorkflow}
Current tools involved: ${clean(formData.get("tools"))}
What happens manually today: ${clean(formData.get("manual"))}
What gets missed or delayed: ${clean(formData.get("missed"))}
Best first win: ${clean(formData.get("firstWin"))}
Timeline or urgency: ${clean(formData.get("urgency"))}

I understand this starts a review request and does not create a project commitment yet.

Thanks,`;

    setSubmitted(true);
    window.location.href = `mailto:Kelvarllc.com@outlook.com?subject=${encodeURIComponent(
      "Automation Review Request"
    )}&body=${encodeURIComponent(body)}`;
  }

  return (
    <main className="page-shell start-page">
      <section className="page-hero start-hero">
        <p className="eyebrow">Start here</p>
        <h1>Turn one messy workflow into the first automation win.</h1>
        <p>
          Choose the workflow leaking the most time, send the core details, and Kelvar will map the smallest useful
          automation scope to build first.
        </p>
        <a className="primary-action dark" href="#intake-console">
          Open intake console <ArrowRight size={18} />
        </a>
      </section>

      <section className="section proof">
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

      <section className="intake-console" id="intake-console">
        <div className="intake-copy">
          <p className="section-kicker">Discovery intake</p>
          <h2>Send the details that make the first review useful.</h2>
          <p>
            The form formats your answers into an email review request. It keeps the early pipeline simple while making
            each inquiry structured enough to qualify.
          </p>
          <ol>
            {intakeQuestions.map((question) => (
              <li key={question}>{question}</li>
            ))}
          </ol>
        </div>

        <form className="intake-form" onSubmit={handleSubmit}>
          <fieldset className="workflow-picker">
            <legend>Workflow pain</legend>
            {workflowTypes.map((workflow) => {
              const Icon = workflow.icon;
              const isSelected = selectedWorkflow === workflow.title;
              return (
                <button
                  aria-pressed={isSelected}
                  className={isSelected ? "workflow-option active" : "workflow-option"}
                  key={workflow.title}
                  onClick={() => setSelectedWorkflow(workflow.title)}
                  type="button"
                >
                  <Icon aria-hidden="true" size={20} />
                  <span>{workflow.title}</span>
                  {isSelected ? <Check aria-hidden="true" size={18} /> : null}
                </button>
              );
            })}
          </fieldset>

          <div className="intake-fields two-column">
            <label>
              Name
              <input autoComplete="name" name="name" placeholder="Your name" required type="text" />
            </label>
            <label>
              Business
              <input autoComplete="organization" name="business" placeholder="Company name" required type="text" />
            </label>
            <label>
              Email
              <input autoComplete="email" name="email" placeholder="you@company.com" required type="email" />
            </label>
            <label>
              Phone
              <input autoComplete="tel" name="phone" placeholder="Optional" type="tel" />
            </label>
            <label className="full-span">
              Website
              <input autoComplete="url" name="website" placeholder="https://" type="url" />
            </label>
          </div>

          <div className="intake-fields">
            <label>
              Current tools involved
              <input name="tools" placeholder="CRM, inbox, booking system, spreadsheet" required type="text" />
            </label>
            <label>
              What happens manually today?
              <textarea name="manual" placeholder="Describe the repeated steps people are doing by hand." required />
            </label>
            <label>
              What gets missed or delayed?
              <textarea name="missed" placeholder="Missed replies, unclear ownership, late reminders, reporting gaps." required />
            </label>
            <label>
              Best first win
              <input name="firstWin" placeholder="Example: every new inquiry gets a response within 5 minutes" required type="text" />
            </label>
            <label>
              Timeline or urgency
              <input name="urgency" placeholder="This week, this month, exploring options" required type="text" />
            </label>
          </div>

          <label className="consent-row">
            <input required type="checkbox" />
            <span>I agree to be contacted about this automation review.</span>
          </label>

          <button className="primary-action dark submit-intake" type="submit">
            Send review request <Send size={18} />
          </button>

          {submitted ? (
            <p className="form-status" role="status">
              Your email app should open with the structured request ready to send.
            </p>
          ) : null}
        </form>
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
