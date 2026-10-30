import React, { useState } from "react";
import "./QuizSetup.css";

const subjects = [
  {
    name: "Java",
    icon: "☕",
    description: "Object-oriented programming",
  },
  {
    name: "Python",
    icon: "🐍",
    description: "Simple & powerful programming",
  },
  {
    name: "C",
    icon: "C",
    description: "Core programming concepts",
  },
  {
    name: "JavaScript",
    icon: "JS",
    description: "Web & modern programming",
  },
];

const difficulties = [
  {
    name: "Easy",
    description: "Basic concepts",
    icon: "○",
  },
  {
    name: "Medium",
    description: "Intermediate concepts",
    icon: "◐",
  },
  {
    name: "Hard",
    description: "Advanced concepts",
    icon: "●",
  },
];

function QuizSetup({ user, onStartQuiz }) {
  const [selectedSubject, setSelectedSubject] = useState("");
  const [selectedDifficulty, setSelectedDifficulty] = useState("");

  const handleStartQuiz = () => {
    if (!selectedSubject || !selectedDifficulty) {
      return;
    }

    onStartQuiz({
      subject: selectedSubject,
      difficulty: selectedDifficulty,
    });
  };

  const studentName = user?.name || "Student";

  return (
    <div className="setup-page">

      {/* Background decoration */}
      <div className="setup-bg-circle circle-one"></div>
      <div className="setup-bg-circle circle-two"></div>

      <div className="setup-container">

        {/* ================= HEADER ================= */}
        <div className="setup-header">

          <div className="quiz-logo">
            <span>Q</span>
          </div>

          <div>
            <h1>Quiz Setup</h1>

            <p>
              Welcome back,{" "}
              <strong>
                {studentName.toUpperCase()}
              </strong>
            </p>
          </div>

        </div>

        {/* ================= PROGRESS ================= */}
        <div className="setup-progress">

          <div className="progress-step active">
            <span>1</span>
            <p>Setup</p>
          </div>

          <div className="progress-line"></div>

          <div className="progress-step">
            <span>2</span>
            <p>Quiz</p>
          </div>

          <div className="progress-line"></div>

          <div className="progress-step">
            <span>3</span>
            <p>Result</p>
          </div>

        </div>

        {/* ================= SUBJECT ================= */}
        <section className="setup-section">

          <div className="section-heading">

            <div className="section-number">
              01
            </div>

            <div>
              <h2>Select Subject</h2>

              <p>
                Choose the subject you want to test
              </p>
            </div>

          </div>

          <div className="subject-grid">

            {subjects.map((subject) => (

              <button
                type="button"
                key={subject.name}
                className={`subject-card ${
                  selectedSubject === subject.name
                    ? "selected"
                    : ""
                }`}
                onClick={() =>
                  setSelectedSubject(subject.name)
                }
              >

                <div className="subject-icon">
                  {subject.icon}
                </div>

                <div className="subject-info">

                  <h3>
                    {subject.name}
                  </h3>

                  <p>
                    {subject.description}
                  </p>

                </div>

                <div className="selection-check">

                  {selectedSubject === subject.name
                    ? "✓"
                    : ""}

                </div>

              </button>

            ))}

          </div>

        </section>

        {/* ================= DIFFICULTY ================= */}
        <section className="setup-section difficulty-section">

          <div className="section-heading">

            <div className="section-number">
              02
            </div>

            <div>

              <h2>
                Select Difficulty
              </h2>

              <p>
                Choose the level that matches
                your preparation
              </p>

            </div>

          </div>

          <div className="difficulty-grid">

            {difficulties.map((difficulty) => (

              <button
                type="button"
                key={difficulty.name}
                className={`difficulty-card ${
                  selectedDifficulty === difficulty.name
                    ? "selected"
                    : ""
                }`}
                onClick={() =>
                  setSelectedDifficulty(
                    difficulty.name
                  )
                }
              >

                <div className="difficulty-icon">
                  {difficulty.icon}
                </div>

                <div>

                  <h3>
                    {difficulty.name}
                  </h3>

                  <p>
                    {difficulty.description}
                  </p>

                </div>

                {selectedDifficulty ===
                  difficulty.name && (

                  <div className="difficulty-check">
                    ✓
                  </div>

                )}

              </button>

            ))}

          </div>

        </section>

        {/* ================= SUMMARY ================= */}
        <div className="selection-summary">

          <div className="summary-item">

            <span className="summary-icon">
              📚
            </span>

            <div>

              <small>
                Subject
              </small>

              <strong>
                {selectedSubject ||
                  "Not selected"}
              </strong>

            </div>

          </div>

          <div className="summary-divider"></div>

          <div className="summary-item">

            <span className="summary-icon">
              🎯
            </span>

            <div>

              <small>
                Difficulty
              </small>

              <strong>
                {selectedDifficulty ||
                  "Not selected"}
              </strong>

            </div>

          </div>

          <div className="summary-divider"></div>

          <div className="summary-item">

            <span className="summary-icon">
              📝
            </span>

            <div>

              <small>
                Questions
              </small>

              <strong>
                10 Questions
              </strong>

            </div>

          </div>

        </div>

        {/* ================= START QUIZ ================= */}
        <button
          type="button"
          className={`start-quiz-btn ${
            selectedSubject &&
            selectedDifficulty
              ? "ready"
              : ""
          }`}
          disabled={
            !selectedSubject ||
            !selectedDifficulty
          }
          onClick={handleStartQuiz}
        >

          <span>
            Start Quiz
          </span>

          <span className="start-arrow">
            →
          </span>

        </button>

        <p className="setup-note">
          You will have 10 multiple-choice
          questions to complete.
        </p>

        <div className="security-note">
          <span>🔒</span>
          Your quiz session is secure
        </div>

      </div>

    </div>
  );
}

export default QuizSetup;