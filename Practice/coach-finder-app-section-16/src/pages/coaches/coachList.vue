<template>
  <section class="p-3 border mx-auto d-flex flex-column align-items-center">
    <section class="w-75 my-2">
      <coachFilter @change-filter="setFilter"></coachFilter>
    </section>
    <base-card pad="p-4 w-75 border">
      <div class="pt-3">
        <!-- class="btn btn-success me-2" -->
        <base-button mode="btn-outline-success  me-2" to="/coaches"
          >Refresh</base-button
        >
        <base-button mode="btn-primary ms-2" link to="/register"
          >Register a Coach</base-button
        >
      </div>
      <div class="pt-3">
        <ul v-if="hasCoaches" class="list-unstyled">
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
      </div>
    </base-card>
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
      activeFilter: {
        frontend: true,
        backend: true,
        career: true,
      },
    };
  },
  computed: {
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
      return this.$store.getters["coach/hasCoaches"];
    },
  },
  methods: {
    setFilter(updatedFilter) {
      this.activeFilter = updatedFilter;
    },
  },
};
</script>
