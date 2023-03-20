#### Limit acsess to some IP/Network using mod_access_compat

Emable mod_access_compat:

    $ sudo a2enmod access_compat 
    $ sudo systemctl reload apache2.service

Create dir and index to test mod_access_compat

    sudo mkdir /var/www/html/my_server/access_testing
    sudo vi /var/www/html/my_server/access_testing/index.html

    shift+ctrl+v    <h1>This is the access testing page on Server3.com using mod_access_compat module.</h1>
    :wq

Add a new domane for test 

    $ sudo echo '127.0.0.1  my_server8.com' >> /etc/hosts

Add 'access_compat.conf' to '/etc/apache/site-avalable' 
and enable site:

    $ a2ensite access_compat.conf
    $ sudo systemctl reload apache2.service

Test by comment out & in '# Allow from 127.0.0.1' and reload apache.

