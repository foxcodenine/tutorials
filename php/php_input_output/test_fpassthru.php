<?php
// open the file in a binary mode
$file = './golden_maple_leaf.jpeg';
$fh = fopen($file, 'rb');


// send the right headers
header("Content-Type: image/png");
header("Content-Length: " . filesize($file ));

// dump the picture and stop the script
fpassthru($fh);

exit;

?>