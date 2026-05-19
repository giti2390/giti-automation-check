import { AboutSection } from "../components/landing/AboutSection";
import { BeforeAfter } from "../components/landing/BeforeAfter";
import { ContactSection } from "../components/landing/ContactSection";
import { Footer } from "../components/landing/Footer";
import { Hero } from "../components/landing/Hero";
import { Quiz } from "../components/landing/Quiz";
import { TrustStrip } from "../components/landing/TrustStrip";
import { WhatsappCTA } from "../components/landing/WhatsappCTA";

export const head = {
  title: "Giti | אוטומציה לעסקים קטנים",
  description:
    "שאלון אבחון קצר שמראה לעסק קטן איפה עבודה ידנית יכולה להפוך לאוטומציה שחוסכת זמן וטעויות.",
};

export default function IndexRoute() {
  return (
    <>
      <Hero />
      <AboutSection />
      <TrustStrip />
      <BeforeAfter />
      <Quiz />
      <WhatsappCTA />
      <ContactSection />
      <Footer />
    </>
  );
}
