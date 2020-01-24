-- 1. Print the number of books in the database

SELECT COUNT(*) FROM books;

-- 2. Print out how many books were released each year

SELECT released_year, COUNT(*) FROM books GROUP BY released_year; 

-- 3. Print out the total number of books in stock

SELECT SUM(stock_quantity) FROM books;

-- 4. Find the average released_year of each author 

SELECT author_fname, author_lname, AVG(released_year)
FROM books
GROUP BY author_fname, author_lname;

-- 5. Find the full name of the author who wrote the longest book 

SELECT CONCAT(author_fname, ' ', author_lname) AS author, pages 
FROM books
WHERE pages = (SELECT MAX(PAGES) FROM books); 

-- 6. Find the number of book released and average pages each year 
--    order by date released

SELECT 
    released_year AS year, 
    COUNT(*) AS '# books', 
    AVG(pages) AS 'avg pages'
FROM books
GROUP BY  released_year
ORDER BY  released_year;
 