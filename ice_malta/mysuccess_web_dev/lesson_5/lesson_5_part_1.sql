-- PART 1
-- ---------------------------------------------------------------------
SOURCE IceAdmin.sql;
SOURCE POS.sql;

USE IceAdmin;

-- ---------------------------------------------------------------------
-- Aggregate Functions

SELECT * FROM Employee ORDER BY  Employee.surname DESC;

SELECT * FROM Salary WHERE amount <= 25000;

SELECT SUM(amount) AS 'total_salaries' FROM Salary;

SELECT AVG(amount) AS 'average_salary' FROM Salary;

SELECT COUNT(id) AS 'number_of_employee' FROM Employee;


-- ---------------------------------------------------------------------
-- GROUP BY

SELECT basis, COUNT(id) AS 'number_of_employee_in_basis' FROM Employee GROUP BY basis;


DELETE FROM Employee WHERE id > 3;
INSERT INTO Employee (name, surname, jobTitle, basis) VALUES
    ('Chris', 'Farrugia', 'Developer', 'FT'),
    ('Dorothy', 'Cassar', 'Cleaner', 'PT');

UPDATE Employee SET jobTitle='Admission Team' WHERE name='Dorothy';


SELECT jobTitle, basis, COUNT(id) AS 'number_of_employee' FROM Employee GROUP BY basis, jobTitle ORDER BY jobTitle;


-- ---------------------------------------------------------------------
-- Scalar Functions

SELECT CONCAT(id, ' $', CAST(amount AS CHAR)) AS 'ice_salaries' FROM Salary;

SELECT ROUND(AVG(amount) )AS 'ice_average_salary' FROM Salary;

-- ---------------------------------------------------------------------

USE POS;

SHOW TABLES;

-- ---------------------------------------------------------------------
-- Table Aliases

SELECT 
    CONCAT('£', CAST(SUM(I.total) AS CHAR)) AS InvoiceTotal
FROM 
    Invoice I;

-- ---------------------------------------------------------------------
-- ---------------------------------------------------------------------

-- Exercise 5.1

--1
SELECT * FROM Invoice WHERE total >= 1000;

--2
SELECT IT.id, CONCAT('€', CAST(IT.unitPrice*IT.qty AS CHAR)) AS subTotal 
FROM InvoiceItem IT;

--3
SELECT SUM(I.total) AS 'TotalSales' FROM Invoice I;

--4
SELECT DATE(P.issueTime) AS 'Date', SUM(P.total) AS 'Payments' 
FROM Payment P 
GROUP BY DATE(P.issueTime);

-- ---------------------------------------------------------------------
-- ---------------------------------------------------------------------

-- Joints
USE IceAdmin;

SHOW TABLES;

SELECT * FROM  employee;
SELECT * FROM  department;

INSERT INTO employee (name,   surname, jobTitle, basis) VALUES
    ('Chris', 'Farrugia', 'Developer', 'PT');

-- INNER JOIN
SELECT E.name, E.surname, D.name AS 'department'
FROM Employee E 
INNER JOIN EmployeeDepartment ED ON 
    E.id = ED.employeeId
INNER JOIN Department D ON 
    ED.DepartmentId = D.id;

--LEFT JOIN
SELECT E.name, E.surname, D.name AS 'department'
FROM Employee E 
LEFT JOIN EmployeeDepartment ED ON 
    E.id = ED.employeeId
LEFT JOIN Department D ON 
    ED.DepartmentId = D.id;

--RIGHT JOIN
SELECT E.name, E.surname, D.name AS 'department'
FROM Employee E 
RIGHT JOIN EmployeeDepartment ED ON 
    E.id = ED.employeeId
RIGHT JOIN Department D ON 
    ED.DepartmentId = D.id;

-- FULL JOIN (Not supported in mysql)
SELECT E.name, E.surname, ED.departmentId AS 'department_id'
FROM Employee E 
FULL OUTER JOIN EmployeeDepartment ED ON 
    E.id = ED.employeeId;

-- ---------------------------------------------------------------------
-- Sub-Queries (Nested queries)

USE POS;

SELECT Client.name, Client.surname
FROM Client
WHERE Client.id IN (SELECT Invoice.clientId FROM Invoice);

-- ---------------------------------------------------------------------
--Things I revised in Lesson

-- LIKE "%c%"
SELECT e.name, e.surname from Employee e WHERE e.name LIKE "C%"; 


-- DESCREIBE <table_name>
DESCRIBE Employee;
/*
+----------+-----------------+------+-----+---------+----------------+
| Field    | Type            | Null | Key | Default | Extra          |
+----------+-----------------+------+-----+---------+----------------+
| id       | int             | NO   | PRI | NULL    | auto_increment |
| name     | varchar(25)     | NO   |     | NULL    |                |
| surname  | varchar(30)     | NO   |     | NULL    |                |
| jobTitle | varchar(15)     | NO   |     | NULL    |                |
| basis    | enum('PT','FT') | YES  |     | NULL    |                |
+----------+-----------------+------+-----+---------+----------------+
*/


-- SHOW CREATE TABLE <table_name>
SHOW CREATE TABLE Employee;
/*
| Table    | Create Table                                                                                                                                                    |
+----------+------------------------------------------------------------+
| Employee | CREATE TABLE `employee` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(25) NOT NULL,
  `surname` varchar(30) NOT NULL,
  `jobTitle` varchar(15) NOT NULL,
  `basis` enum('PT','FT') DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci |
*/

-- ---------------------------------------------------------------------
