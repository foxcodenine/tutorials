<?php


namespace Model;

use PDOException;

class Student {

    private $id;
    private $firstname;
    private $lastname;
    private $age;
    private $email;
    private $phone;

    private static $studentList = array();

    public function __construct($firstname, $lastname, $age, $email, $phone) {
        $this->setFirstname($firstname);
        $this->setLastname($lastname);
        $this->setAge($age);
        $this->setEmail($email);
        $this->setPhone($phone);
    }



    public function addStudent() {
        if (!$this->id) {

            $conn = DBConnect::getConnection();


            $sql = "INSERT INTO student(
                firstname, lastname, age, email, phone
            ) VALUES (
                :firstname, :lastname, :age, :email, :phone
            )";

            $stmt = $conn->prepare($sql);

            $stmt->bindValue(':firstname', $this->getFirstname());
            $stmt->bindValue(':lastname',  $this->getLastname());
            $stmt->bindValue(':age',       $this->getAge());
            $stmt->bindValue(':email',     $this->getEmail());
            $stmt->bindValue(':phone',     $this->getPhone());


            try {
                $stmt->execute();
            } catch (PDOException $e) {
                die('Error addStudent: <br>' . $e->getMessage());
            }            
        }
    }

    public function updateList () {
        $conn = DBConnect::getConnection();

        $sql = "SELECT * FROM student";        

        $result = $conn->exec($sql);

        return $result->
        
    }

    public function fetchStudent () {
        
    }







    // _________________________________________________________________

    public function getFirstname() {
        return $this->firstname;
    }
    public function setFirstname($firstname) {
        $this->firstname = $firstname;
        return $this;
    }
    public function getLastname() {
        return $this->lastname;
    }
    public function setLastname($lastname) {
        $this->lastname = $lastname;
        return $this;
    }
    public function getAge() {
        return $this->age;
    }
    public function setAge($age) {
        $this->age = $age;
        return $this;
    }
    public function getEmail() {
        return $this->email;
    }
    public function setEmail($email) {
        $this->email = $email;
        return $this;
    } 
    public function getPhone() {
        return $this->phone;
    }
    public function setPhone($phone) {
        $this->phone = $phone;
        return $this;
    }
    // _________________________________________________________________
}



/*
    private static function updateAll() {
        $db = DBConnect::getInstance()->getHandler();
        $st = $db->prepare("SELECT * FROM Artwork");
        $st->execute();
        $result = $st->fetchAll(PDO::FETCH_OBJ);
        
        foreach($result as $artwork) {
            array_push(self::$artworkList, new ArtWork(
                    $artwork->title,
                    $artwork->year,
                    $artwork->artist,
                    $artwork->medium,
                    $artwork->id
            ));
        }
    }
*/