import type { Metadata } from "next";
import Link from "next/link";
import { Sparkles, ExternalLink } from "lucide-react";

export const metadata: Metadata = {
  title: "Live Sparkly | Chrissy Weems",
  description:
    "Live Sparkly is an inspiring collection of stories featuring Origami Owl and the Owlettes community.",
};

export default function LiveSparklyPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-warm-white via-soft-pink/20 to-warm-white py-20">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <div className="inline-flex items-center gap-2 bg-rose-gold/10 text-rose-gold px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Sparkles size={16} />
            Live Sparkly
          </div>
          <h1 className="text-4xl md:text-5xl font-heading font-bold text-deep-plum leading-tight mb-6">
            An Inspiring Collection of Stories
          </h1>
          <p className="text-lg text-warm-gray leading-relaxed max-w-2xl mx-auto mb-8">
            Live Sparkly brings together the most inspiring stories from
            Origami Owl and the Owlettes community. Real stories of
            entrepreneurship, giving back, and living with purpose.
          </p>
          <a
            href="https://livesparkly.com"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-rose-gold text-white px-8 py-3 rounded-full font-medium hover:bg-deep-plum transition-colors inline-flex items-center gap-2"
          >
            Visit LiveSparkly.com <ExternalLink size={16} />
          </a>
        </div>
      </section>

      {/* What is Live Sparkly */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-heading font-bold text-deep-plum mb-6">
                What is Live Sparkly?
              </h2>
              <div className="space-y-4 text-warm-gray leading-relaxed">
                <p>
                  Live Sparkly is more than a tagline. It is a movement built
                  around the belief that every person has a story worth sharing
                  and a spark worth igniting.
                </p>
                <p>
                  Through Live Sparkly, Chrissy Weems and the Origami Owl
                  community celebrate the journeys of everyday people who are
                  making a difference. From Owlettes building their first
                  businesses to families overcoming challenges together, these
                  stories remind us of the power of connection and purpose.
                </p>
                <p>
                  The platform features stories of entrepreneurship, community
                  service, personal growth, and the moments that make life
                  sparkle.
                </p>
              </div>
            </div>

            <div className="bg-warm-white rounded-2xl p-8 border border-soft-pink/20">
              <h3 className="font-heading font-bold text-deep-plum text-xl mb-6">
                Stories You Will Find
              </h3>
              <ul className="space-y-4">
                {[
                  "Young Owlettes launching their entrepreneurial journeys",
                  "Families bonding through creativity and business",
                  "Communities coming together to support one another",
                  "Individuals turning challenges into opportunities",
                  "The impact of giving back through Force for Good",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <Sparkles
                      size={16}
                      className="text-gold mt-1 flex-shrink-0"
                    />
                    <span className="text-warm-gray text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Owlette Program */}
      <section className="py-20 bg-warm-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-heading font-bold text-deep-plum mb-6">
            The Owlette Program
          </h2>
          <p className="text-warm-gray leading-relaxed mb-8 max-w-2xl mx-auto">
            At the heart of Live Sparkly is the Owlette Program, a unique youth
            entrepreneurship initiative for ages 11 to 17. Young people work
            alongside a parent who is an Origami Owl Designer to sharpen their
            entrepreneurial and leadership skills while building confidence that
            lasts a lifetime.
          </p>
          <div className="grid sm:grid-cols-3 gap-6">
            {[
              { value: "11-17", label: "Age Range" },
              { value: "Leadership", label: "Skills Built" },
              { value: "Family", label: "Driven" },
            ].map((stat) => (
              <div
                key={stat.label}
                className="bg-white rounded-xl p-6 border border-soft-pink/20"
              >
                <p className="text-2xl font-heading font-bold text-rose-gold mb-1">
                  {stat.value}
                </p>
                <p className="text-warm-gray text-sm">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-r from-rose-gold to-deep-plum">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-heading font-bold text-white mb-4">
            Ready to Live Sparkly?
          </h2>
          <p className="text-white/80 mb-8">
            Explore the full collection of inspiring stories at LiveSparkly.com
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://livesparkly.com"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-deep-plum px-8 py-3 rounded-full font-semibold hover:bg-gold transition-colors inline-flex items-center justify-center gap-2"
            >
              Visit LiveSparkly.com <ExternalLink size={16} />
            </a>
            <Link
              href="/contact"
              className="border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-deep-plum transition-colors inline-flex items-center justify-center"
            >
              Contact Chrissy
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
