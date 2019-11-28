-- https://dev.mysql.com/doc/refman/8.0/en/sql-mode.html#sql-mode-setting

/*
To change the SQL mode at runtime, set the global or session sql_mode 
system variable using a SET statement:

SET GLOBAL sql_mode = 'modes';
SET SESSION sql_mode = 'modes';

ex:
SET SESSION sql_mode = DEFAULT;


Setting the GLOBAL variable requires the SYSTEM_VARIABLES_ADMIN or SUPER 
privilege and affects the operation of all clients that connect from that 
time on. Setting the SESSION variable affects only the current client. 
Each client can change its session sql_mode value at any time.

To determine the current global or session sql_mode setting, select its 
value:

SELECT @@GLOBAL.sql_mode;
SELECT @@SESSION.sql_mode;


ANSI

This mode changes syntax and behavior to conform more closely to standard SQL. 
It is one of the special combination modes listed at the end of this section.

STRICT_TRANS_TABLES

If a value could not be inserted as given into a transactional table, 
abort the statement. For a nontransactional table, abort the statement 
if the value occurs in a single-row statement or the first row of a 
multiple-row statement. More details are given later in this section.

TRADITIONAL

Make MySQL behave like a “traditional” SQL database system. 
A simple description of this mode is “give an error instead of a warning” 
when inserting an incorrect value into a column. It is one of the special 
combination modes listed at the end of this section.


check:
https://dev.mysql.com/doc/refman/8.0/en/sql-mode.html#sql-mode-setting

*/



-- ---------------------------------------------------------------------
/* VARCHAR */   -- text has a variable length, from 0 to 255
/* CHAR */      -- text has a fix length, from 0 to 255

/* CREATE TABLE dogs (name CHAR(5), breed VARCHAR(10)); */

/* INSERT INTO dogs (name, breed) VALUES ('bob', 'beagle'), ('robby', 'corgi'); */

-- INSERT INTO dogs (name, breed) VALUES ('Princess', 'Retriever'); -- ERROR

-- INSERT INTO dogs (name, breed) VALUES ('Princ', 'verylongnamenamenamenamenamename'); -- ERROR


-- ---------------------------------------------------------------------

/* DECIMAL */   -- a number that can have a decimal value

-- DECIMAL(5, 2)  the 5 is the total number of digits & 2 is digits after desical

-- CREATE TABLE items (price DECIMAL(5, 2))

-- INSERT INTO items (price) VALUES (7);

-- INSERT INTO items (price) VALUES (77777777); -- ERROR

-- INSERT INTO items (price) VALUES (777.77); 

-- INSERT INTO items (price) VALUES (77.777); -- ERROR

-- ---------------------------------------------------------------------

/*  FLOAT and DOUBLE */   -- are similar to decimal, they store larger 
                          -- nambers with less space with less  precision


-- CREATE TABLE thingies (price FLOAT); 

-- INSERT INTO thingies (price) VALUES 
--     (88.855),
--     (1258111),
--     (11258.01);

-- ---------------------------------------------------------------------

/*  DATE yyyy-mm-dd, TIME hh:mm:ss & DATETIME yyyy-mm-dd hh:mm:ss */

-- CREATE TABLE people(
--     name VARCHAR(100),
--     birthdate DATE, 
--     birthtime TIME, 
--     birthdt DATETIME);

-- INSERT INTO people (name, birthdate, birthtime, birthdt) VALUES
--     ('Padma', '1983-11-11', '10:07:35', '1983-11-11 10:07:35');


-- INSERT INTO people (name, birthdate, birthtime, birthdt) VALUES
--     ('Larry', '1943-12-25', '4:10:44', '1943-12-25 4:10:44');

-- --------------------------------------------------------------------- 

/* CURDATE(), CURTIME() & NOW() */ 

SELECT CURDATE();

SELECT CURTIME();

SELECT NOW();

-- INSERT INTO people (name, birthdate, birthtime, birthdt) VALUES
--     ('Toaster', CURDATE(), CURTIME(), NOW());



-- INSERT INTO people (name, birthdate, birthtime, birthdt) VALUES
--     ('Microwave', CURDATE(), CURTIME(), NOW()); 

-- DELETE FROM people WHERE name='Microwave';

-- --------------------------------------------------------------------- 
/* Date and Time functions */

-- https://dev.mysql.com/doc/refman/8.0/en/date-and-time-functions.html


-- SELECT name, DAY(birthdt) FROM people;

-- SELECT name, DAYNAME(birthdt) FROM people;

-- SELECT name, DAYOFWEEK(birthdt) FROM people;

-- SELECT name, DAYOFYEAR(birthdt) FROM people;


-- SELECT name, MONTH(birthdt) FROM people;

-- SELECT name, MONTHNAME(birthdt) FROM people;


-- SELECT name, SECOND(birthdt) FROM people; 

-- SELECT name, MINUTE(birthdt) FROM people;

-- SELECT name, HOUR(birthdt) FROM people;

/* DATE_FORMAT */

-- SELECT name, birthdt, DATE_FORMAT(birthdate, '%D %M %Y') FROM people;

-- ---------------------------------------------------------------------

/* DATE MATH */

SELECT DATEDIFF(NOW(),  '1984-08-12 04:55:00');  


SELECT DATEDIFF(NOW(), birthdt) FROM people;

-- https://dev.mysql.com/doc/refman/8.0/en/expressions.html#temporal-intervals
 
SELECT DATE_SUB(CURDATE(),  INTERVAL 1 DAY); 

SELECT DATE_ADD(CURTIME(),  INTERVAL 1 HOUR); 

/* USINF + - */ 


SELECT  CURTIME() + INTERVAL 1 HOUR;

SELECT  NOW() - INTERVAL 2 DAY;

SELECT CURDATE() + INTERVAL 4 WEEK - INTERVAL 1 DAY;

-- ---------------------------------------------------------------------

/* TIMESTAMEP */

-- CREATE TABLE comments(
--     content VARCHAR(100),
--     created_at TIMESTAMP DEFAULT NOW()
-- );


-- INSERT INTO comments(content)
--     VALUES('HELLO WHERE');

-- INSERT INTO comments(content)
--     VALUES('....its black friday next friday :)');


-- INSERT INTO comments(content)
--     VALUES('Last hour of the day!)');


-- CREATE TABLE comments2(
--     content VARCHAR(100),
--     created_at TIMESTAMP DEFAULT NOW() ON UPDATE CURRENT_TIMESTAMP
-- );



-- INSERT INTO comments2(content)
--     VALUES('HELLO WHERE');

-- INSERT INTO comments2(content)
--     VALUES('....its black friday next friday :)');


-- INSERT INTO comments2(content)
--     VALUES('Last hour of the day!)');

UPDATE comments2 
    SET content='This is the last 60 minute of the day' 
    WHERE content='Last hour of the day!)';