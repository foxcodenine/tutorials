
1. First I have create a aws cloude server, 
   connect with ssh, upgrade and install apache
   and though namecheap pointed the following domains to its ip addr

        chrisfarrugia.dev
        www.chrisfarrugia.dev

2. Add a VirtualHost configuration 'chrisfarrugia.dev' with the following 
   in '/etc/apache/site-avalable'.

           
        <VirtualHost *:80>

                ServerName chrisfarrugia.dev
                ServerAlias www.chrisfarrugia.dev
                ServerAdmin admin@chrisfarrugia.dev

                DocumentRoot "/var/www/html/test"

                ErrorLog /var/log/apache-error_log
                CustomLog /var/log/apache-access_log commom

                <Directory "/var/www/html">
                        Require all granted
                </Directory>
                
        </VirtualHost>


3. Check if vhost syntex is corrent, enable it and reload apache:

        $ sudo apache2ctl configtest
        $ sudo a2ensite chrisfarrugia.dev.conf
        $ sudo systemctl reload apache2.service


4. Enable mod_ssl (install if not avalable):

        $ sudo a2enmod ssl

5. Install Cerbot

        # debian based:
        $ sudo apt install certbot python3-certbot-apache

        # redhat based:
        $ dnf install epel-release certbot python-certbot-apache

6. Allowing HTTPS Through the Firewall

        $ sudo ufw status

To enable and allow ssh and apache 

        $ sudo ufw enable

        $ sudo ufw allow ssh        OR      $ sudo ufw allow 22/tcp

(To additionally let in HTTPS traffic, allow the “Apache Full” profile and delete the redundant)

        $ sudo ufw allow 'Apache Full'
        $ sudo ufw delete allow 'Apache'

        $ sudo ufw status

7. Obtaining an SSL Certificate

        $ sudo certbot --apache

            >   Enter email address (used for urgent renewal and security notices)
            :   chris12aug@yahoo.com
            >   You must agree in order to register with the ACME server. Do you agree?
            :   Yes
            >   Share your email address with the Electronic Frontier Foundation?
            :   Yes
            >   Select the appropriate numbers separated by commas and/or spaces.
            :   1,2,3

8. Verifying Certbot Auto-Renewal

To check the status of this service and make sure it’s active and running, you can use:

        $ sudo systemctl status certbot.timer

To test the renewal process, you can do a dry run with certbot :

        $ sudo certbot renew --dry-run

If you see no errors, you’re all set.