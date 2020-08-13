<template>
    <div>

        <div
            id="on"
            v-on:click="switched(true)"
            v-bind:class="{active: value}"
        >On</div>

        <div
            id="off"
            v-on:click="switched(false)"
            v-bind:class="{active: !value}"
        >Off</div>

    </div>
</template>

<script>
    export default {
        props: ['value'],

        methods: {
            switched(i) {                
                this.$emit('input', i);

                // v-model will bind value from app &
                //              listen for the input event
            }
        }
    }
</script>

<style lang="scss" scoped>

    #on, #off {
        width: 4rem;
        height: 2rem;
        background-color: lightgray;
        padding: .2rem;
        display: inline-block;
        margin: 1rem -.2rem;
        box-sizing: content-box;
        cursor: pointer;
        text-align: center;
    }

    #on:hover, #on.active {
        background-color: lightgreen;
    }

    #off:hover, #off.active {
        background-color: lightcoral;
    }
    
</style>
