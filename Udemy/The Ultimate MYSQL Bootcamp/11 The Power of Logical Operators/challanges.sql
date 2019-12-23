-- 1. Evaluate the following...
SELECT 10 != 10; False
SELECT 15 > 14 AND 99 - 5 <=94; True
SELECT 1 IN (15,3) OR 9 BETWEEN 8 AND 10; 1


-- 2. Select all books written before 1980

SELECT * FROM books WHERE  released_year < 1980;


-- 3. Select all books written by Eggers or Chabon.

SELECT title, author_lname FROM books WHERE author_lname IN ('Eggers', 'Chabon'); 

-- 4. Select all books written by Lahiri, Published after 2000. 

SELECT title, author_lname, released_year FROM BOOKS
    WHERE author_lname ='Lahiri' AND released_year >= 2000;

-- 5. Select all books with page counts between 100 and 200.

SELECT title, pages FROM books WHERE pages BETWEEN 100 AND 200;

-- 6. Select all books where author_lname starts with a 'C' or an 'S'.

SELECT title, author_lname FROM books 
    WHERE author_lname LIKE 'C%'
    OR  author_lname LIKE 'S%';

-- 7. If title contains 'stories' -> Short Stories 
--    Just Kids and A Heartbreaking Work -> Memoir
--    Everything Else -> Novel 

SELECT title, author_lname,
        CASE
            WHEN title LIKE '%stories%' THEN 'Short Stories'
            WHEN title LIKE '%Just Kids%' OR title LIKE '%A Heartbreaking Work%' 
                THEN 'Memoir'
            ELSE 'Novel' 
        END AS 'TYPE'
    FROM books;