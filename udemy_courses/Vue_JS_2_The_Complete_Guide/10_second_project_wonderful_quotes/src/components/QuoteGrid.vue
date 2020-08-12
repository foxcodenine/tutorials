<template>
    <div class="row">
        <app-quote 
            v-for='(quote, index) in quotes' 
            v-bind:key='index' 
            v-on:click.native='deleteQuote(index)'>{{ quote }}</app-quote>
    </div>
</template>

<script>

    import Qoute from './Qoute'

    export default {
        props: ['quotes'],

        components: {
            appQuote: Qoute
        },
        methods: {
            deleteQuote(index) {
                this.$emit('quoteDeleteIndex', index);
            }
        }
    }
</script>

<style>

</style>