const grpc = require('@grpc/grpc-js');
const {CalculatorServiceClient} = require('../proto/calculator_grpc_pb');
const message = require('../proto/calculator_pb');

const util = require('util');

// ---------------------------------------------------------------------

const addr = 'localhost:50052'

// ---------------------------------------------------------------------

async function doSum(client) {
    console.log('doSum was invoked');

    const request = new  message.SumRequest();
    request.setFirstNumber(2);
    request.setSecondNumber(10);    

    const sumPromis = util.promisify(client.sum.bind(client));

    try {
        const responce = await sumPromis(request);
        console.log(`Sum: ${responce.getResult()}`);
    } catch (err) {
        console.error('Error:', err.message);
    } finally {
        client.close();
    }
}


function main() {
    const creds = grpc.ChannelCredentials.createInsecure();
    const client = new CalculatorServiceClient(addr, creds);

    doSum(client);
}

main();