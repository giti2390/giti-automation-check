import { Analytics } from "@vercel/analytics/react";
import { useEffect, useState } from "react";
import { AccessibilityWidget } from "../components/landing/AccessibilityWidget";
import { Footer } from "../components/landing/Footer";
import { LegalPage } from "../components/landing/LegalPage";
import IndexRoute from "./index";

export default function Root() {
  const [pathname, setPathname] = useState(() => window.location.pathname);

  useEffect(() => {
    function updatePathname() {
      setPathname(window.location.pathname);
    }

    window.addEventListener("popstate", updatePathname);
    return () => window.removeEventListener("popstate", updatePathname);
  }, []);

  const isPrivacyPage = pathname === "/privacy";
  const isTermsPage = pathname === "/terms";
  const isAccessibilityPage = pathname === "/accessibility";
  const isLegalPage = isPrivacyPage || isTermsPage || isAccessibilityPage;

  return (
    <>
      <a className="skip-link" href="#main-content">
        דילוג לתוכן המרכזי
      </a>
      <main id="main-content" lang="he" dir="rtl">
        {isPrivacyPage && <LegalPage type="privacy" />}
        {isTermsPage && <LegalPage type="terms" />}
        {isAccessibilityPage && <LegalPage type="accessibility" />}
        {!isLegalPage && <IndexRoute />}
      </main>
      {isLegalPage && <Footer />}
      <AccessibilityWidget />
      <Analytics />
    </>
  );
}
