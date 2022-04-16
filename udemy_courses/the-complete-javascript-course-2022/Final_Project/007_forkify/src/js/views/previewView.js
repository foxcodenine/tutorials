import AbstractView from './_abstractView.js';
import icons from 'url:../../img/icons.svg'; // Parcel 2



class previewView extends AbstractView {

    _parentElement;                                                             // <- TODO:
    _errorMessage;                                                              // <- TODO:
    _successMessage;                                                            // <- TODO:

    // _____________________________________________

    constructor(parentElement, errorMessage, successMessage) {

        super();

        this._parentElement  = document.querySelector(parentElement);
        this._errorMessage   = errorMessage;
        this._successMessage = successMessage;
    }

    _generateMarkup() {

        const id = window.location.hash.slice(1); 

        const markupArray = this._data.map(item => {
    
            const activeClass = id == item.id ? 'preview__link--active' : '';

            return `
                <li class="preview">
                    <a class="preview__link ${activeClass}" href="#${item.id}">
                        <figure class="preview__fig">
                            <img src="${item.image}" alt="${item.title}" />
                        </figure>
                        <div class="preview__data">
                            <h4 class="preview__title">${item.title}</h4>
                            <p class="preview__publisher">${item.publisher}</p>
                        </div>
                    </a>
                </li>
            `;
        })

        const markup = markupArray.join('');

        return markup;
    }

    addHandlerRender(handler) {
        window.addEventListener('load', handler);
    }
}


// _____________________________________________________________________

const resultsView = new previewView(
    '.results', 
    'No recipe found for your search. Please try again!', 
    ''
);

const bookmarksView = new previewView(
    '.bookmarks__list', 
    'No bookmarks yet. Find a nice recipe and bookmark it!', 
    ''
);

export {resultsView, bookmarksView};