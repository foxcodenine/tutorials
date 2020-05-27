

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

    
    parseIngredients() {

        const unitsLong  = ['tablespoons', 'tablespoon', 'ounces', 'ounce', 'teaspoons', 'teaspoon', 'cups', 'pounds', 'tsps', 'tbsps']
        const unitsShort = ['tbsp', 'tbsp', 'oz', 'oz', 'tsp', 'tsp', 'cup', 'pound', 'tsp', 'tbsp']

        let newIngredients = this.ingredients.map(el => {

            // 1) Grab values units and ingredened, to a string

            let ingredient =  `${el.amount.us.value}|${el.amount.us.unit}|${el.name}`.toLocaleLowerCase();

            // 2) Uniform units
           
            unitsLong.forEach((long, index) => {
                ingredient = ingredient.replace(long, unitsShort[index]);
            });

            // 3) Remove partheses
            ingredient = ingredient.replace(/ *\([^)]*\) */g, ' ');

            // 4) Parse ingredients into count, unit and ingredient
            ingredient = ingredient.split('|');
            ingredient = {
                count: Math.round(parseFloat(ingredient[0])*100)*0.01,
                unit: ingredient[1], 
                ingredient: ingredient[2]
            };
            return ingredient;

        });

        this.ingredients = newIngredients;
    }
};



/*

//  Code not use case I have a different api; 
arrIng = ['chris', 11111, 'tsp'];
const unitIndex = arrIng.findIndex(el2 => unitsShort.includes('tsp'));


let objIng;
if (unitIndex > -1) {
    // There is a unit
    // Ex. 4 1/2 cups, arrCount is [4, 1/2] --> eval("4+1/2)")
    // Ex. 4 cups, arrCount is [4]
    const arrCount = arrIng.slice(0, unitIndex);

    let count;
    if (arrCount.length === 1) {
        count = eval(arrIng[0].replace('-', '+'));
    } else {
        count = eval(arrIng.slice(0, unitIndex).join('+'));
    }
    objIng = {
        count,
        unit: arrIng[unitIndex], 
        ingredient:arrIng.slice(unitIndex + 1).join(' ')
    };


} else if (parseInt(arrIng[0], 10)) {
    // There is No unit, but 1st element is a number
    objIng = {
        count: parseInt(arrIng[0], 10),
        unit: '',
        ingredient: arrIng.slice(1).join(' ')
    }
} else if (unitIndex === -1) {
    // There is No unit and No number in 1st position
    objIng = {
        count: 1,
        unit: '',
        ingredient: arrIng.join(' ')
    }
}
*/