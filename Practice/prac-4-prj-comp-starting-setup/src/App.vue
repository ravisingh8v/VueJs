<template>
  <div>
    <LearningList :learningResources="learningResources" />
  </div>
</template>

<script>
import LearningList from "./components/learning-resources/LearningResources.vue";
export default {
  components: { LearningList },
  data() {
    return {
      learningResources: [
        {
          id: "1",
          title: "google",
          description: "google it for learn...",
          link: "https://www.google.com",
        },
        {
          id: 2,
          title: "W3S",
          description: "w3s is  also best platform",
          link: "https://www.w3schools.com",
        },
      ],
    };
  },
};
</script>

<style></style>
