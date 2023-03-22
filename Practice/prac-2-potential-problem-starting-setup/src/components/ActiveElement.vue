<template>
  <section v-if="activeTitle">
    <h2>{{ activeTitle }}</h2>
    <p>{{ activeText }}</p>
  </section>
</template>
<script>
export default {
  props: ["activeTitle", "activeText"],
};
</script>
