<?php 
$pattern = '/^(\w+)@(\w+).(\w+)/';
$subject = 'chris12aug@yahoo.com';

preg_match($pattern, $subject, $matches);
var_export($matches);
?>

<?php 
$pattern = '/^(?<username>\w+)@(?<domain>\w+).(?<tld>\w+)/';
$subject = 'chris12aug@yahoo.com';

preg_match($pattern, $subject, $matches);
var_export($matches);
?>


