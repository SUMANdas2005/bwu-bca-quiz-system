function Review({
  user,
  settings,
  questions,
  answers,
  onBackToResult,
  onReattempt,
}) {
  const getStatus = (question, userAnswer) => {
    if (!userAnswer) {
      return "unanswered";
    }

    const correct = question.correctAnswer || question.answer;
    return userAnswer === correct
      ? "correct"
      : "wrong";
  };

  return (
    <div className="review-page">
      <div className="review-card">

        <div className="review-header">
          <div>
            <h1>Answer Review</h1>
            <p>
              {settings.subject} • {settings.difficulty}
            </p>
          </div>

          <div className="review-student">
            <strong>{user.name}</strong>
            <span>{user.studentCode}</span>
          </div>
        </div>

        <div className="review-list">

          {questions.map((question, index) => {
            const userAnswer = answers[index];
            const status = getStatus(question, userAnswer);

            return (
              <div
                key={index}
                className={`review-item ${status}`}
              >

                <div className="review-question-top">
                  <span className="review-number">
                    Question {index + 1}
                  </span>

                  <span className={`review-status ${status}`}>
                    {status === "correct" && "✓ Correct"}
                    {status === "wrong" && "✕ Wrong"}
                    {status === "unanswered" && "— Unanswered"}
                  </span>
                </div>

                <h2>{question.question}</h2>

                <div className="answer-box user-answer">
                  <span>Your Answer</span>

                  <strong>
                    {userAnswer || "Not answered"}
                  </strong>
                </div>

                <div className="answer-box correct-answer">
                  <span>Correct Answer</span>

                  <strong>
                    {question.correctAnswer || question.answer}
                  </strong>
                </div>

              </div>
            );
          })}

        </div>

        <div className="review-actions">

          <button
            type="button"
            className="back-result-button"
            onClick={onBackToResult}
          >
            ← Back to Result
          </button>

          <button
            type="button"
            className="reattempt-button"
            onClick={onReattempt}
          >
            Reattempt Quiz
          </button>

        </div>

      </div>
    </div>
  );
}

export default Review;