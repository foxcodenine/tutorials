// -- Redis ------------------------------------------------------------

const redis = require('redis');

const redisclient = redis.createClient();
  
(async () => { await redisclient.connect(); })();
  
console.log("Connecting to the Redis");
  
redisclient.on("connect", () => {
    console.log("Connected to Redis!");
});
  
redisclient.on("error", (err) => {
    console.log("Error in the Connection");
});

// ---------------------------------------------------------------------

module.exports = redisclient;