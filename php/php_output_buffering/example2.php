
<?php
ob_start("ob_gzhandler");
$name = 'Larah';
?>

<h2>My name is <?= $name; ?>.</h2>

<?php 
$content = ob_get_contents();
ob_end_clean();
echo 'Line: ' . __LINE__ . ' ' . $content;
?>