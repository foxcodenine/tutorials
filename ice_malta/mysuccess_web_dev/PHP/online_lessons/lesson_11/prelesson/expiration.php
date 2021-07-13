<?php
$minutes_to_add = 5;

$time = new DateTime();
$secondsToAdd = -5;
$time->modify("+{$secondsToAdd} seconds");
$hoursToAdd = -2;
$time->modify("+{$hoursToAdd} hours");
$stamp = $time->format('D, d M Y H:i:s') . ' UTC';

echo 'This page expires at ' . $stamp;

// header("Expires: {$stamp}");

$currentTime = time();
$expiryTime = gmstrftime("%a, %d %b %Y %H:%M:%S GMT", $currentTime + (60 * 60 * 3));
// header("Expires: $expiryTime");

header("Expires: $currentTime");
?>