import  User  from './components/user/User'
import  Home  from './components/Home.vue'

export const routes = [
    {path: '/user/:id', component: User},
    {path: '', component: Home}
];