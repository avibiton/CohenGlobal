"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface CTASectionProps {
  title?: string;
  subtitle?: string;
  primaryLabel?: string;
  primaryHref?: string;
  secondaryLabel?: string;
  secondaryHref?: string;
  variant?: "light" | "dark";
}

export default function CTASection({
  title = "Have a property opportunity?",
  subtitle = "We acquire single-family homes, multifamily properties, development sites, and more across New York City's five boroughs. Reach out — we move quickly.",
  primaryLabel = "Submit a Property",
  primaryHref = "/acquisitions",
  secondaryLabel = "Contact Us",
  secondaryHref = "/contact",
  variant = "dark",
}: CTASectionProps) {
  const isDark = variant === "dark";

  return (
    <section
      className={cn(
        "py-24 lg:py-32",
        isDark ? "bg-stone-900" : "bg-stone-100"
      )}
    >
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="max-w-3xl mx-auto text-center">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className={cn(
              "text-xs tracking-[0.2em] uppercase mb-6",
              isDark ? "text-stone-500" : "text-stone-400"
            )}
          >
            Property Owners & Brokers
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className={cn(
              "font-light leading-tight mb-6",
              isDark ? "text-stone-100" : "text-stone-900"
            )}
            style={{
              fontFamily: "var(--font-cormorant), Georgia, serif",
              fontSize: "clamp(2rem, 4vw, 3.5rem)",
              letterSpacing: "-0.02em",
            }}
          >
            {title}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className={cn(
              "text-base leading-relaxed mb-10",
              isDark ? "text-stone-400" : "text-stone-500"
            )}
          >
            {subtitle}
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.35 }}
            className="flex flex-col sm:flex-row justify-center gap-4"
          >
            <Link
              href={primaryHref}
              className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-brass-500 text-stone-950 text-sm tracking-wide hover:bg-brass-400 transition-colors group"
            >
              {primaryLabel}
              <ArrowRight
                size={16}
                className="group-hover:translate-x-1 transition-transform"
              />
            </Link>
            <Link
              href={secondaryHref}
              className={cn(
                "inline-flex items-center justify-center gap-3 px-8 py-4 text-sm tracking-wide border transition-all group",
                isDark
                  ? "border-stone-700 text-stone-400 hover:border-stone-500 hover:text-stone-200"
                  : "border-stone-300 text-stone-600 hover:border-stone-500 hover:text-stone-900"
              )}
            >
              {secondaryLabel}
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
