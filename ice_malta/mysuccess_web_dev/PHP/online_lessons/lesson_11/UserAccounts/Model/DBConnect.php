<?php

namespace UserAccouts\Model;

use \PDOException;
use \PDO;

class DBConnect {
    private static $DB_TYPE = 'mysql';
    private static $DB_HOST = 'localhost';
    private static $DB_SCHEMA = 'UserAccounts';
    private static $DB_USERNAME = 'admin';
    private static $DB_PASSWORD = 'umbrella';

    

    public static function getConnection() {
        try {
            $conn = new PDO(

                self::$DB_TYPE . ':host=' . self::$DB_HOST . ';dbname=' . self::$DB_SCHEMA,
                // self::$DB_TYPE . ':dbname=' . self::$DB_SCHEMA . ';host=' . self::$DB_HOST,
                self::$DB_USERNAME,
                self::$DB_PASSWORD
            );
            $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);



        } catch (PDOException $e) {
            die("Error1: <bl>\n{$e}");
        }

        return $conn;
    }
}


























?>