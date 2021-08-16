<?php 

namespace app\Model;

use Exception;
use PDO;
use PDOException;
use Ramsey\Uuid\Nonstandard\Uuid;

class User {
    
    private $id;
    private $email;
    private $hash;
    private $role;
    private $salt;
    private $apiKey;



    public function __construct($email, $password, $role, $id=NULL) {
        
        $this->setEmail($email);
        $this->setHash(password_hash($password, PASSWORD_DEFAULT));
        $this->setRole($role);
        $this->setSalt(Uuid::uuid4());
		$this->setApiKey(@openssl_encrypt($this->getEmail(), 'AES-256-CBC', $this->getSalt()->toString()));

        if (!$id) $this->addUser();
    }

    public function addUser() {
        $dbh = DBConnect::getConnection();   
		
		$sql = "INSERT INTO User (
			email, password, role, salt, apiKey
		) VALUES (
			:email, :password, :role, :salt, :apiKey
		)";

		$stmt = $dbh->prepare($sql);
		$stmt->bindValue(':email', $this->getEmail());
		$stmt->bindValue(':password', $this->getHash());
		$stmt->bindValue(':role', $this->getRole());
		$stmt->bindValue(':salt', $this->getSalt());
		$stmt->bindValue(':apiKey', $this->getApiKey());

		try {
			$stmt->execute();
		} catch (PDOException $e) {
			die('Error addUser: <br>' . $e->getMessage());
		}

    }

	// _________________________________________________________________

	public static function fetchUser($apiKey) {
		$dbh = DBConnect::getConnection();   
		
		$sql = "SELECT * FROM User WHERE apiKey = :apiKey";
		$stmt = $dbh->prepare($sql);
		$stmt->bindValue(':apiKey', $apiKey);

		try {
			$stmt->execute();
			$user = $stmt->fetch(PDO::FETCH_OBJ);
		} catch (PDOException $e) {
			die('Error fetchUser1: <br>' . $e->getMessage());
		}

		try {
			if ($user && 
				$user->email === openssl_decrypt($apiKey, 'AES-256-CBC', $user->salt)) {
					return $user;
			} 
			return FALSE;


		} catch (Exception $e) {
			die('Error fetchUser2: <br>' . $e->getMessage());
		}
	}

    // _________________________________________________________________
	public function getId() {
		return $this->id;
	}

	public function setId($id)	{
		$this->id = $id;
	}

	public function getEmail() {
		return $this->email;
	}

	public function setEmail($email)	{
		$this->email = $email;
	}

	public function getHash() {
		return $this->hash;
	}

	public function setHash($hash)	{
		$this->hash = $hash;
	}

	public function getRole() {
		return $this->role;
	}

	public function setRole($role)	{
		$this->role = $role;
	}

	public function getSalt() {
		return $this->salt;
	}

	public function setSalt($salt)	{
		$this->salt = $salt;
	}

	public function getApiKey() {
		return $this->apiKey;
	}

	public function setApiKey($apiKey)	{
		$this->apiKey = $apiKey;
	}
}