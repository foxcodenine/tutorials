const grpc = require('@grpc/grpc-js');
const {GreetServiceClient} = require('../proto/greet_grpc_pb');
const {GreetRequest} = require('../proto/greet_pb');

const util = require('util');
const { resolve } = require('path');
const { rejects } = require('assert');

// ---------------------------------------------------------------------

const addr = 'localhost:50051'

// ---------------------------------------------------------------------

async function doGreet(client) {
    console.log('doGreet was invoked')

    const request = new GreetRequest()
    request.setFirstName('Clement');

    /*
    client.greet(request, (err, response) => {
        if (err) {
            return console.log(err)
        }
        console.log(`Greet: ${response.getResult()}`);
        client.close();  
    })
    */


    // - Create a promisified version of the greet method
    const greetPromise = util.promisify(client.greet.bind(client));

    try {
        const response = await greetPromise(request);
        console.log(`Greet: ${response.getResult()}`);

    } catch (err) {
        console.error('Error:', err.message);

    } finally {
        client.close(); 
    }
}

// ---------------------------------------------------------------------

function doGreetManyTimes(client) {
    console.log('doGreetManyTimes was invoked');

    const request = new GreetRequest();
    request.setFirstName('Dorothy Cassar');

    const call = client.greetManyTimes(request);
    
    call.on('data', (response) => {
        console.log(`GreetManyTimes: ${response.getResult()}`);     
           
    })

    call.on('end', () => {
        client.close(); 
    });    
}


// ---------------------------------------------------------------------


function doLongeGreet(client) {
    console.log('doLongeGreet was invoked');

    const names = ['Clement', 'Maria', 'Chris', 'Tania', 'Danine', 'Erika'];


    const call = client.longGreet((err, response) => {
        if (err) {
            return console.log(err)
        }
        console.log(`longeGreet: \n${response.getResult()}`);
        client.close();  
    });

    const arrayGreetRequest = names.map((name)=>{
        return new GreetRequest().setFirstName(name);
    })

    arrayGreetRequest.forEach((geetReq)=>{
        call.write(geetReq);
    });

    call.end();
}

// ---------------------------------------------------------------------

function main() {
    const creds = grpc.ChannelCredentials.createInsecure();
    const client = new GreetServiceClient(addr, creds);

    // doGreet(client);
    // doGreetManyTimes(client);
    doLongeGreet(client);

    process.on('SIGINT', () => {
        console.log('Caught interrupt signal, shutting down gracefully.');
        client.close(); 
        process.exit(0);
    });
    
}

main();