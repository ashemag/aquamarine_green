import { NextResponse } from "next/server";

export const runtime = "nodejs";

type SubscribeRequest = {
  email?: string;
  tags?: string[];
};

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export async function POST(req: Request) {
  const apiKey = process.env.BUTTONDOWN_API_KEY;
  if (!apiKey) {
    return NextResponse.json(
      {
        ok: false,
        error:
          "Newsletter is not configured. Please set BUTTONDOWN_API_KEY on the server.",
      },
      { status: 500 }
    );
  }

  let body: SubscribeRequest | null = null;
  try {
    body = (await req.json()) as SubscribeRequest;
  } catch {
    // ignore
  }

  const email = (body?.email ?? "").trim().toLowerCase();
  if (!email || !isValidEmail(email)) {
    return NextResponse.json(
      { ok: false, error: "Please enter a valid email address." },
      { status: 400 }
    );
  }

  const payload = {
    email_address: email,
    tags: body?.tags,
    referrer_url: req.headers.get("referer") ?? undefined,
  };

  const res = await fetch("https://api.buttondown.email/v1/subscribers", {
    method: "POST",
    headers: {
      Authorization: `Token ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
    cache: "no-store",
  });

  if (res.status === 201) {
    return NextResponse.json({ ok: true });
  }

  let errorDetail: string | undefined;
  try {
    const data = (await res.json()) as { detail?: string };
    errorDetail = data?.detail;
  } catch {
    // ignore
  }

  if (
    res.status === 409 ||
    (errorDetail && /already subscribed/i.test(errorDetail))
  ) {
    return NextResponse.json({ ok: true, alreadySubscribed: true });
  }

  return NextResponse.json(
    {
      ok: false,
      error: "We couldn't subscribe you right now. Please try again in a moment.",
    },
    { status: 400 }
  );
}
