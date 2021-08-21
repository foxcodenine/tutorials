
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
 


