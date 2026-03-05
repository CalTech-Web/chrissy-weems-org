"use client";

import { useState, type FormEvent } from "react";
import { Send, CheckCircle } from "lucide-react";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <>
      {/* Hero */}
      <section className="bg-warm-white py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="max-w-3xl">
            <p className="text-rose-gold font-medium mb-4 tracking-wide uppercase text-sm">
              Contact
            </p>
            <h1 className="text-4xl md:text-5xl font-heading font-bold text-deep-plum leading-tight mb-6">
              Get in Touch
            </h1>
            <p className="text-lg text-warm-gray leading-relaxed">
              Interested in speaking engagements, collaborations, or simply
              want to connect? Send a message below.
            </p>
          </div>
        </div>
      </section>

      {/* Form */}
      <section className="py-20 bg-white">
        <div className="max-w-2xl mx-auto px-6">
          {submitted ? (
            <div className="text-center py-16">
              <CheckCircle size={48} className="text-rose-gold mx-auto mb-6" />
              <h2 className="text-2xl font-heading font-bold text-deep-plum mb-4">
                Message Sent!
              </h2>
              <p className="text-warm-gray">
                Thank you for reaching out. Chrissy will get back to you soon.
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
                  className="w-full border border-soft-pink/40 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-rose-gold/40 focus:border-rose-gold transition-colors"
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
                  className="w-full border border-soft-pink/40 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-rose-gold/40 focus:border-rose-gold transition-colors"
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
                  className="w-full border border-soft-pink/40 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-rose-gold/40 focus:border-rose-gold transition-colors"
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
                  className="w-full border border-soft-pink/40 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-rose-gold/40 focus:border-rose-gold transition-colors resize-vertical"
                  placeholder="Tell Chrissy what you have in mind..."
                />
              </div>

              <button
                type="submit"
                className="bg-rose-gold text-white px-8 py-3 rounded-full font-medium hover:bg-deep-plum transition-colors inline-flex items-center gap-2 w-full sm:w-auto justify-center"
              >
                Send Message <Send size={16} />
              </button>
            </form>
          )}
        </div>
      </section>
    </>
  );
}
