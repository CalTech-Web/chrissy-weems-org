import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | Chrissy Weems",
  description: "Privacy policy for chrissyweems.org.",
};

export default function PrivacyPolicyPage() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-3xl mx-auto px-6">
        <h1 className="text-4xl font-heading font-bold text-deep-plum mb-8">
          Privacy Policy
        </h1>

        <div className="prose prose-sm text-warm-gray space-y-6">
          <p>
            <strong>Last updated:</strong> March 5, 2026
          </p>

          <h2 className="text-xl font-heading font-bold text-deep-plum mt-8">
            Information We Collect
          </h2>
          <p>
            When you use the contact form on this website, we collect the
            information you provide, including your name, email address, and
            message content. This information is used solely to respond to your
            inquiry.
          </p>

          <h2 className="text-xl font-heading font-bold text-deep-plum mt-8">
            How We Use Your Information
          </h2>
          <p>
            We use the information you provide to respond to your messages and
            inquiries. We do not sell, trade, or share your personal information
            with third parties.
          </p>

          <h2 className="text-xl font-heading font-bold text-deep-plum mt-8">
            Cookies
          </h2>
          <p>
            This website may use cookies to enhance your browsing experience.
            Cookies are small files stored on your device that help us
            understand how you interact with the site. You can disable cookies
            in your browser settings at any time.
          </p>

          <h2 className="text-xl font-heading font-bold text-deep-plum mt-8">
            Third-Party Services
          </h2>
          <p>
            This website may contain embedded content from third-party services
            such as YouTube. These services may collect data about you. Please
            refer to their respective privacy policies for more information.
          </p>

          <h2 className="text-xl font-heading font-bold text-deep-plum mt-8">
            Contact
          </h2>
          <p>
            If you have questions about this privacy policy, please reach out
            through the contact page on this website.
          </p>
        </div>
      </div>
    </section>
  );
}
