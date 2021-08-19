<?php 

namespace app\Model;

use JsonSerializable;
use PDO;
use PDOException;

class Register implements JsonSerializable {
    private static $registerList = Array();

    private $id;
    private $courseId;
    private $studentId;
    private $registerDate;

    // __________________________________

    public function __construct($courseId, $studentId, $registerDate, $id=NULL) {
        $this->setCourseId($courseId);
        $this->setStudentId($studentId);
        $this->setRegisterDate($registerDate);
        $this->setId($id);

        if (!$id) {
            $this->addToRegister();
        }
    }

    // __________________________________

    public static function checkRegisterExist($courseId, $studentId) {
        $dbh = DBConnect::getConnection();
        $sql = 'SELECT * FROM Register 
                WHERE courseId = :courseId 
                AND studentId = :studentId';

        $stmt = $dbh->prepare($sql);
        $stmt->bindValue(':courseId', $courseId);
        $stmt->bindValue(':studentId', $studentId);
        
        try {
            $stmt->execute();            
            return !empty($stmt->fetchAll(PDO::FETCH_OBJ));

        } catch (PDOException $e) {
            die('Error checkRegister: <br>' . $e->getMessage());
        }
    }  

    // __________________________________

    public function addToRegister() {

        
        $dbh = DBConnect::getConnection();
        $sql = 'INSERT INTO Register (courseId, studentId, registerDate) 
                VALUES (:courseId, :studentId, :registerDate)';

        $stmt = $dbh->prepare($sql);

        $stmt->bindValue(':courseId',     $this->getCourseId());
        $stmt->bindValue(':studentId',    $this->getStudentId());
        $stmt->bindValue(':registerDate', $this->getRegisterDate());

        try {
            $stmt->execute();
            $this->setId($dbh->lastInsertId());
            self::updateRegisterList();

        } catch (PDOException $e) {
            die('Error addToRegister: <br>' . $e->getMessage());
        } 
    }

    // __________________________________

    public static function fetchAllRegister() {
        self::updateRegisterList();
        return  self::$registerList;
    }

    // __________________________________

    public static function deleteFromRegister($cID, $sID) {
        $dbh = DBConnect::getConnection();
        
        if (strtolower($cID) == 'all') {
            $sql = 'DELETE FROM Register 
            WHERE studentId = :studentId';
        } else if (strtolower($sID) == 'all') {
            $sql = 'DELETE FROM Register 
            WHERE courseId = :courseId';
        } else {
            $sql = 'DELETE FROM Register 
            WHERE studentId = :studentId
            AND courseId = :courseId';
        }

        $stmt = $dbh->prepare($sql);
        if (strtolower($sID) !== 'all') $stmt->bindValue(':studentId', $sID);
        if (strtolower($cID) !== 'all') $stmt->bindValue(':courseId', $cID);
        try {
            $stmt->execute();
            self::updateRegisterList();
        } catch (PDOException $e) {
            die('deleteFromRegister: <br>' . $e->getMessage());
        }  
    }

    // __________________________________

    public static function updateRegisterList() {
        $dbh = DBConnect::getConnection();
        $sql = 'SELECT * FROM Register';
        $stmt = $dbh->prepare($sql);

        try {
            $stmt->execute();
            $result = $stmt->fetchAll(PDO::FETCH_OBJ);

            foreach($result as $r) {
                array_push(
                    self::$registerList, 
                    new Register($r->courseId, $r->studentId, $r->registerDate, $r->id)
                );
            }


        } catch (PDOException $e) {
            die('Error updateRegisterList: <br>' . $e->getMessage());
        }
    }

    // _________________________________________________________________

    public function getId() {
        return $this->id;
    }
    public function setId($id) {
        $this->id = $id;
    }
    public function getCourseId() {
        return $this->courseId;
    }
    public function setCourseId($courseId) {
        $this->courseId = $courseId;
    }
    public function getStudentId() {
        return $this->studentId;
    } 
    public function setStudentId($studentId) {
        $this->studentId = $studentId;
    }
    public function getRegisterDate() {
        return $this->registerDate;
    }
    public function setRegisterDate($registerDate) {
        $this->registerDate = $registerDate;
    }

    // _________________________________________________________________

    public function jsonSerialize() {
        return array (
            $this->getId() => [
                "courseId {$this->getCourseId()}" , 
                "studentId {$this->getStudentId()}", 
                Course::arrangeDate($this->getRegisterDate())
            ]
        );
    }
}