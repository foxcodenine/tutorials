// Importing necessary libraries and modules
const expect = require('chai').expect;
const sinon = require('sinon');
const mongoose = require('mongoose');

const _env = require('../config/env');

// Importing the User model and AuthController module
const User = require('../models/user');
const AuthController = require('../controllers/auth');

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
			// Restoring the original 'findOne' method of the User model after the test
			User.findOne.restore();
			// Calling the 'done' callback to signal the completion of the asynchronous test
			done();
		});
	});

	// ---------------------------

	// Test case: it should send a response with a valid user status for an existing user
	it('should send a response with a valid user status for an existing user', function (done) {
		mongoose
			.connect(_env.MONGO_CONNECTION_TEST)
			.then(result => {
				// Creating a new user for testing
				const user = new User({
					email: 'test@test.com',
					password: 'tester',
					name: 'Test',
					posts: [],
					_id: '5c0f66b979af55031b34728e'
				});

				return user.save();
			})
			.then(() => {
				const req = { userId: '5c0f66b979af55031b34728e' };
				const res = {
					statusCode: 500,
					userStatus: null,
					status: function (code) {
						this.statusCode = code;
						return this;
					},
					json: function (data) {
						this.userStatus = data.status;
					}
				};

				// Invoking the getUserStatus method of AuthController with the mocked request, response, and a callback
				AuthController.getUserStatus(req, res, () => { }).then(() => {
					// Expecting the response status code to be 200
					expect(res.statusCode).to.be.equal(200);
					// Expecting the user status to be 'I am new!'
					expect(res.userStatus).to.be.equal('I am new!');

					// Cleaning up: deleting the test user and disconnecting from MongoDB
					User.deleteMany({})
						.then(() => mongoose.disconnect())
						.then(() => {
							// Calling the 'done' callback to signal the completion of the asynchronous test
							done(); // Move done inside the then block
						});
				});
			})
			.catch(err => {
				// Logging any errors that occur during the asynchronous operations
				console.error(err);
				// Calling the 'done' callback with an error to indicate a failure
				done(err);
			});
	});
});
