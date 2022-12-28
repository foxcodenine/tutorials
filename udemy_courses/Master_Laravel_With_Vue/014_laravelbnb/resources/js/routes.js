import { createRouter, createWebHistory } from "vue-router";


import Bookables from './views/BookablesPage.vue';
import Bookable from './views/BookablePage.vue';
import Review from './views/ReviewPage.vue';
import Basket from './views/BasketPage.vue';
import Login from './views/auth/LoginPage.vue';

// _____________________________________________________________________


const routes = [
    { name: 'home', path : '/',  component : Bookables },    
    { name: 'bookable', path : '/bookable/:id',  component : Bookable, props: true},    
    { name: 'review', path : '/review/:id',  component : Review, props: true},    
    { name: 'basket', path : '/basket',  component : Basket},  
    // { name: 'login', path : '/auth/login',  component : require("./views/auth/LoginPage").default},  
    { name: 'login', path : '/auth/login',  component : Login},  

];

// _____________________________________________________________________

const router = createRouter({
    history: createWebHistory(),
    routes
});

// _____________________________________________________________________

export default router;