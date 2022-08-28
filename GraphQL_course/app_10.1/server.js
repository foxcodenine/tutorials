// ----- Imports -------------------------------------------------------
const { graphql, buildSchema } = require('graphql');
const express = require('express');
const { graphqlHTTP } = require('express-graphql');

const cors = require('cors');

const userData = require('./user.json');



// ----- Creating App --------------------------------------------------
const app = express();
app.use(cors());

// ----- Database ------------------------------------------------------
let fakeDb = [
	{ id: 1, name: "office", rent: "$25"},
	{ id: 2, name: "co-working", rent: "$10"},
];

// ----- Constract a schema, using GraphQL schema language -------------
const schema = buildSchema(`
	type Person {
		id: Int
		name: String
		email: String
	}

	type Space {
		id: Int
		name: String
		rent: String
	}
	
	type Query {
		users: [Person],
		user(id: Int): Person
		getMessage: String
		getSpace(id:ID!): Space !
	}

	type Mutation {
		addMessage(msg: String): String
		createSpace(name:String, rent:String) : Space !
	}
`);

// ----- The root provides a resolver function 4 each API endpoint -----
const root = {
	users:() => { return userData },

	user:({id}) => {
		console.log(id)
		return userData.find((user) => user.id === id)
	},

	addMessage: ({msg}) => (
		fakeDb.message = msg
	),

	getMessage:() => fakeDb.message,

	createSpace: ({name, rent}) => {
		let id = fakeDb.at(-1).id;
		return fakeDb[id] = {id: id + 1, name, rent };
	},

	getSpace: ({id}) => {
		let space = fakeDb.find((space) => {return space.id == id});
		console.log(fakeDb);
		return space;
	},

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

const port = 8000;
app.listen(port);
console.log(`Server is running at http://localhost:${port}${endPoint}`);


// --------------------------------------------------------------------- 

// ----- Run the GraphQL query '{hello}' and print put the response
// graphql({ schema, source, rootValue }).then((response) => {
//   console.log(response);
// });

// ---------------------------------------------------------------------
/*
mutation {
  createSpace(name:"Hotel", rent:"25$") {
    id
  }
}

query{
  getSpace(id:3) {
    id
  }
}
*/