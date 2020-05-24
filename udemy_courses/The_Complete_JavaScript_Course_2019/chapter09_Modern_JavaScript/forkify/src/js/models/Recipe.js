

const myKey = 'b3bb9752f3d1449bbf6a1cf302da308e';

// https://api.spoonacular.com/recipes/1003464/summary?apiKey=b3bb9752f3d1449bbf6a1cf302da308e
getSummarize = `https://api.spoonacular.com/recipes/${this.id}/summary?apiKey=${myKey}`

// https://api.spoonacular.com/recipes/1003464/ingredientWidget.json?apiKey=b3bb9752f3d1449bbf6a1cf302da308e
getIngredients = `https://api.spoonacular.com/recipes/${this.id}/ingredientWidget.json?apiKey=${myKey}`

// https://api.spoonacular.com/recipes/1003464/analyzedInstructions?apiKey=b3bb9752f3d1449bbf6a1cf302da308e
getInstructions = `https://api.spoonacular.com/recipes/${this.id}/analyzedInstructions?apiKey=${myKey}`



// _____________________________________________________________________________ 

import axios from 'axios'

export default class Recipe {
    constructor(id) {
        this.id = id;
    }

    async getRecipe() {
        try {

        } catch (error) {
            console.log(error)
        }
    }
};