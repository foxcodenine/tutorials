// Importing necessary libraries and modules
const expect = require('chai').expect;
const sinon = require('sinon');

// ---------------------------------------------------------------------

// Importing the User model and AuthController module
const User = require('../models/user');
const AuthController = require('../controllers/auth');

// ---------------------------------------------------------------------

// Test suite for the 'login' functionality in Auth Controller
describe('Auth Controller - Login', function () {

	// Test case: it should throw an error with code 500 if accessing the database fails
	it('should throw an error with code 500 if accessing the database fails', function (done) {

		// Stubbing the 'findOne' method of the User model
		sinon.stub(User, 'findOne');

		
		// Making the stubbed method throw an error
		User.findOne.throws();


		// Mocking the request object
		const req = {
			body: {
				email: 'test@test.com',
				password: 'tester'
			}
		};


		// Invoking the login method of AuthController with the mocked request, an empty response object, and a callback
		AuthController.login(req, {}, () => { }).then(result => {
			// Expecting the result to be an error
			expect(result).to.be.an('error');
			// Expecting the error to have a status code of 500
			expect(result).to.have.property('statusCode', 500);
			// Calling the 'done' callback to signal the completion of the asynchronous test
			done();
		});


		// Restoring the original 'findOne' method of the User model after the test
		User.findOne.restore();
	});
});
