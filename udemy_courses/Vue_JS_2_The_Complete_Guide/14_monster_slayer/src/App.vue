<template>
  <!-- https://medium.com/@miladmeidanshahi/update-array-and-object-in-vuejs-a283983fe5ba -->
  <div id="app">
    
    <transition name="fade" appear>
            <app-player-monster :playerHealth="playerHealth"
              :monsterHealth="monsterHealth"></app-player-monster>
    </transition>

    <transition name="fade" mode="out-in" appear>
        <app-start-new-game v-if="!gameIsRunning" :gameIsRunning="gameIsRunning" @newGame="startGame"></app-start-new-game>

        <app-buttons v-else
            :gameIsRunning="gameIsRunning"
            :playerHealth="playerHealth"
            :monsterHealth="monsterHealth"
            @btnAttack="attack"
            @btnSpecialAttack="specialAttack"
            @btnHeal="heal"
            @btnGiveUp="giveUp"
            ></app-buttons>
    </transition>

    <transition name="fade" appear>
      <app-damage-report :turns="turns" v-if='turns.length > 0'></app-damage-report>
    </transition>

  </div>
</template>

<script>

import  PlayerMonster from './components/PlayerMonster'
import  StartNewGame from './components/StartNewGame'
import  Buttons from './components/Buttons'
import  DamageReport from './components/DamageReport'


export default {

  data () {
    return {
    playerHealth: 0,
    monsterHealth: 0,
    gameIsRunning: false,
    turns: [],
    index: 0
    }
  },

  components: {
      appPlayerMonster: PlayerMonster,
      appStartNewGame: StartNewGame,
      appButtons: Buttons,
      appDamageReport: DamageReport
  },

  methods: {
    startGame: function() {
        this.gameIsRunning = true;
        this.playerHealth = 100;
        this.monsterHealth = 100;
        this.turns = [];
    },
    attack: function() {
        const damage = this.calculateDamage(3, 10);
        this.monsterHealth -= damage;            

        if (this.checkWin()) {
            return;
        }

        this.logTurn(true, 'Player hits Monster for', damage);
        console.log(this.turns);
        this.monsterAttack();
    },

    specialAttack: function() {
        const damage = this.calculateDamage(10, 20);
        this.monsterHealth -= damage;            

        if (this.checkWin()) {
            return;
        }

        this.logTurn(true, 'Player hits Monster hard for', damage);

        this.monsterAttack();
    },

    monsterAttack: function() {
        const damage = this.calculateDamage(6, 14);
        this.playerHealth -= damage ;
        this.checkWin();
        this.logTurn(false, 'Monster hits Player for', damage);
    },

    heal: function() {
        let heals;
        if (this.playerHealth >= 90) {
            heals = 0;
        } else if(this.playerHealth >= 70 ) {
            heals = 5;
        } else if(this.playerHealth >= 40) {
            heals = 8;
        } else if(this.playerHealth >= 5 ) {
            heals = 10;
        } else if(this.playerHealth >= 1 ) {
            heals = 25;
        }
        this.playerHealth += heals;
        this.logTurn(true, 'Player heals', heals);
        this.monsterAttack();
    },


    giveUp: function() {
        this.gameIsRunning = false;
    },

    logTurn: function(player, text,  amount) {
        this.index++
        const row = {
            isPlayer: player,
            text: `${text} ${amount} damage.`,
            index: this.index
        }
        console.log(row)
        // this.turns[this.turns.length] = row;
        this.$set(this.turns, this.turns.length, row);
    },

    calculateDamage: function(min, max) {

        const damage = Math.max(Math.ceil(Math.random() * max), min);
        return damage;
    },

    checkWin: function() {

        if (this.monsterHealth <= 0) {

            this.monsterHealth = 0;

            if (confirm('You Won! Play Again?')) {
                this.startGame();
            } else {
                this.gameIsRunning = false;
            }
            return true;
        }
        else if (this.playerHealth <= 0) {

            this.playerHealth = 0;

            if (confirm('You lost! Play Again?')) {
                this.startGame();
            } else {
                this.gameIsRunning = false;
            }
            return true
        }
        return false
    },      
  },
}
</script>
  
<style lang="scss">

  .fade-enter {
    opacity: 0;
  }
  .fade-enter-active {
    // opacity: 1;
    transition: all 1.4s;
  }
  .fade-leave {
    opacity: 1;
  }
  .fade-leave-active {
    opacity: 0;
    transition: all .7s;
  }
  .fade-move {
    transition: all .7s;
  }

</style>
