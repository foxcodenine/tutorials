import 'core-js/stable';
import "regenerator-runtime/runtime.js";


import * as model from './moduel.js';
import recipeView from './views/recipeView.js'


// _____________________________________________________________________
// _____________________________________________________________________

const recipeContainer = document.querySelector('.recipe');



// https://forkify-api.herokuapp.com/v2

// _____________________________________________________________________
// _____________________________________________________________________

// fetch('https://forkify-api.herokuapp.com/api/v2/recipes/5ed6604591c37cdc054bc886')
// .then(res => res.json())
// .then(data => console.log(data.data.recipe))



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


  } catch (err) {
    alert(err);
    console.error(err);
  }
}



// _____________________________________________________________________

// controlRecipies();

['hashchange', 'load'].forEach(ev => window.addEventListener(ev, controlRecipies));
// window.addEventListener('hashchange', controlRecipies);
// window.addEventListener('load', controlRecipies);









