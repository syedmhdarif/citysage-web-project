import type { Metadata } from "next";
import Hero from "@/components/Hero";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Request a Demo — See CitySage AI Workers in Action",
  description:
    "Schedule a personalised demo of CitySage's AI-powered urban intelligence platform. See how our AI workers automate urban planning, geospatial analysis, data governance, and housing strategy for your city or municipality.",
  alternates: { canonical: "https://citysage.my/request-demo/" },
  openGraph: {
    title: "Request a Demo — See CitySage AI Workers in Action",
    description:
      "Book a personalised walkthrough of CitySage's AI urban intelligence platform and see how AI workers can transform your city's planning and management.",
    url: "https://citysage.my/request-demo/",
  },
};

export default function RequestDemoPage() {
  return (
    <>
      <Hero
        title="Request a Demo"
        subtitle="See CitySage AI workers in action. Fill in the form below and our team will schedule a personalised walkthrough."
      />

      <section className="mx-auto max-w-2xl px-4 py-20 sm:px-6">
        <ContactForm heading="Tell us about your needs" showCompany showMessage />
      </section>
    </>
  );
}
