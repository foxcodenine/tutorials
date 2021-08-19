<?php

use app\Model\User;

function verifyUser () {
    if (isset($_GET['key'])) {
        $key = filter_input(INPUT_GET, 'key', FILTER_SANITIZE_STRING);
        $key = str_replace(' ', '+', substr($key, 4),);
        $user = User::fetchUser($key);
        
    } 
    if (!isset($user) || empty($user)){
        header('Status: 401 Unauthorized');
        echo json_encode(['Status'=>'Failure', 'Message'=>'Unauthorized User']); 
        exit();
    } 
    return $user;
}

function verifyAdmin($user) {
    
    if (!$user || !$user->role == 'admin') {
        header('Status: 401 Unauthorized');
        echo json_encode(['Status'=>'Failure', 'Message'=>'Unauthorized User']); 
        exit();
    }
}