-- Write The Following Schema:

CREATE DATABASE students_and_papers;

USE students_and_papers;

CREATE TABLE students(
    id INTEGER AUTO_INCREMENT PRIMARY KEY,
    first_name VARCHAR(50)
);

CREATE TABLE papers(
    title VARCHAR(255),
    grade INTEGER,
    student_id INTEGER,
    FOREIGN KEY(student_id) REFERENCES students(id)
        ON DELETE CASCADE
);


-- Insert The Following Data:

INSERT INTO students (first_name) VALUES 
('Caleb'), 
('Samantha'), 
('Raj'), 
('Carlos'), 
('Lisa');

INSERT INTO papers (student_id, title, grade ) VALUES
(1, 'My First Book Report', 60),
(1, 'My Second Book Report', 75),
(2, 'Russian Lit Through The Ages', 94),
(2, 'De Montaigne and The Art of The Essay', 98),
(4, 'Borges and Magical Realism', 89);


-- Print the following Tables

SELECT first_name, title, grade
    FROM students
    INNER JOIN papers
        ON students.id = papers.student_id
    ORDER BY papers.grade DESC;

 
SELECT first_name, title, grade
    FROM students
    LEFT JOIN papers
        ON students.id = papers.student_id
    ORDER BY students.id;


SELECT first_name, IFNULL(title, 'MISSING')AS title, IFNULL(grade, 0)AS grade
    FROM students
    LEFT JOIN papers
        ON students.id = papers.student_id
    ORDER BY students.id;


SELECT first_name, AVG(IFNULL(grade, 0))AS 'averages'
    FROM students
    LEFT JOIN papers
        ON students.id = papers.student_id
    GROUP BY students.id
    ORDER BY papers.grade DESC;


SELECT first_name, AVG(IFNULL(grade, 0))AS 'averages',
    CASE
        WHEN AVG(IFNULL(grade, 0)) >= 75 THEN 'PASSING'
        ELSE 'FAILING'
    END AS passing_status
    FROM students
    LEFT JOIN papers
        ON students.id = papers.student_id
    GROUP BY students.id
    ORDER BY papers.grade DESC;