<template>
  <ul>
    <learning-Element
      v-for="learningResource in resources"
      :key="learningResource.id"
      :id="learningResource.id"
      :title="learningResource.title"
      :description="learningResource.description"
      :link="learningResource.link"
    ></learning-Element>
  </ul>
</template>

<script>
import LearningElement from "./LearningElement.vue";

export default {
  inject: ["resources"],
  components: { LearningElement },
  methods: {},
};
</script>

<style scoped>
ul {
  list-style: none;
  margin: 0 auto;
  padding: 0;
  width: 600px;
}
</style>
