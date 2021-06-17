-- -----------------------------------------------------------
INSERT INTO Employee(name, surname, jobTitle, basis) VALUES
	("Joe", "Mifsud", "Educator", "PT"),
	("Lucy", "Greach", "Admission Team", "FT"),
	("Fred", "Mangion", "Admission Team", "FT");

-- -----------------------------------------------------------

INSERT INTO Department(name) VALUES
	("Academic"),
	("Admissions"),
	("Marketing");

-- -----------------------------------------------------------

INSERT INTO EmployeeDepartment(employeeId, departmentId) VALUES
	(1, 1),
	(2, 2),
	(3, 1),
	(3, 2);
    
-- -----------------------------------------------------------

INSERT INTO Salary(employeeId, fromDate, toDate, amount) VALUES
	(1, "2013-01-01", null, 25000),
	(2, "2012-11-01", "2014-10-31", 23500),
	(2, "2014-11-01", null, 26700),
	(3, "2013-05-01", null, 30000);
    
-- -----------------------------------------------------------
-- -----------------------------------------------------------

INSERT INTO Vendor(name, website, country, brandManager) VALUES
	("Microsoft", "https://microsoft.com", "USA", 3),
	("Linux Professional Institute", "https://lpi.org", "USA", 3),
	("Digital Marketing Institute", "https://digitalmarketinginstitute.com", "Ireland", 2),
	("Adobe", "https://adobe.com", "USA", 1);
    
ALTER TABLE Vendor CHANGE name name VARCHAR(50) NOT NULL;

-- -----------------------------------------------------------
-- -----------------------------------------------------------

ALTER TABLE Salary
	DROP FOREIGN KEY c_salary_employee;

ALTER TABLE Salary
	ADD 
    CONSTRAINT c_salary_employee
    FOREIGN KEY(employeeId) REFERENCES Employee(id)
    ON UPDATE CASCADE
    ON DELETE CASCADE;

-- -----------------------------------------------------------

ALTER TABLE EmployeeDepartment
	DROP FOREIGN KEY c_employeeDepartment_employee;

ALTER TABLE EmployeeDepartment
	ADD 
    CONSTRAINT c_employeeDepartment_employee
    FOREIGN KEY(employeeId) REFERENCES Employee(id)
    ON UPDATE CASCADE
    ON DELETE CASCADE;
    
-- -----------------------------------------------------------

ALTER TABLE Vendor CHANGE brandManager brandManager INT;


ALTER TABLE Vendor
	DROP FOREIGN KEY c_vendor_employee;

ALTER TABLE Vendor
	ADD 
    CONSTRAINT c_vendor_employee
    FOREIGN KEY(brandManager) REFERENCES Employee(id)
    ON UPDATE CASCADE
    ON DELETE SET NULL;
-- -----------------------------------------------------------
    