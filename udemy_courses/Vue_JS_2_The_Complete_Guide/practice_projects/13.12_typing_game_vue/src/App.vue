<template>
  <div id="app" class="app">
    <app-header 
        :headerOn="headerOn" 
        :selectedLevel="selectedLevel"
        @changedLevel="updateLevel($event)"></app-header>
    
    <transition name="fade" mode="out-in" appear>
        <app-display 
            v-if="!gameOver" 
            :words="words"
            :score="score"
            :time="time"
            @correctWord="correct()">
        </app-display>

        <app-restart :score="score" @restartGame="resetGame()" v-else ></app-restart>      
    </transition>

      <app-settings-btn 
          :headerOn="headerOn" 
          v-on:headerStatus="headerOn = !headerOn"
          >
      </app-settings-btn>
      

  </div>
</template>



<script>
  import Header from "./components/Header";
  import Display from './components/Display'
  import SettingsBtn from "./components/SettingsBtn";
  import Restart from "./components/Restart";


  export default {
    name: 'app',
    components: {
      'appHeader': Header,
      'appDisplay': Display,
      'appSettingsBtn': SettingsBtn,
      'appRestart': Restart
    },
    data() {
      return {
        headerOn: false,
        gameOver: false,
        selectedLevel: 'Easy',
        words: [],
        score: 0,
        time: 17  
      }
    },
    watch: {
      headerOn() {
        console.log(this.headerOn);
      },
      selectedLevel() {
        console.log(this.selectedLevel)
      },
      time() {;
        if (this.time <= 0) {
          this.gameOver = true;
        } else {
          this.gameOver = false;
        }
      }
    },
    computed: {

    },
    methods: {
      fetchWord() {
        fetch('https://random-word.ryanrk.com/api/en/word/random')
        .then(res => res.json())
        .then(data => data.map(d => d.replace(/^\w/, (c) => c.toUpperCase()))) 
        //reg exp to Capitalize string - string.replace(/^\w/, (c) => c.toUpperCase());
        .then(data => this.words.unshift(...data))
      },
      timeCountDown() {   
       
        const myTimer = ()=>{
          this.time -= 1

          if (this.time <= 0) {            
            clearInterval(timer);
            const  audio = new Audio('../audio/1890.wav');
            audio.play();
          }
        }
        let timer = setInterval(myTimer, 1000);    
     },
     resetGame() {
        this.headerOn = false;
        this.gameOver = true;
        this.words = [];
        this.score = 0;
        this.time = 20;
        this.fetchWord();
        this.timeCountDown();
     },
     correct() {
       this.score ++;
       this.fetchWord();

       switch (this.selectedLevel) {
        case 'Easy':
          this.time += 16;
          break;
        case 'Medium':
          this.time += 8;
          break;
        default:
          this.time += 4;
       }      
     },
     updateLevel(lvl) {
       this.headerOn = false;
       this.selectedLevel = lvl;
       localStorage.setItem('selectedLevel', lvl);
       const audio = new Audio('./audio/0164.wav');
       audio.play();
     }
     
    },
    created() {
      this.fetchWord();
      this.timeCountDown();
      
      const lvl = localStorage.getItem('selectedLevel');  
      if (lvl) {        
        this.selectedLevel = lvl;
      }     
    }   
  }
</script>





<style lang="scss">

  :root {
    --col-primary: #42b883;
    --col-secondary: #35495e;
    --col-tertiary: #cdf0fd;
    --col-white: #fff;
    --col-black: #000;
    --col-display-text: rgba(255,255,255, .9);
  }
  * {
  box-sizing: border-box; }

  html {
    font-size: 62.5%; }
  
  body {
    padding: 0;
    margin: 0;
  }

  .app {
    font-size: 1.6rem;
    background-color: var(--col-primary);
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 100vh;
    margin: 0;
    font-family: Verdana, Geneva, Tahoma, sans-serif; 
    position: relative;
  }

  .btn {
    cursor: pointer;
    font-size: 1.4rem;
    border-radius: .4rem;
    padding: .5rem 1.5rem;
    border: none;
    transition: transform 0.1s ease-in-out;
    display: flex;
    justify-content: center;
    align-items: center;

    &:hover {
        transform: translateY(-.3rem);
        box-shadow: 0px 3px 5px rgba(0,0,0, .3);
    }
    &:active {
        transform: translateY(-.1rem);
        box-shadow: 0px 2px 3px rgba(0,0,0, .4);
    } 
}
  .fade-enter {
    opacity: 0;
  }
  .fade-enter-active {
    // opacity: 1;
    transition: all .5s;
  }
  .fade-leave {
    opacity: 1;
  }
  .fade-leave-active {
    opacity: 0;
    transition: all .5s;
  }
  .fade-move {
    transition: all .5s;
  }

</style>
