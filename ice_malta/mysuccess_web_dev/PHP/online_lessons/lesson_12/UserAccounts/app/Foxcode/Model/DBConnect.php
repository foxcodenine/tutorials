<?php

namespace Foxcode\Model;

use \PDOException;
use \PDO;

// _____________________________________________________________________

class DBConnect {
    private static $DB_TYPE;
    private static $DB_HOST;
    private static $DB_SCHEMA;
    private static $DB_USERNAME;
    private static $DB_PASSWORD;

    public function __construct() {
        self::$DB_TYPE = $_ENV['DB_TYPE'];
        self::$DB_HOST = $_ENV['DB_HOST'];
        self::$DB_SCHEMA = $_ENV['DB_SCHEMA'];
        self::$DB_USERNAME = $_ENV['DB_USERNAME'];
        self::$DB_PASSWORD = $_ENV['DB_PASSWORD'];
    }

    

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