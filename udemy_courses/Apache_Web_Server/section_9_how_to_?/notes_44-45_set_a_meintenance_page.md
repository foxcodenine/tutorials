


1. Add a new domaine for testing:

        $ sudo echo '127.0.0.1  my_server12.com' >> /etc/hosts

2. Enable mod_rewite:

        $ sudo a2enmod rewrite 

3. Create a new directory 'custom_errors' in '/var/www/html/my_server'
   and create 'maintenance.html' and 'not_found.html' under above directory.
   (You can copy the provided 'custom_errors' dir)