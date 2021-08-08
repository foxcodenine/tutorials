DROP DATABASE IF EXISTS SimpleChat;

CREATE DATABASE SimpleChat;

USE SimpleChat;
    
CREATE TABLE `Chat` (
  `id` int(11) NOT NULL AUTO_INCREMENT PRIMARY KEY,
  `who` varchar(255) NOT NULL,
  `message` varchar(255) DEFAULT NULL
);