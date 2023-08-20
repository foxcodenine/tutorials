### Redis datatypes:

    String
    Hashes
    lists
    Sets
    Sorted Sets
    Bitmaps
    Hyperlogs
    Geospatial
    Indexes

### Disable and Renaming Commands

Normal users should not be able to run CONFIG or FLASHALL

Specific commands can be renamed useing 'rename-command'

    rename-command CONFIG g5ds34gf3df4gd3f54gd3f5

To disbale, rename to empty string

    rename-command CONFIG ""


<!-- --------------------------------------------------------------- -->


### Kinsing malware (kdevtmpfsi) – how to kill

Kill proccess using 'top' and 'kill -9'

Log in container:

    docker exec -it chirpstack-docker-master_postgres_1 sh

Find the malware:

    find / -name kdevtmpfsi

    find / -name kinsing

Proper fix docker container

    Example it might be an exposed port being exploited

        docker run -v /www:/var/www -p 9000:9000 php:7.4

    Remove the port mapping: -p 9000:9000   or   change mapping: 9999:9000

    

    Also if a postgress contain is been target:

    Restrict connections in the postgres config file.

    Usually found here. /etc/postgresql/12/main/postgresql.conf

Make new files and make them readonly:

    # touch /tmp/kdevtmpfsi && touch /tmp/kinsing
    # echo "kdevtmpfsi is fine now" > /tmp/kdevtmpfsi
    # echo "kinsing is fine now" > /tmp/kinsing
    # chmod go-rwx /tmp/kdevtmpfsi
    # chmod go-rwx /tmp/kinsing



Alternative solution

If you still have the problem, we came up with an alternative solution:
– prepare a bash script that will kill the process every 20 seconds
– run the bash script in the background

Bash script:

    # /root/scripts/ctKillProc.sh
    #!/bin/sh
    # do what you need to here
    while true; do
    processId=$(ps -ef | grep ‘kdevtmpfsi’ | grep -v ‘grep’ | awk ‘{ printf $2 }’)
    echo $processId
    kill -9 $processId
    echo “[“`date +%Y%m%d%H%M`”] kdevtmpfsi killed.”
    sleep 20
    done
    exit 1

Run the script in the background:

    $ nohup sh /root/scripts/ctKillProc.sh &


### Alternativly create a cron job

Bash script:

    #!/bin/bash

    kill $(pgrep kdevtmp)
    kill $(pgrep kinsing)
    find / -iname kdevtmpfsi -exec rm -fv {} \;
    find / -iname kinsing -exec rm -fv {} \;
    rm /tmp/kdevtmp*
    rm /tmp/kinsing*

    We need to make the file executable with

We need to make the file executable with

    chmod +x kill.sh

Set it to run on schedule

    sudo crontab -e

Append this to the end.

    * * * * * sh {absolutepath}kill.sh > /tmp/kill.log

ie

    * * * * * sh /home/user/kill.sh > /tmp/kill.log


<!-- --------------------------------------------------------------- -->


    $ sudo su -

    $ ufw status
    $ ufw show added

    $ ufw allow 22
    $ ufw deny 22

    $ ufw enable
    $ ufw desable


