import { createRouter, createWebHistory } from "vue-router";


import Bookables from './views/Bookables.vue';
import Bookable from './views/Bookable.vue';

// _____________________________________________________________________


const routes = [
    { name: 'home', path : '/',  component : Bookables },    
    { name: 'bookable', path : '/bookable/:id',  component : Bookable, props: true},    
];

// _____________________________________________________________________

const router = createRouter({
    history: createWebHistory(),
    routes
});

// _____________________________________________________________________

export default router;