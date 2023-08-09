npm install mongodb --save
<!-- --------------------------------------------------------------- -->
    mongodb+srv://chris12aug:<password>@node-complete.c5azhit.mongodb.net/
<!-- --------------------------------------------------------------- -->
    mongodb+srv://chris12aug:oCor6F0ebd1FVc3R@node-complete.c5azhit.mongodb.net/?retryWrites=true&w=majority

<!-- --------------------------------------------------------------- -->

    const { MongoClient, ServerApiVersion } = require('mongodb');
    const uri = "mongodb+srv://chris12aug:oCor6F0ebd1FVc3R@node-complete.c5azhit.mongodb.net/?retryWrites=true&w=majority";
    // Create a MongoClient with a MongoClientOptions object to set the Stable API version
    const client = new MongoClient(uri, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    }
    });
    async function run() {
    try {
        // Connect the client to the server	(optional starting in v4.7)
        await client.connect();
        // Send a ping to confirm a successful connection
        await client.db("admin").command({ ping: 1 });
        console.log("Pinged your deployment. You successfully connected to MongoDB!");
    } finally {
        // Ensures that the client will close when you finish/error
        await client.close();
    }
    }
    run().catch(console.dir);

<!-- --------------------------------------------------------------- -->
Check the current number of connections to MongoDb

    $ lsof -i 
    # or to filter them:
    $ lsof -n -i4TCP:27017