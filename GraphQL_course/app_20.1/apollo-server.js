const { ApolloServer, gql } = require('apollo-server');

const {
    ApolloServerPluginLandingPageLocalDefault
  } = require('apollo-server-core');

const typeDefs = require('./types.js');
const resolvers = require('./resolvers.js')


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
  characters{
    name
    ... on NonHuman {
      species
    }
    ... on Human {
      dateOfBirth
      wand {
        wood
      }
    }
  } 
}


*/
