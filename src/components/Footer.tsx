import Link from "next/link";
import { BlobShape, SparkleDecor } from "./DecorativeShapes";

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
    <>
      <footer className="relative bg-gradient-to-b from-deep-plum to-plum-900 text-white overflow-hidden">
        <BlobShape className="absolute -right-32 -top-20 w-80 h-80 text-plum-400/5" />
        <SparkleDecor className="absolute left-[10%] top-12 w-3 h-3 text-gold/20" />
        <SparkleDecor className="absolute right-[15%] bottom-16 w-2 h-2 text-rose-gold/15" />

        <div className="h-[1px] bg-gradient-to-r from-transparent via-gold/30 to-transparent" />

        <div className="relative max-w-7xl mx-auto px-6 py-14">
          <div className="grid md:grid-cols-3 gap-10">
            <div>
              <h3 className="text-2xl font-heading font-bold text-gradient mb-4">
                Chrissy Weems
              </h3>
              <p className="text-white/60 text-sm leading-[1.8]">
                Entrepreneur, philanthropist, and advocate for youth empowerment.
                CEO and Co-Founder of Origami Owl.
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-5 text-gold/80 tracking-wide uppercase text-xs">
                Quick Links
              </h4>
              <ul className="space-y-3">
                {footerLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-white/60 text-sm hover:text-gold transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-5 text-gold/80 tracking-wide uppercase text-xs">
                Connect
              </h4>
              <p className="text-white/60 text-sm mb-6 leading-[1.8]">
                Interested in collaborating or learning more? Reach out through
                the contact page.
              </p>
              <Link
                href="/contact"
                className="inline-block bg-gold text-deep-plum px-6 py-2.5 rounded-full text-sm font-semibold hover:bg-white transition-colors shadow-md shadow-gold/20"
              >
                Contact Chrissy
              </Link>
            </div>
          </div>

          <div className="mt-12 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-white/40 text-xs">
              Copyright Chrissy Weems 2018 - 2026. All Rights Reserved.
            </p>
            <p className="text-white/40 text-xs">
              Built by{" "}
              <a
                href="https://caltechweb.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/60 hover:text-gold transition-colors"
              >
                CalTech Web
              </a>
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}
