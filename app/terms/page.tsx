import type { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";

export const metadata: Metadata = {
  title: "Terms of Use",
  description: "Terms of Use for Cohen Global Properties Inc.",
  alternates: { canonical: "https://cohen-global.com/terms" },
};

export default function TermsPage() {
  return (
    <>
      <PageHero eyebrow="Legal" title="Terms of Use" size="sm" />
      <section className="bg-stone-50 py-20">
        <div className="max-w-3xl mx-auto px-6 lg:px-8">
          <p className="text-stone-500 text-sm mb-8">Last updated: January 2024</p>
          <div className="space-y-8 text-stone-600 leading-relaxed">
            <div>
              <h2 className="text-xl text-stone-900 font-medium mb-3">Use of This Website</h2>
              <p>
                This website is operated by Cohen Global Properties Inc. By accessing and using
                this site, you agree to these Terms of Use. The content on this site is for
                informational purposes only and does not constitute legal, financial, or real
                estate advice.
              </p>
            </div>
            <div>
              <h2 className="text-xl text-stone-900 font-medium mb-3">Intellectual Property</h2>
              <p>
                All content on this website — including text, photography, design, and
                graphics — is the property of Cohen Global Properties Inc. or its licensors.
                You may not reproduce or distribute content without prior written permission.
              </p>
            </div>
            <div>
              <h2 className="text-xl text-stone-900 font-medium mb-3">Limitation of Liability</h2>
              <p>
                Cohen Global Properties Inc. makes no warranties, express or implied, regarding
                the accuracy or completeness of the information on this site. We are not liable
                for any damages arising from your use of this website.
              </p>
            </div>
            <div>
              <h2 className="text-xl text-stone-900 font-medium mb-3">Contact</h2>
              <p>
                Questions about these Terms? Contact us at:
                <br />
                Cohen Global Properties Inc.
                <br />
                1967 Bedford Avenue, Brooklyn, NY 11225
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
