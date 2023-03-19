### Use Alias Directive 

Copy dir 'alias_page' to '/var/www/html' 
and 'alias_vhost.conf' to '/etc/apache/sites-avalable'

Check 'alias_vhost.conf' note 'alias' directive.

enable 'alias_mod' by:

    $ a2enmod alias
    $ systemctl reload apache2.service

enable 'alias_vhost.conf' by:

    $ a2ensite alias_vhost.conf
    $ systemctl reload apache2.service

### Use Redirect & ProxyPass Directive 

for this and next directive we add these domanes in /etc/hosts

    127.0.0.1  my_server3.com
    127.0.0.1  my_server4.com
    127.0.0.1  my_server5.com
    127.0.0.1  my_server6.com

and in '/var/www/html' added 'my_server_4_websites' and 
'my_server_6_websites' directories with a simple index file.

### Use Redirect

Copy 'redirect.conf' to '/etc/apache/sites-avalable'
Take note of the 'Redirect' directive in the conf file.
Enable site and reload apache.
    

### Use ProxyPath

Copy 'proxypass.conf' to '/etc/apache/sites-avalable'
Take note of the 'ProxyPass' directive in the conf file.

Enable 'proxy' and 'proxy_http':

    $ sudo a2enmod proxy
    $ sudo a2enmod proxy_html
    $ systemctl reload apache2.service

Enable site and reload apache.
