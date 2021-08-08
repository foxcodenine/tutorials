<?php

$socket = stream_socket_server("tcp://0.0.0.0:1037");

while ($conn = stream_socket_accept($socket)) {
    stream_filter_append($conn, 'string.toupper');
    fwrite($conn, "Hello World\n");
    fclose($conn);
}

fclose($scoket);