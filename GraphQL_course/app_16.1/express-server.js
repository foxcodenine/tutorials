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
	{ id: 1, name: "office", rent: "$25", status: 'available'},
	{ id: 2, name: "co-working", rent: "$10", status: 'not_available'},
];



// ----- Constract a schema, using GraphQL schema language -------------
const schema = buildSchema(`
	type Person {
		id: Int!
		name: String
		email: String
		pet: String
		petName: String
	}

	type Space {
		id: Int
		name: String
		rent: String
		status: String
	}
	
	type Query {
		users: [Person],
		user(id: Int): Person
		getMessage: String
		getSpace(id:ID!): Space!
		spaces(status:STATUS): [Space!]!
	}

	input SpaceInput {
		name: String 
		rent: String
		status: STATUS
	}

	enum STATUS {
		available
		not_available
	}

	type Mutation {
		addMessage(msg: String): String
		createSpace(input: SpaceInput) : Space!
		updateSpace(id:ID!, input: SpaceInput) : Space!
	}
`);

// ----- The root provides a resolver function 4 each API endpoint -----
const root = {
	users:() => { return userData },

	user:({id}) => {
		return userData.find((user) => user.id === id)
	},

	addMessage: ({msg}) => (
		fakeDb.message = msg
	),

	getMessage:() => fakeDb.message,

	createSpace: ({input}) => {
		let id = fakeDb.at(-1).id;
		return fakeDb[id] = {
			id: id + 1, 
			// name: input.name, 
			// rent: input.rent,
			// status: input.status
			...input
		};
	},

	getSpace: ({id}) => {
		let space = fakeDb.find((space) => {return space.id == id});
		return space;
	},

	updateSpace: ({id, input }) => {
		const index = fakeDb.findIndex((space) => space.id == id);
		// fakeDb[index] = {id, name: input.name, rent: input.rent};
		fakeDb[index] = {id, ...input};
		return fakeDb[index];
	},

	spaces: ({status}) => { 
		if (status) {
			return fakeDb.filter((space) => { return space.status == status })
		}
		return fakeDb
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


// ------------------------------------------

# mutation {
#   createSpace(input: {
#     name: "Tavern"
#     rent: "£60"
#     status: available
#   }) {
#     id
#     name
#     rent
#     status
#   }
# }

# query {
#   spaces {
#     name
#     rent 
#     status
#   }
# }

query {
  spaces(status: available) {
    name
    rent 
    status
  }
}

// ------------------------------------------
*/