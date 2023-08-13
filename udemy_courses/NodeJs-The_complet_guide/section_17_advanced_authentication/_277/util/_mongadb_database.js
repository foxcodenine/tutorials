const { MongoClient, ServerApiVersion } = require('mongodb');

// ---------------------------------------------------------------------

const uri = "mongodb+srv://chris12aug:oCor6F0ebd1FVc3R@node-complete.c5azhit.mongodb.net/?retryWrites=true&w=majority";
// Create a MongoClient with a MongoClientOptions object to set the Stable API version

let mongodbClient = null;
let _db = null;

async function getMongodbClient() {
    if (mongodbClient) return mongodbClient;

    mongodbClient = new MongoClient(uri, {
        serverApi: {
            version: ServerApiVersion.v1,
            strict: true,
            deprecationErrors: true,
        }
    });
    return mongodbClient
}

async function getDb() {
    if (_db) return _db;
    const client = await getMongodbClient();
    _db = await client.db("shop");

    return _db;
}


// ---------------------------------------------------------------------


async function run() {
    try {
        // Connect the client to the server	(optional starting in v4.7)
        await mongodbClient.connect();
        // Send a ping to confirm a successful connection
        await mongodbClient.db("admin").command({ ping: 1 });
        console.log("Pinged your deployment. You successfully connected to MongoDB!");
    } finally {
        // Ensures that the client will close when you finish/error
        await mongodbClient.close();
    }
}
// run().catch(console.dir);

module.exports = { mongodbClient, getMongodbClient, getDb };
