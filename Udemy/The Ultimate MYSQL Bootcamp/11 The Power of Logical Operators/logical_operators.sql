/* Not Equal != */ 

SELECT title FROM books
WHERE released_year != 2017;

SELECT DISTINCT author_lname FROM books
WHERE author_lname != 'Harris';

-- ---------------------------------------------------------------------

/* Not Like */

SELECT title FROM books WHERE title LIKE 'W%';

SELECT title FROM books WHERE title NOT LIKE 'W%';

-- ---------------------------------------------------------------------

/* Greater Than > and >= */ 

SELECT title, released_year FROM books
WHERE released_year > 2000 ORDER BY released_year;

SELECT title, stock_quantity FROM books 
WHERE stock_quantity >= 100 ORDER BY stock_quantity;

SELECT 99 > 1;
-- 1 IS EQUIVALENT TO TRUE

SELECT 1 > 99;
-- 0 IS EQUIVALENT TO FALSE


SELECT 1 > 1;
SELECT 'a' > 'b'; -- 0
SELECT 'b' > 'a'; -- 1
SELECT 'a' > 'A'; -- 0
SELECT 'A' > 'a'; -- 0
SELECT 'A' = 'a'; -- 1
-- ---------------------------------------------------------------------

/* Greater Than < and <= */ 
SELECT * FROM books WHERE released_year < 2000;

-- ---------------------------------------------------------------------
/* & AND */ 

SELECT title, concat(author_fname, ' ', author_lname) as 'name' 
FROM books WHERE author_fname = 'dave';

SELECT title , released_year FROM books WHERE  released_year > 2010;

-- AND 

SELECT * FROM books WHERE author_fname='dave' AND  released_year >2010;

-- &&

SELECT * FROM books WHERE author_fname='dave' &&  released_year >2010;

-- ---------------------------------------------------------------------
/* || OR */ 

SELECT * FROM books WHERE author_fname='dave' OR released_year >2000;



SELECT 10 < 1 || 1 < 10;
-- 1  (only one need to be true)

SELECT 10 < 1 && 1 < 10;
-- 0  (all need to be true)

-- ---------------------------------------------------------------------
/* BETWEEN */ 

SELECT * FROM books WHERE released_year >= 2004 AND released_year <= 2015;

SELECT * FROM books WHERE released_year BETWEEN 2004 AND 2015;

SELECT * FROM books WHERE released_year notBETWEEN 2004 AND 2015; 

-- when using between, convert everything to the same data type
-- ---------------------------------------------------------------------
/* CAST() to change from one date type to another */ 

SELECT CAST('2019-12-23 11:12:39' AS TIME);

SELECT CAST('2019-12-23 11:12:39' AS DATE);

SELECT CAST('2019-12-23 11:12:39' AS DATETIME);


USE DATABASE new_testing_db;
SELECT * FROM people;

SELECT * FROM people WHERE birthdt BETWEEN '1980-01-01' AND '1990-01-01';

SELECT * FROM people 
    WHERE birthdt BETWEEN
        CAST('1980-01-01' AS DATETIME) AND CAST('1990-01-01' AS DATETIME);


-- ---------------------------------------------------------------------

/* IN and NOT IN */

USE book_shop;

SELECT title, author_lname FROM books
    WHERE author_lname = 'carver'
    OR author_lname = 'lahiri'
    OR author_lname = 'smith';


SELECT title , author_fname, author_lname FROM books
    WHERE author_lname IN ('carver', 'lahiri', 'smith');

SELECT title , released_year FROM books
    WHERE  released_year IN (2017, 1985);


SELECT title , released_year FROM books
    WHERE  released_year NOT IN (2000, 2002, 2004, 2006, 2008, 2010, 2012, 2014, 2016);


SELECT title , released_year FROM books
    WHERE released_year >= 2010 AND
        released_year NOT IN (2000, 2002, 2004, 2006, 2008, 2010, 2012, 2014, 2016);

-- ---------------------------------------------------------------------

/* CASE */


SELECT title, released_year, 
        CASE
            WHEN released_year >= 2000 THEN 'Modern Lit'
            ELSE '20th Century Lit'
        END AS genre
    FROM books;



SELECT title, stock_quantity, 
        CASE
            WHEN stock_quantity BETWEEN 0 AND 50 THEN '*'
            WHEN stock_quantity BETWEEN 51 AND 100 THEN '**'
            WHEN stock_quantity BETWEEN 101 AND 250 THEN '***'
            ELSE '****'
        END AS stock
    FROM books;

-- OR you can do:


SELECT title, stock_quantity, 
        CASE
            WHEN stock_quantity <= 50 THEN '*'
            WHEN stock_quantity <= 100 THEN '**'
            WHEN stock_quantity <= 250 THEN '***'
            ELSE '****'
        END AS stock
    FROM books;