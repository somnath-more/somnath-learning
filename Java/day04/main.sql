-- DDL Commands --

-- CREATE: Creates a new database object
CREATE TABLE employees (
    employee_id INT PRIMARY KEY,
    first_name VARCHAR(50),
    last_name VARCHAR(50),
    department_id INT
);

-- ALTER: Modifies an existing database object
ALTER TABLE employees
ADD hire_date DATE;

-- DROP: Deletes a database object
DROP TABLE employees;

-- TRUNCATE: Removes all rows from a table without logging individual row deletions
TRUNCATE TABLE employees;

-- RENAME: Changes the name of a database object
ALTER TABLE employees
RENAME TO staff;

-- DCL Commands --

-- GRANT: Grants permissions to users
GRANT SELECT, INSERT ON employees TO user_name;

-- REVOKE: Removes permissions from users
REVOKE SELECT, INSERT ON employees FROM user_name;

-- DML Commands --

-- SELECT: Retrieves data from the database
SELECT first_name, last_name
FROM employees
WHERE department_id = 1;

-- INSERT: Adds new rows of data to a table
INSERT INTO employees (employee_id, first_name, last_name, department_id)
VALUES (1, 'John', 'Doe', 2);

-- UPDATE: Modifies existing data in a table
UPDATE employees
SET last_name = 'Smith'
WHERE employee_id = 1;

-- DELETE: Removes rows from a table
DELETE FROM employees
WHERE employee_id = 1;

-- Advanced SQL Queries --

-- JOIN: Combine rows from two or more tables based on a related column
SELECT employees.first_name, departments.department_name
FROM employees
INNER JOIN departments
ON employees.department_id = departments.department_id;

-- GROUP BY: Group rows that have the same values into summary rows
SELECT department, COUNT(*)
FROM employees
GROUP BY department;

-- HAVING: Filter records after the GROUP BY clause has been applied
SELECT department, COUNT(*)
FROM employees
GROUP BY department
HAVING COUNT(*) > 10;

-- Aggregate Functions --

-- COUNT: Returns the number of rows
SELECT COUNT(*) FROM employees;

-- SUM: Returns the sum of a numeric column
SELECT SUM(salary) FROM employees;

-- AVG: Returns the average value of a numeric column
SELECT AVG(salary) FROM employees;

-- MAX: Returns the maximum value of a column
SELECT MAX(salary) FROM employees;

-- MIN: Returns the minimum value of a column
SELECT MIN(salary) FROM employees;

-- Subqueries --

-- A query nested inside another query
SELECT first_name
FROM employees
WHERE department_id = (SELECT department_id FROM departments WHERE department_name = 'Sales');

-- Transactions --

-- BEGIN TRANSACTION: Start a new transaction
BEGIN TRANSACTION;

-- COMMIT: Save the changes made during the transaction
COMMIT;

-- ROLLBACK: Undo the changes made during the transaction
ROLLBACK;

-- Indexing --

-- CREATE INDEX: Improve query performance by indexing columns
CREATE INDEX idx_last_name
ON employees (last_name);

SELECT MAX(salary) AS second_highest_salary
FROM employees
WHERE salary < (SELECT MAX(salary) FROM employees);