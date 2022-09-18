import { createRouter, createWebHistory } from "vue-router";

import CoachDetail from '../views/coaches/CoachDetail.vue';
import CoachesList from '../views/coaches/CoachesList.vue';
import CoachRegistation from '../views/coaches/CoachRegistation.vue';

import ContactCoach from '../views/requests/ContactCoach.vue';
import RequestsReceived from '../views/requests/RequestsReceived.vue';

import NotFound from '../views/NotFound.vue'

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

        {  name: 'register', path : '/register', component : CoachRegistation },
        {  name: 'request', path : '/requests', component : RequestsReceived },
        
        {  name: 'not_found', path : '/:notFound(.*)',  component : NotFound },
    ]
});

// _____________________________________________________________________

export default router;