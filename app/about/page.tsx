import type { Metadata } from "next";
import Image from "next/image";
import { Phone } from "lucide-react";
import PageHero from "@/components/ui/PageHero";
import SectionHeading from "@/components/ui/SectionHeading";
import CTASection from "@/components/sections/CTASection";
import Stats from "@/components/sections/Stats";
import { team } from "@/data/company";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn about Cohen Global Properties — a New York City real estate development company with over 20 years of experience in acquisition, rehabilitation, and new construction across the five boroughs.",
  alternates: {
    canonical: "https://cohen-global.com/about",
  },
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About Cohen Global"
        title="Experience. Execution. New York."
        subtitle="More than two decades of real estate development across New York City's five boroughs."
        image="https://images.unsplash.com/photo-1444723121867-7a241cacace9?w=1800&q=80"
        imageAlt="New York City skyline and residential architecture"
        size="lg"
      />

      {/* Who We Are */}
      <section className="bg-stone-50 py-24 lg:py-32">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
            <div>
              <SectionHeading
                eyebrow="Who We Are"
                title="A New York real estate company built on execution."
              />
            </div>
            <div className="space-y-5 text-stone-600 leading-relaxed">
              <p>
                Cohen Global Properties Inc. was incorporated in the State of
                New York in 2005. For over two decades, the company has operated
                as an active buyer, developer, and seller of residential real
                estate across New York City — with projects spanning Brooklyn,
                Queens, the Bronx, Manhattan, and Staten Island.
              </p>
              <p>
                The company acquires underperforming and development-ready
                properties, applies disciplined rehabilitation or new
                construction, and delivers finished homes to market — typically
                targeting first-time buyers, working families, and stable-income
                earners in improving neighborhoods.
              </p>
              <p>
                Cohen Global operates through a portfolio of commonly owned
                entities, each structured around specific development sites. This
                structure gives the company flexibility to move quickly on
                opportunities while maintaining clean project accounting and
                clear ownership at every level.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Stats />

      {/* Our Approach */}
      <section className="bg-stone-50 py-24 lg:py-32">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            <div className="relative aspect-[4/3] overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1582407947304-fd86f028f716?w=1200&q=80"
                alt="Brooklyn residential buildings"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            <div>
              <SectionHeading
                eyebrow="Our Approach"
                title="We find, fix, and deliver — with discipline."
              />
              <div className="mt-8 space-y-5 text-stone-600 leading-relaxed">
                <p>
                  Every Cohen Global project starts with a clear thesis:
                  identify a property or site with upside, structure the
                  acquisition correctly, and execute the development on schedule
                  and on budget.
                </p>
                <p>
                  Rehabilitation projects move from acquisition to resale on an
                  average of 60 to 120 days. New construction typically runs 60
                  to 180 days from permit receipt — a pace built on experienced
                  contractor relationships and a process refined across dozens of
                  completed projects.
                </p>
                <p>
                  The company focuses on producing quality housing accessible to
                  buyers who can qualify for mortgages with modest down payments.
                  This is not a luxury market play — it&apos;s a fundamentals-driven
                  approach to a segment of New York real estate experiencing
                  sustained demand.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* History */}
      <section className="bg-stone-100 py-24 lg:py-32">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="max-w-3xl mx-auto">
            <SectionHeading
              eyebrow="Our History"
              title="A company built from the ground up."
              align="center"
            />
            <div className="mt-12 space-y-8">
              {[
                {
                  period: "The Beginning",
                  text: "Yona Cohen entered real estate through brokerage — learning the market, developing relationships, and observing patterns in how developers identified and executed on opportunity. She brought that market understanding to early investments while Shlomi Cohen, still based in Israel at the time, provided capital for targeted projects.",
                },
                {
                  period: "Building the Company",
                  text: "With repeated early success, Shlomi relocated permanently to New York and the Cohens formally established the company. They started with small-scale renovation projects — buying distressed properties, improving them, and selling to qualified buyers. Each deal refined their process.",
                },
                {
                  period: "Scaling the Portfolio",
                  text: "Over the years that followed, the company grew from individual project-by-project work into a multi-entity operation with concurrent developments across the boroughs. Cohen Global formalized its corporate structure through dedicated LLCs for each project site, improving financial clarity and operational focus.",
                },
                {
                  period: "Today",
                  text: "Cohen Global Properties Inc. has been involved in the acquisition and development of over $150 million in New York City real estate. The company continues to operate actively across all five boroughs, seeking new acquisitions, completing development projects, and bringing properties to market.",
                },
              ].map((item) => (
                <div
                  key={item.period}
                  className="grid sm:grid-cols-[160px_1fr] gap-4 sm:gap-12 items-start border-b border-stone-200 pb-8 last:border-0 last:pb-0"
                >
                  <p className="text-xs tracking-[0.15em] uppercase text-stone-500 pt-1">
                    {item.period}
                  </p>
                  <p className="text-stone-600 leading-relaxed">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="bg-stone-50 py-24 lg:py-32">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <SectionHeading
            eyebrow="Leadership"
            title="The team behind Cohen Global."
            className="mb-16"
          />
          <div className="grid md:grid-cols-2 gap-12 lg:gap-16">
            {team.map((member) => (
              <div
                key={member.name}
                className="border-t border-stone-200 pt-10"
              >
                <p className="text-[10px] tracking-[0.2em] uppercase text-stone-400 mb-2">
                  {member.title}
                </p>
                <h3
                  className="text-3xl text-stone-900 font-light mb-6 leading-tight"
                  style={{
                    fontFamily: "var(--font-cormorant), Georgia, serif",
                  }}
                >
                  {member.name}
                </h3>
                <p className="text-stone-600 leading-relaxed mb-6">
                  {member.bio}
                </p>
                <a
                  href={member.phoneHref}
                  className="inline-flex items-center gap-2 text-sm text-stone-700 hover:text-stone-950 transition-colors"
                >
                  <Phone size={14} />
                  {member.phone}
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="Ready to discuss a property?"
        subtitle="Whether you have a specific site in mind or want to understand how Cohen Global works, reach out and let's talk."
        primaryLabel="Contact Us"
        primaryHref="/contact"
        secondaryLabel="Submit a Property"
        secondaryHref="/acquisitions"
        variant="dark"
      />
    </>
  );
}
