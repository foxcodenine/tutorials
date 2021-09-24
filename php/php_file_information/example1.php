<?php

$finfo = new finfo(FILEINFO_MIME);

$file = './1oz_Maple_Leaf_2019_back.jpg';

if (is_file($file)) {
    echo $finfo->file($file) . '<br>';
}



?>

<?php

$finfo = finfo_open(FILEINFO_MIME_TYPE);

foreach(glob('*') as $filename) {

    echo finfo_file($finfo, $filename) . '<br>';    
}

finfo_close($finfo);
?>
