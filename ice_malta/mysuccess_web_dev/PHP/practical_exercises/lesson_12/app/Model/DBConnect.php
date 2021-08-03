<?php

namespace Model;

use PDO;
use PDOException;

class DBConnect {


    private static $conn = null;

    public static function getConnection() {


        try {
            if(self::$conn === null) {
                $conn = new PDO(
                    $_ENV['DB_TYPE'] . ':host=' . $_ENV['DB_HOST'] . ';dbname=' . $_ENV['DB_SCHEMA'],
                    $_ENV['DB_USERNAME'],
                    $_ENV['DB_PASSWORD']
                );
            }

        } catch (PDOException $e) {
            die("Error PDO: <br>" . $e);
        }




        return self::$conn;
    }

}


