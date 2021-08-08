<?php
require 'DBConnect.php';

class Chat {
    protected $db;
    
    public function __construct() {
        $this->db = DBConnect::getInstance();
    }
    
    public function getChats() {
        $st = $this->db->getHandler()->prepare("SELECT * FROM Chat ORDER BY id");
        $st->execute();
        return $st->fetchAll(PDO::FETCH_OBJ);
    }
    
    public function addChat($who, $message) {
        $query = <<<chat
        INSERT INTO Chat(who, message)
        VALUES (:who, :message)
        chat;

        $st = $this->db->getHandler()->prepare($query);
        $st->bindParam(':who', $who);
        $st->bindParam(':message', $message);
        $st->execute();
    }    
}
