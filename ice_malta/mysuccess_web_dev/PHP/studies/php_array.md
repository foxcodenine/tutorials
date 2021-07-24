
### array() Function
The array() function is used to create an array.
>Syntax for indexed arrays:
>array(value1, value2, value3, etc.)

>Syntax for associative arrays:
>array(key=>value,key=>value,key=>value,etc.)
************************************************************************
### Adding and Removing from an Array

#### array_push() Function
Inserts one or more elements to the end of an array and return the number of values in array;
>array_push(array, *value1*, *value2*, ...)

You can also do.
>array[] = value

#### array_unshift() Function
Inserts one or more elements to the beginning of an array and return the number of values in array;
>array_unshift(array, *value1*, *value2*, *value3*, ...)

#### array_pop() Function
Deletes the last element of an array and returns deleted element.
>array_pop(array)

#### array_shift() Function
Deletes the first element of an array and returns deleted element.
>array_shift(array)


************************************************************************

### array_change_key_case()
The array_change_key_case() function changes all keys in an array to lowercase or uppercase.
>array_change_key_case(array, *case*)

>CASE_LOWER - Default value. Changes the keys to lowercase
>CASE_UPPER - Changes the keys to uppercase
************************************************************************

### array_chunk() Function
The array_chunk() function splits an array into chunks of new arrays.
New arrays will be nested in original array
>array_chunk(array, size, *preserve_key*)
************************************************************************

### array_column() Function
Returns the values from a single column in the input array.
>array_column(array, column_key, *index_key*)

    $a = [
        ['id' => 5698, 'first_name' => 'Peter', 'last_name' => 'Griffin'], 
        ['id' => 4767, 'first_name' => 'Ben', 'last_name' => 'Smith',], 
        ['id' => 3809, 'first_name' => 'Joe', 'last_name' => 'Doe',]
    ];

    $last_names = array_column($a, 'last_name', 'id');
    print_r($last_names);

    >> Array
        (
            [5698] => Griffin
            [4767] => Smith
            [3809] => Doe
        )
************************************************************************

### array_combine() Function
Creates an array by using the elements from one "keys" array and one "values" array.
Note: Both arrays must have equal number of elements!
>array_combine(keys, values)

    $fname=array("Peter","Ben","Joe");
    $age=array("35","37","43");

    $c=array_combine($fname,$age);
    print_r($c);
    
    >> Array ( [Peter] => 35 [Ben] => 37 [Joe] => 43 )
************************************************************************

### array_count_values() Function
Counts all the values of an array.
>array_count_values(array)

    $a=array("A","Cat","Dog","A","Dog");
    print_r(array_count_values($a));

    >> Array ( [A] => 2 [Cat] => 1 [Dog] => 2 )
************************************************************************

### array_diff() Function
This function compares the values of two (or more) arrays, and return an array that contains the entries from array1 that are not present in array2 or array3, etc
>array_diff(array1, array2, *array3, ...*)

    $a1=array("a"=>"red","b"=>"green","c"=>"blue","d"=>"yellow");
    $a2=array("e"=>"red","f"=>"green","g"=>"blue");

    $result=array_diff($a1,$a2);
    print_r($result);

    >> Array ( [d] => yellow )
************************************************************************

### array_diff_assoc() Function
This function compares the keys and values of two (or more) arrays, and return an array that contains the entries from array1 that are not present in array2 or array3, etc.
>array_diff(array1, array2, *array3, ...*)
************************************************************************

### array_diff_key() Function
This function compares the keys of two (or more) arrays, and return an array that contains the entries from array1 that are not present in array2 or array3, etc.
>array_diff(array1, array2, *array3, ...*)
************************************************************************

### array_diff_uassoc() Function
As array_diff_assoc() but uses a user-defined function to 
compare the keys!

>array_diff_uassoc(array1, array2, *array3*, *...*, myfunction)
************************************************************************

### array_diff_ukey() Function
As array_diff_key() but uses a user-defined function to 
compare the keys!

>array_diff_ukey(array1, array2, *array3*, ..., myfunction)
************************************************************************

### array_filter() Function
Filters the values of an array using a callback function.
If the callback function returns true, the current value from input is 
returned into the result array. Array keys are preserved.

>array_filter(array, *callbackfunction*, *flag*)

    flag:
    ARRAY_FILTER_USE_KEY - pass key as the only argument to callback (instead of the value)
    ARRAY_FILTER_USE_BOTH - pass both value and key as arguments to callback (instead of the value)
************************************************************************

### array_flip() Function
The array_flip() function flips/exchanges all keys with their associated values in an array.

>array_flip(array)
************************************************************************

### array_intersect() Function
This function compares the values of two or more arrays, and return an array that contains the entries from array1 that are present in array2, array3, etc.
>array_intersect(array1, array2, *array3*, *...*)

    $a1=array("a"=>"red","b"=>"green","c"=>"blue","d"=>"yellow");
    $a2=array("e"=>"red","f"=>"black","g"=>"purple");
    $a3=array("a"=>"red","b"=>"black","h"=>"yellow");

    $result=array_intersect($a1,$a2,$a3);
    print_r($result);

    >> Array ( [a] => red )

**array_intersect_assoc()** Compare the keys and values of two arrays or more, & return the matches

**array_intersect_key()** &nbsp;&nbsp;&nbsp;&nbsp;Compare the keys of two arrays or more, & return the matches

**array_intersect_uassoc()** As array_intersect_assoc() but using a user-defined key comparison function

**array_intersect_ukey()** As array_intersect_key() but using a user-defined key comparison function
************************************************************************

### array_key_exists() Function
Checks an array for a specified key, and returns true if the key exists and false if the key does not exist

>array_key_exists(key, array)
************************************************************************

### array_keys() Function
The array_keys() function returns an array containing the keys.

>array_keys(array, *value*, *strict*)

    value:  You can specify a value, then only the keys with this value 
            are returned

    strict: false - Default value.  5 same as "5"
            true -  5 not same as "5"
************************************************************************

### array_map() Function
Sends each value of an array to a user-made function, and returns an array with new values, given by the user-made function.

Tip: You can assign one array to the function, or as many as you like.

>array_map(myfunction, array1, *array2*, *array3*, *...*)

    function myfunction($v1,$v2) {
        if ($v1===$v2) return "same";
        return "different";
    }

    $a1=array("Horse","Dog","Cat");
    $a2=array("Cow","Dog","Rat");

    print_r(array_map("myfunction",$a1,$a2));

    >> Array ( [0] => different [1] => same [2] => different )

************************************************************************

### array_merge() Function
The array_merge() function merges one or more arrays into one array.
Note: 

>array_merge(array1, *array2*, *array3*, *...*)

    $a1=array("a"=>"red","b"=>"green");
    $a2=array("c"=>"blue","b"=>"yellow");
    print_r(array_merge($a1,$a2));

    >> Array ( [a] => red [b] => yellow [c] => blue )


    $a=array(3=>"red",4=>"green");
    print_r(array_merge($a));

    >> Array ( [0] => red [1] => green )
************************************************************************

### array_merge_recursive() Function
The difference from array_merge() function is when two or more array elements have the same key. Instead of override the keys, the array_merge_recursive() function makes the value as an array.

>array_merge(array1, *array2*, *array3*, *...*)

    $a1=array("a"=>"red","b"=>"green");
    $a2=array("c"=>"blue","b"=>"yellow");
    print_r(array_merge($a1,$a2));

    >> Array (  [a] => red 
                [b] => Array ( [0] => green [1] => yellow ) 
                [c] => blue )



************************************************************************
************************************************************************



### array_pad() Function
Inserts a specified number of elements, with a specified value, to an array.
If you assign a negative size parameter, the function will insert new elements BEFORE the original elements
This function will not delete any elements if the size parameter is less than the size of the original array.
>array_pad(array, size, value)
    
    $a=array("red","green");
    print_r(array_pad($a,-5,"blue"));

    >> Array ( [0] => blue [1] => blue [2] => blue [3] => red [4] => green )
************************************************************************

### array_slice() Function
Returns selected parts of an array.
If the array have string keys, the returned array will always preserve the keys
>array_slice(array, start, *length*, *preserve*)   
************************************************************************

### array_splice() Function
Removes selected elements from an array and replaces it with new elements. The function also returns an array with the removed elements.
If the function does not remove any elements (length=0), the replaced array will be inserted from the position of the start parameter.
The keys in the replaced array are not preserved.
>array_splice(array, start, *length*, *array*)   
************************************************************************

### array_values() Function
Returns an array containing all the values of an array.
The returned array will have numeric keys, starting at 0 and increase by 1.
>array_values(array) 
************************************************************************

### count() Function
Returns the number of elements in an array.
>count(array, *mode*)

Optional. Specifies the mode. Possible values:
0 - Default. Does not count all elements of multidimensional arrays
1 - Counts the array recursively (counts all the elements of multidimensional arrays)
************************************************************************

### compact() Function
Creates an array from variables and their values.
Any strings that does not match variable names will be skipped.
>compact(var1, *var2*...)

```.php
$firstname = "Peter";
$lastname = "Griffin";
$age = "41";

$name = array("firstname", "lastname");
$result = compact($name, "location", "age");

print_r($result);

>> Array ( [firstname] => Peter [lastname] => Griffin [age] => 41 )
```
************************************************************************

### extract() Function
Creates local variables from an array.
>extract(array,* extract_rules*, *prefix*)

```.txt
extract_rules:
EXTR_OVERWRITE - Default. On collision, the existing variable is overwritten
EXTR_SKIP - On collision, the existing variable is not overwritten
EXTR_PREFIX_SAME - On collision, the variable name will be given a prefix
EXTR_PREFIX_ALL - All variable names will be given a prefix
EXTR_PREFIX_INVALID - Only invalid or numeric variable names will be given a prefix
EXTR_IF_EXISTS - Only overwrite existing variables in the current symbol table, otherwise do nothing
EXTR_PREFIX_IF_EXISTS - Only add prefix to variables if the same variable exists in the current symbol table
EXTR_REFS - Extracts variables as references. The imported variables are still referencing the values of the array parameter
```
************************************************************************

### list() Function
Is used to assign values to a list of variables in one operation.
>list(var1, *var2*, ...)

    $my_array = array("Dog","Cat","Horse");

    list($a, , $c) = $my_array;
    echo "{$a}  {$c}";

    >> Dog Horse
************************************************************************

### range() Function
The range() function creates an array containing a range of elements.
This function returns an array of elements from low to high.
If the low parameter is higher than the high parameter, the range array will be from high to low.
>range(low, high, *step*)
************************************************************************

### sizeof() Function
Returns the number of elements in an array. Alias of the count()
>sizeof(array, *mode*)
echo current($people) . "<br>";


### array_replace() Function
>array_replace(array1, *array2*, *array3*, ...)



## Iterator Functions
current() - returns the value of the current element in an array
end() - moves the internal pointer to, and outputs, the last element in the array
next() - moves the internal pointer to, and outputs, the next element in the array
prev() - moves the internal pointer to, and outputs, the previous element in the array
reset() - moves the internal pointer to the first element of the array
each() - returns the current element key and value, and moves the internal pointer forward

```.php
$people = array("Peter", "Joe", "Glenn", "Cleveland");

echo current($people) . "<br>";
echo next($people)    . "<br>";
echo current($people) . "<br>";
echo end($people)     . "<br>";
echo prev($people)    . "<br>";
echo reset($people)   . "<br>";
echo key($people)     . "<br>";

>> Peter
>> Joe
>> Joe
>> Cleveland
>> Glenn
>> Peter
>> 0
```



