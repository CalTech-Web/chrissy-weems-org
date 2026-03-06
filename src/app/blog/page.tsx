import type { Metadata } from "next";
import Link from "next/link";
import { Calendar, Tag, ArrowRight } from "lucide-react";
import { BlobShape, SparkleDecor } from "@/components/DecorativeShapes";
import RevealSection from "@/components/RevealSection";

export const metadata: Metadata = {
  title: "Blog | Chrissy Weems",
  description:
    "Read articles from Chrissy Weems on entrepreneurship, advocacy, and making a difference.",
};

const categoryColors: Record<string, string> = {
  Entrepreneurship: "bg-gold/10 text-gold border-t-gold",
  Community: "bg-rose-gold/10 text-rose-gold border-t-rose-gold",
  Advocacy: "bg-deep-plum/10 text-deep-plum border-t-deep-plum",
};

const posts = [
  {
    slug: "tedx-talk-origami-owl-chrissy-weems",
    title: "TEDx Talk Features Origami Owl Co-Founder Chrissy Weems",
    category: "Entrepreneurship",
    date: "May 31, 2019",
    excerpt:
      "Chrissy Weems takes the TEDx stage to share the story of Origami Owl, the power of believing in young entrepreneurs, and how a $350 investment changed everything.",
  },
  {
    slug: "owlette-spreads-sunshine-pediatric-cancer",
    title: "Owlette Spreads Sunshine To Pediatric Cancer Patients",
    category: "Community",
    date: "September 4, 2018",
    excerpt:
      "A young Owlette entrepreneur uses her platform to bring joy and comfort to pediatric cancer patients, embodying the spirit of Live Sparkly and giving back.",
  },
  {
    slug: "origami-owl-stand-against-childhood-bullying",
    title: "Origami Owl Takes A Stand Against Childhood Bullying",
    category: "Advocacy",
    date: "August 23, 2018",
    excerpt:
      "Origami Owl launches the I Am Bullyproof campaign, partnering with organizations to fight childhood bullying and empower young people to stand up for themselves.",
  },
  {
    slug: "entrepreneurs-help-reverse-lonely-trend",
    title: "How Entrepreneurs Can Help Reverse The Lonely Trend",
    category: "Entrepreneurship",
    date: "July 3, 2018",
    excerpt:
      "Chrissy explores how entrepreneurship and community building can combat growing feelings of isolation, and why connection is at the heart of great businesses.",
  },
];

export default function BlogPage() {
  const [featured, ...rest] = posts;
  const featuredColors = categoryColors[featured.category] || "";

  return (
    <>
      {/* Hero */}
      <section className="relative bg-gradient-to-br from-cream via-warm-white to-rose-100 py-24 overflow-hidden">
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-soft-pink/20 rounded-full blur-[100px]" />
        <SparkleDecor className="absolute top-20 right-[25%] w-4 h-4 text-gold/30 animate-sparkle" />

        <div className="relative max-w-7xl mx-auto px-6">
          <RevealSection>
            <p className="text-rose-gold font-medium mb-4 tracking-[0.2em] uppercase text-xs">
              Blog
            </p>
            <h1 className="text-5xl md:text-7xl font-heading font-bold text-deep-plum leading-[1.1] mb-6">
              Thoughts, Stories{" "}
              <span className="text-gradient">& Advocacy</span>
            </h1>
            <p className="text-lg md:text-xl text-warm-gray/80 leading-[1.8] max-w-2xl">
              Articles on entrepreneurship, giving back, and the causes that
              matter most.
            </p>
          </RevealSection>
        </div>
      </section>

      {/* Posts */}
      <section className="py-28 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          {/* Featured post */}
          <RevealSection direction="scale" className="mb-10">
            <article className="bg-gradient-to-br from-deep-plum to-plum-800 rounded-3xl p-10 md:p-14 text-white relative overflow-hidden group">
              <BlobShape className="absolute -right-20 -top-20 w-60 h-60 text-plum-400/20 group-hover:scale-110 transition-transform duration-700" />
              <div className="relative z-10">
                <div className="flex flex-wrap items-center gap-4 mb-6">
                  <span className="bg-gold/20 text-gold px-3 py-1 rounded-full text-xs font-medium inline-flex items-center gap-1.5">
                    <Tag size={10} />
                    {featured.category}
                  </span>
                  <span className="text-white/50 text-xs inline-flex items-center gap-1.5">
                    <Calendar size={10} />
                    {featured.date}
                  </span>
                </div>
                <h2 className="text-2xl md:text-4xl font-heading font-bold mb-4 leading-tight">
                  {featured.title}
                </h2>
                <p className="text-white/70 max-w-xl leading-[1.8] text-lg">
                  {featured.excerpt}
                </p>
                <span className="inline-flex items-center gap-2 text-gold font-medium mt-6 group-hover:gap-3 transition-all">
                  Read More <ArrowRight size={14} />
                </span>
              </div>
            </article>
          </RevealSection>

          {/* Remaining posts */}
          <div className="grid md:grid-cols-3 gap-6">
            {rest.map((post, i) => {
              const colors = categoryColors[post.category] || "";
              const badgeClass = colors.split(" ").slice(0, 2).join(" ");
              const borderClass = colors.split(" ")[2] || "";

              return (
                <RevealSection key={post.slug} delay={i * 100}>
                  <article
                    className={`glass rounded-2xl p-7 hover:shadow-xl transition-all group border-t-4 ${borderClass} h-full`}
                  >
                    <div className="flex flex-wrap items-center gap-3 mb-4">
                      <span
                        className={`${badgeClass} px-3 py-1 rounded-full text-xs font-medium inline-flex items-center gap-1.5`}
                      >
                        <Tag size={10} />
                        {post.category}
                      </span>
                      <span className="text-warm-gray text-xs inline-flex items-center gap-1.5">
                        <Calendar size={10} />
                        {post.date}
                      </span>
                    </div>
                    <h2 className="text-lg font-heading font-bold text-deep-plum mb-3 leading-tight">
                      {post.title}
                    </h2>
                    <p className="text-warm-gray text-sm leading-[1.7] mb-4">
                      {post.excerpt}
                    </p>
                    <span className="text-rose-gold text-sm font-medium inline-flex items-center gap-1.5 group-hover:gap-2.5 transition-all">
                      Read More <ArrowRight size={12} />
                    </span>
                  </article>
                </RevealSection>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-deep-plum via-plum-800 to-rose-900" />
        <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-gold/10 rounded-full blur-[100px]" />
        <SparkleDecor className="absolute bottom-16 left-[20%] w-3 h-3 text-gold/25" />

        <div className="relative max-w-4xl mx-auto px-6 text-center">
          <RevealSection>
            <h2 className="text-3xl md:text-5xl font-heading font-bold text-white mb-6">
              Have a Story to Share?
            </h2>
            <p className="text-white/70 mb-10 text-lg">
              Chrissy loves hearing from people making a difference in their
              communities.
            </p>
            <Link
              href="/contact"
              className="shimmer-hover bg-gold text-deep-plum px-10 py-4 rounded-full font-semibold hover:bg-white transition-colors shadow-lg shadow-gold/20 text-lg"
            >
              Get in Touch
            </Link>
          </RevealSection>
        </div>
      </section>
    </>
  );
}
