<?php 
    if(filter_input(INPUT_POST, 'action') == "add") {
        $name = filter_input(INPUT_POST, 'name', FILTER_SANITIZE_STRING);
        $surname = filter_input(INPUT_POST, 'surname', FILTER_SANITIZE_STRING);
        $contact = filter_input(INPUT_POST, 'contact', FILTER_SANITIZE_STRING);

        $file = fopen("addresses.csv", 'a');
        if (!$file) {
            die("Unable to open/create address file");
        }
        fputcsv($file, array($name, $surname, $contact));
        fclose($file);
        header('location: ' . $_SERVER['PHP_SELF']);
    }

    // Import
    $contacts = array();
    if (file_exists("addresses.csv")) {
        $file = fopen("addresses.csv", 'r');
        
        while (!feof($file)) {
            $record = fgetcsv($file);
            array_push($contacts, $record);
        }
        fclose($file);
        
    }
?>

<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Address Book</title>
    </head>
    <body>
        <h2>Contacts</h2>
        <?php
            if (count($contacts) === 0) {
                echo "You do not have any contacts yet.";
            } else {
                echo "<table><thead><tr>";
                echo "<th>Name</th><th>Surname</th><th>Contact No.</th>";
                echo "</tr></thead><tbody>";

                foreach ($contacts as $c) {
                    if($c === false) continue;
                    echo "<tr>";
                    echo "<td>$c[0]</td><td>$c[1]</td><td>$c[2]</td>";
                    echo "</tr>";
                }

                echo "</tbody></table>";
            }
        ?>
        <form name="addContact" method="POST" action="">
            <p>
                <label for="name">Name</label>
                <input type="text" name="name">
            </p>
            <p>
                <label for="surname">Surname</label>
                <input type="text" name="surname">
            </p>
            <p>
                <label for="contact">Contact No.</label>
                <input type="rext" name="contact">
            </p>
            <p>
                <input type="hidden" name="action" value="add">
                <input type="submit" value="add">
            </p>
        </form>
    </body>
</html>