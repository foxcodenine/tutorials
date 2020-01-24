/*
INSERT INTO books
    (title, author_fname, author_lname, released_year, stock_quantity, pages)
    VALUES
        ('10% Happier', 'Dan', 'Harris', 2014, 29, 256), 
        ('fake_book', 'Freida', 'Harris', 2001, 287, 428),
        ('Lincoln In The Bardo', 'George', 'Saunders', 2017, 1000, 367); 
*/


-- ---------------------------------------------------------------------

/* DISTINCT: */

SELECT author_lname FROM books;

SELECT DISTINCT author_lname FROM books;

SELECT author_lname, author_fname FROM books;

SELECT DISTINCT author_lname, author_fname FROM books;

SELECT DISTINCT CONCAT_WS(' ', author_lname, author_fname) AS full_name FROM books;

-- ---------------------------------------------------------------------

/* ORDER BY: */

SELECT  author_lname FROM books ORDER BY author_lname;

SELECT DISTINCT  author_lname FROM books ORDER BY author_lname /*ASC*/;

SELECT DISTINCT  title FROM books ORDER BY title DESC;

SELECT title, released_year, pages FROM books ORDER BY released_year;

SELECT title, author_fname, author_lname FROM books;


-- THE NUMBER REFER TO THE SELECTION INDEX - SO THEY ARE ORDERED BY FNAME:
SELECT title, author_fname, author_lname FROM books ORDER BY 2; 

-- MULTIPLE ORDER BY, FIRST PREFERENCE , SECOND PREFERENCE:
SELECT title, author_fname, author_lname FROM books ORDER BY author_lname, author_fname; 

-- ---------------------------------------------------------------------

/* LIMIT: */

SELECT title FROM books LIMIT 3;

SELECT * FROM books LIMIT 1;

-- list the 5 most resent books:
SELECT title, released_year FROM books ORDER BY  released_year DESC LIMIT 5;

-- 1 is the starting point and 5 is the amount:
SELECT title, released_year FROM books ORDER BY  released_year DESC LIMIT 2, 5;

-- TO SELECT TILL THE END USE A LARGE NUMBER:
SELECT title, released_year FROM books ORDER BY  released_year DESC 
LIMIT 10, 999999999;

-- ---------------------------------------------------------------------

/* LIKE: */ 

SELECT title, author_fname, author_lname FROM books WHERE author_fname LIKE '%da%';

SELECT title FROM books WHERE title LIKE '%the%';

SELECT title, stock_quantity FROM books WHERE stock_quantity LIKE '____';

-- AN EXAMPLE WHEN THIS MIGHT BE USFULL:
/* (356)7931-0212    LIKE '(___)____-____' */

-- WHEN THE SEARCH ITEM HAVE A % OR _ CHARACTER USE THE ESCAPE CHAR. \

SELECT title FROM books WHERE title LIKE '%\%%';

SELECT title FROM books WHERE title LIKE '%\_%';

-- ---------------------------------------------------------------------
/*EXERCISES*/

-- 1
SELECT title FROM books WHERE title LIKE '%stories%';

-- 2
SELECT title, pages FROM books ORDER BY pages DESC LIMIT 1;

-- 3
SELECT CONCAT_WS(' - ',title ,released_year) AS summery 
FROM books ORDER BY released_year DESC LIMIT 3;

-- 4
SELECT title, author_lname FROM books WHERE author_lname LIKE '% %';

-- 5
SELECT title, released_year, stock_quantity FROM books 
ORDER BY stock_quantity, title LIMIT 3;
 
-- 6
SELECT title, author_lname FROM books ORDER BY author_lname, title;
-- SELECT title, author_lname FROM books ORDER BY 2,1;

-- 7
SELECT UPPER(CONCAT('my favorite author is ', author_fname,' ', author_lname, '!')) 
AS yell FROM books ORDER BY author_lname;