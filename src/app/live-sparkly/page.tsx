import type { Metadata } from "next";
import Link from "next/link";
import { Sparkles, ExternalLink } from "lucide-react";
import { BlobShape, SparkleDecor, FloatingRing } from "@/components/DecorativeShapes";
import RevealSection from "@/components/RevealSection";

export const metadata: Metadata = {
  title: "Live Sparkly | Chrissy Weems",
  description:
    "Live Sparkly is an inspiring collection of stories featuring Origami Owl and the Owlettes community.",
};

const stories = [
  "Young Owlettes launching their entrepreneurial journeys",
  "Families bonding through creativity and business",
  "Communities coming together to support one another",
  "Individuals turning challenges into opportunities",
  "The impact of giving back through Force for Good",
];

export default function LiveSparklyPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-gradient-to-br from-cream via-soft-pink/20 to-rose-100 py-28 overflow-hidden">
        <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] bg-soft-pink/20 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 right-0 w-[300px] h-[300px] bg-gold/10 rounded-full blur-[80px]" />
        <FloatingRing className="absolute top-16 right-[15%] w-20 h-20 text-gold/15 animate-[spin_25s_linear_infinite]" />
        <SparkleDecor className="absolute top-24 left-[20%] w-4 h-4 text-gold/40 animate-sparkle" />
        <SparkleDecor className="absolute bottom-32 right-[30%] w-3 h-3 text-rose-gold/30 animate-sparkle" />

        <div className="relative max-w-7xl mx-auto px-6 text-center">
          <RevealSection>
            <div className="inline-flex items-center gap-2 bg-rose-gold/10 text-rose-gold px-5 py-2.5 rounded-full text-sm font-medium mb-8 backdrop-blur-sm">
              <Sparkles size={16} className="animate-sparkle" />
              Live Sparkly
            </div>
          </RevealSection>
          <RevealSection delay={100}>
            <h1 className="text-5xl md:text-7xl font-heading font-bold text-deep-plum leading-[1.1] mb-6">
              An Inspiring Collection{" "}
              <span className="text-gradient">of Stories</span>
            </h1>
          </RevealSection>
          <RevealSection delay={200}>
            <p className="text-lg md:text-xl text-warm-gray/80 leading-[1.8] max-w-2xl mx-auto mb-10">
              Live Sparkly brings together the most inspiring stories from
              Origami Owl and the Owlettes community. Real stories of
              entrepreneurship, giving back, and living with purpose.
            </p>
          </RevealSection>
          <RevealSection delay={300}>
            <a
              href="https://livesparkly.com"
              target="_blank"
              rel="noopener noreferrer"
              className="shimmer-hover bg-gradient-to-r from-rose-gold to-rose-900 text-white px-8 py-4 rounded-full font-medium inline-flex items-center gap-2 shadow-lg shadow-rose-gold/25"
            >
              Visit LiveSparkly.com <ExternalLink size={16} />
            </a>
          </RevealSection>
        </div>
      </section>

      {/* What is Live Sparkly */}
      <section className="relative py-28 bg-white overflow-hidden">
        <BlobShape className="absolute -right-32 top-10 w-[400px] h-[400px] text-rose-100/50" />

        <div className="relative max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-[1.2fr_0.8fr] gap-16 items-center">
            <RevealSection direction="left">
              <h2 className="text-3xl md:text-5xl font-heading font-bold text-deep-plum mb-8 leading-tight">
                What is{" "}
                <span className="text-gradient">Live Sparkly?</span>
              </h2>
              <div className="space-y-5 text-warm-gray leading-[1.8] text-lg">
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
            </RevealSection>

            <RevealSection direction="right">
              <div className="glass rounded-3xl p-8 relative overflow-hidden">
                <BlobShape className="absolute -bottom-16 -right-16 w-40 h-40 text-gold/5" />
                <h3 className="font-heading font-bold text-deep-plum text-xl mb-6 relative z-10">
                  Stories You Will Find
                </h3>
                <ul className="space-y-5 relative z-10">
                  {stories.map((item, i) => (
                    <li key={item} className="flex items-start gap-3">
                      <div className="w-6 h-6 bg-gold/10 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Sparkles
                          size={12}
                          className={i % 2 === 0 ? "text-gold" : "text-rose-gold"}
                        />
                      </div>
                      <span className="text-warm-gray text-sm leading-[1.7]">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </RevealSection>
          </div>
        </div>
      </section>

      {/* Owlette Program */}
      <section className="relative py-28 bg-warm-white overflow-hidden">
        <SparkleDecor className="absolute top-16 left-[10%] w-3 h-3 text-gold/20 animate-sparkle" />

        <div className="relative max-w-5xl mx-auto px-6">
          <RevealSection>
            <div className="text-center mb-12">
              <p className="text-rose-gold font-medium tracking-[0.2em] uppercase text-xs mb-4">
                Youth Empowerment
              </p>
              <h2 className="text-3xl md:text-5xl font-heading font-bold text-deep-plum mb-6">
                The Owlette Program
              </h2>
              <div className="w-16 h-[2px] bg-gradient-to-r from-rose-gold to-gold mx-auto" />
            </div>
          </RevealSection>

          <RevealSection delay={100}>
            <p className="text-warm-gray leading-[1.8] text-lg mb-10 max-w-2xl mx-auto text-center">
              At the heart of Live Sparkly is the Owlette Program, a unique
              youth entrepreneurship initiative for ages 11 to 17. Young people
              work alongside a parent who is an Origami Owl Designer to sharpen
              their entrepreneurial and leadership skills while building
              confidence that lasts a lifetime.
            </p>
          </RevealSection>

          <div className="grid sm:grid-cols-3 gap-6">
            <RevealSection delay={100}>
              <div className="bg-gradient-to-br from-deep-plum to-plum-800 rounded-3xl p-8 text-white text-center relative overflow-hidden group sm:row-span-1">
                <BlobShape className="absolute -right-10 -bottom-10 w-32 h-32 text-plum-400/20 group-hover:scale-110 transition-transform duration-700" />
                <p className="text-4xl font-heading font-bold text-gold mb-2 relative z-10">
                  11-17
                </p>
                <p className="text-white/60 text-sm relative z-10">Age Range</p>
              </div>
            </RevealSection>
            <RevealSection delay={200}>
              <div className="glass rounded-3xl p-8 text-center hover:shadow-xl transition-all">
                <p className="text-3xl font-heading font-bold text-rose-gold mb-2">
                  Leadership
                </p>
                <p className="text-warm-gray text-sm">Skills Built</p>
              </div>
            </RevealSection>
            <RevealSection delay={300}>
              <div className="rounded-3xl p-8 text-center border border-gold/20 bg-warm-white hover:border-gold/40 transition-colors">
                <p className="text-3xl font-heading font-bold text-deep-plum mb-2">
                  Family
                </p>
                <p className="text-warm-gray text-sm">Driven</p>
              </div>
            </RevealSection>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-28 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-rose-900 via-deep-plum to-plum-800" />
        <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-rose-gold/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 right-0 w-[300px] h-[300px] bg-gold/10 rounded-full blur-[80px]" />
        <SparkleDecor className="absolute top-16 right-[20%] w-4 h-4 text-gold/30 animate-sparkle" />
        <SparkleDecor className="absolute bottom-20 left-[15%] w-3 h-3 text-rose-gold/20" />

        <div className="relative max-w-4xl mx-auto px-6 text-center">
          <RevealSection>
            <h2 className="text-4xl md:text-6xl font-heading font-bold text-white mb-6 leading-tight">
              Ready to Live Sparkly?
            </h2>
            <p className="text-white/70 mb-10 text-lg leading-[1.8] max-w-xl mx-auto">
              Explore the full collection of inspiring stories at
              LiveSparkly.com
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://livesparkly.com"
                target="_blank"
                rel="noopener noreferrer"
                className="shimmer-hover bg-white text-deep-plum px-10 py-4 rounded-full font-semibold hover:bg-gold transition-colors inline-flex items-center justify-center gap-2 shadow-lg shadow-black/20 text-lg"
              >
                Visit LiveSparkly.com <ExternalLink size={16} />
              </a>
              <Link
                href="/contact"
                className="glass-dark text-white px-10 py-4 rounded-full font-semibold hover:bg-white/20 transition-all inline-flex items-center justify-center"
              >
                Contact Chrissy
              </Link>
            </div>
          </RevealSection>
        </div>
      </section>
    </>
  );
}
