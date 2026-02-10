import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms & Conditions",
  description:
    "CitySage terms and conditions — usage rights, AI chat disclaimer, intellectual property, limitation of liability, and governing law for our urban intelligence platform.",
  alternates: { canonical: "https://citysage.my/terms/" },
};

export default function TermsPage() {
  return (
    <article className="mx-auto max-w-3xl px-4 py-20 sm:px-6">
      <h1 className="text-4xl font-bold text-foreground">Terms &amp; Conditions</h1>
      <p className="mt-1 text-sm text-muted">Last updated: January 2026</p>

      <h2 className="mt-10 text-xl font-semibold text-foreground">1. Acceptance of Terms</h2>
      <p className="mt-3 leading-relaxed text-muted">
        By accessing and using the CitySage website, you agree to be bound by these Terms &amp;
        Conditions. If you do not agree, please do not use the site.
      </p>

      <h2 className="mt-10 text-xl font-semibold text-foreground">2. Use of Content</h2>
      <p className="mt-3 leading-relaxed text-muted">
        All content on this website — including text, graphics, logos, and software — is the
        property of CitySage or its licensors and is protected by intellectual property laws. You
        may not reproduce, distribute, or create derivative works without written permission.
      </p>

      <h2 className="mt-10 text-xl font-semibold text-foreground">3. AI Chat Disclaimer</h2>
      <p className="mt-3 leading-relaxed text-muted">
        The UrbanData AI chat feature provides informational responses based on publicly available
        urban data. Outputs should not be treated as professional advice. Always consult qualified
        professionals for planning, engineering, or policy decisions.
      </p>

      <h2 className="mt-10 text-xl font-semibold text-foreground">4. Limitation of Liability</h2>
      <p className="mt-3 leading-relaxed text-muted">
        CitySage provides this website &ldquo;as is&rdquo; without warranties of any kind. We are not liable
        for any damages arising from your use of the site or reliance on its content.
      </p>

      <h2 className="mt-10 text-xl font-semibold text-foreground">5. Governing Law</h2>
      <p className="mt-3 leading-relaxed text-muted">
        These terms are governed by the laws of Malaysia. Any disputes shall be subject to the
        exclusive jurisdiction of the Malaysian courts.
      </p>
    </article>
  );
}
