<template>
  <div class="w-50 card">
    <h2>{{ name }}</h2>
    <h3>{{ age }} Age</h3>
  </div>
</template>

<script>
export default {
  props: ["name", "age"],
  data() {
    return {};
  },
};
</script>
