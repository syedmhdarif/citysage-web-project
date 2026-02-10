"use client";

import { useState, type FormEvent } from "react";

interface ContactFormProps {
  heading?: string;
  showCompany?: boolean;
  showMessage?: boolean;
}

export default function ContactForm({
  heading = "Get in Touch",
  showCompany = true,
  showMessage = true,
}: ContactFormProps) {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="rounded border border-accent-green/30 bg-accent-green/5 p-8 text-center">
        <p className="font-mono text-xs uppercase tracking-wider text-accent-green">// Transmission received</p>
        <h3 className="mt-3 text-lg font-semibold text-foreground-bright">Thank you!</h3>
        <p className="mt-2 text-sm text-muted">
          We&apos;ve received your request and will be in touch shortly.
        </p>
      </div>
    );
  }

  const inputClass =
    "w-full rounded border border-border bg-background px-4 py-2.5 font-mono text-sm text-foreground outline-none transition-all placeholder:text-muted-foreground focus:border-accent/50 focus:shadow-[0_0_12px_rgba(74,222,128,0.08)]";

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      {heading && (
        <h3 className="text-xl font-semibold text-foreground-bright">{heading}</h3>
      )}

      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="mb-1.5 block font-mono text-[10px] uppercase tracking-wider text-muted">
            Name *
          </label>
          <input type="text" id="name" name="name" required className={inputClass} />
        </div>
        <div>
          <label htmlFor="email" className="mb-1.5 block font-mono text-[10px] uppercase tracking-wider text-muted">
            Email *
          </label>
          <input type="email" id="email" name="email" required className={inputClass} />
        </div>
      </div>

      {showCompany && (
        <div>
          <label htmlFor="company" className="mb-1.5 block font-mono text-[10px] uppercase tracking-wider text-muted">
            Company / Organisation
          </label>
          <input type="text" id="company" name="company" className={inputClass} />
        </div>
      )}

      {showMessage && (
        <div>
          <label htmlFor="message" className="mb-1.5 block font-mono text-[10px] uppercase tracking-wider text-muted">
            Message *
          </label>
          <textarea id="message" name="message" rows={4} required className={inputClass} />
        </div>
      )}

      <button
        type="submit"
        className="rounded border border-accent/40 bg-accent/10 px-8 py-3 font-mono text-sm font-semibold text-accent transition-all hover:bg-accent/20 hover:shadow-[0_0_20px_rgba(74,222,128,0.15)]"
      >
        Submit
      </button>
    </form>
  );
}
