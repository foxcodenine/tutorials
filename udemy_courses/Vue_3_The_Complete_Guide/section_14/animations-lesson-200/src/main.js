import { createApp } from 'vue';

import App from './App.vue';
import BaseModal from './components/BaseModal.vue';

const app = createApp(App);

app.component('base-modal', BaseModal);

app.mount('#app');

/*
import { createApp } from 'vue';
import { createRouter, createWebHistory} from 'vue-router';

// _____________________________________________________________________

import App from './App.vue';
import BaseModal from './components/BaseModal.vue';

import AllUsers from './pages/AllUsers.vue';
import CouseGoals from './pages/CourseGoals.vue';

// _____________________________________________________________________


const router = createRouter({
    history: createWebHistory,
    routes: [
        { path: '/',        component: AllUsers},
        { path: '/goals',   component: CouseGoals},
    ]
});


// _____________________________________________________________________

const app = createApp(App);

app.use(router);

// _____________________________________________________________________

app.component('base-modal', BaseModal);

app.mount('#app');

*/
