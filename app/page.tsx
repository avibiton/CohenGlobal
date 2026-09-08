import type { Metadata } from "next";
import Hero from "@/components/sections/Hero";
import Stats from "@/components/sections/Stats";
import AboutIntro from "@/components/sections/AboutIntro";
import FeaturedProjects from "@/components/sections/FeaturedProjects";
import Capabilities from "@/components/sections/Capabilities";
import CTASection from "@/components/sections/CTASection";

export const metadata: Metadata = {
  title: "Cohen Global Properties | NYC Real Estate Development",
  description:
    "Cohen Global Properties is an experienced New York City real estate development company. We acquire, renovate, and deliver quality residential properties across the five boroughs.",
  alternates: {
    canonical: "https://cohen-global.com",
  },
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <Stats />
      <AboutIntro />
      <FeaturedProjects />
      <Capabilities />
      <CTASection />
    </>
  );
}
