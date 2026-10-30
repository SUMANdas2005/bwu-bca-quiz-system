-- =====================================================================
-- BRAINWARE UNIVERSITY (BWU)
-- DEPARTMENT OF COMPUTATIONAL SCIENCES (CSS)
-- PROJECT: ONLINE PROGRAMMING QUIZ & ASSESSMENT SYSTEM
-- DEVELOPER: SUMAN KUMAR DAS (STUDENT CODE: BWU/BCA/24/255)
-- COURSE: BCA FINAL YEAR / SEMESTER FULL STACK PROJECT
-- DATABASE SCRIPT: quiz_database.sql
-- =====================================================================

-- 1. CREATE DATABASE IF NOT EXISTS
CREATE DATABASE IF NOT EXISTS `quiz_database`
CHARACTER SET utf8mb4
COLLATE utf8mb4_unicode_ci;

USE `quiz_database`;

-- =====================================================================
-- TABLE 1: admin_users
-- Stores administrator security code and login credentials
-- Default Admin Code is: 255
-- =====================================================================
DROP TABLE IF EXISTS `admin_users`;
CREATE TABLE `admin_users` (
  `id` INT AUTO_INCREMENT PRIMARY KEY,
  `username` VARCHAR(50) NOT NULL UNIQUE,
  `secret_code` VARCHAR(50) NOT NULL DEFAULT '255',
  `role` VARCHAR(50) NOT NULL DEFAULT 'Exam Administrator',
  `created_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

INSERT INTO `admin_users` (`username`, `secret_code`, `role`) VALUES
('admin', '255', 'Exam Administrator');

-- =====================================================================
-- TABLE 2: students
-- Stores registered BCA student records
-- =====================================================================
DROP TABLE IF EXISTS `students`;
CREATE TABLE `students` (
  `id` INT AUTO_INCREMENT PRIMARY KEY,
  `student_code` VARCHAR(50) NOT NULL UNIQUE,
  `student_name` VARCHAR(100) NOT NULL,
  `department` VARCHAR(100) NOT NULL DEFAULT 'Department of Computational Sciences (CSS)',
  `created_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

INSERT INTO `students` (`student_code`, `student_name`, `department`) VALUES
('BWU/BCA/24/255', 'SUMAN KUMAR DAS', 'Department of Computational Sciences (CSS)'),
('BWU/BCA/24/101', 'RAHUL SHARMA', 'Department of Computational Sciences (CSS)'),
('BWU/BCA/24/102', 'PRIYA MUKHERJEE', 'Department of Computational Sciences (CSS)'),
('BWU/BCA/24/103', 'ANIKET BANERJEE', 'Department of Computational Sciences (CSS)'),
('BWU/BCA/24/104', 'SNEHA DUTTA', 'Department of Computational Sciences (CSS)');

-- =====================================================================
-- TABLE 3: questions
-- Comprehensive Question Bank across Java, Python, C, JavaScript
-- =====================================================================
DROP TABLE IF EXISTS `questions`;
CREATE TABLE `questions` (
  `id` INT AUTO_INCREMENT PRIMARY KEY,
  `subject` VARCHAR(50) NOT NULL,
  `difficulty` ENUM('Easy', 'Medium', 'Hard') NOT NULL,
  `question_text` TEXT NOT NULL,
  `option_a` VARCHAR(255) NOT NULL,
  `option_b` VARCHAR(255) NOT NULL,
  `option_c` VARCHAR(255) NOT NULL,
  `option_d` VARCHAR(255) NOT NULL,
  `correct_answer` VARCHAR(255) NOT NULL,
  `created_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  INDEX `idx_subject_difficulty` (`subject`, `difficulty`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

INSERT INTO `questions` (`subject`, `difficulty`, `question_text`, `option_a`, `option_b`, `option_c`, `option_d`, `correct_answer`) VALUES
('Java', 'Easy', 'Which keyword is used to create a class in Java?', 'class', 'Class', 'define', 'struct', 'class'),
('Java', 'Easy', 'Which method is the entry point of a Java program?', 'start()', 'main()', 'run()', 'init()', 'main()'),
('Java', 'Easy', 'Which data type is used to store whole numbers?', 'double', 'char', 'int', 'boolean', 'int'),
('Java', 'Easy', 'Which keyword is used to inherit a class?', 'implements', 'extends', 'inherits', 'super', 'extends'),
('Java', 'Easy', 'Which symbol is used to end a statement in Java?', '.', ':', ';', ',', ';'),
('Java', 'Easy', 'Which collection does not allow duplicate elements?', 'List', 'Set', 'ArrayList', 'LinkedList', 'Set'),
('Java', 'Easy', 'Which memory area stores objects created using new?', 'Stack', 'Heap', 'Register', 'Cache', 'Heap'),
('Java', 'Easy', 'Which keyword is used to create an object?', 'object', 'new', 'create', 'instance', 'new'),
('Java', 'Easy', 'Which type stores a single character?', 'String', 'char', 'Character', 'text', 'char'),
('Java', 'Easy', 'Which keyword is used to prevent a class from being inherited?', 'static', 'private', 'final', 'sealed', 'final'),
('Java', 'Medium', 'Which collection maintains insertion order and allows duplicates?', 'HashSet', 'ArrayList', 'TreeSet', 'HashMap', 'ArrayList'),
('Java', 'Medium', 'Which keyword refers to the current object?', 'super', 'this', 'self', 'current', 'this'),
('Java', 'Medium', 'Which keyword is used to call a superclass constructor or member?', 'parent', 'base', 'super', 'this', 'super'),
('Java', 'Medium', 'Which exception occurs when an integer is divided by zero?', 'NullPointerException', 'ArithmeticException', 'IOException', 'ClassCastException', 'ArithmeticException'),
('Java', 'Medium', 'Which interface is implemented by classes that can be sorted naturally?', 'Comparator', 'Comparable', 'Sortable', 'Ordering', 'Comparable'),
('Java', 'Medium', 'Which keyword is used to define a method that belongs to the class rather than an object?', 'static', 'final', 'public', 'abstract', 'static'),
('Java', 'Medium', 'Which class is the root of the Java class hierarchy?', 'Class', 'Object', 'Main', 'System', 'Object'),
('Java', 'Medium', 'Which mechanism allows one method name to have different parameter lists?', 'Overriding', 'Overloading', 'Inheritance', 'Encapsulation', 'Overloading'),
('Java', 'Medium', 'Which access modifier gives access only within the same class?', 'public', 'protected', 'private', 'default', 'private'),
('Java', 'Medium', 'Which interface is commonly used to define a task that can be executed by a thread?', 'Runnable', 'Threadable', 'Executable', 'CallableOnly', 'Runnable'),
('Java', 'Hard', 'Which memory area is shared among all threads in a Java process?', 'Each thread\'s stack', 'Heap', 'Program counter only', 'Local variable table', 'Heap'),
('Java', 'Hard', 'What is the main purpose of the volatile keyword?', 'Make a variable immutable', 'Ensure visibility of changes across threads', 'Prevent object creation', 'Make methods static', 'Ensure visibility of changes across threads'),
('Java', 'Hard', 'Which collection is designed for concurrent access?', 'HashMap', 'ConcurrentHashMap', 'TreeMap', 'ArrayList', 'ConcurrentHashMap'),
('Java', 'Hard', 'What does try-with-resources primarily ensure?', 'Automatic thread creation', 'Automatic closing of resources', 'Automatic exception creation', 'Automatic serialization', 'Automatic closing of resources'),
('Java', 'Hard', 'Which statement about Java generics is correct?', 'They are implemented mainly through type erasure', 'They always create a new runtime type', 'They work only with primitives', 'They remove compile-time type checking', 'They are implemented mainly through type erasure'),
('Java', 'Hard', 'Which interface represents a function that accepts one argument and returns a result?', 'Consumer', 'Supplier', 'Function', 'Predicate', 'Function'),
('Java', 'Hard', 'Which feature allows behavior to be passed as a value using concise syntax?', 'Annotations', 'Lambda expressions', 'Packages', 'Enums', 'Lambda expressions'),
('Java', 'Hard', 'What is the purpose of the equals() and hashCode() contract?', 'Control thread scheduling', 'Maintain correct behavior in hash-based collections', 'Create constructors', 'Manage file streams', 'Maintain correct behavior in hash-based collections'),
('Java', 'Hard', 'Which garbage collector is region-based and designed for low-pause garbage collection?', 'G1', 'Serial', 'Epsilon', 'None', 'G1'),
('Java', 'Hard', 'Which keyword is used to explicitly invoke a superclass method or field?', 'this', 'super', 'base', 'parent', 'super'),
('Python', 'Easy', 'Which keyword is used to define a function in Python?', 'func', 'def', 'function', 'define', 'def'),
('Python', 'Easy', 'Which symbol is used for a single-line comment in Python?', '//', '#', '/*', '--', '#'),
('Python', 'Easy', 'Which data type stores True or False values?', 'int', 'str', 'bool', 'float', 'bool'),
('Python', 'Easy', 'Which function is used to display output in Python?', 'echo()', 'print()', 'show()', 'display()', 'print()'),
('Python', 'Easy', 'Which operator is used for exponentiation in Python?', '^', '**', '//', '%%', '**'),
('Python', 'Easy', 'Which collection is ordered and mutable?', 'tuple', 'set', 'list', 'frozenset', 'list'),
('Python', 'Easy', 'Which value represents the absence of a value in Python?', 'null', 'undefined', 'None', 'void', 'None'),
('Python', 'Easy', 'Which function returns the number of items in an object?', 'count()', 'size()', 'len()', 'length()', 'len()'),
('Python', 'Easy', 'Which extension is commonly used for Python files?', '.java', '.py', '.js', '.cpp', '.py'),
('Python', 'Easy', 'Which keyword is used to create a loop over a sequence?', 'repeat', 'for', 'loop', 'iterate', 'for'),
('Python', 'Medium', 'What is the output of len([10, 20, 30])?', '2', '3', '4', '30', '3'),
('Python', 'Medium', 'Which data structure stores key-value pairs?', 'List', 'Tuple', 'Dictionary', 'Set', 'Dictionary'),
('Python', 'Medium', 'What does the // operator perform in Python?', 'Normal division', 'Floor division', 'Exponentiation', 'Modulo', 'Floor division'),
('Python', 'Medium', 'Which keyword is used to handle exceptions?', 'catch', 'except', 'error', 'handle', 'except'),
('Python', 'Medium', 'What is a lambda in Python?', 'A loop', 'An anonymous function', 'A class', 'A module', 'An anonymous function'),
('Python', 'Medium', 'Which method adds one item to the end of a list?', 'add()', 'append()', 'insertEnd()', 'push()', 'append()'),
('Python', 'Medium', 'What does range(5) generate?', '1 to 5', '0 to 5', '0 to 4', '1 to 4', '0 to 4'),
('Python', 'Medium', 'Which statement skips the current loop iteration?', 'skip', 'continue', 'pass', 'next', 'continue'),
('Python', 'Medium', 'Which keyword creates a class?', 'object', 'struct', 'class', 'type', 'class'),
('Python', 'Medium', 'What is the result of 10 % 3?', '1', '2', '3', '0', '1'),
('Python', 'Hard', 'Which mechanism is commonly used to produce values lazily in Python?', 'Generator', 'Decorator', 'Package', 'Tuple', 'Generator'),
('Python', 'Hard', 'What does the GIL primarily affect in CPython?', 'Memory allocation', 'Execution of Python bytecode by threads', 'File I/O', 'Garbage collection only', 'Execution of Python bytecode by threads'),
('Python', 'Hard', 'Which special method initializes a newly created object?', '__start__', '__new__', '__init__', '__create__', '__init__'),
('Python', 'Hard', 'What does a Python decorator primarily do?', 'Deletes a function', 'Modifies or wraps a callable', 'Compiles code', 'Creates a package', 'Modifies or wraps a callable'),
('Python', 'Hard', 'Which collection type is immutable?', 'List', 'Dictionary', 'Tuple', 'Set', 'Tuple'),
('Python', 'Hard', 'What is the average time complexity of dictionary key lookup?', 'O(n)', 'O(log n)', 'O(1)', 'O(n²)', 'O(1)'),
('Python', 'Hard', 'What does *args collect in a function?', 'Keyword arguments', 'Positional arguments', 'Return values', 'Exceptions', 'Positional arguments'),
('Python', 'Hard', 'What does **kwargs collect?', 'Positional arguments', 'Keyword arguments', 'Lists', 'Generators', 'Keyword arguments'),
('Python', 'Hard', 'Which syntax creates a dictionary comprehension?', '[]', '()', '{}', '||', '{}'),
('Python', 'Hard', 'Which statement about generators is correct?', 'They store all values immediately', 'They produce values lazily', 'They can only return strings', 'They cannot use yield', 'They produce values lazily'),
('C', 'Easy', 'Which function is the entry point of a C program?', 'start()', 'main()', 'run()', 'init()', 'main()'),
('C', 'Easy', 'Which header file is commonly used for printf()?', 'stdlib.h', 'string.h', 'stdio.h', 'math.h', 'stdio.h'),
('C', 'Easy', 'Which symbol ends a C statement?', '.', ':', ';', ',', ';'),
('C', 'Easy', 'Which data type stores a single character?', 'string', 'char', 'character', 'byte', 'char'),
('C', 'Easy', 'Which operator is used to get the address of a variable?', '*', '&', '#', '@', '&'),
('C', 'Easy', 'Which loop executes while a condition is true?', 'if', 'while', 'switch', 'case', 'while'),
('C', 'Easy', 'Which keyword declares a constant variable?', 'fixed', 'const', 'constant', 'static', 'const'),
('C', 'Easy', 'Which format specifier is used for an integer?', '%f', '%c', '%d', '%s', '%d'),
('C', 'Easy', 'Which operator is used for logical AND?', '&', '&&', '||', '!', '&&'),
('C', 'Easy', 'Which keyword is used to return a value from a function?', 'send', 'return', 'back', 'yield', 'return'),
('C', 'Medium', 'What does a pointer store?', 'A character only', 'A memory address', 'A file', 'A function name only', 'A memory address'),
('C', 'Medium', 'Which function dynamically allocates memory?', 'alloc()', 'malloc()', 'new()', 'create()', 'malloc()'),
('C', 'Medium', 'Which function releases dynamically allocated memory?', 'delete()', 'remove()', 'free()', 'release()', 'free()'),
('C', 'Medium', 'What is the first index of a C array?', '0', '1', '-1', 'Depends on compiler', '0'),
('C', 'Medium', 'Which keyword is used to define a structure?', 'record', 'struct', 'structure', 'object', 'struct'),
('C', 'Medium', 'Which function compares two strings?', 'compare()', 'strcmp()', 'strcompare()', 'equal()', 'strcmp()'),
('C', 'Medium', 'What does sizeof return?', 'A pointer only', 'Size in bytes', 'Number of elements always', 'Address', 'Size in bytes'),
('C', 'Medium', 'Which storage class preserves a local variable between function calls?', 'auto', 'register', 'static', 'extern', 'static'),
('C', 'Medium', 'Which operator accesses a structure member through a pointer?', '.', '->', '::', '*', '->'),
('C', 'Medium', 'What is the purpose of break in a loop?', 'Restart loop', 'Skip one iteration', 'Exit the loop', 'Pause program', 'Exit the loop'),
('C', 'Hard', 'What is a dangling pointer?', 'A pointer to valid memory', 'A pointer to freed or invalid memory', 'A null pointer only', 'A pointer to a constant', 'A pointer to freed or invalid memory'),
('C', 'Hard', 'What does pointer arithmetic depend on?', 'Only pointer address', 'Size of the pointed-to type', 'Variable name', 'Compiler version', 'Size of the pointed-to type'),
('C', 'Hard', 'Which function is used to resize dynamically allocated memory?', 'resize()', 'realloc()', 'remalloc()', 'mallocresize()', 'realloc()'),
('C', 'Hard', 'What does the volatile keyword indicate?', 'Variable is constant', 'Value may change unexpectedly', 'Variable is static', 'Variable is stored in ROM', 'Value may change unexpectedly'),
('C', 'Hard', 'Which memory area is commonly used for dynamic allocation?', 'Stack', 'Heap', 'Register', 'Code segment', 'Heap'),
('C', 'Hard', 'What does undefined behavior mean in C?', 'A compile-time error', 'Behavior not defined by the C standard', 'A warning only', 'A syntax rule', 'Behavior not defined by the C standard'),
('C', 'Hard', 'Which declaration represents a pointer to a function?', 'int *f()', 'int (*f)()', 'int f(*)()', 'pointer int f()', 'int (*f)()'),
('C', 'Hard', 'What does const int *p mean?', 'p cannot change', 'The pointed integer cannot be modified through p', 'Both p and integer are constant', 'p is a constant integer', 'The pointed integer cannot be modified through p'),
('C', 'Hard', 'Which preprocessor directive conditionally compiles code?', '#include', '#define', '#if', '#pragma', '#if'),
('C', 'Hard', 'What is the purpose of a header guard?', 'Speed up loops', 'Prevent repeated header inclusion', 'Allocate memory', 'Create pointers', 'Prevent repeated header inclusion'),
('JavaScript', 'Easy', 'Which keyword declares a block-scoped variable that can be reassigned?', 'var', 'let', 'const', 'define', 'let'),
('JavaScript', 'Easy', 'Which keyword declares a constant?', 'var', 'let', 'const', 'static', 'const'),
('JavaScript', 'Easy', 'Which method prints a message to the browser console?', 'print()', 'console.log()', 'log()', 'write()', 'console.log()'),
('JavaScript', 'Easy', 'Which symbol starts a single-line comment?', '#', '//', '/*', '--', '//'),
('JavaScript', 'Easy', 'Which operator checks strict equality?', '==', '=', '===', '!=', '==='),
('JavaScript', 'Easy', 'Which data type represents true or false?', 'Boolean', 'Number', 'String', 'Object', 'Boolean'),
('JavaScript', 'Easy', 'Which method adds an item to the end of an array?', 'push()', 'add()', 'append()', 'insert()', 'push()'),
('JavaScript', 'Easy', 'Which method removes the last array element?', 'delete()', 'pop()', 'remove()', 'shiftEnd()', 'pop()'),
('JavaScript', 'Easy', 'Which keyword is used to define a function?', 'func', 'function', 'def', 'method', 'function'),
('JavaScript', 'Easy', 'Which value represents an explicitly empty value?', 'None', 'null', 'empty', 'void', 'null'),
('JavaScript', 'Medium', 'What does === compare?', 'Only values', 'Only types', 'Values and types', 'References only', 'Values and types'),
('JavaScript', 'Medium', 'Which method creates a new array by transforming each element?', 'filter()', 'map()', 'reduce()', 'forEach()', 'map()'),
('JavaScript', 'Medium', 'Which method creates a new array containing elements that pass a test?', 'map()', 'filter()', 'find()', 'some()', 'filter()'),
('JavaScript', 'Medium', 'What does JSON.parse() do?', 'Converts object to JSON string', 'Converts JSON string to JavaScript value', 'Deletes JSON', 'Validates CSS', 'Converts JSON string to JavaScript value'),
('JavaScript', 'Medium', 'Which keyword refers to the current object context?', 'self', 'this', 'current', 'that', 'this'),
('JavaScript', 'Medium', 'Which function executes code after a delay?', 'setDelay()', 'setTimeout()', 'delay()', 'wait()', 'setTimeout()'),
('JavaScript', 'Medium', 'What is a Promise used for?', 'Styling pages', 'Handling asynchronous results', 'Creating CSS', 'Declaring constants', 'Handling asynchronous results'),
('JavaScript', 'Medium', 'Which operator provides a fallback when the left side is null or undefined?', '||', '??', '&&', '!!', '??'),
('JavaScript', 'Medium', 'What does Array.isArray([]) return?', 'false', 'true', 'undefined', 'null', 'true'),
('JavaScript', 'Medium', 'Which method combines array elements into a string?', 'join()', 'concatString()', 'merge()', 'combine()', 'join()'),
('JavaScript', 'Hard', 'What is a closure in JavaScript?', 'A CSS rule', 'A function retaining access to its lexical scope', 'A closed browser tab', 'A class constructor', 'A function retaining access to its lexical scope'),
('JavaScript', 'Hard', 'What is event delegation?', 'Delegating CSS', 'Handling events on a parent for descendant elements', 'Creating events automatically', 'Removing all events', 'Handling events on a parent for descendant elements'),
('JavaScript', 'Hard', 'Which queue is associated with Promise callbacks?', 'Call stack', 'Microtask queue', 'Render queue only', 'File queue', 'Microtask queue'),
('JavaScript', 'Hard', 'What does Object.freeze() do?', 'Deletes an object', 'Prevents modifications to an object', 'Copies an object', 'Converts object to JSON', 'Prevents modifications to an object'),
('JavaScript', 'Hard', 'What is hoisting?', 'Moving code to another file', 'Processing certain declarations before execution', 'Optimizing CSS', 'Creating promises', 'Processing certain declarations before execution'),
('JavaScript', 'Hard', 'What does the spread syntax ... do with an iterable in an array literal?', 'Deletes elements', 'Expands iterable elements', 'Sorts elements', 'Freezes the array', 'Expands iterable elements'),
('JavaScript', 'Hard', 'Which statement about let variables is correct?', 'They are function-scoped', 'They are block-scoped', 'They are always global', 'They cannot be reassigned', 'They are block-scoped'),
('JavaScript', 'Hard', 'What does Promise.all() do?', 'Runs one promise only', 'Waits for all promises to fulfill or rejects when one rejects', 'Cancels all promises', 'Converts promises to callbacks', 'Waits for all promises to fulfill or rejects when one rejects'),
('JavaScript', 'Hard', 'What is the prototype chain used for?', 'CSS inheritance', 'JavaScript object property inheritance', 'Database indexing', 'Network routing', 'JavaScript object property inheritance'),
('JavaScript', 'Hard', 'What does an async function always return?', 'A string', 'A Promise', 'An array', 'undefined', 'A Promise');

-- =====================================================================
-- TABLE 4: quiz_results
-- Stores student exam submissions, scores, status, and dates
-- =====================================================================
DROP TABLE IF EXISTS `quiz_results`;
CREATE TABLE `quiz_results` (
  `id` INT AUTO_INCREMENT PRIMARY KEY,
  `student_code` VARCHAR(50) NOT NULL,
  `student_name` VARCHAR(100) NOT NULL,
  `subject` VARCHAR(50) NOT NULL,
  `difficulty` VARCHAR(20) NOT NULL,
  `score` INT NOT NULL,
  `total_questions` INT NOT NULL,
  `percentage` INT NOT NULL,
  `status` VARCHAR(30) NOT NULL,
  `exam_date` DATE NOT NULL,
  `submitted_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  INDEX `idx_student_code` (`student_code`),
  INDEX `idx_subject` (`subject`),
  CONSTRAINT `fk_results_student` FOREIGN KEY (`student_code`) REFERENCES `students` (`student_code`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

INSERT INTO `quiz_results` (`student_code`, `student_name`, `subject`, `difficulty`, `score`, `total_questions`, `percentage`, `status`, `exam_date`) VALUES
('BWU/BCA/24/255', 'SUMAN KUMAR DAS', 'Java', 'Easy', 10, 10, 100, 'Passed', CURDATE()),
('BWU/BCA/24/101', 'RAHUL SHARMA', 'Python', 'Medium', 8, 10, 80, 'Passed', CURDATE()),
('BWU/BCA/24/102', 'PRIYA MUKHERJEE', 'C', 'Easy', 7, 10, 70, 'Passed', CURDATE()),
('BWU/BCA/24/103', 'ANIKET BANERJEE', 'JavaScript', 'Hard', 5, 10, 50, 'Passed', CURDATE()),
('BWU/BCA/24/104', 'SNEHA DUTTA', 'Java', 'Medium', 4, 10, 40, 'Needs Improvement', CURDATE());

-- =====================================================================
-- TABLE 5: quiz_submission_answers
-- Stores question-by-question student responses and evaluation details
-- Allows Admin to inspect exactly which option each student chose
-- =====================================================================
DROP TABLE IF EXISTS `quiz_submission_answers`;
CREATE TABLE `quiz_submission_answers` (
  `id` INT AUTO_INCREMENT PRIMARY KEY,
  `result_id` INT NOT NULL,
  `question_id` INT NOT NULL,
  `student_answer` VARCHAR(255) NULL,
  `correct_answer` VARCHAR(255) NOT NULL,
  `is_correct` TINYINT(1) NOT NULL DEFAULT 0,
  INDEX `idx_result_id` (`result_id`),
  INDEX `idx_question_id` (`question_id`),
  CONSTRAINT `fk_answer_result` FOREIGN KEY (`result_id`) REFERENCES `quiz_results` (`id`) ON DELETE CASCADE,
  CONSTRAINT `fk_answer_question` FOREIGN KEY (`question_id`) REFERENCES `questions` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- =====================================================================
-- USEFUL ANALYTICAL SQL QUERIES (FOR PROJECT VIVA & DEMONSTRATION)
-- =====================================================================
-- 1. All results sorted by percentage:
-- SELECT * FROM `quiz_results` ORDER BY `percentage` DESC, `exam_date` DESC;
--
-- 2. Average percentage per subject:
-- SELECT `subject`, COUNT(*) AS total_attempts, AVG(`percentage`) AS avg_percentage FROM `quiz_results` GROUP BY `subject`;
--
-- 3. Top performers (Passed >= 80%):
-- SELECT `student_name`, `student_code`, `subject`, `percentage` FROM `quiz_results` WHERE `percentage` >= 80;
--
-- 4. Question distribution by subject & difficulty:
-- SELECT `subject`, `difficulty`, COUNT(*) AS count FROM `questions` GROUP BY `subject`, `difficulty`;
--
-- 5. Student answer inspection query:
-- SELECT q.question_text, sa.student_answer, sa.correct_answer, sa.is_correct
-- FROM quiz_submission_answers sa
-- JOIN questions q ON sa.question_id = q.id
-- WHERE sa.result_id = 1;
