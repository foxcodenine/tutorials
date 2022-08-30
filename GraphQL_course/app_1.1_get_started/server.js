var { graphql, buildSchema } = require('graphql');


// Constract a schema, using GraphQL schema language:
var schema = buildSchema(`
  type Query {
    hello: String
  }
`);

// The root provides a resolver function for each API endpoint:
var rootValue = { hello: () => 'Hello world!' };

// Defining the source:
var source = '{ hello }';

// Run the GraphQL query '{hello}' and print put the response
graphql({ schema, source, rootValue }).then((response) => {
  console.log(response);
});



