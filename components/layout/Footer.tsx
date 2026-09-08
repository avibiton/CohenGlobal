import Link from "next/link";
import { MapPin, Phone, Clock, ArrowRight } from "lucide-react";

const footerNav = {
  projects: [
    { label: "All Projects", href: "/projects" },
    { label: "Featured Work", href: "/projects" },
    { label: "Submit a Property", href: "/acquisitions" },
  ],
  company: [
    { label: "About Us", href: "/about" },
    { label: "What We Do", href: "/what-we-do" },
    { label: "Acquisitions", href: "/acquisitions" },
    { label: "Contact", href: "/contact" },
  ],
  legal: [
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Terms of Use", href: "/terms" },
  ],
};

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-stone-950 text-stone-300">
      {/* Top CTA bar */}
      <div className="border-b border-stone-800">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 py-12 lg:py-16">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
            <div>
              <p className="text-xs tracking-[0.2em] uppercase text-stone-500 mb-3">
                Property Owners & Brokers
              </p>
              <h2
                className="text-3xl lg:text-4xl text-stone-100 font-light leading-tight"
                style={{ fontFamily: "var(--font-cormorant), Georgia, serif" }}
              >
                Have a property opportunity?
              </h2>
            </div>
            <Link
              href="/acquisitions"
              className="inline-flex items-center gap-3 px-8 py-4 border border-brass-500 text-brass-400 hover:bg-brass-500 hover:text-stone-950 transition-all duration-200 text-sm tracking-wide group whitespace-nowrap"
            >
              Submit a Property
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </div>

      {/* Main footer */}
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="mb-6">
              <span
                className="text-2xl text-stone-100 font-light"
                style={{ fontFamily: "var(--font-cormorant), Georgia, serif" }}
              >
                Cohen Global
              </span>
              <br />
              <span className="text-[10px] tracking-[0.2em] uppercase text-stone-500">
                Properties Inc.
              </span>
            </div>
            <p className="text-sm text-stone-500 leading-relaxed max-w-xs">
              New York City real estate development — acquisition, renovation,
              new construction, and residential sales since 2005.
            </p>
          </div>

          {/* Projects */}
          <div>
            <h3 className="text-xs tracking-[0.2em] uppercase text-stone-500 mb-5">
              Projects
            </h3>
            <ul className="space-y-3">
              {footerNav.projects.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-stone-400 hover:text-stone-200 transition-colors hover-underline"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-xs tracking-[0.2em] uppercase text-stone-500 mb-5">
              Company
            </h3>
            <ul className="space-y-3">
              {footerNav.company.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-stone-400 hover:text-stone-200 transition-colors hover-underline"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xs tracking-[0.2em] uppercase text-stone-500 mb-5">
              Contact
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-2.5">
                <MapPin size={14} className="text-stone-500 mt-0.5 shrink-0" />
                <span className="text-sm text-stone-400 leading-relaxed">
                  1967 Bedford Avenue
                  <br />
                  Brooklyn, NY 11225
                </span>
              </li>
              <li className="flex items-start gap-2.5">
                <Phone size={14} className="text-stone-500 mt-0.5 shrink-0" />
                <div className="text-sm text-stone-400 space-y-1">
                  <a
                    href="tel:+15163121668"
                    className="block hover:text-stone-200 transition-colors"
                  >
                    (516) 312-1668
                  </a>
                  <a
                    href="tel:+19174684315"
                    className="block hover:text-stone-200 transition-colors"
                  >
                    (917) 468-4315
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-2.5">
                <Clock size={14} className="text-stone-500 mt-0.5 shrink-0" />
                <span className="text-sm text-stone-400 leading-relaxed">
                  Mon–Fri 9am–5pm
                  <br />
                  Sat 10am–4pm
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-stone-800">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 py-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <p className="text-xs text-stone-600">
            © {year} Cohen Global Properties Inc. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            {footerNav.legal.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-xs text-stone-600 hover:text-stone-400 transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
