"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { capabilities } from "@/data/company";
import SectionHeading from "@/components/ui/SectionHeading";

export default function Capabilities() {
  return (
    <section className="bg-stone-950 py-24 lg:py-32">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-16">
          <SectionHeading
            eyebrow="What We Do"
            title="Full-cycle real estate expertise."
            subtitle="From acquisition and permitting through construction and sale — a complete development capability built over two decades."
            light
          />
          <Link
            href="/what-we-do"
            className="inline-flex items-center gap-2 text-sm tracking-wide text-stone-400 hover:text-stone-200 transition-colors group shrink-0"
          >
            Our Capabilities
            <ArrowRight
              size={14}
              className="group-hover:translate-x-1 transition-transform"
            />
          </Link>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-stone-800">
          {capabilities.map((cap, i) => (
            <motion.div
              key={cap.slug}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="bg-stone-950 p-8 lg:p-10 group hover:bg-stone-900 transition-colors"
            >
              <p className="text-[10px] tracking-[0.2em] uppercase text-stone-600 mb-4">
                0{i + 1}
              </p>
              <h3
                className="text-2xl lg:text-3xl text-stone-100 font-light mb-3 leading-tight"
                style={{ fontFamily: "var(--font-cormorant), Georgia, serif" }}
              >
                {cap.title}
              </h3>
              <p className="text-sm text-brass-400 italic mb-5 font-light">
                {cap.headline}
              </p>
              <p className="text-sm text-stone-400 leading-relaxed">
                {cap.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
