### heredoc
    $string = <<< EndReport
    plain text and now a function: 
    $variable_interpolation
    EndReport;
##

### nowdoc
    $string = <<< 'EndReport'
    plain text and now a function: 
    $no_variable_interpolation
    'EndReport';
##

### explode() Function
explode(separator, string, *limit*)
##

### implode() Function
implode(*separator*, array)
##

### parse_str() Function
parse_str(string, *array*)
##

### print() Function
print(strings)
##

### printf() Function
printf(format, arg1, *arg2*, *arg++*)

### str_replace() Function
 str_replace(find, replace, string, *count*)
##

### str_split() Function
 str_split(string, *length*)
##

### strlen() Function
strlen(string)
##

### trim() Function, rtrim() Function & ltrim() Function
trim(string, *charlist*)