<?php

$library = new SimpleXMLElement('library.xml', null, true);

foreach ($library->book as $book) {
    printf("%s<br>", $book['isbn']);
    printf("%s<br>", $book->title);
    printf("%s<br>", $book->author);
    printf("%s<br>", $book->publisher);
    echo "--<br>";

}

// XPath

// Get the title of each book

$results = $library->xpath('/library/book/title');

foreach($results as $t) {
    print("<br>{$t}");
}

echo '<br>-------------------<br>';

$result = $library->book[1]->xpath('title');
echo $result[0];