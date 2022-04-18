import icons from 'url:../../img/icons.svg'; // Parcel 2
import AbstractView from './_abstractView.js';



class AddRecipeView extends AbstractView {

    _parentElement = document.querySelector('.upload');
    _message  = 'Recipe was successfully uploaded :)';
    
    _window   = document.querySelector('.add-recipe-window');
    _overlay  = document.querySelector('.overlay');
    _btnOpen  = document.querySelector('.nav__btn--add-recipe');
    _btnClose = document.querySelector('.btn--close-modal');

    
    
    _ingredientsNumber = 6;

    // ____________________________________

    constructor() {
        super();
        this._addHandlerShowWindow();
        this._addHandlerHideWindow();
        this._addIngredent();
        // this.addHandlerUpload()
    }

    // ____________________________________

    _toggleWindow() {
        this._overlay.classList.toggle('hidden');
        this._window.classList.toggle('hidden');
    }

    _addHandlerShowWindow() {        
        this._btnOpen.addEventListener('click', this._toggleWindow.bind(this));
    }

    _addHandlerHideWindow() {
        this._overlay.addEventListener('click', this._toggleWindow.bind(this));
        this._btnClose.addEventListener('click', this._toggleWindow.bind(this));
    }

    addHandlerUpload(handler) {

        this._parentElement.addEventListener('submit', function(e){
        
            e.preventDefault();

            const data       = new FormData(this);
            const dataArray  = [...data];
            const dataObject = Object.fromEntries(dataArray);
            
            handler(dataObject);  

        });
    }

    // ____________________________________

    _addIngredent () {

        let self = this;

        this._parentElement.addEventListener('click', function(e) {

            const btnAdd = e.target.closest('.add-ingredient');

            if (!btnAdd) return;

            ++self._ingredientsNumber;

            const markup = `
                <label>Ingredient ${self._ingredientsNumber}</label>
                <input
                type="text"
                name="ingredient-${self._ingredientsNumber}"
                placeholder="Format: 'Quantity, Unit, Description'"
                />
            `;

            const container = this.querySelector('.ingredient-container');

            container.insertAdjacentHTML('beforeend', markup);

        })
    }
    // ____________________________________

    _generateMarkup() {


        let markup = '';


        return markup;

    }
}


export default new AddRecipeView();