
    https://router.vuejs.org/

### install vue route
    $ npm install --save vue-router

### error
module not found error can't resolve 'fs' webpack

solution:

    $ npm install fs --save

### the router overview

    import { createRouter, createWebHistory } from 'vue-router';

    const router = createRouter({
        history: createWebHistory(),
        routes: [
            

            {
                name : '...', 
                path : '/...',                 
                component : ..., 
                components : {...},
                alias: '/'
                children : [ { ... } ]
                beforeEnter( to, from, next ) { ...; next()}
                meta: {...}
            },

        ],
        linkActiveClass: '...',
        linkExactActiveClass: '...',
        scrollBehavior (to, from, savedPosition) {
            if (savedPosition) { return savedPosition }
            return {left: 0, top: 0}
        }
    });


### HTML

router-view:

    <router-view></router-view>

router-link:

    <router-link to="/">Go to Home</router-link>
    <router-link to="/about">Go to About</router-link>


### Programmatic Navigation

this.$router.push

    ```js

    // literal string path
    router.push('/users/eduardo')

    // object with path
    router.push({ path: '/users/eduardo' })

    // named route with params to let the router build the url
    router.push({ name: 'user', params: { username: 'eduardo' } })

    // with query, resulting in /register?plan=private
    router.push({ path: '/register', query: { plan: 'private' } })

    // with hash, resulting in /about#team
    router.push({ path: '/about', hash: '#team' })
    ```



router.replace(...)

    ```js

    router.push({ path: '/home', replace: true })
    // equivalent to
    router.replace({ path: '/home' })
    ```

    <router-link :to="..." replace>	



### Traverse history

router.go(...)   router.forward(...)   router.back(...)

This method takes a single integer as parameter that indicates by how
many steps to go forward or go backward in the history stack, similar to
window.history.go(n)

    ```js

    // go forward by one record, the same as router.forward()
    router.go(1)

    // go back by one record, the same as router.back()
    router.go(-1)

    // go forward by 3 records
    router.go(3)

    // fails silently if there aren't that many records
    router.go(-100)
    router.go(100)
    ```

### Dynamic Route

    this.$route.params.id
    
    this.$route.path


### Watch route object on vue js

```js

    watch:{
        '$route' (to, from){
            // Put your logic here...
        }
    },
```


### Passing Parameters as Props to Route Components


    ```js 

    /* In main.js */

    const router = createRouter({
        history: createWebHistory(),
        routes: [
            { path : '/teams', component : TeamsList },
            { path : '/teams/:teamId', component : TeamMembers, props: true }, // <~~
        ],
        linkActiveClass: 'router-link-active',
        linkExactActiveClass: 'router-link-exact-active'
    });

    /* In component.js */

    // declare props:
    props: ['teamId'],

    // and we can get the dynamic params either from:

    // this.$route.params
    this.$route.params.teamId;

    // or as a prop:
    this.teamId

```

### Passing query params

    ```js (in template)
    <router-link 
        v-bind:to="{ name : 'teams', params: { teamId : this.id }, query: { sort: 'asc' } }"
    >
        View Members
    </router-link>

    ```

    ```js (in script)
    created() {
        console.log(this.$route.query)
    }
    ```

### Navigation Guards

```js 
    // (in main.js or router.js)

    router.beforeEach(function(to, from, next) {
        // do something        
        next();        
    });

    // ~~> OR:

        routes: [
            {
                path : '/users', 
                // component : UsersList,
                components : {default: UsersList, footer: UsersFooter},
                beforeEnter( to, from, next ) {
                    // do something 
                    next();
                }
            },
        ]

    // ~~> OR: (in component)

    beforeRouteEnter( to, from, next ) {
        // do something - you can also use beforeEnter method in the router.js
        console.log('beforeRouteEnter');
        next();
    },
    beforeRouteUpdate( to, from, next ) {
        // do something
        console.log('beforeRouteUpdate');
        next();
    },
    beforeRouteLeave( to, from, next ) {
        if (!this.changesSaves) {   
    
            const res = confirm('Data is not save, do you want to leave this page?') ? 
            next(res); 
                 
        } else {
        next();
        }
        
    }
