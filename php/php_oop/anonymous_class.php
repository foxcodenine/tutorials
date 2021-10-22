<?php
interface Archives {
    public function displayArchives() : void;
}

$logger = new class('New log started') implements Archives {

    private $logCount = 0;
    private $logArchive = [];

    public function __construct($message) {
        echo $message;
    }

    public function log (string $message): void {
        ++$this->logCount;
        $this->logArchive = $this->logArchive + [$this->logCount => $message];
    }

    public function displayArchives(): void {
        foreach ($this->logArchive as $k=>$v) {
            echo "<br>{$k}). {$v}<br>";
        }
    }
};


$logger->log('receved 100 ADA.');
$logger->log('selling order placed.');
$logger->log('selling order fulfilled.');
$logger->displayArchives();

?>