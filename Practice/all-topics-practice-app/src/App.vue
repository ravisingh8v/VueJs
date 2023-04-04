<template>
  <TheHeader @activeLink="activeLink" :active="activeComponent"></TheHeader>
  <!-- <TheForm></TheForm> -->
  <!-- v-if="false" -->
  <KeepAlive>
    <component :is="activeComponent"></component>
  </KeepAlive>
  <!-- <RouterView></RouterView> -->
</template>

<script>
import TheHeader from "./components/core/TheHeader.vue";
import TheForm from "./components/form-practice/TheForm.vue";
import HttpBase from "./components/http-practice/HttpBase.vue";
import TheRouter from "./components/router-practice/TheRouter.vue";
export default {
  data() {
    return {
      activeComponent: "http-base",
      teams: [
        { id: "t1", name: "frontend", member: ["u1", "u2"] },
        { id: "t2", name: "backend", member: ["u3", "u4", "u5"] },
        { id: "t3", name: "full-stack", member: ["u1", "u3"] },
      ],
      users: [
        { id: "u1", name: "nikunj", role: "accosiate trainee" },
        { id: "u2", name: "ayush", role: "accosiate trainee" },
        { id: "u3", name: "jinal", role: "accosiate trainee" },
        { id: "u4", name: "amresh", role: "accosiate trainee" },
        { id: "u5", name: "vishwani", role: "accosiate trainee" },
      ],
    };
  },
  components: { TheHeader, TheForm, HttpBase, TheRouter },
  methods: {
    activeLink(active) {
      this.activeComponent = active;
    },
  },
  provide() {
    return {
      teams: this.teams,
      users: this.users,
    };
  },
};
</script>

<style>
@import url("../node_modules/bootstrap/dist/css/bootstrap.min.css");
@import url("../node_modules/bootstrap-icons/font/bootstrap-icons.css");
a {
  cursor: pointer;
}
</style>
