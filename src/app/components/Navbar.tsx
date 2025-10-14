"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();

  const linkClass = (path: string) =>
    pathname === path
      ? "text-blue-600 font-semibold border-b-2 border-blue-600"
      : "text-gray-700 hover:text-blue-600";

  return (
    <nav className="border-b bg-white shadow-sm">
      <div className="max-w-5xl mx-auto flex justify-between items-center px-6 py-4">
        <Link href="/" className="text-xl font-bold text-blue-700">
          Narges Agile Consulting
        </Link>

        <div className="space-x-6 text-sm">
          <Link href="/" className={linkClass("/")}>
            Home
          </Link>
          <Link href="/about" className={linkClass("/about")}>
            About
          </Link>
          <Link href="/contact" className={linkClass("/contact")}>
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
}
