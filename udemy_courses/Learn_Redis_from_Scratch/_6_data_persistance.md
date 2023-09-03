

### Redis persistence

How Redis writes data to disk

Persistence refers to the writing of data to durable storage, such as a
solid-state disk (SSD). Redis provides a range of persistence options.
These include:

1. RDB (Redis Database): RDB persistence performs point-in-time
snapshots of your dataset at specified intervals.

2. AOF (Append Only File): AOF persistence logs every write operation
received by the server. These operations can then be replayed again at
server startup, reconstructing the original dataset. Commands are logged
using the same format as the Redis protocol itself.

3. No persistence: You can disable persistence completely. This is
sometimes used when caching.

4. RDB + AOF: You can also combine both AOF and RDB in the same
   instance.




### RDB advantages

RDB is a very compact single-file point-in-time representation of your
Redis data.

For instance you may want to archive your RDB files every hour for the latest 24 hours, and to save
an RDB snapshot every day for 30 days. This allows you to easily restore different versions of the
data set in case of disasters.

RDB is very good for disaster recovery, being a single compact file that can be transferred to far
data centers, or onto Amazon S3 (possibly encrypted).

RDB allows faster restarts with big datasets compared to AOF.

### RDB disadvantages

RDB is NOT good if you need to minimize the chance of data loss in case Redis stops working (for
example after a power outage). You can configure different save points where an RDB is produced (for
instance after at least five minutes and 100 writes against the data set, you can have multiple save
points). However you'll usually create an RDB snapshot every five minutes or more, so in case of
Redis stopping working without a correct shutdown for any reason you should be prepared to lose the
latest minutes of data.

RDB needs to fork() often in order to persist on disk using a child process. fork() can be time
consuming if the dataset is big, and may result in Redis stopping serving clients for some
milliseconds or even for one second if the dataset is very big and the CPU performance is not great


### Snapshotting

By default Redis saves snapshots of the dataset on disk, in a binary file called dump.rdb. You can
configure Redis to have it save the dataset every N seconds if there are at least M changes in the
dataset, or you can manually call the SAVE or BGSAVE commands.

For example, this configuration will make Redis automatically dump the dataset to disk every 60
seconds if at vleast 1000 keys changed:

      > save 60 1000

   save Performs a synchronous save of the dataset

      > BGSAVE [SCHEDULE]

   Save the DB in background.

### AOF advantages

*  Much more durable

*  Single file with no corruption

*  Auto rewites in the background if it gets too big

*  Easy to understand log / instructions

Using AOF Redis is much more durable: you can have different fsync policies: no fsync at all, fsync every second, fsync
at every query. With the default policy of fsync every second, write performance is still great. fsync is performed
using a background thread and the main thread will try hard to perform writes when no fsync is in progress, so you can
only lose one second worth of writes. 

The AOF log is an append-only log, so there are no seeks, nor corruption problems if there is a power outage. Even if
the log ends with a half-written command for some reason (disk full or other reasons) the redis-check-aof tool is able
to fix it easily.

Redis is able to automatically rewrite the AOF in background when it gets too big. The rewrite is completely safe as
while Redis continues appending to the old file, a completely new one is produced with the minimal set of operations
needed to create the current data set, and once this second file is ready Redis switches the two and starts appending to
the new one. 

AOF contains a log of all the operations one after the other in an easy to understand and parse format. You can even
easily export an AOF file. For instance even if you've accidentally flushed everything using the FLUSHALL command, as
long as no rewrite of the log was performed in the meantime, you can still save your data set just by stopping the
server, removing the latest command, and restarting Redis again.


### AOF disadvantages

AOF files are usually bigger than the equivalent RDB files for the same dataset.

AOF can be slower than RDB depending on the exact fsync policy. In general with fsync set to every second performance is
still very high, and with fsync disabled it should be exactly as fast as RDB even under high load.

fsync Policies

*  No fsync - Done by OS. Usally every 30s or so
*  fsync every second (default)
*  fsync at every query (slow)



         > BGREWRITEAOF

BGREWRITEAOF, instruct Redis to start an Append Only File rewrite process. The rewrite will create a
small optimized version of the current Append Only File.

If BGREWRITEAOF fails, no data gets lost as the old AOF will be untouched.

The rewrite will be only triggered by Redis if there is not already a background process doing
persistence.


         > INFO

The INFO command returns information and statistics about the server in a format that is simple to
parse by computers and easy to read by humans.