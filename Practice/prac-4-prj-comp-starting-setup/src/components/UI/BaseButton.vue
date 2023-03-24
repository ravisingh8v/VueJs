<template>
  <button :class="mode" :type="type">
    <slot></slot>
  </button>
</template>
<script>
export default {
  props: ["type", "mode"],
};
</script>
<style scoped>
button {
  border: 1px solid grey;
  padding: 10px 10px;
  font-size: 18px;
  border-radius: 5px;
  background-color: rgb(232, 93, 93);
  color: white;
  transition: background-color 0.2s linear;
}
button:hover {
  background-color: rgb(231, 52, 52);
}
.flat {
  border: 1px solid grey;
  padding: 5px;
  border-radius: 5px;
  background-color: transparent;
  color: red;
  transition: background-color 0.2s linear;
}
button:hover {
  background-color: rgb(231, 52, 52);
  color: white;
}
</style>
