<template>
    <div>
        <h3>Some User Details</h3>
        <h4>User loaded ID: {{ $route.params.id }}</h4>
        <!-- <router-link 
                tag="button"                 
                :to="'$route.parmas.id' + '/edit'"
                class="btn btn-primary" >Edit</router-link> -->

        <router-link 
            tag="button"                 
            :to="link"
            class="btn btn-primary" >Edit</router-link>
                
    </div>
</template>

<script>
    export default {

        data() {
            return {
                link: {
                    name: 'userEditPath',
                    params: {
                        id: this.$route.params.id
                    },
                    query: {
                        locale: 'mt', 
                        q: 100
                    },
                    hash: '#copyright'
                }
            }
        },
        beforeRouteEnter(to, from, next) {
            console.log('>> detail beforeRouteEnter to.path:', to.path)      
            
            if (to.path.split('/')[2] <= 2) {
                next();
            } else {
                console.log('>> redirected to homepage')
                next({path: '/'});
            }            
        },
    }
</script>

