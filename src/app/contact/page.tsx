export default function Contact() {
  return (
    <main className="max-w-4xl mx-auto px-6 py-12 text-center">
      <h1 className="text-3xl font-bold text-blue-700 mb-4">Contact Me</h1>
      <p className="mb-6 text-lg">
        Let’s connect about Agile transformation, coaching, or delivery
        optimization.
      </p>

      <p>
        📧 Email:{" "}
        <a
          href="mailto:yourname@email.com"
          className="text-blue-600 underline"
        >
          yourname@email.com
        </a>
      </p>

      <p className="mt-2">
        🌐 LinkedIn:{" "}
        <a
          href="https://www.linkedin.com/in/YOUR-LINKEDIN/"
          target="_blank"
          className="text-blue-600 underline"
        >
          linkedin.com/in/YOUR-LINKEDIN
        </a>
      </p>
    </main>
  );
}
