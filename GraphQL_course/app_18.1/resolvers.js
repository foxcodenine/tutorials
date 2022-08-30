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

  module.exports = resolvers;