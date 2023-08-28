
### Redis data types

    Strings     Redis strings are the most basic Redis data type, 
                representing a sequence of bytes.

    Lists       Redis lists are lists of strings sorted by insertion 
                order. 

                LPUSH, RPUSH, LRANGE, LREM

    Sets        Redis sets are unordered collections of unique strings 
                that act like the sets 

                SADD, SREM

    Sorted sets
                Redis sorted sets are collections of unique strings that 
                maintain order by each string's associated score.

                ZADD, ZRANGE

    Hashes      Redis hashes are record types modeled as collections of 
                field-value pairs.

                HSET, HGET, HGETALL

    Streams     A Redis stream is a data structure that acts like an 
                append-only log. Streams help record events in the order 
                they occur and then syndicate them for processing. 

    Geospatial indexes
                Redis geospatial indexes are useful for finding locations 
                within a given geographic radius or bounding box.
    
    Bitmaps     Redis bitmaps let you perform bitwise operations on 
                strings. 

    Bitfields    Redis bitfields efficiently encode multiple counters in a 
                string value. Bitfields provide atomic get, 
                set, and increment operations and support different 
                overflow policies.

    HyperLogLog
                The Redis HyperLogLog data structures provide 
                probabilistic estimates of the cardinality 
                (i.e., number of elements) of large sets.

For more information, see: https://redis.io/docs/data-types/


### List

Lists or groups of strings, sorted by insertion order.
Elements can be pushed on the head or tail.
Often used as producer/consumer queries.

    LPUSH   -   insert a new element on the head (left)
    RPUSH   -   insert a new element on the tail (right)

    LPOP    -   removes and returns an element from the head of a list.
    RPOP    -   does the same but from the tails of a list.

    LLEN    -   returns the length of a list.

    LMOVE   -    atomically moves elements from one list to another.

    LTRIM   -   reduces a list to the specified range of elements.

    > LPUSH mylist a
    "a"
    > LPUSH mylist b
    "b","a"
    > RPUSH mylist c
    "b","a","c"

    LRANGE  -   Returns the specified elements of the list stored at key. 
                The offsets start and stop are zero-based indexes, with 
                0 being the first element of the list (the head of the 
                list), 1 being the next element and so on.

    > LRANGE key start stop

    > LINSERT friends BEFORE "Bob" "Kevin"
    (intiger) 4
    > LRANGE friends 0 -1
    1. "Joe"
    2. "Sam"
    3. "Kevin"
    4. "Bob"


    LREM        Removes the first count occurrences of elements equal to 
                element from the list stored at key. The count argument 
                influences the operation in the following ways:

    count > 0: Remove elements equal to element moving from head to tail.
    count < 0: Remove elements equal to element moving from tail to head.
    count = 0: Remove all elements equal to element

    > LREM key count element

### Sets

A Redis set is an unordered collection of unique strings (members). 

Can add, remove and test for existence

Do NOT allow repeated members

Support server side commands to compute sets starting from existing sets

Basic commands:

    SADD        -   adds a new member to a set.

    SREM        -   removes the specified member from the set.

    SISMEMBER   -   tests if the given value is in the set.

    SMEMBERS    -   Return a list of all the members of a set.

    SINTER      -   returns the set of members that two or more sets 
                    have in common (i.e., the intersection).

    SCARD       -   returns tge count of elements in a set.

    SMOVE       -   move members from one set to another.

    SUNION      -   Combine two or more sets and return a list of 
                    members

    SDIFF       -   return the members of the set resulting from the 
                    difference between the first and all successive sets

    SRANDOMEMEBER   
                -   Return a rendom member, optional count

    SPOP        -   Remove and retuns a random member, optional count




### Sorted Sets

Every member is associated with a 'score'

Can access data very quickly.

Like sets, elements may only appear once.

Soore is required. Must be a float/number Ex: 500 = 500.0

Score sre NOT unique, Values are.

    ZADD     -   similar to SADD.

    ZREM     -   similar to SREM.

    ZRANGE  -   similar to LRANGE.

    ZRANGEBYSCORE
            -   works like ZRANGE but uses rage of score values.

    ZRANK   -   return the rank of a member with scores ordered from 
                high to low.

    ZREVRANK
            -   return the rank of a member with scores ordered from
                low to high.

    ZCARD   -   return the number of member in the sorted set.

    ZCOUNT  -   return the number of elements in the sorted set at key 
                with a score between min and max
                > ZCOUNT people(1, 3)

    ZINCRBY -   increment the score of member, if member not in set, it 
                will added with increment as score.
                Negative value will decrease the score.

    ZSCORE -    return the score of a member



### Hash

Maps between string fiels and a string value

Perfect for representing objecys

Very compact

    HSET    -   Sets the specified fields to their respective values in 
                the hash stored at key.

                > HSET key field value [field value ...]


                > HSET myhash field1 "Hello"
                (integer) 1
                
                > HGET myhash field1
                "Hello"

                > HSET myhash field2 "Hi" field3 "World"
                (integer) 2

                > HGET myhash field2
                "Hi"

                > HGETALL myhash
                1. "field1"
                2. "Hello"
                3. "field2"
                4. "Hi"
                5. "field3"

    HMGET - Returns the values associated with the specified fields in the 
            hash stored at key.
            For every field that does not exist in the hash, a nil value
            is returned. 

            > HSET myhash field1 "Hello"
            (integer) 1

            > HSET myhash field2 "World"
            (integer) 1

            > HMGET myhash field1 field2 nofield
            1. "Hello"
            2. "World"
            3. (nil)


    HDEL -  Removes the specified fields from the hash stored at key. 
            Specified fields that do not exist within this hash are 
            ignored.

            > HSET myhash field1 "foo"
            (integer) 1


    HEXISTS 
        -   Returns if field is an existing field in the hash stored at 
            key.

            > HEXISTS key field

    HINCRBY
        -   Increments the number stored at field in the hash stored at 
            key by increment. If key does not exist, a new key holding a 
            hash is created. If field does not exist the value is set to 
            0 before the operation is performed.

            > HSET myhash field 5
            (integer) 1

            > HINCRBY myhash field 1
            (integer) 6


    HKEYS   -   Returns all field names in the hash stored at key.

    HLEN    -   Returns the number of fields contained in the hash stored 
                at key.

    HVALS   -   Returns all values in the hash stored at key.

    HSTRLEN -   Returns the string length of the value associated with 
                field in the hash stored at key. If the key or the field 
                do not exist, 0 is returned.

                
                > HSET myhash f1 HelloWorld f2 99 f3 -256
                "OK"
                
                > HSTRLEN myhash f1
                (integer) 10
                
                > HSTRLEN myhash f2
                (integer) 2
                
                > HSTRLEN myhash f3
                (integer) 4
                
                