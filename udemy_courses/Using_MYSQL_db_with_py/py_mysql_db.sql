
CREATE TABLE users(
    name VARCHAR(255), 
    email VARCHAR(255), 
    age INTEGER(10), 
    user_id INTEGER AUTO_INCREMENT PRIMARY KEY)


INSERT INTO users (name, email, age) VALUES (%s, %s, %s)
("John", "john@codemy.com", 40)

