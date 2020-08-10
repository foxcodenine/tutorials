<template>
  <div class="conatainer">
    <div class="row">
      <div class="col-xs-12">

        <app-quote quote="A Wonderfull Quote!"> 
          <h2>Data passed to slot</h2>
          <p>{{message}}</p>
          <p slot='content'>{{message}} - (named slot)</p>
          <!-- <p slot='subtitle'>Test Subtitle</p> -->
        </app-quote>
        

      </div>
    </div>
  </div>
</template>

<script>
import  Quote  from './components/Quote'
  export default {
    
    data: ()=>{
      return {
        message: 'Data passed from AppData to slot'
      }
    },

    components: {
      'app-quote': Quote,
    }
  }
</script>

<style lang="scss" scoped>
  p {
    color: darkblue;
  }
  h2 {
    color: chartreuse;
  }
</style>
