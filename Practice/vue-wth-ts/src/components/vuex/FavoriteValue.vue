<template>
  <span>{{ normalized }}</span>
</template>
<script lang="ts">
import { defineComponent } from "vue";
// useStore
import { mapGetters } from "vuex";

export default defineComponent({
  data() {
    return {
      // for the first way we need to import useStore
      //   $store: useStore(),
    };
  },
  computed: {
    ...mapGetters(["normalized"]),
    // this is one way also
    // counter() {
    //   return this.$store.getters.normalized;
    // },
  },
});
</script>
