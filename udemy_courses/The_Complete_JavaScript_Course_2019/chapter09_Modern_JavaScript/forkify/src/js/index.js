/* BIN */

// nicole gristi
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
 * .setAttribute
 * .querySelector('.recipe__love use')   'select all use chiled of class .recipe_love'
 * localStorageAPI  
 *          localStorage.setItem('id', '2hjh67')
 *          localStorage.getItem('id)
 *          localStorage.removeItem('id')
 *          localStorage.length
 * 
 * JSON.stringify(this.likes);     <- convert into a sting
 * JSON.parse(localStorage.getItem('like')); 
 */







// _____________________________________________________________________________

// External Packages
// https://github.com/ekg/fraction.js/
// https://github.com/adamhalasz/uniqid

import Search from './models/Search';
import Recepe from './models/Recipe';
import List from './models/List';
import Likes from './models/Likes';
import * as searchView from './views/searchView';
import * as recipeView from './views/recipeView';
import * as listView from './views/listView';
import * as likeView from './views/likesView'
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
            
            let isLiked = false;
            let numOfLikes = 0;
            if (state.likes) {
                isLiked = (state.likes.isLiked(state.recipe.id)) ? true : false
                numOfLikes = state.likes.getNumLikes();
            }
            
            
            await recipeView.renderRecipe(state.recipe, isLiked);
            await likeView.toggleLikeIcon(numOfLikes);

 

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

        const servings = parseFloat(state.recipe.servings)
        // Add each ingredient to the list and UI
        state.recipe.ingredients.forEach(ing => {
            const item = state.list.addItem(ing.count, ing.unit, ing.name);
            listView.renderItem(item, servings);
        })

    }

// _____________________________________________________________________
/* Delete and Update list item Controller */

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
/* Like Controller */

const controllerLike = () => {

    // Create a new Like object IF there is none and set it to states.likes

    if (!state.likes) state.likes = new Likes();
    const currentID = state.recipe.id;

    // if current recepe is not liked:
    if (!state.likes.isLiked(currentID)) {
        
        // Add like to the state
        const newLike = state.likes.addLike(
                                            currentID, 
                                            state.recipe.title, 
                                            state.recipe.image
                                            );

        // Toggle the like button 
        likeView.toggleLikeBtn(state.likes.isLiked(currentID));
        likeView.toggleLikeIcon(state.likes.getNumLikes());

        // Add like to UI list
        likeView.renderLike(newLike);

        // likeView.clearLikes ()
        // state.likes.likes.forEach(like => likeView.renderLike(like));

        


    // if current recepe is  liked:
    } else {  

        // Delete like to the state     
        state.likes.deleteLike(currentID);

        // Toggle the like button 
        likeView.toggleLikeBtn(state.likes.isLiked(currentID));
        likeView.toggleLikeIcon(state.likes.getNumLikes());
        
        // Remove like from UI list
        likeView.deleteLike (currentID);
        
        // state.likes.likes.forEach(like => likeView.renderLike(like));


    }
    console.log(state);

}



// _____________________________________________________________________
/* Handling recipe buttons click */

/** Controle the 
    * decrease btm, 
    * increase btn , 
    * add to list btn 
    * and the likes btn  */

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
        // Add ingredent to shopping list
        controlList();

    } else if (e.target.matches('.recipe__love, .recipe__love *')) {
        // Like controller 
        controllerLike();
    }



    // console.log(state.recipe)
});

// Restore ;oked resipes on page load 
window.addEventListener('load', () => {
    state.likes = new Likes();

    // Restore likes from localStorage
    state.likes.readStorage();

    // Cleaning and Render the existing likes
    likeView.clearLikes ()
    state.likes.likes.forEach(like => likeView.renderLike(like));

    // Toggle like menu button
    likeView.toggleLikeIcon(state.likes.getNumLikes());
})

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