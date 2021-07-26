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

        if (get_current_user() === 'foxcodenine') {
            $username = $_ENV['DB_USERNAME'];
            $password = $_ENV['DB_PASSWORD'];
        } else {
            $username = $_ENV['DB_USERNAME_WORK'];
            $password = $_ENV['DB_PASSWORD_WORK'];
        }
        self::$DB_TYPE = $_ENV['DB_TYPE'];
        self::$DB_HOST = $_ENV['DB_HOST'];
        self::$DB_SCHEMA = $_ENV['DB_SCHEMA'];
        self::$DB_USERNAME = $username;
        self::$DB_PASSWORD = $password;
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