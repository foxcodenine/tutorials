import { async } from "regenerator-runtime";
import { API_URL } from "./config.js";
import { RES_PER_PAGE } from "./config.js";
import { getJSON } from "./helpers.js";



// _____________________________________________________________________

export const state = {
    recipe: {},
    search: {
        query: '',  
        results: [],  
        page: 1, 
        resultsPerPage: RES_PER_PAGE
    },
    bookmarks: []
}

// _____________________________________________________________________


export async function loadRecipe(id) {

    try {
        const data = await getJSON(`${API_URL}${id}`);  
        
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
        
        if (state.bookmarks.some(b => b.id === state.recipe.id)) {
            state.recipe.bookmark = true
        } else {
            state.recipe.bookmark = false
        }
        
    } catch (err) {
        throw `MODEL -> loadRecipe(): ${err}`;
    }
}

// _____________________________________________________________________

export async function loadSearchResuls(query) {

    try {

        state.search.query = query;

        // _____________________________________

        const data = await getJSON(`${API_URL}?search=${query}`);

        
        let recipiesArray = data.data.recipes;

        state.search.results = recipiesArray.map( recipe => {
            return {   
                id:          recipe.id,
                title:       recipe.title,
                publisher:   recipe.publisher,
                image:       recipe.image_url 
            }
        });

        // _____________________________________

    } catch (err) {
        throw `MODEL -> loadSearchResuls(): ${err}`;
    }
}

// _____________________________________________________________________


export function getSeachResultsPage(page = state.search.page ) {
    state.search.page = page;

    const start = (page - 1) * state.search.resultsPerPage;
    const end   = start + state.search.resultsPerPage;


    return state.search.results.slice(start, end);
}



// _____________________________________________________________________

export function updateServings (newServings) {

    
    console.log(state.recipe);
    state.recipe.ingredients.forEach((ing) => {

        if (!ing.prePerson) ing.prePerson = ing.quantity / state.recipe.servings;       

        ing.quantity = ing.prePerson * newServings;
    });

    state.recipe.servings = newServings;
}

// _____________________________________________________________________

export function toggleBookmark (recipe) {

       
    if (recipe.id !== state.recipe.id) return


    if ( state.recipe.bookmark === false) {

        // Mark current recipe as bookmark
        state.recipe.bookmark = true;

        // Add bookmark to bookmarks array
        state.bookmarks.push(recipe)

    } else {

        // Un-Mark current recipe as bookmark
        state.recipe.bookmark = false;

        // Find bookmark index and Remove it from bookmarks array
        const index = state.bookmarks.findIndex(el => el.id === recipe.id);

        state.bookmarks.splice(index, 1);
    }
}