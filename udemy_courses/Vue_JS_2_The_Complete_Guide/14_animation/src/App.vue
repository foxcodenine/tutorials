<template>
  <div id="container">
    <div class="row">
      <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
        <h1>Animation</h1>
        <hr>
        <button class="btn btn-primary" @click="show = !show">Show Alert</button>
        &nbsp;&nbsp;       
          
          <label>Fade <input type="radio" name="alertAnimation" value="fade" v-model="alertAnimation"></label>
          <label>Slide<input type="radio" name="alertAnimation" value="slide" v-model="alertAnimation"></label>        
        
        <br><br>

        
        <transition name="fade">
          <div class="alert alert-info" v-show="show">Adding animation by transition classes!</div>
        </transition><br>

        <transition :name="alertAnimation">
          <div class="alert alert-info" v-if="show">Dynamic name (class)!</div>
        </transition><br>
        
        <transition name="slide" type="animation">
          <div class="alert alert-info" v-show="show">Adding animation by keyframes classes!</div>
        </transition><br>

        
        <transition name="slide" type="animation" appear>
          <div class="alert alert-info" v-show="show">Mixing transition and animated class!</div>
        </transition><br>

        
        <transition 
          enter-active-class="animated jello" 
          leave-active-class="animated wobble"
          appear
          >
          <div class="alert alert-info" v-show="show" >Adding Custom Class names!</div>
        </transition><br>


        <transition :name="alertAnimation" mode="out-in">
          <div class="alert alert-info" v-if="show" key="info">Transition between Multiple Elements</div>
          <div class="alert alert-warning" v-else key="warning">Transition between Multiple Elements</div>
        </transition>

        <hr>
        
        <button class="btn btn-success" @click="load = !load">Load / Remove Element</button>

        <br><br>

        <transition
          @before-enter="beforeEnter"
          @enter="enter"
          @after-enter="afterEnter"
          @enter-cancelled="enterCancelled"
          
          @before-leave="beforeLeave"
          @leave="leave"
          @after-leave="afterLeave"
          @leave-cancelled="leaveCancelled" 

          :css="false"         
        >
          <div style="width: 100px; height: 100px; background-color: lightgreen;" v-if="load"></div>
        </transition>

        <hr>

        <button           
          class="btn btn-warning" 
          @click="selectedComponent === 'app-success-alert' ?
          selectedComponent = 'app-danger-alert' : selectedComponent = 'app-success-alert'" 
        >Toggle Component</button>

        <br><br>  
        
        <transition name="slide" mode="out-in">
          <component v-bind:is="selectedComponent"></component>
        </transition>

        <hr>

        <button class="btn btn-danger"
                @click="addItem">Add item</button>

        <br><br>
        <ul class="list-group">
            <transition-group :name="alertAnimation" mode="out-in">
                <li 
                    class="list-group-item"
                    v-for="(number, index) in numbers"
                    @click="removeItem(index)" 
                    :key="number"
                    style="cursor: pointer; "
                >{{ number }}</li>
            </transition-group>
        </ul>
      </div>
    </div>
  </div>
</template>


<script>

  import  SuccessAlert  from "./SuccessAlert";
  import  DangerAlert  from "./DangerAlert";

  export default {
    data() {
      return {
        show: true,
        alertAnimation: 'fade',
        load: false,
        elementWidth: 100,
        selectedComponent: 'app-success-alert',
        numbers: [],
      }
    },

    methods: {
      beforeEnter(el) {
        this.elementWidth = 100;
        el.style['width'] = this.elementWidth + 'px'
        console.log('-> before-enter');
      },
      enter(el, done) {
        console.log('-> enter');

        let round = 1;
        const intervel = setInterval(()=>{
          el.style['width'] = (this.elementWidth + (round * 10)) + 'px';
          round++; 
          
          if (round > 20) {
            clearInterval(intervel);
            done();
          }
        }, 20);
        
      },
      afterEnter(el) {
        console.log('-> after-enter');
      },
      enterCancelled(el) {
        console.log('-> enter-cancelled');
      },
      beforeLeave(el) {
        this.elementWidth = 300;
        el.style['width'] = this.elementWidth + 'px';
        console.log('-> before-leave');
      },
      leave(el, done) {
        console.log('-> leave');
        let round = 1;
        const intervel = setInterval(()=>{
          el.style['width'] = (this.elementWidth - (round * 10)) + 'px';
          round++; 
          
          if (round > 20) {
            clearInterval(intervel);
            done();
          }
        }, 20);
      },
      afterLeave(el) {
        console.log('-> after-leave');
      },
      leaveCancelled(el) {
        console.log('-> leave-cancelled');
      },
      addItem() {
        let num = Math.max(...this.numbers) + 1
        if (num === -Infinity) {
          num = 0;
        }
        const index = Math.floor(Math.random() * this.numbers.length)
        
        this.numbers.splice(index, 0, num);
      },
      removeItem(i) {
        this.numbers = this.numbers.filter((curr, index)=>{
            return index !== i;
        })
      }
    },

    components: {
      appSuccessAlert: SuccessAlert,
      appDangerAlert: DangerAlert,
    }
  }

</script>


<style lang="scss">

  .fade-enter {
    opacity: 0;
  }
  .fade-enter-active {
    transition: opacity 1s;
  }
  .fade-leave {
    
  }
  .fade-leave-active {
    transition: opacity 1s;
    opacity: 0;
  }

  .fade-move {
    transition: all 1s;
  }

  .slide-enter {
    opacity: 0;
  }
  .slide-enter-active {
    animation: slide-in 1s ease-out forwards;
    transition: opacity .5s;
  }
  .slide-leave {
    
  }
  .slide-leave-active {
    animation: slide-out 1s ease-out forwards;
    transition: opacity 1s;
    opacity: 0;
    position: absolute;
  }

  .slide-move {
    transition: all 1s;
  }
  

  @keyframes slide-in {
    from {
      transform: translateY(-10px);
    }
    to {
      transform: translateY(0px);
    }
  }
  @keyframes slide-out {
    from {
      transform: translateY(0px);
    }
    to {
      transform: translateY(-10px);
    }
  }
  
</style>
