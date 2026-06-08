# Lesson 1.1: What are Relational Databases?

In this lesson, you will learn the core concepts of Relational Databases (RDBMS) and how they differ from other database architectures.

---

## What is a Relational Database?

A relational database organizes data into one or more data tables. Each table consists of:
*   **Columns** (also called fields or attributes) which define the type of data.
*   **Rows** (also called records or tuples) which contain the actual data instances.

### Primary Keys and Foreign Keys

To link tables together, relational databases use keys:
1.  **Primary Key**: A unique identifier for every row in a table. It cannot be null and must be unique (e.g., `CustomerID`, `OrderID`).
2.  **Foreign Key**: A column in a table that references the primary key of another table, establishing a relationship between the two tables.

```text
CUSTOMERS TABLE
+----+-----------+-------------------+----------+
| ID | Name      | Email             | Country  |  <-- Columns
+----+-----------+-------------------+----------+
| 1  | Satya     | satya@test.com    | India    |  <-- Row / Record
| 2  | John      | john@test.com     | USA      |
+----+-----------+-------------------+----------+
```

---

## SQL vs NoSQL

Here is a quick comparison of Relational (SQL) and Non-Relational (NoSQL) databases:

| Feature | Relational (SQL) | Non-Relational (NoSQL) |
| :--- | :--- | :--- |
| **Structure** | Tabular (Rows/Columns) | Document, Key-Value, Graph |
| **Schema** | Static, predefined schema | Dynamic, flexible schema |
| **Transactions** | ACID Compliant (High Integrity) | BASE (Eventual Consistency) |
| **Examples** | PostgreSQL, MySQL, SQLite | MongoDB, Redis, Cassandra |

---

## Next Steps

Now, click the **Coding Challenge** tab on the right to write your first SELECT query!
