// import icons from '../img/icons.svg'; // Parcel 1
import icons from 'url:../../img/icons.svg'; // Parcel 2

export default class AbstractView {

    _data;

    // ________________________________
    // ________________________________

    render(data) {

        if (!data || (Array.isArray(data) && data.length === 0 )) {
            return this.renderError();
        }

        this._data = data;
        const markup = this._generateMarkup();
        this._clear();
        this._parentElement.insertAdjacentHTML('afterbegin', markup); 
    }

    // ________________________________
    update(data) {

        this._data = data;
        const newMarkup = this._generateMarkup();

        const newDOM = document.createRange().createContextualFragment(newMarkup);
        let newElements = newDOM.querySelectorAll('*');
        newElements = Array.from(newElements);

        let curElements = this._parentElement.querySelectorAll('*');
        curElements = Array.from(curElements);

        
        newElements.forEach((newEl, i) => {
            const curEl = curElements[i]
     
            
            // --- Update changed TEXT
            
            if(!newEl.isEqualNode(curEl) && 
                newEl.firstChild?.nodeValue.trim() !== '') {

                curEl.textContent = newEl.textContent;
            }
            
            // --- Update changed ATTRIBUES

            if(!newEl.isEqualNode(curEl)) {

                Array.from(newEl.attributes).forEach( function(attr) {

                    curEl.setAttribute(attr.name, attr.value)
                });
            }
        });


    }

    // ________________________________

    _clear() {
        this._parentElement.innerHTML = '';
    }

    // ________________________________


    renderSpinner() {
        let markup = `
            <div class="spinner">
                <svg>
                <use href="${icons}#icon-loader"></use>
                </svg>
            </div>
        `;
        this._clear();
        this._parentElement.insertAdjacentHTML('afterbegin', markup);
    }

    // ________________________________

    renderError(message = this._errorMessage) {
        let markup = `
            <div class="error">
                <div>
                    <svg>
                        <use href="${icons}#icon-alert-triangle"></use>
                    </svg>
                </div>
                <p>${message}</p>
            </div>
        `;
        this._clear();
        this._parentElement.insertAdjacentHTML('afterbegin', markup);
    }

    // ________________________________

    renderMessage(message = this._errorMessage) {
        let markup = `
        <div class="message">
            <div>
                <svg>
                    <use href="${icons}#icon-smile"></use>
                </svg>
            </div>
            <p>${message}</p>
        </div>
        `;
        this._clear();
        this._parentElement.insertAdjacentHTML('afterbegin', markup);
    }
}