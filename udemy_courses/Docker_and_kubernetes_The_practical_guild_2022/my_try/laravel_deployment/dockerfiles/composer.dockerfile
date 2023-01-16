FROM composer:2.3.10
 
WORKDIR /var/www/html/laravel-app

# COPY src/laravel-app/composer.json .

# RUN ls
 
ENTRYPOINT [ "composer" ]