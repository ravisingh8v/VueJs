<template>
  <button @click="increase({ value: 10 })">Add 10</button>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import { mapActions, useStore } from "vuex";

export default defineComponent({
  data() {
    return {
      $store: useStore(),
    };
  },
  methods: {
    // addTen() {
    //   // one way of writing this
    //   //   this.$store.commit("increase", { value: 10 });

    //   //   other way
    // //   this.$store.dispatch({
    // //     type: "increase",
    // //     value: 10,
    // //   });
    // },

    // third way
    ...mapActions(["increase"]),
  },
});
</script>
