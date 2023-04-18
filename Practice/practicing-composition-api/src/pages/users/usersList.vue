<template>
  <h1>My Course Goal</h1>
  <h3 v-if="showGoal">{{ courseGoal }}</h3>
  <button @click="toggleGoal">Toggle Button</button>
</template>

<script>
// import { ref } from "vue";

// export default {
//   setup() {
// method 1
// const courseGoal = ref("Vuejs");
// const showGoal = ref(true);
// function toggleGoal() {
//   showGoal.value = !showGoal.value;
// }

// method 2
// const goals = ref({
//   courseGoal: "vueJs",
//   showGoal: true,
// });

// function toggleGoal() {
//   goals.value.showGoal = !goals.value.showGoal;
// }

// method 3
// const goals = reactive({
//   courseGoal: "vueJs",
//   showGoal: true,
// });
// function toggleGoal() {
//   goals.showGoal = !goals.showGoal;
// }

// return {
// method 1s
//   courseGoal: courseGoal,
//   toggleGoal: toggleGoal,
//   showGoal: showGoal,
// method 2
//   goals: goals,
//   toggleGoal: toggleGoal,
// method 3
//   goals: goals,
//   toggleGoal: toggleGoal,
// };
//   },
// };

export default {
  data() {
    return {
      courseGoal: "VueJs",
      showGoal: true,
    };
  },
  methods: {
    toggleGoal() {
      this.showGoal = !this.showGoal;
    },
  },
};
</script>
