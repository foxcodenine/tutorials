<?php
require_once('../Model/Chat.php');

$method = $_SERVER['REQUEST_METHOD'];
if ($method == "GET") {
    $c = new Chat();
    echo json_encode($c->getChats());

} else if ($method == "POST") {
    $who = filter_input(INPUT_POST, 'who', FILTER_SANITIZE_STRING);
    $message = filter_input(INPUT_POST, 'message', FILTER_SANITIZE_STRING);

    $c = new Chat();
    $c->addChat($who, $message);
}
