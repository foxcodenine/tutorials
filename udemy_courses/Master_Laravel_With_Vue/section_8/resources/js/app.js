import './bootstrap';


import { createApp } from 'vue';

import router from './routes';
import store from './store';

import App from './App.vue';
import moment from "moment";
import StarRating from './components/shared/StarRating.vue';
import FatalError from './components/shared/FatalError.vue';
import ValidationErrors from './components/shared/ValidationErrors.vue';
import SussessMessage from './components/shared/SussessMessage.vue';

// _____________________________________________________________________

const app = createApp(App);
app.use(router);
app.use(store);

// --- vue Registration Global components -------------------

app.component('StarRating', StarRating);
app.component('FatalError', FatalError);
app.component('ValidationErrors', ValidationErrors);
app.component('SussessMessage', SussessMessage);

// --- vue Using globalProperties ---------------------------

// Using globalProperties 
// (https://v3-migration.vuejs.org/breaking-changes/filters.html#global-filters)

app.config.globalProperties.$filters = {
    timeFromNow(value) {
        return moment(value).fromNow();
    }
}

// --- vue adding fontawsome---------------------------------

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */
import { faStar as faStarSolid, faStarHalfAlt, faBomb } from '@fortawesome/free-solid-svg-icons'
import { faStar, faThumbsUp } from '@fortawesome/free-regular-svg-icons'

/* add icons to the library */
library.add(faStarSolid );
library.add(faStarHalfAlt );
library.add(faStar);
library.add(faBomb);
library.add(faThumbsUp);

app.component('font-awesome-icon', FontAwesomeIcon);

// ----------------------------------------------------------

app.mount('#app');



