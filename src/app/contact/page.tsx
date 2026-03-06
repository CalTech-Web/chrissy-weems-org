"use client";

import { useState, type FormEvent } from "react";
import Image from "next/image";
import { Send, CheckCircle, Mic, Handshake, Sparkles } from "lucide-react";
import { BlobShape, SparkleDecor } from "@/components/DecorativeShapes";
import RevealSection from "@/components/RevealSection";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <>
      {/* Hero */}
      <section className="relative bg-gradient-to-br from-cream via-warm-white to-rose-100 py-24 overflow-hidden">
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-soft-pink/20 rounded-full blur-[100px]" />
        <SparkleDecor className="absolute top-20 right-[20%] w-4 h-4 text-gold/30 animate-sparkle" />

        <div className="relative max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-[1.2fr_0.8fr] gap-12 items-center">
            <RevealSection>
              <p className="text-rose-gold font-medium mb-4 tracking-[0.2em] uppercase text-xs">
                Contact
              </p>
              <h1 className="text-5xl md:text-7xl font-heading font-bold text-deep-plum leading-[1.1] mb-6">
                Get in <span className="text-gradient">Touch</span>
              </h1>
              <p className="text-lg md:text-xl text-warm-gray/80 leading-[1.8] max-w-2xl">
                Interested in speaking engagements, collaborations, or simply
                want to connect? Send a message below.
              </p>
            </RevealSection>
            <RevealSection direction="right" delay={200} className="hidden md:block">
              <div className="rounded-3xl overflow-hidden shadow-xl shadow-black/5">
                <Image
                  src="/chrissy-weems-small.jpg"
                  alt="Chrissy Weems"
                  width={500}
                  height={500}
                  className="w-full h-auto object-cover"
                />
              </div>
            </RevealSection>
          </div>
        </div>
      </section>

      {/* Form Section */}
      <section className="relative py-28 bg-white overflow-hidden">
        <BlobShape className="absolute -left-32 bottom-10 w-[400px] h-[400px] text-rose-100/40" />

        <div className="relative max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-[0.4fr_0.6fr] gap-16">
            {/* Left: Info cards */}
            <RevealSection direction="left">
              <div className="space-y-6">
                <div className="glass rounded-2xl p-7 border-l-4 border-l-gold">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-8 h-8 bg-gold/10 rounded-lg flex items-center justify-center">
                      <Mic size={16} className="text-gold" />
                    </div>
                    <h3 className="font-semibold text-deep-plum">
                      Speaking Engagements
                    </h3>
                  </div>
                  <p className="text-warm-gray text-sm leading-[1.7]">
                    Chrissy is available for conferences, panels, and events on
                    entrepreneurship, youth empowerment, and philanthropy.
                  </p>
                </div>

                <div className="glass rounded-2xl p-7 border-l-4 border-l-rose-gold">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-8 h-8 bg-rose-gold/10 rounded-lg flex items-center justify-center">
                      <Handshake size={16} className="text-rose-gold" />
                    </div>
                    <h3 className="font-semibold text-deep-plum">
                      Collaborations
                    </h3>
                  </div>
                  <p className="text-warm-gray text-sm leading-[1.7]">
                    Open to partnerships with organizations aligned with youth
                    advocacy, anti-bullying, and women&apos;s empowerment.
                  </p>
                </div>

                <div className="glass rounded-2xl p-7 border-l-4 border-l-deep-plum">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-8 h-8 bg-deep-plum/10 rounded-lg flex items-center justify-center">
                      <Sparkles size={16} className="text-deep-plum" />
                    </div>
                    <h3 className="font-semibold text-deep-plum">
                      General Inquiries
                    </h3>
                  </div>
                  <p className="text-warm-gray text-sm leading-[1.7]">
                    Have a question or just want to say hello? Chrissy loves
                    hearing from people making a difference.
                  </p>
                </div>

                <blockquote className="mt-8 pl-4 border-l-2 border-gold/40">
                  <p className="text-deep-plum/50 italic font-heading text-lg leading-relaxed">
                    &ldquo;Pay it forward. Success in business should be passed
                    on to deserving organizations and the people around
                    you.&rdquo;
                  </p>
                </blockquote>
              </div>
            </RevealSection>

            {/* Right: Form */}
            <RevealSection direction="right">
              <div className="bg-white rounded-3xl p-8 md:p-10 shadow-xl shadow-rose-gold/5 ring-1 ring-rose-gold/10">
                {submitted ? (
                  <div className="text-center py-16">
                    <div className="w-16 h-16 bg-rose-gold/10 rounded-full flex items-center justify-center mx-auto mb-6">
                      <CheckCircle size={32} className="text-rose-gold" />
                    </div>
                    <h2 className="text-2xl font-heading font-bold text-deep-plum mb-4">
                      Message Sent!
                    </h2>
                    <p className="text-warm-gray leading-[1.7]">
                      Thank you for reaching out. Chrissy will get back to you
                      soon.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-sm font-medium text-deep-plum mb-2"
                      >
                        Your Name <span className="text-rose-gold">*</span>
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        className="w-full border border-soft-pink/30 rounded-xl px-4 py-3.5 text-sm bg-warm-white/50 focus:outline-none focus:ring-2 focus:ring-rose-gold/30 focus:border-rose-gold focus:bg-white focus:shadow-lg focus:shadow-rose-gold/5 transition-all"
                        placeholder="Jane Smith"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium text-deep-plum mb-2"
                      >
                        Your Email <span className="text-rose-gold">*</span>
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        className="w-full border border-soft-pink/30 rounded-xl px-4 py-3.5 text-sm bg-warm-white/50 focus:outline-none focus:ring-2 focus:ring-rose-gold/30 focus:border-rose-gold focus:bg-white focus:shadow-lg focus:shadow-rose-gold/5 transition-all"
                        placeholder="jane@example.com"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="subject"
                        className="block text-sm font-medium text-deep-plum mb-2"
                      >
                        Subject
                      </label>
                      <input
                        type="text"
                        id="subject"
                        name="subject"
                        className="w-full border border-soft-pink/30 rounded-xl px-4 py-3.5 text-sm bg-warm-white/50 focus:outline-none focus:ring-2 focus:ring-rose-gold/30 focus:border-rose-gold focus:bg-white focus:shadow-lg focus:shadow-rose-gold/5 transition-all"
                        placeholder="Speaking engagement, collaboration, etc."
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="message"
                        className="block text-sm font-medium text-deep-plum mb-2"
                      >
                        Your Message <span className="text-rose-gold">*</span>
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        required
                        rows={6}
                        className="w-full border border-soft-pink/30 rounded-xl px-4 py-3.5 text-sm bg-warm-white/50 focus:outline-none focus:ring-2 focus:ring-rose-gold/30 focus:border-rose-gold focus:bg-white focus:shadow-lg focus:shadow-rose-gold/5 transition-all resize-vertical"
                        placeholder="Tell Chrissy what you have in mind..."
                      />
                    </div>

                    <button
                      type="submit"
                      className="shimmer-hover bg-gradient-to-r from-rose-gold to-rose-900 text-white px-8 py-4 rounded-full font-medium inline-flex items-center gap-2 w-full sm:w-auto justify-center shadow-lg shadow-rose-gold/25 hover:shadow-xl hover:shadow-rose-gold/30 transition-shadow"
                    >
                      Send Message <Send size={16} />
                    </button>
                  </form>
                )}
              </div>
            </RevealSection>
          </div>
        </div>
      </section>
    </>
  );
}
