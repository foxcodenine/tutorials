<?php

function ppp($i=' ') {
    echo "\n<br><br>";
    echo "($i) _______________________________________________________________";
    echo "<br><br>\n";
}

function qqq(int $i=2){
    $s = "\n";
    for ($n=0; $n < $i; $n++){
        $s .= "<br>";
    }
    $s .= "\n";
    echo $s;
}

ppp('A'); //____________________________________________________________

// heredoc

$foo = 'this_is_foo';

$myHereDoc = <<<EndReport


This is a test to see 
how <b>heredoc</b>. works. \n This is \$foo: 
$foo; 
\n In the 2nd try we are using <b>nl2br()</b> function.

EndReport;

echo $myHereDoc;
echo nl2br($myHereDoc);

ppp('B'); //____________________________________________________________

// nowdoc

$foo = 'this_is_foo';

$myHereDoc = <<<'EndReport'


Now this is a test to see 
how <b>nowdoc</b>. works. \n This is \$foo: 
$foo; In the nowdoc variable not Interpolated and \n is not escaped
\n In the 2nd try, we are using <b>nl2br()</b> function.

EndReport;

echo $myHereDoc;
echo nl2br($myHereDoc);


ppp('C'); //____________________________________________________________

// Function vs Constractor

$notes_1 = <<< EndReport

What is difference between <b>function</b> and <b>constructor</b>?

A constructor is a special kind of method from where execution starts in 
side a class. Where as a function is a normal kind of method & used to 
provide some functionality. A function may or may not return value where 
as a constructor must not return value. constructor doesn't have a return 
type where as a function has.

EndReport;
echo nl2br($notes_1);


ppp('D'); //____________________________________________________________

// echo and print

echo '<br>', 'this is a test echo', ' testing testing 123.';

echo('<br> and this is a ' . '2nd' . 'test' . 'using echo(). no "," here!');

echo '<br>1+1=', 1+1;

$my_print = print('<br>This is a  print() string. This will return a true<br>.');

echo $my_print;



ppp('E'); //____________________________________________________________

//printf

// printf(format, arg1, arg2, arg++);

printf("1+1 is equal to %s", (1+1));
qqq();

printf('%d x %e is equal to %f',2.1 ,2.1 , (2*2.1));
qqq();

$client12 = ['name'=>'John', 'surname'=>'Langer', 'age'=>42, 'country'=>'Germany'];

printf('%s, is %s years old. He live in %s.', $client12['name'], $client12['age'], $client12['country']);

qqq();

printf('<a href="%s" target="_blank">Wikipedia page `Cats`</a>', 'https://en.wikipedia.org/wiki/Cat');

qqq();

printf("%10s", "Chris"); // <- this will work in the terminal

qqq();

printf("%'~10s", "Chris");

qqq();

printf("%'#-10s", "Chris");


ppp('F'); //____________________________________________________________


printf('%d', -1024);
qqq();
printf('%d', 1024);
qqq();
printf('%+d', 1024);
qqq();
printf('%+d', -1024);
qqq();
printf('%06d', 1024);
qqq();
printf("%04d", "123.4");
qqq();
printf("%.2f", "123.4");

ppp('G'); //____________________________________________________________

// print_r

$listOfOS = array('Linux', 'macOS', 'Window', 'FreeBSD', 'Android', 'iOS');

print_r($listOfOS);

qqq();

class Car {
    var $manufacturer = 'VolksWagen';
    var $model = 'Golf';
    var $mark = 7.5;
    var $isElectric = false;
}

$vw = new Car();

print_r($vw);

ppp('H'); //____________________________________________________________

// String Length

$aString = 'A string of characters';

echo 'Length of $aString => ' . strlen($aString); 

qqq();

$bString = "{$aString}";

echo 'Length of $bSting => ' . strlen($bString);

ppp('I'); //____________________________________________________________

// trim(), ltrim() and rtrim();

$cString = '   Hi my name is Dorothy   ';

echo '!' . $cString . '!'; qqq();

echo '!' .  trim($cString) . '!'; qqq();

echo '!' . ltrim($cString) . '!'; qqq();

echo '!' . rtrim($cString) . '!'; qqq();

ppp('J'); //____________________________________________________________

// nl2br();

$dString = "1\n2\n3\t4\r5";

echo $dString;

qqq();

echo nl2br($dString);

ppp('J'); //____________________________________________________________

// substr();

$eString = 'I am e-string. This means that I am the 5th sting on a guitar';

echo $eString;

qqq();

echo substr($eString, 0, 15);

qqq();

echo substr($eString, 15);

qqq();

echo substr($eString, -6);


ppp('K'); //____________________________________________________________

// Case Operations

$m = 'chris farrugia';      echo $m; qqq();

$m = strtoupper($m);        echo $m; qqq();

$m = strtolower($m);        echo $m; qqq();

$m = ucfirst($m);           echo $m; qqq();

$m = lcfirst($m);           echo $m; qqq();

// ucwords() function converts the first character of each word in a string to uppercase.
// ucwords(string, delimiters)
//      string	    Required. Specifies the string to convert
//      delimiters	Optional. Specifies the word separator character

echo ucwords($m);           qqq();
echo ucwords($m, 'r');      qqq();
echo ucwords($m, "c i");    qqq();

ppp('J'); //____________________________________________________________


// htmlentities()

// The htmlentities() function is an inbuilt function in PHP which is used to 
// transform all characters which are applicable to HTML entities. This function 
// converts all characters that are applicable to HTML entity.


$str= '< > $ ^ &'; 

print($str);                                                                    qqq();
// > < > $ ^ &
print(htmlentities($str));                                                      qqq();
// > &lt; &gt; $ ^ &amp;    

// <- you won't see this in browser. Because it will be changed back. 
// You need to check the source code or run it in the terminal.



ppp('J'); //____________________________________________________________

// htmlentities()

// htmlentities( $string, $flags, $encoding, $double_encode )


/**
* $string: This parameter is used to hold the input string.

* $flags: This parameter is used to hold the flags. 
  It is combination of one or two flags, which tells how to handle quotes.

* $encoding: It is an optional argument which specifies the encoding which 
  is used when characters are converted. If encoding is not given then it is 
  converted according to PHP default version.

* $double_encode: If double_encode is turned off then PHP will not encode 
  existing HTML entities. The default is to convert everything.

Return Values: This function returns the string which has been encoded.
*/

// flags
$name = "O'Neil";
print("<div>Client Name: " . htmlentities($name) . "</div>");                   qqq();
// > <div>Client Name: O'Neil</div>


print("<div>Client Name: " . htmlentities($name, ENT_QUOTES) . "</div>");       qqq();
//> <div>Client Name: O&#039;Neil</div>

// encoding
$str = "\x8F!!!";
echo htmlentities($str, ENT_QUOTES | ENT_IGNORE, "UTF-8");
//> Outputs "!!!"

ppp('K'); //____________________________________________________________


// htmlspecialchars

// string htmlspecialchars( $string, $flags, $encoding, $double_encode )

/**
* Difference between htmlentities() and htmlspecialchars() function: 
  The only difference between these function is:

* htmlspecialchars() function convert the special characters to HTML entities.

* htmlentities() function convert all applicable characters to HTML entities.
 
*/


ppp('L'); //____________________________________________________________

// strip_tags();

// strip_tags(string,allow)

/**
 * string	Required. Specifies the string to check
 
 * allow	Optional. Specifies allowable tags. These tags will not be removed
 */

 $str = "<b>Hello</b> <s>World</s>";

 echo $str;                                                                     qqq();

 echo strip_tags($str);                                                         qqq();

 echo strip_tags($str, '<b>');                                                  qqq();

 echo strip_tags($str, '<s>');                                                  qqq();

 echo strip_tags($str, '<b><s>');                                               qqq();


ppp('M'); //____________________________________________________________

// get_meta_tags();

$index_meta_tags = get_meta_tags('./test_page.php');

print_r($index_meta_tags);                                                      qqq();

foreach($index_meta_tags as $key=>$value){
    echo  $key . ' : ' . $value . '<br>';
}

qqq();

$index_meta_tags = get_meta_tags("http://icemalta.com");

print_r($index_meta_tags);                                                      qqq();

foreach($index_meta_tags as $key=>$value){
    echo  $key . ' : ' . $value . '<br>';
}

qqq();

ppp('N'); //____________________________________________________________

// rawurlencode(), rawurldecode, urlencode() and urldecode

// rawurlencode($str);

$str = rawurlencode('A computer science portal for geek');

echo "<a href='https://www.geeksforgeeks.org/{$str}'>{$str}</a>";               qqq();

// rawurldecode($str);

echo $str = rawurldecode($str);                                                 qqq();

// this will add + instade of a %20
echo $str = urlencode($str);                                                    qqq();
echo $str = urldecode($str);                                                    qqq();

ppp('O'); //____________________________________________________________

// String Comparison

var_dump("A" == "a");                                                           qqq();
var_dump("1" == 1);                                                             qqq();
var_dump("1" === 1);                                                            qqq();
var_dump("1 a" > 1);                                                            qqq();
var_dump("a string" > 1);                                                       qqq();

ppp('P'); //____________________________________________________________


// strcmp();  Compare two strings (case-sensitive):

// strcmp(string1,string2)

echo strcmp("Hello","Hello");                                                   qqq();

echo strcmp("Hello","hELLo");                                                   qqq();

// strcasecmp();

// Compare two strings (case-insensitive):

echo strcasecmp("Hello","11111");                                               qqq();

echo strcasecmp("Hello","hELLo");                                               qqq();

ppp('Q'); //____________________________________________________________


// usort()
// The usort() function sorts an array using a user-defined comparison function

/** 
 
* usort(array, myfunction)
 
* array	Required. Specifies the array to sort

* myfunction	Optional. A string that define a callable comparison function. 
  The comparison function must return an integer <, =, or > than 0 if the first 
  argument is <, =, or > than the second argument
*/


ppp('Q'); //____________________________________________________________
// strnatcmp();
// Compare two strings using a "natural" algorithm (case-sensitive):


// strnatcasecmp();
// Compare two strings using a "natural" algorithm (case-insensitive):

$arr1 = $arr2 = array("pic1","pic2","pic10","pic01","pic100","pic20","pic30","pic200");
echo "Standard string comparison"."<br>";
usort($arr1,"strcmp");

echo implode(' | ', $arr1);
qqq();

echo "Natural order string comparison"."<br>";
usort($arr2,"strnatcmp");

echo implode(' | ', $arr2);


ppp('R'); //____________________________________________________________

// soundex();

// The soundex() function calculates the soundex key of a string.

// A soundex key is a four character long alphanumeric string that represent English pronunciation of a word.

// The soundex() function can be used for spelling applications.

$str = "Assistance";
$str2 = "Assistants";

echo soundex($str);                                                     qqq();
echo soundex($str2);                                                    qqq();


ppp('S'); //____________________________________________________________


// metaphone();
// The metaphone() function calculates the metaphone key of a string.

// A metaphone key represents how a string sounds if said by an English speaking person.

// The metaphone() function can be used for spelling applications


/** metaphone(string,length)
 
 * string	Required. Specifies the string to check
 
 * length	Optional. Specifies the maximum length of the metaphone key
 */

echo metaphone($str);                                                   qqq();
echo metaphone($str2);                                                  qqq();


ppp('T'); //____________________________________________________________

// PHP similar_text() Function
// Calculate the similarity between two strings and return the matching characters:

/** similar_text(string1,string2,percent)
 * 
 * string1	Required. Specifies the first string to be compared
 
 * string2	Required. Specifies the second string to be compared
   percent	Optional. Specifies a variable name for storing the similarity in percent

 */

similar_text("Hello World","Hello Peter",$percent);
echo $percent;                                                          qqq();
similar_text("Christopher","Chris", $percent);
echo $percent;                                                          qqq();

echo strcmp("Christopher","Chris");                                     qqq();
echo strnatcmp("Christopher","Chris");                                  qqq();
echo strnatcmp("Christopher","James");                                  qqq();