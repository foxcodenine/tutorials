<?php

$catalog = new SimpleXMLElement('./catalog.xml', 0, 1);

var_export($catalog->book->xpath('//book[@id="bk102"]	'));

// echo gettype($catalog->book);



?>