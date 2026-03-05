import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, GraduationCap, Briefcase, Heart, Users } from "lucide-react";

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

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-warm-white py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="max-w-3xl">
            <p className="text-rose-gold font-medium mb-4 tracking-wide uppercase text-sm">
              About
            </p>
            <h1 className="text-4xl md:text-5xl font-heading font-bold text-deep-plum leading-tight mb-6">
              Meet Chrissy Weems
            </h1>
            <p className="text-lg text-warm-gray leading-relaxed">
              A stay-at-home mother turned CEO of a $250 million company.
              Chrissy Weems is proof that purpose, family, and perseverance can
              build something extraordinary.
            </p>
          </div>
        </div>
      </section>

      {/* Bio Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-3xl font-heading font-bold text-deep-plum mb-6">
                The Story Behind the Success
              </h2>
              <div className="space-y-4 text-warm-gray leading-relaxed">
                <p>
                  Chrissy Weems never set out to build a multi-million dollar
                  company. As a stay-at-home mother of five, her world revolved
                  around her family. Everything changed when her 14-year-old
                  daughter Bella came to her with a dream: she wanted to buy a
                  car.
                </p>
                <p>
                  Bella had saved $350 from babysitting. Chrissy pledged to match
                  it, and together they channeled their shared love of crafting
                  into something neither could have imagined. They created
                  "living lockets," clear jewelry pieces that could be filled
                  with tiny charms and personal memorabilia, each one telling a
                  unique story.
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
            </div>

            <div className="space-y-6">
              <div className="bg-warm-white rounded-2xl p-6 border border-soft-pink/20">
                <div className="flex items-center gap-3 mb-3">
                  <GraduationCap size={20} className="text-rose-gold" />
                  <h3 className="font-semibold text-deep-plum">Education</h3>
                </div>
                <p className="text-warm-gray text-sm">
                  Arizona State University, Fine Arts
                </p>
              </div>

              <div className="bg-warm-white rounded-2xl p-6 border border-soft-pink/20">
                <div className="flex items-center gap-3 mb-3">
                  <Briefcase size={20} className="text-rose-gold" />
                  <h3 className="font-semibold text-deep-plum">Role</h3>
                </div>
                <p className="text-warm-gray text-sm">
                  CEO & Co-Founder, Origami Owl (since July 2017)
                </p>
              </div>

              <div className="bg-warm-white rounded-2xl p-6 border border-soft-pink/20">
                <div className="flex items-center gap-3 mb-3">
                  <Heart size={20} className="text-rose-gold" />
                  <h3 className="font-semibold text-deep-plum">Philanthropy</h3>
                </div>
                <p className="text-warm-gray text-sm">
                  Force for Good initiative, $1.15M donated to charity. Partners
                  with 12+ charitable organizations across Arizona.
                </p>
              </div>

              <div className="bg-warm-white rounded-2xl p-6 border border-soft-pink/20">
                <div className="flex items-center gap-3 mb-3">
                  <Users size={20} className="text-rose-gold" />
                  <h3 className="font-semibold text-deep-plum">Family</h3>
                </div>
                <p className="text-warm-gray text-sm">
                  Married 25+ years. Mother of five children, including
                  Origami Owl co-founder Bella Weems.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-warm-white">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-heading font-bold text-deep-plum mb-12 text-center">
            Key Milestones
          </h2>

          <div className="space-y-8">
            {milestones.map((milestone) => (
              <div
                key={milestone.year}
                className="flex gap-6 items-start"
              >
                <div className="flex-shrink-0 w-16 h-16 bg-rose-gold rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-sm">
                    {milestone.year}
                  </span>
                </div>
                <div className="pt-2">
                  <h3 className="font-heading font-bold text-deep-plum text-lg mb-2">
                    {milestone.title}
                  </h3>
                  <p className="text-warm-gray text-sm leading-relaxed">
                    {milestone.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-deep-plum">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-heading font-bold text-white mb-4">
            Want to Connect with Chrissy?
          </h2>
          <p className="text-white/70 mb-8">
            Reach out for speaking engagements, collaborations, or to learn
            more.
          </p>
          <Link
            href="/contact"
            className="bg-gold text-deep-plum px-8 py-3 rounded-full font-semibold hover:bg-white transition-colors inline-flex items-center gap-2"
          >
            Contact <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </>
  );
}
