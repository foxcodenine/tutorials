
### note the following is not tested if works, better to follow the pdf guids

1. Install, check and enable, mod_geoIp on Ubuntu

        $ apt-cache search mod-geoip

        $ sudo apt install libapache2-mod-geoip

        $ ls /etc/apache2/mods-enabled | grep geoip

        $ sudo a2enmod geoip

2. Edit its config file

        $ sudo vi /etc/apache2/mods-available/geoip.conf

        <IfModule mod_geoip.c>
            GeoIPEnable On
            GeoIPDBFile /usr/share/GeoIP/GeoIP.dat
        </IfModule>


2. Add the following domane to '/etc/hosts' for testing:

        127.0.0.1 my_server14.com




3. Virtual Host Configuration

Create the following config file '/etc/apache2/site-avalable/geo_ip.conf'
And add the following:

<VirtualHost *:80>

    ServerName my_server14.com
    ServerAdmin admin@my_server14.com
    DocumentRoot "/var/www/html/my_server/geoip"
    ErrorLog /var/log/my_server_14_websites-error_log
    CustomLog /var/log/my_server_14_websites-access_log commom

    <Location />
        SetEnvIf GEOIP_COUNTRY_CODE CN BlockCountry
        SetEnvIf GEOIP_COUNTRY_CODE IN BlockCountry
        Deny from env=BlockCountry
    </Location>

</VirtualHost>

And enable site:

    $ a2ensite geo_ip.conf

4. Create the following "index.php" file in "/var/www/html/my_server/geoip"
   With the following content:

        <html>
            <body>
                <?php
                    $country_name = apache_note("GEOIP_COUNTRY_NAME");
                    print "Country: " . $country_name;
                ?>
            </body>
        </html>

