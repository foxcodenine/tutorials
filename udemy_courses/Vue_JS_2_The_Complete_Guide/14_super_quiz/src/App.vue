<template>

  <div class="container">

      <div class="row">
          <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
            <h1 class="text-center">The Super Quiz</h1>
          </div>
      </div>
      
      <div class="row">
          <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3 " style="perspective: 1500px;">
              <transition name="flip" mode="out-in" >
                  <component 
                      :is="mode" @answered="answered($event)" 
                      @confirmed="mode = 'app-question'"
                      
                  ></component>
              </transition>
          </div>
      </div>

  </div>

</template>

<script>

  import Question from './components/Question'
  import Answer from './components/Answer'

  export default {
    data() {
      return {
        mode: 'app-question'
      }
    },    
    components: {
      appQuestion: Question, 
      appAnswer: Answer
    },
    methods: {
      answered(isCorrect) {
        if (isCorrect) {
          this.mode = 'app-answer';
        } else {
          this.mode = 'app-question';
          alert('Wrong, try again!');
        }
      }
    }
  }

</script>

<style lang="scss">

  .flip-enter {
    
  }
  .flip-enter-active {
    animation: flip-in .5s ease-out forwards;
  }
  .flip-leave {
    
  }
  .flip-leave-active {
    animation: flip-out 0.5s ease-in forwards;
    
  }

  @keyframes flip-in {
    from {
      transform: rotateY(-90deg);
    }
    to {
      transform: rotateY(0deg);
    }
  }

  @keyframes flip-out {
    from {
      transform: rotateY(0deg);
    }
    to {
      transform: rotateY(90deg);
    }
  }

</style>
