<template>
        <div class="component">
        <h3>You may view the User Details here</h3>
        <p>Many Details</p>
        <p>User Name: {{ switchName() }}</p>
        <button v-on:click="resetName">Reset Name</button>
    </div>
</template>

<script>
    export default {
        // props: ["my_name"],

        // props: {
        //     my_name: [String]
        // },

        props: {
            my_name: {
                type: String,
                default: 'Max',
                // required: true
            }
        },
        // props: {
        //     my_name: {
        //         type: Object,
        //         default: function() {
        //             return {name: 'Christopher'}
        //         },                
        //     }
        // },
        methods: {
            switchName() {
                return  this.my_name.split('').reverse().join("");
            },
            resetName() {
                this.my_name = 'Christopher';
                this.$emit('nameWasReset', this.my_name)

            }
        }
    }
</script>

<style lang="scss" scoped>
    div {
        background-color: lightcoral;
    }
</style>