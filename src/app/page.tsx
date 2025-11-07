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

      
      <section className="max-w-3xl mx-auto mt-20 bg-gray-900 p-8 rounded-lg shadow-lg">
  <h2 className="text-2xl font-semibold text-green-400 mb-6 text-center">
    Request a Consultation
  </h2>
  <form
    action="https://formspree.io/f/xnnlaqra"  // replace with your Formspree endpoint
    method="POST"
    className="space-y-4"
  >
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <div>
        <label className="block text-gray-200 mb-1">First Name</label>
        <input
          type="text"
          name="first_name"
          required
          className="w-full px-4 py-2 rounded bg-gray-800 text-white border border-gray-700 focus:border-green-400 focus:outline-none"
        />
      </div>
      <div>
        <label className="block text-gray-200 mb-1">Family Name</label>
        <input
          type="text"
          name="family_name"
          required
          className="w-full px-4 py-2 rounded bg-gray-800 text-white border border-gray-700 focus:border-green-400 focus:outline-none"
        />
      </div>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <div>
        <label className="block text-gray-200 mb-1">Email</label>
        <input
          type="email"
          name="email"
          required
          className="w-full px-4 py-2 rounded bg-gray-800 text-white border border-gray-700 focus:border-green-400 focus:outline-none"
        />
      </div>
      <div>
        <label className="block text-gray-200 mb-1">Phone Number</label>
        <input
          type="tel"
          name="phone"
          className="w-full px-4 py-2 rounded bg-gray-800 text-white border border-gray-700 focus:border-green-400 focus:outline-none"
        />
      </div>
    </div>

    <div>
      <label className="block text-gray-200 mb-1">Company Name</label>
      <input
        type="text"
        name="company"
        className="w-full px-4 py-2 rounded bg-gray-800 text-white border border-gray-700 focus:border-green-400 focus:outline-none"
      />
    </div>

    <div>
      <label className="block text-gray-200 mb-1">How can we help?</label>
      <textarea
        rows={4}
        name="message"
        className="w-full px-4 py-2 rounded bg-gray-800 text-white border border-gray-700 focus:border-green-400 focus:outline-none"
        placeholder="Tell us about your needs or challenges..."
      ></textarea>
    </div>

    <div className="text-center">
      <button
        type="submit"
        className="bg-green-500 text-black px-6 py-2 rounded font-semibold hover:bg-green-400"
      >
        Submit Request
      </button>
    </div>
  </form>
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

