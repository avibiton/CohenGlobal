import type { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Privacy Policy for Cohen Global Properties Inc.",
  alternates: { canonical: "https://cohen-global.com/privacy" },
};

export default function PrivacyPage() {
  return (
    <>
      <PageHero eyebrow="Legal" title="Privacy Policy" size="sm" />
      <section className="bg-stone-50 py-20">
        <div className="max-w-3xl mx-auto px-6 lg:px-8">
          <div className="prose prose-stone max-w-none">
            <p className="text-stone-500 text-sm mb-8">Last updated: January 2024</p>
            <div className="space-y-8 text-stone-600 leading-relaxed">
              <div>
                <h2 className="text-xl text-stone-900 font-medium mb-3">Information We Collect</h2>
                <p>
                  Cohen Global Properties Inc. collects information you voluntarily provide
                  through our contact forms and property submission forms, including your name,
                  email address, phone number, and any property information you choose to share.
                </p>
              </div>
              <div>
                <h2 className="text-xl text-stone-900 font-medium mb-3">How We Use Your Information</h2>
                <p>
                  We use the information you provide solely to respond to your inquiry, evaluate
                  property opportunities you submit, and communicate with you about our services.
                  We do not sell, rent, or share your personal information with third parties for
                  marketing purposes.
                </p>
              </div>
              <div>
                <h2 className="text-xl text-stone-900 font-medium mb-3">Data Security</h2>
                <p>
                  We take reasonable measures to protect the information you submit through our
                  website. However, no method of transmission over the Internet is 100% secure,
                  and we cannot guarantee absolute security.
                </p>
              </div>
              <div>
                <h2 className="text-xl text-stone-900 font-medium mb-3">Contact</h2>
                <p>
                  If you have questions about this Privacy Policy, contact us at:
                  <br />
                  Cohen Global Properties Inc.
                  <br />
                  1967 Bedford Avenue, Brooklyn, NY 11225
                  <br />
                  (516) 312-1668
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
