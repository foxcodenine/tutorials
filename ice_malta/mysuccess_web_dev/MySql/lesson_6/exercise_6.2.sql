-- Exercise 6.2 
-- ---------------------------------------------------------------------
-- INIT

-- mysql -u root -p
USE POS;
SHOW TABLES;

-- ---------------------------------------------------------------------
-- QUESTION

/*
Create a view vwPurchases containing a list of all clients and their
purchases.
-   Don’t worry about repeated data – assume this view will be used for
    data analysis. -The columns in this view should be:
-   clientFullName
-   item
-   quantity
-   unitPrice
-   Flag (High for items over €500, Regular for everything else).
*/

-- ---------------------------------------------------------------------
-- SOLUTION

CREATE VIEW vwPurchases
AS
SELECT 
    CONCAT(Client.name, ' ', Client.surname) AS 'clientFullName',
    Item.name               AS 'item',
    InvoiceItem.qty         AS 'quantity',
    InvoiceItem.unitPrice   AS 'unitPrice',
    CASE
        WHEN InvoiceItem.unitPrice * InvoiceItem.qty <= 500 THEN 'Regular'
        ELSE 'High'
    END AS 'Flag'

FROM Client
JOIN Invoice        ON Client.id = Invoice.clientId
JOIN InvoiceItem    ON Invoice.id = InvoiceItem.invoiceId
JOIN Item           ON Item.id =  InvoiceItem.itemId  
ORDER BY Client.surname, Client.name  
;


-- ---------------------------------------------------------------------
-- RESULT 
SELECT * FROM vwPurchases;

/*
+----------------+----------------------------+----------+-----------+---------+
| clientFullName | item                       | quantity | unitPrice | Flag    |
+----------------+----------------------------+----------+-----------+---------+
| Rachel Bonavia | American Refridgeration B1 |        1 |   1200.99 | High    |
| Lorraine Pulis | Sony Bravia X3456          |        1 |   1099.99 | High    |
| Lorraine Pulis | Microsoft Hololens 2       |        1 |    455.99 | Regular |
| Lorraine Pulis | Helfing Bone China Plate   |        8 |     45.99 | Regular |
+----------------+----------------------------+----------+-----------+---------+
*/

-- ---------------------------------------------------------------------
-- CHECKING

SELECT * FROM Invoice;
SELECT SUM(total) FROM Invoice;
SELECT * FROM InvoiceItem;
SELECT Item.name FROM Item;

-- According the Invoice table:
    -- there where only 2 clients that did a purchase,
    -- and tatal of all invoice is 3124.89 which coincide with vwPurchases
-- Also comparing the unitPrice, qty and itemId from InvoiceItem table 
-- vwPurchases data seems correct
-- ---------------------------------------------------------------------