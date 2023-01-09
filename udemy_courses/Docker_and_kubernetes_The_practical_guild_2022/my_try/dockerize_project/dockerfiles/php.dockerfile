FROM php:7.2.5-apache
 
WORKDIR /var/www/html/iot_eol

# Install mysql extentions
RUN docker-php-ext-install pdo pdo_mysql 

# Install Composer
RUN curl -sS https://getcomposer.org/installer | php -- --install-dir=/usr/local/bin --filename=composer

# Install other required extentions
RUN set -eux; apt-get update; apt-get install -y libzip-dev zlib1g-dev; docker-php-ext-install zip





