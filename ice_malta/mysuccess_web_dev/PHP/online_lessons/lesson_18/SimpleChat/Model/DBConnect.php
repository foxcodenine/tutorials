<?php
/**
 * Singleton to connect to the database.
 *
 * @author Keith Vassallo
 */
class DBConnect {
    private static $_singleton;
    private $_connection;
    
    const DB_USERNAME = 'admin';
    const DB_PASSWORD = 'umbrella';
    const DB_HOST = 'localhost';
    const DB_NAME = 'SimpleChat';
    
    private function __construct() {
        $this->_connection = new PDO(
            'mysql:host=' . self::DB_HOST . ';dbname=' . self::DB_NAME,
            self::DB_USERNAME,
            self::DB_PASSWORD);
        $this->_connection->exec("SET CHARACTER SET utf8");
    }
    
    public static function getInstance(): DBConnect {
        if (is_null(self::$_singleton)) {
            self::$_singleton = new DBConnect();
        }
        return self::$_singleton;
    }
    
    public function getHandler() {
        return $this->_connection;
    }
}
