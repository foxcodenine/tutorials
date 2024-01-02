// Importing the Chai library's expect function
const expect = require('chai').expect;
const jwt = require('jsonwebtoken');
const sinon = require('sinon');

// ---------------------------------------------------------------------

// Importing the authentication middleware to be tested
const authMiddleware = require('../middleware/is-auth');

// ---------------------------------------------------------------------

// Describing a set of test cases for the Auth middleware
describe('Auth middleware', function () {

	// Test case: Should throw an error if no authorization header is present
	it('should throw an error if no authorization header is present', function () {
		// Mocking the request object without an authorization header
		const req = {
			get: function (headerName) {
				return null;
			}
		};

		// Expecting the authMiddleware to throw an error when called with the mocked request
		expect(authMiddleware.bind(this, req, {}, () => { })).to.throw(
			'Not authenticated.'
		);
	});

	// ----------------------------------

	// Test case: Should throw an error if the authorization header is only one string
	it('should throw an error if the authorization header is only one string', function () {
		// Mocking the request object with an authorization header containing only one string
		const req = {
			get: function (headerName) {
				return 'xyz';
			}
		};

		// Expecting the authMiddleware to throw an error when called with the mocked request
		expect(authMiddleware.bind(this, req, {}, () => { })).to.throw();
	});

	// ----------------------------------

	// Test case: Should throw an error if the token cannot be verified
	it('should throw an error if the token cannot be verified', function () {
		const req = {
			get: function (headerName) {
				return 'Bearer xyz';
			}
		};

		// Expecting the authMiddleware to throw an error when called with the mocked request
		expect(authMiddleware.bind(this, req, {}, () => { })).to.throw();
	});

	// ----------------------------------

	// Test case: Should yield a userId after decoding the token
	it('should yield a userId after decoding the token', function () {
		const req = {
			get: function (headerName) {
				return 'Bearer djfkalsdjfaslfjdlas';
			}
		};
		
		// Stubbing the jwt.verify function with sinon for testing
		sinon.stub(jwt, 'verify');
		jwt.verify.returns({ userId: 'abc' });

		// Calling the authMiddleware function with the mocked request
		authMiddleware(req, {}, () => { });

		// Expecting the request object to have properties 'userId' and 'userId' to be 'abc'
		expect(req).to.have.property('userId');
		expect(req).to.have.property('userId', 'abc');

		// Expecting jwt.verify to have been called during the middleware execution
		expect(jwt.verify.called).to.be.true;

		// Restoring the original jwt.verify function after testing
		jwt.verify.restore();
	});
});
