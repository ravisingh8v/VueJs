Vue.createApp({
  data() {
    return {
      playerHealth: 100,
      monsterHealth: 100,
      currentRound: 0,
      winner: null,
      logMessages: [],
    };
  },

  methods: {
    // get random value for attack and heal
    getRandomValue(min, max) {
      return Math.floor(Math.random() * (max - min) + min);
    },

    // start new game button
    startGame() {
      this.playerHealth = 100;
      this.monsterHealth = 100;
      this.winner = null;
      this.currentRound = 0;
      this.logMessages = [];
    },

    // player attack button
    playerAttack() {
      this.currentRound++;
      const attackValue = this.getRandomValue(5, 12);
      this.monsterHealth -= attackValue;
      console.log(this.monsterHealth);
      this.battleLogs("player", "attack", attackValue);
      this.mnonsterAttack();
    },

    // monster attack funtion
    mnonsterAttack() {
      const attackValue = this.getRandomValue(8, 15);
      this.playerHealth -= attackValue;
      this.battleLogs("monster", "attack", attackValue);
      console.log(this.playerHealth);
    },

    // special attack  button
    specialAttack() {
      this.currentRound++;
      const attackValue = this.getRandomValue(10, 25);
      this.battleLogs("player", "attack", attackValue);
      this.monsterHealth -= attackValue;
      this.mnonsterAttack();
    },

    // heal button
    healPlayer() {
      this.currentRound++;
      const healValue = this.getRandomValue(10, 20);
      if (this.playerHealth + healValue > 100) {
        this.playerHealth = 100;
      } else {
        this.playerHealth += healValue;
      }
      this.battleLogs("player", "heal", healValue);
      this.mnonsterAttack();
    },

    // surrender button
    surrender() {
      this.winner = "monster";
    },

    //battle logs
    battleLogs(who, action, damage) {
      this.logMessages.unshift({
        actionBy: who,
        actionType: action,
        actionDamage: damage,
      });
    },
  },

  computed: {
    // player health bar
    playerBarStyle() {
      if (this.playerHealth <= 0) {
        return { width: "0%" };
      }
      return {
        width: this.playerHealth + "%",
      };
    },

    // monster health bar
    monsterBarStyle() {
      if (this.monsterHealth <= 0) {
        return { width: "0%" };
      }
      return {
        width: this.monsterHealth + "%",
      };
    },

    // special attack disabled button logic
    mayUseSpecialAttack() {
      return this.currentRound % 3 !== 0;
    },
  },

  watch: {
    // to set winner keeping eye on playerhealth
    playerHealth(value) {
      if (value <= 0 && this.monsterHealth <= 0) {
        this.winner = "draw";
      } else if (value < 0) {
        this.winner = "monster";
      }
    },

    // to set winner keeping eye on monsterhealth
    monsterHealth(value) {
      if (value <= 0 && this.playerHealth <= 0) {
        this.winner = "draw";
      } else if (value < 0) {
        this.winner = "player";
      }
    },
  },
}).mount("#game");
