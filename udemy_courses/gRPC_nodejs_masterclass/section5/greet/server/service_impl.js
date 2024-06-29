const pb = require('../proto/greet_pb');

// ---------------------------------------------------------------------

/**
 * Greets a user by name.
 * 
 * @param {object} call - Contains request and call-related information.
 * @param {function} callback - A callback to send back the response.
 */
function greet(call, callback) {

    console.log('Greet function was invoked');

    // Extract the first name from the request using the generated getter
    const firstName = call.request.getFirstName();

    // Create a new GreetResponse object and set the result message
    const response = new pb.GreetResponse();
    response.setResult(`Hello ${firstName}`);

    // Return the response to the caller via the callback, indicating no errors (null)
    callback(null, response);
}

// ---------------------------------------------------------------------

module.exports = {
    greet
};
