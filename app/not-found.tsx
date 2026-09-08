import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-stone-50 px-6 text-center">
      <p className="text-xs tracking-[0.2em] uppercase text-stone-400 mb-4">
        404 — Page Not Found
      </p>
      <h1
        className="text-5xl lg:text-7xl text-stone-900 font-light mb-6"
        style={{ fontFamily: "var(--font-cormorant), Georgia, serif" }}
      >
        Lost in the city.
      </h1>
      <p className="text-stone-500 max-w-sm mb-10 leading-relaxed">
        The page you&apos;re looking for doesn&apos;t exist. It may have moved, or you
        may have followed a broken link.
      </p>
      <Link
        href="/"
        className="inline-flex items-center gap-2 px-6 py-3 border border-stone-300 text-stone-700 text-sm hover:bg-stone-100 transition-colors group"
      >
        <ArrowLeft
          size={14}
          className="group-hover:-translate-x-1 transition-transform"
        />
        Back to Home
      </Link>
    </div>
  );
}
