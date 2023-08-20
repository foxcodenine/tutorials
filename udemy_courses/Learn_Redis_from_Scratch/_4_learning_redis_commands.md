### Basic Commands

    SET
    GET
    DEL
    EXISTS
    INCR
    INCRBY
    DECR
    DECRBY


### Multiple Keys Commands

    > MSET key1 "val1" key2 "val2"


    MSETNX 
    # same as 'MSET', but will not overwritr existing values. 
            Will NOT perform if even a single key already exits.


    > MGET key1 key2

### Others

    APPEND mykey "string_to_append"
    # If the key exits and is a string the value will be appended. 
    # If key does NOT exit. It works as SET 


    <!-- ----------------------------------------------------------- -->

    > GETRANGE mykey 0 1
    > GETRANGE mykey 0 -1

    <!-- ----------------------------------------------------------- -->

    > RENAME mykey myrenamedkey

    <!-- ----------------------------------------------------------- -->

    > RENAMENX mykey myrenamedkey
    # Rename key to newkey if newkey does not exits, else return an error 

    <!-- ----------------------------------------------------------- -->

    > GETSET mykey "myval"
    # Automatically sets key to newkey and return old value
    # Can be used with INCR for counting with automatic reset


    <!-- ----------------------------------------------------------- -->

    > SETEX mykey 10 "hello"                                            # Equivalent to:

    > SET mykey "hello"
    > EXPIRE mykey 10

    <!-- ----------------------------------------------------------- -->

    > PSETEX mykey 1000 "hello"                                         # Same as SETEX except it uses milliseconds

    <!-- ----------------------------------------------------------- -->

    PTTL same as TTL by get remaining time in milliseconds

    <!-- ----------------------------------------------------------- -->

    PERSIST mykey 
    # remove timeout

    <!-- ----------------------------------------------------------- -->

    SETNX mykey "hello"
    # same as SET but it will not overwite a key

    <!-- ----------------------------------------------------------- -->

    SCAN
    # Iterates the set f keys in the database
    # Returns only a small amount per call
    # Take a course or a  position as a parameter

    # Full iteration will retrieve all elements that were present in the collection 

    SCAN COUNT 20

    # it has COUNT option, specify the amount of waork done at every call, default 10
    # it can be change from one iteration to the nextied

    > SCAN 0 MATCH k*
    # MATCH Option, match a pattern specif

    <!-- ----------------------------------------------------------- -->

    SCAN with other data types

    SSCAN - Used with sets

    HSCAN USED with hashes. Return array of elements with a field and value

    ZSCAN USED with sorted sets. Return array of elements with associated score

    <!-- ----------------------------------------------------------- -->

    KEYS Pattern

    Return all key that match a specific pattern.
    Should be avoided in production

    > KEYS h?llo
    > KEYS h*llo

    <!-- ----------------------------------------------------------- -->

    RANDOMKEY
    <!-- ----------------------------------------------------------- -->

### Config and Client commands

    > CONFIG GET port
    > CONFIG GET *

    > CONFIG SET configgotion "newvalue"

    <!-- ----------------------------------------------------------- -->

    The INFO command returns information and statistics about the server in a format that is simple to parse by computers and easy to read by humans.

    > INFO
    > INFO server

    # server | client | memory | persistence | state | replication | cpu | commandstats | cluster | keyspace | all | default    
    
    <!-- ----------------------------------------------------------- -->

    > CONFIG RESETSTAT

    The following is a non-exhaustive list of values that are reset:

        Keyspace hits and misses
        Number of expired keys
        Command and error statistics
        Connections received, rejected and evicted
        Persistence statistics
        Active defragmentation statistics

    <!-- ----------------------------------------------------------- -->

### The COMMAND command
    > COMMAND

    Return an array with details about every Redis command.
    The COMMAND command is introspective. Its reply describes all commands that the server can process.

    <!-- ----------------------------------------------------------- -->

    > COMMAND INFO 

    # Return detail for a specific command ex:

    > COMMAND INFO GET


    <!-- ----------------------------------------------------------- -->


    > COMMAND COUNT

    # Return the number of available commands on the server 

    <!-- ----------------------------------------------------------- -->

### The CLIENT Command

    The Redis CLIENT command allows you to inspect the state of every connected client, 
    to kill a specific client, and to name connections. It is a very powerful debugging 
    tool if you use Redis at scale.



    > CLIENT LIST 

    > CLIENT SETNAME clientname

    > CLIENT GETNAME

    > CLIENT KILL :portnum

    > CLIENT KILL id

    <!-- ----------------------------------------------------------- -->