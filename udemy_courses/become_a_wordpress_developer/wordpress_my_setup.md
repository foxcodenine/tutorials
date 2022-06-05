### 0 online instractions at (however best to follow mine):
    https://ubuntu.com/tutorials/install-and-configure-wordpress#1-overview
    https://www.digitalocean.com/community/tutorials/how-to-install-wordpress-on-ubuntu-22-04-with-a-lamp-stack#introduction

### 1 Setup Hostname with Port or Internet Protocol (IP) address

    $ sudo vi /etc/hosts

Add you hostname to a local ip / port ex:

    127.0.0.2         localwp-001

or

    127.0.0.1:8080    localwp-001


### 2 Setup apache virtualhost


    $ cd /etc/apache2/sites-available

    $ sudo vi  localwp-001.conf

        <VirtualHost *:80>
            ServerName localwp-001
            DocumentRoot /var/www/wordpress/001-Fictional_University
            <Directory /var/www/wordpress/001-Fictional_University>
                Options FollowSymLinks
                AllowOverride Limit Options FileInfo
                DirectoryIndex index.php
                Require all granted
            </Directory>
            <Directory /var/www/wordpress/001-Fictional_University/wp-content>
                Options FollowSymLinks
                Require all granted
            </Directory>
        </VirtualHost>

    
Note:       'ServerName'                  updated to your hostname
            'DocumentRoot' & 'Directory'  updated to your dir


### 3 Check config syntex, Enable the site and URL rewriting and reload apache

    $ sudo apache2ctl configtest

    $ sudo a2enmod rewrite

    $ sudo a2ensite localwp-001.conf

    $ sudo systemctl reload apache2

If you need to disable a site:

    $ sudo a2dissite localwp-001.conf


### 4 Install Dependencies


If php is already installed and need to check installed extentions do:

    $ php -m
    # or
    $ php -m | grep extention_name


To check for install packages on ubuntu do:

    $dpkg -l packagename
    # Ex:
    $ dpkg -l ghostscript
    $ dpkg -l libapache2-mod-php


Required / (install) dependencies for wordpress:

    $ sudo apt update
    $ sudo apt install apache2 
            \\         ghostscript 
            \\         libapache2-mod-php 
            \\         mysql-server 
            \\         php 
            \\         php-bcmath 
            \\         php-curl 
            \\         php-imagick 
            \\         php-intl 
            \\         php-json 
            \\         php-mbstring 
            \\         php-mysql 
            \\         php-xml 
            \\         php-zip

    # Ex, I needed to do:

    $ sudo apt install php8.1-bcmath
    $ sudo apt install php8.1-imagick


### 5 Creating a MySQL Database and User for WordPress

Log to mysql with root or an admin user:

    mysql> CREATE DATABASE wp001_fictional_university DEFAULT CHARACTER SET utf8 COLLATE utf8_unicode_ci;

    mysql> CREATE USER 'swallow'@'localhost' IDENTIFIED WITH mysql_native_password BY '**********';

    maysl> GRANT ALL ON wp001_fictional_university.* TO 'swallow'@'localhost';

    mysql> FLUSH PRIVILEGES;

    mysql> EXIT;


### 6 Downloading WordPress

    $ cd /tmp

    $ curl -O https://wordpress.org/latest.tar.gz

    $ tar xzvf latest.tar.gz

    $ touch /tmp/wordpress/.htaccess

    $ cp /tmp/wordpress/wp-config-sample.php /tmp/wordpress/wp-config.php

    $ mkdir /tmp/wordpress/wp-content/upgrade

set group and permisions: 
( note I had already added both apache and ubuntu users  to foxdata group 
so now I am changing dir group to foxdata and add set-group-ID permision)

    $ sudo chgrp -R foxdata wordpress/

    $ find ./wordpress -type d -print0 -exec chmod g+sw {} \;

    $ find ./wordpress -type f -print0 -exec chmod g+w {} \;


I'm moving dir from /tmp to /var/www/wordpress
( I'm saveing it as a template for other project - and create a cp from it )

    $ sudo mv /tmp/wordpress /var/www/wordpress/000-template
    $ cd /var/www/wordpress
    $ cp -ar 000-template 001-Fictional_University


### 7 Setting Up the WordPress Configuration File

 Grab secure values from the WordPress secret key generator (salt), by running:

    $ curl -s https://api.wordpress.org/secret-key/1.1/salt/

Open the WordPress configuration file and update accordingly:

    $ vi wp-config.php

    Ex: define('AUTH_KEY',  'MH%nPE2***********************-dq.F{z);-');


Update database_name database_username and database_password

    /** The name of the database for WordPress */
    define( 'DB_NAME', 'wp001_fictional_university' );

    /** MySQL database username */
    define( 'DB_USER', 'swallow' );

    /** MySQL database password */
    define( 'DB_PASSWORD', '*******' );


If when createing the user you set it at localhost, leave it as it is ('swallow'@'localhost')

    /** MySQL hostname */
    define( 'DB_HOST', 'localhost' );
    

And finally set the 'FTP Credentials' by adding the following to the end of the file


    define('FS_METHOD', 'direct');


### 8 Completing the Installation Through the Web Interface

In your web browser, navigate to your server’s domain name or public IP address:

    http://localwp-001/

You will be prompted to select the language.

Next, you will come to the main setup page.
Select a name for your WordPress site and choose a username and a password.

Enter your email address and select whether you want to discourage search engines from indexing your site.

When you click ahead, you will be taken to a page that prompts you to log in.

Once you log in, you will be taken to the WordPress administration dashboard

At this point, you can begin to design your WordPress website.



### Increase Maximum Upload File Size in WordPress

Edit .htaccess file

    php_value upload_max_filesize 128M
    php_value post_max_size 128M
    php_value memory_limit 256M
    php_value max_execution_time 300
    php_value max_input_time 300

or Edit wp-config.php file

    @ini_set( 'upload_max_filesize' , '128M' );
    @ini_set( 'post_max_size', '128M');
    @ini_set( 'memory_limit', '256M' );
    @ini_set( 'max_execution_time', '300' );
    @ini_set( 'max_input_time', '300' );