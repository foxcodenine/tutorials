const messages = require('../proto/calculator_pb')
// SumResponse

// 
function sum(call, callback) {
    console.log('sum was invoked');

    const response = new messages.SumResponse();

    response.setResult(
        call.request.getFirstNumber() + call.request.getSecondNumber()
    )

    callback(null, response)
}


function primes (call, callback) {
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


module.exports = {
    sum,
    primes,
}