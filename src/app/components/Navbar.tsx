"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();

  const linkClass = (path: string) =>
    pathname === path
      ? "text-green-400 font-semibold border-b-2 border-green-400"
      : "text-gray-100 hover:text-green-300";

  return (
    <nav className="bg-black border-b border-green-400 shadow-md mt-6">
      <div className="max-w-5xl mx-auto flex justify-between items-center px-6 py-4">
        <Link href="/" className="text-2xl font-bold text-green-400">
          Canada Agile Consulting
        </Link>
        <div className="space-x-8 text-base">
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
