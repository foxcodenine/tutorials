<?php

require_once './includes/db.php';
require_once './functions.php';
// ob_start();
session_start();




// echo 'so far so good';

$user_id =  logged_in_user_id();

echo $user_id ? $user_id . '<br>' : 'user not logged! <br>';

echo user_liked_this_post(1) ? "<button>Unlike</button>" : "<button>Like</button>"

?>