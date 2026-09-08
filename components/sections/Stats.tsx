"use client";

import { motion } from "framer-motion";
import { stats } from "@/data/company";

function StatItem({
  value,
  label,
  index,
}: {
  value: string;
  label: string;
  index: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="text-center lg:text-left"
    >
      <div
        className="text-5xl lg:text-6xl font-light text-stone-900 mb-2 leading-none"
        style={{ fontFamily: "var(--font-cormorant), Georgia, serif" }}
      >
        {value}
      </div>
      <div className="text-xs tracking-[0.15em] uppercase text-stone-500">
        {label}
      </div>
    </motion.div>
  );
}

export default function Stats() {
  return (
    <section className="bg-stone-100 border-y border-stone-200">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 py-16 lg:py-20">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {stats.map((stat, i) => (
            <StatItem
              key={stat.label}
              value={stat.value}
              label={stat.label}
              index={i}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
