import type { Metadata } from "next";
import Link from "next/link";
import { Calendar, Tag } from "lucide-react";

export const metadata: Metadata = {
  title: "Blog | Chrissy Weems",
  description:
    "Read articles from Chrissy Weems on entrepreneurship, advocacy, and making a difference.",
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
  return (
    <>
      {/* Hero */}
      <section className="bg-warm-white py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="max-w-3xl">
            <p className="text-rose-gold font-medium mb-4 tracking-wide uppercase text-sm">
              Blog
            </p>
            <h1 className="text-4xl md:text-5xl font-heading font-bold text-deep-plum leading-tight mb-6">
              Thoughts, Stories & Advocacy
            </h1>
            <p className="text-lg text-warm-gray leading-relaxed">
              Articles on entrepreneurship, giving back, and the causes that
              matter most.
            </p>
          </div>
        </div>
      </section>

      {/* Posts */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <div className="space-y-8">
            {posts.map((post) => (
              <article
                key={post.slug}
                className="bg-warm-white rounded-2xl p-8 border border-soft-pink/20 hover:shadow-lg transition-shadow"
              >
                <div className="flex flex-wrap items-center gap-4 mb-4">
                  <span className="inline-flex items-center gap-1.5 bg-rose-gold/10 text-rose-gold px-3 py-1 rounded-full text-xs font-medium">
                    <Tag size={12} />
                    {post.category}
                  </span>
                  <span className="inline-flex items-center gap-1.5 text-warm-gray text-xs">
                    <Calendar size={12} />
                    {post.date}
                  </span>
                </div>
                <h2 className="text-xl font-heading font-bold text-deep-plum mb-3">
                  {post.title}
                </h2>
                <p className="text-warm-gray text-sm leading-relaxed mb-4">
                  {post.excerpt}
                </p>
                <span className="text-rose-gold text-sm font-medium hover:text-deep-plum transition-colors cursor-default">
                  Read More
                </span>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-deep-plum">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-2xl font-heading font-bold text-white mb-4">
            Have a Story to Share?
          </h2>
          <p className="text-white/70 mb-8">
            Chrissy loves hearing from people making a difference in their
            communities.
          </p>
          <Link
            href="/contact"
            className="bg-gold text-deep-plum px-8 py-3 rounded-full font-semibold hover:bg-white transition-colors"
          >
            Get in Touch
          </Link>
        </div>
      </section>
    </>
  );
}
