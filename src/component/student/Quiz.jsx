import { useEffect, useState } from "react";
import "./Quiz.css";

const QUESTION_TIME = 30;

function Quiz({ user, settings, questions, onFinish }) {
  const [currentQuestion, setCurrentQuestion] = useState(0);

  const [selectedAnswers, setSelectedAnswers] = useState(
    Array(questions.length).fill(null)
  );

  // যে প্রশ্ন একবার Next চাপার পরে permanently locked হবে
  const [lockedQuestions, setLockedQuestions] = useState([]);

  // Current question-এর timer
  const [timeLeft, setTimeLeft] = useState(QUESTION_TIME);

  // Prevent multiple submits
  const [isSubmitting, setIsSubmitting] = useState(false);

  const question = questions[currentQuestion];

  const isLocked = lockedQuestions.includes(currentQuestion);

  const isTimeOver = timeLeft === 0;

  // ==========================================
  // TIMER
  // ==========================================

  useEffect(() => {
    // Locked question-এর timer চলবে না
    if (isLocked) {
      return;
    }

    // নতুন unlocked question হলে 30 seconds
    setTimeLeft(QUESTION_TIME);

    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          return 0;
        }

        return prev - 1;
      });
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, [currentQuestion, isLocked]);

  // ==========================================
  // SELECT ANSWER
  // ==========================================

  const handleAnswer = (answer) => {
    // Locked question → change করা যাবে না
    if (isLocked) {
      return;
    }

    // Time শেষ → answer করা যাবে না
    if (isTimeOver) {
      return;
    }

    const updatedAnswers = [...selectedAnswers];

    updatedAnswers[currentQuestion] = answer;

    setSelectedAnswers(updatedAnswers);
  };

  // ==========================================
  // CLEAR ANSWER
  // ==========================================

  const handleClearAnswer = () => {
    // Locked হলে clear করা যাবে না
    if (isLocked) {
      return;
    }

    // Time শেষ হলে clear করা যাবে না
    if (isTimeOver) {
      return;
    }

    const updatedAnswers = [...selectedAnswers];

    updatedAnswers[currentQuestion] = null;

    setSelectedAnswers(updatedAnswers);
  };

  // ==========================================
  // NEXT
  // ==========================================

  const handleNext = () => {
    const answer = selectedAnswers[currentQuestion];

    // ------------------------------------------
    // যদি question আগে থেকেই LOCKED হয়
    // তাহলে answer থাকুক বা না থাকুক
    // Next অবশ্যই কাজ করবে
    // ------------------------------------------

    if (isLocked) {
      if (currentQuestion < questions.length - 1) {
        setCurrentQuestion((prev) => prev + 1);
      }

      return;
    }

    // ------------------------------------------
    // Timer চলছে + answer দেওয়া হয়নি
    // → Next যাবে না
    // ------------------------------------------

    if (timeLeft > 0 && answer === null) {
      return;
    }

    // ------------------------------------------
    // Current question permanently LOCK
    // ------------------------------------------

    setLockedQuestions((prev) => {
      if (prev.includes(currentQuestion)) {
        return prev;
      }

      return [...prev, currentQuestion];
    });

    // ------------------------------------------
    // Next question
    // ------------------------------------------

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion((prev) => prev + 1);
    }
  };

  // ==========================================
  // PREVIOUS
  // ==========================================

  const handlePrevious = () => {
    if (currentQuestion === 0) {
      return;
    }

    setCurrentQuestion((prev) => prev - 1);
  };

  // ==========================================
  // SUBMIT
  // ==========================================

  const handleSubmit = () => {
    if (isSubmitting) return;
    setIsSubmitting(true);
    onFinish(selectedAnswers);
  };

  // ==========================================
  // QUESTION NOT FOUND
  // ==========================================

  if (!question) {
    return (
      <div className="empty-quiz">
        <h1>Question Not Found</h1>
      </div>
    );
  }

  // ==========================================
  // TIMER WARNING
  // ==========================================

  const isWarning =
    !isLocked &&
    timeLeft <= 10 &&
    timeLeft > 0;

  return (
    <div className="quiz-page">

      <div className="quiz-card">

        {/* ======================================
            HEADER
        ====================================== */}

        <div className="quiz-top">

          <div>
            <h1>
              {settings?.subject || "Quiz"} Quiz
            </h1>

            <p>
              {settings?.difficulty || "Level"} Level
            </p>
          </div>

          <div className="student-info">

            <strong>
              {user?.name || "Student"}
            </strong>

            <span>
              {user?.studentCode || ""}
            </span>

          </div>

        </div>


        {/* ======================================
            PROGRESS
        ====================================== */}

        <div className="progress-section">

          <div className="question-count">

            <span>
              Question {currentQuestion + 1} of{" "}
              {questions.length}
            </span>


            {/* TIMER */}

            {isLocked ? (

              <div className="question-timer timer-locked">
                🔒 Locked
              </div>

            ) : (

              <div
                className={`question-timer ${
                  isWarning
                    ? "timer-warning"
                    : isTimeOver
                    ? "timer-expired"
                    : ""
                }`}
              >

                <span>⏱</span>

                <span>
                  00:
                  {String(timeLeft).padStart(2, "0")}
                </span>

              </div>

            )}

          </div>


          {/* PROGRESS BAR */}

          <div className="progress-bar">

            <div
              className="progress-fill"
              style={{
                width: `${
                  ((currentQuestion + 1) /
                    questions.length) *
                  100
                }%`,
              }}
            />

          </div>

        </div>


        {/* ======================================
            LOCKED MESSAGE
        ====================================== */}

        {isLocked && (

          <div className="locked-message">

            <span>🔒</span>

            <div>

              <strong>
                Question Locked
              </strong>

              <p>
                You can view your answer, but it
                cannot be changed.
              </p>

            </div>

          </div>

        )}


        {/* ======================================
            TIME OVER MESSAGE
        ====================================== */}

        {!isLocked && isTimeOver && (

          <div className="time-over-message">

            <span>⏱</span>

            <div>

              <strong>
                Time's up!
              </strong>

              <p>
                You cannot answer this question now.
                Click Next to continue.
              </p>

            </div>

          </div>

        )}


        {/* ======================================
            TIMER WARNING
        ====================================== */}

        {!isLocked && isWarning && (

          <div className="time-warning-message">
            ⏳ Only {timeLeft} seconds remaining
          </div>

        )}


        {/* ======================================
            QUESTION
        ====================================== */}

        <div className="question-section">

          <h2>
            {question.question}
          </h2>


          {/* OPTIONS */}

          <div className="options">

            {question.options.map(
              (option, index) => {

                const isSelected =
                  selectedAnswers[
                    currentQuestion
                  ] === option;

                return (

                  <button
                    key={option}
                    type="button"

                    className={`option ${
                      isSelected
                        ? "selected"
                        : ""
                    } ${
                      isLocked || isTimeOver
                        ? "locked"
                        : ""
                    }`}

                    disabled={
                      isLocked || isTimeOver
                    }

                    onClick={() =>
                      handleAnswer(option)
                    }
                  >

                    {/* A / B / C / D */}

                    <span className="option-letter">
                      {String.fromCharCode(
                        65 + index
                      )}
                    </span>


                    {/* OPTION TEXT */}

                    <span>
                      {option}
                    </span>


                    {/* CHECK */}

                    {isSelected && (

                      <span className="answer-check">
                        ✓
                      </span>

                    )}

                  </button>

                );
              }
            )}

          </div>


          {/* ====================================
              CLEAR ANSWER
          ==================================== */}

          {!isLocked &&
            !isTimeOver &&
            selectedAnswers[currentQuestion] !== null && (

              <button
                type="button"
                className="clear-answer-button"
                onClick={handleClearAnswer}
              >
                ✕ Clear Answer
              </button>

            )}

        </div>


        {/* ======================================
            NAVIGATION
        ====================================== */}

        <div className="quiz-navigation">


          {/* PREVIOUS */}

          <button
            type="button"
            className="previous-button"

            onClick={handlePrevious}

            disabled={
              currentQuestion === 0
            }
          >
            ← Previous
          </button>


          {/* ====================================
              LAST QUESTION
          ==================================== */}

          {currentQuestion ===
          questions.length - 1 ? (

            <button
              type="button"
              className="submit-button"

              onClick={handleSubmit}

              /*
                Last question:
                - Answer থাকলে Submit
                - Time শেষ হলেও Submit
                - Locked হলেও Submit
              */

              disabled={
                isSubmitting ||
                (!isLocked &&
                selectedAnswers[
                  currentQuestion
                ] === null &&
                !isTimeOver)
              }
            >
              {isSubmitting ? "Submitting..." : "Submit Quiz"}
            </button>

          ) : (

            /* ==================================
               NEXT BUTTON
            ================================== */

            <button
              type="button"
              className="next-button"

              onClick={handleNext}

              /*
                IMPORTANT:

                Locked question হলে
                Next কখনো disabled হবে না।

                Time শেষ হলে
                Next enabled থাকবে।

                Timer চললে এবং answer না দিলে
                Next disabled থাকবে।
              */

              disabled={
                !isLocked &&
                selectedAnswers[
                  currentQuestion
                ] === null &&
                !isTimeOver
              }
            >
              Next →
            </button>

          )}

        </div>

      </div>

    </div>
  );
}

export default Quiz;