<?php


namespace app\Model;

use JsonSerializable;
use PDOException, PDO;

class Student implements JsonSerializable{

    private $id;
    private $firstname;
    private $lastname;
    private $age;
    private $email;
    private $phone;

    private static $studentList = array();

    public function __construct($firstname, $lastname, $age, $email, $phone,  $id=null) {

        $this->setFirstname($firstname);
        $this->setLastname($lastname);
        $this->setAge($age);
        $this->setEmail($email);
        $this->setPhone($phone);
        $this->setId($id);

        if ($id === null) {
            $this->addStudent();
        }        
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
                $this->setId($conn->lastInsertId());

            } catch (PDOException $e) {
                die('Error addStudent: <br>' . $e->getMessage());
            }            
        }
    }

    public static function updateStudentList () {
        // TODO: Update with courses;

        $conn = DBConnect::getConnection();

        $sql = "SELECT * FROM student";       

        $stmt = $conn->prepare($sql);

        $stmt->execute();

        $result = $stmt->fetchAll(PDO::FETCH_OBJ);

        // return $result;

        foreach($result as $r) {

             array_push(self::$studentList, new Student(
                $r->firstname, $r->lastname, $r->age, $r->email, $r->phone, $r->id
            ));
            
        }         
        return self::$studentList;
    }



    public function fetchStudent () {
        
    }







    // _________________________________________________________________

    public function getId() {
        return $this->id;
    }

    public function setId($id) {
        $this->id = $id;
        return $this;
    }

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

    public function jsonSerialize() {
        return array (
            'id' => $this->getId(),
            'firstname' => $this->getFirstname(),
            'lastname' => $this->getLastname(),
        );
    }
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