import { createRouter, createWebHistory } from "vue-router";


import Bookables from './views/BookablesPage.vue';
import Bookable from './views/BookablePage.vue';
import Review from './views/ReviewPage.vue';
import Basket from './views/BasketPage.vue';

// _____________________________________________________________________


const routes = [
    { name: 'home', path : '/',  component : Bookables },    
    { name: 'bookable', path : '/bookable/:id',  component : Bookable, props: true},    
    { name: 'review', path : '/review/:id',  component : Review, props: true},    
    { name: 'basket', path : '/basket',  component : Basket},    
];

// _____________________________________________________________________

const router = createRouter({
    history: createWebHistory(),
    routes
});

// _____________________________________________________________________

export default router;