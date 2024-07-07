const messages = require('../proto/calculator_pb')
// SumResponse

// 
function sum(call, callback) {
    console.log('Sum was invoked');

    const response = new messages.SumResponse();

    response.setResult(
        call.request.getFirstNumber() + call.request.getSecondNumber()
    )

    callback(null, response)
}

module.exports = {
    sum
}