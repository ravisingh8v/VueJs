<template>
  <div>
    <base-card>
      <base-button
        @click="setSelectedComponent('learning-resources')"
        :mode="this.isLearningResources"
        >View Resources</base-button
      >
      <base-button
        @click="setSelectedComponent('add-resources')"
        :mode="this.isAddResources"
        >Add Resources</base-button
      >
    </base-card>
  </div>
  <KeepAlive>
    <component :is="selectedResources"></component>
  </KeepAlive>
</template>
<script>
import LearningResources from "./LearningResources.vue";
import AddResources from "./AddResources.vue";

export default {
  components: { LearningResources, AddResources },
  data() {
    return {
      selectedResources: "learning-resources",
      Resources: [
        {
          id: 0,
          title: "google",
          description:
            "google it for learn it is best site to learn something...",
          link: "https://www.google.com",
        },
        {
          id: 0,
          title: "W3S",
          description:
            "w3s is  also best platform here you can get all the courses for free",
          link: "https://www.w3schools.com",
        },
      ],
    };
  },
  provide() {
    return {
      resources: this.Resources,
      addData: this.addResource,
      deleteItem: this.deleteItem,
    };
  },
  methods: {
    setSelectedComponent(com) {
      this.selectedResources = com;
    },
    addResource(res) {
      //   if we deleted whole array and after that we adding one resource so it will don't find the id so this code help in that
      if (res.title && res.link && res.description) {
        let id;
        if (this.Resources.length > 0) {
          id = this.Resources[this.Resources.length - 1].id + 1;
        } else {
          id = 1;
        }

        const newres = {
          id: id,
          title: res.title,
          description: res.description,
          link: res.link,
        };
        console.log(newres);
        this.Resources.push(newres);
        this.Resources[this.Resources.length - 1];
        this.selectedResources = "learning-resources";
      }
    },
    deleteItem(id) {
      const index = this.Resources.findIndex((res) => res.id === id);
      this.Resources.splice(index, 1);
    },
  },

  computed: {
    isLearningResources() {
      return this.selectedResources === "learning-resources" ? null : "flat";
    },
    isAddResources() {
      return this.selectedResources === "add-resources" ? null : "flat";
    },
  },
};
</script>

<style scoped>
div {
  margin: 20px auto;
  width: 600px;
  text-align: center;
  display: flex;
  justify-content: space-between;
}
</style>
