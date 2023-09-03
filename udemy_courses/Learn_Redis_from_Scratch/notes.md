login docker redis container:

    $ docker exec -it redis-track sh

Find where redis files are beeing stored:

    $ locate *rdb
    $ find -name *rdb

    ./data/dump.rdb

Activating AOF

    > apt-get install vim 
    $ redis-cli
    > BGREWRITEAOF
    > info persistence                                                  # and check aof_rewrite_in_progress if 0 is not
    > exit
    $ systemctl stop redis-server                                       # if in a docker container you need to stop container
                                                                        $ docker ps
                                                                        $ docker-compose down                                                                       

    $ vi redis.conf

    find 'appendonly no' and change it to 'appendonly yes'

    $ systemctl restart redis-server                                    # if in a docker container you need to restart container
                                                                        $ docker-compose up

    $ find -name *aof
    $ vi ./appendonlydir/appendonly.aof.1.incr.aof








<!-- --------------------------------------------------------------- -->

rdiff-backup

Rdiff-backup backs up one directory to another, possibly over a network.
The target directory ends up a copy of the source directory, but extra
reverse diffs are stored in a special subdirectory of that target
directory, so you can still recover files lost some time ago.