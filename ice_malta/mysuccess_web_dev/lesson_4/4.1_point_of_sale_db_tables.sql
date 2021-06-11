DROP DATABASE IF EXISTS point_of_sale;

CREATE DATABASE point_of_sale;

USE point_of_sale;

-- ---------------------------------------------------------------------

-- 1
CREATE TABLE Cashier(
	id INT AUTO_INCREMENT PRIMARY KEY,
    firstName 	VARCHAR(30) NOT NULL,
    lastName  	VARCHAR(30) NOT NULL,
    isActive 	BOOL DEFAULT true
);


-- 2
CREATE TABLE Client(
	id 			INT AUTO_INCREMENT PRIMARY KEY,
    firstName 	VARCHAR(30) NOT NULL,
    lastName  	VARCHAR(30) NOT NULL,
    phone		INT,
    email 		VARCHAR(30) NOT NULL,
    isBlocked 	BOOL DEFAULT false
);


-- 3
CREATE TABLE PayType(
	id 			INT AUTO_INCREMENT PRIMARY KEY,
    typeName 	VARCHAR(30) NOT NULL
);


-- 4
CREATE TABLE Category(
	id 			INT AUTO_INCREMENT PRIMARY KEY,
    catName 	VARCHAR(30) NOT NULL
);

-- 5
CREATE TABLE Payment(
	id 			 	INT AUTO_INCREMENT PRIMARY KEY,
    dateAndTime		DATETIME DEFAULT CURRENT_TIMESTAMP,
    total			DECIMAL(8,2),
    clientId		INT NOT NULL,
    payTypeId		INT NOT NULL,
    
    CONSTRAINT 	c_payment_client
		FOREIGN KEY(clientId) REFERENCES Client(id),        
	CONSTRAINT 	c_payment_paytype
		FOREIGN KEY(payTypeId) REFERENCES PayType(id)
);

-- 6
CREATE TABLE Item(
	id 		 	INT AUTO_INCREMENT PRIMARY KEY,
	itemName	VARCHAR(20) NOT NULL,
    price		DECIMAL(8, 2) NOT NULL,
    stockUnit	VARCHAR(20) DEFAULT 'not_applicable',
    stockQty	INT NOT NULL,
    categoryId	INT NOT NULL,
	CONSTRAINT 	c_item_category
		FOREIGN KEY(categoryId) REFERENCES Category(id)
);

ALTER TABLE Item 
	CHANGE itemName itemName VARCHAR(50);


-- 7
CREATE TABLE Invoice(
		id 			 	INT AUTO_INCREMENT PRIMARY KEY,
        dateAndTime		DATETIME DEFAULT CURRENT_TIMESTAMP,
        reversed		BOOL DEFAULT false,
		total			DECIMAL(8, 2) NOT NULL,
        cashierId		INT NOT NULL,
        clientId		INT NOT NULL,
        
		CONSTRAINT 	c_invoice_cashier
			FOREIGN KEY(cashierId) REFERENCES Cashier(id),            
		CONSTRAINT 	c_invoice_client
			FOREIGN KEY(clientId) REFERENCES Client(id)       
);


-- 8 
CREATE TABLE PaymentInvoice(
	id 			 	INT AUTO_INCREMENT PRIMARY KEY,    
    invoiceId		INT NOT NULL,
    paymentId		INT NOT NULL,
	
	CONSTRAINT 	c_paymentinvoice_invoice
		FOREIGN KEY(invoiceId) REFERENCES Invoice(id),
	CONSTRAINT 	c_paymentinvoice_payment
		FOREIGN KEY(paymentId) REFERENCES Payment(id)
);


-- 9  
CREATE TABLE InvoiceItem(
	id 			 	INT AUTO_INCREMENT PRIMARY KEY,      
    itemUnit		VARCHAR(20) DEFAULT 'not_applicable',
    itemQty			INT NOT NULL,
    invoiceId		INT NOT NULL,
    itemId			INT NOT NULL,    
    
	CONSTRAINT 	c_invoiceitem_item
		FOREIGN KEY(itemId) REFERENCES Item(id),
	CONSTRAINT 	c_invoiceitem_invoice
		FOREIGN KEY(invoiceId) REFERENCES Invoice(id)
);

-- 10
CREATE TABLE Alocation(
	id 			 		INT AUTO_INCREMENT PRIMARY KEY, 
    itemQty				INT NOT NULL,
    paymentInvoiceId	INT NOT NULL,
    invoiceItemId		INT NOT NULL,
    
	CONSTRAINT 	c_alocation_paymentinvoice
		FOREIGN KEY(paymentInvoiceId) REFERENCES PaymentInvoice(id)
		ON UPDATE CASCADE
		ON DELETE CASCADE,
	CONSTRAINT 	c_alocation_invoiceitem
		FOREIGN KEY(invoiceItemId) REFERENCES InvoiceItem(id)
		ON UPDATE CASCADE
		ON DELETE CASCADE
);


-- ---------------------------------------------------------------------

