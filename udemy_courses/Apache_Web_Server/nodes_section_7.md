### 7 Hosting Multiple websites using VirualHost Directive of Core Module
Host multiple website on a single Apache

Type of hostings:

*   Domain base     Ex: server1.com      &    server2.com

*   IP base         Ex: 92.24.198.26     &    92.24.198.28

*   Port base       Ex: 92.24.198.28:80  &    92.24.198.28:81


#### Domain base 

Copy 'domain_base_vhost.conf' file to /etc/apache2/sites-available 
and in the '/var/www/html' add the rispective index.html as in 'domain_base_vhost.conf'

Check if apache is running:

    $ systemctl status apache2.service

In '/etc/hosts' add:

    127.0.0.1  my_server1.com
    127.0.0.1  my_server2.com

Run:

    $ a2ensite domain_base_vhost.conf
    $ sudo systemctl reload apache2

#### IP address base 

Copy 'ip_address_base_vhost.conf' file to /etc/apache2/sites-available
and re-run:

    $ a2ensite domain_base_vhost.conf
    $ sudo systemctl reload apache2