import React, { useState } from "react";

function AdminLogin({ onLoginSuccess, onBackToHome }) {
  const [adminCode, setAdminCode] = useState("");
  const [loginError, setLoginError] = useState("");

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    setLoginError("");

    // শুধুমাত্র সিকিউরিটি কোড চেক (Must be 255)
    if (adminCode.trim() === "255") {
      onLoginSuccess();
    } else {
      setLoginError("Invalid Security Code! Access Denied.");
    }
  };

  return (
    <div className="admin-login-wrapper">
      <div className="admin-login-box">
        <div className="admin-header-logo">BWU</div>
        <h2>Brainware University</h2>
        <p className="login-subtitle">Admin Control Panel</p>

        <form onSubmit={handleLoginSubmit} className="admin-login-form">
          {/* Secret Security Code Only */}
          <div className="admin-form-group">
            <label>Admin Security Code</label>
            <input
              type="password"
              placeholder="Enter secret code"
              value={adminCode}
              onChange={(e) => {
                setAdminCode(e.target.value);
                setLoginError("");
              }}
              autoFocus
              required
            />
          </div>

          {loginError && <div className="admin-login-alert">{loginError}</div>}

          <button type="submit" className="admin-submit-btn">
            Access Admin Panel
          </button>
        </form>

        {onBackToHome && (
          <button
            type="button"
            className="back-to-student-btn"
            onClick={onBackToHome}
          >
            ← Back to University Home
          </button>
        )}
      </div>
    </div>
  );
}

export default AdminLogin;
