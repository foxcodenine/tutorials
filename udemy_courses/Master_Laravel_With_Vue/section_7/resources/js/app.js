import './bootstrap';


import { createApp } from 'vue';
import App from './App.vue';
import router from './routes';
import moment from "moment";
import StarRating from './components/shared/StarRating.vue'

// _____________________________________________________________________

const app = createApp(App);
app.use(router);

// --- vue Registration Global components -------------------

app.component('StarRating', StarRating)

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
import { faStar as faStarSolid, faStarHalfAlt } from '@fortawesome/free-solid-svg-icons'
import { faStar } from '@fortawesome/free-regular-svg-icons'

/* add icons to the library */
library.add(faStarSolid );
library.add(faStarHalfAlt );
library.add(faStar);

app.component('font-awesome-icon', FontAwesomeIcon);

// ----------------------------------------------------------

app.mount('#app');



