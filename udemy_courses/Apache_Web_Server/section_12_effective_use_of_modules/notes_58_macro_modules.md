
1. Add the following domane to '/etc/hosts' for testing:

        
        127.0.0.1 my_server15.com
        127.0.0.1 my_server16.com
        127.0.0.1 my_server17.com


2. Enable mod_macro:

        $ sudo a2enmod macro 
        $ sudo systemctl restart apache2

3. Copy 'macro.conf' to '/etc/apache2/site-avalable' and enable.

4. Create the directories listed in 'macro.conf' each with an 'index.html' file.

        $ sudo mkdir -p /var/www/html/my_server/{my_server15,my_server16,my_server17}
        $ sudo vi  /var/www/html/my_server/{my_server15,my_server16,my_server17}/index.html

5. Visti my_server15.com, my_server16.com and my_server17.com