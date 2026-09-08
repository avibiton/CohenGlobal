import { z } from "zod";

export const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().optional(),
  company: z.string().optional(),
  role: z.enum(["property-owner", "broker", "buyer", "investor", "vendor", "other"]),
  message: z.string().min(10, "Message must be at least 10 characters"),
  honeypot: z.string().max(0, "Bot detected").optional(),
});

export const acquisitionSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  company: z.string().optional(),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().min(7, "Please enter a valid phone number"),
  propertyAddress: z.string().min(5, "Please enter the property address"),
  boroughCity: z.string().optional(),
  propertyType: z.enum([
    "single-family",
    "multifamily",
    "mixed-use",
    "development-site",
    "land",
    "other",
  ]),
  askingPrice: z.string().optional(),
  occupancyStatus: z.enum(["vacant", "occupied", "partial", "unknown"]).optional(),
  description: z.string().optional(),
  additionalNotes: z.string().optional(),
  isOwner: z.boolean().optional(),
  isBroker: z.boolean().optional(),
  honeypot: z.string().max(0, "Bot detected").optional(),
});

export type ContactFormData = z.infer<typeof contactSchema>;
export type AcquisitionFormData = z.infer<typeof acquisitionSchema>;
