<?php

header('Content-Type: application/json');


class Profile {
 private $userName = '';

 public function getUserName(): string {
 return $this->userName;
 }
}

$reflectionClass = new ReflectionClass(('Profile'));

echo $reflectionClass->getName();

echo PHP_EOL;

print_r ($reflectionClass->getProperties());

echo PHP_EOL;

print_r ($reflectionClass->getMethods());

echo PHP_EOL;

$reflectionObject = new ReflectionClass('Exception');
print_r($reflectionObject->getMethods());
?>

