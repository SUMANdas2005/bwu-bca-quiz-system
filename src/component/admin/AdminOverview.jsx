import React from "react";

function AdminOverview({
  totalStudents,
  totalQuestions,
  totalAttempts,
  avgPercentage,
  results,
  onNavigateTab,
  onClearAll,
  onViewSubmission,
}) {
  return (
    <div className="tab-pane">
      <div className="dashboard-banner">
        <h2>Welcome to Admin Dashboard</h2>
        <p>Brainware University Programming Quiz Examination System</p>
      </div>

      {/* 4 Key Stat Metric Cards */}
      <div className="stats-row">
        <div className="stat-box primary">
          <div className="stat-icon-wrap">👨‍🎓</div>
          <div className="stat-details">
            <span className="stat-title">Total Students</span>
            <span className="stat-number">{totalStudents}</span>
            <small>Registered BCA Examinees</small>
          </div>
        </div>

        <div className="stat-box success">
          <div className="stat-icon-wrap">📝</div>
          <div className="stat-details">
            <span className="stat-title">Total Questions</span>
            <span className="stat-number">{totalQuestions}</span>
            <small>Across 4 Programming Languages</small>
          </div>
        </div>

        <div className="stat-box warning">
          <div className="stat-icon-wrap">📋</div>
          <div className="stat-details">
            <span className="stat-title">Quiz Attempts</span>
            <span className="stat-number">{totalAttempts}</span>
            <small>Completed Quiz Tests</small>
          </div>
        </div>

        <div className="stat-box info">
          <div className="stat-icon-wrap">📈</div>
          <div className="stat-details">
            <span className="stat-title">Average Score</span>
            <span className="stat-number">{avgPercentage}%</span>
            <small>Overall Class Performance</small>
          </div>
        </div>
      </div>

      {/* Quick Actions & Recent Results Grid */}
      <div className="dashboard-grid">
        <div className="dash-card">
          <div className="dash-card-header">
            <h3>⚡ Quick Actions</h3>
          </div>
          <div className="quick-action-btns">
            <button
              type="button"
              className="action-tile"
              onClick={() => onNavigateTab("results")}
            >
              <span>👨‍🎓</span>
              <div>
                <strong>View Student Scores</strong>
                <p>Check marks and student performance</p>
              </div>
            </button>

            <button
              type="button"
              className="action-tile"
              onClick={() => onNavigateTab("questions")}
            >
              <span>📝</span>
              <div>
                <strong>Browse Question Bank</strong>
                <p>View Java, Python, C and JS questions</p>
              </div>
            </button>

            <button
              type="button"
              className="action-tile"
              onClick={() => onNavigateTab("add-question")}
            >
              <span>➕</span>
              <div>
                <strong>Add New Question</strong>
                <p>Create custom multiple-choice question</p>
              </div>
            </button>
          </div>
        </div>

        <div className="dash-card">
          <div className="dash-card-header">
            <h3>🕒 Recent Quiz Submissions</h3>
            <div style={{ display: "flex", gap: "10px", alignItems: "center" }}>
              {results.length > 0 && onClearAll && (
                <button
                  type="button"
                  className="link-btn"
                  style={{ color: "#dc3545" }}
                  onClick={onClearAll}
                >
                  Clear All
                </button>
              )}
              <button
                type="button"
                className="link-btn"
                onClick={() => onNavigateTab("results")}
              >
                View All →
              </button>
            </div>
          </div>
          <div className="recent-list">
            {results.length === 0 ? (
              <div style={{ textAlign: "center", padding: "26px 12px", color: "#6c757d" }}>
                <div style={{ fontSize: "28px", marginBottom: "6px" }}>📋</div>
                <p style={{ margin: 0, fontWeight: "bold", fontSize: "14px", color: "#212529" }}>
                  No quiz submissions yet
                </p>
                <small style={{ fontSize: "12px", color: "#8c98a4" }}>
                  When students complete quizzes, their scores will appear here.
                </small>
              </div>
            ) : (
              results.slice(0, 4).map((res) => (
                <div
                  key={res.id}
                  className="recent-item clickable"
                  onClick={() => onViewSubmission && onViewSubmission(res)}
                  title="Click to inspect student answer sheet"
                >
                  <div className="student-badge-avatar">
                    {res.name.charAt(0)}
                  </div>
                  <div className="recent-info">
                    <strong>{res.name}</strong>
                    <span>
                      {res.studentCode} • {res.subject} ({res.difficulty})
                    </span>
                  </div>
                  <div className="recent-score">
                    <span className="score-pill">
                      {res.score}/{res.total} ({res.percentage}%)
                    </span>
                    <button
                      type="button"
                      className="view-paper-small-btn"
                      onClick={(e) => {
                        e.stopPropagation();
                        if (onViewSubmission) onViewSubmission(res);
                      }}
                      title="Inspect Questions & Answers"
                    >
                      👁️ View Answers
                    </button>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdminOverview;
