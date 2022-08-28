const { graphql, buildSchema } = require('graphql');


// Constract a schema, using GraphQL schema language:
const schema = buildSchema(`
	type Query {
		name: String,
		email: String,
	}
`);

// The root provides a resolver function for each API endpoint:
const rootValue = {
	name: () => 'Chris Farrugia',
	email: () => 'chris12aug@yahoo.com',
};

// Defining the source:
const source = '{ name, email }';

// Run the GraphQL query '{hello}' and print put the response
graphql({ schema, source, rootValue }).then((response) => {
  console.log(response);
});

