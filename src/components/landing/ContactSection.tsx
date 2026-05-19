export function ContactSection() {
  return (
    <section className="section-shell contact-section" aria-labelledby="contact-title">
      <div>
        <p className="eyebrow">יצירת קשר</p>
        <h2 id="contact-title">יש שאלה לפני שמתחילים?</h2>
        <p>
          ניתן לשלוח מייל קצר עם תיאור העסק והתהליך הידני שמפריע לך, ואחזור עם
          כיוון ראשוני וברור.
        </p>
      </div>

      <a
        className="contact-card"
        href="mailto:gsmartops@gmail.com"
        aria-label="שליחת מייל אל gsmartops@gmail.com"
      >
        <span className="contact-card__label">אימייל</span>
        <strong>gsmartops@gmail.com</strong>
      </a>
    </section>
  );
}
