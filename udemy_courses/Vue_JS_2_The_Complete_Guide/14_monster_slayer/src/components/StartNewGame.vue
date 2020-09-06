<template>
    <section class="row controls" >

        <div class="small-12 columns">
            <button id="start-game" v-on:click='newGame'>START NEW GAME</button>
        </div>

    </section>
</template>

<script>

    export default {
        props: ['gameIsRunning', 'playerHealth', 'monsterHealth'],

        methods: {
            newGame() {
                this.$emit('newGame')
            }
        }
    }

</script>

<style>

</style>