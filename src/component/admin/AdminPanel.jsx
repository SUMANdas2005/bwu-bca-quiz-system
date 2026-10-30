import React, { useState, useEffect } from "react";
import questionsData from "../../data/questions";
import "./AdminPanel.css";

// Modular Admin Sub-Components
import AdminLogin from "./AdminLogin";
import AdminOverview from "./AdminOverview";
import AdminStudents from "./AdminStudents";
import AdminQuestions from "./AdminQuestions";
import AdminAddQuestion from "./AdminAddQuestion";
import AdminStudentPaperModal from "./AdminStudentPaperModal";

function AdminPanel({ onBackToHome }) {
  // 1. Authentication State (Always false initially - code 255 must be entered each time)
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // 2. Active Tab State ('dashboard' | 'results' | 'questions' | 'add-question')
  const [activeTab, setActiveTab] = useState("dashboard");

  // Selected student submission for inspecting answer paper
  const [selectedSubmission, setSelectedSubmission] = useState(null);

  // 3. Student Results State (Clean real results from actual quiz submissions)
  const [results, setResults] = useState(() => {
    const saved = localStorage.getItem("bwu_quiz_results");
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        if (!Array.isArray(parsed)) return [];
        const valid = parsed.filter((item) => item.id > 100);

        // Deduplicate any twin submissions recorded within seconds of each other
        const deduped = [];
        for (const item of valid) {
          const isDuplicate = deduped.some(
            (existing) =>
              existing.studentCode === item.studentCode &&
              existing.subject === item.subject &&
              existing.difficulty === item.difficulty &&
              existing.score === item.score &&
              existing.date === item.date &&
              Math.abs(Number(existing.id) - Number(item.id)) < 10000
          );
          if (!isDuplicate) {
            deduped.push(item);
          }
        }
        return deduped;
      } catch {
        return [];
      }
    }
    return [];
  });

  // 4. Custom Added Questions State
  const [customQuestions, setCustomQuestions] = useState(() => {
    const saved = localStorage.getItem("bwu_custom_questions");
    return saved ? JSON.parse(saved) : [];
  });

  // Keep localStorage updated
  useEffect(() => {
    localStorage.setItem("bwu_quiz_results", JSON.stringify(results));
  }, [results]);

  useEffect(() => {
    localStorage.setItem("bwu_custom_questions", JSON.stringify(customQuestions));
  }, [customQuestions]);

  // Clear persistent admin login so code 255 is always prompted
  useEffect(() => {
    localStorage.removeItem("bwu_admin_logged_in");
  }, []);

  // Logout Handler
  const handleLogout = () => {
    localStorage.removeItem("bwu_admin_logged_in");
    setIsLoggedIn(false);
  };

  // Delete Single Result Handler
  const handleDeleteResult = (id) => {
    if (window.confirm("Are you sure you want to delete this student's result record?")) {
      setResults((prev) => prev.filter((item) => item.id !== id));
    }
  };

  // Clear All Results Handler
  const handleClearAllResults = () => {
    if (window.confirm("Are you sure you want to clear all student quiz records?")) {
      setResults([]);
      localStorage.removeItem("bwu_quiz_results");
    }
  };

  // Add Question Handler
  const handleAddQuestion = (questionItem) => {
    setCustomQuestions((prev) => [questionItem, ...prev]);
  };

  // Aggregate questions list
  const getAllQuestions = () => {
    const list = [...customQuestions];
    const subjects = ["Java", "Python", "C", "JavaScript"];
    const difficulties = ["Easy", "Medium", "Hard"];

    subjects.forEach((subj) => {
      difficulties.forEach((diff) => {
        const qList = questionsData?.[subj]?.[diff] || [];
        qList.forEach((q) => {
          list.push({
            id: `${subj}-${diff}-${q.id}`,
            subject: subj,
            difficulty: diff,
            question: q.question,
            options: q.options,
            correctAnswer: q.correctAnswer,
            isCustom: false,
          });
        });
      });
    });

    return list;
  };

  const allQuestionsList = getAllQuestions();

  // Statistics
  const totalStudents = new Set(results.map((r) => r.studentCode)).size;
  const totalAttempts = results.length;
  const avgPercentage =
    totalAttempts > 0
      ? Math.round(results.reduce((acc, curr) => acc + curr.percentage, 0) / totalAttempts)
      : 0;

  // View 1: If not logged in, render AdminLogin component
  if (!isLoggedIn) {
    return (
      <AdminLogin
        onLoginSuccess={() => setIsLoggedIn(true)}
        onBackToHome={onBackToHome}
      />
    );
  }

  // View 2: Main Admin Dashboard Layout
  return (
    <div className="admin-panel-container">
      {/* Top Header Bar */}
      <header className="admin-topbar">
        <div className="admin-brand">
          <span className="brand-icon">🎓</span>
          <div>
            <h3>BWU BCA QUIZ</h3>
            <span className="brand-sub">Admin Management Dashboard</span>
          </div>
        </div>

        <div className="topbar-actions">
          {onBackToHome && (
            <button
              type="button"
              className="topbar-btn student-switch-btn"
              onClick={onBackToHome}
            >
              🏠 Home / Student Mode
            </button>
          )}
          <button type="button" className="topbar-btn logout-btn" onClick={handleLogout}>
            🚪 Logout
          </button>
        </div>
      </header>

      {/* Navigation Tabs */}
      <nav className="admin-tabs">
        <button
          type="button"
          className={`tab-btn ${activeTab === "dashboard" ? "active" : ""}`}
          onClick={() => setActiveTab("dashboard")}
        >
          📊 Dashboard Overview
        </button>

        <button
          type="button"
          className={`tab-btn ${activeTab === "results" ? "active" : ""}`}
          onClick={() => setActiveTab("results")}
        >
          👨‍🎓 Students & Results ({results.length})
        </button>

        <button
          type="button"
          className={`tab-btn ${activeTab === "questions" ? "active" : ""}`}
          onClick={() => setActiveTab("questions")}
        >
          📝 Question Bank ({allQuestionsList.length})
        </button>

        <button
          type="button"
          className={`tab-btn ${activeTab === "add-question" ? "active" : ""}`}
          onClick={() => setActiveTab("add-question")}
        >
          ➕ Add New Question
        </button>
      </nav>

      {/* Main Content Area: Rendering the appropriate modular component */}
      <main className="admin-content-area">
        {activeTab === "dashboard" && (
          <AdminOverview
            totalStudents={totalStudents}
            totalQuestions={allQuestionsList.length}
            totalAttempts={totalAttempts}
            avgPercentage={avgPercentage}
            results={results}
            onNavigateTab={setActiveTab}
            onClearAll={handleClearAllResults}
            onViewSubmission={setSelectedSubmission}
          />
        )}

        {activeTab === "results" && (
          <AdminStudents
            results={results}
            onDeleteResult={handleDeleteResult}
            onClearAll={handleClearAllResults}
            onViewSubmission={setSelectedSubmission}
          />
        )}

        {activeTab === "questions" && (
          <AdminQuestions
            questionsList={allQuestionsList}
          />
        )}

        {activeTab === "add-question" && (
          <AdminAddQuestion
            onAddQuestion={handleAddQuestion}
            onCancel={() => setActiveTab("questions")}
          />
        )}
      </main>

      {/* Answer Paper Inspection Modal */}
      {selectedSubmission && (
        <AdminStudentPaperModal
          submission={selectedSubmission}
          onClose={() => setSelectedSubmission(null)}
        />
      )}
    </div>
  );
}

export default AdminPanel;
