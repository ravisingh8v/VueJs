<template>
  <ul>
    <learning-Element
      v-for="learningResource in learningResources"
      :key="learningResource.id"
      :id="learningResource.id"
      :title="learningResource.title"
      :description="learningResource.description"
      :link="learningResource.link"
    ></learning-Element>
    <!-- <span>{{ id }}</span>
    <span>{{ title }}</span>
    <span>{{ description }}</span>
    <span><a v-bind:href="link">learn More</a></span> -->
  </ul>
</template>
<script>
import LearningElement from "./LearningElement.vue";

export default {
  components: { LearningElement },
  props: ["learningResources"],
};
</script>
<style scoped>
ul {
  list-style: none;
  margin: 0;
  padding: 0;
}
</style>
