import  Home  from './components/Home.vue'
import  Header from './components/Header'

// import  User  from './components/user/User'

// import  UserStart  from './components/user/UserStart'
// import  UserDetails  from './components/user/UserDetails'
// import  UserEdit  from './components/user/UserEdit'

// _____________________________________________________________________

const User = resolve => {
    require.ensure(['./components/user/User'], () => {
        resolve(require('./components/user/User'));
    });
}

const UserStart = resolve => {
    require.ensure(['./components/user/UserStart'], () => {
        resolve(require('./components/user/UserStart'));
    });
}

const UserDetails = resolve => {
    require.ensure(['./components/user/UserDetails'], () => {
        resolve(require('./components/user/UserDetails'));
    }, 'userDetailsEdit');
}

const UserEdit = resolve => {
    require.ensure(['./components/user/UserEdit'], () => {
        resolve(require('./components/user/UserEdit'));
    }, 'userDetailsEdit');
}

// _____________________________________________________________________

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
            {
                path: ':id/edit', 
                component: UserEdit, 
                name: 'userEditPath',
                beforeEnter: (to, from , next)=>{
                    console.log('>> beforEnter - ', to.path)
                    next();
                }
            }
        ]
    },
    {   
        path: '/redirect-me', redirect: {name: 'home'}
    },
    {   
        path: '*', redirect: '/'
    },


];