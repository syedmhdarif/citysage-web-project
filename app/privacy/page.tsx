import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "CitySage privacy policy — how we collect, use, and protect your data. Covers data handling for our AI-powered urban intelligence platform and website services.",
  alternates: { canonical: "https://citysage.my/privacy/" },
};

export default function PrivacyPage() {
  return (
    <article className="mx-auto max-w-3xl px-4 py-20 sm:px-6">
      <h1 className="text-4xl font-bold text-foreground">Privacy Policy</h1>
      <p className="mt-1 text-sm text-muted">Last updated: January 2026</p>

      <h2 className="mt-10 text-xl font-semibold text-foreground">1. Information We Collect</h2>
      <p className="mt-3 leading-relaxed text-muted">
        We collect information you provide directly — such as name, email, and company details when
        you submit a contact or demo request form. We also collect standard web analytics data
        (page views, device type, referrer) via privacy-respecting analytics tools.
      </p>

      <h2 className="mt-10 text-xl font-semibold text-foreground">2. How We Use Your Information</h2>
      <p className="mt-3 leading-relaxed text-muted">
        Your information is used to respond to enquiries, schedule demos, improve our website
        experience, and send relevant updates (only with your consent). We do not sell personal data
        to third parties.
      </p>

      <h2 className="mt-10 text-xl font-semibold text-foreground">3. Data Retention</h2>
      <p className="mt-3 leading-relaxed text-muted">
        We retain contact form submissions for up to 24 months. Analytics data is retained in
        aggregated, anonymised form. You may request deletion of your personal data at any time by
        emailing privacy@citysage.ai.
      </p>

      <h2 className="mt-10 text-xl font-semibold text-foreground">4. Cookies</h2>
      <p className="mt-3 leading-relaxed text-muted">
        This site uses essential cookies for functionality. We do not use third-party tracking
        cookies. If we introduce analytics cookies in the future, we will implement a consent banner.
      </p>

      <h2 className="mt-10 text-xl font-semibold text-foreground">5. Contact</h2>
      <p className="mt-3 leading-relaxed text-muted">
        For privacy-related questions, contact us at privacy@citysage.ai.
      </p>
    </article>
  );
}
