import type { Metadata } from "next";
import Image from "next/image";
import PageHero from "@/components/ui/PageHero";
import SectionHeading from "@/components/ui/SectionHeading";
import CTASection from "@/components/sections/CTASection";
import { capabilities } from "@/data/company";

export const metadata: Metadata = {
  title: "What We Do",
  description:
    "Cohen Global Properties offers end-to-end real estate capabilities — acquisition, development, rehabilitation, new construction, and property sales across New York City.",
  alternates: {
    canonical: "https://cohen-global.com/what-we-do",
  },
};

const images = [
  "/images/hero/hero-2.jpg",
  "/images/projects/207-prospect-front.jpg",
  "/images/hero/hero-1.jpg",
  "/images/hero/hero-4.jpg",
  "/images/hero/hero-6.jpg",
];

export default function WhatWeDoPage() {
  return (
    <>
      <PageHero
        eyebrow="Our Capabilities"
        title="What We Do"
        subtitle="End-to-end real estate expertise — from acquisition through sale."
        image="/images/projects/207-prospect-front.jpg"
        imageAlt="Cohen Global Properties new construction residential building, Brooklyn"
        size="md"
      />

      {/* Capabilities list */}
      <section className="bg-stone-50 py-24 lg:py-32">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="max-w-xl mb-16">
            <SectionHeading
              eyebrow="Capabilities"
              title="A complete real estate capability."
              subtitle="Cohen Global handles every phase of the real estate development cycle — which means fewer handoffs, faster execution, and better outcomes."
            />
          </div>

          <div className="space-y-0">
            {capabilities.map((cap, i) => (
              <div
                key={cap.slug}
                className="grid lg:grid-cols-[80px_1fr_1fr] gap-8 lg:gap-16 items-start border-t border-stone-200 py-12 lg:py-16 group"
              >
                {/* Number */}
                <p className="text-stone-300 text-xs tracking-[0.2em] uppercase pt-1 font-light"
                   style={{ fontFamily: "var(--font-cormorant), Georgia, serif", fontSize: "1rem" }}>
                  0{i + 1}
                </p>

                {/* Title + headline */}
                <div>
                  <h3
                    className="text-3xl lg:text-4xl text-stone-900 font-light mb-3 leading-tight"
                    style={{ fontFamily: "var(--font-cormorant), Georgia, serif" }}
                  >
                    {cap.title}
                  </h3>
                  <p className="text-brass-600 italic text-sm">{cap.headline}</p>

                  {/* Image on mobile */}
                  <div className="mt-6 lg:hidden relative aspect-[4/3] overflow-hidden">
                    <Image
                      src={images[i] ?? images[0]}
                      alt={cap.title}
                      fill
                      className="object-cover"
                      sizes="100vw"
                    />
                  </div>
                </div>

                {/* Description */}
                <div>
                  {/* Image on desktop */}
                  <div className="mb-6 hidden lg:block relative aspect-[16/10] overflow-hidden">
                    <Image
                      src={images[i] ?? images[0]}
                      alt={cap.title}
                      fill
                      className="object-cover"
                      sizes="50vw"
                    />
                  </div>
                  <p className="text-stone-600 leading-relaxed">{cap.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Markets */}
      <section className="bg-stone-950 py-20 lg:py-24">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-xs tracking-[0.2em] uppercase text-stone-500 mb-4">
                Market Coverage
              </p>
              <h2
                className="text-4xl lg:text-5xl text-stone-100 font-light leading-tight"
                style={{ fontFamily: "var(--font-cormorant), Georgia, serif" }}
              >
                All five boroughs.
                <br />
                One company.
              </h2>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {["Brooklyn", "Queens", "The Bronx", "Manhattan", "Staten Island"].map(
                (borough) => (
                  <div
                    key={borough}
                    className="border border-stone-800 px-5 py-4 text-center"
                  >
                    <p className="text-stone-300 text-sm">{borough}</p>
                  </div>
                )
              )}
            </div>
          </div>
        </div>
      </section>

      <CTASection
        title="Have a property opportunity?"
        subtitle="Cohen Global actively acquires properties across all five boroughs. Reach out to our acquisitions team."
        primaryLabel="Submit a Property"
        primaryHref="/acquisitions"
        secondaryLabel="Learn About Us"
        secondaryHref="/about"
        variant="light"
      />
    </>
  );
}
