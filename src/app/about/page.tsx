import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  GraduationCap,
  Briefcase,
  Heart,
  Users,
} from "lucide-react";
import { BlobShape, SparkleDecor } from "@/components/DecorativeShapes";
import RevealSection from "@/components/RevealSection";

export const metadata: Metadata = {
  title: "About Chrissy Weems | CEO & Co-Founder of Origami Owl",
  description:
    "Learn about Chrissy Weems, CEO and Co-Founder of Origami Owl, philanthropist, TEDx speaker, and champion of youth empowerment.",
};

const milestones = [
  {
    year: "2010",
    title: "Origami Owl Founded",
    description:
      "Chrissy and her daughter Bella co-founded Origami Owl with a combined $350 investment, creating living lockets from their home in Arizona.",
  },
  {
    year: "2013",
    title: "$250 Million Valuation",
    description:
      "In just three years, Origami Owl grew to a company valued at over $250 million with hundreds of sales professionals nationwide.",
  },
  {
    year: "2016",
    title: "Force for Good Milestone",
    description:
      "The Force for Good initiative donated $1.15 million to charitable causes across Arizona, supporting children, education, and women's empowerment.",
  },
  {
    year: "2017",
    title: "Named CEO",
    description:
      "Chrissy was named CEO of Origami Owl Family of Brands in July 2017, overseeing expansion into Canada and continued growth.",
  },
  {
    year: "2019",
    title: "TEDx Speaker",
    description:
      "Featured as a TEDx speaker, sharing her entrepreneurial journey and philosophy of paying it forward.",
  },
];

const sidebarCards = [
  {
    icon: GraduationCap,
    title: "Education",
    text: "Arizona State University, Fine Arts",
    accent: "border-l-gold",
    iconColor: "text-gold",
    bg: "bg-gold/5",
  },
  {
    icon: Briefcase,
    title: "Role",
    text: "CEO & Co-Founder, Origami Owl (since July 2017)",
    accent: "border-l-rose-gold",
    iconColor: "text-rose-gold",
    bg: "bg-rose-gold/5",
  },
  {
    icon: Heart,
    title: "Philanthropy",
    text: "Force for Good initiative, $1.15M donated to charity. Partners with 12+ charitable organizations across Arizona.",
    accent: "border-l-deep-plum",
    iconColor: "text-deep-plum",
    bg: "bg-deep-plum/5",
  },
  {
    icon: Users,
    title: "Family",
    text: "Married 25+ years. Mother of five children, including Origami Owl co-founder Bella Weems.",
    accent: "border-l-soft-pink",
    iconColor: "text-rose-gold",
    bg: "bg-soft-pink/10",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-gradient-to-br from-cream via-warm-white to-rose-100 py-24 overflow-hidden">
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-soft-pink/20 rounded-full blur-[100px]" />
        <SparkleDecor className="absolute top-20 right-[20%] w-4 h-4 text-gold/30 animate-sparkle" />
        <BlobShape className="absolute -bottom-20 -left-20 w-60 h-60 text-rose-gold/5" />

        <div className="relative max-w-7xl mx-auto px-6">
          <RevealSection>
            <p className="text-rose-gold font-medium mb-4 tracking-[0.2em] uppercase text-xs">
              About
            </p>
            <h1 className="text-5xl md:text-7xl font-heading font-bold text-deep-plum leading-[1.1] mb-6">
              Meet <span className="text-gradient">Chrissy Weems</span>
            </h1>
            <p className="text-lg md:text-xl text-warm-gray/80 leading-[1.8] max-w-2xl">
              A stay-at-home mother turned CEO of a $250 million company.
              Proof that purpose, family, and perseverance can build something
              extraordinary.
            </p>
          </RevealSection>
        </div>
      </section>

      {/* Bio Section */}
      <section className="py-28 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-[1.4fr_0.6fr] gap-16 items-start">
            <RevealSection direction="left">
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-deep-plum mb-8">
                The Story Behind{" "}
                <span className="text-gradient">the Success</span>
              </h2>
              <div className="space-y-5 text-warm-gray leading-[1.8] text-lg">
                <p>
                  Chrissy Weems never set out to build a multi-million dollar
                  company. As a stay-at-home mother of five, her world revolved
                  around her family. Everything changed when her 14-year-old
                  daughter Bella came to her with a dream: she wanted to buy a
                  car.
                </p>
                <p>
                  Bella had saved $350 from babysitting. Chrissy pledged to
                  match it, and together they channeled their shared love of
                  crafting into something neither could have imagined. They
                  created &ldquo;living lockets,&rdquo; clear jewelry pieces
                  that could be filled with tiny charms and personal
                  memorabilia, each one telling a unique story.
                </p>
                <p>
                  Starting from a small rented space in an Arizona mall, the
                  mother-daughter team quickly found that their product resonated
                  deeply with people. By 2013, Origami Owl had grown to a
                  company valued at over $250 million, with more than 600 direct
                  sales professionals sharing their lockets across the country.
                </p>
                <p>
                  In July 2017, Chrissy was named CEO of the Origami Owl Family
                  of Brands, overseeing expansion into Canada and continued
                  innovation. She holds a degree in Fine Arts from Arizona State
                  University.
                </p>
              </div>
            </RevealSection>

            <RevealSection direction="right">
              <div className="space-y-5">
                {sidebarCards.map((card) => (
                  <div
                    key={card.title}
                    className={`glass rounded-2xl p-6 border-l-4 ${card.accent}`}
                  >
                    <div className="flex items-center gap-3 mb-3">
                      <div className={`w-8 h-8 ${card.bg} rounded-lg flex items-center justify-center`}>
                        <card.icon size={16} className={card.iconColor} />
                      </div>
                      <h3 className="font-semibold text-deep-plum">
                        {card.title}
                      </h3>
                    </div>
                    <p className="text-warm-gray text-sm leading-[1.7]">
                      {card.text}
                    </p>
                  </div>
                ))}
              </div>
            </RevealSection>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="relative py-28 bg-warm-white overflow-hidden">
        <BlobShape className="absolute -right-32 top-20 w-[400px] h-[400px] text-soft-pink/10" />

        <div className="relative max-w-5xl mx-auto px-6">
          <RevealSection>
            <div className="text-center mb-16">
              <p className="text-rose-gold font-medium tracking-[0.2em] uppercase text-xs mb-4">
                Journey
              </p>
              <h2 className="text-3xl md:text-5xl font-heading font-bold text-deep-plum">
                Key Milestones
              </h2>
              <div className="w-16 h-[2px] bg-gradient-to-r from-rose-gold to-gold mx-auto mt-6" />
            </div>
          </RevealSection>

          <div className="relative">
            {/* Vertical gradient line */}
            <div className="absolute left-8 md:left-1/2 md:-translate-x-[1px] top-0 bottom-0 w-[2px] bg-gradient-to-b from-rose-gold via-gold to-deep-plum" />

            {milestones.map((milestone, i) => (
              <RevealSection
                key={milestone.year}
                direction={i % 2 === 0 ? "left" : "right"}
                delay={i * 80}
              >
                <div
                  className={`relative flex items-start gap-8 mb-16 ${
                    i % 2 === 0
                      ? "md:flex-row"
                      : "md:flex-row-reverse"
                  } md:gap-16`}
                >
                  {/* Content card */}
                  <div className="flex-1 ml-20 md:ml-0 glass rounded-2xl p-8">
                    <h3 className="font-heading font-bold text-deep-plum text-xl mb-2">
                      {milestone.title}
                    </h3>
                    <p className="text-warm-gray text-sm leading-[1.8]">
                      {milestone.description}
                    </p>
                  </div>

                  {/* Year bubble */}
                  <div className="absolute left-8 md:left-1/2 -translate-x-1/2 w-16 h-16 bg-gradient-to-br from-rose-gold to-gold rounded-full flex items-center justify-center shadow-lg shadow-rose-gold/30 z-10">
                    <span className="text-white font-bold text-sm">
                      {milestone.year}
                    </span>
                  </div>

                  {/* Spacer for alternating */}
                  <div className="flex-1 hidden md:block" />
                </div>
              </RevealSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-deep-plum via-plum-800 to-rose-900" />
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-rose-gold/10 rounded-full blur-[100px]" />
        <SparkleDecor className="absolute top-12 left-[15%] w-3 h-3 text-gold/30" />

        <div className="relative max-w-4xl mx-auto px-6 text-center">
          <RevealSection>
            <h2 className="text-3xl md:text-5xl font-heading font-bold text-white mb-6">
              Want to Connect with Chrissy?
            </h2>
            <p className="text-white/70 mb-10 text-lg">
              Reach out for speaking engagements, collaborations, or to learn
              more.
            </p>
            <Link
              href="/contact"
              className="shimmer-hover bg-gold text-deep-plum px-10 py-4 rounded-full font-semibold hover:bg-white transition-colors inline-flex items-center gap-2 shadow-lg shadow-gold/20 text-lg"
            >
              Contact <ArrowRight size={18} />
            </Link>
          </RevealSection>
        </div>
      </section>
    </>
  );
}
