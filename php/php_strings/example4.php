<?php
$minutes = 60;
$timeUnit = "an hour";

printf("There are %1$ s minutes in %s. <br>", $minutes, $timeUnit);
printf("There are %1$0s minutes in %s. <br>", $minutes, $timeUnit);
printf("There are %+d minutes in %s. <br>", $minutes, $timeUnit);
?>