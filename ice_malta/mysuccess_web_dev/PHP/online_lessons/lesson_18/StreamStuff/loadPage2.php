<?php 

$http_options = stream_context_create(
    array(
        'http' => array(
            'user_agent' => 'My Browser',
            'max_redirects' => 3
        )
    )
);

$file = file_get_contents("https://www.facebook.com/", FALSE, $http_options);

echo $file;