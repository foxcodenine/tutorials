<?php 
header('Content-Type: application/json');
$file = __FILE__;



$handle = fopen($file, 'r+');
$filterResorceNoUse = stream_filter_append($handle, 'string.rot13');

while (!feof($handle)) {
    echo fgets($handle);
}
?>