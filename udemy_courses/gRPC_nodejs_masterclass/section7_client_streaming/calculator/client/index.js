const grpc = require('@grpc/grpc-js');
const {CalculatorServiceClient} = require('../proto/calculator_grpc_pb');
const messages = require('../proto/calculator_pb');

const util = require('util');

// ---------------------------------------------------------------------

const addr = 'localhost:50052'

// ---------------------------------------------------------------------

async function doSum(client) {
    console.log('doSum was invoked');

    const request = new  messages.SumRequest();
    request.setFirstNumber(2);
    request.setSecondNumber(10);    

    const sumPromis = util.promisify(client.sum.bind(client));

    try {
        const responce = await sumPromis(request);
        console.log(`Sum: ${responce.getResult()}`);
    } catch (err) {
        console.error('Error:', err.messages);
    } finally {
        client.close();
    }
}


function doPrimes(client) {
    console.log('doPrimes was invoked');
    const req = new messages.PrimeRequest();
  
    req.setNumber(12390392840);
    const call = client.primes(req);
  
    call.on('data', (res) => {
      console.log(`Primes: ${res.getResult()}`);
    });
}


function doAverage(client) {
    console.log('doAverage was invoked');

    const numbers = [2, 4, 6];

    // Initiate the average RPC call
    const call = client.average((err, response) => {
        if (err) {
            return console.log(err);
        }
        console.log(`doAverage: ${response.getResult()}`);
    });

    // Create NumberRequest messages from the numbers array
    const arrayNumbersRequest = numbers.map(number => {
        return new messages.NumberRequest().setNumber(number);
    });

    // Send each NumberRequest message to the server
    arrayNumbersRequest.forEach(numReq => {
        call.write(numReq);
    });

    // Signal the end of client streaming
    call.end();
}


function main() {
    const creds = grpc.ChannelCredentials.createInsecure();
    const client = new CalculatorServiceClient(addr, creds);

    // doSum(client);
    // doPrimes(client);
    doAverage(client);
}

main();