import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';

import App from './App.vue';
import TeamsList from './components/teams/TeamsList.vue';
import UsersList from './components/users/UsersList.vue';

// _____________________________________________________________________

const router = createRouter({
    history: createWebHistory(),
    routes: [
      { path: '/teams', component: TeamsList }, 
      { path: '/users', component: UsersList },
    ],
    // linkActiveClass: 'router-link-active-newname'
});

// _____________________________________________________________________


const app = createApp(App)

app.use(router);

app.mount('#app');
