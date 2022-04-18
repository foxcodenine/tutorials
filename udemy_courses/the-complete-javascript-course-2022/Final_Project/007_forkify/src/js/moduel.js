import { async } from "regenerator-runtime";
import { API_URL } from "./config.js";
import { RES_PER_PAGE, KEY } from "./config.js";
import { getJSON, sendJSON } from "./helpers.js";



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

function createRecipeObject(data) {

    let {recipe} = data.data;

    return {
        id:          recipe.id,
        title:       recipe.title,
        publisher:   recipe.publisher,
        sourceUrl:   recipe.source_url,
        image:       recipe.image_url,
        servings:    recipe.servings,            
        cookingTime: recipe.cooking_time,
        ingredients: recipe.ingredients,
        // key:         recipe.key ?? null        
        ...(recipe.key && {key: recipe.key})
    }
}

// _____________________________________________________________________


export async function loadRecipe(id) {

    try {
        const data = await getJSON(`${API_URL}${id}?key=${KEY}`);  
        
        state.recipe = createRecipeObject(data);
        
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

        const data = await getJSON(`${API_URL}?search=${query}&key=${KEY}`);
       
        
        let recipiesArray = data.data.recipes;

        state.search.results = recipiesArray.map( recipe => {
            
            return {   
                id:          recipe.id,
                title:       recipe.title,
                publisher:   recipe.publisher,
                image:       recipe.image_url,
                ...(recipe.key && {key: recipe.key})
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

function persistBookmarks () {
    localStorage.setItem('bookmarks', JSON.stringify(state.bookmarks));
}

export function fetchBookmarks () {
    const storage = localStorage.getItem('bookmarks');
    if (storage) {
        state.bookmarks = JSON.parse(storage);
    }
    
}

export function clearBookmarks() {
    localStorage.clear('bookmarks');
}
// _____________________________________________________________________

export function toggleBookmark (recipe) {
    
    if (recipe.id !== state.recipe.id) return
    
    if ( state.recipe.bookmark !== true) {
        
        // Mark current recipe as bookmark
        state.recipe.bookmark = true;

        // Add bookmark to bookmarks array
        state.bookmarks.push(recipe);

    } else {
        

        // Un-Mark current recipe as bookmark
        state.recipe.bookmark = false;

        // Find bookmark index and Remove it from bookmarks array
        const index = state.bookmarks.findIndex(el => el.id === recipe.id);

        state.bookmarks.splice(index, 1);        
    }

    // Update localstoage:
    persistBookmarks();
}

// _____________________________________________________________________

export async function uploadRecipe (newRecipe) {

    try {



        let ingredients;

        ingredients = Object.entries(newRecipe);

        ingredients = ingredients.filter( entry => {
            return entry[0].startsWith('ingredient') && entry[1] !== '';
        });

        ingredients = ingredients.map(ing => {

            let ingArray = ing[1].split(',');

            ingArray = ingArray.map(ing => ing.trim());

            ingArray[2] = ingArray[2].replaceAll(' ', '_');

            if (ingArray.length !== 3) throw new Error('Wrong ingredent format');

            const[quantity, unit, description] = ingArray;

            return {
                quantity : quantity ? +quantity : null, 
                unit, 
                description
            }
           
            
        });

        const recipe = {
            title:          newRecipe.title,
            source_url:      newRecipe.sourceUrl,
            image_url:      newRecipe.image,
            publisher:      newRecipe.publisher,
            cooking_time:   +newRecipe.cookingTime,
            servings:       +newRecipe.servings,
            ingredients,
        };

        
        const data = await sendJSON(`${API_URL}?key=${KEY}`, recipe);

        state.recipe = createRecipeObject(data);
        
        toggleBookmark (state.recipe);

    } catch (err) {
        throw err;
    }




}