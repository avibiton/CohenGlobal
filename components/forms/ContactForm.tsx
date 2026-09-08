"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { CheckCircle, AlertCircle, Loader2 } from "lucide-react";
import { contactSchema, type ContactFormData } from "@/lib/validation";
import { cn } from "@/lib/utils";

const inputClass =
  "w-full px-0 py-3 bg-transparent border-b border-stone-300 text-stone-900 placeholder:text-stone-400 focus:border-stone-900 focus:outline-none transition-colors text-sm";

const labelClass = "block text-xs tracking-[0.12em] uppercase text-stone-500 mb-1.5";

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    defaultValues: { role: "other" },
  });

  const onSubmit = async (data: ContactFormData) => {
    setStatus("loading");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error();
      setStatus("success");
      reset();
    } catch {
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <div className="flex flex-col items-start gap-4 py-12">
        <CheckCircle size={32} className="text-brass-500" />
        <h3
          className="text-2xl text-stone-900 font-light"
          style={{ fontFamily: "var(--font-cormorant), Georgia, serif" }}
        >
          Message received.
        </h3>
        <p className="text-stone-500 text-sm leading-relaxed max-w-sm">
          Thank you for reaching out. Someone from Cohen Global will be in
          touch with you shortly.
        </p>
        <button
          onClick={() => setStatus("idle")}
          className="mt-2 text-sm text-stone-500 hover:text-stone-900 transition-colors underline underline-offset-4"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-8" noValidate>
      {/* Honeypot */}
      <input
        type="text"
        {...register("honeypot")}
        aria-hidden="true"
        className="absolute opacity-0 pointer-events-none w-0 h-0"
        tabIndex={-1}
        autoComplete="off"
      />

      <div className="grid sm:grid-cols-2 gap-8">
        <div>
          <label htmlFor="name" className={labelClass}>
            Name *
          </label>
          <input
            id="name"
            type="text"
            autoComplete="name"
            className={cn(inputClass, errors.name && "border-red-400")}
            placeholder="Your full name"
            {...register("name")}
          />
          {errors.name && (
            <p className="text-red-500 text-xs mt-1">{errors.name.message}</p>
          )}
        </div>
        <div>
          <label htmlFor="email" className={labelClass}>
            Email *
          </label>
          <input
            id="email"
            type="email"
            autoComplete="email"
            className={cn(inputClass, errors.email && "border-red-400")}
            placeholder="your@email.com"
            {...register("email")}
          />
          {errors.email && (
            <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>
          )}
        </div>
      </div>

      <div className="grid sm:grid-cols-2 gap-8">
        <div>
          <label htmlFor="phone" className={labelClass}>
            Phone
          </label>
          <input
            id="phone"
            type="tel"
            autoComplete="tel"
            className={inputClass}
            placeholder="(000) 000-0000"
            {...register("phone")}
          />
        </div>
        <div>
          <label htmlFor="company" className={labelClass}>
            Company
          </label>
          <input
            id="company"
            type="text"
            autoComplete="organization"
            className={inputClass}
            placeholder="Optional"
            {...register("company")}
          />
        </div>
      </div>

      <div>
        <label htmlFor="role" className={labelClass}>
          I am a...
        </label>
        <select
          id="role"
          className={cn(inputClass, "cursor-pointer")}
          {...register("role")}
        >
          <option value="property-owner">Property Owner</option>
          <option value="broker">Broker</option>
          <option value="buyer">Buyer</option>
          <option value="investor">Investor / Partner</option>
          <option value="vendor">Vendor / Contractor</option>
          <option value="other">Other</option>
        </select>
      </div>

      <div>
        <label htmlFor="message" className={labelClass}>
          Message *
        </label>
        <textarea
          id="message"
          rows={5}
          className={cn(
            inputClass,
            "resize-none",
            errors.message && "border-red-400"
          )}
          placeholder="Tell us how we can help..."
          {...register("message")}
        />
        {errors.message && (
          <p className="text-red-500 text-xs mt-1">{errors.message.message}</p>
        )}
      </div>

      {status === "error" && (
        <div className="flex items-center gap-2 text-red-500 text-sm">
          <AlertCircle size={16} />
          Something went wrong. Please try again or call us directly.
        </div>
      )}

      <button
        type="submit"
        disabled={status === "loading"}
        className="inline-flex items-center gap-3 px-8 py-4 bg-stone-900 text-stone-100 text-sm tracking-wide hover:bg-stone-800 transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {status === "loading" ? (
          <>
            <Loader2 size={16} className="animate-spin" />
            Sending...
          </>
        ) : (
          "Send Message"
        )}
      </button>
    </form>
  );
}
