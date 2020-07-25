new Vue({
    el: '#app',
    data: {
        playerHealth: 00,
        monsterHealth: 00,
        gameIsRunning: false,
        turns: []
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

        specialAttackOn: function() {

            if (!(this.playerHealth % 6 && this.monsterHealth %6)) {
                return true;
            } else {
                return false;
            }
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

            const row = {
                isPlayer: player,
                text: `${text} ${amount} damage.`
            }
            console.log(row)
            this.turns[this.turns.length] = row;
 
            console.log(this.turns)

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
});