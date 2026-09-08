"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { cn } from "@/lib/utils";

interface PageHeroProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  image?: string;
  imageAlt?: string;
  size?: "sm" | "md" | "lg";
  className?: string;
}

export default function PageHero({
  eyebrow,
  title,
  subtitle,
  image,
  imageAlt = "",
  size = "md",
  className,
}: PageHeroProps) {
  const heights = {
    sm: "min-h-[50vh] lg:min-h-[55vh]",
    md: "min-h-[65vh] lg:min-h-[70vh]",
    lg: "min-h-[78vh] lg:min-h-[85vh]",
  };

  return (
    <section
      className={cn(
        "relative bg-stone-950 overflow-hidden",
        heights[size],
        className
      )}
    >
      {image && (
        <>
          <Image
            src={image}
            alt={imageAlt}
            fill
            className="object-cover opacity-40"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/60 to-stone-950/20" />
        </>
      )}

      <div className="absolute bottom-0 left-0 right-0 z-10 max-w-[1400px] mx-auto px-6 lg:px-12 pb-16 lg:pb-20">
        {eyebrow && (
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-xs tracking-[0.2em] uppercase text-stone-400 mb-4"
          >
            {eyebrow}
          </motion.p>
        )}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="font-light text-stone-100 leading-tight max-w-3xl"
          style={{
            fontFamily: "var(--font-cormorant), Georgia, serif",
            fontSize: "clamp(2.5rem, 6vw, 5rem)",
            letterSpacing: "-0.02em",
          }}
        >
          {title}
        </motion.h1>
        {subtitle && (
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.25 }}
            className="mt-4 text-lg text-stone-400 max-w-xl leading-relaxed"
          >
            {subtitle}
          </motion.p>
        )}
      </div>
    </section>
  );
}
