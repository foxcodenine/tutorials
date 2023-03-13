
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



## Section 6: Directives

##### Apache MPM Common Directives
https://httpd.apache.org/docs/2.4/mod/mpm_common.html

    Description:	A collection of directives that are implemented by more than one multi-processing module (MPM)
    Status:	        MPM

* CoreDumpDirectory Directive


        Description:	Directory where Apache HTTP Server attempts to switch before dumping core
        Syntax:	        CoreDumpDirectory directory
        Default:	    See usage for the default setting
        Context:	    server config
        Status:	        MPM
        Module:	        event, worker, prefork

        This controls the directory to which Apache httpd attempts to switch before dumping core. If your operating system is configured to create core files in the working directory of the crashing process, CoreDumpDirectory is necessary to change working directory from the default ServerRoot directory, which should not be writable by the user the server runs as.


* EnableExceptionHook Directive

        Description:	Enables a hook that runs exception handlers after a crash

* GracefulShutdownTimeout Directive

        Description:	Specify a timeout after which a gracefully shutdown server will exit.

* Listen Directive

        Description:	IP addresses and ports that the server listens to
        Syntax:	        Listen [IP-address:]portnumber [protocol]
        Context:	    server config

* ListenBackLog Directive

        Description:	Maximum length of the queue of pending connections
        Syntax:	        ListenBackLog backlog
        Default:	    ListenBackLog 511

* ListenCoresBucketsRatio Directive

        Description:	Ratio between the number of CPU cores (online) and the number of listeners' buckets

* MaxConnectionsPerChild Directive

        Description:	Limit on the number of connections that an individual child server will handle during its life
        Syntax:	        MaxConnectionsPerChild number
        Default:	    MaxConnectionsPerChild 0

* MaxMemFree Directive

        Description:	Maximum amount of memory that the main allocator is allowed to hold without calling free()
        Syntax:	        MaxMemFree KBytes
        Default:	    MaxMemFree 2048

* MaxRequestWorkers Directive

        Description:	Maximum number of connections that will be processed simultaneously

* MaxSpareThreads Directive

        Description:	Maximum number of idle threads

* MinSpareThreads Directive

        Description:	Minimum number of idle threads available to handle request spikes

* PidFile Directive

        Description:	File where the server records the process ID of the daemon
        Syntax:	        PidFile filename
        Default:	    PidFile logs/httpd.pid

* ReceiveBufferSize Directive

        Description:	TCP receive buffer size

* ScoreBoardFile Directiv

        Description:	Location of the file used to store coordination data for the child processes

* SendBufferSize Directive

        Description:	TCP buffer size

* ServerLimit Directive

        Description:	Upper limit on configurable number of processes

* StartServers Directive

        Description:	Number of child server processes created at startup

* StartThreads Directive

        Description:	Number of threads created on startup

* ThreadLimit Directive

        Description:	Sets the upper limit on the configurable number of threads per child process

* ThreadsPerChild Directive

        Description:	Number of threads created by each child process

* ThreadStackSize Directive

        Description:	The size in bytes of the stack used by threads handling client connections