<template>
  <section v-if="userAuthenticated">
    <div>
      <TheCounter></TheCounter>
    </div>
    <div>
      <FavoriteValue></FavoriteValue>
    </div>
    <div>
      <button @click="increment">add 1</button>
    </div>
    <div>
      <CounterChange></CounterChange>
    </div>
  </section>
  <section class="card border p-3">
    <div>
      <button @click="login">login</button>
      <button @click="logout">logout</button>
    </div>
  </section>
</template>
<script lang="ts">
import { defineComponent } from "vue";
// import { useStore } from "vuex";
import { mapActions, mapGetters } from "vuex";
// component
import TheCounter from "./TheCounter.vue";
import CounterChange from "./CounterChange.vue";
import FavoriteValue from "./FavoriteValue.vue";
export default defineComponent({
  components: { TheCounter, CounterChange, FavoriteValue },
  data() {
    return {
      //   $store: useStore(),
    };
  },
  methods: {
    /**
     * this only with state changing a count
     */
    // addOne() {
    //   this.$store.state.counter++;
    // },

    /**
     * this when we using mutations
     */
    // addOne() {
    //   this.$store.dispatch("increment");
    // },
    ...mapActions(["increment", "login", "logout"]),
  },
  computed: {
    ...mapGetters(["userAuthenticated"]),
  },
});
</script>
