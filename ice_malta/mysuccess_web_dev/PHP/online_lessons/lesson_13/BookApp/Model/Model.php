<?php

include_once('Book.php');
include_once('DB.php');

class Model {

    private $conn;

    public function __construct() {
        $this->conn = DB::getInstance();
    }


    public function getBookList() {
        
        // return array(
        //     "Jungle Book"=>new Book("Jungle Book", "R. Kipling", "Classic book for kids"),
        //     "Moonwalker"=>new Book("Moonwalker", "J. Walkers", ""),
        //     "PHP for Dummies"=>new Book("PHP for Dummies", "K. Galea", "A book on PHP"),
        // );

        $sql = "SELECT * FROM book";
        $st = $this->conn->getHandler()->prepare($sql);
        $st->execute();
        return $st->fetchAll(PDO::FETCH_OBJ);
    }

    public function getBook($id) {
        $sql = "SELECT * FROM book WHERE id = :id";
        $st = $this->conn->getHandler()->prepare($sql);
        $st->bindParam(':id', $id);
        $st->execute();
        $book = $st->fetch(PDO::FETCH_OBJ);
        return $book;

    }

    public function checkLogin($username, $password) {
            $hashedPassword = sha1($password);
            $st = $this->conn->getHandler()->prepare(
                "SELECT * FROM admin WHERE username = :username AND password = :password");
            $st->bindParam(':username', $username);
            $st->bindParam(':password', $hashedPassword);
            $st->execute();
            $result = $st->fetch(PDO::FETCH_OBJ);
            if ($result != null) {
                return true;
            }
            return false;
        }

    public function addBook($title, $author, $description) {
        $sql = "INSERT INTO book(title, author, description) VALUES (:title, :author, :description)";
        $st = $this->conn->getHandler()->prepare($sql);
        $st->bindParam(':title', $title);
        $st->bindParam(':author', $author);
        $st->bindParam(':description', $description);
        $st->execute();
    }
}