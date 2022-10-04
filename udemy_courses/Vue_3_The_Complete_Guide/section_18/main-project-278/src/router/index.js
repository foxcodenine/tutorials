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

const CoachDetail = defineAsyncComponent(() => import('../views/coaches/CoachDetail.vue'));
const CoachRegistation = defineAsyncComponent(() => import('../views/coaches/CoachRegistation.vue'));

const ContactCoach = defineAsyncComponent(() => import('../views/requests/ContactCoach.vue'));
const RequestsReceived = defineAsyncComponent(() => import('../views/requests/RequestsReceived.vue'));

const UserAuth = defineAsyncComponent(() => import('../views/auth/UserAuth'));

// _____________________________________________________________________

const router = createRouter({
    history: createWebHistory(), 
    routes: [
        { name: 'index', path : '/', redirect: '/coaches' },
        
        { name: 'coaches', path : '/coaches',  component : CoachesList },

        {
            name: 'details',
            path : '/coaches/:id',  
            component : CoachDetail,
            props : true,
            children: [
                { name: 'contact', path: 'contact', component: ContactCoach }        // <~~  /coaches/id/contact
            ]
         },

        {  name: 'register', path : '/register', component : CoachRegistation, meta: {requireAuth: true} },
        {  name: 'request', path : '/requests', component : RequestsReceived,  meta: {requireAuth: true} },
        
        {  name: 'auth', path : '/auth',  component : UserAuth, meta: {requireUnauth: true} },

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