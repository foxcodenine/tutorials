<?php
require './vendor/autoload.php';

use Dotenv\Dotenv;
$dotenv = Dotenv::createMutable(__DIR__);
$dotenv->load();

    $dns      = $_ENV['dns'];
    $username = $_ENV['username'];
    $password = $_ENV['password'];
    $conn= new PDO($dns, $username, $password);
    $animalList = [];
        
    $action = isset($_GET['action']) ? $_GET['action'] : null;
    switch($action) {
        case 'add': addAnimal(); break;
    }
    loadAnimals();
    
    function loadAnimals() {
        global $animalList;
        global $conn;

        if (isset($_POST['searchTerm'])) {
            // If the user has searched
            $searchTerm = '%' . $_POST['searchTerm'] . '%';

            $query = 'SELECT * FROM animal WHERE commonName LIKE :search';
            $stat = $conn->prepare($query);

            $stat->bindParam(':search', $searchTerm);

        } else {
            // If the user has not searched
            $query = 'SELECT * FROM animal';
            $stat = $conn->prepare($query);
        }
        
        // Execute and update list
        $stat->execute();
        $animalList = $stat->fetchAll(PDO::FETCH_OBJ);
    }
    
    function addAnimal() {
        global $conn;

        $tClass = $_POST['tClass'];
        $tOrder = $_POST['tOrder'];
        $tFamily = $_POST['tFamily'];
        $tGenus = $_POST['tGenus'];
        $tSpecies = $_POST['tSpecies'];
        $commonName = $_POST['commonName'];

        // Execute insert statement

        $query = 'SELECT * FROM animal WHERE commonName LIKE :search';

        $query = 'INSERT INTO animal(tClass, tOrder, tFamily, tGenus, tSpecies, commonName)
                  VALUES(:tClass, :tOrder, :tFamily, :tGenus, :tSpecies, :commonName)';
                  
        $stat = $conn->prepare($query);

        
        $stat->bindParam(':tClass', $tClass);
        $stat->bindParam(':tOrder', $tOrder);
        $stat->bindParam(':tFamily', $tFamily);
        $stat->bindParam(':tGenus', $tGenus);
        $stat->bindParam(':tSpecies', $tSpecies);
        $stat->bindParam(':commonName', $commonName);

        $stat->execute();
        
    }
?>

<!DOCTYPE html>
<html>
    <head>
        <meta charset="UTF-8">
        <title>Taxonomic System</title>
    </head>
    <body>
        <h1>Animals</h1>
        
        <?php
            if (isset($_POST['searchTerm'])) {
                echo "<a href='index.php'>Reset</a>";
            }
        ?>
        
        <table border="1">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Class</th>
                    <th>Order</th>
                    <th>Family</th>
                    <th>Genus</th>
                    <th>Species</th>
                    <th>Common Name</th>
                </tr>
            </thead>
            <tbody>
                <?php
                    foreach($animalList as $animal) {
                        echo "<tr>";
                        echo "<td>$animal->id</td>";
                        echo "<td>$animal->tClass</td>";
                        echo "<td>$animal->tOrder</td>";
                        echo "<td>$animal->tFamily</td>";
                        echo "<td>$animal->tGenus</td>";
                        echo "<td>$animal->tSpecies</td>";
                        echo "<td>$animal->commonName</td>";
                        echo "</tr>";
                    }
                ?>
            </tbody>
        </table>
        
        <h1>Add Animal</h1>
        <form name="addAnimal" action="index.php?action=add" method="POST">
            <fieldset>
                <legend>Fill in this form to add an animal.</legend>
                <label for="tClass">Class</label>
                <input type="text" name="tClass" id="tClass">
                <br>
                <label for="tOrder">Order</label>
                <input type="text" name="tOrder" id="tOrder">
                <br>
                <label for="tFamily">Family</label>
                <input type="text" name="tFamily" id="tFamily">
                <br>
                <label for="tGenus">Genus</label>
                <input type="text" name="tGenus" id="tGenus">
                <br>
                <label for="tSpecies">Species</label>
                <input type="text" name="tSpecies" id="tSpecies">
                <br>
                <label for="commonName">Common Name</label>
                <input type="text" name="commonName" id="commonName">
                <br>
                <input type="submit" value="Add">
            </fieldset>
        </form>
        
        <h1>Search</h1>
        <form name="searchAnimal" action="index.php" method="POST">
            <label for="searchTerm">Search Term</label>
            <input type="text" name="searchTerm" id="searchTerm">
            <input type="submit" value="Search">
        </form>
    </body>
</html>
