
const { gql } = require('apollo-server');

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

  interface Character {
    id: ID
    name: String
    gender: GENTER
  }

  type Human implements Character {
    id: ID
    name: String
    gender: GENTER
    dateOfBirth: String
    actor: String
    image: String
    wand: Wand
  }

  type NonHuman implements Character {
    id: ID
    name: String
    gender: GENTER
    species: String
  }

  type Query {
    books: [Book]
    humans: [Human!]!
    non_humans: [NonHuman!]!
    characters: [Character!]!
  }
`;

// This "Book" type defines the queryable fields for every book in our
// data source.


// The "Query" type is special: it lists all of the available queries
// that clients can execute, along with the return type for each. In
// this case, the "books" query returns an array of zero or more Books
// (defined above).


module.exports = typeDefs;