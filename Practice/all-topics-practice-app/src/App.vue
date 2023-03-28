<template>
  <TheHeader @activeLink="activeLink" :active="activeComponent"></TheHeader>
  <!-- <TheForm></TheForm> -->
  <KeepAlive>
    <component :is="activeComponent"></component>
  </KeepAlive>
</template>

<script>
import TheHeader from "./components/core/TheHeader.vue";
import TheForm from "./components/form-practice/TheForm.vue";
import HttpBase from "./components/http-practice/HttpBase.vue";
export default {
  data() {
    return {
      activeComponent: "http-base",
    };
  },
  components: { TheHeader, TheForm, HttpBase },
  methods: {
    activeLink(active) {
      this.activeComponent = active;
    },
  },
};
</script>

<style>
@import url("../node_modules/bootstrap/dist/css/bootstrap.min.css");
@import url("../node_modules/bootstrap-icons/font/bootstrap-icons.css");
</style>
