<?php


function escape($string) {

    global $conn;

    return $conn->real_escape_string(trim(htmlspecialchars($string)));
}




?>