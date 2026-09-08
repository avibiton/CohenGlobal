"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { Project } from "@/data/projects";
import { cn } from "@/lib/utils";

interface ProjectCardProps {
  project: Project;
  index?: number;
  size?: "default" | "large";
}

export default function ProjectCard({
  project,
  index = 0,
  size = "default",
}: ProjectCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.12 }}
      className="group"
    >
      <Link href={`/projects/${project.slug}`} className="block">
        {/* Image */}
        <div
          className={cn(
            "relative overflow-hidden bg-stone-200",
            size === "large" ? "aspect-[4/5]" : "aspect-[3/2]"
          )}
        >
          <Image
            src={project.heroImage}
            alt={`${project.name} — ${project.propertyType} in ${project.borough}`}
            fill
            className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
          {/* Status badge */}
          <div className="absolute top-4 left-4">
            <span
              className={cn(
                "px-2.5 py-1 text-[10px] tracking-[0.15em] uppercase",
                project.status === "Completed"
                  ? "bg-stone-950/80 text-stone-300"
                  : "bg-brass-500/90 text-stone-950"
              )}
            >
              {project.status}
            </span>
          </div>

          {/* Hover overlay */}
          <div className="absolute inset-0 bg-stone-950/0 group-hover:bg-stone-950/20 transition-colors duration-300" />
          <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <div className="w-10 h-10 bg-brass-500 flex items-center justify-center">
              <ArrowRight size={16} className="text-stone-950" />
            </div>
          </div>
        </div>

        {/* Meta */}
        <div className="pt-5">
          <div className="flex items-start justify-between gap-4">
            <div>
              <p className="text-[10px] tracking-[0.15em] uppercase text-stone-500 mb-1.5">
                {project.borough}
                {project.neighborhood ? ` — ${project.neighborhood}` : ""}
              </p>
              <h3
                className="text-xl text-stone-900 font-light group-hover:text-brass-600 transition-colors leading-tight"
                style={{ fontFamily: "var(--font-cormorant), Georgia, serif" }}
              >
                {project.name}
              </h3>
              <p className="text-sm text-stone-500 mt-1">{project.propertyType}</p>
            </div>
          </div>
        </div>
      </Link>
    </motion.article>
  );
}
