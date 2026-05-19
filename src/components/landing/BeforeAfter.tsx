const beforeItems = [
  "אקסלים שמתעדכנים ידנית",
  "הודעות שנשלחות אחת-אחת",
  "מעקב לקוחות בראש או במחברת",
  "Follow-ups שנשכחים בזמן עומס",
];

const afterItems = [
  "מערכת מסודרת לפי סטטוסים",
  "הודעות ותזכורות שנשלחות בזמן",
  "דוחות פשוטים שמראים מה קורה",
  "תהליך ברור שחוסך זמן כל שבוע",
];

export function BeforeAfter() {
  return (
    <section className="section-shell before-after" aria-labelledby="before-after-title">
      <div className="section-heading section-heading--center">
        <p className="eyebrow">לפני ואחרי</p>
        <h2 id="before-after-title">אפשר להפוך עומס ידני לתהליך מסודר</h2>
        <p>
          לא חייבים מערכת גדולה. לפעמים מספיק לחבר נכון בין הטפסים, הגיליונות,
          הוואטסאפ והתזכורות שכבר קיימים בעסק.
        </p>
      </div>

      <div className="comparison">
        <article className="comparison-card comparison-card--before">
          <span className="comparison-card__label">לפני</span>
          <h3>הרבה עבודה ידנית</h3>
          <ul>
            {beforeItems.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </article>

        <div className="comparison-arrow" aria-hidden="true">
          ←
        </div>

        <article className="comparison-card comparison-card--after">
          <span className="comparison-card__label">אחרי</span>
          <h3>תהליך אוטומטי וברור</h3>
          <ul>
            {afterItems.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </article>
      </div>
    </section>
  );
}
