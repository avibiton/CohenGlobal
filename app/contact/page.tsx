import type { Metadata } from "next";
import { MapPin, Phone, Clock, ArrowRight } from "lucide-react";
import ContactForm from "@/components/forms/ContactForm";
import { company } from "@/data/company";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact Cohen Global Properties. Reach our team at our Brooklyn office or use the contact form to discuss real estate opportunities, acquisitions, or partnerships.",
  alternates: {
    canonical: "https://cohen-global.com/contact",
  },
};

export default function ContactPage() {
  return (
    <>
      {/* Header spacer */}
      <div className="h-24 bg-stone-950" />

      <section className="bg-stone-50 flex-1 py-20 lg:py-28">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
            {/* Left: info */}
            <div>
              <p className="text-xs tracking-[0.2em] uppercase text-stone-400 mb-4">
                Get in Touch
              </p>
              <h1
                className="font-light text-stone-900 leading-tight mb-8"
                style={{
                  fontFamily: "var(--font-cormorant), Georgia, serif",
                  fontSize: "clamp(2.5rem, 5vw, 4rem)",
                  letterSpacing: "-0.02em",
                }}
              >
                Let&apos;s Talk
                <br />
                Real Estate.
              </h1>
              <p className="text-stone-500 leading-relaxed max-w-md mb-12">
                Whether you have a property to discuss, want to learn about
                upcoming projects, or are interested in working with Cohen
                Global — reach out and we&apos;ll be in touch.
              </p>

              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 flex items-center justify-center border border-stone-200 shrink-0 mt-0.5">
                    <MapPin size={14} className="text-stone-500" />
                  </div>
                  <div>
                    <p className="text-xs tracking-[0.15em] uppercase text-stone-400 mb-1">
                      Office
                    </p>
                    <p className="text-stone-700">
                      1967 Bedford Avenue
                      <br />
                      Brooklyn, NY 11225
                    </p>
                    <a
                      href={`https://maps.google.com/?q=${company.address.mapQuery}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs text-brass-600 hover:text-brass-500 transition-colors mt-2 group"
                    >
                      Get directions
                      <ArrowRight
                        size={10}
                        className="group-hover:translate-x-0.5 transition-transform"
                      />
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 flex items-center justify-center border border-stone-200 shrink-0 mt-0.5">
                    <Phone size={14} className="text-stone-500" />
                  </div>
                  <div>
                    <p className="text-xs tracking-[0.15em] uppercase text-stone-400 mb-2">
                      Phone
                    </p>
                    <div className="space-y-1">
                      <div>
                        <p className="text-xs text-stone-400 mb-0.5">Yona Cohen</p>
                        <a
                          href={company.phone.primaryHref}
                          className="text-stone-700 hover:text-stone-950 transition-colors"
                        >
                          {company.phone.primary}
                        </a>
                      </div>
                      <div>
                        <p className="text-xs text-stone-400 mb-0.5 mt-2">Shlomi Cohen</p>
                        <a
                          href={company.phone.secondaryHref}
                          className="text-stone-700 hover:text-stone-950 transition-colors"
                        >
                          {company.phone.secondary}
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 flex items-center justify-center border border-stone-200 shrink-0 mt-0.5">
                    <Clock size={14} className="text-stone-500" />
                  </div>
                  <div>
                    <p className="text-xs tracking-[0.15em] uppercase text-stone-400 mb-2">
                      Hours
                    </p>
                    <div className="space-y-1">
                      <p className="text-stone-700 text-sm">Mon–Fri: 9:00 AM – 5:00 PM</p>
                      <p className="text-stone-700 text-sm">Saturday: 10:00 AM – 4:00 PM</p>
                      <p className="text-stone-500 text-sm">Sunday: Closed</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: form */}
            <div className="lg:pt-20">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
