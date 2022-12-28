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


// --- Axios Interceptors ----------------------------------------------

//     You can intercept requests or responses before they are handled
//     by then or catch.

//     Here we are using it to log the user out if he is not authenticated 
//     https://axios-http.com/docs/interceptors
window.axios.interceptors.response.use (
    response => {
        return response;
    },
    error => {
        if (401 === error.response.status) {
            store.dispatch("logout");
            // Note - we have access to the store because we are  
            //        importing it above.
        }
        return Promise.reject(error);
        // Here we are making sure that the promis is being rejected
        // after intercepting it 
    }
)

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
import { faStar as faStarSolid, faStarHalfAlt, faBomb, faCircleNotch, faSpinner, faCircleInfo, faTrash} from '@fortawesome/free-solid-svg-icons'
import { faStar, faThumbsUp } from '@fortawesome/free-regular-svg-icons'

/* add icons to the library */
library.add(faStarSolid );
library.add(faStarHalfAlt );
library.add(faStar);
library.add(faBomb);
library.add(faThumbsUp);
library.add(faCircleNotch);
library.add(faSpinner);
library.add(faCircleInfo);
library.add(faTrash);

app.component('font-awesome-icon', FontAwesomeIcon);

// ----------------------------------------------------------

app.mount('#app');



