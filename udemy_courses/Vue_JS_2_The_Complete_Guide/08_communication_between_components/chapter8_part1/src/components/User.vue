<template>
    <div class="component">
        <h1>The User Component</h1> 
        <p>I am an awesome User!</p>
        <button v-on:click="changeName">Change my Name</button>
        <hr>
        <div class="row">            
            <div class="col-xs-12 col-sm-6">
                <app-user-detail v-bind:my_name="name" v-on:nameWasReset='name = $event'></app-user-detail>
            </div>
            <div class="col-xs-12 col-sm-6">
                <app-user-edit></app-user-edit>
            </div>
        </div>        
    </div>
</template>

<script>
    import UserEdit from './UserEdit'
    import UserDetail from './UserDetail'

export default {
    components: {
        appUserEdit: UserEdit,
        appUserDetail: UserDetail,
    },
    data: function() {
        return {
            name: 'Christopher'
        };
    },
    methods: {
        changeName() {
            this.name = 'James'
        }
    }
}
</script>

<style lang="scss" scoped>
    div {
        background-color: lightblue;
    }
</style>