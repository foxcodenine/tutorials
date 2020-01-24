
/*
CREATE TABLE books (
    book_id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
    title VARCHAR(100),
    author_fname VARCHAR(100),
    author_lname VARCHAR(100),
    released_year INT,
    stock_quantity INT,
    pages INT);

INSERT INTO books (title, author_fname, author_lname, released_year, stock_quantity, pages)
VALUES ('The Namesake', 'Jhumpa', 'Lahiri', 2003, 32, 291),
       ('Norse Mythology', 'Neil', 'Gaiman',2016, 43, 304),
       ('American Gods', 'Neil', 'Gaiman', 2001, 12, 465),
       ('Interpreter of Maladies', 'Jhumpa', 'Lahiri', 1996, 97, 198),
       ('A Hologram for the King: A Novel', 'Dave', 'Eggers', 2012, 154, 352),
       ('The Circle', 'Dave', 'Eggers', 2013, 26, 504),
       ('The Amazing Adventures of Kavalier & Clay', 'Michael', 'Chabon', 2000, 68, 634),
       ('Just Kids', 'Patti', 'Smith', 2010, 55, 304),
       ('A Heartbreaking Work of Staggering Genius', 'Dave', 'Eggers', 2001, 104, 437),
       ('Coraline', 'Neil', 'Gaiman', 2003, 100, 208),
       ('What We Talk About When We Talk About Love: Stories', 'Raymond', 'Carver', 1981, 23, 176),
       ("Where I'm Calling From: Selected Stories", 'Raymond', 'Carver', 1989, 12, 526),
       ('White Noise', 'Don', 'DeLillo', 1985, 49, 320),
       ('Cannery Row', 'John', 'Steinbeck', 1945, 95, 181),
       ('Oblivion: Stories', 'David', 'Foster Wallace', 2004, 172, 329),
       ('Consider the Lobster', 'David', 'Foster Wallace', 2005, 92, 343);


-- ---------------------------------------------------------------------

-- CONCAT Function:
SELECT CONCAT(author_fname, ' ', author_lname) AS fullname FROM books;

-- useing CONCAT with multple selections:
SELECT author_fname AS first, author_lname AS last, 
CONCAT(author_fname, ' ', author_lname) AS full 
FROM books;

-- CONCAT_WS function:
SELECT CONCAT_WS(' - ', title, author_fname, author_lname) FROM books;

*/

-- ---------------------------------------------------------------------

/* SUBSTING function: */

SELECT SUBSTRING('Hello World', 2, 8);

SELECT SUBSTRING('Hello World', 7);

SELECT SUBSTRING('Hello World', 7, 1);

SELECT SUBSTRING('Hello World', -3);

-- --------------------------------------------------------------------- 
/* SUBSTING a table column: */

SELECT SUBSTRING(title, 1, 15) AS short_title FROM books;

-- --------------------------------------------------------------------- 
/* SUBSTING with CONCAT: */

SELECT CONCAT (SUBSTRING(title, 1, 15), '...') AS 'short title' 
FROM books;

-- ---------------------------------------------------------------------
/* REPLACE function: */

SELECT REPLACE ('Hello World', 'Hell', '%$#@');

-- or 

SELECT REPLACE ('Hello World', 'l', '7');

-- ---------------------------------------------------------------------
/* REPLACE a table column: */

SELECT REPLACE ( title, 'e', '3') AS 'title 3s' FROM books;

-- ---------------------------------------------------------------------
/* try all 3 function */

SELECT CONCAT(SUBSTRING(REPLACE( title, 'e', '3'), 1, 10), '>>>') 
AS '< silly titles >' FROM books;

-- ---------------------------------------------------------------------
/* REVERSE function */

SELECT REVERSE('meow meow');

SELECT REVERSE(author_fname) FROM books;

SELECT CONCAT('woof', REVERSE('woof'));

SELECT CONCAT(author_fname, REVERSE(author_fname)) FROM books;

-- --------------------------------------------------------------------- 
/* CHAR_LENGTH function */

SELECT CHAR_LENGTH ('Hello World');

SELECT author_lname, CHAR_LENGTH (author_lname) AS length FROM books;

-- --------------------------------------------------------------------- 
/* UPPER and LOWER functions: */ 

SELECT UPPER('hello '), LOWER('WORLD');

-- --------------------------------------------------------------------- 
/* String Function Challenges: */ 

SELECT REVERSE (UPPER ("Why does my cat look at me with such hatred?")); 

-- I_like_cats

SELECT REPLACE(CONCAT("I", " ", "like", " ", "cats"), ' ', '_');


SELECT REPLACE(title, ' ', '->') FROM books;


SELECT author_lname AS forwards, REVERSE(author_lname) AS backwards FROM books;


SELECT UPPER(CONCAT(author_fname,' ' ,author_lname)) AS 'full name in caps'  FROM books;


SELECT CONCAT(title,' was released in ' ,released_year) AS blurb FROM books;


SELECT title, CHAR_LENGTH(title) AS 'character count' FROM books;


SELECT 
    CONCAT(SUBSTRING(title, 1, 10),'...') AS 'short title', 
    CONCAT(author_lname, ',', author_fname) AS 'author',
    CONCAT(stock_quantity, ' in stock') AS quantity
    FROM books WHERE released_year=2001;
 