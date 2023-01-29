FROM php:7.2.24-fpm
 
WORKDIR /var/www/iot_solutions

COPY src .

# Changing working directory permissions
# RUN chown -R www-data:www-data /var/www/iot_solutions

# Install mysql extentions
# RUN docker-php-ext-install pdo pdo_mysql 

# Install Composer
RUN curl -sS https://getcomposer.org/installer | php -- --install-dir=/usr/local/bin --filename=composer

# Install other required extentions
RUN set -eux; apt-get update; apt-get install -y libzip-dev zlib1g-dev; docker-php-ext-install zip

# Install vi
RUN ["apt-get", "update"]
RUN ["apt-get", "install", "-y", "vim"]

# Install other required extentions
RUN apt-get install -y libpq-dev \
    && docker-php-ext-configure pgsql -with-pgsql=/usr/local/pgsql \
    && docker-php-ext-install pdo pdo_pgsql pgsql

# Installing Composer packages
RUN cd /var/www/iot_solutions/laravel_app; composer install;