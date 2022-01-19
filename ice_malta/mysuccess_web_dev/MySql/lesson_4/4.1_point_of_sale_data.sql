
-- 1
INSERT INTO Cashier(firstName, lastname) VALUES
	('Alice', 'Foo'),												/*1*/
    	('Bob', 'Bar'),													/*2*/
    	('Charlie', 'Baz');												/*3*/

-- 2
INSERT INTO Client(firstName, lastName, phone, email) VALUES
	('Dorothy', 'Cassar', 79797979, 'dorothy@gmail.com'),								/*1*/
    	('Yanika', 'Ann', 78787878, 'yanika@yahoo.com'),								/*2*/
    	('Gail', 'Woods', 74747474, 'gail@hotmail.com'),								/*3*/
	('Sarah', 'Magri', 95959595, 'sarah@fts.gov.mt');								/*4*/

-- 3
INSERT INTO PayType(typeName) VALUES
	('cash'),													/*1*/
	('check'),													/*2*/
	('bitcoin'),													/*3*/
    	('cardano'),													/*4*/
	('money_order'),												/*5*/
	('credit_cart'),												/*6*/
	('bank_transfer');												/*7*/

-- 4

INSERT INTO Category(catName) VALUES
	('consumable'), 												/*1*/
	('software'), 													/*2*/
	('gaming'), 													/*3*/
   	 ('accessories'), 												/*4*/
	('components'); 												/*5*/

-- 6
INSERT INTO Item(itemName, price, stockUnit, stockQty, categoryId) VALUES 
	('HP Officejet Pro 8022e', 300.00, NULL, 10, 5),								/*1*/
	('Acer Swift 3 14" i7/16GB/1TB SSD/W10H', 1200.00, NULL, 3, 5),	/*2*/
	('Xiaomi', 400.00, NULL, 20, 5),										/*3*/
	('HP ink', 50.00, 'box', 4, 1),											/*4*/
	('Android eBook', 150.00, NULL, 10, 5),										/*5*/
	('Xbox One Controller', 75.00, NULL, 8, 3), 									/*6*/
	('Xbox One Video Game', 30.00, NULL, 30, 3);									/*7*/


-- ---------------------------------------------------------------------

-- Case 1
-- Client 1 purchase 3 items, in two occasions.
-- The Client paid instantly both times.

-- 7, 9, 5, 8, 10


INSERT INTO Invoice(dateAndTime, total, cashierId, clientId) VALUES
	('2019-01-02 10:10:10', 300.00, 1, 1), 										/*1*/
	('2019-02-02 09:10:10', 250.00, 2, 1); 										/*2*/

INSERT INTO InvoiceItem(itemUnit, itemQty, invoiceId, itemId) VALUES 
	(NULL, 1, 1, 1), 												/*1*/
 	(NULL, 1, 2, 3), 												/*2*/
	(NULL, 1, 2, 4); 												/*3*/

INSERT INTO Payment(dateAndTime, total, clientId, payTypeId) VALUES
	('2019-01-02 10:12:10', 300.00, 1, 1),  									/*1*/
	('2019-02-02 09:12:10', 250.00, 1, 6);  									/*2*/

INSERT INTO PaymentInvoice(invoiceId, paymentId) VALUES
	(1, 1), 													/*1*/
	(2, 2); 													/*2*/

INSERT INTO Alocation(itemQty, paymentInvoiceId, invoiceItemId) VALUES 
	(1, 1, 1), 													/*1*/ 
	(1, 2, 2), 													/*2*/  
	(1, 2, 3); 													/*3*/

-- ---------------------------------------------------------------------

-- Case 2
-- Client 2 purchase 2 items in two occasions.
-- The Client paid everything at the end of the month in a single payment.NULL

-- 7, 9, 5, 8, 10 

INSERT INTO Invoice(dateAndTime, total, cashierId, clientId) VALUES
	('2019-03-01 11:11:11', 75.00, 2, 2), 										/*3*/
	('2019-03-02 12:12:12', 30.00, 2, 2); 										/*4*/

INSERT INTO InvoiceItem(itemUnit, itemQty, invoiceId, itemId) VALUES 
	(NULL, 1, 3, 6), 												/*4*/
	(NULL, 1, 4, 7); 												/*5*/

INSERT INTO Payment(dateAndTime, total, clientId, payTypeId) VALUES
	('2019-03-28 13:13:13', 105.00, 2, 2); 										/*3*/

INSERT INTO PaymentInvoice(invoiceId, paymentId) VALUES
	(3, 3), 													/*3*/
	(4, 3); 													/*4*/

INSERT INTO Alocation(itemQty, paymentInvoiceId, invoiceItemId) VALUES 
	(1, 3, 4), 													/*4*/  
	(1, 4, 5); 													/*5*/


-- ---------------------------------------------------------------------

-- Case 3
-- Client 3 purchase 2 items in 1 occasions.
-- The Client divided its payment in 4 installments 
-- each at the start of each consecutive month.

-- 7, 9, 5, 8, 10 

INSERT INTO Invoice(dateAndTime, total, cashierId, clientId) VALUES
	('2019-04-12 08:08:08', 1600, 3, 3); 										/*5*/

INSERT INTO InvoiceItem(itemUnit, itemQty, invoiceId, itemId) VALUES 
	(NULL, 1, 5, 2), 												/*4*/
	(NULL, 1, 5, 3); 												/*5*/

INSERT INTO Payment(dateAndTime, total, clientId, payTypeId) VALUES
	('2019-05-01 08:09:10', 600, 3, 7), 										/*4*/
	('2019-06-01 09:09:09', 400, 3, 7), 										/*5*/
	('2019-07-01 10:09:08', 400, 3, 7), 										/*6*/
	('2019-08-01 11:09:07', 200, 3, 7); 										/*7*/

INSERT INTO PaymentInvoice(invoiceId, paymentId) VALUES
	(5, 4), 													/*5*/
	(5, 5), 													/*6*/
	(5, 6), 													/*7*/
	(5, 7); 													/*8*/ 

INSERT INTO Alocation(itemQty, paymentInvoiceId, invoiceItemId) VALUES 
	(1, 5, 5), 													/*5*/  
	(0, 5, 4), 													/*6*/  
	(0, 6, 4), 													/*7*/  
	(0, 7, 4), 													/*8*/ 
	(1, 8, 4); 													/*9*/

-- ---------------------------------------------------------------------

-- Case 4
-- Client 4 purchase 1 items in 1 occasions.
-- The Client did not pay in due time and was blocked.

INSERT INTO Invoice(dateAndTime, total, cashierId, clientId) VALUES
	('2019-05-13 07:06:05', 150, 3, 4); 										/*6*/

INSERT INTO InvoiceItem(itemUnit, itemQty, invoiceId, itemId) VALUES 
	(NULL, 1, 6, 5); 												/*6*/

UPDATE Client SET isBlocked = true WHERE  id = 4;

-- ---------------------------------------------------------------------
