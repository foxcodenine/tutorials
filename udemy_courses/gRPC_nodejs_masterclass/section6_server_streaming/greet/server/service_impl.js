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

function greetManyTimes(call) {
    console.log('greetManyTimes function was invoked');

    for (let i = 0; i < 10; ++i) {
        const response = new pb.GreetResponse();  // Move this inside the loop
        const msg = `Hello ${call.request.getFirstName()} - number ${i}`;
        console.log(msg);
        response.setResult(msg);

        call.write(response);  // Send each unique response
    }

    call.end();  // Signify the end of stream responses
}



// ---------------------------------------------------------------------

module.exports = {
    greet,
    greetManyTimes
};
