

// const myKey = 'b3bb9752f3d1449bbf6a1cf302da308e';

// // https://api.spoonacular.com/recipes/1003464/summary?apiKey=b3bb9752f3d1449bbf6a1cf302da308e
// getSummarize = `https://api.spoonacular.com/recipes/${this.id}/summary?apiKey=${myKey}`

// // https://api.spoonacular.com/recipes/1003464/ingredientWidget.json?apiKey=b3bb9752f3d1449bbf6a1cf302da308e
// getIngredients = `https://api.spoonacular.com/recipes/${this.id}/ingredientWidget.json?apiKey=${myKey}`

// // https://api.spoonacular.com/recipes/1003464/analyzedInstructions?apiKey=b3bb9752f3d1449bbf6a1cf302da308e
// getInstructions = `https://api.spoonacular.com/recipes/${this.id}/analyzedInstructions?apiKey=${myKey}`

// // https://api.spoonacular.com/recipes/716429/information?includeNutrition=false
// getInformation = `https://api.spoonacular.com/recipes/${this.id}/information?includeNutrition=false?apiKey=${myKey}`

// _____________________________________________________________________________ 

import axios from 'axios'
import { myKey } from '../config'

export default class Recipe {
    constructor(id) {
        this.id = id;
    }

    async getRecipe() {
        try {
            const getIngredients = await axios(`https://api.spoonacular.com/recipes/${this.id}/ingredientWidget.json?apiKey=${myKey}`);
            this.ingredients = getIngredients.data.ingredients;
            // console.log(this.ingredients);
            // console.log(getIngredients);
            
            const getInformation = await axios(`https://api.spoonacular.com/recipes/${this.id}/information?includeNutrition=false&apiKey=${myKey}`);
            this.image = getInformation.data.image;
            this.summary = getInformation.data.summary;
            this.instructions = getInformation.data.instructions;
            this.title = getInformation.data.title; 
            this.sourceName = getInformation.data.sourceName;
            this.sourceUrl = getInformation.data.sourceUrl;
            this.analyzedInstructions = getInformation.data.analyzedInstructions['0'].steps;
            this.readyInMinutes = getInformation.data.readyInMinutes;
            this.servings = getInformation.data.servings;
            // console.log(getInformation);

            // const getSummarize = await axios(`https://api.spoonacular.com/recipes/${this.id}/summary?apiKey=${myKey}`);
            // this.title = getSummarize.data.title;
            // this.summery = getSummarize.data.summary;            
            // console.log(this.title);
            // console.log(this.summery);
            // console.log(getSummarize);

            // const getInstructions = await axios(`https://api.spoonacular.com/recipes/${this.id}/analyzedInstructions?apiKey=${myKey}`)
            // console.log(getInstructions);
            
            // this.instructions = getInstructions.data['0'].steps;
            // console.log(this.instructions);           


        } catch (error) {
            console.log(error)
        }
    }
};