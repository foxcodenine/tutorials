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
    Character : {
      __resolveType(character, context, info) {

        if (character.species) {
          return "NonHuman";
        }

        if (!character.species) {
          return "Human";
        }
        
        return null
      }
    },
    Query: {

      books: () => {
        return books
      },

      humans: () => {
        return charactersData.filter(cha => !cha.species)
      },

      non_humans: () => {
        return charactersData.filter(cha => cha.species)
      },

      characters: () => {
        return charactersData;
      }

    },
  };

  module.exports = resolvers;