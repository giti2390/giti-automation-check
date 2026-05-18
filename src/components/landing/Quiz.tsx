import { useMemo, useState } from "react";
import {
  calculateTotalScore,
  getAutomationLevel,
  quizQuestions,
  type QuizAnswerMap,
} from "../../lib/quiz-data";
import { QuizQuestion } from "./QuizQuestion";
import { ResultCard } from "./ResultCard";

export function Quiz() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState<QuizAnswerMap>({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const currentQuestion = quizQuestions[currentIndex];
  const answeredCount = Object.keys(answers).length;
  const progress = isSubmitted
    ? 100
    : Math.round((answeredCount / quizQuestions.length) * 100);
  const totalScore = useMemo(() => calculateTotalScore(answers), [answers]);
  const level = getAutomationLevel(totalScore);
  const canGoBack = currentIndex > 0;
  const isLastQuestion = currentIndex === quizQuestions.length - 1;
  const currentAnswer = answers[currentQuestion.id];

  function selectAnswer(score: number) {
    setAnswers((previous) => ({
      ...previous,
      [currentQuestion.id]: score,
    }));
  }

  function goNext() {
    if (currentAnswer === undefined) return;

    if (isLastQuestion) {
      setIsSubmitted(true);
      return;
    }

    setCurrentIndex((index) => index + 1);
  }

  function restartQuiz() {
    setAnswers({});
    setCurrentIndex(0);
    setIsSubmitted(false);
  }

  return (
    <section className="section-shell quiz-section" id="quiz" aria-labelledby="quiz-title">
      <div className="section-heading section-heading--center">
        <p className="eyebrow">בדיקה קצרה</p>
        <h2 id="quiz-title">5 שאלות. דקה אחת. תוצאה אישית.</h2>
        <p>
          עונים על 5 שאלות קצרות ומקבלים כיוון ראשוני לאוטומציות שיכולות
          להתאים לעסק שלך.
        </p>
      </div>

      {!isSubmitted ? (
        <div className="quiz-card">
          <div className="quiz-progress">
            <span>
              שאלה {currentIndex + 1} מתוך {quizQuestions.length}
            </span>
            <strong>{progress}%</strong>
          </div>
          <div className="progress-track" aria-hidden="true">
            <span style={{ width: `${progress}%` }} />
          </div>

          <QuizQuestion
            key={currentQuestion.id}
            question={currentQuestion}
            selectedScore={currentAnswer}
            onSelect={selectAnswer}
          />

          <div className="quiz-actions">
            <button
              className="button button--ghost"
              type="button"
              onClick={() => setCurrentIndex((index) => index - 1)}
              disabled={!canGoBack}
            >
              חזרה
            </button>
            <button
              className="button button--primary"
              type="button"
              onClick={goNext}
              disabled={currentAnswer === undefined}
            >
              {isLastQuestion ? "להציג תוצאה" : "המשך"}
            </button>
          </div>
        </div>
      ) : (
        <ResultCard level={level} score={totalScore} answers={answers} onRestart={restartQuiz} />
      )}
    </section>
  );
}
