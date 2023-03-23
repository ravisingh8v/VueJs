<template>
  <div style="display: flex; flex-direction: column">
    <the-header></the-header>
    <section>
      <!-- <badge-list></badge-list>
      <user-info></user-info> -->

      <!-- 
        to set the name that which component should be open  
      -->
      <button @click="setComponent('the-home')">home</button>
      <button @click="setComponent('the-about')">about</button>
    </section>
    <!-- <TheHome></TheHome> -->
    <!-- 
      show component dynacially one way  
    -->
    <!-- <the-home v-if="selectedComponent === 'the-home'"></the-home>
    <the-about v-if="selectedComponent === 'the-about'"></the-about> -->

    <!-- dynamically load component -->
    <!-- 
      keep alive not destroy the other component data when switch one to  another component  
    -->
    <KeepAlive>
      <component :is="selectedComponent"></component>
    </KeepAlive>
  </div>
</template>

<script>
import TheHeader from "./components/TheHeader.vue";
// import BadgeList from "./components/BadgeList.vue";
// import UserInfo from "./components/UserInfo.vue";
import TheHome from "./components/TheHome.vue";
import TheAbout from "./components/TheAbout.vue";

export default {
  components: {
    TheHeader,
    TheHome,
    TheAbout,
    // "user-info": UserInfo,
    // "badge-list": BadgeList,
  },
  data() {
    return {
      selectedComponent: "the-home",
    };
  },
  methods: {
    setComponent(cmp) {
      this.selectedComponent = cmp;
    },
  },
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
#app {
  height: 100%;
  width: 100%;
}
section {
  /* display: flex; */
  /* align-items: center; */
  /* flex-direction: column; */
  /* border: 1px solid red; */
  width: 100%;
}
</style>
