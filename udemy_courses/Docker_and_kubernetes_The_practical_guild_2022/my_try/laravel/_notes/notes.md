### apache

virtualhost - in /etc/apache2/sites-available/000-default.conf appended the following:
    
    LoadModule deflate_module /usr/lib/apache2/modules/mod_deflate.so
    LoadModule proxy_module /usr/lib/apache2/modules/mod_proxy.so
    LoadModule proxy_fcgi_module /usr/lib/apache2/modules/mod_proxy_fcgi.so

    <VirtualHost *:80>
        ServerName localhost
        
        ProxyPassMatch ^/(.*\.php(/.*)?)$ fcgi://php:9000/var/www/html/laravel-app/public/$1

        DocumentRoot /var/www/html/laravel-app/public

        <Directory /var/www/html/laravel-app/public>
            # Options -Indexes +FollowSymLinks
            # DirectoryIndex index.php
            # AllowOverride All
            # Require all granted
            Options Indexes FollowSymLinks MultiViews
            AllowOverride All
            Require all granted

            DirectoryIndex index.php
            FallbackResource /index.php
        </Directory>
    </VirtualHost>

mods - in usr/lib/apache2/modules/ added 'mod_proxy.so' (copied from my pc)
