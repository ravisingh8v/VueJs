Vue.createApp({
  data() {
    return {
      name: "ravi",
      age: 21,
      image:
        "https://images.unsplash.com/photo-1626278664285-f796b9ee7806?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80",
    };
  },
  methods: {
    randomNumber() {
      return Math.random();
    },
  },
}).mount("#assignment");
