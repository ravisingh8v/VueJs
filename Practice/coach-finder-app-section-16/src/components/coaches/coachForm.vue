<template>
  <form @submit.prevent="submitForm">
    <div :class="{ invalid: !firstname.isValid }">
      <label for="firstname">First Name</label>
      <input
        class="form-control"
        type="text"
        id="firstname"
        v-model.trim="firstname.val"
        @blur="clearValidation(firstname)"
      />
      <p v-if="!firstname.isValid">this field is required</p>
    </div>
    <div :class="{ invalid: !lastname.isValid }">
      <label for="lastname">Last Name</label>
      <input
        class="form-control"
        type="text"
        id="lastname"
        v-model.trim="lastname.val"
        @blur="clearValidation(lastname)"
      />
      <p v-if="!lastname.isValid">this field is required</p>
    </div>
    <div :class="{ invalid: !description.isValid }">
      <label for="description">Description</label>
      <textarea
        class="form-control"
        type="text"
        id="description"
        role="5"
        v-model.trim="description.val"
        @blur="clearValidation(description)"
      ></textarea>
      <p v-if="!description.isValid">this field is required</p>
    </div>
    <span class="mt-3 d-inline-block">Areas</span>
    <div class="mt-1" :class="{ invalid: !areas.isValid }">
      <input
        type="checkbox"
        class="form-check-input me-2"
        id="frontend"
        value="frontend"
        v-model="areas.val"
        @blur="clearValidation(areas)"
      />
      <label for="frontend">FrontEnd</label>
    </div>
    <div :class="{ invalid: !areas.isValid }">
      <input
        type="checkbox"
        class="form-check-input me-2"
        id="backend"
        value="backend"
        v-model="areas.val"
        @blur="clearValidation(areas)"
      />
      <label for="backend">BackEnd</label>
    </div>
    <div class="mb-3" :class="{ invalid: !areas.isValid }">
      <input
        type="checkbox"
        class="form-check-input me-2"
        id="career"
        value="career"
        v-model="areas.val"
        @blur="clearValidation(areas)"
      />
      <label for="career">career</label>
      <p v-if="!areas.isValid">at least one area is need to selected</p>
    </div>
    <div :class="{ invalid: !hourlyRate.isValid }">
      <label for="rate">Hourly Rate</label>
      <input
        type="number"
        class="form-control"
        id="rate"
        v-model.number="hourlyRate.val"
        @blur="clearValidation(hourlyRate)"
      />
      <p v-if="!hourlyRate.isValid">this field is required</p>
    </div>
    <div class="my-3" :class="{ invalid: !allFormIsValid }">
      <p v-if="!allFormIsValid">Please Fix the Above and try again.</p>
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
      firstname: {
        val: "",
        isValid: true,
      },
      lastname: {
        val: "",
        isValid: true,
      },
      description: {
        val: "",
        isValid: true,
      },
      areas: {
        val: [],
        isValid: true,
      },
      hourlyRate: {
        val: null,
        isValid: true,
      },
      formIsValid: true,
    };
  },
  methods: {
    clearValidation(input) {
      if (input.val) {
        input.isValid = true;
        return true;
      }
    },
    validateForm() {
      this.formIsValid = true;
      if (this.firstname.val === "") {
        this.firstname.isValid = false;
        this.formIsValid = false;
      }
      if (this.lastname.val === "") {
        this.lastname.isValid = false;
        this.formIsValid = false;
      }
      if (this.description.val === "") {
        this.description.isValid = false;
        this.formIsValid = false;
      }
      if (!this.hourlyRate.val || this.hourlyRate.val < 0) {
        this.hourlyRate.isValid = false;
        this.formIsValid = false;
      }
      if (this.areas.val.length === 0) {
        this.areas.isValid = false;
        this.formIsValid = false;
      }
    },
    submitForm() {
      this.validateForm();
      if (!this.formIsValid) {
        return false;
      }
      const formData = {
        first: this.firstname.val,
        last: this.lastname.val,
        desc: this.description.val,
        areas: this.areas.val,
        rate: this.hourlyRate.val,
      };
      this.$emit("save-data", formData);
    },
  },
  computed: {
    allFormIsValid() {
      return (
        this.firstname.isValid &&
        this.lastname.isValid &&
        this.description.isValid &&
        this.areas.isValid &&
        this.hourlyRate.isValid
      );
    },
  },
};
</script>
<style>
.invalid label,
.invalid p {
  color: red;
}
.invalid input,
.invalid textarea,
.invalid .form-control:focus {
  border: 1px solid red;
}
.invalid .form-control:focus {
  box-shadow: 1px 0px 0px 0.25rem rgba(255, 0, 0, 0.378);
}
.invalid .form-check-input:focus {
  border: 1px solid red;
  box-shadow: 1px 0px 0px 0.25rem rgba(255, 0, 0, 0.378);
}
.invalid .form-check-input:checked {
  background-color: red;
  border-color: red;
}
</style>
