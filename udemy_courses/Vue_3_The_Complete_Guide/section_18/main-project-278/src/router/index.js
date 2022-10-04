/* eslint-disable */
// _____________________________________________________________________
import { defineAsyncComponent } from "vue";

import { createRouter, createWebHistory } from "vue-router";

// import CoachDetail from '../views/coaches/CoachDetail.vue';
import CoachesList from '../views/coaches/CoachesList.vue';
// import CoachRegistation from '../views/coaches/CoachRegistation.vue';

// import ContactCoach from '../views/requests/ContactCoach.vue';
// import RequestsReceived from '../views/requests/RequestsReceived.vue';

import NotFound from '../views/NotFound.vue';

// import UserAuth from '../views/auth/UserAuth';

import store from "@/store";

const CoachDetail = () => import('../views/coaches/CoachDetail.vue');
const CoachRegistation = () => import('../views/coaches/CoachRegistation.vue');

const ContactCoach = () => import('../views/requests/ContactCoach.vue');
const RequestsReceived = () => import('../views/requests/RequestsReceived.vue');

const UserAuth = () => import('../views/auth/UserAuth');

// _____________________________________________________________________

const router = createRouter({
    history: createWebHistory(), 
    routes: [
        { name: 'index', path : '/sub-directory/', redirect: '/sub-directory/coaches' },
        
        { name: 'coaches', path : '/sub-directory/coaches',  component : CoachesList },

        {
            name: 'details',
            path : '/sub-directory/coaches/:id',  
            component : CoachDetail,
            props : true,
            children: [
                { name: 'contact', path: 'contact', component: ContactCoach }        // <~~  /coaches/id/contact
            ]
         },

        {  name: 'register', path : '/sub-directory/register', component : CoachRegistation, meta: {requireAuth: true} },
        {  name: 'request', path : '/sub-directory/requests', component : RequestsReceived,  meta: {requireAuth: true} },
        
        {  name: 'auth', path : '/sub-directory/auth',  component : UserAuth, meta: {requireUnauth: true} },

        {  name: 'not_found', path : '/:notFound(.*)',  component : NotFound },
    ]
});

router.beforeEach(function(to, from, next) {
    if (to.meta.requireAuth && !store.getters.isAuthenticated) {
        // next(false);
        next({name: 'auth', query: {redirect: to.name} })
    }

    else if (to.meta.requireUnauth && store.getters.isAuthenticated) {
        next({name: to.from})
    }

    else { next();  }
      
})

// _____________________________________________________________________

export default router;