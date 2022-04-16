
if (module.hot) {
  module.hot.accept();
}

// _____________________________________________________________________
// _____________________________________________________________________


import 'core-js/stable';
import "regenerator-runtime/runtime.js";
import { async } from 'regenerator-runtime/runtime.js';


import * as model     from './moduel.js';
import recipeView     from './views/recipeView.js'
import searchView     from './views/seachView.js'
import paginationView from './views/paginationView.js'

// import resultsView    from './views/resultsView.js'
// import bookmarksView    from './views/bookmarksView.js'
import { resultsView, bookmarksView } from './views/previewView';


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

    // 3) Update resultsView list (highlight current reciepy)
    resultsView.update(model.getSeachResultsPage());

    // ______________________________________

    // 4) Update bookmarksView list (highlight current reciepy)
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
// init function

(function() {  
  // model.clearBookmarks();
  model.fetchBookmarks();  
  
  bookmarksView.addHandlerRender(controlBookmarks);
  recipeView.addHandlerRender(controlRecipies);  
  recipeView.addHandlerUpdateServings(controlServings);
  recipeView.addHandlerToggleBookmark(controlToggleBookmark);
  searchView.addHandlerSearch(controlSearchResults);
  paginationView.addHandlerButtonClick(controlPagination);  
  
})();






 





