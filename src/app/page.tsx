import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-gray-800 px-6 py-12">
      <section className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl font-bold text-blue-700 mb-4">
          Agile Transformation Consulting by Narges Rajabnezhad
        </h1>
        <p className="text-lg mb-8">
          I help software, telecom, and IoT teams deliver faster, align
          product & engineering goals, and build cultures of continuous
          improvement.
        </p>

        <a
          href="mailto:yourname@email.com"
          className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700"
        >
          Contact Me
        </a>
      </section>

      <section className="max-w-4xl mx-auto mt-20">
        <h2 className="text-2xl font-semibold mb-4 text-center">
          Services
        </h2>
        <ul className="space-y-4">
          <li>
            <strong>Agile Health Assessment –</strong> Identify top
            delivery blockers and get a clear 90-day improvement plan.
          </li>
          <li>
            <strong>Team Coaching & Training –</strong> Hands-on
            sessions to build predictability and reduce cycle time.
          </li>
          <li>
            <strong>Agile Transformation Program –</strong> From
            leadership alignment to team-level adoption and metrics.
          </li>
        </ul>
      </section>

      <section className="max-w-4xl mx-auto mt-20 text-center">
        <h2 className="text-2xl font-semibold mb-2">Connect with Me</h2>
        <p>
          📧 Email:{" "}
          <a
            href="mailto:yourname@email.com"
            className="text-blue-600 underline"
          >
            yourname@email.com
          </a>{" "}
          | 🌐 LinkedIn:{" "}
          <a
            href="https://www.linkedin.com/in/YOUR-LINKEDIN/"
            target="_blank"
            className="text-blue-600 underline"
          >
            linkedin.com/in/YOUR-LINKEDIN
          </a>
        </p>
      </section>
    </main>
  )
}
