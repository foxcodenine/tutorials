
<?php
header('Content-Type: application/json; charset=utf-8');

// ----- . ----------------------------------------------------

$string = "My name is Daniel, Daniel is my name";

// '/(.)/'      match anything

// '/(t|o)/'    match either 't' or 'o'

// '/[abc]/'    match for any a, b and c

// '/[^abc]/'   match for any that are not  a, b and c

// '/[a-z]/'    match for any lowcase letter for a to z

// '/[a-zA-z]/' match for any lowcase and uppercase letter for a to z

// '/[0-9]/'    match for any number character form 0 to 9

// Quantifier * + ?

// '/D*/'       match for 0 or more of character 'D'

// '/D.*/'      first match 'D' and any character that come after it, qty 0 or more

// '/D.*l/'     first match 1st'D' and ends with last 'l' in the string, with any character in between, qty 0 or more

// '/D.*?l/'    first match 1st'D' and ends with the next 'l' in the string, with any character in between, qty 0 or more

// '/D.*?el /'  first match 1st'D' and ends with the next 'el 'in the string, with any character in between, qty 0 or more

// '/D+/'       match 1 or more 'D'

// '/D.+/'      first match D with 1 or more of any character that comes after it

// '/D?/'       match  for D, qty 0 or 1

// '/D.?/'      match  for D with 1 or 0 of any character that comes after it

// '/D.?l/'     match  for D with 1 or 0 of any character that comes after it

// '/D{3}/'     match for 3 'D' in a row

// '/D{1,3}/'   match from 1 to 3 'D' in a row

// '/D{2,}/'    match for 2 or more 'D' in a row

// metacharacter \d \w \s \D \W \S

// '/\d/'       The \d metacharacter is used to find a digit from 0-9.

// '/\D/'       The \D metacharacter is used to find a non-digit character.

// '/\s/'       The \s metacharacter is used to find a whitespace character.

// '/\S/'       The \S metacharacter is used to find a non-whitespace character.

// '/\w/'       The \w metacharacter is used to find a word character.
//              A word character is a character from a-z, A-Z, 0-9, including the _ (underscore) character.

// '/\W/'       The \W metacharacter is used to find a non-word character.

// '/\b/'       The \b metacharacter is used to find a match at the beginning or end of a word.


// '/^n/'       The ^n quantifier matches any string with n at the beginning of it.

// '/n$/'       The n$ quantifier matches any string with n at the end of it.

// '/^a|c$/'    match for either a at the start or c at the end.

// '/\b/'       The \b metacharacter is used to find a match at the beginning or end of a word

// '/\bD\w*?l\b/'    This will match any word that begins with 'D' and ends with 'l'


$result = preg_match('/([0-9])/', $string);

var_export($result);

// ------ preg_match_all -----------------------------------------------

$string = "My name is Daniel, Daniel is my name";


echo PHP_EOL, PHP_EOL, PHP_EOL;

$result = preg_match_all('/D*/', $string, $array);

print_r($result); // 37

echo PHP_EOL, PHP_EOL;

var_export($array);



echo PHP_EOL, PHP_EOL, PHP_EOL;

$result = preg_match_all('/D.*m/', $string, $array);

var_export($array);



echo PHP_EOL, PHP_EOL, PHP_EOL;

$result = preg_match_all('/D+/', $string, $array);

var_export($array);



echo PHP_EOL, PHP_EOL, PHP_EOL;

$result = preg_match_all('/D?/', $string, $array);

var_export($array);



echo PHP_EOL, PHP_EOL, PHP_EOL;

$result = preg_match_all('/D.?/', $string, $array);

var_export($array);



echo PHP_EOL, PHP_EOL, PHP_EOL;

$result = preg_match_all('/D.*?el /', $string, $array);

var_export($array);



$string = "My name is DDDaniel, DDaniel is my name";

echo PHP_EOL, PHP_EOL, PHP_EOL;

$result = preg_match_all('/D{2,3}/', $string, $array);

var_export($array);


// ------ preg_replace -----------------------------------------------

$string = "My name is DDDaniel, DDaniel is my name \n 12345";

echo PHP_EOL, PHP_EOL, PHP_EOL;

$result = preg_match_all('/\s{2}/', $string, $array);

var_export($array);




$string = "My name is Daniel, Daniel is my name";

echo PHP_EOL, PHP_EOL, PHP_EOL;

$result = preg_match_all('/^My|name$/i', $string, $array);

var_export($array);




$string = "My name is Daniel, Daniel is my name";

echo PHP_EOL, PHP_EOL, PHP_EOL;

$result = preg_match_all('/\bD\w*l\b/', $string, $array);

var_export($array);




$string = "My name is Daniel, Daniel \n is my name";

echo PHP_EOL, PHP_EOL, PHP_EOL;

$result = preg_match_all('/D?=2/', $string, $array);

var_export($array);


?>
