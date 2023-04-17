<template>
  <!-- component wrapper  -->
  <section class="mb-2 mt-4">
    <!-- form wrapper  -->
    <form @submit.prevent="submitForm">
      <!-- email filed  -->
      <div :class="{ invalid: email == '' && !formIsValid }">
        <label for="email">Email</label>
        <input
          class="form-control"
          id="email"
          type="text"
          v-model.trim="email"
        />
      </div>
      <!-- message filed  -->
      <div :class="{ invalid: message == '' && !formIsValid }">
        <label for="message">Message</label>
        <textarea
          class="form-control"
          id="message"
          rows="5"
          v-model.trim="message"
        ></textarea>
      </div>
      <!-- error message when filed is empty or invalid  -->
      <div v-if="!formIsValid" :class="{ invalid: !formIsValid }">
        <p>above fields are required</p>
      </div>
      <!-- submit button  -->
      <div class="my-2">
        <base-button mode="btn-primary">Submit</base-button>
      </div>
    </form>
  </section>
</template>
<script>
export default {
  data() {
    return {
      email: "",
      message: "",
      formIsValid: true,
    };
  },
  methods: {
    /**
     * Submit Form methods
     * checking form is valid or not if valid-
     * dispatching data to store action to send form data into the server and replace the route with (/'coaches')
     * if not valid returns the function
     */
    submitForm() {
      this.formIsValid = true;
      if (this.email == "" || !this.email.includes("@") || this.message == "") {
        this.formIsValid = false;
        console.log(this.$route.params.id);
        return;
      }
      this.$store.dispatch("req/contactCoach", {
        coachId: this.$route.params.id,
        email: this.email,
        message: this.message,
      });
      this.$router.replace("/coaches");
      // for reset
    },
  },
};
</script>
<style></style>
