import { NextResponse } from "next/server";

/**
 * Appointment requests land here. Right now the payload is logged so the
 * deployment works end-to-end with no third-party account; wire this up to the
 * practice's CRM, an email service (Resend, Postmark) or a scheduling system
 * when credentials are available.
 */
export async function POST(request: Request) {
  let payload: unknown;

  try {
    payload = await request.json();
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid request body." }, { status: 400 });
  }

  const data = payload as Record<string, string> | null;
  const required = ["firstName", "lastName", "phone", "email"];
  const missing = required.filter((k) => !data?.[k]?.trim());

  if (!data || missing.length) {
    return NextResponse.json({ ok: false, error: `Missing: ${missing.join(", ")}` }, { status: 400 });
  }

  console.log("[appointment request]", {
    name: `${data.firstName} ${data.lastName}`,
    phone: data.phone,
    email: data.email,
    location: data.location,
    reason: data.reason,
    receivedAt: new Date().toISOString(),
  });

  return NextResponse.json({ ok: true });
}
