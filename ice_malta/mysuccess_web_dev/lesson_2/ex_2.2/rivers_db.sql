/* source ./rivers_db.sql */

CREATE DATABASE IF NOT EXISTS rivers;

USE rivers;

/* DROP TABLE neighbour_state;
DROP TABLE state;
DROP TABLE river_mouth;
DROP TABLE mouth;
DROP TABLE river; */

CREATE TABLE IF NOT EXISTS river(
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(50) UNIQUE NOT NULL,
    miles DECIMAL(8,2) NOT NULL 
);

CREATE TABLE IF NOT EXISTS mouth(
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(50) UNIQUE NOT NULL,
    classification VARCHAR(20) NOT NULL
);

CREATE TABLE IF NOT EXISTS river_mouth(
    id INT AUTO_INCREMENT PRIMARY KEY,
    river_id INT NOT NULL,
    mouth_id INT NOT NULL,
    FOREIGN KEY (river_id) REFERENCES  river(id),
    FOREIGN KEY (mouth_id) REFERENCES  mouth(id)
);

CREATE TABLE IF NOT EXISTS state(
    id INT AUTO_INCREMENT PRIMARY KEY,
    abbriviation char(2) UNIQUE,
    name VARCHAR(20) UNIQUE,
    capital_city VARCHAR(20) NOT NULL 
);

CREATE TABLE IF NOT EXISTS neighbour_state(
    id INT AUTO_INCREMENT PRIMARY KEY,
    state_abb char(2) NOT NULL,
    neighbour_abb char(2) NOT NULL,
    FOREIGN KEY (state_abb) REFERENCES  state(abbriviation),
    FOREIGN KEY (neighbour_abb) REFERENCES  state(abbriviation)
);

CREATE TABLE IF NOT EXISTS river_state(
    id INT AUTO_INCREMENT PRIMARY KEY,
    river_id INT NOT NULL,
    state_id INT NOT NULL,
    FOREIGN KEY (river_id) REFERENCES  river(id),
    FOREIGN KEY (state_id) REFERENCES  state(id)
);


/* SHOW WARNINGS; */

/* 
Integer display width is deprecated and will be removed in a future release.
Specifying number of digits for floating point data types is deprecated and will be removed in a future release.
 */