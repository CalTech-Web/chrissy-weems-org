import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Heart, Users, Sparkles, Award } from "lucide-react";
import {
  BlobShape,
  SparkleDecor,
  WaveSeparator,
} from "@/components/DecorativeShapes";
import RevealSection from "@/components/RevealSection";

const initiatives = [
  {
    icon: Heart,
    title: "Force for Good",
    description:
      "Origami Owl's philanthropic venture has donated over $1.15 million to charitable causes, supporting children's welfare, academic opportunities, and women's empowerment.",
    featured: true,
  },
  {
    icon: Users,
    title: "Owlette Program",
    description:
      "A youth entrepreneurship program for ages 11 to 17, helping young people sharpen leadership skills and build confidence alongside their parents.",
    featured: false,
  },
  {
    icon: Sparkles,
    title: "I Am Bullyproof",
    description:
      "An anti-bullying campaign raising awareness and providing resources to help children and families stand against childhood bullying.",
    featured: false,
  },
  {
    icon: Award,
    title: "Childhelp Partnership",
    description:
      "Origami Owl partners with Childhelp to save children's lives through awareness campaigns and special collections that benefit child welfare.",
    featured: true,
  },
];

const stats = [
  { value: "$250M", label: "Company Valuation" },
  { value: "$350", label: "Initial Investment" },
  { value: "600+", label: "Sales Professionals" },
  { value: "$1.15M", label: "Charitable Donations" },
];

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-white via-warm-white to-warm-white" />
        <div className="absolute top-1/4 right-1/4 w-[500px] h-[500px] bg-soft-pink/15 rounded-full blur-[120px]" />
        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage:
              "radial-gradient(circle, #4A0E4E 1px, transparent 1px)",
            backgroundSize: "24px 24px",
          }}
        />

        <div className="relative max-w-7xl mx-auto px-6 py-24 md:py-32 grid md:grid-cols-[1.1fr_0.9fr] gap-12 items-center">
          <div>
            <RevealSection>
              <p className="text-rose-gold font-medium mb-4 tracking-[0.2em] uppercase text-xs">
                Entrepreneur &middot; Philanthropist &middot; Advocate
              </p>
            </RevealSection>
            <RevealSection delay={100}>
              <h1 className="text-5xl md:text-7xl font-heading font-bold text-deep-plum leading-[1.1] mb-6">
                Inspiring Change,{" "}
                <span className="text-gradient">One Life at a Time</span>
              </h1>
            </RevealSection>
            <RevealSection delay={200}>
              <p className="text-lg md:text-xl text-warm-gray leading-[1.8] mb-10 max-w-xl">
                CEO and Co-Founder of Origami Owl. From a $350 investment to a
                $250 million enterprise, championing youth empowerment and
                philanthropy.
              </p>
            </RevealSection>
            <RevealSection delay={300}>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/about"
                  className="shimmer-hover bg-deep-plum text-white px-8 py-4 rounded-full font-medium inline-flex items-center justify-center gap-2 shadow-lg shadow-deep-plum/20 hover:shadow-xl transition-shadow"
                >
                  Learn More <ArrowRight size={16} />
                </Link>
                <Link
                  href="/contact"
                  className="border-2 border-deep-plum/20 text-deep-plum px-8 py-4 rounded-full font-medium hover:bg-deep-plum hover:text-white transition-all inline-flex items-center justify-center"
                >
                  Get in Touch
                </Link>
              </div>
            </RevealSection>
          </div>

          <RevealSection direction="right" delay={200} className="hidden md:block">
            <div className="relative">
              <div className="rounded-3xl overflow-hidden shadow-2xl shadow-deep-plum/10">
                <Image
                  src="/chrissy-weems-banner.png"
                  alt="Chrissy Weems"
                  width={790}
                  height={530}
                  className="w-full h-auto object-cover"
                  priority
                />
              </div>
            </div>
          </RevealSection>
        </div>

        <WaveSeparator className="absolute bottom-0 left-0 w-full h-20 text-deep-plum" />
      </section>

      {/* Stats Section */}
      <section className="relative bg-deep-plum pt-20 pb-20 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[200px] bg-plum-400/15 rounded-full blur-[80px]" />
        <div className="relative max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, i) => (
              <RevealSection key={stat.label} delay={i * 80}>
                <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 text-center group hover:bg-white/10 transition-colors">
                  <p className="text-3xl md:text-4xl font-heading font-bold text-gold mb-2 transition-transform duration-300 group-hover:scale-105">
                    {stat.value}
                  </p>
                  <p className="text-white/50 text-sm tracking-wide">
                    {stat.label}
                  </p>
                </div>
              </RevealSection>
            ))}
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="relative py-28 bg-white overflow-hidden">
        <BlobShape className="absolute -left-40 top-10 w-[400px] h-[400px] text-warm-white" />

        <div className="relative max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-[0.4fr_0.6fr] gap-16 items-center">
            <RevealSection direction="left">
              <div className="relative">
                <span className="text-[12rem] font-heading text-deep-plum/5 leading-none select-none absolute -top-16 -left-4">
                  &ldquo;
                </span>
                <blockquote className="relative z-10 bg-warm-white rounded-3xl p-10 border border-soft-pink/15">
                  <p className="text-xl md:text-2xl font-heading text-deep-plum italic leading-relaxed">
                    Pay it forward. Success in business should be passed on to
                    deserving organizations and the people around you.
                  </p>
                  <cite className="block mt-6 text-rose-gold font-medium not-italic text-sm tracking-wide">
                    Chrissy Weems
                  </cite>
                </blockquote>
              </div>
            </RevealSection>

            <RevealSection direction="right">
              <h2 className="text-3xl md:text-5xl font-heading font-bold text-deep-plum mb-8 leading-tight">
                A Story of Purpose and Perseverance
              </h2>
              <p className="text-warm-gray leading-[1.8] text-lg">
                What started as a way to help her 14-year-old daughter Bella earn
                money for a car became one of the most successful direct sales
                companies in the country. Chrissy matched Bella&apos;s $350 in
                babysitting savings, and together they created &ldquo;living
                lockets,&rdquo; clear jewelry pieces filled with charms and
                memories. From a rented mall space in Arizona, Origami Owl grew
                to a $250 million company with over 600 sales professionals.
              </p>
            </RevealSection>
          </div>
        </div>
      </section>

      {/* Initiatives Section */}
      <section className="relative py-28 bg-warm-white overflow-hidden">
        <div className="relative max-w-7xl mx-auto px-6">
          <RevealSection>
            <div className="text-center mb-16">
              <p className="text-rose-gold font-medium tracking-[0.2em] uppercase text-xs mb-4">
                Philanthropy & Advocacy
              </p>
              <h2 className="text-3xl md:text-5xl font-heading font-bold text-deep-plum mb-4">
                Making a Difference
              </h2>
              <div className="w-16 h-[2px] bg-gradient-to-r from-rose-gold to-gold mx-auto mt-6" />
            </div>
          </RevealSection>

          <div className="grid md:grid-cols-3 gap-6">
            <RevealSection delay={0} className="md:col-span-2">
              <div className="bg-deep-plum rounded-3xl p-10 text-white relative overflow-hidden group h-full">
                <BlobShape className="absolute -right-20 -bottom-20 w-60 h-60 text-plum-400/10 transition-transform duration-700 group-hover:scale-110" />
                <div className="relative z-10">
                  <div className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center mb-6">
                    <Heart size={28} className="text-gold" />
                  </div>
                  <h3 className="text-2xl font-heading font-bold mb-4">
                    {initiatives[0].title}
                  </h3>
                  <p className="text-white/60 leading-[1.8] max-w-lg">
                    {initiatives[0].description}
                  </p>
                </div>
              </div>
            </RevealSection>

            <RevealSection delay={100}>
              <div className="bg-white rounded-3xl p-8 border border-soft-pink/15 group hover:shadow-lg transition-all duration-300 h-full">
                <div className="w-12 h-12 bg-warm-white rounded-2xl flex items-center justify-center mb-5">
                  <Users size={24} className="text-deep-plum" />
                </div>
                <h3 className="text-xl font-heading font-bold text-deep-plum mb-3">
                  {initiatives[1].title}
                </h3>
                <p className="text-warm-gray text-sm leading-[1.8]">
                  {initiatives[1].description}
                </p>
              </div>
            </RevealSection>

            <RevealSection delay={150}>
              <div className="bg-white rounded-3xl p-8 border border-soft-pink/15 group hover:shadow-lg transition-all h-full">
                <div className="w-12 h-12 bg-warm-white rounded-2xl flex items-center justify-center mb-5">
                  <Sparkles size={24} className="text-deep-plum" />
                </div>
                <h3 className="text-xl font-heading font-bold text-deep-plum mb-3">
                  {initiatives[2].title}
                </h3>
                <p className="text-warm-gray text-sm leading-[1.8]">
                  {initiatives[2].description}
                </p>
              </div>
            </RevealSection>

            <RevealSection delay={200} className="md:col-span-2">
              <div className="bg-white rounded-3xl p-10 border border-soft-pink/15 h-full">
                <div className="flex items-start gap-6">
                  <div className="w-14 h-14 bg-warm-white rounded-2xl flex items-center justify-center flex-shrink-0">
                    <Award size={28} className="text-deep-plum" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-heading font-bold text-deep-plum mb-3">
                      {initiatives[3].title}
                    </h3>
                    <p className="text-warm-gray leading-[1.8]">
                      {initiatives[3].description}
                    </p>
                  </div>
                </div>
              </div>
            </RevealSection>
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section className="relative py-28 bg-white overflow-hidden">
        <div className="relative max-w-7xl mx-auto px-6">
          <RevealSection>
            <div className="text-center mb-16">
              <p className="text-rose-gold font-medium tracking-[0.2em] uppercase text-xs mb-4">
                Featured Content
              </p>
              <h2 className="text-3xl md:text-5xl font-heading font-bold text-deep-plum">
                Watch and Be Inspired
              </h2>
            </div>
          </RevealSection>

          <div className="grid md:grid-cols-[1.3fr_0.7fr] gap-8 items-start">
            <RevealSection direction="left">
              <div className="group">
                <div className="aspect-video rounded-2xl overflow-hidden shadow-xl shadow-black/5 ring-1 ring-black/5 group-hover:shadow-2xl transition-shadow duration-500">
                  <iframe
                    src="https://www.youtube.com/embed/FVs1Jk9Kcmg?controls=0&rel=0&modestbranding=1"
                    title="I Am Bullyproof Campaign"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="w-full h-full"
                  />
                </div>
                <h3 className="mt-6 font-heading font-bold text-deep-plum text-xl">
                  I Am Bullyproof Campaign
                </h3>
                <p className="text-warm-gray text-sm mt-2">
                  Watch the powerful anti-bullying awareness series created by
                  Origami Owl.
                </p>
              </div>
            </RevealSection>

            <RevealSection direction="right" delay={150}>
              <div className="group md:mt-12">
                <div className="aspect-video rounded-2xl overflow-hidden shadow-xl shadow-black/5 ring-1 ring-black/5 group-hover:shadow-2xl transition-shadow duration-500">
                  <iframe
                    src="https://www.youtube.com/embed/zLuV6cFMl9o?controls=0&rel=0&modestbranding=1"
                    title="Origami Owl + Childhelp Partnership"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="w-full h-full"
                  />
                </div>
                <h3 className="mt-6 font-heading font-bold text-deep-plum text-lg">
                  Origami Owl + Childhelp
                </h3>
                <p className="text-warm-gray text-sm mt-2">
                  Partnering to save children&apos;s lives through awareness and
                  action.
                </p>
              </div>
            </RevealSection>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-28 overflow-hidden">
        <div className="absolute inset-0 bg-deep-plum" />
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-plum-400/10 rounded-full blur-[100px]" />
        <SparkleDecor className="absolute top-16 left-[15%] w-3 h-3 text-gold/20" />

        <div className="relative max-w-4xl mx-auto px-6 text-center">
          <RevealSection>
            <h2 className="text-4xl md:text-6xl font-heading font-bold text-white mb-6 leading-tight">
              Ready to Connect?
            </h2>
            <p className="text-white/60 mb-10 max-w-xl mx-auto text-lg leading-[1.8]">
              Whether you are interested in collaboration, speaking engagements,
              or learning more about Chrissy&apos;s work, reach out today.
            </p>
            <Link
              href="/contact"
              className="shimmer-hover bg-white text-deep-plum px-10 py-4 rounded-full font-semibold hover:bg-gold transition-colors inline-flex items-center gap-3 shadow-lg shadow-black/20 text-lg"
            >
              Contact Chrissy <ArrowRight size={18} />
            </Link>
          </RevealSection>
        </div>
      </section>
    </>
  );
}
