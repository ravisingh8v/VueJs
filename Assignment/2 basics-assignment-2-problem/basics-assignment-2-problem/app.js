Vue.createApp({
  data() {
    return {
      output1: "",
      output2: "",
    };
  },
  methods: {
    // showing alert on click
    showAlert() {
      alert("this is a alert message");
    },
    keydown(event) {
      this.output1 = event.target.value;
    },
    enter(event) {
      this.output2 = event.target.value;
    },
  },
}).mount("#assignment");
