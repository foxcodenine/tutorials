// import $ from "jquery"

class Search {

    // --- 1. describe and create/initiate our object
    constructor() {

        // --- adding the Search div

        this.addSearchHtml();
        // _______________________________________
    
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

        this.searchField.addEventListener('keyup', () => this.typingLogic());
        
    }


    // --- 3. methods (function, action...)

    openOverlay() {    
        this.searchOverlay.classList.add('search-overlay--active');
        this.body.classList.add('body-no-scroll');
        this.isOverlayOpen = true;
        this.searchField.value = "";
        setTimeout(() => this.searchField.focus(), 301);        
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
                                 
                this.getResults();
            }, 800); 

        } else {
            this.resultsDiv.innerHTML = '';
            this.isSpinnerVisable = false; 
        }
        
        this.previousValue = this.searchField.value;
    }


    async getResults() {

        let markup;

        try {

            this.resultsDiv.innerHTML = '';                 
            
            const [postsResponse, pagesResponse] = await Promise.all([
                fetch(`${WPVars.baseURL}/wp-json/wp/v2/posts?search=${this.searchField.value}`),
                fetch(`${WPVars.baseURL}/wp-json/wp/v2/pages?search=${this.searchField.value}`)
            ]);
            
            const [postsData, pagesData] = await Promise.all([
                postsResponse.json(), pagesResponse.json()
            ]);  
            
            let data = [...postsData, ...pagesData];
            
            
            if (data.length > 0) {
                
                markup = `
                <h2 class="search-overlay__section-title">General Information</h2>
                <ul class="link-list min-list">
                ${data.map(post => `<li><a href="${post.link}">${post.title.rendered}</a></li>`).join('')}
                </ul>            
                `;
                
            } else {
                markup = '<p>No general information matches that search.</p>'
            }
            
        } catch (e) {
            markup = '<p>Unexpacted error, please try again later!</p>'
            console.error(e);
        }


        this.isSpinnerVisable = false;
        this.resultsDiv.innerHTML = markup;
        
    }

    addSearchHtml() {
        const searchDiv = document.createElement('div');
        searchDiv.classList.add('search-overlay');
        searchDiv.innerHTML = `
            <div class="search-overlay__top">
                <div class="container container--search">
                    <i class="fa fa-search search-overlay__icon" aria-hidden="true"></i>
                        <input type="text" class="search-term" id="search-term" 
                            placeholder="What are you looking for?">
                    <i class="fa fa-window-close search-overlay__close" aria-hidden="true"></i>
                </div>
            </div>
            <div class="container">
                <div id="search-overlay__results"></div>
            </div>      
            `
        document.querySelector('footer').insertAdjacentElement('afterend', searchDiv);
    }
}

export default Search;