

1. Install Required Apache modules

        $ sudo a2enmod proxy
        $ sudo a2enmod proxy_http
        $ sudo a2enmod proxy_balancer
        $ sudo a2enmod lbmethod_byrequests


        $ sudo systemctl restart apache2.service

2. Setup html web pages for  and domaine testing

        $ sudo mkdir -p /var/www/html/my_server/loadbalancer/{server1,server2,server3}

In each dir create an 'index.html' file with:

        <h2>Server 1</h2>
        <h2>Server 2</h2>
        <h2>Server 3</h2>

add test domian:

    $ sudo vi echo '127.0.0.1 my_server18.com' >> /etc/hosts 

3. set the backend - (we are setting apache with 3 different ports)

    Copy 'loadbalancer_backend.conf' to '/etc/apache2/site-avalable'

        $ sudo a2ensite loadbalancer_backend.conf
        $ sudo systemctl reload apache2

    test localhost on port 8001, 8002 and 8003


4. Configure Apache Load Balancer

    Copy 'loadbalancer_proxy.conf' to '/etc/apache2/site-avalable'

        $ sudo a2ensite loadbalancer_proxy.conf
        $ sudo systemctl reload apache2

    test 'my_server18.com' by open multyple pages


