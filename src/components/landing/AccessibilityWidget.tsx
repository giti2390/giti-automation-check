import { useEffect, useState } from "react";

export function AccessibilityWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [largeText, setLargeText] = useState(false);
  const [highContrast, setHighContrast] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    document.body.classList.toggle("a11y-large-text", largeText);
    document.body.classList.toggle("a11y-high-contrast", highContrast);
    document.body.classList.toggle("a11y-reduced-motion", reducedMotion);

    return () => {
      document.body.classList.remove("a11y-large-text", "a11y-high-contrast", "a11y-reduced-motion");
    };
  }, [largeText, highContrast, reducedMotion]);

  function resetSettings() {
    setLargeText(false);
    setHighContrast(false);
    setReducedMotion(false);
  }

  return (
    <div className="accessibility-widget" dir="rtl">
      <button
        className="accessibility-widget__trigger"
        type="button"
        aria-label="פתיחת תפריט נגישות"
        aria-expanded={isOpen}
        aria-controls="accessibility-panel"
        onClick={() => setIsOpen((value) => !value)}
      >
        נגישות
      </button>

      {isOpen && (
        <section
          className="accessibility-widget__panel"
          id="accessibility-panel"
          role="region"
          aria-labelledby="accessibility-panel-title"
        >
          <h2 id="accessibility-panel-title">אפשרויות נגישות</h2>
          <button
            type="button"
            aria-pressed={largeText}
            onClick={() => setLargeText((value) => !value)}
          >
            {largeText ? "כיבוי טקסט גדול" : "הגדלת טקסט"}
          </button>
          <button
            type="button"
            aria-pressed={highContrast}
            onClick={() => setHighContrast((value) => !value)}
          >
            {highContrast ? "כיבוי ניגודיות גבוהה" : "ניגודיות גבוהה"}
          </button>
          <button
            type="button"
            aria-pressed={reducedMotion}
            onClick={() => setReducedMotion((value) => !value)}
          >
            {reducedMotion ? "הפעלת אנימציות" : "הפחתת אנימציות"}
          </button>
          <a href="/accessibility">הצהרת נגישות</a>
          <button type="button" onClick={resetSettings}>
            איפוס
          </button>
        </section>
      )}
    </div>
  );
}
