"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { SparkleDecor } from "./DecorativeShapes";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/live-sparkly", label: "Live Sparkly" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <>
      <div className="h-[2px] bg-gradient-to-r from-rose-gold via-gold to-rose-gold" />
      <header
        className={`sticky top-0 z-50 transition-all duration-300 border-b ${
          scrolled
            ? "bg-white/98 backdrop-blur-md shadow-[0_1px_12px_rgba(74,14,78,0.06)] border-soft-pink/20"
            : "bg-white/80 backdrop-blur-sm border-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 group">
            <SparkleDecor className="w-4 h-4 text-gold group-hover:animate-sparkle transition-transform" />
            <span className="text-2xl font-heading font-bold text-gradient">
              Chrissy Weems
            </span>
          </Link>

          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => {
              const isActive =
                link.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(link.href);
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`text-sm font-medium transition-colors relative ${
                    isActive
                      ? "text-rose-gold"
                      : "text-warm-gray hover:text-rose-gold"
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute -bottom-1 left-0 right-0 h-[2px] bg-gradient-to-r from-rose-gold to-gold rounded-full" />
                  )}
                </Link>
              );
            })}
            <Link
              href="/contact"
              className="shimmer-hover bg-gradient-to-r from-rose-gold to-rose-900 text-white px-6 py-2.5 rounded-full text-sm font-medium shadow-md shadow-rose-gold/20 hover:shadow-lg hover:shadow-rose-gold/30 transition-shadow"
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

        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
            mobileOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="px-6 py-4 bg-white/95 backdrop-blur-md border-t border-soft-pink/20">
            {navLinks.map((link) => {
              const isActive =
                link.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(link.href);
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className={`block py-3 transition-colors ${
                    isActive ? "text-rose-gold font-medium" : "text-warm-gray hover:text-rose-gold"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
            <Link
              href="/contact"
              onClick={() => setMobileOpen(false)}
              className="block mt-2 bg-gradient-to-r from-rose-gold to-rose-900 text-white px-5 py-2.5 rounded-full text-sm font-medium text-center"
            >
              Get in Touch
            </Link>
          </div>
        </div>
      </header>
    </>
  );
}
