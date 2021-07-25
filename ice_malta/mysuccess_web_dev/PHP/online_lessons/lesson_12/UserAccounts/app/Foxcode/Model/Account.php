<?php 
namespace Foxcode\Model;

use \PDOException, \PDO;
use Foxcode\Model\DBConnect;

// _____________________________________________________________________

class Account {
    private $id;
    private $firstname;
    private $lastname;
    private $username;
    private $password;


    public function __construct($firstname, $lastname, $username, $password, $id=null) {
        $this->id = $id;
        $this->firstname = $firstname;
        $this->lastname = $lastname;
        $this->username = $username;
        $this->password = $password;
    }

    //  ________________________________________________________________   
      
    public static function add($account) {
        $hashed = password_hash($account->getPassword(), PASSWORD_DEFAULT);

        try {
            $db = new DBConnect();
            $conn = $db->getConnection();

        } catch (PDOException $e) {
            die("Error2: <bl>\n{$e}");
        }


        try {
            $sql = 'INSERT INTO 
                    Account(username, password, firstname, lastname)
                    VALUES(:username, :password, :firstname, :lastname)';

            $stat = $conn->prepare($sql);
            $stat->bindValue(':username', $account->getUsername());
            $stat->bindValue(':password', $hashed);
            $stat->bindValue(':firstname', $account->getFirstname());
            $stat->bindValue(':lastname', $account->getLastname());

            $stat->execute();

        } catch (PDOException $e) {
            die("Error3: <bl>\n{$e}");
        }

        return $conn->lastInsertId();
    }

    //  ________________________________________________________________
    
    public static function getAccount($username, $password) {
        try {
                $db = new DBConnect();
                $conn = $db->getConnection();
    
        } catch (PDOException $e) {
                die("Error4: <bl>\n{$e}");
        }

        $sql = 'SELECT * FROM Account WHERE username = :username';
        $stat = $conn->prepare($sql);
        $stat->bindValue(':username', $username);


        try {
                $stat->execute();    
        } catch (PDOException $e) {
                die("Error5: <bl>\n{$e}");
        }   
        
        $result = $stat->fetch(PDO::FETCH_OBJ);

        if ($result && password_verify($password, $result->password)) {
                return new Account(
                        $result->firstname, 
                        $result->lastname,
                        $result->username,
                        $password,
                        $result->id
                );
        }
        return null;
    }

    public static function isUserNameAvailable($username) {
        try {
                $db = new DBConnect();
                $conn = $db->getConnection();
    
        } catch (PDOException $e) {
                die("Error6: <bl>\n{$e}");
        }

        $sql = 'SELECT id FROM Account WHERE username = :username';
        $stat = $conn->prepare($sql);
        $stat->bindValue(':username', $username);

        try {
                $stat->execute();    
        } catch (PDOException $e) {
                die("Error5: <bl>\n{$e}");
        } 
        
        $result = $stat->fetchAll(PDO::FETCH_OBJ);
        
        return !($result && count($result) > 0);

    }




    //  ________________________________________________________________ 

    public function getId() {
            return $this->id;
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

    public function getUsername() {
            return $this->username;
    } 
    public function setUsername($username) {
            $this->username = $username;
            return $this;
    }


    public function getPassword() {
            return $this->password;
    }
    public function setPassword($password) {
            $this->password = $password;
            return $this;
    }
}

// https://www.agoda.com/hotel-san-andrea/hotel/all/gozo-mt.html?finalPriceView=2&isShowMobileAppPrice=false&cid=1844104&numberOfBedrooms=&familyMode=false&adults=1&children=0&rooms=1&maxRooms=0&checkIn=2021-07-21&isCalendarCallout=false&childAges=&numberOfGuest=0&missingChildAges=false&travellerType=0&showReviewSubmissionEntry=false&currencyCode=EUR&isFreeOccSearch=false&tspTypes=16,8&los=4&searchrequestid=f77fd815-8aff-435a-919c-a38275f686fb
// https://dribbble.com/shots/7256940-Flight-Search-Form/attachments/221093?mode=media
// Eisenhower Hotel at Culzean Castle, Ayrshire

