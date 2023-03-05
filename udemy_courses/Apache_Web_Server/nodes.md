
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
