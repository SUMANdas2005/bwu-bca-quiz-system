const questions = {
  Java: {
    Easy: [
      {
        id: 1,
        question: "Which keyword is used to create a class in Java?",
        options: ["class", "Class", "define", "struct"],
        correctAnswer: "class",
      },
      {
        id: 2,
        question: "Which method is the entry point of a Java program?",
        options: ["start()", "main()", "run()", "init()"],
        correctAnswer: "main()",
      },
      {
        id: 3,
        question: "Which data type is used to store whole numbers?",
        options: ["double", "char", "int", "boolean"],
        correctAnswer: "int",
      },
      {
        id: 4,
        question: "Which keyword is used to inherit a class?",
        options: ["implements", "extends", "inherits", "super"],
        correctAnswer: "extends",
      },
      {
        id: 5,
        question: "Which symbol is used to end a statement in Java?",
        options: [".", ":", ";", ","],
        correctAnswer: ";",
      },
      {
        id: 6,
        question: "Which collection does not allow duplicate elements?",
        options: ["List", "Set", "ArrayList", "LinkedList"],
        correctAnswer: "Set",
      },
      {
        id: 7,
        question: "Which memory area stores objects created using new?",
        options: ["Stack", "Heap", "Register", "Cache"],
        correctAnswer: "Heap",
      },
      {
        id: 8,
        question: "Which keyword is used to create an object?",
        options: ["object", "new", "create", "instance"],
        correctAnswer: "new",
      },
      {
        id: 9,
        question: "Which type stores a single character?",
        options: ["String", "char", "Character", "text"],
        correctAnswer: "char",
      },
      {
        id: 10,
        question: "Which keyword is used to prevent a class from being inherited?",
        options: ["static", "private", "final", "sealed"],
        correctAnswer: "final",
      },
    ],

    Medium: [
      {
        id: 1,
        question: "Which collection maintains insertion order and allows duplicates?",
        options: ["HashSet", "ArrayList", "TreeSet", "HashMap"],
        correctAnswer: "ArrayList",
      },
      {
        id: 2,
        question: "Which keyword refers to the current object?",
        options: ["super", "this", "self", "current"],
        correctAnswer: "this",
      },
      {
        id: 3,
        question: "Which keyword is used to call a superclass constructor or member?",
        options: ["parent", "base", "super", "this"],
        correctAnswer: "super",
      },
      {
        id: 4,
        question: "Which exception occurs when an integer is divided by zero?",
        options: [
          "NullPointerException",
          "ArithmeticException",
          "IOException",
          "ClassCastException",
        ],
        correctAnswer: "ArithmeticException",
      },
      {
        id: 5,
        question: "Which interface is implemented by classes that can be sorted naturally?",
        options: ["Comparator", "Comparable", "Sortable", "Ordering"],
        correctAnswer: "Comparable",
      },
      {
        id: 6,
        question: "Which keyword is used to define a method that belongs to the class rather than an object?",
        options: ["static", "final", "public", "abstract"],
        correctAnswer: "static",
      },
      {
        id: 7,
        question: "Which class is the root of the Java class hierarchy?",
        options: ["Class", "Object", "Main", "System"],
        correctAnswer: "Object",
      },
      {
        id: 8,
        question: "Which mechanism allows one method name to have different parameter lists?",
        options: ["Overriding", "Overloading", "Inheritance", "Encapsulation"],
        correctAnswer: "Overloading",
      },
      {
        id: 9,
        question: "Which access modifier gives access only within the same class?",
        options: ["public", "protected", "private", "default"],
        correctAnswer: "private",
      },
      {
        id: 10,
        question: "Which interface is commonly used to define a task that can be executed by a thread?",
        options: ["Runnable", "Threadable", "Executable", "CallableOnly"],
        correctAnswer: "Runnable",
      },
    ],

    Hard: [
      {
        id: 1,
        question: "Which memory area is shared among all threads in a Java process?",
        options: [
          "Each thread's stack",
          "Heap",
          "Program counter only",
          "Local variable table",
        ],
        correctAnswer: "Heap",
      },
      {
        id: 2,
        question: "What is the main purpose of the volatile keyword?",
        options: [
          "Make a variable immutable",
          "Ensure visibility of changes across threads",
          "Prevent object creation",
          "Make methods static",
        ],
        correctAnswer: "Ensure visibility of changes across threads",
      },
      {
        id: 3,
        question: "Which collection is designed for concurrent access?",
        options: [
          "HashMap",
          "ConcurrentHashMap",
          "TreeMap",
          "ArrayList",
        ],
        correctAnswer: "ConcurrentHashMap",
      },
      {
        id: 4,
        question: "What does try-with-resources primarily ensure?",
        options: [
          "Automatic thread creation",
          "Automatic closing of resources",
          "Automatic exception creation",
          "Automatic serialization",
        ],
        correctAnswer: "Automatic closing of resources",
      },
      {
        id: 5,
        question: "Which statement about Java generics is correct?",
        options: [
          "They are implemented mainly through type erasure",
          "They always create a new runtime type",
          "They work only with primitives",
          "They remove compile-time type checking",
        ],
        correctAnswer: "They are implemented mainly through type erasure",
      },
      {
        id: 6,
        question:
          "Which interface represents a function that accepts one argument and returns a result?",
        options: ["Consumer", "Supplier", "Function", "Predicate"],
        correctAnswer: "Function",
      },
      {
        id: 7,
        question:
          "Which feature allows behavior to be passed as a value using concise syntax?",
        options: [
          "Annotations",
          "Lambda expressions",
          "Packages",
          "Enums",
        ],
        correctAnswer: "Lambda expressions",
      },
      {
        id: 8,
        question:
          "What is the purpose of the equals() and hashCode() contract?",
        options: [
          "Control thread scheduling",
          "Maintain correct behavior in hash-based collections",
          "Create constructors",
          "Manage file streams",
        ],
        correctAnswer:
          "Maintain correct behavior in hash-based collections",
      },
      {
        id: 9,
        question:
          "Which garbage collector is region-based and designed for low-pause garbage collection?",
        options: ["G1", "Serial", "Epsilon", "None"],
        correctAnswer: "G1",
      },
      {
        id: 10,
        question:
          "Which keyword is used to explicitly invoke a superclass method or field?",
        options: ["this", "super", "base", "parent"],
        correctAnswer: "super",
      },
    ],
  },

  // ==========================================
  // PYTHON
  // ==========================================

  Python: {
    Easy: [
      {
        id: 1,
        question: "Which keyword is used to define a function in Python?",
        options: ["func", "def", "function", "define"],
        correctAnswer: "def",
      },
      {
        id: 2,
        question: "Which symbol is used for a single-line comment in Python?",
        options: ["//", "#", "/*", "--"],
        correctAnswer: "#",
      },
      {
        id: 3,
        question: "Which data type stores True or False values?",
        options: ["int", "str", "bool", "float"],
        correctAnswer: "bool",
      },
      {
        id: 4,
        question: "Which function is used to display output in Python?",
        options: ["echo()", "print()", "show()", "display()"],
        correctAnswer: "print()",
      },
      {
        id: 5,
        question: "Which operator is used for exponentiation in Python?",
        options: ["^", "**", "//", "%%"],
        correctAnswer: "**",
      },
      {
        id: 6,
        question: "Which collection is ordered and mutable?",
        options: ["tuple", "set", "list", "frozenset"],
        correctAnswer: "list",
      },
      {
        id: 7,
        question: "Which value represents the absence of a value in Python?",
        options: ["null", "undefined", "None", "void"],
        correctAnswer: "None",
      },
      {
        id: 8,
        question: "Which function returns the number of items in an object?",
        options: ["count()", "size()", "len()", "length()"],
        correctAnswer: "len()",
      },
      {
        id: 9,
        question: "Which extension is commonly used for Python files?",
        options: [".java", ".py", ".js", ".cpp"],
        correctAnswer: ".py",
      },
      {
        id: 10,
        question: "Which keyword is used to create a loop over a sequence?",
        options: ["repeat", "for", "loop", "iterate"],
        correctAnswer: "for",
      },
    ],

    Medium: [
      {
        id: 1,
        question: "What is the output of len([10, 20, 30])?",
        options: ["2", "3", "4", "30"],
        correctAnswer: "3",
      },
      {
        id: 2,
        question: "Which data structure stores key-value pairs?",
        options: ["List", "Tuple", "Dictionary", "Set"],
        correctAnswer: "Dictionary",
      },
      {
        id: 3,
        question: "What does the // operator perform in Python?",
        options: [
          "Normal division",
          "Floor division",
          "Exponentiation",
          "Modulo",
        ],
        correctAnswer: "Floor division",
      },
      {
        id: 4,
        question: "Which keyword is used to handle exceptions?",
        options: ["catch", "except", "error", "handle"],
        correctAnswer: "except",
      },
      {
        id: 5,
        question: "What is a lambda in Python?",
        options: [
          "A loop",
          "An anonymous function",
          "A class",
          "A module",
        ],
        correctAnswer: "An anonymous function",
      },
      {
        id: 6,
        question: "Which method adds one item to the end of a list?",
        options: ["add()", "append()", "insertEnd()", "push()"],
        correctAnswer: "append()",
      },
      {
        id: 7,
        question: "What does range(5) generate?",
        options: ["1 to 5", "0 to 5", "0 to 4", "1 to 4"],
        correctAnswer: "0 to 4",
      },
      {
        id: 8,
        question: "Which statement skips the current loop iteration?",
        options: ["skip", "continue", "pass", "next"],
        correctAnswer: "continue",
      },
      {
        id: 9,
        question: "Which keyword creates a class?",
        options: ["object", "struct", "class", "type"],
        correctAnswer: "class",
      },
      {
        id: 10,
        question: "What is the result of 10 % 3?",
        options: ["1", "2", "3", "0"],
        correctAnswer: "1",
      },
    ],

    Hard: [
      {
        id: 1,
        question:
          "Which mechanism is commonly used to produce values lazily in Python?",
        options: ["Generator", "Decorator", "Package", "Tuple"],
        correctAnswer: "Generator",
      },
      {
        id: 2,
        question: "What does the GIL primarily affect in CPython?",
        options: [
          "Memory allocation",
          "Execution of Python bytecode by threads",
          "File I/O",
          "Garbage collection only",
        ],
        correctAnswer:
          "Execution of Python bytecode by threads",
      },
      {
        id: 3,
        question:
          "Which special method initializes a newly created object?",
        options: [
          "__start__",
          "__new__",
          "__init__",
          "__create__",
        ],
        correctAnswer: "__init__",
      },
      {
        id: 4,
        question: "What does a Python decorator primarily do?",
        options: [
          "Deletes a function",
          "Modifies or wraps a callable",
          "Compiles code",
          "Creates a package",
        ],
        correctAnswer: "Modifies or wraps a callable",
      },
      {
        id: 5,
        question: "Which collection type is immutable?",
        options: ["List", "Dictionary", "Tuple", "Set"],
        correctAnswer: "Tuple",
      },
      {
        id: 6,
        question:
          "What is the average time complexity of dictionary key lookup?",
        options: ["O(n)", "O(log n)", "O(1)", "O(n²)"],
        correctAnswer: "O(1)",
      },
      {
        id: 7,
        question: "What does *args collect in a function?",
        options: [
          "Keyword arguments",
          "Positional arguments",
          "Return values",
          "Exceptions",
        ],
        correctAnswer: "Positional arguments",
      },
      {
        id: 8,
        question: "What does **kwargs collect?",
        options: [
          "Positional arguments",
          "Keyword arguments",
          "Lists",
          "Generators",
        ],
        correctAnswer: "Keyword arguments",
      },
      {
        id: 9,
        question: "Which syntax creates a dictionary comprehension?",
        options: ["[]", "()", "{}", "||"],
        correctAnswer: "{}",
      },
      {
        id: 10,
        question: "Which statement about generators is correct?",
        options: [
          "They store all values immediately",
          "They produce values lazily",
          "They can only return strings",
          "They cannot use yield",
        ],
        correctAnswer: "They produce values lazily",
      },
    ],
  },

  // ==========================================
  // C
  // ==========================================

  C: {
    Easy: [
      {
        id: 1,
        question: "Which function is the entry point of a C program?",
        options: ["start()", "main()", "run()", "init()"],
        correctAnswer: "main()",
      },
      {
        id: 2,
        question: "Which header file is commonly used for printf()?",
        options: ["stdlib.h", "string.h", "stdio.h", "math.h"],
        correctAnswer: "stdio.h",
      },
      {
        id: 3,
        question: "Which symbol ends a C statement?",
        options: [".", ":", ";", ","],
        correctAnswer: ";",
      },
      {
        id: 4,
        question: "Which data type stores a single character?",
        options: ["string", "char", "character", "byte"],
        correctAnswer: "char",
      },
      {
        id: 5,
        question:
          "Which operator is used to get the address of a variable?",
        options: ["*", "&", "#", "@"],
        correctAnswer: "&",
      },
      {
        id: 6,
        question: "Which loop executes while a condition is true?",
        options: ["if", "while", "switch", "case"],
        correctAnswer: "while",
      },
      {
        id: 7,
        question: "Which keyword declares a constant variable?",
        options: ["fixed", "const", "constant", "static"],
        correctAnswer: "const",
      },
      {
        id: 8,
        question: "Which format specifier is used for an integer?",
        options: ["%f", "%c", "%d", "%s"],
        correctAnswer: "%d",
      },
      {
        id: 9,
        question: "Which operator is used for logical AND?",
        options: ["&", "&&", "||", "!"],
        correctAnswer: "&&",
      },
      {
        id: 10,
        question:
          "Which keyword is used to return a value from a function?",
        options: ["send", "return", "back", "yield"],
        correctAnswer: "return",
      },
    ],

    Medium: [
      {
        id: 1,
        question: "What does a pointer store?",
        options: [
          "A character only",
          "A memory address",
          "A file",
          "A function name only",
        ],
        correctAnswer: "A memory address",
      },
      {
        id: 2,
        question: "Which function dynamically allocates memory?",
        options: ["alloc()", "malloc()", "new()", "create()"],
        correctAnswer: "malloc()",
      },
      {
        id: 3,
        question:
          "Which function releases dynamically allocated memory?",
        options: ["delete()", "remove()", "free()", "release()"],
        correctAnswer: "free()",
      },
      {
        id: 4,
        question: "What is the first index of a C array?",
        options: ["0", "1", "-1", "Depends on compiler"],
        correctAnswer: "0",
      },
      {
        id: 5,
        question: "Which keyword is used to define a structure?",
        options: ["record", "struct", "structure", "object"],
        correctAnswer: "struct",
      },
      {
        id: 6,
        question: "Which function compares two strings?",
        options: ["compare()", "strcmp()", "strcompare()", "equal()"],
        correctAnswer: "strcmp()",
      },
      {
        id: 7,
        question: "What does sizeof return?",
        options: [
          "A pointer only",
          "Size in bytes",
          "Number of elements always",
          "Address",
        ],
        correctAnswer: "Size in bytes",
      },
      {
        id: 8,
        question:
          "Which storage class preserves a local variable between function calls?",
        options: ["auto", "register", "static", "extern"],
        correctAnswer: "static",
      },
      {
        id: 9,
        question:
          "Which operator accesses a structure member through a pointer?",
        options: [".", "->", "::", "*"],
        correctAnswer: "->",
      },
      {
        id: 10,
        question: "What is the purpose of break in a loop?",
        options: [
          "Restart loop",
          "Skip one iteration",
          "Exit the loop",
          "Pause program",
        ],
        correctAnswer: "Exit the loop",
      },
    ],

    Hard: [
      {
        id: 1,
        question: "What is a dangling pointer?",
        options: [
          "A pointer to valid memory",
          "A pointer to freed or invalid memory",
          "A null pointer only",
          "A pointer to a constant",
        ],
        correctAnswer:
          "A pointer to freed or invalid memory",
      },
      {
        id: 2,
        question: "What does pointer arithmetic depend on?",
        options: [
          "Only pointer address",
          "Size of the pointed-to type",
          "Variable name",
          "Compiler version",
        ],
        correctAnswer: "Size of the pointed-to type",
      },
      {
        id: 3,
        question:
          "Which function is used to resize dynamically allocated memory?",
        options: [
          "resize()",
          "realloc()",
          "remalloc()",
          "mallocresize()",
        ],
        correctAnswer: "realloc()",
      },
      {
        id: 4,
        question: "What does the volatile keyword indicate?",
        options: [
          "Variable is constant",
          "Value may change unexpectedly",
          "Variable is static",
          "Variable is stored in ROM",
        ],
        correctAnswer: "Value may change unexpectedly",
      },
      {
        id: 5,
        question:
          "Which memory area is commonly used for dynamic allocation?",
        options: ["Stack", "Heap", "Register", "Code segment"],
        correctAnswer: "Heap",
      },
      {
        id: 6,
        question: "What does undefined behavior mean in C?",
        options: [
          "A compile-time error",
          "Behavior not defined by the C standard",
          "A warning only",
          "A syntax rule",
        ],
        correctAnswer:
          "Behavior not defined by the C standard",
      },
      {
        id: 7,
        question:
          "Which declaration represents a pointer to a function?",
        options: [
          "int *f()",
          "int (*f)()",
          "int f(*)()",
          "pointer int f()",
        ],
        correctAnswer: "int (*f)()",
      },
      {
        id: 8,
        question: "What does const int *p mean?",
        options: [
          "p cannot change",
          "The pointed integer cannot be modified through p",
          "Both p and integer are constant",
          "p is a constant integer",
        ],
        correctAnswer:
          "The pointed integer cannot be modified through p",
      },
      {
        id: 9,
        question:
          "Which preprocessor directive conditionally compiles code?",
        options: ["#include", "#define", "#if", "#pragma"],
        correctAnswer: "#if",
      },
      {
        id: 10,
        question: "What is the purpose of a header guard?",
        options: [
          "Speed up loops",
          "Prevent repeated header inclusion",
          "Allocate memory",
          "Create pointers",
        ],
        correctAnswer: "Prevent repeated header inclusion",
      },
    ],
  },

  // ==========================================
  // JAVASCRIPT
  // ==========================================

  JavaScript: {
    Easy: [
      {
        id: 1,
        question:
          "Which keyword declares a block-scoped variable that can be reassigned?",
        options: ["var", "let", "const", "define"],
        correctAnswer: "let",
      },
      {
        id: 2,
        question: "Which keyword declares a constant?",
        options: ["var", "let", "const", "static"],
        correctAnswer: "const",
      },
      {
        id: 3,
        question:
          "Which method prints a message to the browser console?",
        options: ["print()", "console.log()", "log()", "write()"],
        correctAnswer: "console.log()",
      },
      {
        id: 4,
        question: "Which symbol starts a single-line comment?",
        options: ["#", "//", "/*", "--"],
        correctAnswer: "//",
      },
      {
        id: 5,
        question: "Which operator checks strict equality?",
        options: ["==", "=", "===", "!="],
        correctAnswer: "===",
      },
      {
        id: 6,
        question: "Which data type represents true or false?",
        options: ["Boolean", "Number", "String", "Object"],
        correctAnswer: "Boolean",
      },
      {
        id: 7,
        question: "Which method adds an item to the end of an array?",
        options: ["push()", "add()", "append()", "insert()"],
        correctAnswer: "push()",
      },
      {
        id: 8,
        question: "Which method removes the last array element?",
        options: ["delete()", "pop()", "remove()", "shiftEnd()"],
        correctAnswer: "pop()",
      },
      {
        id: 9,
        question: "Which keyword is used to define a function?",
        options: ["func", "function", "def", "method"],
        correctAnswer: "function",
      },
      {
        id: 10,
        question: "Which value represents an explicitly empty value?",
        options: ["None", "null", "empty", "void"],
        correctAnswer: "null",
      },
    ],

    Medium: [
      {
        id: 1,
        question: "What does === compare?",
        options: [
          "Only values",
          "Only types",
          "Values and types",
          "References only",
        ],
        correctAnswer: "Values and types",
      },
      {
        id: 2,
        question:
          "Which method creates a new array by transforming each element?",
        options: ["filter()", "map()", "reduce()", "forEach()"],
        correctAnswer: "map()",
      },
      {
        id: 3,
        question:
          "Which method creates a new array containing elements that pass a test?",
        options: ["map()", "filter()", "find()", "some()"],
        correctAnswer: "filter()",
      },
      {
        id: 4,
        question: "What does JSON.parse() do?",
        options: [
          "Converts object to JSON string",
          "Converts JSON string to JavaScript value",
          "Deletes JSON",
          "Validates CSS",
        ],
        correctAnswer:
          "Converts JSON string to JavaScript value",
      },
      {
        id: 5,
        question:
          "Which keyword refers to the current object context?",
        options: ["self", "this", "current", "that"],
        correctAnswer: "this",
      },
      {
        id: 6,
        question: "Which function executes code after a delay?",
        options: [
          "setDelay()",
          "setTimeout()",
          "delay()",
          "wait()",
        ],
        correctAnswer: "setTimeout()",
      },
      {
        id: 7,
        question: "What is a Promise used for?",
        options: [
          "Styling pages",
          "Handling asynchronous results",
          "Creating CSS",
          "Declaring constants",
        ],
        correctAnswer: "Handling asynchronous results",
      },
      {
        id: 8,
        question:
          "Which operator provides a fallback when the left side is null or undefined?",
        options: ["||", "??", "&&", "!!"],
        correctAnswer: "??",
      },
      {
        id: 9,
        question: "What does Array.isArray([]) return?",
        options: ["false", "true", "undefined", "null"],
        correctAnswer: "true",
      },
      {
        id: 10,
        question:
          "Which method combines array elements into a string?",
        options: ["join()", "concatString()", "merge()", "combine()"],
        correctAnswer: "join()",
      },
    ],

    Hard: [
      {
        id: 1,
        question: "What is a closure in JavaScript?",
        options: [
          "A CSS rule",
          "A function retaining access to its lexical scope",
          "A closed browser tab",
          "A class constructor",
        ],
        correctAnswer:
          "A function retaining access to its lexical scope",
      },
      {
        id: 2,
        question: "What is event delegation?",
        options: [
          "Delegating CSS",
          "Handling events on a parent for descendant elements",
          "Creating events automatically",
          "Removing all events",
        ],
        correctAnswer:
          "Handling events on a parent for descendant elements",
      },
      {
        id: 3,
        question:
          "Which queue is associated with Promise callbacks?",
        options: [
          "Call stack",
          "Microtask queue",
          "Render queue only",
          "File queue",
        ],
        correctAnswer: "Microtask queue",
      },
      {
        id: 4,
        question: "What does Object.freeze() do?",
        options: [
          "Deletes an object",
          "Prevents modifications to an object",
          "Copies an object",
          "Converts object to JSON",
        ],
        correctAnswer:
          "Prevents modifications to an object",
      },
      {
        id: 5,
        question: "What is hoisting?",
        options: [
          "Moving code to another file",
          "Processing certain declarations before execution",
          "Optimizing CSS",
          "Creating promises",
        ],
        correctAnswer:
          "Processing certain declarations before execution",
      },
      {
        id: 6,
        question:
          "What does the spread syntax ... do with an iterable in an array literal?",
        options: [
          "Deletes elements",
          "Expands iterable elements",
          "Sorts elements",
          "Freezes the array",
        ],
        correctAnswer: "Expands iterable elements",
      },
      {
        id: 7,
        question: "Which statement about let variables is correct?",
        options: [
          "They are function-scoped",
          "They are block-scoped",
          "They are always global",
          "They cannot be reassigned",
        ],
        correctAnswer: "They are block-scoped",
      },
      {
        id: 8,
        question: "What does Promise.all() do?",
        options: [
          "Runs one promise only",
          "Waits for all promises to fulfill or rejects when one rejects",
          "Cancels all promises",
          "Converts promises to callbacks",
        ],
        correctAnswer:
          "Waits for all promises to fulfill or rejects when one rejects",
      },
      {
        id: 9,
        question: "What is the prototype chain used for?",
        options: [
          "CSS inheritance",
          "JavaScript object property inheritance",
          "Database indexing",
          "Network routing",
        ],
        correctAnswer:
          "JavaScript object property inheritance",
      },
      {
        id: 10,
        question: "What does an async function always return?",
        options: ["A string", "A Promise", "An array", "undefined"],
        correctAnswer: "A Promise",
      },
    ],
  },
};

export default questions;