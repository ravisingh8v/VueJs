Vue.createApp({
  data() {
    return {
      result: 0,
    };
  },

  watch: {
    output() {
      setTimeout(() => {
        this.result = 0;
      }, 5000);
    },
  },

  computed: {
    output() {
      if (this.result < 37) {
        return "Not there yet";
      } else if (this.result === 37) {
        return this.result;
      } else if (this.result > 37) {
        return "Too much!";
      }
    },
  },
  methods: {
    addNumber(value) {
      this.result = this.result + value;
      console.log(this.result);
    },
  },
}).mount("#assignment");
