sudo ssh -i "deploy_web_apps.pem" ubuntu@ec2-54-93-189-85.eu-central-1.compute.amazonaws.com


sudo scp -i ./deploy_web_apps.pem -r /home/foxcodenine/Desktop/trava/frontend_nuxt/dist ubuntu@ec2-54-93-189-85.eu-central-1.compute.amazonaws.com:/var/www/projects/001_trava/


sudo scp -i ./deploy_web_apps.pem -r /home/foxcodenine/Desktop/trava/backend_flask_deploy ubuntu@ec2-54-93-189-85.eu-central-1.compute.amazonaws.com:/var/www/projects/001_trava/



<VirtualHost *:80>
        ServerName foxcode.io

        WSGIScriptAlias /api/001 /var/www/projects/001_trava/backend_flask_deploy/flaskapp.wsgi
        <Directory /var/www/projects/001_trava/backend_flask_deploy>
            Order allow,deny
            Allow from all
        </Directory>


    ErrorLog ${APACHE_LOG_DIR}/error.log
	LogLevel warn
	CustomLog ${APACHE_LOG_DIR}/access.log combined


</VirtualHost>