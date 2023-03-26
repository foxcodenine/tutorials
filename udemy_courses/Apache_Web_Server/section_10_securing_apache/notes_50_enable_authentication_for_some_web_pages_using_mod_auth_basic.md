
0. Install the Apache Utilities Package

        $ sudo apt-get update 
        $ sudo apt-get install apache2 apache2-utils

1. Add the following domane to '/etc/hosts' for testing:

        127.0.0.1 my_server13.com

2. Enamble mod_auth_basic

        $ sudo a2enmod auth_basic

3. Create new directory 'basicauthtesting'  and 'index.html' under it:

        $ sudo mkdir /var/www/html/my_server/basicauthtesting

        $ sudo vi /var/www/html/my_server/basicauthtesting/index.html

            <h1> This is the authentication testing page on my_server13.com using mod_auth_basic module.</h1>


4. Create the Password File (change christoper to you username)

        $ sudo htpasswd -c /etc/apache2/.htpasswd christopher

        $ sudo htpasswd /etc/apache2/.htpasswd another_user

        $ cat /etc/apache2/.htpasswd

5. Add 'auth_basic.conf' to '/etc/apache/site-avalable', 
   enable and reload apache

        $ sudo a2ensite auth_basic.conf; 
        $ sudo systemctl reload apache2.service

6. Test URL by visiting:

        my_server13.com/basic_authy



