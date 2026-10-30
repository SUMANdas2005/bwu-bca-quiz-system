import React from "react";

function AdminStudents({ results, onDeleteResult, onClearAll, onViewSubmission }) {
  return (
    <div className="tab-pane">
      <div className="section-head-bar">
        <div>
          <h2>Student Records & Quiz Results</h2>
          <p>View and manage test submissions by BCA students</p>
        </div>

        <div>
          {results.length > 0 && onClearAll && (
            <button
              type="button"
              style={{
                backgroundColor: "#fff",
                border: "1px solid #dc3545",
                color: "#dc3545",
                padding: "8px 14px",
                borderRadius: "5px",
                fontSize: "12px",
                fontWeight: "bold",
                cursor: "pointer",
              }}
              onClick={onClearAll}
            >
              🗑️ Clear All Records
            </button>
          )}
        </div>
      </div>

      {/* Student Results Table */}
      <div className="admin-table-container">
        {results.length === 0 ? (
          <div className="no-data-card">
            <span>👨‍🎓</span>
            <h4>No student records found!</h4>
            <p>Student quiz results will appear here after students complete a quiz.</p>
          </div>
        ) : (
          <table className="admin-data-table">
            <thead>
              <tr>
                <th>#</th>
                <th>Student Name</th>
                <th>Student Code</th>
                <th>Subject</th>
                <th>Level</th>
                <th>Marks</th>
                <th>Percentage</th>
                <th>Date</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {results.map((item, idx) => (
                <tr key={item.id}>
                  <td>{idx + 1}</td>
                  <td>
                    <strong>{item.name}</strong>
                  </td>
                  <td>
                    <code className="roll-badge">{item.studentCode}</code>
                  </td>
                  <td>
                    <span className="subject-tag">{item.subject}</span>
                  </td>
                  <td>{item.difficulty}</td>
                  <td>
                    <b>
                      {item.score} / {item.total}
                    </b>
                  </td>
                  <td>
                    <div className="table-progress-wrap">
                      <span>{item.percentage}%</span>
                      <div className="table-bar">
                        <div
                          className="table-bar-fill"
                          style={{
                            width: `${item.percentage}%`,
                            backgroundColor:
                              item.percentage >= 50 ? "#10b981" : "#ef4444",
                          }}
                        />
                      </div>
                    </div>
                  </td>
                  <td>{item.date}</td>
                  <td>
                    <div style={{ display: "flex", gap: "6px", alignItems: "center" }}>
                      <button
                        type="button"
                        className="view-paper-btn"
                        title="View Student Answer Sheet"
                        onClick={() => onViewSubmission && onViewSubmission(item)}
                      >
                        👁️ View Answers
                      </button>
                      <button
                        type="button"
                        className="delete-row-btn"
                        title="Delete Record"
                        onClick={() => onDeleteResult(item.id)}
                      >
                        🗑️ Delete
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
}

export default AdminStudents;
