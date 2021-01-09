<?php

$file = "example.txt";

// w  Open a file for write only. Erases the contents of the file or creates a
// new file if it doesn't exist. File pointer starts at the beginning of the
// file

if($handle = fopen($file, 'w')) {


    fwrite($handle, "I love PHP!"); // <- this will over write the file

    fclose($handle);

    echo nl2br("file over written \n");

} else {
   echo "The application was not able to write on the file";
}

// _____________________________________________________________________


// a  Open a file for write only. The existing data in file is preserved. File
// pointer starts at the end of the file. Creates a new file if the file doesn't
// exist


if($handle = fopen($file, 'a')) {

    fwrite($handle, "And this is really good stuff!");

    fclose($handle);

    echo nl2br("file update \n");

} else {
   echo "The application was not able to write on the file";
}

// _____________________________________________________________________


?>