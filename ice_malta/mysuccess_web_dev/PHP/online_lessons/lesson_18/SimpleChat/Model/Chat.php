<?php
require 'DBConnect.php';

class Chat {
    protected $db;
    
    public function __construct() {
        $this->db = DBConnect::getInstance();
    }
    
    public function getChats() {
        $sql = "SELECT * FROM Chat ORDER BY id";
        $stmt = $this->db->getHandler()->prepare($sql);
        $stmt->execute();
        return $stmt->fetchAll(PDO::FETCH_OBJ);
    }
    
    public function addChat($who, $message) {
        $sql = "INSERT INTO Chat (who, message) VALUES (:who, :message)";
        $stmt = $this->db->getHandler()->prepare($sql);
        $stmt->bindParam(':who', $who);
        $stmt->bindParam(':message', $message);
        $stmt->execute();
    }
}
