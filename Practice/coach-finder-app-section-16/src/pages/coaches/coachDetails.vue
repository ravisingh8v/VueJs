<template>
  <section class="p-3 d-flex w-50 mx-auto flex-column">
    <div class="my-3">
      <h1>Coach Detail</h1>
    </div>
    <div></div>
    <base-card class="" pad="p-4">
      <h2>{{ fullName }}</h2>
      <span class="fw-bold">${{ rate }}/Hour</span>
    </base-card>
    <base-card class="mt-3" pad="p-4">
      <span class="fw-bold fs-3">Interested? Reach Out Now!!!!!</span>
      <div>
        <base-button link mode="btn-primary px-5 mt-3" :to="contactLink"
          >Contact</base-button
        >
      </div>
    </base-card>
    <!-- <div class="mt-3" v-if="selectedCoach">
      <base-card pad="p-2"> <RouterView></RouterView></base-card>
    </div> -->
    <div class="mt-3">
      <base-card pad="p-4">
        <h5>
          {{ description }}
        </h5>
        <div>
          <base-badge
            v-for="area in areas"
            :key="area"
            :type="area"
            :title="area"
          ></base-badge>
        </div>
      </base-card>
    </div>
  </section>
</template>
<script>
export default {
  props: ["id"],
  selectedCoach: null,
  computed: {
    contactLink() {
      return this.$route.path + "" + "/contact";
    },
    fullName() {
      return this.selectedCoach.firstName + " " + this.selectedCoach.lastName;
    },
    description() {
      return this.selectedCoach.description;
    },
    areas() {
      return this.selectedCoach.areas;
    },
    rate() {
      return this.selectedCoach.hourlyRate;
    },
  },
  created() {
    this.selectedCoach = this.$store.getters["coach/coaches"].find(
      (res) => res.id === this.id
    );
  },
};
</script>
