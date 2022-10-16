/* eslint-disable */
import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';

// _____________________________________________________________________

import App from './App.vue';
import BaseModal from './components/BaseModal.vue';

import AllUsers from './pages/AllUsers.vue';
import CourseGoals from './pages/CourseGoals.vue';

// _____________________________________________________________________


const router = createRouter({
    history: createWebHistory(),
    routes: [
        { name: 'allusers',  path: '/',        component: AllUsers},
        { name: 'goals',    path: '/goals',   component: CourseGoals},
    ]
});


// _____________________________________________________________________

const app = createApp(App);

app.use(router);


// _____________________________________________________________________

// ~~> UPDATED:
// app.mount('#app');

// ~~> TO: (This will remove the  initial route transition when you vist
//          the page)
router.isReady().then(() => app.mount('#app'))

// _____________________________________________________________________

app.component('base-modal', BaseModal);



/*
import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';

import App from './App.vue';
import BaseModal from './components/BaseModal.vue';
import AllUsers from './pages/AllUsers.vue';
import CourseGoals from './pages/CourseGoals.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', component: AllUsers },
    { path: '/goals', component: CourseGoals }
  ]
});

const app = createApp(App);

app.component('base-modal', BaseModal);

app.use(router);

router.isReady().then(function() {
  app.mount('#app');
});
*/


