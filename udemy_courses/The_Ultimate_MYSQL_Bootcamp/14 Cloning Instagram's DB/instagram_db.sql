-- source instagram_db.sql

DROP DATABASE IF EXISTS ig_clone;
CREATE DATABASE ig_clone;
USE ig_clone;

-- Createing Tables 

CREATE TABLE users(
    id INTEGER AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(255) UNIQUE NOT NULL,
    created_at TIMESTAMP DEFAULT NOW()
    );



CREATE TABLE photos(
    id INTEGER  AUTO_INCREMENT PRIMARY KEY,
    image_url VARCHAR(255) UNIQUE NOT NULL ,
    user_id INTEGER NOT NULL,
    created_at TIMESTAMP DEFAULT NOW(),
    FOREIGN KEY(user_id) REFERENCES users(id)
    );

INSERT INTO users (username) VALUES
    ('BlueTheCat'),
    ('Joelle'),
    ('FoxCode9');

INSERT INTO photos (image_url, user_id) VALUES 
    ('/hgkjhhhg', 1),
    ('/rrgdsrgi', 1),
    ('/sdrgfdsr', 2);