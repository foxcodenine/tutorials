<template>
    <div class="component">
        <h3>You may edit the User here</h3>
        <p>Edit me!</p>
        <p>Age: {{ userAge }}</p>
        <button v-on:click='changeAge'>Change Age</button>
    </div>
</template>

<script>

    export default {
        props: {
            userAge: Number
        },
        methods: {
            changeAge() {
                this.userAge = 40;
                this.$emit('ageWasEdit', this.userAge);
            }
        }
    }

</script>

<style lang="scss" scoped>
    div {
        background-color: lightgreen;
    }
</style>