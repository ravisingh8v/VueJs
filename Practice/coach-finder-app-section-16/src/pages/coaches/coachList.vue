<template>
  <section>
    <base-dialog
      :show="!!error"
      title="An Error occurred!!!"
      @close="handleError"
    >
      <p>{{ error }}</p></base-dialog
    >
    <section class="p-3 border mx-auto d-flex flex-column align-items-center">
      <section class="w-75 my-2">
        <coachFilter @change-filter="setFilter"></coachFilter>
      </section>
      <base-card pad="p-4 w-75 border">
        <div class="pt-3">
          <!-- class="btn btn-success me-2" -->
          <base-button
            mode="btn-outline-success 
        me-2"
            @click="loadCoaches(true)"
            link
            :to="'/coaches'"
            >Refresh</base-button
          >
          <base-button
            mode="mx-2 btn-primary"
            v-if="!isLoggedIn"
            link
            to="/auth?redirect=register"
            >Login to Register as Coach</base-button
          >
          <base-button
            v-if="isLoggedIn && !isCoach && !isLoading"
            mode="btn-primary ms-2"
            link
            to="/register"
            >Register a Coach</base-button
          >
        </div>
        <div v-if="isLoading">
          <base-spinner></base-spinner>
        </div>

        <ul v-else-if="hasCoaches" class="pt-3 list-unstyled">
          <coachItem
            v-for="coach in coachesList"
            :key="coach.id"
            :id="coach.id"
            :first-name="coach.firstName"
            :last-name="coach.lastName"
            :rate="coach.hourlyRate"
            :areas="coach.areas"
          ></coachItem>
        </ul>
        <h3 v-else>no data found</h3>
      </base-card>
    </section>
  </section>
</template>
<script>
import coachItem from "./../../components/coaches/coachItem.vue";
import coachFilter from "@/components/coaches/coachFilter.vue";
export default {
  components: {
    coachItem,
    coachFilter,
  },
  data() {
    return {
      isLoading: false,
      error: null,
      activeFilter: {
        frontend: true,
        backend: true,
        career: true,
      },
    };
  },

  created() {
    this.loadCoaches();
  },
  computed: {
    isLoggedIn() {
      return this.$store.getters.isLoggedIn;
    },
    isCoach() {
      return this.$store.getters["coach/isCoach"];
    },
    coachesList() {
      let coach = this.$store.getters["coach/coaches"];
      return coach.filter((res) => {
        if (this.activeFilter.frontend && res.areas.includes("frontend")) {
          return true;
        }
        if (this.activeFilter.backend && res.areas.includes("backend")) {
          return true;
        }
        if (this.activeFilter.career && res.areas.includes("career")) {
          return true;
        }
        return false;
      });
    },
    hasCoaches() {
      return !this.isLoading && this.$store.getters["coach/hasCoaches"];
    },
  },
  methods: {
    setFilter(updatedFilter) {
      this.activeFilter = updatedFilter;
    },
    async loadCoaches(forceRefresh = false) {
      this.isLoading = true;
      try {
        await this.$store.dispatch("coach/loadCoaches", {
          forceRefresh,
        });
      } catch (msg) {
        this.error = msg.message || "something went wrong";
      }
      this.isLoading = false;
    },
    handleError() {
      this.error = null;
    },
  },
};
</script>
