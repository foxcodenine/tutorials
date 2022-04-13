import { async } from "regenerator-runtime";
import { API_URL } from "./config.js";
import { getJSON } from "./helpers.js";



// _____________________________________________________________________

export const state = {
    recipe: {},
}

// _____________________________________________________________________


export async function loadRecipe(id) {

    try {
        const data = await getJSON(`${API_URL}/${id}`);  
        
        let {recipe} = data.data;
        
        state.recipe = {
            id:          recipe.id,
            title:       recipe.title,
            publisher:   recipe.publisher,
            sourceUrl:   recipe.image_url,
            image:       recipe.image_url,
            servings:    recipe.servings,
            cookingTime: recipe.cooking_time,
            ingredients: recipe.ingredients
        }
        
        console.log(state.recipe);

    } catch (err) {

        console.error(`Modale: ${err}`);
        alert(err);
    }
}

// _____________________________________________________________________