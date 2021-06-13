DROP DATABASE IF EXISTS IceAdmin;

CREATE DATABASE IceAdmin;

USE IceAdmin;

-- -----------------------------------------------------------

CREATE TABLE Employee(
	id			INT AUTO_INCREMENT PRIMARY KEY,
	name		VARCHAR(25) NOT NULL,
	surname 	VARCHAR(30) NOT NULL,
	jobTitle	VARCHAR(15) NOT NULL,
	base		ENUM('PT', 'FT')
);

-- -----------------------------------------------------------

CREATE TABLE Department(
	id		INT AUTO_INCREMENT PRIMARY KEY,
	name	VARCHAR(20) NOT NULL
);

-- -----------------------------------------------------------

CREATE TABLE EmployeeDepartment(
	id				INT AUTO_INCREMENT PRIMARY KEY,
	employeeId 		INT NOT NULL,
	departmentId 	INT NOT NULL,

	CONSTRAINT c_employeedepartment_employee
		FOREIGN KEY (employeeId) REFERENCES Employee(id), 
	CONSTRAINT c_employeedepartment_department
		FOREIGN KEY (departmentId) REFERENCES Department(id)     
);

-- -----------------------------------------------------------

CREATE TABLE Salery(
	id			INT AUTO_INCREMENT PRIMARY KEY,
	fromDate	DATE NOT NULL,
	toDate		DATE,
	amount		DECIMAL(8,2),
	employeeId 	INT NOT NULL,

	CONSTRAINT c_salary_employee
		FOREIGN KEY (employeeId) REFERENCES Employee(id) 
);

-- -----------------------------------------------------------
 
ALTER TABLE Employee CHANGE COLUMN base	basis ENUM('PT', 'FT');

RENAME TABLE Salery TO Salary;

-- -----------------------------------------------------------
-- -----------------------------------------------------------

CREATE TABLE Vendor(
	id   			INT AUTO_INCREMENT PRIMARY KEY,
    name 			VARCHAR(20) NOT NULL,
    website			VARCHAR(50) NOT NULL,
    country			VARCHAR(30) NOT NULL,
    brandManager	INT NOT NULL,
    
    CONSTRAINT c_vendor_employee
		FOREIGN KEY(brandManager) REFERENCES Employee(id)
);

-- -----------------------------------------------------------