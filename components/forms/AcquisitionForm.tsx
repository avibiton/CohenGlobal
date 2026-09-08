"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { CheckCircle, AlertCircle, Loader2 } from "lucide-react";
import { acquisitionSchema, type AcquisitionFormData } from "@/lib/validation";
import { cn } from "@/lib/utils";

const inputClass =
  "w-full px-0 py-3 bg-transparent border-b border-stone-700 text-stone-100 placeholder:text-stone-500 focus:border-brass-500 focus:outline-none transition-colors text-sm";

const labelClass = "block text-xs tracking-[0.12em] uppercase text-stone-500 mb-1.5";

export default function AcquisitionForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<AcquisitionFormData>({
    resolver: zodResolver(acquisitionSchema),
    defaultValues: { propertyType: "single-family" },
  });

  const onSubmit = async (data: AcquisitionFormData) => {
    setStatus("loading");
    try {
      const res = await fetch("/api/acquisition", {
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
      <div className="flex flex-col items-start gap-4 py-16">
        <CheckCircle size={36} className="text-brass-400" />
        <h3
          className="text-3xl text-stone-100 font-light"
          style={{ fontFamily: "var(--font-cormorant), Georgia, serif" }}
        >
          Opportunity received.
        </h3>
        <p className="text-stone-400 leading-relaxed max-w-md">
          Thank you for submitting this opportunity. Our acquisitions team
          reviews all submissions and will follow up with you directly. We
          typically respond within 24–48 hours.
        </p>
        <button
          onClick={() => setStatus("idle")}
          className="mt-2 text-sm text-stone-500 hover:text-stone-300 transition-colors underline underline-offset-4"
        >
          Submit another opportunity
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

      {/* Contact Info */}
      <div>
        <p className="text-xs tracking-[0.2em] uppercase text-stone-500 mb-6 pb-3 border-b border-stone-800">
          Your Information
        </p>
        <div className="grid sm:grid-cols-2 gap-8">
          <div>
            <label htmlFor="acq-name" className={labelClass}>
              Name *
            </label>
            <input
              id="acq-name"
              type="text"
              className={cn(inputClass, errors.name && "border-red-500")}
              placeholder="Your full name"
              {...register("name")}
            />
            {errors.name && (
              <p className="text-red-400 text-xs mt-1">{errors.name.message}</p>
            )}
          </div>
          <div>
            <label htmlFor="acq-company" className={labelClass}>
              Company / Firm
            </label>
            <input
              id="acq-company"
              type="text"
              className={inputClass}
              placeholder="Optional"
              {...register("company")}
            />
          </div>
          <div>
            <label htmlFor="acq-email" className={labelClass}>
              Email *
            </label>
            <input
              id="acq-email"
              type="email"
              className={cn(inputClass, errors.email && "border-red-500")}
              placeholder="your@email.com"
              {...register("email")}
            />
            {errors.email && (
              <p className="text-red-400 text-xs mt-1">{errors.email.message}</p>
            )}
          </div>
          <div>
            <label htmlFor="acq-phone" className={labelClass}>
              Phone *
            </label>
            <input
              id="acq-phone"
              type="tel"
              className={cn(inputClass, errors.phone && "border-red-500")}
              placeholder="(000) 000-0000"
              {...register("phone")}
            />
            {errors.phone && (
              <p className="text-red-400 text-xs mt-1">{errors.phone.message}</p>
            )}
          </div>
        </div>
      </div>

      {/* Property Info */}
      <div>
        <p className="text-xs tracking-[0.2em] uppercase text-stone-500 mb-6 pb-3 border-b border-stone-800">
          Property Information
        </p>
        <div className="space-y-8">
          <div className="grid sm:grid-cols-2 gap-8">
            <div>
              <label htmlFor="acq-address" className={labelClass}>
                Property Address *
              </label>
              <input
                id="acq-address"
                type="text"
                className={cn(inputClass, errors.propertyAddress && "border-red-500")}
                placeholder="Street address"
                {...register("propertyAddress")}
              />
              {errors.propertyAddress && (
                <p className="text-red-400 text-xs mt-1">
                  {errors.propertyAddress.message}
                </p>
              )}
            </div>
            <div>
              <label htmlFor="acq-borough" className={labelClass}>
                Borough / City
              </label>
              <select
                id="acq-borough"
                className={cn(inputClass, "cursor-pointer")}
                {...register("boroughCity")}
              >
                <option value="">Select borough</option>
                <option value="brooklyn">Brooklyn</option>
                <option value="queens">Queens</option>
                <option value="bronx">The Bronx</option>
                <option value="manhattan">Manhattan</option>
                <option value="staten-island">Staten Island</option>
                <option value="other-ny">Other — New York State</option>
              </select>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-8">
            <div>
              <label htmlFor="acq-type" className={labelClass}>
                Property Type *
              </label>
              <select
                id="acq-type"
                className={cn(inputClass, "cursor-pointer")}
                {...register("propertyType")}
              >
                <option value="single-family">Single Family</option>
                <option value="multifamily">Multifamily</option>
                <option value="mixed-use">Mixed Use</option>
                <option value="development-site">Development Site</option>
                <option value="land">Land</option>
                <option value="other">Other</option>
              </select>
            </div>
            <div>
              <label htmlFor="acq-price" className={labelClass}>
                Asking Price
              </label>
              <input
                id="acq-price"
                type="text"
                className={inputClass}
                placeholder="e.g. $850,000 or make offer"
                {...register("askingPrice")}
              />
            </div>
          </div>

          <div>
            <label htmlFor="acq-occupancy" className={labelClass}>
              Occupancy Status
            </label>
            <select
              id="acq-occupancy"
              className={cn(inputClass, "cursor-pointer")}
              {...register("occupancyStatus")}
            >
              <option value="vacant">Vacant</option>
              <option value="occupied">Occupied</option>
              <option value="partial">Partially Occupied</option>
              <option value="unknown">Unknown</option>
            </select>
          </div>

          <div>
            <label htmlFor="acq-description" className={labelClass}>
              Property Description
            </label>
            <textarea
              id="acq-description"
              rows={4}
              className={cn(inputClass, "resize-none")}
              placeholder="Describe the property — size, condition, units, any known issues..."
              {...register("description")}
            />
          </div>

          <div>
            <label htmlFor="acq-notes" className={labelClass}>
              Additional Notes
            </label>
            <textarea
              id="acq-notes"
              rows={3}
              className={cn(inputClass, "resize-none")}
              placeholder="Anything else we should know about this opportunity..."
              {...register("additionalNotes")}
            />
          </div>
        </div>
      </div>

      {/* Role checkboxes */}
      <div className="space-y-3">
        <label className="flex items-center gap-3 cursor-pointer group">
          <input
            type="checkbox"
            className="w-4 h-4 accent-brass-500 cursor-pointer"
            {...register("isOwner")}
          />
          <span className="text-sm text-stone-400 group-hover:text-stone-200 transition-colors">
            I am the property owner
          </span>
        </label>
        <label className="flex items-center gap-3 cursor-pointer group">
          <input
            type="checkbox"
            className="w-4 h-4 accent-brass-500 cursor-pointer"
            {...register("isBroker")}
          />
          <span className="text-sm text-stone-400 group-hover:text-stone-200 transition-colors">
            I am a broker / representative
          </span>
        </label>
      </div>

      {status === "error" && (
        <div className="flex items-center gap-2 text-red-400 text-sm">
          <AlertCircle size={16} />
          Something went wrong. Please try again or call us directly.
        </div>
      )}

      <button
        type="submit"
        disabled={status === "loading"}
        className="inline-flex items-center gap-3 px-8 py-4 bg-brass-500 text-stone-950 text-sm tracking-wide hover:bg-brass-400 transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {status === "loading" ? (
          <>
            <Loader2 size={16} className="animate-spin" />
            Submitting...
          </>
        ) : (
          "Submit Opportunity"
        )}
      </button>
    </form>
  );
}
