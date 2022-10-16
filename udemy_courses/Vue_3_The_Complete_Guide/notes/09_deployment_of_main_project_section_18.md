/etc/apache2/sites-avalable/your-virtual-host-fil.conf

    <VirtualHost *:80>
        DocumentRoot "/var/www/projects/Vue/section_18/main-project-278/dist"
        ServerName vuejs.project.local

        Alias /sub-directory  /var/www/projects/Vue/section_18/main-project-278/dist
        <Directory /var/www/projects/Vue/section_18/main-project-278/dist>
            Options Indexes FollowSymLinks MultiViews
            AllowOverride all
            Require all granted
            Order allow,deny
            allow from all

            <IfModule mod_rewrite.c>
                RewriteEngine On
                RewriteBase /
                RewriteRule ^index\.html$ - [L]
                RewriteCond %{REQUEST_FILENAME} !-f
                RewriteCond %{REQUEST_FILENAME} !-d
                RewriteRule . /index.html [L]
            </IfModule>
        </Directory>
    </VirtualHost>


note: since we have used 'Alias /sub-directory' routes path should be:

    { name: 'index', path : '/sub-directory/', redirect: '/sub-directory/coaches' },        
    { name: 'coaches', path : '/sub-directory/coaches',  component : CoachesList },


note: and also publicPath in the vue.config.js

    const path = require("path");    

    const { defineConfig } = require('@vue/cli-service')
    module.exports = defineConfig({
    transpileDependencies: true,

    // -- this will set the output directory
    outputDir: path.resolve(__dirname, "./dist"),

    // -- this will set the root url address
    publicPath: '/sub-directory/'  
    
    })

note: also,  since we are using vuejs.project.local as server name 
we had to set it up in the /etc/hosts file:

    127.0.1.2       vuejs.project.local

