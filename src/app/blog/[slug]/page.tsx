import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Calendar, Tag, ArrowLeft } from "lucide-react";
import { SparkleDecor } from "@/components/DecorativeShapes";
import RevealSection from "@/components/RevealSection";

const posts: Record<
  string,
  {
    title: string;
    category: string;
    date: string;
    image: string;
    content: string[];
  }
> = {
  "tedx-talk-origami-owl-chrissy-weems": {
    title: "TEDx Talk Features Origami Owl Co-Founder Chrissy Weems",
    category: "Entrepreneurship",
    date: "May 31, 2019",
    image: "/blog-tedx.png",
    content: [
      "Chrissy Weems took the TEDx stage to share the inspiring story of Origami Owl, the company she co-founded with her then 14-year-old daughter Bella. Her talk captured the audience with a powerful message about believing in young entrepreneurs and the transformative power of a simple idea.",
      "It all started with $350. Bella had saved money from babysitting and wanted to buy a car. Instead of simply giving her the money, Chrissy matched her daughter's savings and encouraged her to invest it in a business idea. Together, they created living lockets, clear jewelry pieces that could be filled with tiny charms telling a personal story.",
      "What began at a small rented kiosk in an Arizona mall quickly became a nationwide phenomenon. Within three years, Origami Owl grew to a company valued at over $250 million, with hundreds of independent sales professionals (called Designers) sharing the lockets across the country.",
      "In her TEDx talk, Chrissy emphasized the importance of nurturing entrepreneurial spirit in young people. She spoke about how the Owlette Program, designed for ages 11 to 17, gives young entrepreneurs a platform to develop leadership skills, build confidence, and learn the fundamentals of running a business, all while working alongside a parent.",
      "Chrissy's message resonated far beyond the TEDx stage. She challenged the audience to think about how they could support the next generation of entrepreneurs, whether through mentorship, investment, or simply believing in a young person's dream. Her story is a testament to what happens when a parent says yes to a child's ambition.",
    ],
  },
  "owlette-spreads-sunshine-pediatric-cancer": {
    title: "Owlette Spreads Sunshine To Pediatric Cancer Patients",
    category: "Community",
    date: "September 4, 2018",
    image: "/blog-community.png",
    content: [
      "One of the most heartwarming stories to come out of the Origami Owl community is that of a young Owlette who used her entrepreneurial platform to bring joy to pediatric cancer patients. This story perfectly embodies the Live Sparkly philosophy that Chrissy Weems and the Origami Owl family champion.",
      "The young entrepreneur, part of the Owlette Program for ages 11 to 17, decided that her business wasn't just about selling jewelry. She wanted to make a real difference in her community. After learning about children fighting cancer at a local hospital, she was moved to action.",
      "She organized a campaign to create special lockets for pediatric cancer patients, each one filled with charms representing hope, strength, and sunshine. The lockets were delivered personally to children undergoing treatment, bringing smiles and a sense of connection during their most challenging days.",
      "This initiative is a shining example of what the Force for Good program at Origami Owl is all about. The company has donated over $1.15 million to charitable causes across Arizona, supporting children, education, and communities in need. But it is the individual stories like this one that truly show the ripple effect of building a business with purpose.",
      "Chrissy Weems often says that the best part of Origami Owl isn't the jewelry or the business success. It is the stories of people using their platform to lift others up. This young Owlette proved that age is no barrier to making a meaningful impact.",
    ],
  },
  "origami-owl-stand-against-childhood-bullying": {
    title: "Origami Owl Takes A Stand Against Childhood Bullying",
    category: "Advocacy",
    date: "August 23, 2018",
    image: "/blog-bullyproof.jpg",
    content: [
      "In August 2018, Origami Owl launched the I Am Bullyproof campaign, a bold initiative to fight childhood bullying and empower young people to stand up for themselves and others. The campaign represented one of the most significant advocacy efforts in the company's history.",
      "The I Am Bullyproof campaign was born from a deeply personal place. Chrissy Weems and the Origami Owl team heard countless stories from Designers and customers about children affected by bullying. Rather than stand by, they decided to use their platform and reach to make a difference.",
      "The campaign featured specially designed Bullyproof lockets and charms, with proceeds supporting anti-bullying organizations. But the initiative went far beyond product sales. Origami Owl partnered with established anti-bullying organizations to provide resources, education, and support to families and schools.",
      "Designers across the country organized local events, school presentations, and community gatherings to spread the Bullyproof message. The campaign encouraged young people to share their stories, support one another, and stand firm in their identity. The message was clear: you are enough, and you are not alone.",
      "The I Am Bullyproof campaign highlighted what makes Origami Owl different from other direct sales companies. Under Chrissy's leadership, the company has consistently used its influence to address real social issues. From the Force for Good charitable initiative to youth empowerment through the Owlette Program, Origami Owl continues to prove that business and advocacy can go hand in hand.",
    ],
  },
  "entrepreneurs-help-reverse-lonely-trend": {
    title: "How Entrepreneurs Can Help Reverse The Lonely Trend",
    category: "Entrepreneurship",
    date: "July 3, 2018",
    image: "/chrissy-weems-small.jpg",
    content: [
      "In an era of increasing digital connectivity, a paradox has emerged: people feel lonelier than ever. Chrissy Weems explored this growing trend and made a compelling case for how entrepreneurship and community building can combat feelings of isolation.",
      "Studies have shown that loneliness has reached epidemic proportions, affecting people of all ages and backgrounds. Despite being more connected through technology, many people lack meaningful, face-to-face relationships. Chrissy argues that this is exactly where entrepreneurship, particularly the direct sales model, can make a difference.",
      "At its core, Origami Owl was built on connection. Designers don't just sell jewelry; they create experiences. Jewelry bars bring people together in homes, sharing stories and creating personalized lockets that celebrate life's moments. These gatherings foster genuine human connection in a way that online interactions simply cannot replicate.",
      "Chrissy highlighted how the Origami Owl community serves as a support network for its members. Designers build friendships, mentor one another, and celebrate each other's successes. For many, joining the Origami Owl family provided a sense of belonging they had been missing.",
      "The message extends beyond Origami Owl. Chrissy encouraged entrepreneurs everywhere to think about how their businesses can foster community. Whether through events, mentorship programs, or simply creating spaces for people to connect, entrepreneurs have a unique opportunity to combat loneliness while building successful ventures. In Chrissy's words, the best businesses are those that bring people together.",
    ],
  },
};

const categoryColors: Record<string, string> = {
  Entrepreneurship: "bg-gold/10 text-gold",
  Community: "bg-rose-gold/10 text-rose-gold",
  Advocacy: "bg-deep-plum/10 text-deep-plum",
};

export async function generateStaticParams() {
  return Object.keys(posts).map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = posts[slug];
  if (!post) return { title: "Post Not Found" };
  return {
    title: `${post.title} | Chrissy Weems`,
    description: post.content[0].slice(0, 160),
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = posts[slug];
  if (!post) notFound();

  const badgeClass = categoryColors[post.category] || "";

  return (
    <>
      {/* Hero */}
      <section className="relative bg-gradient-to-br from-deep-plum to-plum-800 py-20 overflow-hidden">
        <SparkleDecor className="absolute top-16 right-[20%] w-4 h-4 text-gold/30 animate-sparkle" />
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-rose-gold/10 rounded-full blur-[120px]" />

        <div className="relative max-w-4xl mx-auto px-6">
          <RevealSection>
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-white/60 hover:text-gold transition-colors text-sm mb-8"
            >
              <ArrowLeft size={14} />
              Back to Blog
            </Link>
            <div className="flex flex-wrap items-center gap-4 mb-6">
              <span
                className={`${badgeClass} px-3 py-1 rounded-full text-xs font-medium inline-flex items-center gap-1.5`}
              >
                <Tag size={10} />
                {post.category}
              </span>
              <span className="text-white/50 text-xs inline-flex items-center gap-1.5">
                <Calendar size={10} />
                {post.date}
              </span>
            </div>
            <h1 className="text-3xl md:text-5xl font-heading font-bold text-white leading-tight">
              {post.title}
            </h1>
          </RevealSection>
        </div>
      </section>

      {/* Featured Image */}
      <section className="relative -mt-1 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <RevealSection direction="scale">
            <div className="relative -mt-8 rounded-2xl overflow-hidden shadow-xl shadow-black/10">
              <Image
                src={post.image}
                alt={post.title}
                width={900}
                height={500}
                className="w-full h-auto object-cover"
              />
            </div>
          </RevealSection>
        </div>
      </section>

      {/* Content */}
      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-6">
          <RevealSection>
            <div className="space-y-6 text-warm-gray leading-[1.9] text-lg">
              {post.content.map((paragraph, i) => (
                <p key={i}>{paragraph}</p>
              ))}
            </div>
          </RevealSection>

          <RevealSection delay={100}>
            <div className="mt-16 pt-8 border-t border-soft-pink/20">
              <Link
                href="/blog"
                className="inline-flex items-center gap-2 text-rose-gold hover:text-deep-plum transition-colors font-medium"
              >
                <ArrowLeft size={16} />
                Back to All Articles
              </Link>
            </div>
          </RevealSection>
        </div>
      </section>
    </>
  );
}
