

1. Install 'mod_evasive' and enable it

        $ sudo apt update
        $ sudo apt install apache2 apache2-utils
        $ sudo apt-get install libapache2-mod-evasive

verify whether the mod_evasive module is enabled

        $ apachectl -M | grep evasive

2. Configure mod_evasive

The default configuration file of mod_evasive is located at
/etc/apache2/mods-enabled/evasive.conf. You will need to configure this
file per your requirements.

You can open this file using the nano editor as shown below:

        $ sudo vi /etc/apache2/mods-enabled/evasive.conf

Change the file as shown below.

    <IfModule mod_evasive20.c>
        DOSHashTableSize    3097
        DOSPageCount        2
        DOSSiteCount        50
        DOSPageInterval     1
        DOSSiteInterval     1
        DOSBlockingPeriod   10

        DOSEmailNotify      you@yourdomain.com
        DOSSystemCommand    "su - someuser -c '/sbin/... %s ...'"
        DOSLogDir           "/var/log/mod_evasive"
    </IfModule>

Next, create a directory to store the mod_evasive log and change its
ownership to www-data with the following command:


        $ sudo mkdir /var/log/mod_evasive
        $ sudo chown -R www-data:www-data /var/log/mod_evasive

And reload apache

        $ sudo systemctl restart apache2

3. Test mod_evasive

        $ ab -n 1000 -c 20 http://my_server3.com/

        $ sudo tail -15 /var/mail/www-data 

                Date: Sun, 26 Mar 2023 14:26:28 +0200 (CEST)
                From: www-data <www-data@lubuntu-virtualbox>

                To: you@yourdomain.com
                Subject: HTTP BLACKLIST 127.0.0.1

                mod_evasive HTTP Blacklisted 127.0.0.1

                --18AD8E02FC.1679833588/lubuntu-virtualbox--
