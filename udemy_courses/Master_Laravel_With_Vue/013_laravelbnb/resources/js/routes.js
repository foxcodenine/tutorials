import { createRouter, createWebHistory } from "vue-router";
import ExampleComponent from './views/ExampleComponent.vue';
import SecondExampleComponent from './views/Example2.vue';

// _____________________________________________________________________


const routes = [
    { name: 'home', path : '/013/',  component : ExampleComponent },
    { name: 'second', path : '/013/second',  component : SecondExampleComponent  },
];

// _____________________________________________________________________

const router = createRouter({
    history: createWebHistory(),
    routes
});

// _____________________________________________________________________

export default router;