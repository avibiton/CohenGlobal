"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/projects", label: "Projects" },
  { href: "/what-we-do", label: "What We Do" },
  { href: "/acquisitions", label: "Acquisitions" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === "/";

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 60);
    handler();
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMobileOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  const headerBg = isHome
    ? scrolled
      ? "bg-stone-950/95 backdrop-blur-sm border-b border-stone-800"
      : "bg-transparent"
    : "bg-stone-950 border-b border-stone-800";

  const textColor = "text-stone-100";

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
          headerBg
        )}
      >
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="flex items-center justify-between h-20 lg:h-24">
            {/* Logo */}
            <Link
              href="/"
              className={cn("flex flex-col group", textColor)}
              aria-label="Cohen Global Properties — Home"
            >
              <span
                className="font-display text-xl lg:text-2xl font-light tracking-wide leading-none"
                style={{ fontFamily: "var(--font-cormorant), Georgia, serif" }}
              >
                Cohen Global
              </span>
              <span className="text-[10px] tracking-[0.2em] uppercase text-stone-400 mt-0.5">
                Properties Inc.
              </span>
            </Link>

            {/* Desktop nav */}
            <nav className="hidden lg:flex items-center gap-8" aria-label="Main navigation">
              {navLinks.slice(1).map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    "text-sm tracking-wide transition-colors duration-200 hover-underline",
                    pathname === link.href
                      ? "text-brass-400"
                      : cn(textColor, "hover:text-stone-300")
                  )}
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            {/* Desktop CTA */}
            <div className="hidden lg:flex items-center gap-4">
              <Link
                href="/acquisitions"
                className="px-5 py-2.5 text-sm tracking-wide border border-brass-500 text-brass-400 hover:bg-brass-500 hover:text-stone-950 transition-all duration-200"
              >
                Submit a Property
              </Link>
            </div>

            {/* Mobile menu button */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className={cn(
                "lg:hidden p-2 transition-colors",
                textColor,
                "hover:text-stone-300"
              )}
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileOpen}
            >
              {mobileOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile menu overlay */}
      <div
        className={cn(
          "fixed inset-0 z-40 bg-stone-950 flex flex-col transition-all duration-300",
          mobileOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        )}
        aria-hidden={!mobileOpen}
      >
        <div className="flex flex-col h-full px-6 pt-32 pb-12">
          <nav className="flex flex-col gap-2" aria-label="Mobile navigation">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "text-4xl font-light py-3 border-b border-stone-800 transition-colors",
                  "hover:text-brass-400",
                  pathname === link.href ? "text-brass-400" : "text-stone-100"
                )}
                style={{ fontFamily: "var(--font-cormorant), Georgia, serif" }}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="mt-auto">
            <Link
              href="/acquisitions"
              className="block w-full text-center py-4 border border-brass-500 text-brass-400 tracking-wide text-sm hover:bg-brass-500 hover:text-stone-950 transition-all duration-200"
            >
              Submit a Property
            </Link>
            <div className="mt-8 space-y-2">
              <a
                href="tel:+15163121668"
                className="block text-stone-400 text-sm hover:text-stone-200 transition-colors"
              >
                Yona: (516) 312-1668
              </a>
              <a
                href="tel:+19174684315"
                className="block text-stone-400 text-sm hover:text-stone-200 transition-colors"
              >
                Shlomi: (917) 468-4315
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
