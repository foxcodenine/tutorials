### Install Composer 

    https://getcomposer.org/

    to install Composer version 2.0.8 2020-12-03:

        $ cd ~
        $ curl -sS https://getcomposer.org/installer -o composer-setup.php
        $ sudo php composer-setup.php --install-dir=/usr/local/bin --filename=composer


### Check version and commands list

    $ composer --version

    $ composer

### Composer packages site:

    https://packagist.org/


### To install a package:

    Search from the above site example I'm looking for a dotenv package

    Found vlucas/phpdotenv, to install

        $ composer require vlucas/phpdotenv

### To insert the packages to your php file 

                                                               index.php

    <?php

    require_once("vendor/autoloader.php")
    
    
    ?>


