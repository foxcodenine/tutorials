FROM composer:2.3.10
 
WORKDIR /linux/var/www/html/laravel-app
 
ENTRYPOINT [ "composer", "--ignore-platform-reqs" ]