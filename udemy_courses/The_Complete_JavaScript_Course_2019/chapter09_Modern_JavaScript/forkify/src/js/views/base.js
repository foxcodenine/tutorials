export const elements = {
    searchForm: document.querySelector('.search'),
    searchInput: document.querySelector('.search__field'),
    searchResList: document.querySelector('.results__list'),
    searchRes: document.querySelector('.results'),
};
// _____________________________________________________________________

export const elementStrings = {
    loader: 'loader'  // <- so we can use it in both cases (A)
}



// _____________________________________________________________________

export const renderLoader = parent => {
    const loader = `
    <div class="${elementStrings.loader}"> 
        <svg>
            <use href="img/icons.svg#icon-cw"></use> 
        </svg>
    </div> 
    `; // <- (A)
    parent.insertAdjacentHTML('afterbegin', loader);    
}; 

// _____________________________________________________________________

export const clearLoader = () => {
    const loader = document.querySelector(`.${elementStrings.loader}`); // <- (A)
    if (loader) {
        loader.parentElement.removeChild(loader)
    };
}