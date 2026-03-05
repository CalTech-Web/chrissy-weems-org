"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/live-sparkly", label: "Live Sparkly" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-soft-pink/30">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link href="/" className="text-2xl font-heading font-bold text-deep-plum">
          Chrissy Weems
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-warm-gray hover:text-rose-gold transition-colors"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/contact"
            className="bg-rose-gold text-white px-5 py-2 rounded-full text-sm font-medium hover:bg-deep-plum transition-colors"
          >
            Get in Touch
          </Link>
        </nav>

        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden text-deep-plum"
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {mobileOpen && (
        <div className="md:hidden bg-white border-t border-soft-pink/30 px-6 py-4">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="block py-3 text-warm-gray hover:text-rose-gold transition-colors"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/contact"
            onClick={() => setMobileOpen(false)}
            className="block mt-2 bg-rose-gold text-white px-5 py-2 rounded-full text-sm font-medium text-center hover:bg-deep-plum transition-colors"
          >
            Get in Touch
          </Link>
        </div>
      )}
    </header>
  );
}
