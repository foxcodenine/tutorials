<?php 
function ppp($a){
    echo "<br><br>($a)________________________________________________<br><br>";
}

ppp(1); // _____________________________________________________________

// echo date('d');         
// echo date('m');         
// echo date('M');         
// echo date('Y');         

echo date("d-M-Y");

ppp(2); // _____________________________________________________________

// echo date("h");  // Hour
// echo date("i");  // Min
// echo date("s");  // Sec
// echo date("a");  // AM or PM

echo date("h:i:sa");

ppp(3); // _____________________________________________________________

// Set Time Zone 

date_default_timezone_set('Europe/London');

echo date("h:i:sa");

// https://www.php.net/manual/en/timezones.php

ppp(4); // _____________________________________________________________

/*
Unix timestamp is a long integer containing thr number of
secondes between the Unix Epoch (January 1 1970 00:00:00 GMT)
and the time specified.
*/

$timestamp = mktime(04, 50, 54, 8, 12, 1984);

echo $timestamp, '<br>';

echo date('d-M-Y', $timestamp);


ppp(5); // _____________________________________________________________

// String to time:

$timestamp2 = strtotime('7:00pm March 20 2016');

echo $timestamp2, '<br><br>';

echo date('d-M-Y h:m:sa', $timestamp2), '<br><br>';




$timestamp3 = strtotime('20 March 16 7:00pm ');
echo date('d-M-Y h:m:sa', $timestamp3), '<br><br>';



$timestamp4 = strtotime('yesterday');
echo date('d-M-Y h:m:sa', $timestamp4), '<br><br>';

$timestamp5 = strtotime('tomorrow');
echo date('d-M-Y h:m:sa', $timestamp5), '<br><br>';

$timestamp6 = strtotime('next Saturday');
echo date('d-M-Y h:m:sa', $timestamp6), '<br><br>';

$timestamp7 = strtotime('+2 Days');
echo date('d-M-Y h:m:sa', $timestamp7), '<br><br>';

$timestamp8 = strtotime('Monday');
echo date('d-M-Y h:m:sa', $timestamp8), '<br><br>';


// https://www.php.net/manual/en/function.date.php
?>