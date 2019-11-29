-- 1. What's a good use case for CHAR?
-- When inserting text date that have fixed lenght ex: postcode 

-- 2. Fill in the Blanks:

CREATE TABLE inventory (
    item_name varchar(50),
    price DESIMAL(8, 2),
    quantity INT
    ); 


-- 3. What's the difference between DATETIME and TIMESTAMP?
-- TIMESTAMP uses less storage space & is faster but it has limmit date range.
-- DATETIME has an unlimite date range to use.

-- 4. Print out the current time.

SELECT CURTIME();

-- 5. Print out the current Date but not the Time.

SELECT CURDATE(); 

-- 6. Print out the current day of the week.

-- SELECT DATE_FORMAT(NOW(), '%w');

SELECT DAYOFWEEK(NOW());

-- 7. Print out the current day of the week name. 
SELECT DAYNAME(NOW());


-- 8. Print out the current day and time using this format mm/dd/yyyy 

SELECT DATE_FORMAT(NOW(), '%m/%d/%Y'); 

-- 9. Print out the current day and time using this format, April 1st at 10:18

SELECT DATE_FORMAT(NOW(), '%M %D at %H:%i');

-- 10. Create a tweets table that stores:
-- The Tweet content, A Username, Time it was created

CREATE TABLE tweets(
    content VARCHAR(225),
    username VARCHAR(50),
    created TIMESTAMP DEFAULT NOW()
);