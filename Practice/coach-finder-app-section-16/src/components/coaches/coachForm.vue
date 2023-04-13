<template>
  <form @submit.prevent="submitForm">
    <div>
      <label for="firstname">First Name</label>
      <input
        class="form-control"
        type="text"
        id="firstname"
        v-model="firstname"
      />
    </div>
    <div>
      <label for="lastname">Last Name</label>
      <input
        class="form-control"
        type="text"
        id="lastname"
        v-model="lastname"
      />
    </div>
    <div>
      <label for="description">Description</label>
      <textarea
        class="form-control"
        type="text"
        id="description"
        role="5"
        v-model="description"
      ></textarea>
    </div>
    <span class="mt-3 d-inline-block">Areas</span>
    <div class="mt-1">
      <input
        type="checkbox"
        class="form-check-input me-2"
        id="frontend"
        value="frontend"
        v-model="areas"
      />
      <label for="frontend">FrontEnd</label>
    </div>
    <div>
      <input
        type="checkbox"
        class="form-check-input me-2"
        id="backend"
        value="backend"
        v-model="areas"
      />
      <label for="backend">BackEnd</label>
    </div>
    <div class="mb-3">
      <input
        type="checkbox"
        class="form-check-input me-2"
        id="career"
        value="career"
        v-model="areas"
      />
      <label for="career">career</label>
    </div>
    <div>
      <label for="rate">Hourly Rate</label>
      <input
        type="number"
        class="form-control"
        id="rate"
        v-model="hourlyRate"
      />
    </div>
    <div class="mt-2">
      <base-button mode="btn-primary">Submit</base-button>
    </div>
  </form>
</template>
<script>
export default {
  emits: ["save-data"],
  data() {
    return {
      firstname: "",
      lastname: "",
      description: "",
      areas: [],
      hourlyRate: "",
    };
  },
  methods: {
    submitForm() {
      const formData = {
        first: this.firstname,
        last: this.lastname,
        desc: this.description,
        areas: this.areas,
        rate: this.hourlyRate,
      };
      this.$emit("save-data", formData);
    },
  },
};
</script>
