Vue.createApp({
    data() {
        return {
            playerHealth: 100,
            monsterHealth: 100,
            currentRound: 0,
            winner: null
        }
    },

    methods: {
        getRandomValue(min, max) {
            return Math.floor(Math.random() * (max - min) + min)
        },

        playerAttack() {
            this.currentRound++
            const attackValue = this.getRandomValue(5, 12);
            this.monsterHealth -= attackValue;
            console.log(this.monsterHealth);
            this.mnonsterAttack()
        },

        mnonsterAttack() {
            const attackValue = this.getRandomValue(8, 15);
            this.playerHealth -= attackValue
            console.log(this.playerHealth);
        },

        specialAttack() {
            this.currentRound++
            const attackValue = this.getRandomValue(10, 25);
            this.monsterHealth -= attackValue;
            this.mnonsterAttack()
        },

        healPlayer() {
            this.currentRound++
            const healValue = this.getRandomValue(10, 20);
            if (this.playerHealth + healValue > 100) {
                this.playerHealth = 100
            } else {
                this.playerHealth += healValue
            }
            this.mnonsterAttack()
        }
    },

    computed: {
        playerBarStyle() {
            return {
                width: this.playerHealth + '%'
            }
        },
        monsterBarStyle() {
            return {
                width: this.monsterHealth + '%'
            }
        },
        mayUseSpecialAttack() {
            return this.currentRound % 3 !== 0
        }
    },

    watch: {
        playerHealth(value) {
            if ((value && this.monsterHealth) <= 0) {
                this.winner = 'draw';
            } else if (value < 0) {
                this.winner = 'monster'
            }
        },

        monsterHealth(value){
            if((value && this.playerHealth) <= 0){
                this.winner='draw';
            }else if(value < 0){
                this.winner ='player' 
            }
        }
    }
}).mount("#game")