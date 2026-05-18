import type { QuizQuestion as QuizQuestionType } from "../../lib/quiz-data";

type QuizQuestionProps = {
  question: QuizQuestionType;
  selectedScore?: number;
  onSelect: (score: number) => void;
};

export function QuizQuestion({ question, selectedScore, onSelect }: QuizQuestionProps) {
  return (
    <fieldset className="quiz-question slide-in">
      <legend>
        <span>{question.title}</span>
        <small>{question.helper}</small>
      </legend>

      <div className="option-grid" role="radiogroup" aria-label={question.title}>
        {question.options.map((option) => {
          const isSelected = selectedScore === option.score;

          return (
            <label className={`option-card ${isSelected ? "is-selected" : ""}`} key={option.score}>
              <input
                type="radio"
                name={question.id}
                value={option.score}
                checked={isSelected}
                onChange={() => onSelect(option.score)}
              />
              <span className="option-card__title">{option.label}</span>
            </label>
          );
        })}
      </div>
    </fieldset>
  );
}
