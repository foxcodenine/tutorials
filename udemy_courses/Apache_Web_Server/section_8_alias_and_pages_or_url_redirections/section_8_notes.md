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


### Use Rewrite 

First enable rewrite_mod by  running:

    $ sudo a2enmod rewrite
    $ sudo systemctl reload apache2.service

Copy 'rewite.conf' to '/etc/apache/sites-avalable'
Take note of the 'Rewrite' directives in the conf file.

In '/var/www/html' create the my_server dir with the specified html's
I only added the following in the html's

    <h3>You are on Firefox browser</h3>
    <h3>You are on Chrome browser</h3>

Enable the config with 'a2ensite' and test it out.

Also note the 'L' and 'R' flags:

L|last      The [L] flag causes mod_rewrite to stop processing the rule set. In
            most contexts, this means that if the rule matches, no further rules
            will be processed. This corresponds to the last command in Perl, or
            the break command in C. Use this flag to indicate that the current
            rule should be applied immediately without considering further rules.

R|redirect  When the requested URI contains a query string, and the target URI
            does not, the default behavior of RewriteRule is to copy that query
            string to the target URI. Using the [QSD] flag causes the query
            string to be discarded.

You can find tother flages at: https://httpd.apache.org/docs/2.4/rewrite/flags.html


