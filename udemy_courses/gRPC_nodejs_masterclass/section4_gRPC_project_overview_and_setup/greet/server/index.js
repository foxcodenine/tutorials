const grpc = require('@grpc/grpc-js')

const addr = 'localhost:50051'


function cleanup(server) {
    console.log('Cleanup');

    if (server) {
        server.forceShutdown();
    }
}


function main() {
    const server = new grpc.Server();
    const creds = grpc.ServerCredentials.createInsecure();

    process.on('SIGINT', () => {
        console.log('Caught interrupt signal');
        return cleanup(server);
    });


    server.bindAsync(addr, creds, (err, port) => {
        if (err) {
            console.error(`Server failed to bind: ${err.message}`);
            return cleanup(server)
        } else {
            console.log(`Listening on: ${addr}`);
        }
    })
}

main();