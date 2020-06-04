/* BIN */

// import str from './models/Search' 
// import { myAddFunc as addy, myMultipleFunc as multy} from './views/searchView'
// // import * as searchView from './views.searchView';


// console.log(str);

// console.log(addy(2,2,2,20));

// console.log(multy(1,2,3,4,5,2));
// _____________________________________________________________________________

// https://spoonacular.com/food-api/console#Profile
// API Key: b3bb9752f3d1449bbf6a1cf302da308e 


// https://api.spoonacular.com/recipes/search
// https://api.spoonacular.com/recipes/search?query=cheese&apiKey=b3bb9752f3d1449bbf6a1cf302da308e
// _____________________________________________________________________________


// import axios from 'axios'

// async function getResults(query) {
//     const myKey = 'b3bb9752f3d1449bbf6a1cf302da308e';
//     try {
//         const res = await axios(`https://api.spoonacular.com/recipes/search?query=${query}&apiKey=${myKey}`);
//         const recipes = res.data.results
//         console.log(recipes)
//     }
//     catch(error) {
//         alert(error)
//     }    
// }

// getResults('chinese');



// const complexSerch = `https://api.spoonacular.com/recipes/complexSearch?query=${}&number=30&apiKey=${myKey}`
// https://api.spoonacular.com/recipes/complexSearch?query=pizza&number=20&apiKey=b3bb9752f3d1449bbf6a1cf302da308e

// https://api.spoonacular.com/recipes/716429/information?includeNutrition=false&apiKey=b3bb9752f3d1449bbf6a1cf302da308e
// https://api.spoonacular.com/recipes/716429/information?includeNutrition=false&apiKey=57f70fde3bf84b6188194d0b5f8d4400



// `https://api.spoonacular.com/recipes/search?query=${this.query}&apiKey=${myKey}`

/* END BIN */
// _____________________________________________________________________________
// _____________________________________________________________________________

/**
 * .target
 * .closest
 * .matches
 * .btn-decrease *       'the * means any chiled of class btn-decrease'
 * Array.slice and Array.splice
 * Array.findIndex and Array.find
 */







// _____________________________________________________________________________

// External Packages
// https://github.com/ekg/fraction.js/
// https://github.com/adamhalasz/uniqid

import Search from './models/Search';
import Recepe from './models/Recipe';
import List from './models/List';
import * as searchView from './views/searchView';
import * as recipeView from './views/recipeView';
import * as listView from './views/listView';
import {elements, renderLoader, clearLoader} from './views/base';
import { Fraction } from 'fractional';


/**Global state of the app
 *  - Search object
 *  - Current recipe object
 *  - Shopping list object
 *  - Liked recipes
 */


const state = {};

window.state = state;



// _____________________________________________________________________
/* Search Controller */
// _____________________________________________________________________


//  Funtion call by the Event Listener - Search

const controlSearch = async () => {
    // 1) Get query from view 
    const query = searchView.getInputs();

    if (query) {
        // 2) New search object and add to state
        state.search = new Search(query);

        // 3) Prepare UI for results
        searchView.clearInput();
        searchView.clearResults();
        renderLoader(elements.searchRes);

        try {

            // 4) Search for recipes 
            await state.search.getResults();

            // 5) Render results on UI
            // console.log(state.search.results);
            clearLoader();
            searchView.renderResults(state.search.results);

        } catch(err) {
            alert('error processing search!');
            clearLoader();
            
        }               
    }
};



//  Event Listener - Search

elements.searchForm.addEventListener('submit', e => {
    e.preventDefault();
    controlSearch();
    
});

// _____________________________________________________________________

//  Event Listener - Pagination

elements.searchResPages.addEventListener('click', e => {
    const btn = e.target.closest('.btn-inline');

    if (btn) {
        const goToPage = parseInt(btn.dataset.goto, 10);
        searchView.clearResults();
        searchView.renderResults(state.search.results, goToPage, 10);
        // console.log(goToPage)
        
    }
});

// _____________________________________________________________________
/* Recepe Controller */

const controleRecipe = async () => {
    const id = window.location.hash.replace('#', '');
    
    if (id) {
       console.log(id); 

        // Prepare UI for changes
        recipeView.cleanRecipe();

        // Highlight selected search item 

        if (state.search) {
            searchView.highlightClear();
            searchView.highlightSelected(id);
        }
        

        // Create new recipe object 
        state.recipe = new Recepe(id);

        try {

            // Get recipe data
            await state.recipe.getRecipe();

            // Calculate servings and time 
            /* Not need, got data from api */
            await state.recipe.parseIngredients();

            // Render recipe            
            console.log(state.recipe.ingredients);
            
            await recipeView.renderRecipe(state.recipe);

 

        } catch(err) {
            console.log(err)
        }      
    }
}

// window.addEventListener('hashchange', controleRecipe);
// window.addEventListener('load', controleRecipe);

['hashchange', 'load'].forEach( (event) => {
    window.addEventListener(event, controleRecipe)
});


// _____________________________________________________________________
/* List Controller */

    const controlList = () => {
        
        // Create a new list IF ther in none yet
        if (!state.list) state.list = new List(); 


        // Add each ingredient to the list and UI
        state.recipe.ingredients.forEach(ing => {
            const item = state.list.addItem(ing.count, ing.unit, ing.name);
            listView.renderItem(item);
        })

    }

// _____________________________________________________________________
/* Handling delete and update list item events */

elements.shoppingContainer.addEventListener('click', e => {

    const id = e.target.closest('.shopping__item').dataset.itemid
    console.log(id);


    if (e.target.matches('.shopping__delete, .shopping__delete *')) {

        // Delete from state
        state.list.deleteItem(id);

        // Delete from UI
        listView.deleteItem(id);

    } else if (e.target.matches(
        '.shopping__count-value , .shopping__count-value *')) {
        const val = parseFloat(e.target.value);

        state.list.updateCount(id, val);
    }


});




// _____________________________________________________________________
/* Handling recipe button click */

elements.recipeContainer.addEventListener('click', e => {
    
    if (e.target.matches('.btn-decrease, .btn-decrease *')) {
        // Decrease button is clicked
        if (state.recipe.servings > 1) {
            state.recipe.updateServings('dec')
            recipeView.updateServingIngredients(state.recipe);
        }
        
    } else if (e.target.matches('.btn-increase, .btn-increase *')) {
        // Increase button is clicked
        state.recipe.updateServings('inc')
        recipeView.updateServingIngredients(state.recipe);

    } else if (e.target.matches('.recipe__btn--add, .recipe__btn--add *')) {
        controlList();
    }
    console.log(state.recipe)
});
// _____________________________________________________________________________


window.l = new List();













// _____________________________________________________________________________
// _____________________________________________________________________________


/* BIN */

// const r = new Recepe(172154);
// r.getRecipe();
// console.log(r);

// const search = new Search('maltese')
// console.log(search);
// search.getResults();

/* END BIN */