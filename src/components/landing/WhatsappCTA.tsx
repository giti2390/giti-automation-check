import { buildWhatsappLink } from "../../lib/whatsapp";

export function WhatsappCTA() {
  return (
    <section className="section-shell final-cta" aria-labelledby="cta-title">
      <p className="eyebrow">צעד קטן שמחזיר זמן</p>
      <h2 id="cta-title">רוצה לדעת בדיוק איזה אוטומציה תתאים לעסק שלך?</h2>
      <p>
       שלח/י לי הודעה בווטסאפ ותקבל/י רעיון אישי לאוטומציה - חינם, בלי התחייבות.
      </p>
      <a className="button button--primary button--large button--whatsapp" href={buildWhatsappLink()}>
        <span className="button__icon" aria-hidden="true">
          <svg viewBox="0 0 24 24" role="img">
            <path d="M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719" />
          </svg>
        </span>
        לקבלת רעיון חינם לאוטומציה לעסק שלי
      </a>
    </section>
  );
}
