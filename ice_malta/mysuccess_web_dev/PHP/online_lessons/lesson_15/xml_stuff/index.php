<?php

$library = new SimpleXMLElement('library.xml', null, true);

foreach ($library->book as $book) {
    printf("%s<br>", $book['isbn']);
    printf("%s<br>", $book->title);
    printf("%s<br>", $book->author);
    printf("%s<br>", $book->publisher);
    echo "--<br>";

}