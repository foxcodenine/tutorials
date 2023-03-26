
### Configurate a website with HTTPS 

1. Enable mod_ssl

        $ sudo a2enmod ssl 
        $ sudo systemctl restart apache2

2. Add 'ssl_mod_ssl.conf' to '/etc/apache/sites-avalable'. Enable site
   and reload apache.
   