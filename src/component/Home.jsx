import React from "react";
import "./Home.css";

function Home({ onSelectRole }) {
  return (
    <div className="home-page">
      {/* Top University Navigation Bar */}
      <header className="university-header">
        <div className="header-brand">
          <div>
            <h1>Brainware University</h1>
            <p>Department of Computational Sciences (CSS)</p>
          </div>
        </div>


      </header>

      {/* Main Banner / Welcome */}
      <main className="home-main">
        <div className="welcome-banner">
          <h2>Online Programming Quiz & Evaluation System</h2>
          <p>
            Welcome to Brainware University BCA Quiz Portal. This platform is designed
            for conducting online programming assessments and managing student performance.
          </p>
        </div>

        {/* 2 Simple Cards for Student and Admin */}
        <div className="login-choice-grid">
          {/* Student Portal Card */}
          <div className="choice-card">
            <div className="choice-icon">👨‍🎓</div>
            <h3>Student Portal</h3>
            <p>
              Students can log in with their Name and Student Code to participate in
              programming quizzes.
            </p>
            <ul className="feature-list">
              <li>Subjects: Java, Python, C, JavaScript</li>
              <li>30 seconds timer for each question</li>
              <li>Instant result and answer review</li>
            </ul>
            <button
              type="button"
              className="btn btn-primary btn-block"
              onClick={() => onSelectRole("student")}
            >
              Login as Student
            </button>
          </div>

          {/* Admin Portal Card */}
          <div className="choice-card">
            <div className="choice-icon">🔐</div>
            <h3>Admin Portal</h3>
            <p>
              Authorized faculty and examiners can log in with their secret Admin
              Security Code to manage quizzes.
            </p>
            <ul className="feature-list">
              <li>View total students and quiz results</li>
              <li>Browse complete Question Bank</li>
              <li>Add new programming questions</li>
            </ul>
            <button
              type="button"
              className="btn btn-dark btn-block"
              onClick={() => onSelectRole("admin")}
            >
              Login as Admin
            </button>
          </div>
        </div>

        {/* Available Subjects Section */}
        <section className="subjects-section">
          <h3>Available Programming Subjects</h3>
          <div className="subject-box-grid">
            <div className="subject-box">
              <span className="box-icon">☕</span>
              <strong>Java</strong>
              <small>Easy • Medium • Hard</small>
            </div>
            <div className="subject-box">
              <span className="box-icon">🐍</span>
              <strong>Python</strong>
              <small>Easy • Medium • Hard</small>
            </div>
            <div className="subject-box">
              <span className="box-icon">💻</span>
              <strong>C Language</strong>
              <small>Easy • Medium • Hard</small>
            </div>
            <div className="subject-box">
              <span className="box-icon">🌐</span>
              <strong>JavaScript</strong>
              <small>Easy • Medium • Hard</small>
            </div>
          </div>
        </section>


      </main>

      {/* University Footer */}
      <footer className="university-footer">
        <p>
          <strong>Brainware University</strong> • Barasat, Kolkata, West Bengal
        </p>
        <p className="credit-text">
          Developed by: <b>Suman Kumar Das</b> • Student Code: <b>BWU/BCA/24/255</b>
        </p>
      </footer>
    </div>
  );
}

export default Home;
