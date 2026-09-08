import { NextRequest, NextResponse } from "next/server";
import { acquisitionSchema } from "@/lib/validation";

const rateLimitMap = new Map<string, { count: number; resetAt: number }>();

function checkRateLimit(ip: string): boolean {
  const now = Date.now();
  const windowMs = 60 * 1000;
  const max = 3;

  const record = rateLimitMap.get(ip);
  if (!record || now > record.resetAt) {
    rateLimitMap.set(ip, { count: 1, resetAt: now + windowMs });
    return true;
  }
  if (record.count >= max) return false;
  record.count++;
  return true;
}

export async function POST(req: NextRequest) {
  try {
    const ip = req.headers.get("x-forwarded-for") ?? "unknown";
    if (!checkRateLimit(ip)) {
      return NextResponse.json(
        { error: "Too many requests" },
        { status: 429 }
      );
    }

    const body = await req.json();

    if (body.honeypot) {
      return NextResponse.json({ ok: true });
    }

    const parsed = acquisitionSchema.safeParse(body);
    if (!parsed.success) {
      return NextResponse.json(
        { error: "Invalid submission", details: parsed.error.flatten() },
        { status: 400 }
      );
    }

    const data = parsed.data;

    // TODO: Connect to email / CRM / webhook
    // Configuration lives in lib/forms.ts (create when integrating)
    // Example integrations:
    // - Email: await sendAcquisitionEmail(data)
    // - CRM: await createCRMRecord({ pipeline: "acquisitions", ...data })
    // - Base44: await base44Client.createRecord("acquisitions", data)
    // - Webhook: await fetch(process.env.ACQUISITION_WEBHOOK_URL!, { method: "POST", body: JSON.stringify(data) })

    console.log("[Acquisition Form Submission]", {
      name: data.name,
      propertyAddress: data.propertyAddress,
      borough: data.boroughCity,
      propertyType: data.propertyType,
      isOwner: data.isOwner,
      isBroker: data.isBroker,
      timestamp: new Date().toISOString(),
    });

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("[Acquisition Form Error]", err);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
