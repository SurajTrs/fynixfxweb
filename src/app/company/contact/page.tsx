import type { Metadata } from "next";
import ContactHero from "@/components/company/contact/ContactHero";
import ContactCards from "@/components/company/contact/ContactCards";
import ContactForm from "@/components/company/contact/ContactForm";
import OfficeLocations from "@/components/company/contact/OfficeLocations";

export const metadata: Metadata = {
  title: "Contact Us | Fynixfx",
  description: "We’re here to help 24/5. Contact our support team by chat, phone or email.",
};

export default function ContactPage() {
  return (
    <main>
      <ContactHero />
      <ContactCards />
      <ContactForm />
      <OfficeLocations />
    </main>
  );
}
