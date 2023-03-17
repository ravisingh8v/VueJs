Vue.createApp({
  data() {
    return {
      output1: "",
      output2: "",
    };
  },
  methods: {
    showAlert() {
      alert("this is a alrt msg");
    },
    keydown(event) {
      this.output1 = event.target.value;
    },
    enter(event) {
      this.output2 = event.target.value;
    },
  },
}).mount("#assignment");
