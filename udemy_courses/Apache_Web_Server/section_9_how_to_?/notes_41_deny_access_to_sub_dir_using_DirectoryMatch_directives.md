#### Deny access to specific sub-directories using DirectoryMatch directives

Add a new domaine for testing:

    $ sudo echo '127.0.0.1  my_server10.com' >> /etc/hosts


Create the following sub-directories for testing:

    $ sudo mkdir -p /var/www/html/my_server/directorymatch/{Orland,singapur,tokyo,Delhi,Elan}


Add 'directory_match_denied.conf' to '/etc/apache/site-avalable' 
and enable site as we already did.
    