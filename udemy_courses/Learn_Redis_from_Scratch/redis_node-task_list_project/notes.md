
### installing  node-redis client:

    $ npm install redis --save
    $ npm install express --save 
    $ npm install sass --save-dev
    $ npm install npm-run-all --save-dev
    $ npm install morgan --save
    $ npm install ejs  --save
    $ npm install express-ejs-layouts  --save
    $ npm install dotenv --save




redis-cli

127.0.0.1:6379> LPUSH tasks "Go Food Shopping"
(integer) 1
127.0.0.1:6379> LPUSH tasks "Dinner With Family"
(integer) 2
127.0.0.1:6379> LPUSH tasks "Meeting At Work"
(integer) 3


127.0.0.1:6379> LRANGE tasks 1 -1
1) "Meeting At Work"
2) "Dinner With Family"