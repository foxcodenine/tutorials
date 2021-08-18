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

    // __________________________________

    public function __set($key, $value) {
        $set = "set" . ucfirst($key);
        $this->$set($value);
    }

    // __________________________________

    public static function updateStudentList () {
        
        $dbh = DBConnect::getConnection();

        $sql = "SELECT * FROM Student";       

        $stmt = $dbh->prepare($sql);

        $stmt->execute();

        $result = $stmt->fetchAll(PDO::FETCH_OBJ);

        foreach($result as $r) {
             array_push(self::$studentList, new Student(
                $r->firstname, $r->lastname, $r->age, $r->email, $r->phone, $r->id
            ));            
        }                    
    }

    // __________________________________

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

            $sql = "UPDATE Student 
                    SET firstname = :firstname, lastname = :lastname, 
                        age = :age, email = :email, phone = :phone
                    WHERE id = :id";
        } else {
            $sql = "INSERT INTO Student(
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
    public static function fetchAllStudents () {
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
        

        if (in_array( $this, self::fetchAllStudents())) {
            $dbh = DBConnect::getConnection();
            $sql = "DELETE FROM Student WHERE id = :id";
            
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

        return array (
            'id' => $this->getId(),
            'firstname' => $this->getFirstname(),
            'lastname' => $this->getLastname(),
            'email' => $this->getemail(),
            'age' => $this->getage(),
            'phone' => $this->getPhone(),
            'REGISTER' => $this->fetchStudentCourses()
        );
    }

    // _________________________________________________________________

    public function fetchStudentCourses() {
        $dbh = DBConnect::getConnection();
        $sql = <<<'SQL_END'
            SELECT Course.id, Course.name 
            FROM Course 
            INNER JOIN Register ON Register.courseId = Course.id
            INNER JOIN Student ON Student.id = Register.studentId
            WHERE Student.id = :courseId ORDER BY Course.id;
        SQL_END;
        $stmt = $dbh->prepare($sql);
        $stmt->bindValue(':courseId', $this->getId());

        try {
            $stmt->execute();
            $coures = $stmt->fetchAll(PDO::FETCH_OBJ);
            if (!empty($coures)) {
                $studentCourses = Array();

                foreach($coures as $c) {
                    array_push($studentCourses, "id {$c->id} - {$c->name}");
                }
                return $studentCourses;
            }
            
        } catch (PDOException $e) {
            die('Error fetchStudentCourses: <br>' . $e->getMessage());
        }
    }
}

   

