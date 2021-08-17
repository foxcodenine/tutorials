INSERT INTO register (courseId, studentId, RegisterDate) 
VALUES (4, 3, NOW());

INSERT INTO register (courseId, studentId, RegisterDate) 
VALUES 
(1, 3, NOW()),
(3, 2, NOW()),
(4, 4, NOW());



SELECT Course.id, Course.name 
FROM Course 
INNER JOIN Register ON Register.courseId = Course.id
INNER JOIN Student ON Student.id = Register.studentId
WHERE Student.id = 3 ORDER BY Course.id;

SELECT Student.id, Student.firstname, Student.lastname
FROM Course 
INNER JOIN Register ON Register.courseId = Course.id
INNER JOIN Student ON Student.id = Register.studentId
WHERE Course.id = 3 ORDER BY Student.id;

INSERT INTO Register (courseId, studentId, RegisterDate) 
VALUES 
(2, 2, NOW());