
## Section 1: Introdoction

### Fedora Installations:

    $ sudo dnf install lynx  # Text based browser
    $ sudo dnf install vim
    $ sudo dnf install wget  # Text based downloader


### Ubuntu Installations:

    $ sudo apt install lynx  
    $ sudo apt install vim
    $ sudo apt install wget  


## Section 2: Apache Installation

Check ip address:

    $ ip addr       
    > inet 10.0.2.15/24 brd 10.0.2.255 scope global dynamic noprefixroute enp0s3

Check os system:

    $ cat /etc/*release


Install Apache on fedora:

    $ sudo dnf install httpd
    $ sudo dnf install httpd-devel

    $ sudo systemctl start  httpd.service
    $ sudo systemctl status httpd.service
    

Setting the firewall on fedora:

    $ sudo systemctl status firewalld.service

    $ sudo firewall-cmd --state

    $ sudo firewall-cmd --add-port=80/tcp --permanent
    $ sudo firewall-cmd --add-port=80/udp --permanent

    $ sudo firewall-cmd --reload


Install Apache on ubuntu:

    $ sudo apy install apache2

    $ sudo systemctl enable apache2
    $ sudo systemctl status apache2

    $ ip addr
    > inet 127.0.0.1/8 scope host lo
    > inet 10.0.2.15/24 brd 10.0.2.255 scope global dynamic noprefixroute enp0s3

Check for firewall on ubuntu:

    $ sudo ufw status


## Section 3: Directory Structure

Fedora:

    $ ls /etc/httpd/
    > conf  conf.d  conf.modules.d  logs  modules  run  state


    ls /var/www/html

Ubuntu:

    $ ls /etc/apache2/
    > apache2.conf  conf-available  conf-enabled  envvars  magic  mods-available  mods-enabled  ports.conf  sites-available  sites-enabled

    ls /var/www/html



## Section 5: Logging in Apache - ( Access.log, Error.log & Custom.log )

Apache Module mod_log_config - How to configer the custom logs:

    https://httpd.apache.org/docs/current/mod/mod_log_config.html


Access Log:

    Common Log Format:

        LogFormat "%h %l %u %t \"%r\" %>s %b" common
        CustomLog logs/access_log common

        Ex: 127.0.0.1 - frank [10/Oct/2000:13:55:36 -0700] "GET /apache_pb.gif HTTP/1.0" 200 2326

            127.0.0.1 (%h)  This is the IP address of the client (remote host) 
                            which made the request to the server.

            - (%l)          The "hyphen" in the output indicates that the 
                            requested piece of information is not available.  

            frank (%u)      This is the userid of the person requesting the 
                            document as determined by HTTP authentication. 

            [10/Oct/2000:13:55:36 -0700] (%t)

                The time that the request was received. The format is:
                    [day/month/year:hour:minute:second zone]
                    day = 2*digit
                    month = 3*letter
                    year = 4*digit
                    hour = 2*digit
                    minute = 2*digit
                    second = 2*digit
                    zone = (`+' | `-') 4*digit

            "GET /apache_pb.gif HTTP/1.0" (\"%r\")

                The request line from the client is given in double quotes. 
                The request line contains a great deal of useful information. 

            200 (%>s)   This is the status code that the server sends back to the client.

            2326 (%b)
                The last part indicates the size of the object returned to the client,
                not including the response headers. If no content was returned to the
                client, this value will be "-". To log "0" for no content, use %B
                instead 


    Combined Log Format:
        Another commonly used format string is called the Combined Log Format. 
        It can be used as follows.

        LogFormat "%h %l %u %t \"%r\" %>s %b \"%{Referer}i\" \"%{User-agent}i\"" combined
        CustomLog log/access_log combined

        Ex:  127.0.0.1 - frank [10/Oct/2000:13:55:36 -0700] "GET /apache_pb.gif HTTP/1.0" 200 2326 "http://www.example.com/start.html" "Mozilla/4.08 [en] (Win98; I ;Nav)"

        "http://www.example.com/start.html" (\"%{Referer}i\")
            The "Referer" (sic) HTTP request header. This gives the site that the client reports 
            having been referred from.

        "Mozilla/4.08 [en] (Win98; I ;Nav)" (\"%{User-agent}i\") 
            The User-Agent HTTP request header. This is the identifying information that the 
            client browser reports about itself.

Default apache access log file location:

    RHEL / Red Hat / CentOS / Fedora Linux Apache access file location – /var/log/httpd/access_log
    Debian / Ubuntu Linux Apache access log file location – /var/log/apache2/access.log
    FreeBSD Apache access log file location – /var/log/httpd-access.log