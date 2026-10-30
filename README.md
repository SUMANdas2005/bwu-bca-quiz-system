# Online Programming Quiz & Assessment System

**Brainware University (BWU)**  
**Department of Computational Sciences (CSS)**  
**Bachelor of Computer Applications (BCA) - Final Project**  

---

### 👨‍🎓 Project Credits & Details
- **Student / Developer Name:** SUMAN KUMAR DAS
- **Student Code / Roll:** `BWU/BCA/24/255`
- **Department:** Department of Computational Sciences (CSS)
- **Institution:** Brainware University, Barasat, Kolkata
- **Admin Security Code:** `255`

---

## 📌 Project Overview
A responsive Full-Stack Quiz & Assessment Web Application designed for assessing programming skills of university students across **Java**, **Python**, **C**, and **JavaScript** across three difficulty tiers (**Easy**, **Medium**, and **Hard**).

### Key Features:
1. **Interactive Landing Page**: Academic-themed homepage representing Brainware University.
2. **Student Authentication & Assessment**:
   - Verification using University Roll format: `BWU/BCA/24/ROLL` (e.g., `BWU/BCA/24/255`).
   - Subject & difficulty selection.
   - Timed quiz interface with clear answer options, next/previous navigation, and progress tracking.
   - Comprehensive score report with instant percentage calculation and status (Passed / Needs Improvement).
   - In-depth question review mode showing selected vs correct answers with color badges.
3. **Faculty / Admin Management Dashboard**:
   - Secure access using confidential Admin Security Code (`255`).
   - Real-time analytics: Total Students, Total Quiz Submissions, Average Score Percentage, Question Count.
   - Student Results Management table with sorting, pass/fail status pills, and deletion controls.
   - Central Question Bank inspection filterable by subject and difficulty.
   - Interface to dynamically add custom programming questions.
4. **Offline Resilience & Database Ready**:
   - Works immediately out of the box upon unzipping without crashing even if database servers are offline.
   - Contains a complete `quiz_database.sql` script ready for MySQL / phpMyAdmin.

---

## 🗄️ Database Architecture (`quiz_database.sql`)

The database script `quiz_database.sql` creates the database `quiz_database` with four relational tables:

1. **`admin_users`**
   - `id` (INT, Primary Key)
   - `username` (VARCHAR)
   - `secret_code` (VARCHAR, Default `'255'`)
   - `role` (VARCHAR)
   - `created_at` (TIMESTAMP)

2. **`students`**
   - `id` (INT, Primary Key)
   - `student_code` (VARCHAR, Unique - e.g., `'BWU/BCA/24/255'`)
   - `student_name` (VARCHAR)
   - `department` (VARCHAR)
   - `created_at` (TIMESTAMP)

3. **`questions`** (Contains 120 pre-populated questions across Java, Python, C, JavaScript)
   - `id` (INT, Primary Key)
   - `subject` (VARCHAR)
   - `difficulty` (ENUM: `'Easy'`, `'Medium'`, `'Hard'`)
   - `question_text` (TEXT)
   - `option_a`, `option_b`, `option_c`, `option_d` (VARCHAR)
   - `correct_answer` (VARCHAR)
   - `created_at` (TIMESTAMP)

4. **`quiz_results`**
   - `id` (INT, Primary Key)
   - `student_code` (VARCHAR, Foreign Key -> `students.student_code`)
   - `student_name` (VARCHAR)
   - `subject` (VARCHAR)
   - `difficulty` (VARCHAR)
   - `score` (INT)
   - `total_questions` (INT)
   - `percentage` (INT)
   - `status` (VARCHAR: `'Passed'` / `'Needs Improvement'`)
   - `exam_date` (DATE)
   - `submitted_at` (TIMESTAMP)

---

## 🚀 How to Run the Project on Any Laptop

### Step 1: Extract Zip & Open Terminal
1. Unzip the project folder.
2. Open terminal/PowerShell inside the folder:
   ```bash
   npm install
   ```

### Step 2: Start the Web Application
```bash
npm run dev
```
Open your browser and navigate to the local server URL (usually `http://localhost:5173`).

---

## 💻 How to Import Database into XAMPP / phpMyAdmin

1. Start **XAMPP Control Panel** and click **Start** on **Apache** and **MySQL**.
2. Open your web browser and go to: `http://localhost/phpmyadmin`
3. Click on the **Import** tab at the top menu.
4. Click **Choose File** and select `quiz_database.sql` from this project folder.
5. Scroll down and click **Import** (or **Go**).
6. The `quiz_database` with all tables, 120 questions, and sample student records will be created immediately!
