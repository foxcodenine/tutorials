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

/*
+----+-----------+----------+-----+----------------------+----------+
| id | firstname | lastname | age | email                | phone    |
+----+-----------+----------+-----+----------------------+----------+
|  2 | Dorothy   | Cassar   |  31 | dormond@gmail.com    | 99257468 |
|  3 | Chris     | Farrugia |  37 | chris12aug@yahoo.com | 79345874 |
|  4 | Tania     | Cardona  |  34 | drvodka@yahoo.com    | 79310545 |
|  5 | James     | Manduca  |  36 | arch@gove.mt         | 21547852 |
+----+-----------+----------+-----+----------------------+----------+

+----+-----------------------------+------------+---------+----------+----------+----------+---------+
| id | name                        | startDate  | days    | timeFrom | timeTo   | duration | price   |
+----+-----------------------------+------------+---------+----------+----------+----------+---------+
|  1 | LPIC-1 Linux Administrator  | 2021-10-04 | Mon Wed | 18:00:00 | 21:00:00 |       63 | 1225.00 |
|  3 | Architecting on AWS Course  | 2022-01-03 | Tue Thu | 18:00:00 | 21:00:00 |       45 | 1000.00 |
|  4 | MySuccess Website Developer | 2021-11-22 | Mon Wed | 18:00:00 | 21:00:00 |       63 | 1300.00 |
+----+-----------------------------+------------+---------+----------+----------+----------+---------+
*/