<template>
  <section>
    <h2>Select a Topic</h2>
    <knowledge-grid></knowledge-grid>
    <!-- @selected="$emit('selected', $event)" -->
  </section>
</template>
<script>
export default {
  //   emits: ["selected"],
  props: ["topics"],
};
</script>
