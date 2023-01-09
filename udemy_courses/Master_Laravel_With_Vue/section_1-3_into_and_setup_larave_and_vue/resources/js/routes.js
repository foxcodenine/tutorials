import { createRouter, createWebHistory } from "vue-router";

import SecondExampleComponent from './views/Example2.vue';
import Bookables from './views/Bookables.vue';

// _____________________________________________________________________


const routes = [
    { name: 'home', path : '/013/',  component : Bookables },
    { name: 'second', path : '/013/second',  component : SecondExampleComponent  },
];

// _____________________________________________________________________

const router = createRouter({
    history: createWebHistory(),
    routes
});

// _____________________________________________________________________

export default router;