import  Home  from './components/Home.vue'
import  User  from './components/user/User'

import  UserStart  from './components/user/UserStart'
import  UserDetails  from './components/user/UserDetails'
import  UserEdit  from './components/user/UserEdit'



export const routes = [    
    {path: '', component: Home},
    {path: '/user', component: User, children: [
        {path: '', component: UserStart},
        {path: ':id', component: UserDetails},
        {path: ':id/edit', component: UserEdit, name: 'userEditPath'}
    ]}
];