function getRandomValue(min, max) {
    const randomValue = Math.floor(Math.random() * (max - min)) + min;
    return randomValue
}

const app = Vue.createApp({
    data() {
        return {
            playerHealth: 100,
            monsterHealth: 100,
            currentRound: 0,
            winner:null,
            logMessages: []
        }
    },
    watch: {
        monsterHealth (val) {
            let monsterHealth = val;
            let playerHealth  = this.playerHealth;

            this.monsterHealth = monsterHealth < 0 ? 0 : monsterHealth;
            this.playerHealth  = playerHealth  < 0 ? 0 : playerHealth;

            if (playerHealth < 0 && monsterHealth < 0) {
                this.winner = 'draw';

            } else if (playerHealth <= 0) {
                this.winner = 'monster';

            } else if (monsterHealth <= 0) {
                this.winner = 'player';
            }
        }
    },
    computed: {
        playerHealthBarStyle() {
            return {'width': this.monsterHealth + '%'}
        },
        monsterHealthBarStyle() {
            return {'width': this.playerHealth + '%'}
        },
        specialAttackOn() {
            return this.currentRound % 3 !== 0;
        },
        
    },
    methods: {
        attackMonster(){     
            const attackValue  =  getRandomValue(5, 12);
            this.monsterHealth -= attackValue;
            ++this.currentRound;
            this.addLogMessage('player', 'attack', attackValue);
            this.attackPlayer();
        },
        attackPlayer(){
            const attackValue  = getRandomValue(8, 18);
            this.playerHealth -= attackValue;
            this.addLogMessage('monster', 'attack', attackValue);
        },
        specialAttackMonster() {
            const attackValue  =  getRandomValue(10, 25);
            this.monsterHealth -= attackValue;
            ++this.currentRound;
            this.addLogMessage('player', 'attack', attackValue);
            this.attackPlayer();
        },
        healPlayer() {
            
            const healtValue = getRandomValue(8, 25);

            if (this.playerHealth + healtValue > 100) {
                this.playerHealth = 100;
            } else {
                this.playerHealth += healtValue;
            }
            this.addLogMessage('player', 'heal', healtValue);
            this.attackPlayer();
        },
        startNewGame() {
            this.playerHealth = 100;
            this.monsterHealth = 100;
            this.currentRound = 0;
            this.winner = null;
            this.logMessages = [];
        },
        surrender() {
            this.winner = 'monster';
        },
        addLogMessage(who, action, value) {
            this.logMessages.unshift({who, action, value});
        }
    },
});

app.mount('#game');