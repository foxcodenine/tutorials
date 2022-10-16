import { createRouter, createWebHistory } from 'vue-router';


import TeamsList from './pages/TeamsList/IndexPage.vue';
import TeamMembers from './pages/TeamsList/TeamMembersPage.vue';
import UsersList from './pages/UserList/IndexPage.vue';
import NotFound from './pages/NotFoundPage.vue';


const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path : '/', redirect: '/teams' },

        {
            name : 'teams', 
            path : '/teams', 
            component : TeamsList,
            children : [
                { name: 'team-members', path : ':teamId', component : TeamMembers, props: true}
            ]
        },

        // (NOTE): we are using  redirect instead of the following alias:
        // { path : '/teams', component : TeamsList, alias: '/' },              

        // (NOTE): we are using a child route instead of the following route:
        // { path : '/teams/:teamId', component : TeamMembers, props: true },   

        { path : '/users', component : UsersList },

        { path : '/:notFound(.*)', component : NotFound},
    ],
    linkActiveClass: 'router-link-active',
    linkExactActiveClass: 'router-link-exact-active'
});

export default router;