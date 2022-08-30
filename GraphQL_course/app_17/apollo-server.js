const { ApolloServer, gql } = require('apollo-server');

const {
    ApolloServerPluginLandingPageLocalDefault
  } = require('apollo-server-core');

// ----- Database ------------------------------------------------------

const books = [
    {
      title: 'The Awakening',
      author: 'Kate Chopin',
    },
    {
      title: 'City of Glass',
      author: 'Paul Auster',
    },
  ];

const charactersData = require("./db/harrypotter.json");


// ----- GraphQL schema ------------------------------------------------

// * gql`...` is like buildSchema()

// A schema is a collection of type definitions (hence "typeDefs")
// that together define the "shape" of queries that are executed against
// your data.

const typeDefs = gql`
  # Comments in GraphQL strings (such as this one) start with the hash (#) symbol.

  type Book {
    title: String
    author: String
  }

  type Wand {
    wood: String
    core: String
    length: Float
  }

  enum GENTER {
    male
    female
  }

  type Charachers {
    id: ID
    name: String
    gender: GENTER
    dateOfBirth: String
    actor: String
    image: String
    wand: Wand
  }

  type Query {
    books: [Book]
    charachers: [Charachers!]!
  }
`;

// This "Book" type defines the queryable fields for every book in our
// data source.


// The "Query" type is special: it lists all of the available queries
// that clients can execute, along with the return type for each. In
// this case, the "books" query returns an array of zero or more Books
// (defined above).

// ----- Resolver ------------------------------------------------------

const resolvers = {
    Query: {

      books: () => {
        return books
      },

      charachers: () => {
        return charactersData
      }

    },
  };


// ----- Create an instance of ApolloServer ----------------------------


const server = new ApolloServer({
  typeDefs,
  resolvers,
  csrfPrevention: true,
  cache: 'bounded',
  plugins: [
    ApolloServerPluginLandingPageLocalDefault({ embed: true }),
  ],
});

// * typeDefs & resolvers
// The ApolloServer constructor requires two parameters: 
  // Your schema definition 'typeDefs'
  // And your set of resolvers.

// * CSRF
// We also want to enable CSRF prevention.

// * cache
// And pass cache: "bounded" or configure their cache in a manner that
// isn't unbounded (which is current default behavior). This protects
// your server from attacks that exhaust available memory, causing a DOS

// * ApolloServerPluginLandingPageProductionDefault
// What's up with this embed: true option? These are our recommended
// settings for using AS; they aren't the defaults in AS3 for
// backwards-compatibility reasons but will be the defaults in AS4. For
// production environments, use
// ApolloServerPluginLandingPageProductionDefault instead.



// ----- The `listen` method launches a web server. --------------------

server.listen(8080).then( ({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});


// ---------------------------------------------------------------------

/*

query char_list  {
  charachers {
    name
    gender
    dateOfBirth
    actor
    wand {
      wood
      core
      length
    }
  }
}

*/
