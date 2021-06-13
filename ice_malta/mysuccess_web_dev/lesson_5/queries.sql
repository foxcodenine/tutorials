USE IceAdmin;

SELECT * FROM Employee ORDER BY  Employee.surname DESC;

SELECT * FROM Salary WHERE amount <= 25000;

SELECT SUM(amount) AS 'total_salaries' FROM Salary;

SELECT AVG(amount) AS 'average_salary' FROM Salary;

SELECT COUNT(id) AS 'number_of_employee' FROM Employee;


SELECT basis, COUNT(id) AS 'number_of_employee_in_basis' FROM Employee GROUP BY basis;


DELETE FROM Employee WHERE id > 3;
INSERT INTO Employee (name, surname, jobTitle, basis) VALUES
    ('Chris', 'Farrugia', 'Developer', 'FT'),
    ('Dorothy', 'Cassar', 'Cleaner', 'PT');

UPDATE Employee SET jobTitle='Admission Team' WHERE name='Dorothy';


SELECT jobTitle, basis, COUNT(id) AS 'number_of_employee' FROM Employee GROUP BY basis, jobTitle ORDER BY jobTitle;




SELECT CONCAT(id, ' $', CAST(amount AS CHAR)) AS 'ice_salaries' FROM Salary;

SELECT ROUND(AVG(amount) )AS 'ice_average_salary' FROM Salary;