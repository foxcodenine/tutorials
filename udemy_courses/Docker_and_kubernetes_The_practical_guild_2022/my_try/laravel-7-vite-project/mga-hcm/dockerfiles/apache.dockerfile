FROM ubuntu/apache2:2.4-22.04_beta

RUN mkdir -p /var/www/iot_solutions

WORKDIR /var/www/iot_solutions

# COPY config_files/apache/mods/mod_deflate.so      /usr/lib/apache2/modules
# COPY config_files/apache/mods/mod_proxy.so       /usr/lib/apache2/modules
# COPY config_files/apache/mods/mod_proxy_fcgi.so  /usr/lib/apache2/modules

COPY config_files/apache/000-default.conf /etc/apache2/sites-available

COPY src .