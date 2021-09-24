<?php
namespace Animals;

$file = './date_file.txt';
$fileHandler = fopen($file, 'w+');

if (!$fileHandler) {
    return;
}


[$day, $month, $year] = [12, 8, 1984];

fprintf($fileHandler, "%3$04d-%2$02d-%1$02d", $day, $month, $year);

rewind($fileHandler);
echo fread($fileHandler, filesize($file));
fclose($fileHandler);


echo '<br><br>';

class Cat {
    protected $name;

    public function __construct($name) {
        $this->setName($name);
    }

	public function getName() {
        echo __METHOD__ . '<br>';
		return $this->name;
	}

	public function setName($name)	{
		$this->name = $name;
	}
}

$jane = new Cat('Jane');
echo print($jane->getName());