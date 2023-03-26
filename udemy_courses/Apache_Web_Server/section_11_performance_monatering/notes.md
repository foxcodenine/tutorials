
1. Enabe mod_status:

        $ sudo a2enmod  status 


2. In the '/etc/apache2/mods-enabled' directory you should find 'status.conf'
   Read its content for better understanding


3. Check status

in bash run:

        $ apachectl status

or visit:

    localhost/server-status   or   your-domain.com/server-status


   
4. if you get 'Apache2 fails because of www-browser'
 
 If checking Apache status with a script or other command-line method, 
 you need a text-based browser to be installed. 
 The w3m package is a decent tool for this. To install it:

    Update apt if it's not already up to date:
            $ sudo apt update 

    Install w3m:
            $ sudo apt install w3m

    Restart Apache:
            $ sudo service apache2 restart