import { createRouter, createWebHistory } from 'vue-router';


import TeamsList from './pages/TeamsList/IndexPage.vue';
import TeamMembers from './pages/TeamsList/TeamMembersPage.vue';
import UsersList from './pages/UsersList/IndexPage.vue';
import NotFound from './pages/NotFoundPage.vue';
import TeamsFooter from './pages/TeamsList/TeamsFooter.vue'
import UsersFooter from './pages/UsersList/UsersFooter.vue'


/* eslint-disable */
const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path : '/', redirect: '/teams' },

        {
            name : 'teams', 
            path : '/teams', 
            // component : TeamsList,
            components : {default: TeamsList, footer: TeamsFooter},
            meta: { needAuth: true },
            children : [
                { name: 'team-members', path : ':teamId', component : TeamMembers, props: true}
            ]
        },

        // (NOTE): we are using  redirect instead of the following alias:
        // { path : '/teams', component : TeamsList, alias: '/' },              

        // (NOTE): we are using a child route instead of the following route:
        // { path : '/teams/:teamId', component : TeamMembers, props: true },   

        {
            path : '/users', 
            // component : UsersList,
            components : {default: UsersList, footer: UsersFooter},
            beforeEnter( to, from, next ) {
                // do something - you can beforeRouteEnter method in component
                next();
            }
        },

        { path : '/:notFound(.*)', component : NotFound},
    ],
    linkActiveClass: 'router-link-active',
    linkExactActiveClass: 'router-link-exact-active',
    scrollBehavior (to, from, savedPosition) {
        if (savedPosition) {
            return savedPosition
        }
        return {left: 0, top: 0}
    }
});

// _____________________________________________________________________

router.beforeEach(function(to, from, next) {
    console.log('Global beforeEach');

    // console.log(to, from);

    // ~~> YOU CAN ALSO DO: 
    // next(false);

    // ~~> YOU CAN ALSO DO: 
    // next('/users');

    // ~~> YOU CAN ALSO DO: 
    // if (to.name !== 'team-members') {
    //     next({name: 'team-members', params: { teamId: 't2' } })
    // }

    // ~~> YOU CAN ALSO DO: 

    let auth = to.meta.needAuth ? 'Auth need it' : 'Auth not need it'
    console.log(auth);

    
    next();
    
});

router.afterEach(function(to, from) {
    // do something - like send analytics data to server
});

// _____________________________________________________________________

export default router;