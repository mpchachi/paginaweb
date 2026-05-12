"use client";

import { useState } from "react";

export function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);

  const links = [
    { href: "#solution", label: "Solution" },
    { href: "#journey", label: "Journey" },
    { href: "#demo", label: "Demo" },
    { href: "#team", label: "Team" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-surface-0/90 backdrop-blur-sm border-b border-stone-200/60">
      <div className="max-w-[1200px] mx-auto px-6 py-4 flex items-center justify-between">
        <a href="#" className="text-stone-900 font-bold text-lg tracking-tight">
          BetweenVisits
        </a>

        <div className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-stone-500 hover:text-stone-900 text-sm transition-colors"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            className="bg-stone-900 hover:bg-stone-800 text-white text-sm font-medium px-5 py-2.5 rounded-lg transition-colors active:scale-[0.98]"
          >
            Contact
          </a>
        </div>

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-stone-700 p-2 -mr-2"
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
        <div className="md:hidden px-6 pb-4 border-t border-stone-100">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="block py-3 text-stone-600 text-sm border-b border-stone-100"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setMenuOpen(false)}
            className="block py-3 text-stone-900 text-sm font-medium"
          >
            Contact
          </a>
        </div>
      )}
    </nav>
  );
}
