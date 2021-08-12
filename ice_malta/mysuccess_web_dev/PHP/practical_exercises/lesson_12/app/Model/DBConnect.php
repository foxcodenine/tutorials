<?php

namespace app\Model;

use PDO;
use PDOException;

class DBConnect {


    private static $conn = null;
    private static $db_type;
    private static $db_host;
    private static $db_schema;
    private static $db_username;
    private static $db_password;
    
    // _________________________________________

    public static function getConnection() {
        if(self::$conn === null) {

            self::loadENV();
            
            try {                
                $conn = new PDO(
                    self::$db_type . ':host=' . self::$db_host . ';dbname=' . self::$db_schema,
                    self::$db_username,
                    self::$db_password
                );
                $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
                self::$conn = $conn;                

            } catch (PDOException $e) {
                die("Error getConnection: <br>" . $e->getMessage());
            }
        }

        return self::$conn;
    }

    // _________________________________________

    public static function createTable($sql) {
        $conn = self::getConnection();        

        try {
            $conn->exec($sql);

        } catch (PDOException $e) {
            die("Error createTable: <br>" .  $e->getMessage());
        }
    }

    // _________________________________________

    public static function loadENV() {

        self::$db_type = $_ENV['DB_TYPE'];
        self::$db_host = $_ENV['DB_HOST'];
        self::$db_schema = $_ENV['DB_SCHEMA'];

        if(gethostbyaddr($_SERVER['REMOTE_ADDR']) === $_ENV['PC_WORK']){
            self::$db_username = $_ENV['DB_USERNAME_WORK'];
            self::$db_password = $_ENV['DB_PASSWORD_WORK'];
            
        } else if(get_current_user() === 'foxcodenine' && gethostbyaddr($_SERVER['REMOTE_ADDR']) === 'ip6-localhost') {
            self::$db_username = $_ENV['DB_USERNAME_HOME'];
            self::$db_password = $_ENV['DB_PASSWORD_HOME'];

        } else if($_ENV['PHP_ENV'] === 'production') {
            self::$db_username = $_ENV['DB_USERNAME'];
            self::$db_password = $_ENV['DB_PASSWORD']; 
        }
    }
    // _________________________________________
}


