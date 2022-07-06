<template>
    <form v-on:submit.prevent="submitUser">

        <div class="group_input">
            <label for="fullname">Fullname</label>
            <input type="text" id="fullname" v-model="user.fullname">
        </div>

        <div class="group_input">
            <label for="age">Age</label>
            <input type="text" id="age" v-model="user.age">
        </div>

        <button>Submit</button>
        
    </form>
</template>

<!-- --------------------------------------------------------------- -->

<script>
export default {
    emits: ['submit-user'],
    data() {
        return {
            user: { fullname: '', age: null }
        }
    },
    methods: {
        submitUser() {
            if (!this.user.age || !this.user.fullname) return;
            this.$emit('submit-user', this.user);
            this.user = { fullname: '', age: null };
        }
    }
}
</script>

<!-- --------------------------------------------------------------- -->

<style>

</style>