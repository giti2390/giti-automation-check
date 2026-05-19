type LegalPageProps = {
  type: "privacy" | "terms" | "accessibility";
};

const privacySections = [
  {
    title: "איזה מידע נאסף",
    body: "האתר עשוי לאסוף מידע בסיסי שנשלח מרצון, כמו תוכן פנייה במייל או בוואטסאפ, וכן מידע אנליטי בסיסי דרך Vercel Analytics לצורך הבנת שימוש באתר.",
  },
  {
    title: "איך משתמשים במידע",
    body: "המידע משמש למענה לפניות, שיפור השירות, הבנת צרכי בעלי עסקים קטנים ושיפור חוויית המשתמש באתר.",
  },
  {
    title: "שיתוף מידע",
    body: "לא נמכור מידע אישי לצדדים שלישיים. ייתכן שימוש בשירותים טכנולוגיים חיצוניים, כמו Vercel, לצורך הפעלת האתר והמדידה האנליטית.",
  },
  {
    title: "יצירת קשר ובקשות פרטיות",
    body: "אפשר לפנות בכל שאלה, בקשה לעדכון או מחיקת מידע לכתובת gsmartops@gmail.com.",
  },
];

const termsSections = [
  {
    title: "שימוש באתר",
    body: "השימוש באתר מיועד לקבלת מידע ראשוני על שירותי אוטומציה לעסקים קטנים ולפנייה לקבלת רעיון או בדיקה ראשונית.",
  },
  {
    title: "מידע באתר",
    body: "המידע באתר הוא כללי ואינו מהווה התחייבות לתוצאה עסקית מסוימת. התאמת פתרון אוטומציה נעשית לפי צרכי העסק בפועל.",
  },
  {
    title: "אחריות",
    body: "השירותים ניתנים בהתאם לסיכום פרטני מול הלקוח. אין להשתמש באתר או בשירות באופן שמפר זכויות, חוק או פרטיות של צד שלישי.",
  },
  {
    title: "יצירת קשר",
    body: "לשאלות לגבי תנאי השימוש ניתן לפנות לכתובת gsmartops@gmail.com.",
  },
];

const accessibilitySections = [
  {
    title: "מחויבות לנגישות",
    body: "האתר נבנה במטרה להיות נגיש, ברור ונוח לשימוש עבור כלל המשתמשים, כולל אנשים עם מוגבלויות, בהתאם לעקרונות WCAG 2.1 ברמת AA ככל האפשר באתר תדמיתי קטן.",
  },
  {
    title: "התאמות שבוצעו באתר",
    body: "האתר כולל מבנה סמנטי, תמיכה ב-RTL, ניווט מקלדת בסיסי, מצבי פוקוס ברורים, טקסטים חלופיים לתמונות, כפתור דילוג לתוכן, אפשרות הגדלת טקסט, ניגודיות גבוהה והפחתת אנימציות.",
  },
  {
    title: "תפריט נגישות",
    body: "באתר מופיע כפתור נגישות צף שמאפשר להגדיל טקסט, להפעיל ניגודיות גבוהה, להפחית אנימציות ולאפס את ההגדרות.",
  },
  {
    title: "פנייה בנושא נגישות",
    body: "אם נתקלת בבעיה או חסם נגישות באתר, אפשר לפנות לכתובת gsmartops@gmail.com עם תיאור הבעיה, סוג המכשיר והדפדפן, ואפעל לתקן את הנושא בהקדם האפשרי.",
  },
];

export function LegalPage({ type }: LegalPageProps) {
  const isPrivacy = type === "privacy";
  const isAccessibility = type === "accessibility";
  const title = isAccessibility ? "הצהרת נגישות" : isPrivacy ? "מדיניות פרטיות" : "תנאי שימוש";
  const subtitle = isAccessibility
    ? "פירוט התאמות הנגישות באתר ודרך לפנות במקרה של בעיית נגישות."
    : isPrivacy
      ? "הסבר קצר וברור על המידע שנאסף באתר ואיך משתמשים בו."
      : "הכללים הבסיסיים לשימוש באתר ובמידע שמופיע בו.";
  const sections = isAccessibility ? accessibilitySections : isPrivacy ? privacySections : termsSections;

  return (
    <article className="legal-page section-shell" aria-labelledby="legal-title">
      <a className="button button--ghost legal-page__back" href="/">
        חזרה לעמוד הבית
      </a>

      <header className="legal-page__header">
        <p className="eyebrow">Giti Automation</p>
        <h1 id="legal-title">{title}</h1>
        <p>{subtitle}</p>
        <small>עודכן לאחרונה: מאי 2026</small>
      </header>

      <div className="legal-page__content">
        {sections.map((section, index) => (
          <section key={section.title} aria-labelledby={`legal-section-${index}`}>
            <h2 id={`legal-section-${index}`}>{section.title}</h2>
            <p>{section.body}</p>
          </section>
        ))}
      </div>
    </article>
  );
}
