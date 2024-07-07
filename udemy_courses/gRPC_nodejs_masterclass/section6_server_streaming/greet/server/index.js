const grpc = require('@grpc/grpc-js')
const serviceImpl = require('./service_impl');
const { GreetServiceService } = require('../proto/greet_grpc_pb');

// ---------------------------------------------------------------------

const addr = 'localhost:50051';  // Server address and port

// ---------------------------------------------------------------------

/**
 * Clean up server resources and shut down gracefully.
 * @param {grpc.Server} server - The gRPC server instance.
 */
function cleanup(server) {
    console.log('Cleanup');
    if (server) {
        server.forceShutdown();  // Force the server to shut down immediately
    }
}

// ---------------------------------------------------------------------

/**
 * Main function to start the gRPC server.
 */
function main() {
    const server = new grpc.Server();
    const creds = grpc.ServerCredentials.createInsecure();

    // Handle termination signal (SIGINT), usually issued from Ctrl+C.
    process.on('SIGINT', () => {
        console.log('Caught interrupt signal');
        cleanup(server);
    });

    // Add the defined gRPC service and the corresponding implementation.
    server.addService(GreetServiceService, serviceImpl);

     // Bind server to the specified address and port.
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