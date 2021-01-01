<?php 

$db_connection = mysqli_connect('Localhost',  'admin' , 'admin', 'phploginapp');

if (!$db_connection) {
    die('Database connection failed!');
} 

?>