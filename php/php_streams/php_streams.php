<?php
$default_opts = array(
  'http'=>array(
    'method'=>"GET",
    'header'=>"Accept-language: en\r\n" .
              "Cookie: foo=bar",
    // 'proxy'=>"tcp://10.54.1.39:8000"
  )
);


$alternate_opts = array(
  'http'=>array(
    'method'=>"POST",
    'header'=>"Content-type: application/x-www-form-urlencoded\r\n" .
              "Content-length: " . strlen("baz=bomb"),
    'content'=>"baz=bomb"
  )
);

$default = stream_context_get_default($default_opts);
$alternate = stream_context_create($alternate_opts);

/* Sends a regular GET request to proxy server at 10.54.1.39
 * For www.example.com using context options specified in $default_opts
 */
readfile('http://www.example.com');

/* Sends a POST request directly to www.example.com
 * Using context options specified in $alternate_opts
 */
readfile('http://www.example.com', false, $alternate);

?>