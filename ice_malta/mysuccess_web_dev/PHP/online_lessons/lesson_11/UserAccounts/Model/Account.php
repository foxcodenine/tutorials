<?php 
namespace UserAccouts\Model;

use \PDOException;
use UserAccouts\Model\DBConnect;

require './DBConnect.php';

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

$chris = new Account('Chris', 'Farrugia', 'fddcdoxcofeeyfvdenine', 'ayanami');
Account::add($chris);

