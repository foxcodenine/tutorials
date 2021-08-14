<?php


namespace app\Model;

use JsonSerializable;
use PDOException, PDO;

class Student implements JsonSerializable{

    private static $studentList = array();

    private $id;
    private $firstname;
    private $lastname;
    private $age;
    private $email;
    private $phone;    

    public function __construct($firstname, $lastname, $age, $email, $phone,  $id=NULL) {

        $this->setFirstname($firstname);
        $this->setLastname($lastname);
        $this->setAge($age);
        $this->setEmail($email);
        $this->setPhone($phone);
        $this->setId($id);

        if ($id === NULL) {
            $this->addUpdateStudent();
        }       
    }

    public function __set($key, $value) {
        $this->$key = $value;
    }

    public static function updateStudentList () {
        
        $dbh = DBConnect::getConnection();

        $sql = "SELECT * FROM student";       

        $stmt = $dbh->prepare($sql);

        $stmt->execute();

        $result = $stmt->fetchAll(PDO::FETCH_OBJ);

        foreach($result as $r) {
             array_push(self::$studentList, new Student(
                $r->firstname, $r->lastname, $r->age, $r->email, $r->phone, $r->id
            ));            
        }                    
    }

    public static function fetchAllIds() {
        self::updateStudentList();

        return array_map(function($s) {
            return $s->getId();
        }, self::$studentList);
    }

    // ----- CRUD functions --------------------------------------------

    // ----- Create / Update
    public function addUpdateStudent() {        

        $dbh = DBConnect::getConnection();

        if ($this->getId()) {

            $sql = "UPDATE student 
                    SET firstname = :firstname, lastname = :lastname, 
                        age = :age, email = :email, phone = :phone
                    WHERE id = :id";
        } else {
            $sql = "INSERT INTO student(
                firstname, lastname, age, email, phone
            ) VALUES (
                :firstname, :lastname, :age, :email, :phone
            )";
        }

        $stmt = $dbh->prepare($sql);

        $stmt->bindValue(':firstname', $this->getFirstname());
        $stmt->bindValue(':lastname',  $this->getLastname());
        $stmt->bindValue(':age',       $this->getAge());
        $stmt->bindValue(':email',     $this->getEmail());
        $stmt->bindValue(':phone',     $this->getPhone());

        if ($this->getId()) $stmt->bindValue(':id', $this->getId());

        try {
            $stmt->execute();
            if(empty($this->getId())) $this->setId($dbh->lastInsertId());
            self::updateStudentList();

        } catch (PDOException $e) {
            die('Error addUpdateStudent: <br>' . $e->getMessage());
        }        
    }

    // ----- Read
    public static function fetchAllStudent () {
        self::updateStudentList();
        return self::$studentList;
    }

    public static function fetchStudent ($id) {
        self::updateStudentList();
        
        $student = array_filter(self::$studentList, function($s) use ($id) {
            return $s->getId() == $id;
        });

        return array_values($student)[0];        
    }

    // ----- Delete

    public function deleteStudent() {
        self::updateStudentList();
        

        if (in_array( $this, self::fetchAllStudent())) {
            $dbh = DBConnect::getConnection();
            $sql = "DELETE FROM student WHERE id = :id";
            
            $stmt = $dbh->prepare($sql);
            $stmt->bindValue(':id', $this->getId());

            try {
                $stmt->execute();
                self::updateStudentList();

            } catch (PDOException $e) {
                die('Error deleteStudent: <br>' . $e->getMessage());
            }
        }        
    }

    // ----- Getters and Setters ---------------------------------------

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
        // TODO: Update with courses;
        return array (
            'id' => $this->getId(),
            'firstname' => $this->getFirstname(),
            'lastname' => $this->getLastname(),
            'email' => $this->getemail(),
            'age' => $this->getage(),
            'phone' => $this->getPhone(),
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