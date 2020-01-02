CREATE DATABASE customers_and_orders;
USE customers_and_orders;
-- SELECT DATABASE();

CREATE TABLE customers(
    id INT AUTO_INCREMENT PRIMARY KEY,
    first_name VARCHAR(100),
    last_name VARCHAR(100),
    email VARCHAR(100)
);

CREATE TABLE orders(
    id INT AUTO_INCREMENT PRIMARY KEY,
    order_date DATE,
    amount DECIMAL(8,2),
    customer_id INT,
    FOREIGN KEY(customer_id) REFERENCES customers(id)
);




-- Inserting some customers and orders

INSERT INTO customers (first_name, last_name, email) 
VALUES ('Boy', 'George', 'george@gmail.com'),
       ('George', 'Michael', 'gm@gmail.com'),
       ('David', 'Bowie', 'david@gmail.com'),
       ('Blue', 'Steele', 'blue@gmail.com'),
       ('Bette', 'Davis', 'bette@aol.com');
       
INSERT INTO orders (order_date, amount, customer_id)
VALUES ('2016/02/10', 99.99, 1),
       ('2017/11/11', 35.50, 1),
       ('2014/12/12', 800.67, 2),
       ('2015/01/03', 12.50, 2),
       ('1999/04/11', 450.25, 5);



SELECT * FROM customers WHERE last_name =  'George';
SELECT * FROM orders WHERE customer_id = 1;

SELECT * FROM orders WHERE customer_id =
    (SELECT id FROM customers WHERE last_name =  'George');



/* Cross Join - the most simplaest and useless form of joint: */
SELECT * FROM customers, orders;


/* Implicit Inner Join */

SELECT * FROM customers, orders WHERE customers.id = orders.customer_id;

 
SELECT CONCAT(first_name, ' ', last_name) AS name, order_date, amount 
    FROM customers, orders 
    WHERE customers.id = orders.customer_id;


/* Explicit Inner Join */

SELECT * FROM customers 
    JOIN orders
    ON customers.id = orders.customer_id;


SELECT CONCAT(first_name, ' ', last_name) AS name, order_date, amount 
    FROM customers 
        JOIN orders
        ON customers.id = orders.customer_id;