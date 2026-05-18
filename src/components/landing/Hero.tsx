import { buildWhatsappLink } from "../../lib/whatsapp";

const microCopy = [
  "עדיין מעדכנים אקסלים ידנית?",
  "שולחים הודעות אחת-אחת?",
  "שוכחים לעקוב אחרי לקוחות?",
];

export function Hero() {
  return (
    <section className="hero section-shell" aria-labelledby="hero-title">
      <div className="hero__content fade-in">
        <div className="brand-logo">
          <img src="/logo.png" alt="Giti" className="brand-logo__image" />
        </div>
        <h1 id="hero-title">פחות התעסקות. יותר זמן לעבוד ולהרוויח</h1>
        <p className="hero__subtitle">
          אבחון קצר שמראה איפה העסק שלך מבזבז זמן על עבודה ידנית, ומה אפשר
          להפוך לאוטומטי בצורה פשוטה וברורה.
        </p>

        <div className="hero__actions">
          <a className="button button--primary" href="#quiz">
            בדיקה חינם לעסק שלי
          </a>
          <a className="button button--ghost button--whatsapp" href={buildWhatsappLink()}>
            <span className="button__icon" aria-hidden="true">
              <svg viewBox="0 0 24 24" role="img">
                <path d="M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719" />
              </svg>
            </span>
            לדבר בוואטסאפ
          </a>
        </div>
      </div>

      <div className="hero-visual scale-in" aria-hidden="true">
        <div className="flow-card flow-card--top">
          <span className="mini-icon">↗</span>
          <strong>פנייה חדשה</strong>
          <small>נכנסת למעקב מסודר</small>
        </div>
        <div className="flow-line" />
        <div className="flow-card flow-card--middle">
          <span className="mini-icon">⚙</span>
          <strong>אוטומציה פשוטה</strong>
          <small>עדכון, הודעה, תזכורת</small>
        </div>
        <div className="flow-line flow-line--short" />
        <div className="flow-card flow-card--bottom">
          <span className="mini-icon">✓</span>
          <strong>עסק מסודר יותר</strong>
          <small>פחות שכחה, פחות עבודה ידנית</small>
        </div>
      </div>
    </section>
  );
}
