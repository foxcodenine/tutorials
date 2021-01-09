<template>
    <div class="container">
          <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
          <h1>Filters & Mixins</h1>
          

            <!-- Exercise 1) -->
            <input type="text" v-model="myText">
            
            <hr>
            <p>1. Build a local Filter which reverses the Text it is applied on</p>
            <p>{{ myText | textReverse}}</p>

            <!-- Exercise 2 -->           
            
            <hr>
            <p>2. Build a global Filter which counts the length of a word and it appends it</p>
            <p>{{ myText | textCount}}</p>

            <!-- Exercise 3 -->

            <hr>
            <p>3. Do the same as in Exercises 1 & 2, now with Computed Properties</p>
            <p>{{ textReverseFn }}</p>
            <p>{{ textCountFn }}</p>

            <!-- Exercise 4 -->

            <hr>
            <p>4. Share the Computed Property rebuilding Exercise 2 via a Mixin</p>

            <p>{{ textReverseMx }}</p>
            <p>{{ textCountMx }}</p>

            

      </div>
    </div>
</template>

<script>
  import { strCountReversMixin } from "./strCountReversMixin";
  export default {
    mixins: [strCountReversMixin],
    data() {
      return {
        myText: '',
      }
    },
    filters: {
        textReverse(value) {
        return value.split('').reverse().join('');
      }
    },
    computed: {
      textReverseFn() {
        return this.myText.split('').reverse().join('');
      },
      textCountFn() {
        if (this.myText.length) {
          return `${this.myText}  (${this.myText.length})`;
        }
      },
    },
    
  }
  
</script>

<style lang="scss">
</style>
