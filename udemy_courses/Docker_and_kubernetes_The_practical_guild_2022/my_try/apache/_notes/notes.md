### apache

virtualhost - in /etc/apache2/sites-available/000-default.conf appended the following:
    
    LoadModule deflate_module /usr/lib/apache2/modules/mod_deflate.so
    LoadModule proxy_module /usr/lib/apache2/modules/mod_proxy.so
    LoadModule proxy_fcgi_module /usr/lib/apache2/modules/mod_proxy_fcgi.so

    <VirtualHost *:80>
        ServerName localhost

        ProxyPassMatch ^/(.*\.php(/.*)?)$ fcgi://php:9000/var/www/html/$1

        DocumentRoot /var/www/html

        <Directory /var/www/html>
            Options -Indexes +FollowSymLinks
            DirectoryIndex index.php
            AllowOverride All
            Require all granted
        </Directory>
    </VirtualHost>

mods - in usr/lib/apache2/modules/ added 'mod_proxy.so' (copied from my pc)
