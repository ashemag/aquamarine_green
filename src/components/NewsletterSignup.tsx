"use client";

import * as React from "react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";

type NewsletterTheme = "light" | "dark";

export type NewsletterSignupProps = {
  theme?: NewsletterTheme;
  className?: string;
  tags?: string[];
  placeholder?: string;
};

type ApiResponse =
  | { ok: true; alreadySubscribed?: boolean }
  | { ok: false; error: string };

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export default function NewsletterSignup({
  theme = "light",
  className,
  tags = ["website"],
  placeholder = "you@email.com",
}: NewsletterSignupProps) {
  const [email, setEmail] = React.useState("");
  const [status, setStatus] = React.useState<
    "idle" | "loading" | "success" | "already" | "error"
  >("idle");
  const [message, setMessage] = React.useState<string>("");

  const isDark = theme === "dark";
  const disabled = status === "loading" || status === "success" || status === "already";

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    const trimmed = email.trim().toLowerCase();

    if (!trimmed || !isValidEmail(trimmed)) {
      setStatus("error");
      setMessage("Please enter a valid email address.");
      return;
    }

    setStatus("loading");
    setMessage("");

    let res: Response;
    try {
      res = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: trimmed, tags }),
      });
    } catch {
      setStatus("error");
      setMessage("Connection issue — please try again.");
      return;
    }

    let data: ApiResponse | null = null;
    try {
      data = (await res.json()) as ApiResponse;
    } catch {
      // ignore
    }

    if (data && data.ok) {
      if (data.alreadySubscribed) {
        setStatus("already");
        setMessage("You’re already on the list.");
        return;
      }
      setStatus("success");
      setMessage("You’re in. Welcome.");
      return;
    }

    setStatus("error");
    setMessage(
      (data && !data.ok && data.error) ||
        "We couldn’t subscribe you right now. Please try again."
    );
  }

  // Show success state - replace form with message
  if (status === "success" || status === "already") {
    return (
      <div className={cn("w-full", className)}>
        <div
          className={cn(
            "flex items-center justify-center gap-3 py-4",
            isDark ? "text-seafoam" : "text-charcoal"
          )}
        >
          <svg
            className="w-5 h-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M5 13l4 4L19 7"
            />
          </svg>
          <p className="font-body text-sm tracking-wide" role="status">
            {message}
          </p>
        </div>
      </div>
    );
  }

  return (
    <form
      onSubmit={onSubmit}
      className={cn("w-full", className)}
      aria-label="Newsletter signup"
    >
      <div className="flex flex-col sm:flex-row gap-3 sm:items-center">
        <div className="flex-1">
          <Input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            inputMode="email"
            autoComplete="email"
            placeholder={placeholder}
            aria-label="Email address"
            className={cn(
              "h-11",
              isDark &&
                "!bg-white/5 !border-white/25 !text-white placeholder:!text-white/70 focus:!border-white/50"
            )}
            disabled={disabled}
          />
        </div>

        <Button
          type="submit"
          disabled={disabled}
          className={cn(
            "h-11 px-6",
            isDark && "!bg-white !text-charcoal hover:!bg-seafoam hover:!text-charcoal"
          )}
        >
          {status === "loading" ? "Joining..." : "Join newsletter"}
        </Button>
      </div>

      <div className="mt-3 min-h-[1.25rem]">
        {status === "idle" ? (
          <p
            className={cn(
              "font-body text-xs tracking-wide",
              isDark ? "text-white/40" : "text-charcoal/40"
            )}
          >
            Occasional updates. Unsubscribe anytime.
          </p>
        ) : (
          <p
            className={cn(
              "font-body text-xs tracking-wide text-coral"
            )}
            role="status"
            aria-live="polite"
          >
            {message}
          </p>
        )}
      </div>
    </form>
  );
}


