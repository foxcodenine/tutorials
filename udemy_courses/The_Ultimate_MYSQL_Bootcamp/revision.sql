/* 12 Section 12_ One To Many */  

CREATE DATABASE customers_and_orders;

USE customers_and_orders;

CREATE TABLE customers(
    id INTEGER AUTO_INCREMENT PRIMARY KEY,
    first_name VARCHAR(50),
    last_name VARCHAR(50),
    email VARCHAR(255) UNIQUE
);

CREATE TABLE orders(
    id INTEGER AUTO_INCREMENT PRIMARY KEY,
    order_date DATE,
    amount DECIMAL(8,2), 
    customer_id INTEGER,
    FOREIGN KEY(customer_id) REFERENCES customers(id)
);

-- Inserting some customers and orders

INSERT INTO customers(first_name, last_name, email)
VALUES ('Boy', 'George', 'george@gmail.com'),
       ('George', 'Michael', 'gm@gmail.com'),
       ('David', 'Bowie', 'david@gmail.com'),
       ('Blue', 'Steele', 'blue@gmail.com'),
       ('Bette', 'Davis', 'bette@aol.com');


INSERT INTO orders(order_date, amount, customer_id)
VALUES  ('2016/02/10', 99.99, 1),
        ('2017/11/11', 35.50, 1),
        ('2014/12/12', 800.67, 2),
        ('2015/01/03', 12.50, 2),
        ('1999/04/11', 450.25, 5);


/* Cross Join - the most simplaest and useless form of joint: */
SELECT * AS 'order_id' 
FROM customers, orders;

SELECT first_name, last_name, orders.id AS 'order_id' 
FROM customers, orders;

-- it combine verything together

/* Implicit Inner Join */ 

SELECT  
    CONCAT(first_name, ' ', last_name)AS 'fullname',
    order_date, 
    amount, 
    orders.id AS 'oredr_id'
FROM customers
INNER JOIN orders ON 
    customers.id = orders.customer_id;


SELECT
    CONCAT(first_name, ' ', last_name)AS 'fullname',
    SUM(amount)AS 'total_spent'
FROM customers
INNER JOIN orders ON 
    customers.id = orders.customer_id
GROUP BY orders.customer_id
ORDER BY SUM(amount);



-- ---------------------------------------------------------------------
-- ---------------------------------------------------------------------

-- many to many questions 

-- question 1

SELECT 
    series.title, 
    reviews.rating 
FROM series
INNER JOIN reviews
    ON series.id = reviews.series_id
ORDER BY  series.title;

-- question 2 


SELECT
    series.title, 
    AVG(reviews.rating ) AS 'avg_rating'
FROM series
INNER JOIN reviews 
    ON series.id = reviews.series_id
GROUP BY series.id 
ORDER BY  AVG(reviews.rating); 

-- question 3 


SELECT 
    reviewers.first_name, 
    reviewers.last_name, 
    reviews.rating
FROM reviewers
INNER JOIN reviews
    ON reviewers.id = reviews.reviewer_id;


-- question 4 

SELECT rating, title 
FROM series LEFT JOIN reviews ON series.id = reviews.series_id;

SELECT title AS 'unreviewed_series'
FROM series LEFT JOIN reviews ON series.id = reviews.series_id
WHERE reviews.rating IS NULL;

-- question 5 

SELECT
    genre,
    AVG(rating) AS 'avg_rating'
FROM series
INNER JOIN reviews 
    ON series.id = reviews.series_id 
GROUP BY genre;

-- question 6

SHOW DATABASES; 
USE tv_review_app;
SHOW TABLES;

SELECT * FROM reviewers;
SELECT * FROM reviews;
SELECT * FROM series;



SELECT
    first_name,
    last_name,
    COUNT(rating) AS 'COUNT',
    IFNULL(MIN(rating), 0) AS 'MIN',
    IFNULL(MAX(rating), 0) AS 'MAX',
    IFNULL(AVG(rating), 0) AS 'AVG',
    CASE
        WHEN COUNT(rating) = 0 THEN 'INACTIVE'
        ELSE 'ACTIVE'
    END AS 'STATUS'  
FROM reviewers
LEFT JOIN reviews
    ON   reviewers.id = reviews.reviewer_id
GROUP BY reviewers.id;

-- question 7
-- need title rating reviewer first&last name 

SELECT
    title,
    rating, 
    CONCAT(first_name, ' ', last_name) AS 'reviewer'
FROM reviewers 
INNER JOIN reviews
    ON reviewers.id = reviews.reviewer_id
INNER JOIN series
    ON reviews.series_id = series.id
ORDER BY series.id;



