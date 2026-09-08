import { NextRequest, NextResponse } from "next/server";
import { contactSchema } from "@/lib/validation";

// Rate limiting: simple in-memory map (for production use Redis or similar)
const rateLimitMap = new Map<string, { count: number; resetAt: number }>();

function checkRateLimit(ip: string): boolean {
  const now = Date.now();
  const windowMs = 60 * 1000; // 1 minute
  const max = 5;

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

    // Honeypot check
    if (body.honeypot) {
      return NextResponse.json({ ok: true }); // Silently succeed for bots
    }

    const parsed = contactSchema.safeParse(body);
    if (!parsed.success) {
      return NextResponse.json(
        { error: "Invalid submission", details: parsed.error.flatten() },
        { status: 400 }
      );
    }

    const data = parsed.data;

    // TODO: Connect to email / CRM / webhook
    // Example integrations:
    // - Resend/SendGrid: await sendEmail({ to: "contact@cohen-global.com", ...data })
    // - HubSpot: await createHubSpotContact(data)
    // - Webhook: await fetch(process.env.WEBHOOK_URL, { method: "POST", body: JSON.stringify(data) })

    console.log("[Contact Form Submission]", {
      name: data.name,
      email: data.email,
      role: data.role,
      timestamp: new Date().toISOString(),
    });

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("[Contact Form Error]", err);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
