Vue.createApp({
  data() {
    return {
      data: "",
      visibled: true,
      colorName: "",
    };
  },
  computed: {
    paraClass() {
      return {
        user1: this.data === "user1",
        user2: this.data === "user2",
        visible: this.visibled === true,
        hidden: this.visibled === false,
      };
    },
  },
  methods: {
    visibility() {
      this.visibled = !this.visibled;
    },
  },
}).mount("#assignment");
