const grpc = require('@grpc/grpc-js');
const {GreetServiceClient} = require('../proto/greet_grpc_pb')

const addr = 'localhost:50051'

function main() {
    const creds = grpc.ServerCredentials.createInsecure();
    const client = new grpc.GreetServiceClient(addr, creds);

    client.close()
}

main();