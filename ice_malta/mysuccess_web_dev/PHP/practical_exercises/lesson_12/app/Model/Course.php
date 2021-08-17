<?php
namespace app\Model;

use JsonSerializable;
use PDO;
use PDOException;

class Course implements JsonSerializable {
    private static $courseList = array();

    private $id;
    private $name;
    private $startDate;
    private $days;
    private $timeFrom;
    private $timeTo;
    private $duration;
    private $price;

    public function __construct(
        $name, $startDate, $days, $timeFrom, $timeTo, $duration, 
        $price, $id=null
    ) {
        $this->setName($name);
        $this->setStartDate($startDate);
        $this->setDays($days);
        $this->setTimeFrom($timeFrom);
        $this->setTimeTo($timeTo);
        $this->setDuration($duration);
        $this->setPrice($price);
        $this->setId($id);

        if ($id === NULL) {
            $this->addUpdateCourse();
        }
    }

    // __________________________________

    public function __set($key, $value) {
        $set = "set" . ucfirst($key);
        $this->$set($value);
    }

    // __________________________________

    public static function updateCourseList () {
        $dbh = DBConnect::getConnection();

        $sql = 'SELECT * FROM Course';

        $stmt = $dbh->prepare($sql);

        try {
            $stmt->execute();
            $result = $stmt->fetchAll(PDO::FETCH_OBJ);

            foreach($result as $r) {
                array_push(self::$courseList, new Course(
                    $r->name, $r->startDate, $r->days, $r->timeFrom, 
                    $r->timeTo, $r->duration, $r->price, $r->id
                ));
            }

        } catch (PDOException $e) {
            die('Error updateCourseList: <br>' . $e->getMessage());
        }        
    }

    // __________________________________

    public static function fetchAllIds() {
        self::updateCourseList();

        return array_map(function($c) {
            return $c->getId();
        }, self::fetchAllCourses());
    }

    // ----- CRUD functions --------------------------------------------

    // ----- Create / Update
    public function addUpdateCourse() {
        $dbh = DBConnect::getConnection();

        if ($this->getId()) {
            $sql = "UPDATE Course 
            SET name = :name, startDate = :startDate, days = :days, 
                timeFrom = :timeFrom, timeTo = :timeTo, 
                duration = :duration, price = :price
            WHERE id = :id";

        } else {
            $sql = "INSERT INTO Course (
                name, startDate, days, timeFrom, timeTo, duration, price 
            ) VALUES (
                :name, :startDate, :days, :timeFrom, :timeTo, :duration, :price
            )";
        }

        $stmt = $dbh->prepare($sql);

        $stmt->bindValue(':name', $this->getName());
        $stmt->bindValue(':startDate', $this->getStartDate());
        $stmt->bindValue(':days', $this->getDays());        
        $stmt->bindValue(':timeFrom', $this->getTimeFrom());
        $stmt->bindValue(':timeTo', $this->getTimeTo());
        $stmt->bindValue(':duration', $this->getDuration());
        $stmt->bindValue(':price', $this->getPrice());

        if($this->getId()) $stmt->bindValue(':id', $this->getId());

        try {
            $stmt->execute();   
    
            if (empty($this->getId())) $this->setId($dbh->lastInsertId());
            self::updateCourseList();

        } catch (PDOException $e) {
            die('Error addUpdateCourse: <br>' . $e->getMessage());
        }
    }

    // ----- Read

    public static function fetchAllCourses () {
        self::updateCourseList();
        return self::$courseList;
    }

    public static function fetchCourse ($id) {
        self::updateCourseList();
        $course = array_filter(self::fetchAllCourses(), function($c) use ($id){
            return $c->getId() == $id;
        });

        return array_values($course)[0];
    }

    // ----- Delete

    public function deleteCourse() {
        self::updateCourseList();

        if (in_array($this, self::fetchAllCourses())) {
            $dbh = DBConnect::getConnection();        
            $sql = 'DELETE FROM Course WHERE id = :id';

            $stmt = $dbh->prepare($sql);
            $stmt->bindValue(':id', $this->getId());

            try {
                $stmt->execute();
                self::updateCourseList();                

            } catch (PDOException $e) {
                die('Error deleteCourse: <br>' . $e->getMessage());
            }
        }
    }

// _____________________________________________________________________

	public function getId() {
		return $this->id;
	}

	public function setId($id)	{
		$this->id = $id;
	}

	public function getName() {
		return $this->name;
	}

	public function setName($name)	{
		$this->name = $name;
	}

	public function getStartDate() {
		return $this->startDate;
	}

	public function setStartDate($startDate)	{
		$this->startDate = $startDate;
	}

	public function getDays() {
		return $this->days;
	}

	public function setDays($days)	{
		$this->days = $days;
	}

	public function getTimeFrom() {
		return $this->timeFrom;
	}

	public function setTimeFrom($timeFrom)	{
		$this->timeFrom = $timeFrom;
	}

	public function getTimeTo() {
		return $this->timeTo;
	}

	public function setTimeTo($timeTo)	{
		$this->timeTo = $timeTo;
	}

	public function getDuration() {
		return $this->duration;
	}

	public function setDuration($duration)	{
		$this->duration = $duration;
	}

	public function getPrice() {
		return $this->price;
	}

	public function setPrice($price)	{
		$this->price = $price;
	}

    // _________________________________________________________________

    public static function arrangeDate($date, $decode=False) {
        if (!$decode) {
            preg_match('/(^\d{4}|^\d{2})-(\d+)-(\d+$)/', $date, $array);

            foreach($array as $a){
                if (empty($a)) return FALSE;
            }

            $dd   = strlen($array[3]) === 2 ? $array[3] : '0' . $array[3];
            $mm   = strlen($array[2]) === 2 ? $array[2] : '0' . $array[2];
            $yyyy = strlen($array[1]) === 4 ? $array[1] : ( 21 >= (int)$array[1] ? '20' . $array[1] : '19' . $array[1]);
            
            return "{$dd}-{$mm}-{$yyyy}";
        }
        else {
            preg_match('/(^\d+)-(\d+)-(\d{4}$|\d{2}$)/', $date, $array);

            foreach($array as $a){
                if (empty($a)) return FALSE;
            }

            $dd   = strlen($array[1]) === 2 ? $array[1] : '0' . $array[1];
            $mm   = strlen($array[2]) === 2 ? $array[2] : '0' . $array[2];
            $yyyy = strlen($array[3]) === 4 ? $array[3] : ( 21 >= (int)$array[3] ? '20' . $array[3] : '19' . $array[3]);
            
            return "{$yyyy}-{$mm}-{$dd}";
        }
    }

    // _________________________________________________________________
    
    public function jsonSerialize () {
        
        return Array (
            'id'=> $this->getId(),
            'name'=>$this->getName(),
            'startDate'=>self::arrangeDate($this->getStartDate()),
            'days'=> explode(' ', $this->getDays()),
            'time'=> Array ('from'=>$this->getTimeFrom(), 'to'=>$this->getTimeTo()),
            'duration'=>"{$this->getDuration()}hr",
            'price'=>"EUR " . (int)($this->getPrice()),
            'REGISTER'=>$this->fetchCourseStudents()
        );
    }

    // _________________________________________________________________

    public function fetchCourseStudents() {
        $dbh = DBConnect::getConnection();
        $sql = <<<'SQL_END'
            SELECT Student.id, Student.firstname, Student.lastname
            FROM Course 
            INNER JOIN Register ON Register.courseId = Course.id
            INNER JOIN Student ON Student.id = Register.studentId
            WHERE Course.id = :courseId ORDER BY Student.id;
        SQL_END;

        $stmt = $dbh->prepare($sql);
        $stmt->bindValue(':courseId', $this->getId());

        try {
            $stmt->execute();
            $students = $stmt->fetchAll(PDO::FETCH_OBJ);
            if(!empty($students)) {
                $courseStudents = Array();

                foreach($students as $s) {
                    array_push($courseStudents, "ID {$s->id} - {$s->firstname} {$s->lastname}");
                }
                return $courseStudents;
            }
        } catch (PDOException $e) {
            die('Error fetchCourseStudents: <br>'. $e->getMessage());
        }

    }
    
}