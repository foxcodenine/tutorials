### CGI script testing

1. Add a new domaine for testing:

        $ sudo echo '127.0.0.1  my_server11.com' >> /etc/hosts


2. Enable mod_cgi:

        $ sudo a2enmod cgi


if you recive 'Your MPM seems to be threaded. Selecting cgid instead of cgi.' 
do:

        $ sudo a2enmod cgid

3. Add 'cgi_script.conf' to '/etc/apache/sites-avalable', 
   enable site and reload apache:

        $ sudo a2ensite cgi_script.conf
        $ systemctl reload apache2.service