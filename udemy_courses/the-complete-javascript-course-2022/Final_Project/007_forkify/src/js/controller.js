
if (module.hot) {
  module.hot.accept();
}

// _____________________________________________________________________
// _____________________________________________________________________


import 'core-js/stable';
import "regenerator-runtime/runtime.js";
import { async } from 'regenerator-runtime/runtime.js';


import * as model     from './moduel.js';
import recipeView     from './views/recipeView.js';
import searchView     from './views/seachView.js';
import paginationView from './views/paginationView.js';
import addRecipeView from './views/addRecipeView.js';

// import resultsView    from './views/resultsView.js'
// import bookmarksView    from './views/bookmarksView.js'
import { resultsView, bookmarksView } from './views/previewView';
import {  MODAL_CLOSE_SEC } from "./config.js";


// _____________________________________________________________________
// _____________________________________________________________________

// https://forkify-api.herokuapp.com/v2

// _____________________________________________________________________
// _____________________________________________________________________

// fetch('https://forkify-api.herokuapp.com/api/v2/recipes/5ed6604591c37cdc054bc886')
// .then(res => res.json())
// .then(data => console.log(data.data.recipe))

// _____________________________________________________________________
// _____________________________________________________________________

async function controlRecipies() {

  const id = window.location.hash.slice(1);

  if (!id) return;

  recipeView.renderSpinner();

  try {

    // 1) Loading recipe into state
    await model.loadRecipe(id);

    // ______________________________________

    // 2) Rendering recipe 
    recipeView.render(model.state.recipe);  
    
    // ______________________________________

    // 3) Update resultsView list (highlight current recipe)
    resultsView.update(model.getSeachResultsPage());

    // ______________________________________

    // 4) Update bookmarksView list (highlight current recipe)
    bookmarksView.update(model.state.bookmarks);

    // ______________________________________

  } catch (err) {
    console.error(`CONTROLLER: ${err}`);
    recipeView.renderError();
  }
}

// _____________________________________________________________________


async function controlSearchResults() {

  try {    
        
    // 1) Get search query
    const query = searchView.getQuery();
    if (!query) return; 
    resultsView.renderSpinner();  


    // 2) Load search results
    await model.loadSearchResuls(query);

    // 3) Render results
    // resultsView.render(model.state.search.results);
    resultsView.render(model.getSeachResultsPage(1));
    

    // 4) Render pagination buttons
    paginationView.render(model.state.search)
    

  } catch (err) {
    console.error(`CONTROLLER: ${err}`);
    recipeView.renderError();
  }
}

// _____________________________________________________________________

function controlPagination(gotToPage) {

  // 1) Save new page in state
  model.state.search.page = gotToPage;

  // 2) Render new results
  resultsView.render(model.getSeachResultsPage(gotToPage));

  // 3) Render new  pagination buttons
  paginationView.render(model.state.search)

}

// _____________________________________________________________________

function controlServings(newServings) {

  // Update the recipe servings (in state)
  model.updateServings(newServings);

  // Update the recipe view when changing servings   
  recipeView.update(model.state.recipe);

}

// _____________________________________________________________________

function controlBookmarks() {

  bookmarksView.render(model.state.bookmarks)
}


function controlToggleBookmark() {

  // --- Add and remove bookmaks
  model.toggleBookmark(model.state.recipe);
  
  // --- Update recipe view
  recipeView.update(model.state.recipe);

  // --- Render bookmarks
  bookmarksView.render(model.state.bookmarks)
}

// _____________________________________________________________________

async function controlAddRecipe(newRecipe) {
  try {
    // Show loading spinner
    addRecipeView.renderSpinner();

    // Upload the new recipe data
    await model.uploadRecipe(newRecipe);
    console.log(model.state.recipe);

    // Render recipe
    recipeView.render(model.state.recipe);

    // Success message
    addRecipeView.renderMessage();

    // Render bookmark view
    bookmarksView.render(model.state.bookmarks);

    // Change id in the URL
    window.history.pushState(null, '', `#${model.state.recipe.id}`);

    // Close form window
    setTimeout(function(){
      addRecipeView._toggleWindow();
    }, MODAL_CLOSE_SEC * 1000);

  } catch (err) {
    console.error(`CONTROLLER: ${err}`);
    addRecipeView.renderError(err.message);
  }
  
}

// _____________________________________________________________________

// init function (use publisher subscriber pattern)

(function() {  
  // model.clearBookmarks();
  model.fetchBookmarks();  
  
  bookmarksView.addHandlerRender(controlBookmarks);
  recipeView.addHandlerRender(controlRecipies);  
  recipeView.addHandlerUpdateServings(controlServings);
  recipeView.addHandlerToggleBookmark(controlToggleBookmark);
  searchView.addHandlerSearch(controlSearchResults);
  paginationView.addHandlerButtonClick(controlPagination);  
  addRecipeView.addHandlerUpload(controlAddRecipe) 
  
})();








 





