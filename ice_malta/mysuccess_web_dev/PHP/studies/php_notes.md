## PHP Lesson 4 notes.


### Inner functions:
1. inner functions should be an annonums functions.
2. they can be assigned to a variable else returned directly. 
3. to pass variables from outer to inner func the variables 
    needs to be declared with the keyword 'use'.
4. you must put a ; after the function's declaration. 

        function incrementByN($n) {

            $innerFunc = function ($i) use ($n){
                return $i + $n;
            };         
            return $innerFunc;
        }

5. to change value of variables declared in outer function from inner, 
   variable should be pass by reference and using the 'use' keyword

6. Recursive Inner Functions!!! 
   should also be pass by reference and using the 'use' keyword

        function fibRecursive($n) {
        
            if ($n < 1) { return "<span class='danger'>arg must be >= the 1</span>";}
            if ($n === 1) {return 1;}
            // _________________________

            $fibs = [1, 1];

            $inner = function() use ($n, &$fibs, &$inner) {
                if (count($fibs) >= $n) {
                    return end($fibs);
                } else {   
                    array_push($fibs , $fibs[count($fibs)-2] + $fibs[count($fibs)-1]);        
                    $inner();
                }            
            };
            $inner();
            return end($fibs);        
        }