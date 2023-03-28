<template>
  <ul>
    <li :class="{ active: modelValue === 'poor' }">
      <button type="button" @click="activeRating('poor')">poor</button>
    </li>
    <li :class="{ active: modelValue === 'average' }">
      <button type="button" @click="activeRating('average')">average</button>
    </li>
    <li :class="{ active: modelValue === 'good' }">
      <button type="button" @click="activeRating('good')">good</button>
    </li>
  </ul>
</template>
<script>
export default {
  props: ["modelValue"],
  data() {
    return {
      //   activerate: null,
    };
  },
  methods: {
    activeRating(rate) {
      //   this.activerate = this.modelValue;
      this.$emit("update:modelValue", rate);
      console.log(rate);
    },
  },
};
</script>
<style scoped>
.active {
  border-color: green;
}
.active button {
  color: green;
}
ul {
  list-style: none;
  display: flex;
  margin: 1rem 0;
  padding: 0;
}
li {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 1rem;
  border: 1px solid grey;
}
button {
  padding: 1rem;
  background-color: transparent;
  border: none;
  cursor: pointer;
}
</style>
