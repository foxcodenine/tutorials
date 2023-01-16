FROM php:8.1-fpm
 
WORKDIR /var/www/html/laravel-app

COPY src/laravel-app .

RUN docker-php-ext-install pdo pdo_mysql

RUN chown -R www-data:www-data /var/www/html/laravel-app

# ENTRYPOINT [ "php"]

