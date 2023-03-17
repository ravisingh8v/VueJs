Vue.createApp({
  data() {
    return {
      inputData: "",
      lists: [],
      showHideList: true,
    };
  },
  methods: {
    addList() {
      this.lists.push(this.inputData);
      console.log(this.list);
      this.inputData = "";
    },
    showHide() {
      this.showHideList = !this.showHideList;
    },
  },
  computed: {
    showhideLists() {
      return this.showHideList ? "hide" : "show";
    },
  },
}).mount("#assignment");
