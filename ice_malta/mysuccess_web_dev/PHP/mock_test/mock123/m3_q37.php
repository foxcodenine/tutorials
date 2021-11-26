<?php
require './config.php';
$dns = 'mysql:host=localhost;dbname=mockTest3';
$pdo = new PDO($dns, $username, $password);

try {
    $sql = "CREATE TABLE IF NOT EXISTS users(
                id INT PRIMARY KEY AUTO_INCREMENT ,
                name VARCHAR(15),
                email VARCHAR(25) UNIQUE
            );";

    $stmt = $pdo->prepare($sql);
    $stmt->execute();

    // $sql = "INSERT INTO users (name, email) VALUES
    //     ('anna', 'alpha@example.com'),
    //     ('betty', 'betty@example.com'),
    //     ('clara',  'gamma@example.com'),
    //     ('clara',  'agamma@example.com'),
    //     ('sue',  'sigma@example.com')
    // ";
    // $stmt = $pdo->prepare($sql);
    // $stmt->execute();

    $cmd = "INSERT INTO users (id, name, email) VALUES (:id, :name, :email)";
    $stmt = $pdo->prepare($cmd);
    $stmt->bindValue('id', 1);
    $stmt->bindValue('name', 'anna');
    $stmt->bindValue('email', 'alpha@example2.com');
    $stmt->execute();
    echo 'Success!';


    

} catch (PDOException $e) {
    echo 'Failure';
    echo $e->getMessage();
}
?>
