import Link from "next/link";
import { ArrowRight, Heart, Users, Sparkles, Award } from "lucide-react";

const initiatives = [
  {
    icon: Heart,
    title: "Force for Good",
    description:
      "Origami Owl's philanthropic venture has donated over $1.15 million to charitable causes, supporting children's welfare, academic opportunities, and women's empowerment.",
  },
  {
    icon: Users,
    title: "Owlette Program",
    description:
      "A youth entrepreneurship program for ages 11 to 17, helping young people sharpen leadership skills and build confidence alongside their parents.",
  },
  {
    icon: Sparkles,
    title: "I Am Bullyproof",
    description:
      "An anti-bullying campaign raising awareness and providing resources to help children and families stand against childhood bullying.",
  },
  {
    icon: Award,
    title: "Childhelp Partnership",
    description:
      "Origami Owl partners with Childhelp to save children's lives through awareness campaigns and special collections that benefit child welfare.",
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
      <section className="relative bg-warm-white overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-soft-pink/20 via-transparent to-rose-gold/10" />
        <div className="relative max-w-6xl mx-auto px-6 py-24 md:py-32">
          <div className="max-w-3xl">
            <p className="text-rose-gold font-medium mb-4 tracking-wide uppercase text-sm">
              Entrepreneur. Philanthropist. Advocate.
            </p>
            <h1 className="text-4xl md:text-6xl font-heading font-bold text-deep-plum leading-tight mb-6">
              Inspiring Change,{" "}
              <span className="text-rose-gold">One Life at a Time</span>
            </h1>
            <p className="text-lg text-warm-gray leading-relaxed mb-8 max-w-2xl">
              Chrissy Weems is the CEO and Co-Founder of Origami Owl, a company
              she built from a $350 investment into a $250 million enterprise.
              Her mission goes beyond business, championing youth empowerment,
              philanthropy, and anti-bullying advocacy.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/about"
                className="bg-rose-gold text-white px-8 py-3 rounded-full font-medium hover:bg-deep-plum transition-colors inline-flex items-center justify-center gap-2"
              >
                Learn More <ArrowRight size={16} />
              </Link>
              <Link
                href="/contact"
                className="border-2 border-deep-plum text-deep-plum px-8 py-3 rounded-full font-medium hover:bg-deep-plum hover:text-white transition-colors inline-flex items-center justify-center"
              >
                Get in Touch
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-deep-plum py-16">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <p className="text-3xl md:text-4xl font-heading font-bold text-gold mb-2">
                  {stat.value}
                </p>
                <p className="text-white/70 text-sm">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-deep-plum mb-6">
              A Story of Purpose and Perseverance
            </h2>
            <p className="text-warm-gray leading-relaxed">
              What started as a way to help her 14-year-old daughter Bella earn
              money for a car became one of the most successful direct sales
              companies in the country. Chrissy matched Bella&apos;s $350 in
              babysitting savings, and together they created &ldquo;living lockets,&rdquo;
              clear jewelry pieces filled with charms and memories. From a rented
              mall space in Arizona, Origami Owl grew to a $250 million company
              with over 600 sales professionals.
            </p>
          </div>

          <div className="bg-warm-white rounded-2xl p-8 md:p-12 border border-soft-pink/30">
            <blockquote className="text-center">
              <p className="text-xl md:text-2xl font-heading text-deep-plum italic leading-relaxed">
                &ldquo;Pay it forward. Success in business should be passed on
                to deserving organizations and the people around you.&rdquo;
              </p>
              <cite className="block mt-6 text-rose-gold font-medium not-italic">
                Chrissy Weems
              </cite>
            </blockquote>
          </div>
        </div>
      </section>

      {/* Initiatives Section */}
      <section className="py-20 bg-warm-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-deep-plum mb-4">
              Making a Difference
            </h2>
            <p className="text-warm-gray max-w-2xl mx-auto">
              Through Origami Owl and personal advocacy, Chrissy champions
              causes close to her heart.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {initiatives.map((item) => (
              <div
                key={item.title}
                className="bg-white rounded-2xl p-8 border border-soft-pink/20 hover:shadow-lg transition-shadow"
              >
                <div className="w-12 h-12 bg-rose-gold/10 rounded-xl flex items-center justify-center mb-4">
                  <item.icon size={24} className="text-rose-gold" />
                </div>
                <h3 className="text-xl font-heading font-bold text-deep-plum mb-3">
                  {item.title}
                </h3>
                <p className="text-warm-gray text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-deep-plum mb-4">
              Watch and Be Inspired
            </h2>
            <p className="text-warm-gray max-w-2xl mx-auto">
              Learn more about Chrissy&apos;s journey, advocacy work, and the
              Origami Owl story.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <div className="aspect-video rounded-2xl overflow-hidden shadow-lg">
                <iframe
                  src="https://www.youtube.com/embed/videoseries?list=PLMGMTw5RSTe1g-jjDKnW0TXrbnr_dMBJv"
                  title="I Am Bullyproof Campaign"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full"
                />
              </div>
              <h3 className="mt-4 font-heading font-bold text-deep-plum text-lg">
                I Am Bullyproof Campaign
              </h3>
            </div>
            <div>
              <div className="aspect-video rounded-2xl overflow-hidden shadow-lg">
                <iframe
                  src="https://www.youtube.com/embed/videoseries?list=PLMGMTw5RSTe0gtt4mRvqxXJjfwJOkf9f7"
                  title="Origami Owl + Childhelp Partnership"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full"
                />
              </div>
              <h3 className="mt-4 font-heading font-bold text-deep-plum text-lg">
                Origami Owl + Childhelp: Partnering to Save Lives
              </h3>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-deep-plum to-rose-gold">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-6">
            Ready to Connect?
          </h2>
          <p className="text-white/80 mb-8 max-w-2xl mx-auto">
            Whether you are interested in collaboration, speaking engagements,
            or learning more about Chrissy&apos;s work, reach out today.
          </p>
          <Link
            href="/contact"
            className="bg-white text-deep-plum px-8 py-3 rounded-full font-semibold hover:bg-gold hover:text-deep-plum transition-colors inline-flex items-center gap-2"
          >
            Contact Chrissy <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </>
  );
}
