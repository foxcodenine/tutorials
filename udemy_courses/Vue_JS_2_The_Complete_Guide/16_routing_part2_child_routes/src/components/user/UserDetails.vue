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
            :to="{
                    name:'userEditPath', 
                    params:{id: $route.params.id}, 
                    query:{locale: 'mt', q: 100}
                }"
            class="btn btn-primary" >Edit</router-link>
                
    </div>
</template>