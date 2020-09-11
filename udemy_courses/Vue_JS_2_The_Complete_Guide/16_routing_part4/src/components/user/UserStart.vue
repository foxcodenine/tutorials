<template>
    <div>
        <p>Please select a User</p>
        <hr>
        <ul class="list-group">
            <router-link tag="li" class="list-group-item" to="user/1">User 1</router-link>
            <router-link tag="li" class="list-group-item" to="user/2">User 2</router-link>
            <router-link tag="li" class="list-group-item" to="user/3">User 3</router-link>
        </ul>
    </div>
</template>



<style scoped>
    .list-group-item {
        cursor: pointer;
    }
    .list-group-item:hover {
        border: 1px solid red;
        z-index: 999;
    }
</style>