<template>

        <transition-group tag="ul" name="user-list">
            <li v-for="user, index in users" :key="user" v-on:click="removeUser(user)">{{index}} {{user}} </li>
        </transition-group>
        <div>
            <input type="text" v-model="userNameInput">
            <button  v-on:click="addUser">Add User</button>
        </div>
  
</template>

<!-- --------------------------------------------------------------- -->

<script>
    
export default {
    data() {
        return {
            users: [ 'Max', 'Manu', 'Julie', 'Angela', 'Michael' ],
            userNameInput: '',
        }
    },
    methods: {
        removeUser(user) {
            const index = this.users.findIndex(function(name) {
                return name === user;
            });
            this.users.splice(index, 1);
        },
        addUser() {
            this.users.unshift(this.userNameInput);
            this.userNameInput = '';
        }
    }
}
</script>

<!-- --------------------------------------------------------------- -->

<style lang="scss" scoped>
    ul {
        list-style: none;
        margin: 0;
        padding: 0;
        margin: 1rem 0;
    }
    li {
        border: 1px solid #ccc;
        padding: 1rem;
        text-align: center;
        margin: .5rem 0;
    }
    input {
        margin:2rem 1rem 0 0;
        padding: .5rem;
        border: 1px solid #ccc;
    }

            

    .user-list-enter-active {   
        opacity: 0;     
        animation: user-list 0.5s ease 0.2s;
    }
    .user-list-leave-active {
        opacity: 0;
        position: absolute;
    }

    @keyframes user-list {
        from {
            opacity: 0;
        }
        to {
            opacity: 1;
        }
    }

    .user-list-move         { transition: transform 0.5s ease; }

    
    // .user-list-enter-from   { opacity: 0;  transform: translateX(-30px); }
    // .user-list-enter-active { transition: all 1s ease-out; }
    // .user-list-enter-to     { opacity: 1; transform: translateX(0);}

    // .user-list-leave-from   { opacity: 1; transform: translateX(0);}
    // .user-list-leave-active { transition: all 1s ease-in; position: absolute;}
    // .user-list-leave-to     { opacity: 0; transform: translateX(30px);}

    // .user-list-move         { transition: transform 0.8s ease; }


</style>