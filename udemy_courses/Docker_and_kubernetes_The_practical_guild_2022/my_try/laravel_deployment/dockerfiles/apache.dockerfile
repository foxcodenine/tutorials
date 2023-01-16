FROM ubuntu/apache2:2.4-22.04_beta

WORKDIR /var/www/html

COPY apache_files/virtual-host-80 /etc/apache2/sites-available
COPY apache_files/mod_deflate.so /usr/lib/apache2/modules
COPY apache_files/mod_proxy.so /usr/lib/apache2/modules
COPY apache_files/mod_proxy_fcgi.so /usr/lib/apache2/modules
COPY src .

RUN mv /etc/apache2/sites-available/virtual-host-80  /etc/apache2/sites-available/000-default.conf

RUN ls /var/www/html
