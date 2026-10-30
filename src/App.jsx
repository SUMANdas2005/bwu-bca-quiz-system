import { useEffect, useState } from "react";

import Home from "./component/Home";
import Login from "./component/student/Login";
import QuizSetup from "./component/student/QuizSetup";
import Quiz from "./component/student/Quiz";
import Result from "./component/student/Result";
import Review from "./component/student/Review";

import AdminPanel from "./component/admin/AdminPanel";

import questions from "./data/questions";

function App() {
  const [user, setUser] = useState(null);

  const [quizSettings, setQuizSettings] = useState(null);

  const [quizQuestions, setQuizQuestions] = useState([]);

  const [answers, setAnswers] = useState([]);

  // =========================
  // Get page from URL
  // =========================

  const getPageFromURL = () => {
    const path = window.location.pathname;

    // Admin Portal
    if (path.startsWith("/admin")) {
      return "admin";
    }

    // Student pages
    if (path === "/login" || path === "/student-login") return "login";
    if (path === "/setup") return "setup";
    if (path === "/quiz") return "quiz";
    if (path === "/result") return "result";
    if (path === "/review") return "review";

    // Default Front Page
    return "home";
  };

  const [page, setPage] = useState(getPageFromURL);

  // =========================
  // Browser Back / Forward
  // =========================

  useEffect(() => {
    const handlePopState = (event) => {
      const nextPage =
        event.state?.page || getPageFromURL();

      setPage(nextPage);
    };

    window.addEventListener(
      "popstate",
      handlePopState
    );

    const currentPage = getPageFromURL();

    window.history.replaceState(
      { page: currentPage },
      "",
      window.location.pathname === "/"
        ? "/"
        : window.location.pathname
    );

    return () => {
      window.removeEventListener(
        "popstate",
        handlePopState
      );
    };
  }, []);

  // =========================
  // Navigate
  // =========================

  const navigateTo = (nextPage, url) => {
    window.history.pushState(
      { page: nextPage },
      "",
      url
    );

    setPage(nextPage);
  };

  // =========================
  // Student Login
  // =========================

  const handleLogin = (name, studentCode) => {
    setUser({
      name,
      studentCode,
    });

    setQuizSettings(null);
    setQuizQuestions([]);
    setAnswers([]);

    navigateTo("setup", "/setup");
  };

  // =========================


  // =========================
  // Start Quiz
  // =========================

  const handleStartQuiz = (settings) => {
    const selectedQuestions =
      questions?.[settings.subject]?.[
        settings.difficulty
      ] || [];

    setQuizSettings(settings);

    setQuizQuestions(selectedQuestions);

    setAnswers(
      Array(selectedQuestions.length).fill(null)
    );

    navigateTo("quiz", "/quiz");
  };

  // =========================
  // Submit Quiz
  // =========================

  const handleFinishQuiz = (selectedAnswers) => {
    setAnswers(selectedAnswers);

    // Calculate score
    const questionsList = quizQuestions || [];
    const correctCount = questionsList.reduce((total, question, index) => {
      const correct = question.correctAnswer || question.answer;
      return total + (selectedAnswers[index] === correct ? 1 : 0);
    }, 0);

    const totalCount = questionsList.length;
    const percentage =
      totalCount > 0 ? Math.round((correctCount / totalCount) * 100) : 0;

    // Save result to localStorage strictly ONCE on submit event
    if (user && quizSettings) {
      try {
        const saved = JSON.parse(
          localStorage.getItem("bwu_quiz_results") || "[]"
        );
        // Question breakdown for Admin inspection
        const details = questionsList.map((q, idx) => {
          const studentAns = selectedAnswers[idx] ?? null;
          const correctAns = q.correctAnswer || q.answer || "";
          return {
            id: q.id || idx + 1,
            question: q.question,
            options: q.options || [],
            studentAnswer: studentAns,
            correctAnswer: correctAns,
            isCorrect: studentAns !== null && studentAns === correctAns,
          };
        });

        const submission = {
          id: Date.now(),
          name: user.name || "STUDENT",
          studentCode: user.studentCode || "BWU/BCA/24/255",
          subject: quizSettings.subject,
          difficulty: quizSettings.difficulty,
          score: correctCount,
          total: totalCount,
          percentage: percentage,
          date: new Date().toISOString().split("T")[0],
          status: percentage >= 50 ? "Passed" : "Needs Improvement",
          details: details,
        };
        localStorage.setItem(
          "bwu_quiz_results",
          JSON.stringify([submission, ...saved])
        );
      } catch (err) {
        console.error("Error saving quiz result:", err);
      }
    }

    navigateTo("result", "/result");
  };

  // =========================
  // Review Answers
  // =========================

  const handleReview = () => {
    navigateTo("review", "/review");
  };

  // =========================
  // Reattempt Quiz
  // =========================

  const handleReattempt = () => {
    if (!quizSettings) return;

    const selectedQuestions =
      questions?.[quizSettings.subject]?.[
        quizSettings.difficulty
      ] || [];

    setQuizQuestions(selectedQuestions);

    setAnswers(
      Array(selectedQuestions.length).fill(null)
    );

    navigateTo("quiz", "/quiz");
  };

  // =========================
  // Change Subject / Difficulty
  // =========================

  const handleBackToSetup = () => {
    setAnswers([]);

    navigateTo("setup", "/setup");
  };

  // =========================
  // Back to Result
  // =========================

  const handleBackToResult = () => {
    navigateTo("result", "/result");
  };

  // =========================
  // FRONT / LANDING PAGE
  // =========================

  if (page === "home") {
    return (
      <Home
        onSelectRole={(role) => {
          if (role === "admin") {
            navigateTo("admin", "/admin");
          } else {
            navigateTo("login", "/login");
          }
        }}
      />
    );
  }

  // =========================
  // ADMIN PANEL
  // =========================

  if (page === "admin" || page === "admin-login" || page === "admin-students") {
    return (
      <AdminPanel
        onBackToHome={() => navigateTo("home", "/")}
      />
    );
  }

  // =========================
  // STUDENT LOGIN PAGE
  // =========================

  if (page === "login") {
    return (
      <Login
        onLogin={handleLogin}
        onBackToHome={() => navigateTo("home", "/")}
      />
    );
  }

  // =========================
  // QUIZ SETUP
  // =========================

  if (page === "setup") {
    return (
      <QuizSetup
        user={user}
        onStartQuiz={handleStartQuiz}
      />
    );
  }

  // =========================
  // QUIZ PAGE
  // =========================

  if (page === "quiz") {
    if (
      !quizQuestions ||
      quizQuestions.length === 0
    ) {
      return (
        <div className="empty-quiz">
          <h1>Questions Not Available</h1>

          <p>
            Questions for{" "}
            {quizSettings?.subject ||
              "this subject"}{" "}
            -{" "}
            {quizSettings?.difficulty ||
              "this difficulty"}{" "}
            are not available yet.
          </p>

          <button
            type="button"
            onClick={handleBackToSetup}
          >
            Back to Quiz Setup
          </button>
        </div>
      );
    }

    return (
      <Quiz
        user={user}
        settings={quizSettings}
        questions={quizQuestions}
        onFinish={handleFinishQuiz}
      />
    );
  }

  // =========================
  // RESULT PAGE
  // =========================

  if (page === "result") {
    return (
      <Result
        user={user}
        settings={quizSettings}
        questions={quizQuestions}
        answers={answers}
        onReview={handleReview}
        onReattempt={handleReattempt}
        onChangeQuiz={handleBackToSetup}
        onGoHome={() => navigateTo("home", "/")}
      />
    );
  }

  // =========================
  // REVIEW PAGE
  // =========================

  if (page === "review") {
    return (
      <Review
        user={user}
        settings={quizSettings}
        questions={quizQuestions}
        answers={answers}
        onBackToResult={handleBackToResult}
        onReattempt={handleReattempt}
      />
    );
  }

  return null;
}

export default App;