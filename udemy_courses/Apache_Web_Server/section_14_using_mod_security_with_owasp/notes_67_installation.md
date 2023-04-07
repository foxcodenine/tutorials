
### How To Set Up mod_security with Apache with OWASP Rules on Debian/Ubuntu
(following 'linuxbabe' tutorial)

------------------------------------------------------------------------

1. Installing mod_security 2

( to install Modsecurity 3.x follow the instractions from step 4)

        <!-- $ sudo apt install libapache2-modsecurity -->
        $ sudo apt install libapache2-mod-security2
        $ sudo a2enmod security2

Verify if the mod_security module was loaded.

        $ apachectl -M | grep --color security
        > security2_module (shared)

and

        $ ls /etc/apache2/mods-enabled/ | grep --color security
        > security2.conf
        > security2.load

2. Configure ModSecurity

Modsecurity’s installation includes a recommended configuration file 
which has to be renamed (I did a copy instead for backup):

        $ sudo cp /etc/modsecurity/modsecurity.conf{-recommended,}

        $ sudo service apache2 reload

Edit this file with a command-line text editor

    $ sudo vi /etc/modsecurity/modsecurity.conf

Update  : 'SecRuleEngine DetectionOnly' to 'SecRuleEngine On'
And     : 'SecAuditLogParts ABDEFHIJZ'  to 'SecAuditLogParts ABCEFHJKZ'

    $ sudo systemctl restart apache2

------------------------------------------------------------------------

3. Download OWASP ModSecurity Rule set and embed with Apache

In this step we are going to use OWASP rule which we are downloading 
from github using wget (as in 'linuxbabe' tutorial).

In the Linode and digital ocean tutorial they are using different rules.

    $ cd /etc/apache2/
    $ sudo wget https://github.com/coreruleset/coreruleset/archive/v3.3.4.tar.gz
    $ sudo tar -xvzf v3.3.4.tar.gz

Rename 'crs-setup.conf.example' to 'crs-setup.conf' and remove the 'v3.3.4.tar.gz'


    $ sudo cp /etc/apache2/coreruleset-3.3.4/crs-setup.conf{.example,}
    $ sudo rm v3.3.4.tar.gz

Move 'coreruleset-3.3.4' directory to '/etc/apache2/modsecurity-crs'

    $ sudo mkdir modsecurity-crs
    $ sudo mv coreruleset-3.3.4 /etc/apache2/modsecurity-crs

Edit the '/etc/apache2/mods-enabled/security2.conf' file.

    $ sudo vi /etc/apache2/mods-enabled/security2.conf

Update:

        IncludeOptional /usr/share/modsecurity-crs/*.load
To:

        IncludeOptional /etc/apache2/modsecurity-crs/coreruleset-3.3.4/crs-setup.conf
        IncludeOptional /etc/apache2/modsecurity-crs/coreruleset-3.3.4/rules/*.conf

        $ sudo apache2ctl -t

if you get 'Error creating rule: Unknown variable: &MULTIPART_PART_HEADERS'
this is because OWASP require to be ModSecurity version (v2.9.6/v3.0.8)

as a workaround you can disable/remove the rule file
REQUEST-922-MULTIPART-ATTACK.conf from the release in order to allow you
to run the latest

or install Modsecurity 3.x instead

------------------------------------------------------------------------

4. Install ModSecurity 3.x on Ubuntu 22.04 with OWASP Rules

To install 'ModSecurity 3.x'  follow the 'Modsecurity 3.x' section 
in 'tutorial_ifarunix'
Note however that most/all commands require a sudo infront to work.


And also when createing and difining the /etc/apache2/modsecurity.d/modsec_rules.conf file
This should inclued only:

    Include /etc/apache2/modsecurity.d/modsecurity.conf
    Include /etc/apache2/modsecurity.d/owasp-crs/crs-setup.conf
    Include /etc/apache2/modsecurity.d/owasp-crs/rules/*.conf

And not

    cat > /etc/apache2/modsecurity.d/modsec_rules.conf << 'EOL'
    Include "/etc/apache2/modsecurity.d/modsecurity.conf"
    Include "/etc/apache2/modsecurity.d/owasp-crs/crs-setup.conf"
    Include "/etc/apache2/modsecurity.d/owasp-crs/rules/*.conf"
    EOL

for this to work