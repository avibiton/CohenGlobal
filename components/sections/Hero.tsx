"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative h-screen min-h-[700px] flex items-center justify-start overflow-hidden bg-stone-950">
      {/* Background image with slow zoom */}
      <motion.div
        className="absolute inset-0"
        initial={{ scale: 1.08 }}
        animate={{ scale: 1 }}
        transition={{ duration: 8, ease: "easeOut" }}
      >
        <Image
          src="/images/projects/207-prospect-exterior.jpg"
          alt="Cohen Global Properties completed development — Brooklyn, New York"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-stone-950/90 via-stone-950/60 to-stone-950/20" />
        <div className="absolute inset-0 bg-gradient-to-t from-stone-950/50 to-transparent" />
      </motion.div>

      {/* Content */}
      <div className="relative z-10 max-w-[1400px] w-full mx-auto px-6 lg:px-12">
        <div className="max-w-3xl">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-xs tracking-[0.3em] uppercase text-brass-400 mb-6"
          >
            New York City Real Estate Development
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.5 }}
            className="text-stone-100 font-light leading-[0.95] mb-8"
            style={{
              fontFamily: "var(--font-cormorant), Georgia, serif",
              fontSize: "clamp(3.5rem, 9vw, 7.5rem)",
              letterSpacing: "-0.025em",
            }}
          >
            Building
            <br />
            New York.
            <br />
            <em className="text-brass-400 not-italic">Creating</em>
            <br />
            Opportunity.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.9 }}
            className="text-stone-300 text-lg leading-relaxed max-w-lg mb-10"
          >
            Cohen Global Properties is an experienced New York City real estate
            development company focused on acquisition, rehabilitation, and new
            construction across the five boroughs.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.1 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Link
              href="/projects"
              className="inline-flex items-center gap-3 px-8 py-4 bg-stone-100 text-stone-950 text-sm tracking-wide hover:bg-white transition-colors group"
            >
              Explore Our Projects
              <ArrowRight
                size={16}
                className="group-hover:translate-x-1 transition-transform"
              />
            </Link>
            <Link
              href="/acquisitions"
              className="inline-flex items-center gap-3 px-8 py-4 border border-brass-500 text-brass-400 text-sm tracking-wide hover:bg-brass-500 hover:text-stone-950 transition-all group"
            >
              Submit a Property
              <ArrowRight
                size={16}
                className="group-hover:translate-x-1 transition-transform"
              />
            </Link>
          </motion.div>
        </div>
      </div>

      {/* Bottom scroll indicator */}
      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 0.8 }}
      >
        <div className="flex flex-col items-center gap-2">
          <motion.div
            className="w-px h-12 bg-stone-500"
            animate={{ scaleY: [1, 0.3, 1] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            style={{ transformOrigin: "top" }}
          />
        </div>
      </motion.div>
    </section>
  );
}
