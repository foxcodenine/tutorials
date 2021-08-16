<?php

use app\Model\User;

function verifyUser () {
    if (isset($_GET['key'])) {
        $key = filter_input(INPUT_GET, 'key', FILTER_SANITIZE_STRING);
        $key = str_replace(' ', '+', substr($key, 3),);
        $user = User::fetchUser($key);
       
        return $user;
    } 
    if (!isset($user) || empty($user)){
        echo json_encode(['Status'=>'Failure', 'Message'=>'Unauthorized User']); 
        exit();
    } 
}

function verifyAdmin($user) {
    
    if (!$user->role == 'admin') {
        echo json_encode(['Status'=>'Failure', 'Message'=>'Unauthorized User']); 
        exit();
    }
}