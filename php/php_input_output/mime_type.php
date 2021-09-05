<?php


$file = './red_fox.btm';

if (is_file($file)) {
    
    echo mime_content_type($file) . '<br>';

    $fr = fopen($file, 'r+');

    $finfo = new finfo(FILEINFO_MIME_TYPE);

    echo $finfo->file($file);

}

