<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>PHP String Functions</title>
</head>
<body>

<?php
echo '<pre>
https://www.php.net/manual/en/ref.strings.php
https://www.w3schools.com/php/php_string.asp
</pre>';

// _____________________________________________________________________
echo '<br> ---- strlen <br>';
// Returns the length of the given string. 

echo strlen('Christoper Farrugia') . '<br>';

// _____________________________________________________________________
echo '<br> ---- str_word_count() <br>';
// Counts the number of words in a string.

echo str_word_count('Christoper Farrugia') . '<br>';

// _____________________________________________________________________
echo '<br> ---- trim() <br>';
// Strip whitespace (or other characters) from the beginning and end of a string

echo '...' . ('  hi, my name is Dorothy     ') . '!'. '<br>';
echo '...' . trim('  hi, my name is Dorothy     ') . '!'. '<br>';


// _____________________________________________________________________
echo '<br> ---- strtolower(), strtoupper and  ucwords()<br>';
// convert to lowercase, to uppercase and titlecase.

$a = 'dorothy cassar';
$b = 'DOrOTH CAssAR';

echo strtoupper($a) . '<br>';
echo strtolower($b) . '<br>';
echo ucwords($a) . '<br>';


// _____________________________________________________________________
echo '<br> ---- substr() <br>';

$paragraph = '
A paragraph is a series of related sentences developing a central idea, 
called the topic. Try to think about paragraphs in terms of thematic 
unity: a paragraph is a sentence or a group of sentences that supports 
one central, unified idea. Paragraphs add one idea at a time to your 
broader argument.
';

echo substr($paragraph, 0, 50) . '...' . '<br>';


?>

</body>
</html>