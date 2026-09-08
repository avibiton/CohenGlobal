import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, MapPin, ArrowRight } from "lucide-react";
import { projects, getProjectBySlug } from "@/data/projects";
import CTASection from "@/components/sections/CTASection";
import ProjectCard from "@/components/projects/ProjectCard";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) return {};
  return {
    title: project.name,
    description: project.description ?? `${project.name} — a Cohen Global Properties development in ${project.borough}.`,
    alternates: {
      canonical: `https://cohen-global.com/projects/${slug}`,
    },
  };
}

export default async function ProjectDetailPage({ params }: Props) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) notFound();

  const related = projects
    .filter((p) => p.slug !== project.slug && p.borough === project.borough)
    .slice(0, 2);

  return (
    <>
      {/* Hero */}
      <section className="relative h-[70vh] min-h-[500px] bg-stone-950 overflow-hidden">
        <Image
          src={project.heroImage}
          alt={`${project.name} — ${project.propertyType}`}
          fill
          className="object-cover opacity-50"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/40 to-transparent" />
        <div className="relative z-10 flex flex-col justify-end h-full max-w-[1400px] mx-auto px-6 lg:px-12 pb-16 lg:pb-20 pt-32">
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 text-stone-400 hover:text-stone-200 transition-colors text-sm mb-8 group"
          >
            <ArrowLeft
              size={14}
              className="group-hover:-translate-x-1 transition-transform"
            />
            All Projects
          </Link>
          <div className="flex items-center gap-3 mb-4">
            {project.highlights?.map((h) => (
              <span
                key={h}
                className="text-[10px] tracking-[0.15em] uppercase text-stone-400 border border-stone-700 px-2.5 py-1"
              >
                {h}
              </span>
            ))}
          </div>
          <h1
            className="text-stone-100 font-light leading-tight"
            style={{
              fontFamily: "var(--font-cormorant), Georgia, serif",
              fontSize: "clamp(2.5rem, 6vw, 5rem)",
              letterSpacing: "-0.02em",
            }}
          >
            {project.name}
          </h1>
          {project.address && (
            <p className="flex items-center gap-2 text-stone-400 text-sm mt-3">
              <MapPin size={14} />
              {project.address}
              {project.borough ? `, ${project.borough}` : ""}
            </p>
          )}
        </div>
      </section>

      {/* Details */}
      <section className="bg-stone-50 py-16 lg:py-24">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-[1fr_300px] gap-16">
            {/* Main content */}
            <div>
              <h2
                className="text-2xl text-stone-900 font-light mb-6"
                style={{
                  fontFamily: "var(--font-cormorant), Georgia, serif",
                }}
              >
                Overview
              </h2>
              <p className="text-stone-600 leading-relaxed text-lg">
                {project.description}
              </p>

              {/* Gallery */}
              {project.gallery && project.gallery.length > 1 && (
                <div className="mt-12">
                  <h2
                    className="text-2xl text-stone-900 font-light mb-6"
                    style={{
                      fontFamily: "var(--font-cormorant), Georgia, serif",
                    }}
                  >
                    Gallery
                  </h2>
                  <div className="grid sm:grid-cols-2 gap-4">
                    {project.gallery.map((img, i) => (
                      <div
                        key={i}
                        className="relative aspect-[4/3] overflow-hidden"
                      >
                        <Image
                          src={img}
                          alt={`${project.name} — image ${i + 1}`}
                          fill
                          className="object-cover"
                          sizes="(max-width: 640px) 100vw, 50vw"
                        />
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Sidebar */}
            <div className="space-y-px">
              {[
                { label: "Borough", value: project.borough },
                { label: "Neighborhood", value: project.neighborhood },
                { label: "Property Type", value: project.propertyType },
                { label: "Status", value: project.status },
                { label: "Year", value: project.year },
              ]
                .filter((item) => item.value)
                .map((item) => (
                  <div
                    key={item.label}
                    className="bg-stone-100 px-6 py-4 flex items-center justify-between gap-4"
                  >
                    <span className="text-xs tracking-[0.12em] uppercase text-stone-500">
                      {item.label}
                    </span>
                    <span className="text-sm text-stone-900 text-right">
                      {item.value}
                    </span>
                  </div>
                ))}
              <div className="pt-6">
                <Link
                  href="/acquisitions"
                  className="block w-full text-center px-6 py-4 bg-brass-500 text-stone-950 text-sm tracking-wide hover:bg-brass-400 transition-colors"
                >
                  Submit a Property
                </Link>
                <Link
                  href="/contact"
                  className="block w-full text-center px-6 py-3 border border-stone-300 text-stone-600 text-sm tracking-wide mt-3 hover:bg-stone-100 transition-colors"
                >
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related */}
      {related.length > 0 && (
        <section className="bg-stone-100 py-16 lg:py-24">
          <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
            <div className="flex items-center justify-between mb-10">
              <h2
                className="text-2xl text-stone-900 font-light"
                style={{
                  fontFamily: "var(--font-cormorant), Georgia, serif",
                }}
              >
                Related Projects
              </h2>
              <Link
                href="/projects"
                className="inline-flex items-center gap-2 text-sm text-stone-500 hover:text-stone-900 transition-colors group"
              >
                All Projects
                <ArrowRight
                  size={14}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </Link>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              {related.map((p, i) => (
                <ProjectCard key={p.slug} project={p} index={i} />
              ))}
            </div>
          </div>
        </section>
      )}

      <CTASection
        title="Have a property opportunity?"
        subtitle="We're active buyers in all five boroughs. Contact us today."
        primaryLabel="Submit a Property"
        primaryHref="/acquisitions"
        secondaryLabel="View All Projects"
        secondaryHref="/projects"
        variant="dark"
      />
    </>
  );
}
