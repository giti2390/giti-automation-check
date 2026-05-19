export function Footer() {
  return (
    <footer className="footer" aria-label="כותרת תחתונה">
      <div className="footer__brand">
        <a className="footer__logo" href="/" aria-label="Giti Automation - עמוד הבית">
          <img src="/logo.png" alt="Giti" />
        </a>
        <p>
          אוטומציות פשוטות לעסקים קטנים: פחות עבודה ידנית, יותר סדר ויותר זמן
          לעסק.
        </p>
      </div>

      <nav className="footer__nav" aria-label="קישורי אתר">
        <a href="/privacy">מדיניות פרטיות</a>
        <a href="/terms">תנאי שימוש</a>
        <a href="/accessibility">הצהרת נגישות</a>
        <a href="mailto:gsmartops@gmail.com">gsmartops@gmail.com</a>
      </nav>

      <div className="footer__meta">
        <span>Giti Automation</span>
        <span>© {new Date().getFullYear()} כל הזכויות שמורות</span>
      </div>
    </footer>
  );
}
