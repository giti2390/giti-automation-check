import {
  type AutomationLevel,
  getLevelMessage,
  getRecommendations,
  type QuizAnswerMap,
} from "../../lib/quiz-data";
import { buildWhatsappLink } from "../../lib/whatsapp";

type ResultCardProps = {
  level: AutomationLevel;
  score: number;
  answers: QuizAnswerMap;
  onRestart: () => void;
};

export function ResultCard({ level, score, answers, onRestart }: ResultCardProps) {
  const recommendations = getRecommendations(answers);

  return (
    <article className="result-card scale-in" aria-live="polite">
      <div className="result-card__header">
        <p className="eyebrow">התוצאה שלך</p>
        <span className="score-pill">{score}/15</span>
      </div>
      <h2> כמות עבודה ידנית: {level}</h2>
      <p>{getLevelMessage(level)}</p>

      <div className="recommendations">
        <h3>אוטומציות אפשריות לעסק שלך</h3>
        <ul>
          {recommendations.map((recommendation) => (
            <li key={recommendation}>{recommendation}</li>
          ))}
        </ul>
      </div>

      <div className="result-card__actions">
        <a className="button button--primary button--whatsapp" href={buildWhatsappLink()}>
          <span className="button__icon" aria-hidden="true">
            <svg viewBox="0 0 24 24" role="img">
              <path d="M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719" />
            </svg>
          </span>
        לקבלת רעיון חינם לאוטומציה לעסק שלי
        </a>
        <button className="button button--ghost" type="button" onClick={onRestart}>
          למלא שוב
        </button>
      </div>
    </article>
  );
}
