
#### phpdotenv
https://github.com/vlucas/phpdotenv

    $ composer require vlucas/phpdotenv
    $ composer dump-autoload -o

#### ramsey/uuid
https://packagist.org/packages/ramsey/uuid

    $ composer require ramsey/uuid
    $ composer dump-autoload -o



#### Accessing Incoming PUT Data from PHP
https://lornajane.net/posts/2008/accessing-incoming-put-data-from-php

parse_str(file_get_contents("php://input"),$post_vars);



#### PHP __get and __set magic methods
https://stackoverflow.com/questions/4713680/php-get-and-set-magic-methods

    class foo {

        public $bar;
        public function __get($name) {

            echo "Get:$name";
            return $this->$name;
        }

        public function __set($name, $value) {

            echo "Set:$name to $value";
            $this->$name = $value;
        }
    }

user_key  = keycTM7gqkDa7XJLdbRoIT70kFzbpEwubejo34eKKGqtjY=
admin_key = keyVBeiaUvaq6UrUShwIr5MRK1FSe8eq+Zya+mogRt5OBI=

http://localhost/ice_malta/php/lesson_12/keynuYnR8DflXzR2MW+fJkMJVjfocSPzJtHBHUpcPAhGyI=/api/student    
http://localhost/ice_malta/php/lesson_12/keyhsjZG/k2QGQQsR0GdcmNWkE6AdD1paOOwd7locx57jQ=/api/student    



http://localhost/ice_malta/php/lesson_12/keyVBeiaUvaq6UrUShwIr5MRK1FSe8eq+Zya+mogRt5OBI=/api/student    
http://localhost/ice_malta/php/lesson_12/keyVBeiaUvaq6UrUShwIr5MRK1FSe8eq+Zya+mogRt5OBI=/api/student    


