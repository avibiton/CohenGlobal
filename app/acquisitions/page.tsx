import type { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";
import SectionHeading from "@/components/ui/SectionHeading";
import AcquisitionForm from "@/components/forms/AcquisitionForm";
import { company } from "@/data/company";
import { Phone } from "lucide-react";

export const metadata: Metadata = {
  title: "Acquisitions — Submit a Property",
  description:
    "Cohen Global Properties actively acquires single-family homes, multifamily properties, development sites, and more across New York City. Property owners and brokers are encouraged to submit opportunities.",
  alternates: {
    canonical: "https://cohen-global.com/acquisitions",
  },
};

const audienceTypes = [
  {
    title: "Property Owners",
    description:
      "If you own a property in New York City and are considering a sale, we want to hear from you. We buy in all conditions, all boroughs.",
  },
  {
    title: "Brokers",
    description:
      "We work with brokers actively. Submit your on-market or off-market listings — we respond quickly and close reliably.",
  },
  {
    title: "Estate Representatives",
    description:
      "We're experienced in working with estates and trustees seeking to liquidate real estate efficiently.",
  },
  {
    title: "Attorneys & Advisors",
    description:
      "If you represent clients with real estate interests in New York City, we're a reliable direct buyer capable of structured transactions.",
  },
];

export default function AcquisitionsPage() {
  return (
    <>
      <PageHero
        eyebrow="Acquisitions"
        title="Have a Property or Development Opportunity?"
        subtitle="We actively acquire residential properties and development sites across New York City's five boroughs."
        image="/images/hero/hero-5.jpg"
        imageAlt="Cohen Global completed residential project — Brooklyn bedroom with neighborhood view"
        size="md"
      />

      {/* Who We Work With */}
      <section className="bg-stone-50 py-20 lg:py-28">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <SectionHeading
              eyebrow="Who We Work With"
              title="We source acquisitions from multiple channels."
              subtitle="Whether you're a property owner ready to sell, a broker with a client, or a professional representing an estate — we work directly and move efficiently."
            />
            <div className="grid sm:grid-cols-2 gap-6">
              {audienceTypes.map((type) => (
                <div
                  key={type.title}
                  className="bg-stone-100 p-6 border-t-2 border-brass-500"
                >
                  <h3 className="text-base text-stone-900 font-medium mb-2">
                    {type.title}
                  </h3>
                  <p className="text-sm text-stone-500 leading-relaxed">
                    {type.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* What We Buy */}
      <section className="bg-stone-100 py-16 lg:py-20">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-[300px_1fr] gap-12 items-center">
            <div>
              <p className="text-xs tracking-[0.2em] uppercase text-stone-500 mb-3">
                Property Types
              </p>
              <h2
                className="text-3xl text-stone-900 font-light leading-tight"
                style={{ fontFamily: "var(--font-cormorant), Georgia, serif" }}
              >
                What We Acquire
              </h2>
            </div>
            <div className="flex flex-wrap gap-3">
              {[
                "Single Family Homes",
                "Multifamily Buildings",
                "Mixed-Use Properties",
                "Development Sites",
                "Land",
                "Distressed Properties",
                "Estate Sales",
                "Off-Market Opportunities",
              ].map((type) => (
                <span
                  key={type}
                  className="px-4 py-2 border border-stone-300 text-sm text-stone-700"
                >
                  {type}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Form */}
      <section className="bg-stone-950 py-24 lg:py-32">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-[400px_1fr] gap-16 lg:gap-24">
            {/* Left */}
            <div>
              <p className="text-xs tracking-[0.2em] uppercase text-stone-500 mb-4">
                Submit an Opportunity
              </p>
              <h2
                className="text-4xl lg:text-5xl text-stone-100 font-light leading-tight mb-6"
                style={{ fontFamily: "var(--font-cormorant), Georgia, serif" }}
              >
                Tell us about
                <br />
                the property.
              </h2>
              <p className="text-stone-400 leading-relaxed text-sm mb-10">
                Complete the form and our acquisitions team will review your
                submission. We typically respond within 24–48 hours.
              </p>

              <div className="space-y-4 border-t border-stone-800 pt-8">
                <p className="text-xs tracking-[0.15em] uppercase text-stone-600">
                  Or contact us directly
                </p>
                <a
                  href={company.phone.primaryHref}
                  className="flex items-center gap-3 text-stone-300 hover:text-stone-100 transition-colors group"
                >
                  <Phone size={14} className="text-stone-500" />
                  <span className="text-sm">
                    Yona — {company.phone.primary}
                  </span>
                </a>
                <a
                  href={company.phone.secondaryHref}
                  className="flex items-center gap-3 text-stone-300 hover:text-stone-100 transition-colors group"
                >
                  <Phone size={14} className="text-stone-500" />
                  <span className="text-sm">
                    Shlomi — {company.phone.secondary}
                  </span>
                </a>
              </div>
            </div>

            {/* Form */}
            <div>
              <AcquisitionForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
