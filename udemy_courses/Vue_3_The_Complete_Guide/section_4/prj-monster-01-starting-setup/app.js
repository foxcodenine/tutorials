const app = Vue.createApp({

    data() {
        return {
            playerHealth: 100,
            monsterHealth: 100,
            currentRound: 0,
            winner: false,
            logMessages: []
        }
    },
    watch: {
        playerHealth(value) {
            if (value > 100) { this.playerHealth = 100; }

            if (value <= 0 && this.monsterHealth <= 0)   { 
                this.winner = 'draw';

            } else if (value <= 0) {
                this.winner = 'monster';
            }
        },
        monsterHealth(value) {

            if (value <= 0 && this.playerHealth <= 0)   {      
                this.winner = 'draw';

            } else if (value <= 0) {     
                this.winner = 'player';
            }
        }
    },
    computed: {
        monsterBarStyles() {
            return (this.monsterHealth <= 0) ? 
                        {'width': 0 + '%'}  :
                        {'width': this.monsterHealth + '%'};
        },
        playerBarStyles() {
            return (this.playerHealth <= 0) ? 
                        {'width': 0 + '%'}  :
                        {'width': this.playerHealth + '%'};
        },
        spacialAttachAvalible() {
            return this.currentRound % 3 !== 0
        },
        getWinner() {
            
            switch(this.winner) {
                case 'monster':
                    return 'You have Lost!';
                case 'player':
                    return 'You have Won';
                default:
                    return 'Its a Draw!'
            }
        }
    },
    methods: {
        startGame() {
            this.playerHealth = 100;
            this.monsterHealth = 100;
            this.currentRound = 0;
            this.winner = false;
            this.logMessages = [];
        },
        attackMonster() {
            const damage = this.getRandomValue(6, 12);
            this.monsterHealth -= damage;
            this.attackPlayer();  
            this.addLogMessage('player', 'attack', damage);          
        },
        attackPlayer() {
            const damage = this.getRandomValue(8, 16);
            this.playerHealth -= damage;
            this.currentRound++;
            this.addLogMessage('monster', 'attack', damage);  
        },
        specialAttackMonster() {
            const damage = this.getRandomValue(10, 20);
            this.monsterHealth -= damage;
            this.attackPlayer(); 
            this.addLogMessage('player', 'attack', damage);            
        },
        healPlayer() {
            const heal =this.getRandomValue(12, 24);
            this.playerHealth += heal;
            this.attackPlayer();
            this.addLogMessage('player', 'heal', heal);  
        },
        surrender() {
            this.winner = 'monster';
        },
        getRandomValue(min, max) {
            return Math.ceil(Math.random() * (max - min)) + min;
        },
        addLogMessage(who, what, value) {
            this.logMessages.unshift({
                actionBy: who,
                actionType: what,
                actionValue: value
            });
        }
    }

});

app.mount('#game');