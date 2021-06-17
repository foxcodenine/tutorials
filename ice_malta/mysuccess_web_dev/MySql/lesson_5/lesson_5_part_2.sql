
-- PART 2 
-- ---------------------------------------------------------------------
USE POS;
SHOW TABLES;

DESCRIBE Category;
DESCRIBE Invoice;
DESCRIBE InvoiceItem;
DESCRIBE Item;

-- ---------------------------------------------------------------------
-- Exercise 5.2
-- Q5. Show sales total by category.


SELECT cat.catName AS 'catName', SUM(it.qty * it.unitPrice) AS 'sales'
FROM Category AS cat
    JOIN Item i on i.categoryId = cat.id
    JOIN InvoiceItem it ON it.itemId = i.id
GROUP BY cat.catName ORDER BY cat.catName 
;


/* Result
+---------------+---------+
| catName       | sales   |
+---------------+---------+
| Appliances    | 1200.99 |
| Crockery      |  367.92 |
| Entertainment | 1555.98 |
+---------------+---------+
*/

-- ---------------------------------------------------------------------

-- Q6. Show items paid for by credit card (including amount) which were
-- processed on 22nd January 2019 in the morning.


SELECT Item.name AS 'item', p.total AS 'amount'
FROM Payment p 
    JOIN PaymentType pt         ON pt.id = p.paymentTypeId
    JOIN PaymentAllocation pl   ON pl.paymentId = p.id
    JOIN InvoiceItem it         ON it.id = pl.invoiceItemId
    JOIN Item                   ON Item.id = it.itemId
WHERE 
    DATE(p.issueTime) = '2019-01-22' 
AND 
    TIME(p.issueTime) BETWEEN '07:00:00' AND '12:00:00'
AND
    pt.id = 3
;
/* Result
+-------------------+---------+
| item              | amount  |
+-------------------+---------+
| Sony Bravia X3456 | 1099.99 |
+-------------------+---------+
*/

-- ---------------------------------------------------------------------

-- Exercise 5.3

-- 1. All invoice totals exclude VAT. Show a list of all invoices with their totals in
-- euros in one column, and the total with 18% VAT in another.

SELECT 
    id,
    CONCAT('€', total) AS 'total', 
    CONCAT('€', CAST(total*1.18 AS CHAR)) AS 'totalWithVAT' 
FROM Invoice;
/* Result
+----+----------+--------------+
| id | total    | totalWithVAT |
+----+----------+--------------+
|  1 | €1099.99 | €1297.99     |
|  2 | €1200.99 | €1417.17     |
|  3 | €823.91  | €972.21      |
+----+----------+--------------+
*/

-- ---------------------------------------------------------------------

-- 2. Assuming a 40% profit margin on Entertainment products, show the sales
-- and profit made in 2019.

SELECT 
    CONCAT('€', CAST(SUM(InvoiceItem.unitPrice*InvoiceItem.qty)  AS CHAR)) AS 'sales', 
    CONCAT('€', CAST(SUM(InvoiceItem.unitPrice*InvoiceItem.qty) * 0.4  AS CHAR)) AS 'profit'
FROM Invoice
    JOIN InvoiceItem    ON Invoice.id = InvoiceItem.invoiceId
    JOIN Item           ON Item.id = InvoiceItem.itemId
    JOIN Category       ON Category.id = Item.categoryId
WHERE 
    DATE(Invoice.issueTime) BETWEEN '2018-12-31' AND '2020-01-01'
AND 
    Category.id = 4
;

/*
+----------+---------+
| sales    | profit  |
+----------+---------+
| €1555.98 | €622.39 |
+----------+---------+
*/

-- ---------------------------------------------------------------------

-- 3. Show sales by cashier.


SELECT 
    Cashier.name AS 'name',
    Cashier.surname AS 'surname',
    CONCAT('€', CAST(SUM(Invoice.total)  AS CHAR)) AS 'sales'
FROM Invoice 
JOIN Cashier ON Invoice.cashierId = Cashier.id
GROUP BY Cashier.id
;
/* Result
+----------+----------+----------+
| name     | surname  | sales    |
+----------+----------+----------+
| Kristina | Grech    | €1099.99 |
| Roger    | Vassallo | €2024.90 |
+----------+----------+----------+
*/

-- ---------------------------------------------------------------------

-- 4. Show how much money each customer has spent on each category of
-- products.

SELECT    
    Client.name,
    Client.surname,
    CONCAT('€', CAST(SUM(InvoiceItem.unitPrice * InvoiceItem.qty)  AS CHAR)) AS 'spend',
    Category.catName
FROM InvoiceItem
    JOIN Invoice ON Invoice.id = InvoiceItem.invoiceId 
    JOIN Client ON Client.id = Invoice.clientId
    JOIN Item ON Item.id = InvoiceItem.itemId
    JOIN Category ON Category.id = Item.categoryId
GROUP BY Category.id, Client.id
ORDER BY SUM(InvoiceItem.unitPrice * InvoiceItem.qty)
;

/* Result
+----------+---------+----------+---------------+
| name     | surname | spend    | catName       |
+----------+---------+----------+---------------+
| Lorraine | Pulis   | €367.92  | Crockery      |
| Rachel   | Bonavia | €1200.99 | Appliances    |
| Lorraine | Pulis   | €1555.98 | Entertainment |
+----------+---------+----------+---------------+
*/
-- ---------------------------------------------------------------------

-- 5. Show the list of invoices having items from both the Entertainment and
-- Crockery categories.


SELECT Invoice.id, COUNT(Category.catName)   
FROM Invoice 
JOIN InvoiceItem ON Invoice.id = InvoiceItem.invoiceId 
JOIN Item ON Item.id = InvoiceItem.itemId
JOIN Category ON Category.id = Item.categoryId
    WHERE Category.catName != 'Appliances'     
GROUP BY Invoice.id
;

/* Result
+----+-------------------------+
| id | COUNT(Category.catName) |
+----+-------------------------+
|  1 |                       1 |
|  3 |                       2 |
+----+-------------------------+
*/

-- I know that my last result isn't correct but I didn't know about HAVING clause. 
-- I was try "WHERE Category.catName != 'Appliances' AND COUNT(Category.catName) > 1" 
-- But obviously didn't work!

-- I'm reading about HAVING here: https://www.mysqltutorial.org/mysql-having.aspx

-- ---------------------------------------------------------------------
    