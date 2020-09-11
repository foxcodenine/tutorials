import  Home  from './components/Home.vue'
import  User  from './components/user/User'

import  UserStart  from './components/user/UserStart'
import  UserDetails  from './components/user/UserDetails'
import  UserEdit  from './components/user/UserEdit'

import  Header from './components/Header'



export const routes = [    
    {   
        name: 'home',
        path: '', 
        components: {
            default: Home, 
            'nav-top': Header
        }
    },
    {   
        path: '/user', 
        components: {
            default: User,
            'nav-bottom': Header
            },        
        children: [
            {path: '', component: UserStart},
            {path: ':id', component: UserDetails},
            {path: ':id/edit', component: UserEdit, name: 'userEditPath'}
            ]
    },
    {   
        path: '/redirect-me', redirect: {name: 'home'}
    },
    {   
        path: '*', redirect: '/'
    },


];