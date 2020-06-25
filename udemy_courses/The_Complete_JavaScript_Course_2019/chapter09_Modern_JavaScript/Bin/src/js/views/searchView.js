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
    elements.searchResPages.innerHTML = '';
};
// _____________________________________________________________________

export const highlightClear = () => {
    
    const nodeArray = document.querySelectorAll(`.results__link--active`);

    Array.from(nodeArray).forEach(el => {
        el.classList.remove('results__link--active');
    })   
}


export const highlightSelected = id => {
    document.querySelector(`a[href="#${id}"]`).classList.add('results__link--active');

}

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


const createButton = (page, type) => `
    <button class="btn-inline results__btn--${type}" data-goto=${type === 'prev' ? page - 1 : page + 1}>
    <span>Page ${type === 'prev' ? page - 1 : page + 1}</span>
        <svg class="search__icon">
            <use href="img/icons.svg#icon-triangle-${type === 'prev' ? 'left' : 'right'}"></use>
        </svg>

    </button>
`;



const renderButtons = (page, numResults, resPerPage) => {

    const pages = Math.ceil(numResults / resPerPage);

    let button;
    if ( page === 1 && pages > 1) {
        // display only next button
        button = createButton(page, 'next');
    } else if (page > 1 &&  page < pages) {
        // display both bottons
        button = `
        ${createButton(page, 'prev')}
        ${createButton(page, 'next')}
        `;
    } else if ( page === pages && page > 1) {
        // display prev button
        button = createButton(page, 'prev');
    }

    elements.searchResPages.insertAdjacentHTML('afterbegin', button);   
};

export const renderResults = (recipes, page=1, resPerPage=10) => {
    // render results of current page
    const start = (page-1 ) * resPerPage;
    const end = page * resPerPage;

    recipes.slice(start, end).forEach(renderRecipe);
    // render the pagination button
    renderButtons(page, recipes.length, resPerPage);
};