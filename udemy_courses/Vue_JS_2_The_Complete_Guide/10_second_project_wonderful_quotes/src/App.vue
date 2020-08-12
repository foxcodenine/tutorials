<template>
  <div class="container">
    <app-header 
      v-bind:quoteCount='quoteCount' 
      v-bind:maxQuotes='maxQuotes'>
    </app-header>

    <app-new-quote v-on:quoteAdded='addNewQuote($event)'></app-new-quote>

    <app-quote-grid 
        v-bind:quotes='quotes' v-on:quoteDeleteIndex='removeQuote($event)'>
    </app-quote-grid>

    <div class="row">
      <div class="col-sm-12 text-center">
        <div class="alert alert-info">Info: Click on a Quote to Delete it!</div>
      </div>
    </div>

  </div>
  
</template>

<script>

  import QuoteGrid from './components/QuoteGrid'
  import NewQuote from './components/newQuote'
  import Header from './components/Header'

  export default {   
    
    data: () => {
      return {
        quotes: [
          'Just a Quoe to see something!',
        ],
        maxQuotes: 10,
        quoteCount: 1,
      }
    },

    components: {
      'appQuoteGrid': QuoteGrid,
      'appNewQuote': NewQuote,
      'appHeader': Header,
    },

    methods: {
      addNewQuote(quote) {
        if (this.quoteCount >= 10) {
          alert('You have reached the maximun quotes count, please delete some quotes!')
        } 
        else if (quote) {
          this.quotes.push(quote);
        }
      },
      removeQuote(id) {
        this.quotes = this.quotes.filter((val, ind, arr)=>{
          return ind !== id;
        })
      }
    },
    watch: {
      quotes() {
        this.quoteCount = this.quotes.length;
      }
    }
  }
</script>

<style >

</style>
