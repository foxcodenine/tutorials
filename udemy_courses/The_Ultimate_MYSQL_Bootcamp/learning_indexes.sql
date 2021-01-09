-- https://www.youtube.com/watch?v=yWj320oEQEo

-- index are used to optimize when you are running you querys 

/*
four type of INDEXES:
INDEX 
PRIMARY
UNIQUE 
FULLTEXT
*/

DROP TABLE IF EXISTS products;

SHOW WARNINGS;

CREATE TABLE products(
    product_id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT, 
    product_name VARCHAR(100) NOT NULL,
    product_category VARCHAR(50), 
    product_price DECIMAL(10, 2) NOT NULL,
    product_sku CHAR(10) NOT NULL, 
    short_description VARCHAR(500)
)ENGINE = INNODB
COLLATE = 'utf8_unicode_ci'
AUTO_INCREMENT = 1000;

-- Adding an INDEX when creating the table:

CREATE TABLE products(
    product_id INT UNSIGNED AUTO_INCREMENT, 
    product_name VARCHAR(100) NOT NULL,
    product_category VARCHAR(50), 
    product_price DECIMAL(10, 2) NOT NULL,
    product_sku CHAR(10) NOT NULL, 
    short_description VARCHAR(500),
    PRIMARY KEY (product_id),
    INDEX idx_names (product_name, product_category)
)ENGINE = INNODB
COLLATE = 'utf8_unicode_ci'
AUTO_INCREMENT = 1000;

-- Adding an index after table created:
ALTER TABLE products
ADD INDEX idx_sku (product_sku);

-- Removing an index:
DROP INDEX idx_sku ON products;

-- Adding a unique index: 
ALTER TABLE products
ADD UNIQUE idx_sku (product_sku);


-- or you can
CREATE INDEX idx_sku ON products(product_sku);

-- creating a FULLTEXT INDEX:
-- https://www.mysqltutorial.org/activating-full-text-searching.aspx

CREATE FULLTEXT INDEX idx_text ON products(short_description);

-- creating an index on the first 3 characters of the field 
-- this might be used for a foreign phone number
CREATE INDEX idx_sku_three ON products(product_sku(3));

