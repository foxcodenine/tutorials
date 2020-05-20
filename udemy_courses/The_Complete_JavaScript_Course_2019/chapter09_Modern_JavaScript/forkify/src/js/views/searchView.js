// export 
// const myAddFunc = (...i) => {
//     let r = 0;
//     for( let n of i) {
//         r += n
//     };
//     return r;
// };

// export
// const myMultipleFunc = (...i) => {
//     let r = i.shift();
//     for(let n of i) {
//         r *= n
//     };
//     return r;
// };
// _____________________________________________________________________________
// _____________________________________________________________________________


import { elements } from './base'

// _____________________________________________________________________________

export const getInputs = () => elements.searchInput.value;


// _____________________________________________________________________________

export const clearInput = () => {
    elements.searchInput.value = ' ';
};

// _____________________________________________________________________________

export const clearResults = () => {
    elements.searchResList.innerHTML = '';
};
// _____________________________________________________________________________
const limitRecipeTitle = (title, limit=15) => {
    const newTitle = []; 

    if(title.length > limit) {
        title.split(' ').reduce((acc, curr) => {

            if (acc + curr.length <= limit) {
                newTitle.push(curr);                
            }
            return acc + curr.length;
                  
        }, 0);          
       
        return `${newTitle.join(' ')}...`
    } 
    return title;    
};

// _____________________________________________________________________________

const renderRecipe = recipe => {
    const markup =  `    
    <li>
        <a class="results__link" href="#${recipe.id}">
            <figure class="results__fig">
                <img src="${recipe.image}" alt="Test">
            </figure>
            <div class="results__data">
                <h4 class="results__name">${limitRecipeTitle(recipe.title)}</h4>
                <p class="results__author">recipe id:${recipe.id}</p>
            </div>
        </a>
    </li>

    `;
    elements.searchResList.insertAdjacentHTML('beforeend', markup);
};

// _____________________________________________________________________________


export const renderResults = recipes => {
    recipes.forEach(renderRecipe);
};