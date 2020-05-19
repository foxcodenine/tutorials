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

// `https://api.spoonacular.com/recipes/search?query=${this.query}&apiKey=${myKey}`

// _____________________________________________________________________________

import Search from './models/Search';
import * as searchView from './views/searchView'
import {elements} from './views/base';


/**Global state of the app
 *  - Search object
 *  - Current recipe object
 *  - Shopping list object
 *  - Liked recipes
 */
const state = {};



const controlSearch = async () => {
    // 1) Get query from view 
    const query = searchView.getInputs();

    if (query) {
        // 2) New search object and add to state
        state.search = new Search(query);

        // 3) Prepare UI for results
        searchView.clearInput();
        searchView.clearResults();

        // 4) Search for recipes 
        await state.search.getResults();

        // 5) Render results on UI
        console.log(state.search.results)
        searchView.renderResults(state.search.results);
        
    }

};


elements.searchForm.addEventListener('submit', e => {
    e.preventDefault();
    controlSearch();
    
});




// const search = new Search('maltese')
// console.log(search);
// search.getResults();