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
    <transition name="slide" >      
      <p class="slide-forward" v-if="paragraph2IsVisable">This is only sometimes visable...</p>
    </transition>
    <button v-on:click="toggleParagraph2">Toggle Paragraph 2</button>
  </div>


  <base-modal @close="hideDialog" v-bind:open="dialogIsVisible">
    <p>This is a test dialog!</p>
    <button @click="hideDialog">Close it!</button>
  </base-modal>


  <div class="container">
    <button @click="showDialog">Show Dialog</button>
  </div>

</template>  

<!-- --------------------------------------------------------------- -->

<script>
export default {
  data() {
    return {
      dialogIsVisible: false,
      animatedBlock: false,
      paragraph1IsVisable: false,
      paragraph2IsVisable: false
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
    }
  },
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

</style>