import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-gray-100 px-8 py-12 font-sans">
      <section className="max-w-5xl mx-auto text-center">
        <h1 className="text-4xl font-bold text-green-400 mb-4">
          Agile Transformation Consulting by Canada Agilists

        </h1>
        <p className="text-lg mb-8 text-gray-200">
          In today’s fast-changing world, organizations can’t afford slow
          delivery, misaligned teams, or wasted effort. Transforming to Agile
          isn’t just important — it’s urgent.
        </p>
        <p className="text-lg mb-8 text-gray-200">
          We help teams move from chaos to clarity through pragmatic Agile
          transformation and delivery coaching — empowering your people to
          adapt, collaborate, and deliver value faster.
        </p>
      </section>

      <section className="max-w-5xl mx-auto mt-20 text-center">
        <h2 className="text-2xl font-semibold text-green-400 mb-4">
          Our Services
        </h2>
        <ul className="text-left space-y-4">
          <li>
            <strong>Agile Health Assessment –</strong> Identify top delivery
            blockers and receive a 90-day roadmap for measurable improvement.
          </li>
          <li>
            <strong>Transformation Program –</strong> End-to-end Agile adoption
            from leadership alignment to delivery metrics and continuous
            improvement.
          </li>
          <li>
            <strong>Team Coaching & Training –</strong> We embed with your teams
            to strengthen collaboration, predictability, and flow.
          </li>
          <li>
            <strong>Scrum Master as a Service –</strong> Need ongoing support
            beyond transformation? We can provide certified Scrum Masters to
            sustain Agile delivery long-term.
          </li>
          <li>
            <strong>Jira Setup & Migration –</strong> Create, migrate, or
            optimize Jira projects for better workflow visibility and automation.
          </li>
          <li>
            <strong>Agile Delivery Consulting –</strong> From backlog design to
            release management, we help software teams deliver faster and more
            predictably.
          </li>
          <li>
            <strong>Workshops & Leadership Coaching –</strong> Train your
            executives and managers on modern Agile leadership practices.
          </li>
        </ul>
      </section>

      <section className="max-w-5xl mx-auto mt-20 text-center">
        <h2 className="text-2xl font-semibold text-green-400 mb-2">
          Connect With Us
        </h2>
        <p>
          📧 Email:{" "}
          <a
            href="mailto:info@canadaagileconsulting.com"
            className="text-green-400 underline"
          >
            info@canadaagileconsulting.com
          </a>{" "}
          | 🌐 LinkedIn:{" "}
          <a
            href="https://www.linkedin.com/company/canada-agile-consulting/"
            target="_blank"
            className="text-green-400 underline"
          >
            linkedin.com/company/canada-agile-consulting
          </a>
        </p>
      </section>
    </main>
  );
}

