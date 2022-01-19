-- Exercise 6.1

USE POS;
-- ----------------------------------------------
-- VIEWS

CREATE VIEW vwSoldItem AS  
SELECT
	i.name, it.unitPrice, it.qty
FROM 
	Item i
JOIN InvoiceItem it On it.itemId = i.id;

-- ----------------------------------------------

SELECT * FROM vwSoldItem;

-- ----------------------------------------------

-- HAVING 

SELECT 
	Invoice.id  
FROM 
	Invoice 
	JOIN InvoiceItem ON Invoice.id = InvoiceItem.invoiceId 
	JOIN Item ON Item.id = InvoiceItem.itemId
	JOIN Category ON Category.id = Item.categoryId
WHERE Category.catName != 'Appliances'     
GROUP BY Invoice.id
HAVING COUNT(Invoice.id) > 1
;
-- ----------------------------------------------
-- Transaction

SELECT * FROM Client;

INSERT INTO Client(name, surname) VALUES('Joe', 'Doe');

-- Test using transection
SET AUTOCOMMIT = 0;
START TRANSACTION;
INSERT INTO Client(name, surname) VALUES('Amanda', 'White');
COMMIT;

-- ----------------------------------------------
-- Case 

SELECT
	Invoice.*,
    CASE
		WHEN Invoice.total > 1000 THEN 'Hight Value'
        ELSE 'Normal Value'
	END AS 'invoiceValue'
FROM 
	Invoice;
-- ----------------------------------------------

-- Id, (client), Name, Surname, balance

SELECT 
	Client.id, Client.name, Client.surname,
    SalesTotal - PaymentTotal AS 'balance'
FROM 
	(
		SELECT Invoice.clientId, SUM(Invoice.total) AS SalesTotal FROM Invoice GROUP BY Invoice.clientId
	) I
    LEFT JOIN 
    (
		SELECT Payment.clientId, SUM(Payment.total) AS PaymentTotal FROM Payment GROUP BY Payment.clientId
    ) P
    ON I.clientId = P.clientId
    JOIN Client ON Client.id = I.clientId;
