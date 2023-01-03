FROM php:8.1-fpm
 
WORKDIR /var/www/html/laravel-app

RUN docker-php-ext-install pdo pdo_mysql