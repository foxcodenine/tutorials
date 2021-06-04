/* source ./art_gallery_db.sql */

CREATE DATABASE IF NOT EXISTS art_gallery;


USE art_gallery;

/* DROP TABLE customer_artgroup;
DROP TABLE purchase;
DROP TABLE customer;
DROP TABLE artpiece_group;
DROP TABLE artpiece;
DROP TABLE artist;
DROP TABLE art_group;
DROP TABLE art_type;
DROP TABLE art_style; */




CREATE TABLE IF NOT EXISTS art_style(
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(50) UNIQUE NOT NULL
);
CREATE TABLE IF NOT EXISTS art_type(
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(50) UNIQUE NOT NULL
);
CREATE TABLE IF NOT EXISTS art_group(
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(50) UNIQUE NOT NULL
);
CREATE TABLE IF NOT EXISTS artist(
    id INT AUTO_INCREMENT PRIMARY KEY,
    firstname VARCHAR(20) NOT NULL,
    lastname VARCHAR(20) NOT NULL,
    dob DATE,
    birthplace VARCHAR(50),
    style_id INT,
    FOREIGN KEY (style_id) REFERENCES art_style(id)
);

CREATE TABLE IF NOT EXISTS artpiece(
    id INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(50) NOT NULL,
    value DECIMAL(9,2) NOT NULL,
    year DATE NOT NULL,
    artistId INT,
    artTypeId INT,
    FOREIGN KEY (artistId)  REFERENCES  artist(id),
    FOREIGN KEY (artTypeId) REFERENCES  art_type(id)
);

CREATE TABLE IF NOT EXISTS artpiece_group(
    id INT AUTO_INCREMENT PRIMARY KEY,
    artpieceId INT,
    artGroupId INT,
    FOREIGN KEY (artpieceId)  REFERENCES  artpiece(id),
    FOREIGN KEY (artGroupId)  REFERENCES  art_group(id)
);


CREATE TABLE IF NOT EXISTS customer(
    id INT AUTO_INCREMENT PRIMARY KEY,
    firstname VARCHAR(20) NOT NULL,
    lastname VARCHAR(20) NOT NULL,
    email VARCHAR(50) UNIQUE,
    phone INT UNIQUE,
    address1 VARCHAR(255),
    address2 VARCHAR(255),
    city VARCHAR(50),
    postCode VARCHAR(20),
    country VARCHAR(20),
    totalBalance DECIMAL(10,2)
);

CREATE TABLE IF NOT EXISTS purchase(
    id INT AUTO_INCREMENT PRIMARY KEY,
    date_time DATETIME DEFAULT NOW(),
    final_price DECIMAL(9,2),
    artpieceId INT,
    customerId INT,
    FOREIGN KEY (artpieceId)  REFERENCES  artpiece(id),
    FOREIGN KEY (customerId)  REFERENCES  customer(id)
);

CREATE TABLE IF NOT EXISTS customer_artgroup(
    id INT AUTO_INCREMENT PRIMARY KEY,
    customerId INT,
    artGroupId INT,
    FOREIGN KEY (customerId)  REFERENCES  customer(id),
    FOREIGN KEY (artGroupId)  REFERENCES  art_group(id)
);


/* SHOW WARNINGS; */