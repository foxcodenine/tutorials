### heredoc
    $string = <<< EndReport
    plain text and now a function: 
    $variable_interpolation
    EndReport;
************************************************************************

### nowdoc
    $string = <<< 'EndReport'explo
    plain text and now a function: 
    $no_variable_interpolation
    'EndReport';
************************************************************************

### addslashes() Function
The addslashes() function returns a string with backslashes in front of 
predefined characters.

    The predefined characters are:
        single quote (')
        double quote (")
        backslash (\)
        NULL
>addslashes(string)
************************************************************************

### echo() Function
>echo(strings)
>echo string1, *string2*, *string++*
************************************************************************

### explode() Function
The explode() function breaks a string into an array.    
>explode(separator, string, *limit*)
************************************************************************

### html_entity_decode() Function
The html_entity_decode() function converts HTML entities to characters.
It is the opposite of htmlentities().
>html_entity_decode(string, *flags*, *character-set*)

    $str = '&lt;a href=&quot;https://www.w3schools.com&quot;&gt;w3schools.com&lt;/a&gt;';
    echo html_entity_decode($str);

    <a href="https://www.w3schools.com">w3schools.com</a>
************************************************************************

### htmlentities() Function
The htmlentities() function converts characters to HTML entities.
>htmlentities(string, *flags*, *character-set*, *double_encode*)
************************************************************************

### htmlspecialchars_decode() Function
Converts some predefined HTML entities to characters.

    HTML entities that will be decoded are:

        &amp; becomes & (ampersand)
        &quot; becomes " (double quote)
        &#039; becomes ' (single quote)
        &lt; becomes < (less than)
        &gt; becomes > (greater than)

htmlspecialchars_decode() function is the opposite of htmlspecialchars().
>htmlspecialchars_decode(string, *flags*)
************************************************************************

### htmlspecialchars() Function
Converts some predefined characters to HTML entities.
>htmlspecialchars(string, *flags*, *character-set*, *double_encode*)

    $str = "This is some <b>bold</b> text.";
    echo htmlspecialchars($str);

    This is some &lt;b&gt;bold&lt;/b&gt; text.
************************************************************************

### implode() Function
The implode() function returns a string from the elements of an array.   
>implode(*separator*, array)
************************************************************************

### join() Function
The join() function returns a string from the elements of an array.
The join() function is an alias of the implode() function.
>join(*separator*, array)
************************************************************************

### nl2br() Function
The nl2br() function inserts HTML line breaks (<br> or <br />) 
in front of each newline (\n) in a string.
>nl2br(string, *xhtml*)
************************************************************************

### parse_str() Function
The parse_str() function parses a query string into variables.
>parse_str(string, *array*)
************************************************************************

### print() Function
The major differences to echo are that print only accepts a single 
argument and always returns 1.   
>print(strings)
************************************************************************

### printf() Function
The printf() function outputs a formatted string.
The arg1, arg2, ++ parameters will be inserted at percent (%) signs in 
the main string. 
>printf(format, arg1, *arg2*, *arg++*)
************************************************************************

### str_repeat() Function
The str_repeat() function repeats a string a specified number of times.
>str_repeat(string, repeat)
************************************************************************

### str_replace() Function
The str_replace() function replaces some characters with some other 
characters in a string.
>str_replace(find, replace, string, *count*)
************************************************************************

### str_split() Function
The str_split() function splits a string into an array.
>str_split(string, *length*)
************************************************************************

### str_word_count() Function
The str_word_count() function counts the number of words in a string.
>str_word_count(string, *return*, *char*)
************************************************************************

### strcmp() Function
The strcmp() function compares two strings.
>strcmp(string1, string2)
************************************************************************

### strcasecmp() Function
Same as strcamp() but case-insensitive.
************************************************************************

### strnatcmp() Function
Compare two strings using a "natural" algorithm (case-sensitive):
>strnatcmp(string1, string2)
************************************************************************

### strncasecmp() Function
Compare two strings using a "natural" algorithm (case-insensitive):
>strnatcmp(string1, string2)
************************************************************************

### strip_tags() Function
The strip_tags() function strips a string from HTML, XML, and PHP tags.
>strip_tags(string, *allow*)
************************************************************************

### stripslashes() Function
The stripslashes() function removes backslashes added by the 
addslashes() function.
>stripslashes(string)
************************************************************************

### strlen() Function
The strlen() function returns the length of a string.
>strlen(string)
************************************************************************ 

### strpos() Function
Finds the position of the 1st occurrence of a string inside another 
string. (case-sensitive).
>strpos(string,find, *start*)

stripos() -  same but case-insensitive
************************************************************************
   
### strrpos() Function
Finds the position of the last occurrence of a string inside another 
string. (case-sensitive).
>strrpos(string,find, *start*)

strripos() -  same but case-insensitive
************************************************************************    

### substr() Function
The substr() function returns a part of a string.
>substr(string, start, *length*)
************************************************************************

### substr_count() Function
Counts the number of times a substring occurs in a string.
The substring is case-sensitive.
>substr_count(string,substring, *start*, *length*)
************************************************************************

### substr_replace() Function
Replaces a part of a string with another string.
>substr_replace(string,replacement, *start*, *length*)
************************************************************************

###  strspn() Function
Returns how many characters from the beginning of string that contains only 
characters from the charlist parameter.
>strspn(string, *charlist*, *start*, *length*)

    echo strspn("abcaicdefand","abc");
    > 4  // all char after 'i' aren't counted

************************************************************************

### strstr() Function
Searches for the first occurrence of a string inside another string.
>strstr(string, search, *before_search*)

    $inputString = "192.168.1.10#443##4000";
    $connections = strstr($inputString, "##");
    echo $connections;

    >> ##4000

strchr() is an alias of strstr().
stristr() is the case-insensitive version of strstr().
************************************************************************

### strtok() Function
The strtok() function splits a string into smaller strings (tokens).
>strtok(string,split)

    $stringToTokenize = '192.168.1.10#442#4000';
    $token = strtok($stringToTokenize, '#');
    while ($token !== false) {
        echo "$token<br>";
        $token = strtok('#');
    }
    
    >> 129.168.1.10
    >> 442
    >> 4000
************************************************************************

### strtolower() Function
Converts a string to lowercase.
>strtolower(string)
************************************************************************

### strtoupper() Function
Converts a string to uppercase.
>strtoupper(string)
************************************************************************

### lcfirst() Function
Converts the first character of a string to lowercase.
>lcfirst(string)
************************************************************************

### ucfirst() Function
Converts  the first character of a string to uppercase.
>ucfirst(string)
************************************************************************

### ucwords() Function
Convert the first character of each word to uppercase:
>ucwords(string, *delimiters*)
************************************************************************

### trim(), rtrim() & ltrim() Functions
trim() -   Removes whitespace and other predefined characters from both 
           sides of a string.

ltrim() - Removes whitespace or other predefined characters from the left 
          side of a string

rtrim() - Removes whitespace or other predefined characters from the right 
          side of a string

>trim(string, *charlist*)
************************************************************************

### wordwrap() Function
The wordwrap() function wraps a string into new lines when it reaches a 
specific length.

Note: This function may leave white spaces at the beginning of a line.

>wordwrap(string, *width*, *break*, *cut*)
************************************************************************