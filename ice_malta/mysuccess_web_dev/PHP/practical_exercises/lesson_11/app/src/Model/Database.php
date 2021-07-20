<?php

namespace src\Model;

use PDO;
use PDOException;

class Database {


    private static $conn;

    public static function getConnection() {
        if(self::$conn == null) {
            
            try {
                $conn = new PDO(
    
                    $_ENV['DB_TYPE'] . ':host=' . $_ENV['DB_HOST'] . ';dbname=' . $_ENV['DB_SCHEMA'],
                    $_ENV['DB_USERNAME'],
                    $_ENV['DB_PASSWORD']
                );
                $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

                self::$conn = $conn;
    
            } catch (PDOException $e) {
                die("Error1: <bl>\n{$e}");
            }
        }

        return self::$conn;
    }




    public static function createTable() {
        
        $conn = self::getConnection();

        $sql = 'CREATE TABLE IF NOT EXISTS bookings (
            id INT PRIMARY KEY AUTO_INCREMENT,
            code VARCHAR(255) UNIQUE,
            firstname VARCHAR(100) NOT NULL,
            lastname VARCHAR(100) NOT NULL,
            email VARCHAR(100) NOT NULL,
            checkIn date NOT NULL,
            checkOut date NOT NULL,
            adults INT NOT NULL,
            children INT NOT NULL,
            rooms INT NOT NULL            
        )';

        $stat = $conn->prepare($sql);

        try {
            $conn->exec($sql);
        } catch(PDOException $e) {
            die ('Error createTable:' . '<br>' . $e->getMessage());
        }
    }



    public static function insertRecord(
        $code, $firstname, $lastname, $email, 
        $checkIn, $checkOut, $adults, $children, $rooms) {

        $conn = self::getConnection();

        $sql = 'INSERT INTO bookings (
            code, firstname, lastname, email, checkIn, checkOut, 
            adults, children, rooms
        ) VALUES (
            :code, :firstname, :lastname, :email, 
            :checkIn, :checkOut, :adults, :children, :rooms
        )';        

        $stat = $conn->prepare($sql);
        $stat->bindParam(':code', $code);
        $stat->bindParam(':firstname', $firstname);
        $stat->bindParam(':lastname', $lastname);
        $stat->bindParam(':email', $email);
        $stat->bindParam(':checkIn', $checkIn);
        $stat->bindParam(':checkOut', $checkOut);
        $stat->bindParam(':adults', $adults);
        $stat->bindParam(':children', $children);
        $stat->bindParam(':rooms', $rooms);

        try {
            $stat->execute();
        } catch(PDOException $e) {
            die('Error insertRecord:' . '<br>' . $e->getMessage());
        }
    }



    public static function fetchRecord($code) {
        
        $conn = self::getConnection();

        $sql = 'SELECT * FROM bookings WHERE code = :code';
        
        $stat = $conn->prepare($sql);
        $stat->bindParam(':code', $code);

        try {
            $stat->execute();
            $result = $stat->fetch(PDO::FETCH_OBJ);
        } catch(PDOException $e) {
            die('Error fetchRecord:' . '<br>' . $e->getMessage());
        }
        return $result;
    }
}


