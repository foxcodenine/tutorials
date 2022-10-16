<template>
    <h2>Manage Goals</h2>
    <input type="text" ref="goal">
    <button v-on:click="setGoal">Set Goal</button>

    <teleport to="body">
    <error-alert v-if="inputIsInvalid">
        <h2>Input must not be empty</h2>
        <p>Please enter at least a few characters...</p>
        <button v-on:click="confirmError">Okey</button>
    </error-alert>
    </teleport>

</template>

<script>
import ErrorAlert from './ErrorAlert.vue';
export default {
    components: { ErrorAlert },
    data() {
        return {
            inputIsInvalid: false
        }
    },
    methods: {
        setGoal() {
            const enteredValur = this.$refs.goal.value;

            if (enteredValur.trim() === '') {                
                this.inputIsInvalid = true;                
            }
        },
        confirmError() {
            this.inputIsInvalid = false;
        }
    }
}
</script>