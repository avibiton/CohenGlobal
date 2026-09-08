"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function AboutIntro() {
  return (
    <section className="bg-stone-50 py-24 lg:py-32">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          {/* Left: editorial statement */}
          <div>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-xs tracking-[0.2em] uppercase text-stone-500 mb-6"
            >
              About Cohen Global
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="font-light text-stone-900 leading-tight"
              style={{
                fontFamily: "var(--font-cormorant), Georgia, serif",
                fontSize: "clamp(2rem, 4.5vw, 3.75rem)",
                letterSpacing: "-0.015em",
              }}
            >
              Experience built across
              <br />
              New York City.
            </motion.h2>
          </div>

          {/* Right: text + CTA */}
          <div className="lg:pt-16">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="space-y-5 text-stone-600 leading-relaxed"
            >
              <p>
                Cohen Global Properties Inc. was founded in 2005 in the State
                of New York. For over twenty years, the company has been engaged
                in acquiring, renovating, and delivering residential properties
                throughout New York City&apos;s five boroughs.
              </p>
              <p>
                The company operates through a portfolio of commonly owned
                entities, each focused on specific properties and development
                sites. Projects span single-family rehabilitation to new
                residential construction — all executed with a repeatable
                discipline that prioritizes speed, quality, and value.
              </p>
              <p>
                Cohen Global primarily serves first-time homebuyers, working
                families, and stable-income earners in improving neighborhoods
                — a market the company has developed deep expertise in reaching.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="mt-10 flex flex-col sm:flex-row gap-4"
            >
              <Link
                href="/about"
                className="inline-flex items-center gap-2 text-sm tracking-wide text-stone-900 border border-stone-900 px-6 py-3 hover:bg-stone-900 hover:text-stone-100 transition-all group"
              >
                Learn About Cohen Global
                <ArrowRight
                  size={14}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </Link>
              <Link
                href="/what-we-do"
                className="inline-flex items-center gap-2 text-sm tracking-wide text-stone-500 hover:text-stone-900 transition-colors group"
              >
                What We Do
                <ArrowRight
                  size={14}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
