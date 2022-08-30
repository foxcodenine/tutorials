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

      humans: () => {
        return charactersData.filter(cha => !cha.species)
      },

      non_humans: () => {
        return charactersData.filter(cha => cha.species)
      }

    },
  };

  module.exports = resolvers;