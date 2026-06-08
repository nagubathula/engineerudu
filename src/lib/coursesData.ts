export interface CodingChallenge {
  title: string;
  instructions: string;
  initialCode: string;
  testCode: string; // JavaScript code to evaluate and test the student's solution
  solutionCode: string; // Correct solution code for reference
  language?: "javascript" | "sql"; // Language switcher for sandbox compiler
}

export interface Lesson {
  id: string;
  title: string;
  duration: string;
  videoUrl: string; // YouTube Video ID (e.g. "dQw4w9WgXcQ")
  overview: string; // Markdown descriptions of the lesson
  overviewUrl?: string; // Optional path to dynamic markdown overview file
  resources: { name: string; url: string }[];
  challenge?: CodingChallenge;
}

export interface CourseModule {
  id: string;
  title: string;
  lessons: Lesson[];
}

export interface Course {
  id: number;
  title: string;
  description: string;
  duration: string;
  level: string;
  modules: CourseModule[];
}

export const coursesData: Course[] = [
  {
    id: 1,
    title: "Fullstack Web Development in Telugu",
    description: "Learn modern web development from scratch using React, Next.js, and Node.js. Taught entirely in Telugu for easy understanding.",
    duration: "40 hours",
    level: "Beginner",
    modules: [
      {
        id: "fswd-m1",
        title: "Module 1: Introduction to Web Technologies",
        lessons: [
          {
            id: "fswd-m1-l1",
            title: "1.1 How the Web Works & HTML Fundamentals",
            duration: "45 mins",
            videoUrl: "mS3sO3gB_B4", // Telugu tech/web explanation placeholder
            overview: "### In this lesson, you will learn:\n\n*   How browsers communicate with servers via HTTP/HTTPS protocols.\n*   The role of HTML in defining document structure.\n*   Basic HTML syntax, tags, attributes, and semantic elements.\n\n### HTML Starter Structure\n\n```html\n<!DOCTYPE html>\n<html>\n  <head>\n    <title>My First Webpage</title>\n  </head>\n  <body>\n    <h1>Hello, World!</h1>\n  </body>\n</html>\n```",
            resources: [
              { name: "MDN HTML Basics Guide", url: "https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/HTML_basics" },
              { name: "W3Schools HTML Tutorial", url: "https://www.w3schools.com/html/" }
            ],
            challenge: {
              title: "HTML Tag Generator Function",
              instructions: "Write a JavaScript function `createAnchorTag(url, text)` that returns an HTML anchor tag `<a>` with the specified `href` URL and visible link `text` content.",
              initialCode: "function createAnchorTag(url, text) {\n  // Write your code here\n  \n}",
              solutionCode: "function createAnchorTag(url, text) {\n  return `<a href=\"${url}\">${text}</a>`;\n}",
              language: "javascript",
              testCode: `
                (function() {
                  const fn = createAnchorTag;
                  if (typeof fn !== 'function') throw new Error('createAnchorTag is not defined or is not a function');
                  
                  const result1 = fn('https://engineerudu.org', 'Engineerudu');
                  const expected1 = '<a href="https://engineerudu.org">Engineerudu</a>';
                  if (result1 !== expected1) {
                    throw new Error(\`Expected "\${expected1}", but got "\${result1}"\`);
                  }

                  const result2 = fn('https://github.com', 'GitHub');
                  const expected2 = '<a href="https://github.com">GitHub</a>';
                  if (result2 !== expected2) {
                    throw new Error(\`Expected "\${expected2}", but got "\${result2}"\`);
                  }
                  
                  return true;
                })()
              `
            }
          },
          {
            id: "fswd-m1-l2",
            title: "1.2 Styling with Modern CSS & Custom Properties",
            duration: "50 mins",
            videoUrl: "yfoY53QXEnI",
            overview: "### CSS Concepts Explained:\n\n*   Selectors, Cascading, and Specificity.\n*   Flexbox & CSS Grid for layouts.\n*   Using CSS variables (custom properties) to create dynamic themes.\n\n### Declaring CSS Variables\n\n```css\n:root {\n  --primary-color: #0070f3;\n  --background-color: #000000;\n}\n\nbody {\n  background-color: var(--background-color);\n  color: var(--primary-color);\n}\n```",
            resources: [
              { name: "A Complete Guide to Flexbox", url: "https://css-tricks.com/snippets/css/a-guide-to-flexbox/" },
              { name: "Interactive CSS Grid Guide", url: "https://cssgridgarden.com/" }
            ]
          }
        ]
      },
      {
        id: "fswd-m2",
        title: "Module 2: React Core Concepts",
        lessons: [
          {
            id: "fswd-m2-l1",
            title: "2.1 React Components & Props",
            duration: "60 mins",
            videoUrl: "Ke90Tje7VS0",
            overview: "### What is React?\n\n*   React is a declarative JavaScript library for building user interfaces.\n*   Components are the building blocks of a React application.\n*   Props allow passing data down from parent to child components.",
            resources: [
              { name: "React Quick Start Guide", url: "https://react.dev/learn" }
            ],
            challenge: {
              title: "Format Profile Component Data",
              instructions: "Let's simulate rendering React props on the client. Write a function `formatProps(props)` that takes a component props object `{ name, role, isVerified }` and returns a string in this format: `\"User Name: [name] | Role: [role] [Verified/Unverified]\"`.",
              initialCode: "function formatProps(props) {\n  // Write your code here\n  \n}",
              solutionCode: "function formatProps(props) {\n  return `User Name: ${props.name} | Role: ${props.role} ${props.isVerified ? 'Verified' : 'Unverified'}`;\n}",
              language: "javascript",
              testCode: `
                (function() {
                  const fn = formatProps;
                  if (typeof fn !== 'function') throw new Error('formatProps is not defined or is not a function');
                  
                  const r1 = fn({ name: 'Satya', role: 'Founder', isVerified: true });
                  const e1 = 'User Name: Satya | Role: Founder Verified';
                  if (r1 !== e1) throw new Error(\`Test 1 failed. Expected "\${e1}", got "\${r1}"\`);

                  const r2 = fn({ name: 'Sai', role: 'Student', isVerified: false });
                  const e2 = 'User Name: Sai | Role: Student Unverified';
                  if (r2 !== e2) throw new Error(\`Test 2 failed. Expected "\${e2}", got "\${r2}"\`);

                  return true;
                })()
              `
            }
          }
        ]
      }
    ]
  },
  {
    id: 2,
    title: "Mastering Open Source Contributions",
    description: "A complete guide on how to find, evaluate, and contribute to open source projects on GitHub.",
    duration: "10 hours",
    level: "Intermediate",
    modules: [
      {
        id: "os-m1",
        title: "Module 1: Git Essentials & Workflows",
        lessons: [
          {
            id: "os-m1-l1",
            title: "1.1 Introduction to Git & Version Control",
            duration: "30 mins",
            videoUrl: "apGV9Ad7XYY",
            overview: "### What is Git?\n\n*   Git is a distributed version control system designed to track changes in source code.\n*   Understand the difference between Git (local version control) and GitHub (cloud hosting service).\n\n### Essential Commits\n\n```bash\ngit init\ngit add .\ngit commit -m \"initial commit\"\n```",
            resources: [
              { name: "Git Documentation Book", url: "https://git-scm.com/book/en/v2" }
            ]
          },
          {
            id: "os-m1-l2",
            title: "1.2 Commits, Branches, & Pull Requests",
            duration: "40 mins",
            videoUrl: "RGOj5yH7evk",
            overview: "### The GitHub Collaboration Flow:\n\n1.  **Fork** a repository to your own account.\n2.  **Clone** your fork locally.\n3.  Create a new feature **branch**.\n4.  Commit and **push** changes.\n5.  Create a **Pull Request (PR)** to merge back to the upstream repository.",
            resources: [
              { name: "GitHub Fork & Clone Guide", url: "https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/working-with-forks" }
            ],
            challenge: {
              title: "Branch Name Sanitizer",
              instructions: "Open source projects require descriptive, clean branch names. Write a function `sanitizeBranchName(title)` that converts a task title into a valid git branch name format (lowercase, replace spaces and special characters with hyphens `-`, and remove trailing/leading hyphens).",
              initialCode: "function sanitizeBranchName(title) {\n  // Write your code here\n  \n}",
              solutionCode: "function sanitizeBranchName(title) {\n  return title\n    .toLowerCase()\n    .replace(/[^a-z0-9]+/g, '-')\n    .replace(/^-+|-+$/g, '');\n}",
              language: "javascript",
              testCode: `
                (function() {
                  const fn = sanitizeBranchName;
                  if (typeof fn !== 'function') throw new Error('sanitizeBranchName is not defined or is not a function');
                  
                  const r1 = fn('Fix Login Bug #123');
                  const e1 = 'fix-login-bug-123';
                  if (r1 !== e1) throw new Error(\`Expected "\${e1}", got "\${r1}"\`);

                  const r2 = fn('---Add user profile page!---');
                  const e2 = 'add-user-profile-page';
                  if (r2 !== e2) throw new Error(\`Expected "\${e2}", got "\${r2}"\`);

                  return true;
                })()
              `
            }
          }
        ]
      }
    ]
  },
  {
    id: 3,
    title: "Data Structures & Algorithms",
    description: "Build a strong foundation in problem-solving and algorithmic thinking. Essential for cracking top tech interviews.",
    duration: "60 hours",
    level: "All Levels",
    modules: [
      {
        id: "dsa-m1",
        title: "Module 1: Array Manipulation & Searching",
        lessons: [
          {
            id: "dsa-m1-l1",
            title: "1.1 Array Operations & Reversal",
            duration: "45 mins",
            videoUrl: "M258A5T80U4",
            overview: "### Arrays in Memory\n\n*   Arrays store elements in contiguous memory locations.\n*   Read operations are `O(1)` using indexing, while search is `O(n)` if unsorted.\n*   Learn how to reverse arrays in-place to optimize space usage to `O(1)` helper memory.",
            resources: [
              { name: "Visualizing Array Operations", url: "https://visualgo.net/en/list" }
            ],
            challenge: {
              title: "Array Reversal",
              instructions: "Write a function `reverseArray(arr)` that takes an array and returns a new array with all elements reversed. Do not use the built-in `arr.reverse()` method.",
              initialCode: "function reverseArray(arr) {\n  // Write your code here\n  \n}",
              solutionCode: "function reverseArray(arr) {\n  const result = [];\n  for (let i = arr.length - 1; i >= 0; i--) {\n    result.push(arr[i]);\n  }\n  return result;\n}",
              language: "javascript",
              testCode: `
                (function() {
                  const fn = reverseArray;
                  if (typeof fn !== 'function') throw new Error('reverseArray is not defined or is not a function');
                  
                  const r1 = fn([1, 2, 3, 4]);
                  if (JSON.stringify(r1) !== '[4,3,2,1]') throw new Error(\`Expected [4,3,2,1], got \${JSON.stringify(r1)}\`);

                  const r2 = fn(['a', 'b', 'c']);
                  if (JSON.stringify(r2) !== '["c","b","a"]') throw new Error(\`Expected ["c","b","a"], got \${JSON.stringify(r2)}\`);

                  // Verify user didn't modify original array or cheat
                  const original = [1, 2, 3];
                  fn(original);
                  if (original[0] !== 1) throw new Error('Do not mutate the original array');

                  return true;
                })()
              `
            }
          },
          {
            id: "dsa-m1-l2",
            title: "1.2 Linear Search vs Binary Search",
            duration: "50 mins",
            videoUrl: "V_T5oPBX03o",
            overview: "### Key Takeaways:\n\n*   **Linear Search**: Checks each element from left to right. Running time `O(n)`.\n*   **Binary Search**: Divide-and-conquer algorithm. Requires a sorted array. Running time `O(log n)`.\n\n### Binary Search Logic\n\n1.  Compare target with mid element.\n2.  If target is smaller, search left half.\n3.  If target is larger, search right half.\n4.  Repeat until found or sub-array length is 0.",
            resources: [
              { name: "Binary Search Visualizer", url: "https://www.cs.usfca.edu/~galles/visualization/Search.html" }
            ],
            challenge: {
              title: "Binary Search Implementation",
              instructions: "Write a function `binarySearch(arr, target)` that takes a *sorted* array and a target value. Return the index of the target in the array. If the target is not found, return `-1`.",
              initialCode: "function binarySearch(arr, target) {\n  // Write your code here\n  \n}",
              solutionCode: "function binarySearch(arr, target) {\n  let left = 0;\n  let right = arr.length - 1;\n  while (left <= right) {\n    const mid = Math.floor((left + right) / 2);\n    if (arr[mid] === target) return mid;\n    if (arr[mid] < target) left = mid + 1;\n    else right = mid - 1;\n  }\n  return -1;\n}",
              language: "javascript",
              testCode: `
                (function() {
                  const fn = binarySearch;
                  if (typeof fn !== 'function') throw new Error('binarySearch is not defined or is not a function');
                  
                  const r1 = fn([1, 3, 5, 7, 9], 5);
                  if (r1 !== 2) throw new Error(\`Expected index 2, got \${r1}\`);

                  const r2 = fn([1, 3, 5, 7, 9], 4);
                  if (r2 !== -1) throw new Error(\`Expected -1, got \${r2}\`);

                  const r3 = fn([10, 20, 30], 30);
                  if (r3 !== 2) throw new Error(\`Expected index 2, got \${r3}\`);

                  return true;
                })()
              `
            }
          }
        ]
      }
    ]
  },
  {
    id: 4,
    title: "SQL & Relational Databases",
    description: "Master SQL query writing, database schemas, filtering, and aggregations. Learn database concepts from scratch using interactive queries.",
    duration: "25 hours",
    level: "Beginner to Intermediate",
    modules: [
      {
        id: "sql-m1",
        title: "Module 1: Relational Database Basics",
        lessons: [
          {
            id: "sql-m1-l1",
            title: "1.1 What are Relational Databases?",
            duration: "40 mins",
            videoUrl: "7S_tz1z_5bA", // Relational databases concept video
            overview: "### What is a Relational Database (RDBMS)?\n\n*   A database is a structured collection of data.\n*   In a **Relational Database**, data is stored in **Tables** (also called Relations) consisting of columns and rows.\n*   Tables relate to each other using **Keys**:\n    *   **Primary Key**: A unique identifier for every record in a table.\n    *   **Foreign Key**: A column in one table that links to the primary key of another table to establish relationships.\n\n### Relational Schema Example\n\n```text\nCUSTOMERS TABLE\n+----+-----------+-------------------+----------+\n| ID | Name      | Email             | Country  |\n+----+-----------+-------------------+----------+\n| 1  | Satya     | satya@test.com    | India    |\n| 2  | John      | john@test.com     | USA      |\n+----+-----------+-------------------+----------+\n```\n\n### SQL vs NoSQL Databases\n\n*   **SQL (Relational)**: Uses tables, structured schemas, SQL language, supports ACID transactions (e.g., PostgreSQL, MySQL, SQLite).\n*   **NoSQL (Non-Relational)**: Dynamic schemas, stores data in documents, key-values, or graphs (e.g., MongoDB, Redis).",
            overviewUrl: "/courses/sql/introduction.md",
            resources: [
              { name: "Introduction to RDBMS Concepts", url: "https://www.w3schools.com/sql/sql_intro.asp" },
              { name: "Interactive SQL Tutorials on SQLBolt", url: "https://sqlbolt.com/" }
            ],
            challenge: {
              title: "Basic SELECT Query",
              instructions: "Retrieve all records and columns from the `customers` table to verify database connection.",
              initialCode: "-- Write your SQL query here\n",
              solutionCode: "SELECT * FROM customers;",
              language: "sql",
              testCode: `
                const query = sql.trim().toLowerCase().replace(/\\s+/g, ' ').replace(/;$/, '');
                if (query !== 'select * from customers') {
                  throw new Error('Query must retrieve all columns from customers table: SELECT * FROM customers');
                }
                return true;
              `
            }
          },
          {
            id: "sql-m1-l2",
            title: "1.2 Basic SQL Syntax & SELECT Statements",
            duration: "45 mins",
            videoUrl: "HXV3zeQKqGY",
            overview: "### The SELECT Statement structure:\n\n*   Use `SELECT` to specify the columns you want to retrieve.\n*   Use `FROM` to specify the table.\n*   Use `WHERE` to filter rows according to specific criteria.\n\n### Syntax Blueprint\n\n```sql\nSELECT column1, column2 \nFROM table_name\nWHERE condition;\n```\n\n### Logical Operators\n\n*   `AND`: Both conditions must be true.\n*   `OR`: At least one condition must be true.\n*   `NOT`: Negates a condition.\n*   `LIKE`: Performs pattern matching (e.g., `%gmail.com` matching emails).",
            resources: [
              { name: "SQL SELECT Syntax Reference", url: "https://developer.mozilla.org/en-US/docs/Glossary/SQL" }
            ],
            challenge: {
              title: "Filtering Customers with WHERE",
              instructions: "Write an SQL query to retrieve all columns for customers whose `country` is exactly `'India'`. (Use single quotes for string literals).",
              initialCode: "-- Filter customers where country is India\n",
              solutionCode: "SELECT * FROM customers WHERE country = 'India';",
              language: "sql",
              testCode: `
                const query = sql.trim().toLowerCase().replace(/\\s+/g, ' ').replace(/;$/, '').replace(/'/g, '"');
                if (query !== 'select * from customers where country = "india"') {
                  throw new Error('Query must select all columns where country = "India"');
                }
                return true;
              `
            }
          }
        ]
      },
      {
        id: "sql-m2",
        title: "Module 2: Aggregations & Grouping Results",
        lessons: [
          {
            id: "sql-m2-l1",
            title: "2.1 SQL Aggregate Queries",
            duration: "50 mins",
            videoUrl: "m4s9S8-nK9A",
            overview: "### SQL Aggregation Functions:\n\n*   `COUNT()`: Returns the number of rows matching the query.\n*   `SUM()`: Returns the total sum of a numeric column.\n*   `AVG()`: Returns the average value of a numeric column.\n*   `MIN()`: Returns the minimum value.\n*   `MAX()`: Returns the maximum value.\n\n### Examples\n\n```sql\nSELECT COUNT(*) FROM orders;\nSELECT AVG(price) FROM products;\n```",
            resources: [
              { name: "W3Schools SQL Aggregate Functions", url: "https://www.w3schools.com/sql/sql_count_sum_avg.asp" }
            ],
            challenge: {
              title: "Counting Table Records",
              instructions: "Write an SQL query to count the total number of records in the `orders` table.",
              initialCode: "-- Count total orders\n",
              solutionCode: "SELECT COUNT(*) FROM orders;",
              language: "sql",
              testCode: `
                const query = sql.trim().toLowerCase().replace(/\\s+/g, ' ').replace(/;$/, '');
                if (query !== 'select count(*) from orders' && query !== 'select count(id) from orders') {
                  throw new Error('Query must count all records from orders table. Try: SELECT COUNT(*) FROM orders');
                }
                return true;
              `
            }
          },
          {
            id: "sql-m2-l2",
            title: "2.2 Grouping with GROUP BY & HAVING",
            duration: "55 mins",
            videoUrl: "gpC1Gr0okwA",
            overview: "### Summarizing Data with Grouping:\n\n*   `GROUP BY`: Collapses records with matching values in specified columns into summary rows.\n*   `HAVING`: Filter groups created by `GROUP BY` (like `WHERE`, but works on aggregates).\n\n### Execution Order\n\n1.  `FROM` table selection\n2.  `WHERE` row filters\n3.  `GROUP BY` group rows\n4.  `HAVING` group filters\n5.  `SELECT` column output\n6.  `ORDER BY` sort results",
            resources: [
              { name: "SQL GROUP BY & HAVING guide", url: "https://sqlbolt.com/lesson/select_queries_with_aggregates" }
            ],
            challenge: {
              title: "Group By and Average Salary",
              instructions: "Retrieve the average `salary` of employees grouped by their `department`. Choose column name `AVG(salary)` (or just select it) and table `employees`.",
              initialCode: "-- Average salary grouped by department\n",
              solutionCode: "SELECT department, AVG(salary) FROM employees GROUP BY department;",
              language: "sql",
              testCode: `
                const query = sql.trim().toLowerCase().replace(/\\s+/g, ' ').replace(/;$/, '');
                if (!query.includes('group by department')) {
                  throw new Error('Query must include GROUP BY department');
                }
                if (!query.includes('avg(salary)')) {
                  throw new Error('Query must calculate average salary using AVG(salary)');
                }
                if (!query.includes('employees')) {
                  throw new Error('Query must select from employees table');
                }
                return true;
              `
            }
          }
        ]
      }
    ]
  }
];
