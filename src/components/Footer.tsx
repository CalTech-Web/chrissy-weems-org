import Link from "next/link";
import { Heart } from "lucide-react";

const footerLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/live-sparkly", label: "Live Sparkly" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
  { href: "/privacy-policy", label: "Privacy Policy" },
];

export default function Footer() {
  return (
    <footer className="bg-deep-plum text-white">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-heading font-bold mb-4">Chrissy Weems</h3>
            <p className="text-white/70 text-sm leading-relaxed">
              Entrepreneur, philanthropist, and advocate for youth empowerment.
              CEO and Co-Founder of Origami Owl.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-white/70 text-sm hover:text-gold transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Connect</h4>
            <p className="text-white/70 text-sm mb-4">
              Interested in collaborating or learning more? Reach out through the
              contact page.
            </p>
            <Link
              href="/contact"
              className="inline-block bg-gold text-deep-plum px-5 py-2 rounded-full text-sm font-semibold hover:bg-white transition-colors"
            >
              Contact Chrissy
            </Link>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-white/20 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/50 text-xs">
            Copyright Chrissy Weems 2018 - 2026. All Rights Reserved.
          </p>
          <p className="text-white/50 text-xs flex items-center gap-1">
            Made with <Heart size={12} className="text-rose-gold" /> in Arizona
          </p>
        </div>
      </div>
    </footer>
  );
}
