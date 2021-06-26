<?php

function ppp($i=' ') {
    echo "<br><br>";
    echo "($i) _______________________________________________________________";
    echo "<br><br>";
}

function qqq(int $i=2){
    $s = '';
    for ($n=0; $n < $i; $n++){
        $s .= '<br>';
    }
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
