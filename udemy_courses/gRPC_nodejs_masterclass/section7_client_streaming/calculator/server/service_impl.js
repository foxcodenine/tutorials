const messages = require('../proto/calculator_pb')

// ---------------------------------------------------------------------
function sum(call, callback) {
	console.log('sum was invoked');

	const response = new messages.SumResponse();

	response.setResult(
		call.request.getFirstNumber() + call.request.getSecondNumber()
	)

	callback(null, response)
}

// ---------------------------------------------------------------------
function primes(call, callback) {
	console.log('Primes was invoked');
	let number = call.request.getNumber();
	let divisor = 2;

	while (number > 1) {
		const res = new messages.PrimeResponse();
		if (number % divisor == 0) {
			res.setResult(divisor);
			call.write(res);
			number /= divisor;
		} else {
			++divisor;
		}
	}

	call.end();
}

// ---------------------------------------------------------------------

function average(call, callback) {
    console.log('average was invoked');

    let total = 0;
    let rounds = 0;

    // Event listener for receiving data from the client
    call.on('data', (request) => {
        total += request.getNumber();  // Accumulate the total sum
        ++rounds;  // Increment the count of numbers received
    });

    // Event listener for the end of the client stream
    call.on('end', () => {
        // Calculate the average if rounds is not zero
        let average = rounds > 0 ? total / rounds : 0;
        
        // Create a new NumberResponse object and set the result to the calculated average
        const response = new messages.NumberResponse();
        response.setResult(average);

        // Return the response to the client via the callback
        callback(null, response);
    });
}

module.exports = {
	sum,
	primes,
	average,
}