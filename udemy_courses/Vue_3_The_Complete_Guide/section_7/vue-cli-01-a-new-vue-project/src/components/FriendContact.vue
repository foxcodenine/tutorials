<template>
    <li>
        <h2>{{ friend.name }}</h2>
        <button v-on:click="toggleDetails" >{{ detailsAreVisable ? 'Hide Details' : 'Show Details' }}</button>
        <ul v-if="detailsAreVisable">
            <li><strong>Phone:</strong> {{ friend.phone }} </li>
            <li><strong>Email:</strong> {{ friend.email }} </li>
        </ul>
    </li>
</template>

<!-- -------------------------------------------------------------- -->

<script>
export default {
    data() {
        return {
            detailsAreVisable:  false,
        }
	},
    props: { friend: Object},
    watch: {        
    },
    methods: {
        toggleDetails() {
            this.detailsAreVisable = !this.detailsAreVisable;
        }
	},
    computed: {

    }
}
</script>

<!-- -------------------------------------------------------------- -->

<style lang="scss" scoped>

</style>