import type { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";
import ProjectCard from "@/components/projects/ProjectCard";
import CTASection from "@/components/sections/CTASection";
import { projects } from "@/data/projects";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Browse Cohen Global Properties' completed residential development projects across Brooklyn, Queens, the Bronx, and New York City's five boroughs.",
  alternates: {
    canonical: "https://cohen-global.com/projects",
  },
};

export default function ProjectsPage() {
  return (
    <>
      <PageHero
        eyebrow="Our Work"
        title="Projects & Portfolio"
        subtitle="Completed developments across New York City's five boroughs."
        image="https://images.unsplash.com/photo-1495568124863-94d40e4fe8bf?w=1800&q=80"
        imageAlt="New York City residential buildings"
        size="md"
      />

      <section className="bg-stone-50 py-24 lg:py-32">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          {/* Filter note */}
          <div className="flex items-center justify-between mb-12 pb-6 border-b border-stone-200">
            <p className="text-sm text-stone-500">
              {projects.length} Projects — All Boroughs
            </p>
            <p className="text-xs tracking-[0.15em] uppercase text-stone-400">
              New York City
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
            {projects.map((project, i) => (
              <ProjectCard key={project.slug} project={project} index={i} />
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="Have a property to submit?"
        subtitle="We actively acquire residential properties and development sites across all five boroughs. Property owners and brokers are encouraged to reach out directly."
        primaryLabel="Submit a Property"
        primaryHref="/acquisitions"
        secondaryLabel="Contact Us"
        secondaryHref="/contact"
        variant="dark"
      />
    </>
  );
}
