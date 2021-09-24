<?php
$path = "/ubuntu/foxcodenine/testweb/home.php";

//Show filename
echo basename($path) ."<br/>";

//Show filename, but cut off file extension for ".php" files
echo basename($path,".php") . '<br>';

// Show path to file
echo dirname($path) . '<br><br>';

echo dirname($path, 3);
?>

<?php
$path_parts = pathinfo('/var/www/html/php_input_output/golden_maple_leaf.jpeg');

echo $path_parts['dirname'], "<br>";
echo $path_parts['basename'], "<br>";
echo $path_parts['extension'], "<br>";
echo $path_parts['filename'], "<br>";


?>