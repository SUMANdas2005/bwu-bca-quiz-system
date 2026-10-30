import { useState } from "react";

function Login({ onLogin, onBackToHome }) {
  const [name, setName] = useState("");
  const [studentCode, setStudentCode] = useState("");
  const [error, setError] = useState("");

  const handleStudentCodeChange = (e) => {
    let value = e.target.value.toUpperCase();

    // Remove spaces
    value = value.replace(/\s/g, "");

    setStudentCode(value);
    setError("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const trimmedName = name.trim();
    const code = studentCode.trim().toUpperCase();

    // Name validation
    if (!trimmedName) {
      setError("Please enter your name.");
      return;
    }

    // Student Code format:
    // BWU/BCA/24/255
    // BWU/BCA/24/101
    // BWU/BCA/24/1
    const studentCodePattern = /^BWU\/BCA\/24\/\d+$/;

    if (!code) {
      setError("Please enter your Student Code.");
      return;
    }

    if (!studentCodePattern.test(code)) {
      setError(
        "Invalid Student Code. Use format: BWU/BCA/24/ROLL"
      );
      return;
    }

    // Login successful
    onLogin(trimmedName, code);
  };

  return (
    <div className="login-page">
      <div className="login-card">

        <div className="quiz-logo">
          Q
        </div>

        <h1>Brainware University</h1>

        <h2>Quiz Test</h2>

        <p className="subtitle">
          Test your programming knowledge
        </p>

        <form onSubmit={handleSubmit}>

          {/* Name */}
          <div className="input-group">
            <label>Name</label>

            <input
  type="text"
  placeholder="Enter your name"
  value={name}
  onChange={(e) => {
    setName(e.target.value.toUpperCase());
    setError("");
  }}
/>
          </div>

          {/* Student Code */}
          <div className="input-group">
            <label>Student Code</label>

            <input
              type="text"
              placeholder="BWU/BCA/24/255"
              value={studentCode}
              onChange={handleStudentCodeChange}
            />

            <small>
              Format: BWU/BCA/24/ROLL
            </small>
          </div>

          {/* Error */}
          {error && (
            <div className="login-error">
              {error}
            </div>
          )}

          <button
            type="submit"
            className="login-button"
          >
            Login & Continue
          </button>

          {onBackToHome && (
            <button
              type="button"
              onClick={onBackToHome}
              style={{
                width: "100%",
                marginTop: "12px",
                background: "transparent",
                border: "none",
                color: "#4f46e5",
                fontWeight: "600",
                fontSize: "13px",
                cursor: "pointer",
                padding: "6px",
              }}
            >
              ← Back to University Home
            </button>
          )}

        </form>

        <p className="subjects">
          Java • Python • C • JavaScript
        </p>

      </div>
    </div>
  );
}

export default Login;