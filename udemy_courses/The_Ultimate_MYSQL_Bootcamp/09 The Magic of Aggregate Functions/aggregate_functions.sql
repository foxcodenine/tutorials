/* COUNT: */ 

SELECT COUNT(*) FROM books;

SELECT author_fname FROM books;

SELECT COUNT(DISTINCT author_fname) FROM books;

SELECT COUNT(DISTINCT author_lname, author_fname) FROM books;

SELECT COUNT(title) FROM BOOKS WHERE title like '%the%';

-- --------------------------------------------------------------------- 

/* GROUP BY */ 

/* GROUP BY summarizes or aggregates identical data onto single rows */ 

SELECT author_lname, COUNT(*)
FROM books  GROUP BY author_lname;

SELECT author_lname, author_fname, COUNT(*)
FROM books  GROUP BY author_lname, author_fname;


SELECT CONCAT('In ', released_year, ' ', COUNT(*), ' book(s) released') 
    AS books_released_by_year  
FROM books GROUP BY released_year; 

-- --------------------------------------------------------------------- 

/* MIN and MAX */ 

SELECT MIN(released_year)
FROM books;


SELECT MAX(pages)
FROM books;

/* SELECT MAX(CHAR_LENGTH(title)), title  FROM books ; */

-- --------------------------------------------------------------------- 

/* SUBQUERIES */

SELECT * FROM books 
    WHERE pages = (SELECT MIN(pages)FROM books);

SELECT MAX(CHAR_LENGTH(title))AS max_title, title FROM books
    WHERE CHAR_LENGTH(title) = (SELECT MAX(CHAR_LENGTH(title)) FROM books); 


/* or you can do: */

SELECT CHAR_LENGTH(title)AS max_title, title FROM books 
    ORDER BY CHAR_LENGTH(title) DESC LIMIT 1;

-- --------------------------------------------------------------------- 

/* Using Min and Max with Group By */

SELECT author_fname, author_lname, MIN(released_year) 
    FROM books 
    GROUP BY author_fname, author_lname;


SELECT author_fname, author_lname, released_year
    FROM books 
    WHERE author_fname = 'David';


SELECT author_fname, author_lname, released_year
    FROM books 
    WHERE author_fname = 'Raymond';


SELECT author_fname, author_lname, MAX(pages) 
    FROM books
    GROUP BY author_fname, author_lname
    ORDER BY MAX(pages) DESC;


SELECT 
    CONCAT(author_fname, ' ', author_lname) AS author,
    MAX(pages) AS 'longest book'
FROM books
GROUP BY author_fname, author_lname
ORDER BY MAX(pages) DESC;


-- --------------------------------------------------------------------- 

/* Sum */

SELECT SUM(pages) FROM books;

SELECT CONCAT_WS(' ', author_fname, author_lname) AS author, SUM(pages) AS total_pages_written
FROM books
GROUP BY author_fname, author_lname
ORDER BY author_lname, author_fname;

-- --------------------------------------------------------------------- 

/* Avg */

SELECT AVG(released_year) FROM books;
SELECT AVG(pages) FROM books;

SELECT released_year, AVG(stock_quantity) 
FROM books 
GROUP BY released_year
ORDER BY released_year;

-- --------------------------------------------------------------------- 