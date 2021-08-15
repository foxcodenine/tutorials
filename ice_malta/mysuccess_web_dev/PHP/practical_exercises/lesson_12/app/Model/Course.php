<?php

namespace app\Model;

use PDO;
use PDOException;

class Course {
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

        if ($id === NULL) {
            $this->addUpdateCourse();
        }
    }

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
            if (empty($this->getId)) $this->setId($dbh->lastInsertId());
            self::updateCourseList();

        } catch (PDOException $e) {
            die('Error addUpdateCourse: <br>' . $e->getMessage());
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
}