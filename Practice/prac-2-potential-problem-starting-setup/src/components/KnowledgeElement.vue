<template>
  <li>
    <h3>{{ title }}</h3>
    <p>{{ description }}</p>
    <button @click="selected(id)">Learn More</button>
  </li>
</template>
<script>
export default {
  inject: ["selected"],
  props: ["id", "title", "description"],
  //   emits: ["selected"],
  data() {
    return {};
  },
};
</script>
