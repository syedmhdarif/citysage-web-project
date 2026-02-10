import type { Metadata } from "next";
import Hero from "@/components/Hero";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact CitySage — Smart City Enquiries & Partnerships",
  description:
    "Get in touch with CitySage for smart city consulting, AI worker demos, partnership opportunities, or urban intelligence enquiries. Based at Menara KL Sentral, Kuala Lumpur, Malaysia.",
  alternates: { canonical: "https://citysage.my/contact/" },
  openGraph: {
    title: "Contact CitySage — Smart City Enquiries & Partnerships",
    description:
      "Reach out for smart city consulting, AI demos, or partnership opportunities. Located in Kuala Lumpur, Malaysia.",
    url: "https://citysage.my/contact/",
  },
};

export default function ContactPage() {
  return (
    <>
      <Hero title="Contact Us" subtitle="Have a question or want to explore a partnership? We'd love to hear from you." />

      <section className="mx-auto max-w-5xl px-4 py-20 sm:px-6">
        <div className="grid gap-12 md:grid-cols-2">
          <div>
            <h2 className="text-2xl font-bold text-foreground">Get in Touch</h2>
            <dl className="mt-6 space-y-4 text-md text-muted">
              <div>
                <dt className="font-semibold text-foreground">Email</dt>
                <dd>hello@citysage.ai</dd>
              </div>
              <div>
                <dt className="font-semibold text-foreground">Office</dt>
                <dd>Level 12, Menara KL Sentral, Kuala Lumpur, Malaysia</dd>
              </div>
              <div>
                <dt className="font-semibold text-foreground">Hours</dt>
                <dd>Mon — Fri, 9:00 AM — 6:00 PM (MYT)</dd>
              </div>
            </dl>
          </div>
          <ContactForm heading="Send a Message" showCompany showMessage />
        </div>
      </section>
    </>
  );
}
