<template>
  <li>
    <h2>{{ name }}</h2>
    <h3>{{ age }}</h3>
  </li>
</template>

<script>
export default {
  props: ["name", "age"],
  data() {
    return {};
  },
};
</script>
