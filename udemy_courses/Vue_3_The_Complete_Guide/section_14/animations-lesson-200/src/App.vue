<template>

  <div class="container">
    <div class="block" :class="{ animate: animatedBlock }"></div>
    <button v-on:click="animateBlock">Animate</button>
  </div>

  <div class="container">
    <transition>
      <p v-if="paragraph1IsVisable">This is only sometimes visable...</p>
    </transition>
    <button v-on:click="toggleParagraph1">Toggle Paragraph 1</button>
  </div>

  <div class="container">
    <transition name="slide" @before-enter="onBeforeEnter" @after-leave="onAfterLeave">      
      <p class="slide-forward" v-if="paragraph2IsVisable">This is only sometimes visable...</p>
    </transition>
    <button v-on:click="toggleParagraph2">Toggle Paragraph 2</button>
  </div>

  <div class="container">
    <transition name="custom"  
      :css="false"
      @before-enter="onBeforeEnter3"
      @enter="onEnter3"
      @after-enter="onAfterEnter3"
      @before-leave="onBeforeLeave3"
      @leave="onLeave3"
      @after-leave="onAfterLeave3"
      @enter-cancelled="onEnterCancelled3"
      @leave-cancelled="onLeaveCancelled3"
    >      
      <p v-if="paragraph3IsVisable">This is only sometimes visable...</p>
    </transition>
    <button v-on:click="toggleParagraph3">Toggle Paragraph 3</button>
  </div>


  <base-modal @close="hideDialog" v-bind:open="dialogIsVisible">
    <p>This is a test dialog!</p>
    <button @click="hideDialog">Close it!</button>
  </base-modal>


  <div class="container">
    <transition name="fade-button" mode="out-in">
      <button v-on:click="showUsers" v-if="!userAreVisable">Show Users</button>
      <button v-on:click="hideUsers" v-else>Hide Users</button>
    </transition>
  </div>

  <div class="container">
    <button @click="showDialog">Show Dialog</button>
  </div>

  <div class="container">
    <users-list></users-list>
  </div>
  
</template>  

<!-- --------------------------------------------------------------- -->

<script>
import UsersList from './components/UsersList.vue';
  /* eslint-disable */
export default {
    components: [ UsersList ],
    data() {
        return {
            dialogIsVisible: false,
            animatedBlock: false,
            paragraph1IsVisable: false,
            paragraph2IsVisable: false,
            paragraph3IsVisable: false,
            userAreVisable: false,
            myTimerEnter: null,
            myTimerLeave: null
        };
    },
    methods: {
        animateBlock() {
            this.animatedBlock = true;
        },
        showDialog() {
            this.dialogIsVisible = true;
        },
        hideDialog() {
            this.dialogIsVisible = false;
        },
        toggleParagraph1() {
            this.paragraph1IsVisable = !this.paragraph1IsVisable;
        },
        toggleParagraph2() {
            this.paragraph2IsVisable = !this.paragraph2IsVisable;
        },
        toggleParagraph3() {
            this.paragraph3IsVisable = !this.paragraph3IsVisable;
        },
        showUsers() {
            this.userAreVisable = true;
        },
        hideUsers() {
            this.userAreVisable = false;
        },
        onBeforeEnter(el) {
            console.log("onBeforeEnter: ", el.textContent);
        },
        onAfterLeave(el) {
            console.log("onAfterLeave");
        },
        onBeforeEnter3(el) {
            el.style.opacity = 0;
        },
        onEnter3(el, done) {
            let round = 1;
            this.myTimerEnter = setInterval(() => {
                el.style.opacity = round * 0.01;
                round++;
                if (round > 100) {
                    clearInterval(this.myTimerEnter);
                    done();
                }
            }, 20);
        },
        onAfterEnter3() {
            console.log("onAfterEnter3");
        },
        onBeforeLeave3(el) {
            el.style.opacity = 1;
        },
        onLeave3(el, done) {
            let round = 1;
            this.myTimerLeave = setInterval(() => {
                el.style.opacity = 1 - (round * 0.01);
                round++;
                if (round > 100) {
                    clearInterval(this.myTimerLeave);
                    done();
                }
            }, 20);
        },
        onAfterLeave3() {
            console.log("onAfterLeave3");
        },
        onEnterCancelled3(el) {
            clearInterval(this.myTimerEnter);
        },
        onLeaveCancelled3(el) {
            clearInterval(this.myTimerLeave);
        }
    },
    components: { UsersList }
};
</script>

<!-- --------------------------------------------------------------- -->

<style>
* {
  box-sizing: border-box;
}
html {
  font-family: sans-serif;
}
body {
  margin: 0;
}

button {
  font: inherit;
  padding: 0.5rem 2rem;
  border: 1px solid #810032;
  border-radius: 30px;
  background-color: #810032;
  color: white;
  cursor: pointer;
}
button:hover,
button:active {
  background-color: #a80b48;
  border-color: #a80b48;
}
.block {
  width: 8rem;
  height: 8rem;
  background-color: #290033;
  margin-bottom: 2rem;
  /* transition: transform .2s ease; */
}
.container {
  max-width: 40rem;
  margin: 2rem auto;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 2rem;
  border: 2px solid #ccc;
  border-radius: 12px;
}

/* ------------------------------------------------------------------ */

.animate {
  /* transform: translateX(-200px);   */
  animation: slide-scale .5s ease forwards;
}

/* ------------------------------------------------------------------ */

@keyframes slide-scale {
  0% {
    transform: translate(0) scale(1);
  }
  50% {
    transform: translateX(-100px) scale(1.2);
  }
  100% {
    transform: translateX(-200px) scale(1);
  }
}

/* ------------------------------------------------------------------ */
/* Animation using vue <transition> Default */

.v-enter-from {
  opacity: 0;
  transform: translateY(-30px);
}

.v-enter-active {
  transition: all .3s ease-out;
}

.v-enter-to {
  opacity: 1;
  transform: translateY(0);
}

.v-leave-from {
  opacity: 1;
  transform: translateY(0);
}

.v-leave-active {
  transition: all .3s ease-out;
}

.v-leave-to {
  opacity: 0;
  transform: translateY(30px);
}

/* ------------------------------------------------------------------ */

/* Animation using vue <transition> Named and using @keyframes */

.slide-enter-active {
  /* transition: all .3s ease-out; */
  animation: slide-scale-in 0.3s ease-out;
}

.slide-leave-active {
  /* transition: all .3s ease-out; */
  animation: slide-scale-out 0.3s ease-out;
}

/*  MY THING  */
.slide-forward {
  transform: translateX(-180px) scale(1);
}

/* 
// (NOTE): You can also use: 
      enter-to-class="class-name" , 
      enter-active-class="class-name" 
      ... and so on, 
      on the <transition> component.
*/

/* ------------------------------------------------------------------ */


@keyframes slide-scale-in {
  0% {
    transform: translate(0) scale(1);
  }
  50% {
    transform: translateX(-100px) scale(1.2);
  }
  100% {
    transform: translateX(-180px) scale(1);
  }
}

@keyframes slide-scale-out {
  0% {
    transform: translateX(-180px) scale(1);
  }
  50% {
    transform: translateX(-100px) scale(1.2);
  }
  100% {
    transform: translate(0) scale(1);
  }
}

/* ------------------------------------------------------------------ */

.fade-button-enter-from, .fade-button-leave-to {
  opacity: 0;
}
.fade-button-enter-active {
  transition: all 0.5s ease-out;
}
.fade-button-leave-active {
  transition: all 0.5s ease-in;
}
.fade-button-enter-to, .fade-button-leave-from {
  opacity: 1;
}

/* ------------------------------------------------------------------ */

</style>