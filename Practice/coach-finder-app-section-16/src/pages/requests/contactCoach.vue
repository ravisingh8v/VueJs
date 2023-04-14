<template>
  <section class="mb-2 mt-4">
    <form @submit.prevent="submitForm">
      <div :class="{ invalid: email == '' && !formIsValid }">
        <label for="email">Email</label>
        <input
          class="form-control"
          id="email"
          type="text"
          v-model.trim="email"
        />
      </div>
      <div :class="{ invalid: message == '' && !formIsValid }">
        <label for="message">Message</label>
        <textarea
          class="form-control"
          id="message"
          rows="5"
          v-model.trim="message"
        ></textarea>
      </div>
      <div v-if="!formIsValid" :class="{ invalid: !formIsValid }">
        <p>above fields are required</p>
      </div>
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
