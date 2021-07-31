<?php
require_once 'DBConnect.php';

class ArtWork implements JsonSerializable {
    private $id;
    private $title;
    private $year;
    private $artist;
    private $medium;
    
    private static $artworkList = array();
    
    public function __construct($title, $year, $artist, $medium, $id = null) {
        $this->title = $title;
        $this->year = $year;
        $this->artist = $artist;
        $this->medium = $medium;
        $this->id = $id;
        
        if ($id == null) {
            $this->persist();
        }
    }


    
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
    
    public static function getAll() {
        self::updateAll();
        return self::$artworkList;
    }
    
    public static function get(int $id) {
        self::updateAll();
        foreach(self::$artworkList as $artwork) {
            if ($artwork->getId() == $id) {
                return $artwork;
            }
        }
    }
    
    public static function delete(int $id) {
        $db = DBConnect::getInstance()->getHandler();
        $st = $db->prepare("DELETE FROM Artwork WHERE id = :id");
        $st->bindParam(':id', $id);
        $st->execute();
        self::updateAll();
    }
    
    private function persist() {
        $db = DBConnect::getInstance()->getHandler();
        if ($this->id == null) {
            //Insert record
            $st = $db->prepare("INSERT INTO Artwork(title, year, artist, medium)
                     VALUES (:title, :year, :artist, :medium)");
            $st->bindParam(':title', $this->title, PDO::PARAM_STR);
            $st->bindParam(':year', $this->year, PDO::PARAM_INT);
            $st->bindParam(':artist', $this->artist, PDO::PARAM_STR);
            $st->bindParam(':medium', $this->medium, PDO::PARAM_STR);
            $st->execute();
            self::updateAll();
        } else {
            //Update record
            $st = $db->prepare("UPDATE Artwork SET title = :title, year = :year,
                artist = :artist, medium = :medium WHERE id = :id");
            $st->bindParam(':title', $this->title, PDO::PARAM_STR);
            $st->bindParam(':year', $this->year, PDO::PARAM_INT);
            $st->bindParam(':artist', $this->artist, PDO::PARAM_STR);
            $st->bindParam(':medium', $this->medium, PDO::PARAM_STR);
            $st->bindParam(':id', $this->id, PDO::PARAM_INT);
            $st->execute();
            self::updateAll();
        }
    }
    
    public function getId() {
        return $this->id;
    }
    
    public function setTitle(string $title) {
        $this->title = $title;
        $this->persist();
    }
    
    public function getTitle():string {
        return $this->title;
    }
    
    public function setYear(int $year) {
        $this->year = $year;
        $this->persist();
    }
    
    public function getYear():int {
        return $this->year;
    }
    
    public function setArtist(string $artist) {
        $this->artist = $artist;
        $this->persist();
    }
    
    public function getArtist():string {
        return $this->artist;
    }
    
    public function setMedium(string $medium) {
        $this->medium = $medium;
        $this->persist();
    }
    
    public function getMedium():string {
        return $this->medium;
    }

    // TODO: 
    // implement JsonSerializable
    // implement jsonserialize method

    public function jsonSerialize() {
        return array(
            'id' => $this->id,
            'title' => $this->title,
            'artist' => $this->artist,
            'year' => $this->year,
            'medium' => $this->medium
        );
    }

}
