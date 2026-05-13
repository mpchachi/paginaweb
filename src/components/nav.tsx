"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  const links = [
    { href: "/problem", label: "Problem" },
    { href: "/solution", label: "Solution" },
    { href: "/market", label: "Market" },
    { href: "/demo", label: "Demo" },
    { href: "/team", label: "Team" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/40 backdrop-blur-md border-b border-white/10">
      <div className="max-w-[1200px] mx-auto px-6 py-4 flex items-center justify-between">
        <Link href="/" className="text-white font-bold text-lg tracking-tight">
          BetweenVisits
        </Link>

        <div className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-sm transition-colors ${
                pathname === link.href
                  ? "text-white font-medium"
                  : "text-white/60 hover:text-white"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/contact"
            className="bg-white hover:bg-white/90 text-stone-900 text-sm font-medium px-5 py-2.5 rounded-lg transition-colors active:scale-[0.98]"
          >
            Contact
          </Link>
        </div>

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-white/70 p-2 -mr-2"
          aria-label="Toggle menu"
        >
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            strokeWidth={1.5}
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 9h16.5m-16.5 6.75h16.5"
            />
          </svg>
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden px-6 pb-4 border-t border-white/10 bg-black/60 backdrop-blur-md">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className={`block py-3 text-sm border-b border-white/10 ${
                pathname === link.href
                  ? "text-white font-medium"
                  : "text-white/60"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/contact"
            onClick={() => setMenuOpen(false)}
            className="block py-3 text-white text-sm font-medium"
          >
            Contact
          </Link>
        </div>
      )}
    </nav>
  );
}
