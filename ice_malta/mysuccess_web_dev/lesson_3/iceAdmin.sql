CREATE DATABASE IceAdmin;

USE IceAdmin;

CREATE TABLE Employee(
	id		INT AUTO_INCREMENT PRIMARY KEY,
	name		VARCHAR(25) NOT NULL,
	surname 	VARCHAR(30) NOT NULL,
	jobTitle	VARCHAR(15) NOT NULL,
	base		ENUM('PT', 'FT')
);

CREATE TABLE Department(
	id		INT AUTO_INCREMENT PRIMARY KEY,
    	name		VARCHAR(20) NOT NULL
);

CREATE TABLE EmployeeDepartment(
	id		INT AUTO_INCREMENT PRIMARY KEY,
    	employeeId 	INT NOT NULL,
    	departmentId 	INT NOT NULL,
    	CONSTRAINT c_employeedepartment_employee
		FOREIGN KEY (employeeId) REFERENCES Employee(id) ON DELETE CASCADE, 
	CONSTRAINT c_employeedepartment_department
		FOREIGN KEY (departmentId) REFERENCES Department(id) ON DELETE CASCADE    
);

CREATE TABLE Salery(
	id		INT AUTO_INCREMENT PRIMARY KEY,
    	fromDate	DATE NOT NULL,
    	toDate		DATE,
    	amount		DECIMAL(8,2),
    	employeeId 	INT NOT NULL,
    	CONSTRAINT c_salary_employee
		FOREIGN KEY (employeeId) REFERENCES Employee(id) ON DELETE CASCADE
);

ALTER TABLE Employee CHANGE COLUMN base	basis ENUM('PT', 'FT');

RENAME TABLE Salery TO Salary;

INSERT INTO Employee(name, surname, jobTitle, basis) VALUES
	("Joe", "Mifsud", "Educator", "PT"),
    	("Lucy", "Greach", "Admission Team", "FT"),
    	("Fred", "Mangion", "Admission Team", "FT");
    
INSERT INTO Department(name) VALUES
	("Academic"),
    	("Admissions"),
    	("Marketing");
    
INSERT INTO EmployeeDepartment(employeeId, departmentId) VALUES
	(1, 1),
    	(2, 2),
    	(3, 1),
    	(3, 2);
    
INSERT INTO Salary(employeeId, fromDate, toDate, amount) VALUES
	(1, "2013-01-01", null, 25000),
    	(2, "2012-11-01", "2014-10-31", 23500),
    	(2, "2014-11-01", null, 26700),
    	(3, "2013-05-01", null, 30000);
