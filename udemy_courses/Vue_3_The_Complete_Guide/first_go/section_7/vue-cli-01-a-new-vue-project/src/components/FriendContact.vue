<template>
    <li>
        <h2>{{ friend.name }}</h2>
        <button v-on:click="toggleDetails" >{{ deatailsAreVisible ? 'Hide' : 'Show Details' }}</button>
        <ul v-if="deatailsAreVisible">
            <li><strong>Phone:</strong> {{ friend.phone }} </li>
            <li><strong>Email:</strong> {{ friend.email }} </li>
        </ul>
    </li>
</template>

<!-- --------------------------------------------------------------- -->

<script>
export default {

    data() {
        return {
            deatailsAreVisible: false,
            friend: {
                    id: 'manual', 
                    name: 'Manuel Lorenz',
                    phone: '0123 45678 90',
                    email: 'manuel@localhost.com'
            }
        }
    },
    methods: {
        toggleDetails() {
            this.deatailsAreVisible = !this.deatailsAreVisible;
        }
    }
}
</script>

<!-- --------------------------------------------------------------- -->

<style lang="scss">
</style>