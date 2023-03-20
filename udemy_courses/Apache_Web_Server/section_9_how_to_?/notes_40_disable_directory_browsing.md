#### Stop directory browsing on Apache

Add a new domane for test 

    $ sudo echo '127.0.0.1  my_server9.com' >> /etc/hosts

Add 'notes_40_disable_directory_browsing.md' to 'site-avalable' dir and enable site as we did already.

Reload apache,  and test by comment out and in the following lines:

        Options -Indexes
        # Options Indexes