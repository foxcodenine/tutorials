// import $ from "jquery"

class Search {

    // --- 1. describe and create/initiate our object
    constructor() {
        this.resultsDiv     = document.querySelector('#search-overlay__results');
        this.openButtons    = document.querySelectorAll('.js-search-trigger');
        this.closeButton    = document.querySelector('.search-overlay__close');
        this.searchOverlay  = document.querySelector('.search-overlay');
        this.searchField    = document.querySelector('#search-term');
        this.body           = document.querySelector('body');
        this.isOverlayOpen  = false;
        this.isSpinnerVisable = false;
        this.previousValue;
        this.typingTimer;
        this.events();
    }

    // --- 2. events
    events() {
        this.openButtons.forEach(btn => {
            btn.addEventListener('click', this.openOverlay.bind(this));
        });
        
        this.closeButton.addEventListener('click', this.closeOverlay.bind(this));
      
        document.addEventListener('keydown', e => this.keyPressDispatcher(e));

        this.searchField.addEventListener('keydown', () => this.typingLogic());
    }


    // --- 3. methods (function, action...)

    openOverlay() {    
        this.searchOverlay.classList.add('search-overlay--active');
        this.body.classList.add('body-no-scroll');
        this.isOverlayOpen = true;
        this.searchField.value = "";
        setTimeout(() => this.searchField.focus(), 300);        
    }

    closeOverlay() {
        this.searchOverlay.classList.remove('search-overlay--active');
        this.body.classList.remove('body-no-scroll');
        this.isOverlayOpen = false;
        this.searchField.blur();
    }

    keyPressDispatcher(e) {
        if (e.key === 'Escape' && this.isOverlayOpen) this.closeOverlay();

        // if (e.key === 's' && !this.isOverlayOpen) this.openOverlay();
    }

    typingLogic() {
        
        if (this.searchField.value === this.previousValue) return;

        if (this.typingTimer) clearTimeout(this.typingTimer);

        if  (this.searchField.value) {

            if (!this.isSpinnerVisable) {
                this.resultsDiv.innerHTML = '<div class="spinner-loader"></div>';
                this.isSpinnerVisable = true;
            }  

            this.typingTimer = setTimeout(() => {       
                this.isSpinnerVisable = false;                 
                this.getResults();
            }, 2000); 

        } else {
            this.resultsDiv.innerHTML = '';
            this.isSpinnerVisable = false; 
        }
        
        this.previousValue = this.searchField.value;
    }

    getResults() {
        this.resultsDiv.innerHTML = 'Imagen real search results';
        console.log(444);
    }
}

export default Search;