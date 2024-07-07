const pb = require('../proto/greet_pb');

// ---------------------------------------------------------------------

/**
 * Greets a user by name.
 * 
 * @param {object} call - Contains request and call-related information.
 * @param {function} callback - A callback to send back the response.
 */
function greet(call, callback) {

    console.log('greet function was invoked');

    // Extract the first name from the request using the generated getter
    const firstName = call.request.getFirstName();

    // Create a new GreetResponse object and set the result message
    const response = new pb.GreetResponse();
    response.setResult(`Hello ${firstName}`);

    // Return the response to the caller via the callback, indicating no errors (null)
    callback(null, response);
}

// ---------------------------------------------------------------------

/**
 * Sends multiple greetings to the client.
 * 
 * @param {object} call - The call object containing request and call-related information.
 * @param {function} _ - Unused callback parameter.
 */
function greetManyTimes(call, _) {
    console.log('greetManyTimes function was invoked');

    // Loop to send multiple greetings
    for (let i = 0; i < 10; ++i) {
        // Create a new GreetResponse object for each greeting
        const response = new pb.GreetResponse();
        
        // Construct the greeting message
        const msg = `Hello ${call.request.getFirstName()} - number ${i}`;
        response.setResult(msg);

        // Send each unique response to the client
        call.write(response);
    }

    // Signify the end of the stream responses
    call.end();
}

// ---------------------------------------------------------------------

/**
 * Receives multiple greetings from the client and sends back a combined response.
 * 
 * @param {object} call - The call object containing request and call-related information.
 * @param {function} callback - A callback to send back the final response.
 */
function longGreet(call, callback) {
    console.log('longGreet was invoked');
    let greet = '';

    // Event listener for receiving data from the client
    call.on('data', (request) => {
        // Append each received greeting to the greet string
        greet += `Hello ${request.getFirstName()} \n`;
    });

    // Event listener for the end of the client stream
    call.on('end', () => {
        // Create a new GreetResponse object and set the combined greeting message
        const response = new pb.GreetResponse();
        response.setResult(greet);

        // Return the combined response to the client via the callback
        callback(null, response);
    });
}

// ---------------------------------------------------------------------

module.exports = {
    greet,
    greetManyTimes,
    longGreet
};
