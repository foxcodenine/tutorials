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


import axios from 'axios'

async function getResults(query) {
    const myKey = 'b3bb9752f3d1449bbf6a1cf302da308e';
    try {
        const res = await axios(`https://api.spoonacular.com/recipes/search?query=${query}&apiKey=${myKey}`);
        const recipes = res.data.results
        console.log(recipes)
    }
    catch(error) {
        alert(error)
    }    
}

getResults('chinese');




