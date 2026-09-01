import { NextResponse } from "next/server";

/**
 * The exact wording shown beside the consent checkbox, recorded with each
 * request so there is a record of what was agreed to. Keep it in step with the
 * label in `components/Contact.tsx`.
 */
const CONSENT_TEXT =
  "I agree to receive account and service communications about my inquiry. " +
  "This includes scheduling, reminders and updates.";

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

  // Contact consent is the checkbox on the form. It is checked here as well as in
  // the browser because it is the record that the patient opted in — whatever this
  // route is eventually wired to must store it alongside the request.
  if (data.consent !== "yes") {
    return NextResponse.json(
      { ok: false, error: "Consent to be contacted is required." },
      { status: 400 },
    );
  }

  console.log("[appointment request]", {
    name: `${data.firstName} ${data.lastName}`,
    phone: data.phone,
    email: data.email,
    location: data.location,
    reason: data.reason,
    consent: true,
    consentText: CONSENT_TEXT,
    receivedAt: new Date().toISOString(),
  });

  return NextResponse.json({ ok: true });
}
