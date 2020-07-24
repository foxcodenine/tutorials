new Vue({
    el: '#app',
    data: {
        playerHealth: 00,
        monsterHealth: 00,
        gameIsRunning: false
    },
    methods: {
        startGame: function() {
            this.gameIsRunning = true;
            this.playerHealth = 100;
            this.monsterHealth = 100;
        },
        attack: function() {
            
            this.monsterHealth -= this.calculateDamage(3, 10);            

            if (this.checkWin()) {
                return;
            }

            this.monsterAttack();
        },

        specialAttack: function() {
            this.monsterHealth -= this.calculateDamage(10, 20);            

            if (this.checkWin()) {
                return;
            }

            this.monsterAttack();
        },

        heal: function() {
            if (this.playerHealth >= 90) {
                false;
            } else if(this.playerHealth >= 70 ) {
                this.playerHealth += 5
            } else if(this.playerHealth >= 40) {
                this.playerHealth += 8
            } else if(this.playerHealth >= 5 ) {
                this.playerHealth += 10
            } else if(this.playerHealth >= 1 ) {
                this.playerHealth += 25
            }
            this.monsterAttack();
        },

        giveUp: function() {
            console.log('giveUp')
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

        monsterAttack: function() {
            this.playerHealth -= this.calculateDamage(6, 14);
            this.checkWin();
        },

        specialAttackOn: function() {

            if (!(this.playerHealth % 6 && this.monsterHealth %6)) {
                return true;
            } else {
                return false;
            }
        }
    }
});