1) install redis, following instraction in 20-cash.md
2) update permition of storage folder, all file need written permition
3) update symbolic link  from public folder to storage
4) update .env file 'APP_URL', 'DB_DATABASE'
5) update .htaccess
6) update apache virtualhost
7) if you are using a different php version on your server (ex project build in 8.1, server 8.0) 
   you might need to do the following:
    a) comment out the following 3 lines in "~/.composer/vendor/composer/platform_check.php":
        if (!(PHP_VERSION_ID >= 70300)) {
            $issues[] = 'Your Composer dependencies require a PHP version ">= 7.3.0". You are running ' . PHP_VERSION . '.';
        }
    b) in vendor the file in "vendor/symfony/css-selector/XPath/Extension" did not work with php8.0
       you need to replace the with the one you have in _deployment directory.
    c) also password hash that is generated when doing db:facade do not match when login-in,
       I created a new account manually and update the other accounts password
       mysql> use project_012; update users set password='$2y$10$NlpoQda.fB/Q4znCe0g8G.NUG.owSXcYi9iFAQ6iOYdUnw9Ok97mW';
       
        

### Systemd - apached and redis

https://www.digitalocean.com/community/tutorials/how-to-use-systemctl-to-manage-systemd-services-and-units

### daemon.service - Background Processes

https://freshman.tech/snippets/linux/auto-restart-systemd-service/

### clear cache

    $ php artisan config:cache
    $ php artisan optimize:clear