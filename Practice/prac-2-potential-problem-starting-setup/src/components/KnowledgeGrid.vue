<template>
  <ul>
    <knowledge-element
      v-for="topic in topics"
      :key="topic.id"
      :id="topic.id"
      :title="topic.title"
      :description="topic.description"
    ></knowledge-element>
    <!-- @selected="$emit('selected', $event)" -->
  </ul>
</template>
<script>
export default {
  //   props: ["topics"],
  inject: ["topics"],
  emits: ["selected"],
};
</script>
