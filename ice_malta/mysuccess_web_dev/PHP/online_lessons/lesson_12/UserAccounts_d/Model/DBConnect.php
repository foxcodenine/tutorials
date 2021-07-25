<?php

namespace UserAccouts\Model;

use \PDOException;
use \PDO;
use Dotenv\Dotenv;

require_once 'vendor/autoload.php';


$dotenv = Dotenv::createImmutable(__DIR__ . '/..');
$dotenv->load();



class DBConnect {
    private static $DB_TYPE = 'mysql';
    private static $DB_HOST = 'localhost';
    private static $DB_SCHEMA;
    private static $DB_USERNAME;
    private static $DB_PASSWORD;

    public function __construct() {           
        self::$DB_PASSWORD = $_ENV['PASSWORD'];
        self::$DB_USERNAME = $_ENV['USERNAME'];
        self::$DB_SCHEMA   = $_ENV['SCHEMA'];
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