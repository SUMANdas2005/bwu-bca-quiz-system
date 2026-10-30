import React from "react";
import questionsData from "../../data/questions";

function AdminStudentPaperModal({ submission, onClose }) {
  if (!submission) return null;

  // Resolve question breakdown (from saved details or fallback to question bank)
  const getQuestionsList = () => {
    if (submission.details && Array.isArray(submission.details) && submission.details.length > 0) {
      return submission.details;
    }

    // Fallback for legacy records saved before this update
    const bank = questionsData?.[submission.subject]?.[submission.difficulty] || [];
    return bank.map((q, idx) => {
      const isSimulatedCorrect = idx < (submission.score || 0);
      return {
        id: q.id || idx + 1,
        question: q.question,
        options: q.options || [],
        studentAnswer: isSimulatedCorrect
          ? q.correctAnswer
          : q.options?.find((opt) => opt !== q.correctAnswer) || "Option A",
        correctAnswer: q.correctAnswer,
        isCorrect: isSimulatedCorrect,
      };
    });
  };

  const questionsList = getQuestionsList();

  const correctCount = questionsList.filter((q) => q.isCorrect).length;
  const unansweredCount = questionsList.filter(
    (q) => !q.studentAnswer || q.studentAnswer === "Unanswered"
  ).length;
  const wrongCount = questionsList.length - correctCount - unansweredCount;

  return (
    <div className="paper-modal-overlay" onClick={onClose}>
      <div
        className="paper-modal-container"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Top Header */}
        <div className="paper-modal-header">
          <div>
            <div className="paper-uni-tag">Brainware University • CSS Examination Review</div>
            <h2>Student Answer Sheet & Evaluation</h2>
            <div className="paper-meta-sub">
              <strong>{submission.name}</strong> • 
              <code className="roll-badge-inline">{submission.studentCode}</code> • 
              <span>{submission.subject} ({submission.difficulty})</span> • 
              <span>Date: {submission.date}</span>
            </div>
          </div>
          <button
            type="button"
            className="paper-modal-close"
            onClick={onClose}
            title="Close Paper"
          >
            ✕
          </button>
        </div>

        {/* Score Summary Banner */}
        <div className="paper-score-banner">
          <div className="paper-score-stat">
            <span className="stat-label">Total Score</span>
            <span className="stat-val highlight">
              {submission.score} / {submission.total} ({submission.percentage}%)
            </span>
          </div>

          <div className="paper-score-stat">
            <span className="stat-label">Correct Answers</span>
            <span className="stat-val correct">✓ {correctCount}</span>
          </div>

          <div className="paper-score-stat">
            <span className="stat-label">Wrong Answers</span>
            <span className="stat-val wrong">✕ {wrongCount}</span>
          </div>

          {unansweredCount > 0 && (
            <div className="paper-score-stat">
              <span className="stat-label">Unanswered</span>
              <span className="stat-val unanswered">— {unansweredCount}</span>
            </div>
          )}
        </div>

        {/* Question by Question Inspection List */}
        <div className="paper-questions-scroll">
          {questionsList.map((item, idx) => {
            const hasAnswered = item.studentAnswer !== null && item.studentAnswer !== undefined && item.studentAnswer !== "";
            const isCorrect = item.isCorrect;

            return (
              <div
                key={idx}
                className={`paper-q-card ${isCorrect ? "q-correct" : hasAnswered ? "q-wrong" : "q-unanswered"}`}
              >
                <div className="paper-q-header">
                  <div className="q-badge-wrap">
                    <span className="q-number-pill">Question {idx + 1}</span>
                    <span
                      className={`q-verdict-badge ${
                        isCorrect ? "badge-correct" : hasAnswered ? "badge-wrong" : "badge-unanswered"
                      }`}
                    >
                      {isCorrect ? "✓ Correct (+1 Mark)" : hasAnswered ? "✕ Wrong (0 Mark)" : "— Unanswered (0 Mark)"}
                    </span>
                  </div>
                </div>

                <h4 className="paper-q-text">{item.question}</h4>

                {/* 4 Options Grid */}
                <div className="paper-options-list">
                  {item.options &&
                    item.options.map((option, optIdx) => {
                      const isStudentChoice = option === item.studentAnswer;
                      const isCorrectChoice = option === item.correctAnswer;

                      let optionClass = "paper-opt";
                      if (isStudentChoice && isCorrect) {
                        optionClass += " opt-student-correct";
                      } else if (isStudentChoice && !isCorrect) {
                        optionClass += " opt-student-wrong";
                      } else if (isCorrectChoice) {
                        optionClass += " opt-is-correct-answer";
                      }

                      return (
                        <div key={optIdx} className={optionClass}>
                          <span className="opt-letter">
                            {String.fromCharCode(65 + optIdx)}.
                          </span>
                          <span className="opt-text">{option}</span>
                          {isStudentChoice && (
                            <span className="choice-tag student">
                              {isCorrect ? "Student Selected ✓" : "Student Selected ✕"}
                            </span>
                          )}
                          {!isStudentChoice && isCorrectChoice && (
                            <span className="choice-tag correct">
                              Correct Answer ✓
                            </span>
                          )}
                        </div>
                      );
                    })}
                </div>

                {/* Detailed Answer Summary */}
                <div className="paper-answer-summary-row">
                  <div className="ans-summary-box student-box">
                    <span className="ans-label">Student Given Answer:</span>
                    <strong className={isCorrect ? "text-success" : "text-danger"}>
                      {hasAnswered ? item.studentAnswer : "(Not Attempted)"}
                    </strong>
                  </div>
                  <div className="ans-summary-box correct-box">
                    <span className="ans-label">Official Correct Answer:</span>
                    <strong className="text-primary">{item.correctAnswer}</strong>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Modal Actions Footer */}
        <div className="paper-modal-footer">
          <button
            type="button"
            className="paper-close-btn"
            onClick={onClose}
          >
            Close Paper
          </button>
        </div>
      </div>
    </div>
  );
}

export default AdminStudentPaperModal;
