import React, { useState } from "react";

function AdminAddQuestion({ onAddQuestion, onCancel }) {
  const [newQuestion, setNewQuestion] = useState({
    subject: "Java",
    difficulty: "Easy",
    question: "",
    optionA: "",
    optionB: "",
    optionC: "",
    optionD: "",
    correctOption: "A",
  });

  const [formSuccess, setFormSuccess] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!newQuestion.question.trim() || !newQuestion.optionA || !newQuestion.optionB) {
      alert("Please fill out the question and options!");
      return;
    }

    const options = [
      newQuestion.optionA.trim(),
      newQuestion.optionB.trim(),
      newQuestion.optionC.trim() || "Option C",
      newQuestion.optionD.trim() || "Option D",
    ];

    let correctText = options[0];
    if (newQuestion.correctOption === "B") correctText = options[1];
    if (newQuestion.correctOption === "C") correctText = options[2];
    if (newQuestion.correctOption === "D") correctText = options[3];

    const questionItem = {
      id: Date.now(),
      subject: newQuestion.subject,
      difficulty: newQuestion.difficulty,
      question: newQuestion.question.trim(),
      options: options,
      correctAnswer: correctText,
      isCustom: true,
    };

    onAddQuestion(questionItem);
    setFormSuccess("✅ New question successfully added to Question Bank!");

    // Reset form
    setNewQuestion({
      subject: newQuestion.subject,
      difficulty: newQuestion.difficulty,
      question: "",
      optionA: "",
      optionB: "",
      optionC: "",
      optionD: "",
      correctOption: "A",
    });

    setTimeout(() => {
      setFormSuccess("");
    }, 4000);
  };

  return (
    <div className="tab-pane">
      <div className="form-card-container">
        <div className="form-head">
          <h2>➕ Add New Quiz Question</h2>
          <p>Add a new programming question to the examination question bank</p>
        </div>

        {formSuccess && (
          <div className="form-success-banner">{formSuccess}</div>
        )}

        <form onSubmit={handleSubmit} className="add-question-form">
          <div className="form-row-2">
            <div className="form-field">
              <label>Select Subject</label>
              <select
                value={newQuestion.subject}
                onChange={(e) =>
                  setNewQuestion({ ...newQuestion, subject: e.target.value })
                }
              >
                <option value="Java">Java</option>
                <option value="Python">Python</option>
                <option value="C">C</option>
                <option value="JavaScript">JavaScript</option>
              </select>
            </div>

            <div className="form-field">
              <label>Select Difficulty</label>
              <select
                value={newQuestion.difficulty}
                onChange={(e) =>
                  setNewQuestion({ ...newQuestion, difficulty: e.target.value })
                }
              >
                <option value="Easy">Easy</option>
                <option value="Medium">Medium</option>
                <option value="Hard">Hard</option>
              </select>
            </div>
          </div>

          <div className="form-field">
            <label>Question Statement</label>
            <textarea
              rows="3"
              placeholder="Enter the question text here..."
              value={newQuestion.question}
              onChange={(e) =>
                setNewQuestion({ ...newQuestion, question: e.target.value })
              }
              required
            />
          </div>

          <div className="form-row-2">
            <div className="form-field">
              <label>Option A</label>
              <input
                type="text"
                placeholder="Enter Option A"
                value={newQuestion.optionA}
                onChange={(e) =>
                  setNewQuestion({ ...newQuestion, optionA: e.target.value })
                }
                required
              />
            </div>

            <div className="form-field">
              <label>Option B</label>
              <input
                type="text"
                placeholder="Enter Option B"
                value={newQuestion.optionB}
                onChange={(e) =>
                  setNewQuestion({ ...newQuestion, optionB: e.target.value })
                }
                required
              />
            </div>
          </div>

          <div className="form-row-2">
            <div className="form-field">
              <label>Option C</label>
              <input
                type="text"
                placeholder="Enter Option C"
                value={newQuestion.optionC}
                onChange={(e) =>
                  setNewQuestion({ ...newQuestion, optionC: e.target.value })
                }
              />
            </div>

            <div className="form-field">
              <label>Option D</label>
              <input
                type="text"
                placeholder="Enter Option D"
                value={newQuestion.optionD}
                onChange={(e) =>
                  setNewQuestion({ ...newQuestion, optionD: e.target.value })
                }
              />
            </div>
          </div>

          <div className="form-field correct-opt-select">
            <label>Correct Option</label>
            <select
              value={newQuestion.correctOption}
              onChange={(e) =>
                setNewQuestion({ ...newQuestion, correctOption: e.target.value })
              }
            >
              <option value="A">Option A</option>
              <option value="B">Option B</option>
              <option value="C">Option C</option>
              <option value="D">Option D</option>
            </select>
            <small>Choose which option is the correct answer</small>
          </div>

          <div className="form-actions">
            <button type="submit" className="save-question-btn">
              💾 Save Question to Bank
            </button>
            <button
              type="button"
              className="cancel-form-btn"
              onClick={onCancel}
            >
              View Questions List
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default AdminAddQuestion;
