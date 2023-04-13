<template>
  <li class="card shadow-sm mt-2 p-2 flex-row justify-content-between">
    <div class="">
      <h2>{{ fullName }}</h2>
      <h3 class="fs-4 text-success">${{ rate }}/hour</h3>
      <div class="my-2">
        <base-badge
          v-for="area of areas"
          :key="area"
          :type="area"
          :title="area"
        ></base-badge>
      </div>
    </div>
    <div class="d-flex align-items-end">
      <div class="actions">
        <base-button :to="coachDetailsLink" link mode="btn-success me-2 "
          >Details</base-button
        >
        <base-button :to="coachContactLink" link mode="btn-primary ms-2"
          >Contact</base-button
        >
      </div>
    </div>
  </li>
</template>

<script>
export default {
  props: ["id", "firstName", "lastName", "rate", "areas"],
  computed: {
    coachContactLink() {
      return this.$route.path + "/" + this.id + "/contact";
    },
    coachDetailsLink() {
      return this.$route.path + "/" + this.id;
    },
    fullName() {
      return this.firstName + "" + this.lastName;
    },
  },
};
</script>
