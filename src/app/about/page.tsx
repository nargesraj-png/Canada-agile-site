import { CheckCircle } from "lucide-react";

export default function About() {
  return (
    <main className="min-h-screen bg-black text-gray-100 px-8 py-12 font-sans">
      <h1 className="text-3xl font-bold text-green-400 mb-8 text-center">
        About Us
      </h1>

      <div className="max-w-4xl mx-auto space-y-6 text-lg">
        <div className="flex items-start gap-3">
          <CheckCircle className="text-green-400 mt-1 flex-shrink-0" />
          <p>
            We are a team of certified <strong>Scrum Masters</strong>,{" "}
            <strong>Project Managers</strong>, and{" "}
            <strong>Product Managers</strong> with over 15 years of experience
            transforming teams of all IT backgrounds — from startups to large
            enterprises — into high-performing Agile organizations.
          </p>
        </div>

        <div className="flex items-start gap-3">
          <CheckCircle className="text-green-400 mt-1 flex-shrink-0" />
          <p>
            Our mission is simple: to help teams move from chaos to clarity
            through pragmatic Agile transformation and delivery coaching. We
            believe that adopting Agile is not just a process change — it’s a
            cultural shift that unlocks innovation, adaptability, and
            collaboration.
          </p>
        </div>

        <div className="flex items-start gap-3">
          <CheckCircle className="text-green-400 mt-1 flex-shrink-0" />
          <p>
            Whether you are building digital products, scaling SaaS operations,
            or optimizing internal delivery, our experts bring hands-on
            experience across software, automation, and cloud ecosystems to
            guide your organization through each step of the transformation
            journey.
          </p>
        </div>

        <div className="flex items-start gap-3">
          <CheckCircle className="text-green-400 mt-1 flex-shrink-0" />
          <p>
            We’ve partnered with teams across Canada to create measurable
            outcomes: faster delivery, stronger alignment between business and
            engineering, and sustainable agility that grows with your company.
          </p>
        </div>

        <div className="flex items-start gap-3">
          <CheckCircle className="text-green-400 mt-1 flex-shrink-0" />
          <p>
            At <strong>Canada Agile Consulting</strong>, we don’t just teach
            Agile — we live it. Our collaborative approach ensures your teams
            are empowered to deliver with confidence long after our engagement
            ends.
          </p>
        </div>
      </div>
    </main>
  );
}
