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

    // ________________________

    // --- 2. events
    events() {
        this.openButtons.forEach(btn => {
            btn.addEventListener('click', this.openOverlay.bind(this));
        });
        
        this.closeButton.addEventListener('click', this.closeOverlay.bind(this));
      
        document.addEventListener('keydown', e => this.keyPressDispatcher(e));

        this.searchField.addEventListener('keyup', () => this.typingLogic());
        
    }

    // ________________________

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

    // ________________________

    typingLogic() {
        
        if (this.searchField.value === this.previousValue) return;

        if (this.typingTimer) clearTimeout(this.typingTimer);

        if  (this.searchField.value) {

            if (!this.isSpinnerVisable) {
                this.resultsDiv.innerHTML = '<div class="spinner-loader"></div>';
                this.isSpinnerVisable = true;
            }  

            this.typingTimer = setTimeout(() => {       
                                 
                this.fetchResults();
            }, 800); 

        } else {
            this.resultsDiv.innerHTML = '';
            this.isSpinnerVisable = false; 
        }
        
        this.previousValue = this.searchField.value;
    }

    // ________________________

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

    // ________________________

    async fetchResults() {

        let markup;

        try {
            let results = await fetch(`${WPVars.baseURL}/wp-json/university/v1/search?term=${this.searchField.value}`);
            let data   = await results.json();
            markup = this.fetchResultsMarkup(data);

        } catch (e) {
            markup = '<p>Unexpacted error, please try again later!</p>'
            console.error(e);
        }
        this.isSpinnerVisable = false;
        this.resultsDiv.innerHTML = markup;
    }

    // ________________________

    fetchResultsMarkup(data) {

        let markup = `
        <div class="row">
            <div class="one-third">
                <h2 class="search-overlay__section-title">General Information</h2>
                ${ this.createList('general info', data['generalInfo']) }
            </div>
            <div class="one-third">
                <h2 class="search-overlay__section-title">Programs</h2>
                ${ this.createList('programs', data['programs']) }
                <h2 class="search-overlay__section-title">Professors</h2>
                ${ this.createList('professors', data['professors']) }
            </div>
            <div class="one-third">
                <h2 class="search-overlay__section-title">Campuses</h2>
                ${ this.createList('campuses', data['campuses']) }
                <h2 class="search-overlay__section-title">Events</h2>
                ${ this.createList('events', data['events']) }
            </div>
        </div>
        `;
        return markup
    }

    // ________________________

    createList(name, field) {

        if (field.length <= 0) return `<p>No ${name} matches that search.</p>`

        if (name === 'professors') {
            return `
            <ul class="professor-cards">
                ${field.map((item) => 
                    `<li class="professor-card__list-item">
                        <a class="professor-card" href="${item.permalink}">
                            <img src="${item.thumbnail}" alt="" class="professor-card__image">
                            <span class="professor-card__name">${item.title}</span>
                        </a>                            
                    </li>`
                ).join('')}
            </ul>`;  
        }

        if (name === 'events') {

            return `${field.map((item) => 
                `<div class="event-summary event-summary-min">
                    <a class="event-summary__date t-center" href="${item.permalink}">
                        <span class="event-summary__month">${item.eventDate.month}</span>
                        <span class="event-summary__day">${item.eventDate.day}</span>
                    </a>
                    <div class="event-summary__content">
                        <h5 class="event-summary__title headline headline--tiny">
                            <a href="${item.permalink}">${item.title}</a>
                        </h5>
                        <p>
                            ${item.description}
                            <a href="${item.permalink}" class="nu gray">Learn more</a>
                        </p>
                    </div>
                </div>`
            ).join('')}`;
        }
        
        return `
            <ul class="link-list min-list">
                ${field.map((item) => 
                    `<li class="min">
                        <a href="${item.permalink}">${item.title}</a>
                        ${ item.postType === 'post' ? ' by ' + item.authorName : '' }
                    </li>`
                ).join('')}
            </ul>`;   
    }





    // ________________________

    // --- Out dated to fetchResults - to out custom apt
    // async getResults() {

    //     let markup;

    //     try {
    //         this.resultsDiv.innerHTML = '';                 
            
    //         const [postsResponse, pagesResponse] = await Promise.all([
    //             fetch(`${WPVars.baseURL}/wp-json/wp/v2/posts?search=${this.searchField.value}`),
    //             fetch(`${WPVars.baseURL}/wp-json/wp/v2/pages?search=${this.searchField.value}`)
    //         ]);
            
    //         const [postsData, pagesData] = await Promise.all([
    //             postsResponse.json(), pagesResponse.json()
    //         ]);  
            
    //         let data = [...postsData, ...pagesData];            
            
    //         if (data.length > 0) {
                
    //             markup = `
    //             <h2 class="search-overlay__section-title">General Information</h2>
    //             <ul class="link-list min-list">
    //                 ${data.map((post) => 
    //                             `<li>
    //                                 <a href="${post.link}">${post.title.rendered}</a>
    //                                 ${ post.authorName ? ' by ' + post.authorName : '' }
    //                             </li>`
    //                 ).join('')}
    //             </ul>            
    //             `;
                
    //         } else {
    //             markup = '<p>No general information matches that search.</p>'
    //         }
            
    //     } catch (e) {
    //         markup = '<p>Unexpacted error, please try again later!</p>'
    //         console.error(e);
    //     }

    //     this.isSpinnerVisable = false;
    //     this.resultsDiv.innerHTML = markup;
        
    // }


}

export default Search;