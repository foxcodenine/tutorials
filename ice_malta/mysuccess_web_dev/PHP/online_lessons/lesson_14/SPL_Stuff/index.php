<?php

require './TrafficSimulator.php';
require './ColorFilter.php';

// _____________________________________________________________________

$traffic = new TrafficSimulator();

$traffic[0] = "Red";
$traffic[1] = "Amber";
// $traffic['traffic3'] = "Green";
$traffic[2] = "Green";

print_r($traffic);


foreach ($traffic as $k=>$v) {
    printf("\n%s: %s", $k, $v);
}

echo '<br>';
// _____________________________________________________________________

$filtered = new ColorFilter($traffic, "Amber");

print_r($filtered);
// foreach($filtered as $light) {
//     printf("%s<br>", $light);
// }


// _____________________________________________________________________

// Generators 

class User {
    private $email;

    public function __construct($email) {
        $this->email = $email;
    }

    public function getEmail() {
        return $this->email;
    }
}

echo '<h1>Generators</h1>';

$users = [
    new User("joe@doe.com"),
    new User("chris.dummy@gmail.com"),
    new User("keith@icemalta.com"),
    new User("john.doe@gmail.com")
];

// Generator 
function getGmailAddresses($users) {
    $total = 0;
    foreach($users as $user) {
        if(strpos($user->getEmail(), 'gmail') == true) {
            yield $user;
            $total++;
        }
    }
    return $total;
}

$gmailUsers = getGmailAddresses($users);
foreach($gmailUsers as $gmailUser) {
    echo $gmailUser->getEmail() . '<br>';
}

echo "Total:" . $gmailUsers->getReturn();