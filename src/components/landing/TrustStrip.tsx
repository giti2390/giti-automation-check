const trustItems = [
  {
    icon: "✓",
    title: "פחות טעויות",
    text: "פחות העתקות ידניות ופחות פספוסים קטנים בדרך.",
  },
  {
    icon: "⚙",
    title: "פחות עבודה ידנית",
    text: "פעולות שחוזרות על עצמן הופכות לתהליך קבוע.",
  },
  {
    icon: "☰",
    title: "יותר סדר",
    text: "כל פנייה, לקוח ומשימה מקבלים מקום ברור.",
  },
  {
    icon: "◷",
    title: "יותר זמן לעסק",
    text: "פחות מרדף אחרי עדכונים ויותר זמן לעבודה שמכניסה ערך.",
  },
];

export function TrustStrip() {
  return (
    <section className="section-shell trust-grid" aria-label="יתרונות השירות">
      {trustItems.map((item) => (
        <article className="trust-card" key={item.title}>
          <span className="trust-card__icon" aria-hidden="true">
            {item.icon}
          </span>
          <h3>{item.title}</h3>
          <p>{item.text}</p>
        </article>
      ))}
    </section>
  );
}
