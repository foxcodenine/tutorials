// ----- Imports -------------------------------------------------------
const { graphql, buildSchema } = require('graphql');
const express = require('express');
const { graphqlHTTP } = require('express-graphql');

const cors = require('cors');

const userData = require('./user.json');



// ----- Creating App --------------------------------------------------
const app = express();
app.use(cors());


// ----- Constract a schema, using GraphQL schema language -------------
const schema = buildSchema(`
	type Person {
		id: Int
		name: String,
		email: String
	}
	type Query {
		users: [Person]
	}
`);

// ----- The root provides a resolver function 4 each API endpoint -----
const root = {

	users:() => {
		return userData
	}
};




// ----- Defining the source -------------------------------------------
const source = '{ name, email, age }';


// ----- Routes --------------------------------------------------------

// app.get("/graphql", (request, response) => {
// 	return response.send('Hello graphql');
// });

const endPoint = '/graphql';
app.use(endPoint, graphqlHTTP({
		schema: schema,
		rootValue: root,
		graphiql: true,
	})
);

// ---------------------------------------------------------------------

const port = 8008;
app.listen(port);
console.log(`Server is running at http://localhost:${port}${endPoint}`);


// --------------------------------------------------------------------- 

// ----- Run the GraphQL query '{hello}' and print put the response
// graphql({ schema, source, rootValue }).then((response) => {
//   console.log(response);
// });

// ---------------------------------------------------------------------
