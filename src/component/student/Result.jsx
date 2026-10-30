import React from "react";

function Result({
  user,
  settings,
  questions,
  answers,
  onReview,
  onReattempt,
  onChangeQuiz,
  onGoHome,
}) {
  const correctCount = questions.reduce((total, question, index) => {
    const correct = question.correctAnswer || question.answer;
    return total + (answers[index] === correct ? 1 : 0);
  }, 0);

  const wrongCount = questions.length - correctCount;

  const percentage = Math.round(
    (correctCount / questions.length) * 100
  );

  return (
    <div className="result-page">
      <div className="result-card">

        <div className="result-icon">✓</div>

        <h1>Quiz Completed!</h1>

        <p className="result-subtitle">
          Great job, {user.name}!
        </p>

        <div className="quiz-details">
          <span>{settings.subject}</span>
          <span>{settings.difficulty}</span>
        </div>

        <div className="score-box">
          <div className="score">
            {correctCount}
            <span> / {questions.length}</span>
          </div>

          <div className="percentage">
            {percentage}%
          </div>
        </div>

        <div className="result-stats">

          <div className="stat correct-stat">
            <span className="stat-number">
              {correctCount}
            </span>
            <span className="stat-label">
              Correct
            </span>
          </div>

          <div className="stat wrong-stat">
            <span className="stat-number">
              {wrongCount}
            </span>
            <span className="stat-label">
              Wrong
            </span>
          </div>

          <div className="stat total-stat">
            <span className="stat-number">
              {questions.length}
            </span>
            <span className="stat-label">
              Total
            </span>
          </div>

        </div>

        <div className="result-actions">

          <button
            type="button"
            className="review-button"
            onClick={onReview}
          >
            Review Answers
          </button>

          <button
            type="button"
            className="reattempt-button"
            onClick={onReattempt}
          >
            Reattempt Quiz
          </button>

            <button
  type="button"
  className="change-result-button"
  onClick={onChangeQuiz}
>
  Change Subject / Difficulty
</button>

        </div>

        {onGoHome && (
          <button
            type="button"
            className="home-return-btn"
            onClick={onGoHome}
            style={{
              width: "100%",
              marginTop: "14px",
              padding: "12px",
              backgroundColor: "#f3f4f6",
              color: "#374151",
              border: "1px solid #d1d5db",
              borderRadius: "10px",
              fontWeight: "600",
              fontSize: "14px",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "8px",
              transition: "all 0.2s ease",
            }}
          >
            🏠 Back to Front Page
          </button>
        )}

      </div>
    </div>
  );
}

export default Result;