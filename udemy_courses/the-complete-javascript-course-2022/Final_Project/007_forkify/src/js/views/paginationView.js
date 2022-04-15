import icons from 'url:../../img/icons.svg'; // Parcel 2
import AbstractView from './_abstractView.js';



class PaginationView extends AbstractView {

    _parentElement = document.querySelector('.pagination');




    addHandlerButtonClick(handler) {
        this._parentElement.addEventListener('click', function(e) {

            const button = e.target.closest('.btn--inline');
            if (!button) return;

            const goToPage = parseInt(button.dataset.goto);

            handler(goToPage);

        })
    }




    _generateMarkup() {

        const data = this._data;

        const currentPage = data.page;
        const lastPage  = Math.ceil(data.results.length / data.resultsPerPage);

        // _____________________________________________________________

        let markup = '';

        let markupButtonLeft = `
            <button class="btn--inline pagination__btn--prev" data-goto='${currentPage - 1}'>
                <svg class="search__icon">
                    <use href="${icons}g#icon-arrow-left"></use>
                </svg>
                <span>Page ${currentPage - 1}</span>
            </button>
        `;

        let markupButtonRight = `
            <button class="btn--inline pagination__btn--next" data-goto='${currentPage + 1}'>
                <span>Page ${currentPage + 1}</span>
                <svg class="search__icon">
                    <use href="${icons}g#icon-arrow-right"></use>
                </svg>
            </button>
        `;

        // _____________________________________________________________

       
        switch(true) {
            
            // Page 1, and there are other pages
            case currentPage === 1 && lastPage > 1:                
                markup += markupButtonRight;
                break
            
            // Page 1, and there are No other pages
            case currentPage === 1 && currentPage === lastPage:   
                break

            // Last page
            case currentPage === lastPage && lastPage > 1:
                markup += markupButtonLeft;
                break

            // Any other page  
            case currentPage > 1 && currentPage < lastPage:
                markup += markupButtonRight;
                markup += markupButtonLeft;
                break
        }

        return markup;

    }
}


export default new PaginationView();