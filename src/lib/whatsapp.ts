export const GITI_WHATSAPP_NUMBER = "972515141355";

export function buildWhatsappLink(message?: string) {
  const text =
    message ??
      "היי גיטי, עשיתי את הבדיקה באתר ואני רוצה לשמוע איזו אוטומציה יכולה להתאים לעסק שלי"; 
  return `https://wa.me/${GITI_WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
}
