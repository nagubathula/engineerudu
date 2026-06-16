# 30 Days of SQL — Tenglish Learning Guide

> **Namaskaram Students!**
> Ee 30 days lo manam SQL ni **beginner nunchi advanced level** varaku nerchukuntam.
> Every day theory + code examples + homework undi. Daily practice cheyandi! 


## Table of Contents

| Phase | Days | Topics |
|---|---|---|
| **Phase 1** | Days 1–7 | Database Foundations & DDL |
| **Phase 2** | Days 8–14 | Aggregation, JOINs & Functions |
| **Phase 3** | Days 15–21 | Advanced Querying |
| **Phase 4** | Days 22–29 | Architecture, Optimization & Security |
| **Final** | Day 30 | Capstone Project |


# PHASE 1 — Database Foundations & DDL


## Day 1 — Introduction to Databases

30 Days of SQL lo welcome! Ee 30 days lo manam SQL ni beginner nunchi advanced level varaku nerchukuntam.


### 1. Database ante Emi?

Simple ga cheppalante: **Database oka organized digital godown** laga undi — data ni neatly store chese place.

- Normal files (Notepad, Excel) chala mandi users unte messy avuthundi
- Database lo data **tables** lo store avuthundi — rows & columns format lo

**Real Life Examples:**
- WhatsApp lo mee chats
- Railway ticket booking system
- Amazon / Flipkart products & orders
- College lo student marks & attendance
- Bank lo accounts & transactions


### 2. Relational Databases (RDBMS)

Data tables lo store chesi, tables **relations (links)** tho connect chese databases.

**Popular RDBMS Tools:**
- MySQL (free & popular)
- PostgreSQL
- Oracle
- Microsoft SQL Server
- SQLite

**Example Table:**

| StudentID | Name | Age | Branch |
|---|---|---|---|
| 101 | Ramesh | 20 | CSE |
| 102 | Sita | 21 | ECE |
| 103 | Krishna | 19 | MECH |


### 3. RDBMS Advantages (Benefits)

- Data correctness (Integrity) maintain avuthundi
- Duplicate data takkuva
- Easy ga queries rayochu (SQL tho)
- Security — evaru em chudochu control cheyochu
- Important transactions (money transfer) safe ga jaruguthayi (ACID properties)


### 4. RDBMS Limitations

- Chala structured data ki only best
- Very huge data (Big Data) ki koncham slow
- Table structure change cheyadam koncham hard


### 5. SQL vs NoSQL Databases

| Feature | SQL (Relational) | NoSQL |
|---|---|---|
| Data Storage | Tables, Rows, Columns | Documents, Key-Value, Graphs |
| Schema | Fixed (munchi decide) | Flexible (anytime change) |
| Best Use Cases | Banking, E-commerce, Colleges | Social media, Netflix, Big Data |
| Query Language | SQL | No standard |
| Relationships | Strong (Foreign Keys) | Weak |
| Examples | MySQL, PostgreSQL | MongoDB, Firebase, Cassandra |

> **Ee course lo manam SQL focus chestham** — idi industry lo chala demand undi.


### Day 1 Homework

1. Mee daily life lo databases use ayye **5 examples** rayandi
2. **Library Management System** gurinci alochinchandi — enni tables kavali? (Books, Members, Issued Books etc.)
3. **Tool Setup (Recommended):**
 - Online: [DB Fiddle](https://www.db-fiddle.com)
 - Or MySQL Workbench install cheyochu


### Summary

| Concept | Definition |
|---|---|
| Database | Organized Data Storage |
| Relational Database | Tables + Relations |
| SQL | Databases ni manage chese powerful language |

> **Next Day (Day 2):** DDL Basics — Create Table, Data Types gurinchi chuddam!


## Day 2 — Data Definition Language (DDL) Basics

Yesterday databases gurinchi basic idea vachindi. Today nunchi **actual SQL coding** start chestham.


### 1. Basic SQL Syntax & Keywords

SQL queries rayadam chala easy. Rules (Syntax) koncham strict ga undali.

**Important Rules:**
- Every SQL statement **semicolon (;)** tho end avvali
- SQL keywords case-insensitive (`SELECT = select = Select`)
- Comments rayali ante: `--` (single line) or `/* */` (multi line)

```sql
-- Idi comment
CREATE TABLE students; -- Table create chesthundi
```


### 2. SQL Data Types (Most Important)

| Data Type | Use Case | Example |
|---|---|---|
| `INT` | Numbers (whole) | 25, 101, 5000 |
| `VARCHAR(255)` | Text / Strings (variable length) | "Ramesh", "Hyderabad" |
| `CHAR(10)` | Fixed length text | "A123" |
| `DATE` | Dates only | '2025-06-13' |
| `DECIMAL(10,2)` | Money / Precise numbers | 1250.75 |
| `TEXT` | Long text | Full description |
| `BOOLEAN` | True/False | TRUE / FALSE |

> **Tip:** `VARCHAR(255)` chala common. Name, Address, Email lanti vi ki use cheyandi.


### 3. CREATE TABLE Statement

New table create chese important command.

**Basic Syntax:**

```sql
CREATE TABLE table_name (
 column1 datatype constraints,
 column2 datatype constraints,
...
);
```

**Real Example — Students Table:**

```sql
CREATE TABLE students (
 student_id INT,
 name VARCHAR(100),
 age INT,
 branch VARCHAR(50),
 join_date DATE
);
```

**Better Version with Constraints:**

```sql
CREATE TABLE students (
 student_id INT PRIMARY KEY, -- Unique & Not Null
 name VARCHAR(100) NOT NULL,
 age INT CHECK (age >= 18),
 branch VARCHAR(50),
 email VARCHAR(100) UNIQUE
);
```


### 4. DROP TABLE Statement

Table ni complete ga delete cheyadaniki.

```sql
DROP TABLE students; -- Table complete ga delete
```

> **Caution:** DROP chesthe table + data anni poothayi. Careful ga use cheyandi!


### 5. Practice Examples

**Task 1 — Library Books Table Create cheyandi:**

```sql
CREATE TABLE books (
 book_id INT PRIMARY KEY,
 title VARCHAR(200) NOT NULL,
 author VARCHAR(100),
 published_year INT,
 copies_available INT DEFAULT 1
);
```

**Task 2:** `DROP TABLE books;` try cheyandi (first create chesi tarwata).


### Day 2 Homework

1. `students` table create cheyandi (above example use chesi)
2. `courses` table create cheyandi (course_id, course_name, duration_months, fee)
3. Different Data Types use chesi `employees` table create cheyandi (id, name, salary, join_date, active)
4. `DROP TABLE` try chesi again recreate cheyandi


### Summary

| Concept | Details |
|---|---|
| DDL | Data Definition Language (Tables create/modify/delete) |
| Main Commands | CREATE TABLE, DROP TABLE |
| Data Types | INT, VARCHAR, DATE, DECIMAL, BOOLEAN |

> **Next Day (Day 3):** Alter Table, Truncate Table & Basic Constraints gurinchi chuddam!


## Day 3 — Table Modifications & Basic Constraints

Day 2 lo manam `CREATE TABLE` & `DROP TABLE` nerchukunnam. Today manam already unna tables ni **modify cheyadam** & important **Constraints** gurinchi chuddam.


### 1. ALTER TABLE Statement

Already unna table ni modify cheyadaniki `ALTER TABLE` use chestham.

**A. Add New Column:**

```sql
ALTER TABLE students 
ADD COLUMN phone VARCHAR(15);
```

**B. Drop (Remove) Column:**

```sql
ALTER TABLE students 
DROP COLUMN age;
```

**C. Modify Column (Change Data Type or Size):**

```sql
ALTER TABLE students 
MODIFY COLUMN name VARCHAR(150); -- Size penchadam
```

**D. Rename Column:**

```sql
ALTER TABLE students 
RENAME COLUMN branch TO department;
```


### 2. TRUNCATE TABLE

Table lo unna data anni delete chesthundi, kani **table structure (columns) matram** undi untundi.

```sql
TRUNCATE TABLE students;
```

**Difference between DELETE & TRUNCATE:**

| Command | Behavior |
|---|---|
| `DELETE` | Specific rows delete cheyochu (WHERE clause tho) |
| `TRUNCATE` | Fast, complete data clear (structure safe) |

> **Caution:** TRUNCATE chesthe data recover cheyadam chala kastam.


### 3. Data Constraints (Rules)

| Constraint | Meaning | Example |
|---|---|---|
| `NOT NULL` | Column empty undakudadu | `name VARCHAR(100) NOT NULL` |
| `UNIQUE` | Same value repeat avakudadu | `email VARCHAR(100) UNIQUE` |
| `CHECK` | Condition satisfy avvali | `age INT CHECK (age >= 18)` |

**Full Example with Constraints:**

```sql
CREATE TABLE students (
 student_id INT PRIMARY KEY,
 name VARCHAR(100) NOT NULL,
 email VARCHAR(100) UNIQUE NOT NULL,
 age INT CHECK (age >= 18 AND age <= 30),
 department VARCHAR(50),
 active BOOLEAN DEFAULT TRUE
);
```


### 5. Practice Examples

**Task 1:** Students table create chesi constraints apply cheyandi.

**Task 2:** Already unna table modify cheyandi:

```sql
-- Add column
ALTER TABLE students ADD COLUMN city VARCHAR(50);

-- Modify column
ALTER TABLE students MODIFY COLUMN city VARCHAR(50) NOT NULL;
```

**Task 3:** `TRUNCATE TABLE students;` try cheyandi.


### Day 3 Homework

1. `employees` table create cheyandi with:
 - `emp_id` → PRIMARY KEY
 - `emp_name` → NOT NULL
 - `email` → UNIQUE & NOT NULL
 - `salary` → CHECK (salary > 0)
2. Already unna table lo oka column add cheyandi, oka column modify cheyandi
3. TRUNCATE try chesi malli data insert cheyandi


### Summary

| Concept | Details |
|---|---|
| ALTER TABLE | Table structure modify cheyadam |
| TRUNCATE TABLE | Data clear cheyadam (structure safe) |
| Constraints | NOT NULL, UNIQUE, CHECK |

> **Next Day (Day 4):** Relational Constraints — Primary Key, Foreign Key & Data Integrity!


## Day 4 — Relational Constraints

Today chala important topic — **Relational Constraints**. Idi tables madhya relations create chesi, data consistency maintain chesthundi. Real projects lo idi backbone laga untundi.


### 1. Primary Key

- Table lo **unique identifier** (every row distinct ga undali)
- One table lo only one Primary Key undochu
- Automatically `NOT NULL + UNIQUE` avuthundi

```sql
CREATE TABLE students (
 student_id INT PRIMARY KEY, -- Primary Key
 name VARCHAR(100) NOT NULL,
 email VARCHAR(100) UNIQUE
);
```

**Composite Primary Key (multiple columns):**

```sql
CREATE TABLE enrollments (
 student_id INT,
 course_id INT,
 enrollment_date DATE,
 PRIMARY KEY (student_id, course_id) -- Combination unique
);
```


### 2. Foreign Key

- Rendu tables madhya **link** create chesthundi
- Child table lo Foreign Key → Parent table Primary Key ni refer chesthundi
- Data integrity maintain chesthundi (wrong references undakudadu)

**Parent Table:**

```sql
CREATE TABLE departments (
 dept_id INT PRIMARY KEY,
 dept_name VARCHAR(100) NOT NULL
);
```

**Child Table:**

```sql
CREATE TABLE students (
 student_id INT PRIMARY KEY,
 name VARCHAR(100) NOT NULL,
 dept_id INT,
 FOREIGN KEY (dept_id) REFERENCES departments(dept_id)
);
```

> **Real Life Example:** `students` table lo `dept_id` undi → `departments` table nunchi matrame valid department IDs. Invalid department id insert cheste error vastundi.


### 3. Data Integrity Constraints (Overview)

| Type | Constraint | Meaning |
|---|---|---|
| Entity Integrity | Primary Key | No duplicates, no null |
| Referential Integrity | Foreign Key | Valid references only |
| Domain Integrity | Data Types + CHECK | Correct data format |


### 4. Practice Examples

**Task 1 — Create Two Related Tables:**

```sql
-- 1. Departments Table
CREATE TABLE departments (
 dept_id INT PRIMARY KEY,
 dept_name VARCHAR(100) NOT NULL
);

-- 2. Students Table with Foreign Key
CREATE TABLE students (
 student_id INT PRIMARY KEY,
 name VARCHAR(100) NOT NULL,
 age INT CHECK (age >= 18),
 dept_id INT,
 FOREIGN KEY (dept_id) REFERENCES departments(dept_id)
);
```

**Task 2 — Data insert chesi test cheyandi:**

```sql
INSERT INTO departments VALUES (1, 'Computer Science');
INSERT INTO students VALUES (101, 'Ramesh', 20, 1); -- Correct
-- INSERT INTO students VALUES (102, 'Sita', 21, 99); -- Error (invalid dept_id)
```


### Day 4 Homework

1. `courses` table create cheyandi (`course_id` as Primary Key)
2. `enrollments` table create cheyandi with:
 - `enrollment_id` as Primary Key
 - `student_id` as Foreign Key (references students)
 - `course_id` as Foreign Key (references courses)
3. Invalid Foreign Key data insert chesi error chudandi


### Summary

| Concept | Details |
|---|---|
| Primary Key | Table lo unique row identifier |
| Foreign Key | Tables madhya relationship create cheyadam |
| Constraints | Data consistency & integrity maintain chesthayi |

> **Next Day (Day 5):** DML — INSERT, UPDATE, DELETE gurinchi chuddam!


## Day 5 — DML: Modifying Data (INSERT, UPDATE, DELETE)

Intha varaku manam tables create chesam (DDL). Today nunchi **Data Manipulation Language (DML)** start chestham.


### 1. SQL Statements Overview

| Type | Commands | Purpose |
|---|---|---|
| DDL | CREATE, ALTER, DROP, TRUNCATE | Tables create/modify/delete |
| DML | INSERT, UPDATE, DELETE, SELECT | Data modify cheyadam |


### 2. INSERT Statement

**Basic Syntax:**

```sql
INSERT INTO table_name (column1, column2,...)
VALUES (value1, value2,...);
```

**Single Row Insert:**

```sql
INSERT INTO students (student_id, name, age, dept_id)
VALUES (101, 'Ramesh', 20, 1);
```

**Multiple Rows Insert:**

```sql
INSERT INTO students (student_id, name, age, dept_id) VALUES 
(102, 'Sita', 21, 2),
(103, 'Krishna', 19, 1),
(104, 'Priya', 22, 3);
```


### 3. UPDATE Statement

```sql
UPDATE table_name 
SET column1 = new_value1, column2 = new_value2
WHERE condition;
```

**Examples:**

```sql
-- Single column update
UPDATE students 
SET age = 21 
WHERE student_id = 101;

-- Multiple columns
UPDATE students 
SET age = 23, dept_id = 2 
WHERE name = 'Sita';
```

> **Warning:** `WHERE` clause lekunda `UPDATE` chesthe table lo **anni rows** change avuthayi!


### 4. DELETE Statement

```sql
DELETE FROM table_name 
WHERE condition;
```

**Examples:**

```sql
-- Single row delete
DELETE FROM students 
WHERE student_id = 104;

-- Multiple rows
DELETE FROM students 
WHERE age < 20;
```

**DELETE vs TRUNCATE:**

| Command | Behavior |
|---|---|
| DELETE | Slow, WHERE condition use cheyochu, Rollback possible |
| TRUNCATE | Fast, complete data clear |


### Day 5 Homework

1. `products` table create cheyandi (`product_id`, `name`, `price`, `stock`)
2. Minimum 8–10 rows insert cheyandi
3. Price update cheyandi (all prices 10% increase)
4. Stock zero unna products delete cheyandi


### Summary

| Command | Purpose |
|---|---|
| INSERT | New data add |
| UPDATE | Existing data modify (WHERE important) |
| DELETE | Rows delete (WHERE important) |

> **Next Day (Day 6):** SELECT statement, FROM, WHERE clause & Operators!


## Day 6 — DML: Querying Data (SELECT Statement)

Today real magic start avuthundi — **Data Querying!** SELECT statement use chesi database nunchi data teesukoni reports prepare cheyochu. Idi SQL lo most important command.


### 1. SELECT Statement Basics

**All Columns Select:**

```sql
SELECT * FROM students; -- * ante all columns
```

**Specific Columns:**

```sql
SELECT name, age, department 
FROM students;
```


### 2. WHERE Clause (Filtering)

```sql
SELECT * FROM table_name 
WHERE condition;
```

**SQL Operators:**

| Operator | Meaning | Example |
|---|---|---|
| `=` | Equal | `age = 20` |
| `!= or <>` | Not Equal | `dept_id != 1` |
| `> / <` | Greater / Less | `age > 21` |
| `>= / <=` | Greater or Equal | `age >= 18` |
| `AND` | Both conditions true | `age > 20 AND dept_id = 1` |
| `OR` | Any one true | `dept_id = 1 OR dept_id = 2` |
| `NOT` | Reverse condition | `NOT (age < 20)` |
| `LIKE` | Pattern matching | `name LIKE 'R%'` |
| `IN` | Multiple values | `dept_id IN (1, 2, 3)` |
| `BETWEEN` | Range | `age BETWEEN 18 AND 25` |

**Examples:**

```sql
-- Single condition
SELECT * FROM students WHERE age > 20;

-- Multiple conditions
SELECT name, age FROM students 
WHERE age >= 20 AND department = 'CSE';

-- Pattern search
SELECT * FROM students 
WHERE name LIKE 'Ra%'; -- Ramesh, Ravi etc.

-- Multiple departments
SELECT * FROM students 
WHERE dept_id IN (1, 3);
```


### Day 6 Homework

1. `students` table lo:
 - Age 21 above unna students complete details
 - 'CSE' or 'ECE' department students names
 - Email unna students (`email IS NOT NULL`)
2. `products` table create chesi 10 records insert chesi queries rayandi


### Summary

| Concept | Details |
|---|---|
| SELECT | Data teesukovatam |
| `*` | All columns |
| WHERE + Operators | Data filter cheyadam |

> **Next Day (Day 7):** ORDER BY, DISTINCT & Week 1 Review!


## Day 7 — Sorting & Formatting Data + Week 1 Review

 **Week 1 complete ayindi!** Today sorting & cleaning data gurinchi chuddam + complete review.


### 1. ORDER BY Clause

```sql
SELECT columns 
FROM table_name 
WHERE condition 
ORDER BY column_name ASC|DESC;
```

**Examples:**

```sql
-- Age ascending order (small to big)
SELECT name, age, department 
FROM students 
ORDER BY age ASC;

-- Age descending (big to small)
SELECT name, age, department 
FROM students 
ORDER BY age DESC;

-- Multiple columns sort
SELECT * FROM students 
ORDER BY department ASC, age DESC;
```

> **Tip:** `ASC` default (ascending). `DESC` use cheste reverse order.


### 2. DISTINCT Keyword

```sql
SELECT DISTINCT column_name 
FROM table_name;
```

**Examples:**

```sql
-- Unique departments
SELECT DISTINCT department FROM students;

-- Unique combinations
SELECT DISTINCT department, age 
FROM students;
```


### 3. Week 1 Complete Review

| Day | Topic Covered |
|---|---|
| Day 1 | Databases, RDBMS, SQL vs NoSQL |
| Day 2 | DDL Basics, Data Types, CREATE TABLE |
| Day 3 | ALTER TABLE, TRUNCATE, Constraints |
| Day 4 | PRIMARY KEY, FOREIGN KEY, Relationships |
| Day 5 | DML — INSERT, UPDATE, DELETE |
| Day 6 | SELECT, FROM, WHERE + Operators |
| Day 7 | ORDER BY, DISTINCT |

**Important Concepts to Remember:**
- WHERE vs Constraints (Constraints → table level, WHERE → query level)
- Always use WHERE with UPDATE & DELETE
- Primary Key & Foreign Key = Relationships backbone


### Day 7 Homework

1. Week 1 lo nerchukunna anni concepts revise cheyandi
2. Oka small project start cheyandi: Student Management System or Library System
3. DB Fiddle lo save chesi links prepare cheyandi (doubts ki)


### Summary

| Concept | Details |
|---|---|
| ORDER BY | Results sort cheyadam |
| DISTINCT | Duplicates remove cheyadam |
| Week 1 | Strong foundation ready! |

> **Next Week (Phase 2):** Aggregation & Joins start!


# PHASE 2 — Aggregation, JOINs & Functions


## Day 8 — Aggregate Functions (SUM, COUNT, AVG, MIN, MAX)

Phase 2 start ayyindi! Today nunchi **Aggregate Functions** nerchukuntam. Idi chala powerful — total sales, average marks, maximum salary lanti summary reports easy ga teesukochu.


### 1. What are Aggregate Functions?

- Multiple rows ni teesukuni **single value** return chesthayi
- Usually `GROUP BY` tho (next day) use avuthayi, but without `GROUP BY` kuda use cheyochu


### 2. Important Aggregate Functions

| Function | Purpose | Example |
|---|---|---|
| `COUNT()` | Rows count cheyadam | `COUNT(*) or COUNT(column)` |
| `SUM()` | Total add cheyadam | `SUM(salary)` |
| `AVG()` | Average (mean) | `AVG(marks)` |
| `MIN()` | Minimum value | `MIN(age)` |
| `MAX()` | Maximum value | `MAX(salary)` |


### 3. Examples

```sql
-- Total number of students
SELECT COUNT(*) AS total_students 
FROM students;

-- Total salary of all employees
SELECT SUM(salary) AS total_salary 
FROM employees;

-- Average age of students
SELECT AVG(age) AS average_age 
FROM students;

-- Youngest student age
SELECT MIN(age) AS youngest 
FROM students;

-- Highest salary
SELECT MAX(salary) AS highest_salary 
FROM employees;

-- Multiple aggregates at once
SELECT 
 COUNT(*) AS total_students,
 AVG(age) AS avg_age,
 MIN(age) AS min_age,
 MAX(age) AS max_age
FROM students;
```

> **Important Notes:**
> - `COUNT(*)` → All rows count (including NULLs)
> - `COUNT(column)` → NULL values count cheyadu
> - Text columns meeda SUM, AVG work avvadhu


### Day 8 Homework

1. `employees` table create cheyandi (emp_id, name, department, salary, join_date)
2. Minimum 10 records insert cheyandi
3. Queries rayandi:
 - Total employees count
 - Total salary of all employees
 - Average salary
 - Highest and lowest salary
 - IT department lo average salary


### Summary

| Concept | Details |
|---|---|
| Aggregate Functions | Multiple rows nunchi single summary value |
| Main Functions | COUNT, SUM, AVG, MIN, MAX |
| Use Case | Reports prepare cheyadaniki |

> **Next Day (Day 9):** GROUP BY & HAVING — idi chala important topic!


## Day 9 — Grouping Data (GROUP BY & HAVING)

Today chala important & powerful topic — **Grouping Data**. Idi real-world reports lo chala use avuthundi (department-wise total salary, month-wise sales, etc.).


### 1. GROUP BY Clause

Similar values unna rows ni **groups** ga divide chesi, aggregate functions apply chesthundi.

```sql
SELECT column1, AGGREGATE_FUNCTION(column2)
FROM table_name
WHERE condition
GROUP BY column1;
```

> **Important Rule:** GROUP BY lo unna columns matrame SELECT lo pettali (or aggregate functions).


### 2. Real Examples

```sql
-- Department-wise student count
SELECT department, COUNT(*) AS student_count
FROM students
GROUP BY department;

-- Department-wise total + average salary
SELECT 
 department,
 COUNT(*) AS emp_count,
 SUM(salary) AS total_salary,
 AVG(salary) AS avg_salary,
 MAX(salary) AS max_salary
FROM employees
GROUP BY department;
```


### 3. HAVING vs WHERE Clause (Chala Important!)

| Clause | When to Use | Works On |
|---|---|---|
| `WHERE` | Individual rows filter (before grouping) | Raw rows |
| `HAVING` | Groups meeda filter (after grouping) | Aggregated data |

```sql
-- WHERE: Filter before grouping
SELECT department, COUNT(*) AS count
FROM students
WHERE age >= 20 -- Individual rows
GROUP BY department;

-- HAVING: Filter after grouping
SELECT department, COUNT(*) AS count
FROM students
GROUP BY department
HAVING COUNT(*) >= 3; -- Only departments with 3+ students
```

**Combined Example:**

```sql
SELECT 
 department,
 AVG(salary) AS avg_salary
FROM employees
WHERE join_date >= '2024-01-01' -- Before grouping
GROUP BY department
HAVING AVG(salary) > 50000; -- After grouping
```


### Day 9 Homework

1. `sales` table create cheyandi (sale_id, product, category, amount, sale_date)
2. 15+ records insert cheyandi
3. Queries rayandi:
 - Category wise total sales
 - Category wise average sale amount
 - Total sales > 100000 unna categories (HAVING use chesi)


### Summary

| Concept | Details |
|---|---|
| GROUP BY | Data ni groups ga divide cheyadam |
| WHERE | Before grouping (row level) |
| HAVING | After grouping (group level) |

> **Next Day (Day 10):** Introduction to JOINs!


## Day 10 — Introduction to JOINs (INNER JOIN & LEFT JOIN)

Today nunchi **JOINs** nerchukuntam. Idi SQL lo most powerful & most asked concept. Rendu or more tables nunchi related data teesukoni single result teesukochu.


### 1. Concept of JOINs

- JOIN ante two or more tables ni **combine** cheyadam
- Common column (Primary Key & Foreign Key) base meeda tables link avuthayi
- **Real life example:** Students table + Departments table combine chesi — student name + department name kanipinchali ante JOIN use cheyali


### 2. INNER JOIN

Most common JOIN. Rendu tables lo **common (matching) records matrame** teesukuntundi.

```sql
SELECT columns
FROM table1
INNER JOIN table2 
 ON table1.common_column = table2.common_column;
```

**Example:**

```sql
SELECT 
 s.student_id,
 s.name,
 s.age,
 d.dept_name
FROM students s
INNER JOIN departments d 
 ON s.dept_id = d.dept_id;
```

> **Note:** `s` & `d` aliases (short names) use cheyadam best practice. Only students who have valid department teesukuntundi.


### 3. LEFT JOIN (LEFT OUTER JOIN)

- Left table lo **anni records** teesukuntundi
- Right table lo match ayithe data vastundi, lekapothe `NULL` vastundi

```sql
SELECT columns
FROM table1
LEFT JOIN table2 
 ON table1.common_column = table2.common_column;
```

> **Use Case:** All students chudali, even if they are not assigned to any department.


### 4. Practice Examples

```sql
-- INNER JOIN
SELECT s.name, d.dept_name 
FROM students s
INNER JOIN departments d ON s.dept_id = d.dept_id;

-- LEFT JOIN
SELECT s.name, d.dept_name 
FROM students s
LEFT JOIN departments d ON s.dept_id = d.dept_id;
```


### Day 10 Homework

1. `orders` table create cheyandi (order_id, customer_id, amount, order_date)
2. `customers` table create cheyandi (customer_id, name, city)
3. 8–10 orders & 5 customers insert cheyandi
4. Queries rayandi:
 - All orders with customer names (INNER JOIN)
 - All customers + their orders (LEFT JOIN)


### Summary

| JOIN Type | Behavior |
|---|---|
| INNER JOIN | Only matching records |
| LEFT JOIN | Left table all + matching from right |

> **Next Day (Day 11):** Advanced JOINs — RIGHT JOIN & FULL OUTER JOIN!


## Day 11 — Advanced JOINs (RIGHT JOIN & FULL OUTER JOIN)

Yesterday INNER JOIN & LEFT JOIN nerchukunnam. Today **Advanced JOINs** complete chestham.


### 1. RIGHT JOIN (RIGHT OUTER JOIN)

- Right table lo **anni records** teesukuntundi
- Left table lo match ayithe data vastundi, lekapothe `NULL` vastundi

```sql
SELECT 
 s.name,
 s.age,
 d.dept_name
FROM students s
RIGHT JOIN departments d 
 ON s.dept_id = d.dept_id;
```

> **Use Case:** All departments chudali, even if no students are there.


### 2. FULL OUTER JOIN (FULL JOIN)

- Both tables lo **anni records** teesukuntundi
- Match ayithe normal data, lekapothe NULLs vastayi

**MySQL lo FULL JOIN simulation:**

```sql
-- MySQL lo FULL JOIN simulation
SELECT * FROM students s
LEFT JOIN departments d ON s.dept_id = d.dept_id
UNION
SELECT * FROM students s
RIGHT JOIN departments d ON s.dept_id = d.dept_id;
```


### 3. Quick Comparison — All JOINs

| JOIN Type | Takes from Left | Takes from Right | When to Use |
|---|---|---|---|
| INNER JOIN | Matching only | Matching only | Common data |
| LEFT JOIN | All | Matching | All from left |
| RIGHT JOIN | Matching | All | All from right |
| FULL OUTER JOIN | All | All | Complete data |


### Day 11 Homework

1. orders & customers tables (Day 10) use chesi RIGHT JOIN & FULL OUTER JOIN try cheyandi
2. products & categories tables create chesi all 4 JOINs test cheyandi


### Summary

| JOIN | Behavior |
|---|---|
| RIGHT JOIN | Right table all records |
| FULL OUTER JOIN | Both tables all records |

> **Next Day (Day 12):** Special JOINs — Self Join & Cross Join!


## Day 12 — Special JOINs (Self Join & Cross Join)

JOINs series almost complete. Today **Special JOINs** nerchukuntam.


### 1. Self Join

Same table ni rendu parts ga treat chesi JOIN cheyadam. Table lo self relationship unna cases lo use chestham.

**Real Life Examples:**
- Employee table lo manager name kuda kavali (manager kuda same table lo undi)
- Family tree, Product categories (parent-child)

**Example (Employees Table):**

```sql
CREATE TABLE employees (
 emp_id INT PRIMARY KEY,
 name VARCHAR(100),
 manager_id INT
);

-- Self Join
SELECT 
 e1.name AS employee_name,
 e2.name AS manager_name
FROM employees e1
LEFT JOIN employees e2 
 ON e1.manager_id = e2.emp_id;
```

> **Explanation:** e1 = Employee, e2 = Manager (same table).


### 2. Cross Join (Cartesian Product)

Rendu tables lo **every row with every row** combine chesthundi. No ON condition.

```sql
SELECT 
 c.color,
 s.size
FROM colors c
CROSS JOIN sizes s;
```

> **Result:** 3 colors + 4 sizes = 12 combinations vastayi.
>
> **Caution:** Chala rows unte huge result set vastundi (performance issue).


### Day 12 Homework

1. `employees` table create chesi Self Join use chesi hierarchy display cheyandi
2. `products` & `regions` tables create chesi Cross Join try cheyandi


### Summary

| JOIN | Use Case |
|---|---|
| Self Join | Same table tho JOIN (hierarchies ki best) |
| Cross Join | All possible combinations |

> **Next Day (Day 13):** Built-in Functions — String & Numeric Functions!


## Day 13 — Built-in Functions (String & Numeric Functions)

Today manam **Built-in Functions** nerchukuntam. Idi SQL lo chala useful — names correct cheyadam, text modify cheyadam, numbers round cheyadam. Real projects lo daily use avuthayi.


### 1. String Functions (Text Handling)

| Function | Purpose | Example |
|---|---|---|
| `CONCAT()` | Strings combine cheyadam | `CONCAT(first_name, ' ', last_name)` |
| `LENGTH()` | String length | `LENGTH(name)` |
| `SUBSTRING()` | Part of string teesukovatam | `SUBSTRING(name, 1, 5)` |
| `REPLACE()` | Text replace cheyadam | `REPLACE(name, 'old', 'new')` |
| `UPPER()` | Capital letters | `UPPER(name)` |
| `LOWER()` | Small letters | `LOWER(name)` |
| `TRIM()` | Extra spaces remove | `TRIM(name)` |

**Examples:**

```sql
SELECT 
 name,
 UPPER(name) AS upper_name,
 LOWER(name) AS lower_name,
 LENGTH(name) AS name_length,
 CONCAT(name, ' - ', department) AS full_info
FROM students;

-- SUBSTRING example
SELECT SUBSTRING(name, 1, 3) AS short_name 
FROM students;
```


### 2. Numeric Functions

| Function | Purpose | Example |
|---|---|---|
| `ROUND()` | Nearest integer / decimal | `ROUND(salary, 2)` |
| `CEILING()` | Up round (next integer) | `CEILING(4.1)` → 5 |
| `FLOOR()` | Down round (previous integer) | `FLOOR(4.9)` → 4 |
| `ABS()` | Absolute value (positive) | `ABS(-500)` → 500 |
| `MOD()` | Remainder (modulo) | `MOD(10, 3)` → 1 |

**Examples:**

```sql
SELECT 
 salary,
 ROUND(salary) AS rounded_salary,
 CEILING(salary) AS ceiling_salary,
 FLOOR(salary) AS floor_salary
FROM employees;
```


### Day 13 Homework

1. `employees` table lo:
 - Full name (first + last) CONCAT use chesi create cheyandi
 - Email UPPER case lo convert cheyandi
 - Salary round chesi display cheyandi
2. `products` table meeda price > 1000 ki 10% discount apply cheyandi


### Summary

| Category | Functions |
|---|---|
| String Functions | CONCAT, UPPER, LOWER, LENGTH, SUBSTRING, REPLACE, TRIM |
| Numeric Functions | ROUND, CEILING, FLOOR, ABS, MOD |

> **Next Day (Day 14):** Date, Time & Conditional Functions — CASE, COALESCE!


## Day 14 — Date, Time & Conditional Functions

Today manam **Date & Time Functions + Conditional Logic** nerchukuntam. Idi real-world projects lo chala important.


### 1. Date and Time Functions

| Function | Purpose | Example |
|---|---|---|
| `CURDATE()` | Today's date | `CURDATE()` |
| `NOW()` | Current date + time | `NOW()` |
| `DATE_ADD()` | Date meeda days/months add | `DATE_ADD(join_date, INTERVAL 30 DAY)` |
| `DATE_SUB()` | Date nunchi subtract | `DATE_SUB(NOW(), INTERVAL 1 YEAR)` |
| `DATEDIFF()` | Rendu dates madhya days difference | `DATEDIFF('2025-12-31', CURDATE())` |
| `YEAR(), MONTH(), DAY()` | Extract part | `YEAR(join_date)` |

**Examples:**

```sql
SELECT 
 NOW() AS current_datetime,
 CURDATE() AS today,
 DATE_ADD(CURDATE(), INTERVAL 7 DAY) AS after_one_week,
 DATEDIFF('2025-12-31', CURDATE()) AS days_to_year_end;

-- Employees experience
SELECT 
 name,
 join_date,
 DATEDIFF(CURDATE(), join_date) AS days_since_joined
FROM employees;
```


### 2. Conditional Functions

**A. CASE Statement (SQL lo IF-ELSE laga):**

```sql
SELECT 
 name,
 salary,
 CASE 
 WHEN salary >= 80000 THEN 'High'
 WHEN salary >= 50000 THEN 'Medium'
 ELSE 'Low'
 END AS salary_category
FROM employees;
```

**B. COALESCE() — NULL handle cheyadam:**

```sql
SELECT 
 name,
 COALESCE(email, 'No Email Provided') AS contact_email
FROM students;
```

**C. Combined Example:**

```sql
SELECT 
 name,
 join_date,
 CASE 
 WHEN DATEDIFF(CURDATE(), join_date) > 365 THEN 'Experienced'
 ELSE 'Fresher'
 END AS experience_level
FROM employees;
```


### Day 14 Homework

1. `employees` table lo join_date add cheyandi
2. Queries rayandi:
 - Last 6 months lo join chesina employees
 - Experience in years (DATEDIFF use chesi)
 - Salary based CASE category
 - Email leni employees (COALESCE)


### Summary

| Category | Functions |
|---|---|
| Date Functions | NOW(), CURDATE(), DATE_ADD(), DATEDIFF(), YEAR(), MONTH() |
| Conditional | CASE, COALESCE, NULLIF |

> **Next Day (Day 15):** Introduction to Subqueries — Phase 3 Advanced start!


# PHASE 3 — Advanced Querying


## Day 15 — Introduction to Subqueries

Phase 3 Advanced Querying start ayyindi! Today nunchi **Subqueries** nerchukuntam — oka query ni inko query lo use cheyadam.


### 1. What are Subqueries?

- **Subquery** ante inner query (main query lopala unna chinnadi query)
- Inner query first run ayi result teesukoni, outer query lo use avuthundi
- Complex problems ni simple ga break cheyadaniki use chestham

```sql
SELECT columns 
FROM table 
WHERE column = (SELECT column FROM table WHERE condition);
```


### 2. Types of Subqueries

**A. Scalar Subquery (Single Value Return):**

```sql
-- Highest salary unna employee details
SELECT name, salary 
FROM employees 
WHERE salary = (
 SELECT MAX(salary) 
 FROM employees
);
```

**B. Column Subquery (Multiple Values):**

```sql
-- Average salary kanna ekkuva salary unna employees
SELECT name, salary 
FROM employees 
WHERE salary > (SELECT AVG(salary) FROM employees);
```

**C. Subquery in FROM Clause (Inline View):**

```sql
SELECT dept_name, total_students 
FROM (
 SELECT department, COUNT(*) as total_students 
 FROM students 
 GROUP BY department
) AS dept_summary;
```


### Day 15 Homework

1. Company average salary kanna ekkuva salary unna employees list
2. Each department lo highest salary unna employee
3. Notes lo: Subquery vs JOIN difference rayandi


### Summary

| Subquery Type | Return |
|---|---|
| Scalar | Single value |
| Column | Multiple values in one column |
| Table (FROM clause) | Temporary table |

> **Next Day (Day 16):** Advanced Subqueries — Nested & Correlated Subqueries!


## Day 16 — Advanced Subqueries

Today **Advanced Subqueries** nerchukuntam. Idi interviews lo chala adugutharu.


### 1. Nested Subqueries (Multiple levels)

```sql
-- Highest salary unna department lo unna employees
SELECT name, salary 
FROM employees 
WHERE department = (
 SELECT department 
 FROM employees 
 WHERE salary = (SELECT MAX(salary) FROM employees)
);
```


### 2. Correlated Subqueries (Most Important & Tricky)

- Outer query & inner query **related** ga untayi
- Inner query outer query row prati row ki **run avuthundi**
- Chala slow avvochu, but konni problems ki best

```sql
-- Each employee ki thana department average salary kanna ekkuva salary unna employees
SELECT 
 e1.name,
 e1.salary,
 e1.department
FROM employees e1
WHERE e1.salary > (
 SELECT AVG(e2.salary) 
 FROM employees e2
 WHERE e2.department = e1.department -- Correlation
);
```


### 3. Table Subqueries (Subquery in FROM clause)

```sql
SELECT 
 dept_name,
 total_emp,
 avg_salary
FROM (
 SELECT 
 department,
 COUNT(*) as total_emp,
 AVG(salary) as avg_salary
 FROM employees
 GROUP BY department
) AS dept_summary
WHERE avg_salary > 50000;
```


### Day 16 Homework

1. Department wise highest salary employee (Correlated Subquery)
2. Company lo 2nd highest salary employee (Nested Subquery)
3. Notes lo: Subquery vs JOIN — eppudu em use cheyali


### Summary

| Type | Behavior |
|---|---|
| Nested | Subquery inside subquery |
| Correlated | Outer & inner query related (row by row) |
| Table Subquery | FROM clause lo temporary table |

> **Next Day (Day 17):** Database Views!


## Day 17 — Database Views

Today manam **Database Views** nerchukuntam. Views are like virtual tables — real table laga kanipistayi, kani actual data store cheyaru.


### 1. What are Views?

- View oka **saved SQL query** laga undi
- Real table laga use cheyochu (SELECT cheyochu), kani physical ga data store cheyadu
- Original table lo data change ayithe view lo kuda automatic ga update avuthundi

**Advantages:**
- Complex queries ni simplify chesthundi
- Security: Sensitive data hide cheyochu
- Code reusability


### 2. Creating Views

```sql
CREATE VIEW student_details AS
SELECT 
 s.student_id,
 s.name,
 s.age,
 d.dept_name
FROM students s
LEFT JOIN departments d ON s.dept_id = d.dept_id;
```

**View use cheyadam:**

```sql
SELECT * FROM student_details;
SELECT * FROM student_details WHERE age > 20;
```


### 3. Modifying & Dropping Views

```sql
-- Modify
CREATE OR REPLACE VIEW student_details AS
SELECT * FROM students WHERE active = TRUE;

-- Drop
DROP VIEW IF EXISTS student_details;
```


### Day 17 Homework

1. `orders, customers, products` tables use chesi views create cheyandi:
 - `customer_orders_summary` (customer name + total orders + total amount)
 - `active_products` view
2. Notes lo: View vs Table difference, Views ekkada use chestham


### Summary

| Command | Purpose |
|---|---|
| CREATE VIEW | Create view |
| CREATE OR REPLACE | Modify view |
| DROP VIEW | Delete view |

> **Next Day (Day 18):** Common Table Expressions (CTEs)!


## Day 18 — Common Table Expressions (CTEs)

Today manam **CTEs** nerchukuntam. Idi modern SQL lo chala popular & powerful feature.


### 1. What is CTE?

- CTE oka **temporary result set** — oka query result ni temporary name ivvadam
- `WITH` keyword tho start avuthundi
- Subquery kanna much cleaner & readable

**Advantages over Subqueries:**
- Code easy to read & maintain
- Same CTE ni multiple times use cheyochu
- Recursive queries rayochu


### 2. Syntax

```sql
WITH cte_name AS (
 SELECT columns 
 FROM table 
 WHERE condition
)
SELECT * FROM cte_name;
```

**Real Example:**

```sql
WITH dept_avg AS (
 SELECT 
 department,
 AVG(salary) AS avg_salary,
 COUNT(*) AS emp_count
 FROM employees
 GROUP BY department
)
SELECT 
 e.name,
 e.department,
 e.salary,
 d.avg_salary
FROM employees e
JOIN dept_avg d ON e.department = d.department
WHERE e.salary > d.avg_salary;
```


### 3. Multiple CTEs in One Query

```sql
WITH 
 dept_summary AS (
 SELECT department, AVG(salary) AS avg_salary 
 FROM employees 
 GROUP BY department
 ),
 high_earners AS (
 SELECT * 
 FROM employees 
 WHERE salary > 60000
 )
SELECT 
 h.name,
 h.department,
 d.avg_salary
FROM high_earners h
JOIN dept_summary d ON h.department = d.department;
```


### 4. CTE vs Subquery vs View

| Feature | Subquery | CTE | View |
|---|---|---|---|
| Readability | Low | High | High |
| Reusability | Low | Medium | High (permanent) |
| Recursive | Difficult | Easy | Not for recursive |


### Day 18 Homework

1. `sales` table meeda:
 - `monthly_sales` CTE (month-wise total sales)
 - `top_products` CTE (top 5 selling products)
2. Two CTEs together use chesi oka complex query rayandi


### Summary

| Concept | Details |
|---|---|
| CTE | Temporary named result set (WITH clause) |
| Multiple CTEs | Same query lo use cheyochu |
| Best Practice | Modern SQL lo CTEs preferred |

> **Next Day (Day 19):** Window Functions Part 1 — Interviews lo most asked!


## Day 19 — Window Functions: Part 1 (ROW_NUMBER, RANK, DENSE_RANK)

Today manam **Window Functions** nerchukuntam. Idi SQL lo one of the most powerful & frequently asked advanced features.


### 1. Concept of Window Functions

- Normal aggregate functions → All rows meeda oka single value
- Window Functions → Anni rows meeda work chesthu, **each row ki oka result** isthundi
- `OVER()` clause use chesi window create chestham

**Basic Syntax:**

```sql
SELECT 
 column1,
 AGGREGATE_FUNCTION(column2) OVER (PARTITION BY column3 ORDER BY column4) AS new_column
FROM table;
```

**Key Parts:**
- `PARTITION BY` → Groups create cheyadam (like GROUP BY but without collapsing rows)
- `ORDER BY` → Ranking or running total kosam
- `OVER()` → Window define cheyadam


### 2. ROW_NUMBER()

Prati row ki **unique sequential number** isthundi (1, 2, 3...).

```sql
SELECT 
 name,
 department,
 salary,
 ROW_NUMBER() OVER (PARTITION BY department ORDER BY salary DESC) AS rank_in_dept
FROM employees;
```


### 3. RANK() & DENSE_RANK()

| Function | Purpose | Gaps in Ranking |
|---|---|---|
| `RANK()` | Rank isthundi, same values unte gap | Yes (1, 2, 2, 4) |
| `DENSE_RANK()` | Rank isthundi, no gaps | No (1, 2, 2, 3) |

```sql
SELECT 
 name,
 department,
 salary,
 RANK() OVER (PARTITION BY department ORDER BY salary DESC) AS rank,
 DENSE_RANK() OVER (PARTITION BY department ORDER BY salary DESC) AS dense_rank
FROM employees;
```


### Day 19 Homework

1. `employees` table meeda department wise salary rank (RANK & DENSE_RANK)
2. Company lo overall highest to lowest salary ranking
3. `sales` table meeda month wise top 5 selling products


### Summary

| Function | Behavior |
|---|---|
| ROW_NUMBER() | Unique sequential number per row |
| RANK() | Ranking with gaps |
| DENSE_RANK() | Ranking without gaps |

> **Next Day (Day 20):** Window Functions Part 2 — LEAD() & LAG()!


## Day 20 — Window Functions: Part 2 (LEAD & LAG)

Today **LEAD() & LAG()** nerchukuntam. Idi business reports lo chala use avuthundi (previous month sales, growth calculation).


### 1. LAG() Function

**Previous row value** teesukuntundi.

```sql
LAG(column_name, offset, default_value) 
OVER (PARTITION BY... ORDER BY...)
```

**Example:**

```sql
SELECT 
 name,
 department,
 salary,
 LAG(salary) OVER (PARTITION BY department ORDER BY salary DESC) AS previous_salary
FROM employees;
```


### 2. LEAD() Function

**Next row value** teesukuntundi.

```sql
LEAD(column_name, offset, default_value) 
OVER (PARTITION BY... ORDER BY...)
```

**Example:**

```sql
SELECT 
 order_date,
 amount,
 LEAD(amount) OVER (ORDER BY order_date) AS next_order_amount,
 amount - LEAD(amount) OVER (ORDER BY order_date) AS difference
FROM orders;
```

**Practical Example — Sales Growth:**

```sql
SELECT 
 month,
 total_sales,
 LAG(total_sales) OVER (ORDER BY month) AS prev_month_sales,
 total_sales - LAG(total_sales) OVER (ORDER BY month) AS growth
FROM monthly_sales;
```


### Day 20 Homework

1. `sales` table meeda:
 - Month wise previous month sales compare chesi growth % (LAG)
 - Each product ki next month sales (LEAD)
2. `employees` table — department wise salary difference with previous (LAG)


### Summary

| Function | Behavior |
|---|---|
| LAG() | Previous row value |
| LEAD() | Next row value |
| Use Case | Time series, Sales comparison, Performance tracking |

> **Next Day (Day 21):** Data Transformation — Pivot & Unpivot!


## Day 21 — Data Transformation (Pivot & Unpivot Operations)

Phase 3 complete avuthundi! Today manam **Pivot & Unpivot** nerchukuntam. Excel lo Pivot Table laga, SQL lo kuda idi possible.


### 1. Pivot (Rows → Columns)

```sql
-- Month-wise Sales Pivot
SELECT 
 product,
 SUM(CASE WHEN MONTH(sale_date) = 1 THEN amount ELSE 0 END) AS Jan_Sales,
 SUM(CASE WHEN MONTH(sale_date) = 2 THEN amount ELSE 0 END) AS Feb_Sales,
 SUM(CASE WHEN MONTH(sale_date) = 3 THEN amount ELSE 0 END) AS Mar_Sales
FROM sales
GROUP BY product;
```


### 2. Unpivot (Columns → Rows)

```sql
SELECT 
 student_id,
 'Maths' AS subject,
 maths_marks AS marks
FROM students
UNION ALL
SELECT 
 student_id,
 'Physics' AS subject,
 physics_marks AS marks
FROM students
UNION ALL
SELECT 
 student_id,
 'Chemistry' AS subject,
 chemistry_marks AS marks
FROM students;
```


### Day 21 Homework

1. `sales` table create chesi 20+ records insert cheyandi
2. Month-wise Pivot report prepare cheyandi (Jan to Jun)
3. Oka table unpivot chesi normal row format lo convert cheyandi


### Summary

| Operation | Description |
|---|---|
| Pivot | Rows → Columns (CASE + SUM use chesi) |
| Unpivot | Columns → Rows (UNION use chesi) |

> **Phase 3 Complete! **
> **Next Day (Day 22):** Indexes — Phase 4 Architecture & Optimization start!


# PHASE 4 — Architecture, Optimization & Security


## Day 22 — Indexes

Phase 4 start ayyindi! Today manam **Indexes** gurinchi nerchukuntam. Idi SQL performance improve cheyadaniki most important concept.


### 1. What are Indexes?

- Index oka **book index** laga undi — fast ga data find cheyadaniki
- Extra data structure maintain chesthundi (usually B-Tree)
- Without Index → Full table scan (chala slow)
- With Index → Direct jump to data (very fast)

**Advantages:** SELECT queries fast, WHERE / ORDER BY / GROUP BY / JOINs improve
**Disadvantages:** INSERT, UPDATE, DELETE slow avuthayi, Extra storage space


### 2. Creating Indexes

```sql
-- Simple Index
CREATE INDEX index_name 
ON table_name (column_name);

-- Unique Index
CREATE UNIQUE INDEX index_name 
ON table_name (column_name);

-- Composite Index (Multiple Columns)
CREATE INDEX idx_dept_salary 
ON employees (department, salary);
```


### 3. Dropping Indexes

```sql
DROP INDEX idx_student_name ON students;

-- Show all indexes
SHOW INDEX FROM students;
```


### 4. When to Use Index — Best Practices

- Frequently used `WHERE` columns meeda index pettandi
- `Foreign Key` columns meeda index pettandi
- Composite indexes order matter (most selective column first)
- **Over-indexing vaddu** (performance drop avuthundi)

```sql
-- Index use ayye query
SELECT * FROM students 
WHERE name = 'Ramesh'; -- Fast if index on name

-- Index use avvakapovachu
SELECT * FROM students 
WHERE name LIKE '%mesh%'; -- Leading wildcard valla index use avvadhu
```


### Day 22 Homework

1. `students, employees, orders` tables meeda indexes create cheyandi
2. `SHOW INDEX FROM table_name;` use chesi existing indexes list cheyandi
3. Notes lo: Index advantages & disadvantages, Over-indexing problem emiti


### Summary

| Concept | Details |
|---|---|
| Index | Fast search kosam special data structure |
| CREATE INDEX | Create cheyyadam |
| DROP INDEX | Remove cheyyadam |
| Best Use | WHERE, JOIN, ORDER BY columns |

> **Next Day (Day 23):** Transactions & ACID Properties!


## Day 23 — Transactions & ACID Properties

Today manam **Transactions** gurinchi nerchukuntam. Idi real-world applications lo chala important — banking, e-commerce, booking systems.


### 1. What is a Transaction?

- Transaction ante one or more SQL statements **oka single unit** ga treat cheyadam
- Success ayithe all changes **commit** avuthayi
- Failure ayithe all changes **rollback** (cancel) avuthayi

**Real Life Example:** Bank lo money transfer — Account A nunchi debit, Account B ki credit. Oka step fail ayithe rendu reverse avvali.


### 2. ACID Properties

| Property | Meaning | Example |
|---|---|---|
| Atomicity | All or Nothing | Money transfer complete or nothing |
| Consistency | Database rules always valid | Balance negative undakudadu |
| Isolation | Transactions interfere avakudadu | Two people same time same account safe |
| Durability | Committed changes permanent | Bank transfer success ayithe permanent |


### 3. Transaction Commands

```sql
BEGIN; -- or START TRANSACTION;

UPDATE accounts SET balance = balance - 5000 WHERE id = 101;
UPDATE accounts SET balance = balance + 5000 WHERE id = 102;

COMMIT; -- Success → Save all changes

-- OR

ROLLBACK; -- Fail ayithe → All changes cancel
```

**SAVEPOINT (Partial Rollback):**

```sql
BEGIN;
SAVEPOINT point1;

UPDATE...;
SAVEPOINT point2;

-- Problem vasthe
ROLLBACK TO point1; -- Only point1 varaku rollback
```


### Day 23 Homework

1. `accounts` table create cheyandi (account_id, name, balance)
2. Money transfer simulation: BEGIN, COMMIT, ROLLBACK try cheyandi
3. SAVEPOINT use chesi partial rollback try cheyandi


### Summary

| Command | Purpose |
|---|---|
| BEGIN | Transaction start |
| COMMIT | All changes save |
| ROLLBACK | All changes cancel |
| SAVEPOINT | Partial rollback point |

> **Next Day (Day 24):** Advanced Transactions — Isolation Levels!


## Day 24 — Advanced Transactions: Isolation Levels

Today **Transaction Isolation Levels** gurinchi chuddam. Idi multi-user environments lo chala important.


### 1. Four Isolation Levels

| Isolation Level | Dirty Read | Non-Repeatable Read | Phantom Read | Performance |
|---|---|---|---|---|
| READ UNCOMMITTED | Yes | Yes | Yes | Highest |
| READ COMMITTED | No | Yes | Yes | High |
| REPEATABLE READ | No | No | Yes | Medium |
| SERIALIZABLE | No | No | No | Lowest |


### 2. Explanation

**READ UNCOMMITTED (Lowest):** Uncommitted data (dirty data) kuda chudochu.

```sql
SET TRANSACTION ISOLATION LEVEL READ UNCOMMITTED;
```

**READ COMMITTED (Default in many databases):** Only committed data chudochu.

```sql
SET TRANSACTION ISOLATION LEVEL READ COMMITTED;
```

**REPEATABLE READ:** Same query rendu sarlu run cheste same result.

```sql
SET TRANSACTION ISOLATION LEVEL REPEATABLE READ;
```

**SERIALIZABLE (Highest Safety):** Transactions one by one execute chesthayi.

```sql
SET TRANSACTION ISOLATION LEVEL SERIALIZABLE;
```


### Day 24 Homework

1. All 4 isolation levels set chesi test cheyandi
2. Notes lo: Banking ki best level enti? E-commerce ki enti?


### Summary

| Level | Safety | Performance | Use Case |
|---|---|---|---|
| READ UNCOMMITTED | Lowest | Fastest | Testing only |
| READ COMMITTED | Medium | High | Most common |
| REPEATABLE READ | High | Medium | Good balance |
| SERIALIZABLE | Highest | Slowest | Banking, Critical |

> **Next Day (Day 25):** Data Security — GRANT, REVOKE & Best Practices!


## Day 25 — Data Security & Integrity

Today manam **Data Security & Integrity** gurinchi nerchukuntam. Real projects lo idi chala important — sensitive data protect cheyadam.


### 1. GRANT Command

```sql
GRANT privileges 
ON database_name.table_name 
TO 'username'@'host';
```

**Common Examples:**

```sql
-- Read only permission
GRANT SELECT ON company.employees TO 'analyst'@'localhost';

-- Full permissions
GRANT ALL PRIVILEGES ON company.* TO 'admin'@'localhost';

-- Specific permissions
GRANT SELECT, INSERT, UPDATE 
ON company.students 
TO 'teacher'@'%';

-- Apply cheyali
FLUSH PRIVILEGES;
```


### 2. REVOKE Command

```sql
REVOKE privileges 
ON database_name.table_name 
FROM 'username'@'host';
```

**Examples:**

```sql
REVOKE ALL PRIVILEGES ON company.* FROM 'temp_user'@'localhost';
REVOKE SELECT ON company.salaries FROM 'analyst'@'localhost';
```


### 3. Database Security Best Practices

1. **Least Privilege Principle** — Only needed permissions ivvandi
2. **Strong Passwords** use cheyandi
3. **Different Users** create cheyandi (admin, developer, analyst, read-only)
4. **Regular Backups** teesukondi
5. **Encryption** use cheyandi (passwords, Aadhaar columns)
6. **Audit Logs** enable cheyandi (who changed what)
7. Never give root access to application users
8. UPDATE & DELETE permissions careful ga ivvandi

**User Creation Example:**

```sql
CREATE USER 'report_user'@'localhost' IDENTIFIED BY 'StrongPass123!';
GRANT SELECT ON company.* TO 'report_user'@'localhost';
```


### Day 25 Homework

1. Users create cheyandi:
 - `admin_user` → Full access
 - `read_only_user` → SELECT only
 - `data_entry_user` → INSERT & UPDATE only
2. REVOKE use chesi oka permission teesukondi
3. Notes lo: Real company lo security ela maintain chestharu


### Summary

| Command | Purpose |
|---|---|
| GRANT | Permissions ivvadam |
| REVOKE | Permissions teesukovadam |
| FLUSH PRIVILEGES | Changes apply cheyadam |

> **Next Day (Day 26):** Stored Procedures & User-Defined Functions!


## Day 26 — Database Programming (Stored Procedures & UDFs)

Today manam **Database Programming** nerchukuntam — SQL ni programming laga use cheyadaniki.


### 1. Stored Procedures

**Syntax:**

```sql
DELIMITER //

CREATE PROCEDURE procedure_name (IN param1 datatype, OUT param2 datatype)
BEGIN
 -- SQL statements
END //

DELIMITER ;
```

**Example:**

```sql
DELIMITER //

CREATE PROCEDURE GetStudentDetails(IN stud_id INT)
BEGIN
 SELECT name, age, department 
 FROM students 
 WHERE student_id = stud_id;
END //

DELIMITER ;

-- Call
CALL GetStudentDetails(101);
```

**Procedure with Transaction:**

```sql
DELIMITER //

CREATE PROCEDURE TransferMoney(
 IN from_acc INT, 
 IN to_acc INT, 
 IN amount DECIMAL(10,2)
)
BEGIN
 START TRANSACTION;
 
 UPDATE accounts SET balance = balance - amount WHERE id = from_acc;
 UPDATE accounts SET balance = balance + amount WHERE id = to_acc;
 
 COMMIT;
END //

DELIMITER ;
```


### 2. User-Defined Functions (UDF)

```sql
DELIMITER //

CREATE FUNCTION GetAgeCategory(age INT) 
RETURNS VARCHAR(20)
DETERMINISTIC
BEGIN
 IF age < 18 THEN
 RETURN 'Minor';
 ELSEIF age BETWEEN 18 AND 25 THEN
 RETURN 'Young';
 ELSE
 RETURN 'Adult';
 END IF;
END //

DELIMITER ;

-- Using Function
SELECT name, age, GetAgeCategory(age) AS category 
FROM students;
```


### Day 26 Homework

1. `GetEmployeeInfo(emp_id)` procedure create cheyandi
2. `CalculateBonus(salary)` function create cheyandi (salary * 0.10)
3. Money transfer procedure create & test cheyandi
4. Notes lo: Stored Procedure vs Function difference


### Summary

| Concept | Purpose |
|---|---|
| Stored Procedures | Multiple statements, business logic |
| User-Defined Functions | Return single value, calculations |
| Benefit | Code reusability & Security |

> **Next Day (Day 27):** Performance Optimization Part 1 — EXPLAIN & Query Tuning!


## Day 27 — Performance Optimization: Part 1

Phase 4 lo important part — **Performance Optimization**. Real projects lo slow queries chala common problem.


### 1. Query Analysis — EXPLAIN Command

```sql
EXPLAIN SELECT * FROM students WHERE name = 'Ramesh';
```

**EXPLAIN Output Important Columns:**
- `type`: ALL (bad), INDEX, REF, EQ_REF (good)
- `key`: Index use ayinda?
- `rows`: Enni rows scan avuthunnayi (takkuva better)


### 2. Query Optimization Techniques

**A. Avoid Common Mistakes:**

```sql
-- Bad (Slow) — Function on indexed column
SELECT * FROM employees WHERE YEAR(join_date) = 2025;

-- Good (Fast) — Range condition
SELECT * FROM employees 
WHERE join_date >= '2025-01-01' 
AND join_date < '2026-01-01';
```

**B. Other Tips:**
- `LIMIT` use cheyandi (only needed rows)
- `SELECT *` avoid cheyandi — specific columns only
- Functions on indexed columns avoid cheyandi (`WHERE UPPER(name) = 'RAMESH'` → index use avvadhu)
- JOIN order correct ga undali (small table first)


### Day 27 Homework

1. `sales` table meeda slow query create chesi `EXPLAIN` run cheyandi
2. Following queries optimize cheyandi:
 - `SELECT * FROM orders WHERE MONTH(order_date) = 6;`
 - Large table nunchi top 10 customers query
3. Notes lo: 5 important optimization tips, EXPLAIN output lo em chudali


### Summary

| Tool | Purpose |
|---|---|
| EXPLAIN | Query execution analysis |
| Indexes | Fast search |
| Avoid SELECT * | Only needed columns |
| Avoid functions on indexed columns | Index bypass avvadam vaddu |

> **Next Day (Day 28):** Performance Optimization Part 2 — Optimizing JOINs & Subqueries!


## Day 28 — Performance Optimization: Part 2

Today **JOINs & Subqueries optimize** cheyadam gurinchi chuddam — idi real projects lo chala common bottleneck.


### 1. Optimizing JOINs

```sql
-- Always Index JOIN columns
CREATE INDEX idx_dept_id ON students(dept_id);
CREATE INDEX idx_dept_id ON departments(dept_id);
```

**Avoid unnecessary columns:**

```sql
-- Bad
SELECT * FROM students s JOIN departments d ON s.dept_id = d.dept_id;

-- Good
SELECT s.name, s.age, d.dept_name 
FROM students s 
JOIN departments d ON s.dept_id = d.dept_id;
```


### 2. Replacing Subqueries with JOINs or CTEs

**Bad (Slow Correlated Subquery):**

```sql
SELECT name, salary 
FROM employees e1
WHERE salary > (SELECT AVG(salary) FROM employees e2 
 WHERE e2.department = e1.department);
```

**Good (Using JOIN + CTE):**

```sql
WITH dept_avg AS (
 SELECT department, AVG(salary) AS avg_salary 
 FROM employees 
 GROUP BY department
)
SELECT 
 e.name,
 e.salary,
 d.avg_salary
FROM employees e
JOIN dept_avg d ON e.department = d.department
WHERE e.salary > d.avg_salary;
```


### 3. Additional Tips

- `LIMIT + ORDER BY` correct ga use cheyandi
- Avoid `SELECT DISTINCT` unnecessary ga
- Large data unte pagination implement cheyandi (`LIMIT + OFFSET`)


### Day 28 Homework

1. Day 10–16 lo nerchukunna JOINs & Subqueries optimize cheyandi
2. Slow JOIN query create chesi EXPLAIN run chesi improvements cheyandi


### Summary

| Technique | Benefit |
|---|---|
| Index JOIN columns | JOIN speed improve |
| Small table first in JOIN | Memory efficient |
| Replace Correlated Subquery with CTE | Speed + Readability |
| LIMIT use cheyandi | Only needed rows fetch |

> **Next Day (Day 29):** Advanced SQL — Recursive CTEs & Dynamic SQL!


## Day 29 — Advanced SQL Techniques

Today manam **Recursive Queries & Dynamic SQL** nerchukuntam — advanced level topics.


### 1. Recursive Queries (Recursive CTEs)

**Real Life Use Cases:**
- Employee Hierarchy (Manager → Employee)
- Bill of Materials (Product parts)
- Menu/Submenu structures

**Syntax:**

```sql
WITH RECURSIVE cte_name AS (
 -- Anchor Member (Starting point)
 SELECT columns FROM table WHERE condition
 
 UNION ALL
 
 -- Recursive Member (Self reference)
 SELECT columns 
 FROM table t
 JOIN cte_name c ON t.parent_id = c.id
)
SELECT * FROM cte_name;
```

**Example — Employee Hierarchy:**

```sql
WITH RECURSIVE employee_hierarchy AS (
 -- Anchor: Top level managers (manager_id IS NULL)
 SELECT emp_id, name, manager_id, 1 AS level
 FROM employees
 WHERE manager_id IS NULL
 
 UNION ALL
 
 -- Recursive: Next level employees
 SELECT e.emp_id, e.name, e.manager_id, h.level + 1
 FROM employees e
 JOIN employee_hierarchy h ON e.manager_id = h.emp_id
)
SELECT * FROM employee_hierarchy 
ORDER BY level, name;
```


### 2. Dynamic SQL (Prepared Statements)

```sql
SET @sql = 'SELECT * FROM employees WHERE department = ?';
PREPARE stmt FROM @sql;
SET @dept = 'CSE';
EXECUTE stmt USING @dept;
DEALLOCATE PREPARE stmt;
```

```sql
DELIMITER //
CREATE PROCEDURE SearchEmployees(IN search_term VARCHAR(100))
BEGIN
 SET @sql = CONCAT('SELECT * FROM employees WHERE name LIKE "%', search_term, '%"');
 PREPARE stmt FROM @sql;
 EXECUTE stmt;
 DEALLOCATE PREPARE stmt;
END //
DELIMITER ;

CALL SearchEmployees('Ram');
```

> **Caution:** Dynamic SQL use chese appudu **SQL Injection** risk undi. Always use prepared statements.


### Day 29 Homework

1. Recursive CTE use chesi:
 - Employee hierarchy display cheyandi (level wise)
 - Oka manager ki under unna all employees
2. Dynamic SQL procedure create cheyandi (department based search)


### Summary

| Concept | Use Case |
|---|---|
| Recursive CTE | Hierarchical/Tree data |
| Dynamic SQL | Runtime lo queries build & execute |

> **Next Day (Day 30):** Final Review & Capstone Project! 


# FINAL DAY — Day 30: Capstone Project & Complete Review

 **Congratulations! 30 Days of SQL complete ayyindi!**

Today manam entire journey recap chestham + **Real-World Capstone Project** build chestham. Idi mee resume lo pettukochu & portfolio ki add cheyochu!


## Complete 30 Days Recap

| Phase | Days | Topics Covered |
|---|---|---|
| **Phase 1** | Days 1–7 | Database basics, DDL, DML, SELECT, Constraints, Keys |
| **Phase 2** | Days 8–14 | Aggregate Functions, GROUP BY, HAVING, All JOINs, String/Date/Conditional Functions |
| **Phase 3** | Days 15–21 | Subqueries, Views, CTEs, Window Functions, Pivot/Unpivot |
| **Phase 4** | Days 22–29 | Indexes, Transactions, ACID, Isolation Levels, Security, Stored Procedures, Optimization, Recursive CTEs |


## Capstone Project — E-Commerce Database System

### Project Overview

Oka **complete E-commerce Database** build cheyandi — products, customers, orders, payments anni undi. Reports prepare cheyandi using everything learned.


### Step 1 — Database Setup (DDL)

```sql
-- 1. Categories Table
CREATE TABLE categories (
 category_id INT PRIMARY KEY AUTO_INCREMENT,
 category_name VARCHAR(100) NOT NULL,
 description TEXT
);

-- 2. Products Table
CREATE TABLE products (
 product_id INT PRIMARY KEY AUTO_INCREMENT,
 product_name VARCHAR(200) NOT NULL,
 category_id INT,
 price DECIMAL(10,2) CHECK (price > 0),
 stock INT DEFAULT 0,
 created_at DATETIME DEFAULT NOW(),
 FOREIGN KEY (category_id) REFERENCES categories(category_id)
);

-- 3. Customers Table
CREATE TABLE customers (
 customer_id INT PRIMARY KEY AUTO_INCREMENT,
 full_name VARCHAR(150) NOT NULL,
 email VARCHAR(100) UNIQUE NOT NULL,
 city VARCHAR(100),
 join_date DATE DEFAULT (CURDATE()),
 active BOOLEAN DEFAULT TRUE
);

-- 4. Orders Table
CREATE TABLE orders (
 order_id INT PRIMARY KEY AUTO_INCREMENT,
 customer_id INT NOT NULL,
 order_date DATETIME DEFAULT NOW(),
 status VARCHAR(50) DEFAULT 'Pending',
 FOREIGN KEY (customer_id) REFERENCES customers(customer_id)
);

-- 5. Order Items Table
CREATE TABLE order_items (
 item_id INT PRIMARY KEY AUTO_INCREMENT,
 order_id INT NOT NULL,
 product_id INT NOT NULL,
 quantity INT CHECK (quantity > 0),
 unit_price DECIMAL(10,2),
 FOREIGN KEY (order_id) REFERENCES orders(order_id),
 FOREIGN KEY (product_id) REFERENCES products(product_id)
);

-- 6. Payments Table
CREATE TABLE payments (
 payment_id INT PRIMARY KEY AUTO_INCREMENT,
 order_id INT UNIQUE NOT NULL,
 amount DECIMAL(10,2),
 payment_date DATETIME DEFAULT NOW(),
 method VARCHAR(50),
 FOREIGN KEY (order_id) REFERENCES orders(order_id)
);
```


### Step 2 — Sample Data (DML)

```sql
-- Categories
INSERT INTO categories (category_name, description) VALUES
('Electronics', 'Mobiles, Laptops, Gadgets'),
('Clothing', 'Fashion & Apparel'),
('Books', 'Educational & Fiction Books'),
('Food & Beverages', 'Grocery & Drinks'),
('Sports', 'Sports Equipment & Gear');

-- Products
INSERT INTO products (product_name, category_id, price, stock) VALUES
('iPhone 15', 1, 79999.00, 50),
('Samsung Galaxy S24', 1, 64999.00, 80),
('Dell Laptop Inspiron', 1, 55000.00, 30),
('Bluetooth Speaker', 1, 3999.00, 100),
('Men Formal Shirt', 2, 1299.00, 200),
('Women Casual Dress', 2, 1899.00, 150),
('Data Structures Book', 3, 499.00, 300),
('Python Programming', 3, 599.00, 250),
('Basmati Rice 5kg', 4, 399.00, 500),
('Mineral Water 20L', 4, 199.00, 1000),
('Cricket Bat', 5, 2499.00, 75),
('Football', 5, 899.00, 60);

-- Customers
INSERT INTO customers (full_name, email, city) VALUES
('Ramesh Kumar', 'ramesh@gmail.com', 'Hyderabad'),
('Sita Reddy', 'sita@gmail.com', 'Vijayawada'),
('Krishna Rao', 'krishna@gmail.com', 'Vizag'),
('Priya Singh', 'priya@gmail.com', 'Chennai'),
('Vamsi Naidu', 'vamsi@gmail.com', 'Hyderabad'),
('Anitha Lakshmi', 'anitha@gmail.com', 'Bangalore'),
('Ravi Shankar', 'ravi@gmail.com', 'Pune'),
('Deepika Mehta', 'deepika@gmail.com', 'Mumbai');

-- Orders
INSERT INTO orders (customer_id, order_date, status) VALUES
(1, '2025-01-05 10:30:00', 'Delivered'),
(2, '2025-01-10 14:00:00', 'Delivered'),
(3, '2025-02-01 09:00:00', 'Shipped'),
(1, '2025-02-15 11:00:00', 'Delivered'),
(4, '2025-03-01 16:00:00', 'Delivered'),
(5, '2025-03-10 13:00:00', 'Processing'),
(6, '2025-04-05 10:00:00', 'Delivered'),
(7, '2025-04-15 15:30:00', 'Cancelled'),
(8, '2025-05-01 12:00:00', 'Delivered'),
(2, '2025-05-20 09:30:00', 'Delivered');

-- Order Items
INSERT INTO order_items (order_id, product_id, quantity, unit_price) VALUES
(1, 1, 1, 79999.00),
(1, 7, 2, 499.00),
(2, 5, 3, 1299.00),
(2, 6, 2, 1899.00),
(3, 2, 1, 64999.00),
(4, 4, 1, 3999.00),
(4, 8, 1, 599.00),
(5, 3, 1, 55000.00),
(6, 9, 2, 399.00),
(7, 11, 1, 2499.00),
(8, 12, 2, 899.00),
(9, 10, 5, 199.00),
(10, 6, 1, 1899.00),
(10, 8, 3, 599.00);

-- Payments
INSERT INTO payments (order_id, amount, payment_date, method) VALUES
(1, 80997.00, '2025-01-05 10:35:00', 'UPI'),
(2, 7695.00, '2025-01-10 14:05:00', 'Credit Card'),
(3, 64999.00, '2025-02-01 09:05:00', 'Net Banking'),
(4, 4598.00, '2025-02-15 11:05:00', 'UPI'),
(5, 55000.00, '2025-03-01 16:05:00', 'Debit Card'),
(7, 2499.00, '2025-04-15 15:35:00', 'UPI'),
(8, 1798.00, '2025-05-01 12:05:00', 'Cash on Delivery'),
(9, 995.00, '2025-05-20 09:35:00', 'UPI'),
(10, 3696.00, '2025-05-20 09:40:00', 'Credit Card');
```


### Step 3 — Business Reports (Queries)

#### Report 1: Total Revenue & Order Stats (Aggregate Functions)

```sql
SELECT 
 COUNT(DISTINCT o.order_id) AS total_orders,
 COUNT(DISTINCT o.customer_id) AS unique_customers,
 SUM(p.amount) AS total_revenue,
 AVG(p.amount) AS avg_order_value,
 MAX(p.amount) AS max_order,
 MIN(p.amount) AS min_order
FROM orders o
JOIN payments p ON o.order_id = p.order_id
WHERE o.status != 'Cancelled';
```


#### Report 2: Category-wise Sales (GROUP BY + JOIN)

```sql
SELECT 
 c.category_name,
 COUNT(DISTINCT oi.order_id) AS total_orders,
 SUM(oi.quantity) AS units_sold,
 SUM(oi.quantity * oi.unit_price) AS total_sales
FROM categories c
JOIN products p ON c.category_id = p.category_id
JOIN order_items oi ON p.product_id = oi.product_id
JOIN orders o ON oi.order_id = o.order_id
WHERE o.status != 'Cancelled'
GROUP BY c.category_name
ORDER BY total_sales DESC;
```


#### Report 3: Top 5 Customers (CTE + JOIN)

```sql
WITH customer_spending AS (
 SELECT 
 c.customer_id,
 c.full_name,
 c.city,
 COUNT(DISTINCT o.order_id) AS total_orders,
 SUM(p.amount) AS total_spent
 FROM customers c
 JOIN orders o ON c.customer_id = o.customer_id
 JOIN payments p ON o.order_id = p.order_id
 WHERE o.status = 'Delivered'
 GROUP BY c.customer_id, c.full_name, c.city
)
SELECT 
 full_name,
 city,
 total_orders,
 total_spent,
 RANK() OVER (ORDER BY total_spent DESC) AS spending_rank
FROM customer_spending
ORDER BY spending_rank
LIMIT 5;
```


#### Report 4: Month-wise Revenue Trend (Date Functions + GROUP BY)

```sql
SELECT 
 YEAR(o.order_date) AS year,
 MONTH(o.order_date) AS month,
 COUNT(DISTINCT o.order_id) AS orders_count,
 SUM(p.amount) AS monthly_revenue
FROM orders o
JOIN payments p ON o.order_id = p.order_id
WHERE o.status != 'Cancelled'
GROUP BY YEAR(o.order_date), MONTH(o.order_date)
ORDER BY year, month;
```


#### Report 5: Product Stock Status using CASE (Conditional)

```sql
SELECT 
 p.product_name,
 c.category_name,
 p.price,
 p.stock,
 CASE 
 WHEN p.stock = 0 THEN 'Out of Stock'
 WHEN p.stock < 20 THEN 'Low Stock'
 WHEN p.stock BETWEEN 20 AND 100 THEN 'Available'
 ELSE 'Well Stocked'
 END AS stock_status
FROM products p
JOIN categories c ON p.category_id = c.category_id
ORDER BY p.stock ASC;
```


#### Report 6: Order Value Rankings using Window Functions

```sql
SELECT 
 o.order_id,
 c.full_name,
 p.amount,
 p.method AS payment_method,
 RANK() OVER (ORDER BY p.amount DESC) AS order_rank,
 DENSE_RANK() OVER (ORDER BY p.amount DESC) AS dense_rank,
 SUM(p.amount) OVER () AS total_revenue,
 ROUND((p.amount / SUM(p.amount) OVER ()) * 100, 2) AS revenue_percentage
FROM orders o
JOIN customers c ON o.customer_id = c.customer_id
JOIN payments p ON o.order_id = p.order_id
WHERE o.status != 'Cancelled'
ORDER BY order_rank;
```


#### Report 7: Month-over-Month Growth (LAG Window Function)

```sql
WITH monthly_revenue AS (
 SELECT 
 YEAR(o.order_date) AS year,
 MONTH(o.order_date) AS month,
 SUM(p.amount) AS revenue
 FROM orders o
 JOIN payments p ON o.order_id = p.order_id
 WHERE o.status != 'Cancelled'
 GROUP BY YEAR(o.order_date), MONTH(o.order_date)
)
SELECT 
 year,
 month,
 revenue,
 LAG(revenue) OVER (ORDER BY year, month) AS prev_month_revenue,
 ROUND(
 ((revenue - LAG(revenue) OVER (ORDER BY year, month)) 
 / LAG(revenue) OVER (ORDER BY year, month)) * 100, 
 2) AS growth_percentage
FROM monthly_revenue
ORDER BY year, month;
```


#### Report 8: Customer Summary View (Database View)

```sql
CREATE VIEW customer_summary AS
SELECT 
 c.full_name,
 c.city,
 COUNT(DISTINCT o.order_id) AS total_orders,
 COALESCE(SUM(p.amount), 0) AS total_spent,
 COALESCE(AVG(p.amount), 0) AS avg_order_value,
 MAX(o.order_date) AS last_order_date
FROM customers c
LEFT JOIN orders o ON c.customer_id = o.customer_id
LEFT JOIN payments p ON o.order_id = p.order_id
GROUP BY c.customer_id, c.full_name, c.city;

-- Use the view
SELECT * FROM customer_summary ORDER BY total_spent DESC;
```


#### Report 9: Stored Procedure for Order Placement

```sql
DELIMITER //

CREATE PROCEDURE PlaceOrder(
 IN p_customer_id INT,
 IN p_product_id INT,
 IN p_quantity INT
)
BEGIN
 DECLARE v_price DECIMAL(10,2);
 DECLARE v_stock INT;
 DECLARE v_order_id INT;

 -- Stock check
 SELECT price, stock INTO v_price, v_stock 
 FROM products WHERE product_id = p_product_id;

 IF v_stock < p_quantity THEN
 SIGNAL SQLSTATE '45000' SET MESSAGE_TEXT = 'Insufficient stock!';
 ELSE
 START TRANSACTION;
 
 -- Create order
 INSERT INTO orders (customer_id, status) VALUES (p_customer_id, 'Processing');
 SET v_order_id = LAST_INSERT_ID();
 
 -- Add order item
 INSERT INTO order_items (order_id, product_id, quantity, unit_price)
 VALUES (v_order_id, p_product_id, p_quantity, v_price);
 
 -- Update stock
 UPDATE products SET stock = stock - p_quantity WHERE product_id = p_product_id;
 
 COMMIT;
 SELECT CONCAT('Order placed successfully! Order ID: ', v_order_id) AS result;
 END IF;
END //

DELIMITER ;

-- Test
CALL PlaceOrder(1, 4, 2);
```


### Step 4 — Bonus Challenges

Try cheyandi — advanced practice:

```sql
-- Challenge 1: Customer Segmentation
SELECT 
 full_name,
 total_spent,
 CASE 
 WHEN total_spent >= 50000 THEN 'Gold Customer'
 WHEN total_spent >= 10000 THEN 'Silver Customer'
 ELSE 'Bronze Customer'
 END AS customer_tier
FROM customer_summary;

-- Challenge 2: Products never ordered (LEFT JOIN anti-pattern)
SELECT p.product_name, p.price, p.stock
FROM products p
LEFT JOIN order_items oi ON p.product_id = oi.product_id
WHERE oi.product_id IS NULL;

-- Challenge 3: Running total revenue
SELECT 
 month,
 revenue,
 SUM(revenue) OVER (ORDER BY month) AS running_total
FROM (
 SELECT 
 MONTH(o.order_date) AS month,
 SUM(p.amount) AS revenue
 FROM orders o
 JOIN payments p ON o.order_id = p.order_id
 GROUP BY MONTH(o.order_date)
) AS monthly;
```


## Concepts Used in This Project

| Concept | Where Used |
|---|---|
| DDL (CREATE TABLE, Constraints) | Step 1 — Schema design |
| DML (INSERT, UPDATE) | Step 2 — Sample data, Stock update |
| Aggregate Functions | Report 1, 2 |
| JOINs (INNER, LEFT) | All reports |
| GROUP BY + HAVING | Report 2 |
| CTEs | Report 3, 7 |
| Window Functions (RANK, LAG) | Report 6, 7 |
| Views | Report 8 |
| Stored Procedures + Transactions | Report 9 |
| CASE Statement | Report 5, Bonus 1 |
| Date Functions | Report 4 |
| COALESCE | Report 8 |


## 30 Days Achievement Unlocked!

Ee 30 days lo manam nerchukunnavi:

**Foundation:** Databases, RDBMS, DDL, DML, SELECT, Constraints, Keys

**Intermediate:** Aggregate Functions, GROUP BY, HAVING, All JOINs, Built-in Functions

**Advanced:** Subqueries, Views, CTEs, Window Functions, Pivot/Unpivot

**Expert:** Indexes, Transactions, ACID, Isolation Levels, Security (GRANT/REVOKE), Stored Procedures, Performance Optimization, Recursive CTEs


## Next Steps — What to Learn Next?

1. **Database Design & Normalization** (1NF, 2NF, 3NF)
2. **Advanced PostgreSQL** (JSON support, Full-text search)
3. **Query Optimization** deep dive (Execution plans, Partitioning)
4. **BI Tools** (Power BI, Tableau — SQL tho connect cheyyadam)
5. **NoSQL** basics (MongoDB)
6. **LeetCode / HackerRank SQL** problems practice


## Final Message

> **Bro, 30 days complete chesaru! That's a BIG deal!**
>
> Daily practice chesthe SQL interview lo, job lo, projects lo — anni places lo strong ga perform cheyochu. Capstone project mee portfolio lo add cheyandi.
>
> Happy Querying! 


*30 Days of SQL — Tenglish Learning Guide | Designed for Telugu-speaking SQL beginners*
