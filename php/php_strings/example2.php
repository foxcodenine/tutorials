<?php 
header('content-type: application/json');
echo strcmp('Zcde', 'ab') . PHP_EOL;
echo strcasecmp('Zcde', 'ab') . PHP_EOL;
echo strncmp('zAz', 'zzz', 1) . PHP_EOL;
echo strncasecmp('zZzA', 'zzzZZ', 3) . PHP_EOL;