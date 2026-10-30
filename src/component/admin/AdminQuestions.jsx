import React, { useState } from "react";

function AdminQuestions({ questionsList }) {
  const [filterSubject, setFilterSubject] = useState("All");
  const [filterDifficulty, setFilterDifficulty] = useState("All");

  const filteredQuestions = questionsList.filter((q) => {
    const matchSubject = filterSubject === "All" || q.subject === filterSubject;
    const matchDiff = filterDifficulty === "All" || q.difficulty === filterDifficulty;
    return matchSubject && matchDiff;
  });

  return (
    <div className="tab-pane">
      <div className="section-head-bar">
        <div>
          <h2>Question Bank Management</h2>
          <p>Showing {filteredQuestions.length} multiple-choice questions</p>
        </div>

        {/* Filter Dropdowns */}
        <div className="filters-wrapper">
          <div className="filter-group">
            <label>Subject:</label>
            <select
              value={filterSubject}
              onChange={(e) => setFilterSubject(e.target.value)}
            >
              <option value="All">All Subjects</option>
              <option value="Java">Java</option>
              <option value="Python">Python</option>
              <option value="C">C</option>
              <option value="JavaScript">JavaScript</option>
            </select>
          </div>

          <div className="filter-group">
            <label>Difficulty:</label>
            <select
              value={filterDifficulty}
              onChange={(e) => setFilterDifficulty(e.target.value)}
            >
              <option value="All">All Levels</option>
              <option value="Easy">Easy</option>
              <option value="Medium">Medium</option>
              <option value="Hard">Hard</option>
            </select>
          </div>
        </div>
      </div>

      {/* Questions Card Grid */}
      <div className="questions-card-grid">
        {filteredQuestions.map((q, idx) => (
          <div key={q.id} className="question-admin-card">
            <div className="q-card-top">
              <span className="q-number">#{idx + 1}</span>
              <div className="q-tags">
                <span className="tag-subj">{q.subject}</span>
                <span className={`tag-diff ${q.difficulty.toLowerCase()}`}>
                  {q.difficulty}
                </span>
                {q.isCustom && <span className="tag-custom">Custom Added</span>}
              </div>
            </div>

            <h4 className="q-text">{q.question}</h4>

            <div className="q-options-list">
              {q.options.map((opt, optIdx) => {
                const isCorrect = opt === q.correctAnswer;
                const optLabel = String.fromCharCode(65 + optIdx);
                return (
                  <div
                    key={optIdx}
                    className={`q-opt-item ${isCorrect ? "is-correct" : ""}`}
                  >
                    <span className="opt-label">{optLabel}</span>
                    <span className="opt-text">{opt}</span>
                    {isCorrect && (
                      <span className="correct-badge">✓ Correct Answer</span>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default AdminQuestions;
