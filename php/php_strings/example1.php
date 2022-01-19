<?php



// header('Content-type: application/json');



$examples = [
    "12 o clock",
    // "Half past 12",
    "12.30",
    "0123",
    "0x123",
    "7.2e2 minutes after",
    ];

foreach($examples as $example) {
    $result = 0 + $example;
    var_dump($result);
    echo '<br>';
}

echo intval("0x123");