<?php
class DBConnect {
    private static $_singleton;
    private $_connection;
    
    private $DB_USERNAME = 'admin';
    private $DB_PASSWORD = 'umbrella';
    private $DB_HOST = 'localhost';
    
    /**
     * Establish a connection to the database
     */
    private function __construct() {
        $this->_connection = new PDO("mysql:host=$this->DB_HOST;dbname=ArtDB", $this->DB_USERNAME, $this->DB_PASSWORD);
        $this->_connection->exec("SET CHARACTER SET utf8");
    }
    
    /**
     * Get an instance of this class
     * @return Connection a connection instance
     */
    public static function getInstance() {
        if (is_null(self::$_singleton)) {
            self::$_singleton = new DBConnect();
        }
        return self::$_singleton;
    }
    
    /**
     * Returns the PDO database connection handler
     * @return PDO database handler
     */
    public function getHandler() {
        return $this->_connection;
    }
}
