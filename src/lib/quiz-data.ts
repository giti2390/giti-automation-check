export type AutomationCategory =
  | "internalTools"
  | "sheets"
  | "whatsapp"
  | "leads"
  | "followups";

export type QuizOption = {
  label: string;
  score: number;
};

export type QuizQuestion = {
  id: string;
  title: string;
  helper: string;
  category: AutomationCategory;
  options: QuizOption[];
};

export type QuizAnswerMap = Record<string, number>;

export type AutomationLevel = "נמוכה" | "בינונית" | "גבוהה";

export const categoryRecommendations: Record<AutomationCategory, string> = {
  internalTools: "כלי ניהול פנימיים שמרכזים משימות חוזרות במקום אחד",
  sheets: "אוטומציית גיליונות: סידור נתונים, חישובים ועדכונים אוטומטיים",
  whatsapp: "אוטומציות וואטסאפ לשליחת הודעות, אישורים ועדכונים ללקוחות",
  leads: "מעקב לידים וסטטוסים כדי שלא תאבדו פניות בדרך",
  followups: "תזכורות אוטומטיות ודוחות שמציפים מה צריך טיפול",
};

export const quizQuestions: QuizQuestion[] = [
  {
    id: "manual-tasks",
    title: "כמה זמן ביום את/ה מקדיש/ה למשימות ידניות חוזרות באותו פורמט?",
    helper: "למשל העתקת פרטים, פתיחת משימות, עדכון רשימות או שליחת אותו טקסט שוב ושוב.",
    category: "internalTools",
    options: [
      { label: "כמעט ולא", score: 0 },
      { label: "עד חצי שעה", score: 1 },
      { label: "בין שעה לשעתיים", score: 2 },
      { label: "יותר משעתיים ביום", score: 3 },
    ],
  },
  {
    id: "sheets",
    title: "כמה העסק נשען על Excel או Google Sheets?",
    helper: "גיליונות הם כלי נהדר, אבל כשהם הופכים למרכז העסק צריך לבדוק מה אפשר לאוטומט.",
    category: "sheets",
    options: [
      { label: "לא משתמש/ת בכלל", score: 0 },
      { label: "מעט, רק לסיכומים", score: 1 },
      { label: "הרבה, גליונות מרכזיים", score: 2 },
      { label: "זה הלב של העסק", score: 3 },
    ],
  },
  {
    id: "manual-messages",
    title: "כמה הודעות ידניות את/ה שולח/ת ללקוחות בשבוע?",
    helper: "אישורים, תזכורות, מעקבים",
    category: "whatsapp",
    options: [
      { label: "פחות מ-5", score: 0 },
      { label: "בין 5 ל-20", score: 1 },
      { label: "בין 20 ל-50", score: 2 },
      { label: "יותר מ-50 בשבוע", score: 3 },
    ],
  },
  {
    id: "statuses",
    title: "איך מתבצע מעקב אחרי פניות וסטטוסים?",
    helper: "למשל: לקוח חדש, מחכה להצעת מחיר, צריך חזרה, שילם, נשלח, נסגר.",
    category: "leads",
    options: [
      { label: "מערכת מסודרת שעובדת מצוין", score: 0 },
      { label: "מערכת חלקית, חלק ידני", score: 1 },
      { label: "בעיקר ידני, בראש ובפתקים", score: 2 },
      { label: "אין מעקב מסודר בכלל", score: 3 },
    ],
  },
  {
    id: "followups",
    title: "באיזו תדירות follow-ups נשכחים?",
    helper: "Follow-up הוא המשך טיפול: לחזור ללקוח, להזכיר תשלום, לבדוק אם התקבלה החלטה.",
    category: "followups",
    options: [
      { label: "כמעט אף פעם", score: 0 },
      { label: "לפעמים", score: 1 },
      { label: "די הרבה", score: 2 },
      { label: "כל הזמן, מפסיד/ה עסקאות", score: 3 },
    ],
  },
];

export function calculateTotalScore(answers: QuizAnswerMap) {
  return Object.values(answers).reduce((total, score) => total + score, 0);
}

export function getAutomationLevel(score: number): AutomationLevel {
  if (score <= 5) return "נמוכה";
  if (score <= 10) return "בינונית";
  return "גבוהה";
}

export function getLevelMessage(level: AutomationLevel) {
  if (level === "נמוכה") {
    return "נראה שהעסק שלך כבר יחסית מסודר, אבל יכול להיות שיש נקודות קטנות שיחסכו זמן בלי לשנות את כל צורת העבודה.";
  }

  if (level === "בינונית") {
    return "יש אצלך כמה תהליכים ידניים שחוזרים על עצמם. זו בדיוק הנקודה שבה אוטומציה קטנה יכולה להתחיל להחזיר זמן מהר.";
  }

  return "יש כאן פוטנציאל משמעותי לאוטומציה. כנראה שחלק מהעבודה היומיומית שלך יכול להפוך לתהליך מסודר, מהיר ופחות תלוי בזיכרון.";
}

export function getRecommendations(answers: QuizAnswerMap) {
  const categories = quizQuestions
    .filter((question) => (answers[question.id] ?? 0) >= 2)
    .map((question) => question.category);

  const uniqueCategories = Array.from(new Set(categories));

  if (uniqueCategories.length === 0) {
    return [
      "מיפוי קצר של תהליך העבודה כדי למצוא חיסכון קטן ומהיר",
      "תבנית מסודרת לניהול משימות או לקוחות בלי להעמיס על העסק",
    ];
  }

  return uniqueCategories.map((category) => categoryRecommendations[category]);
}
