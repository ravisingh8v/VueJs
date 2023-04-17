<template>
  <section>
    <!-- error dialog  -->
    <base-dialog
      :show="!!error"
      @close="handleError"
      title="An Error Occurred"
      >{{ error }}</base-dialog
    >
    <!-- loading dialog  -->
    <base-dialog :show="isLoading" fixed title="Authenticating........">
      <base-spinner></base-spinner>
    </base-dialog>

    <!-- main form wrapper  -->
    <base-card pad="p-4" class="w-50 mx-auto mt-5">
      <form @submit.prevent="submitForm">
        <div>
          <label for="email">Email</label>
          <input
            type="text"
            class="form-control"
            id="email"
            v-model.trim="email"
          />
        </div>
        <div>
          <label for="password">Password</label>
          <input
            type="password"
            class="form-control"
            id="password"
            v-model.trim="password"
          />
        </div>
        <div v-if="!formIsValid" class="text-danger">
          <p>Please Fill Above Form Correctly</p>
        </div>
        <!-- action buttons  -->
        <div class="mt-3">
          <base-button type="submit" mode="btn-primary me-2"
            >{{ submitButtonMode }}
          </base-button>
          <base-button type="button" mode="btn-success ms-2" @click="switchMode"
            >{{ switchButtonMode }} Instead</base-button
          >
        </div>
      </form>
    </base-card>
  </section>
</template>
<script>
export default {
  data() {
    return {
      email: "",
      password: "",
      mode: "Login",
      formIsValid: true,
      isLoading: false,
      error: null,
    };
  },
  computed: {
    submitButtonMode() {
      if (this.mode == "Login") {
        return "Login";
      } else {
        return "Sign-up";
      }
    },
    switchButtonMode() {
      if (this.mode == "Login") {
        return "Sign-up";
      } else {
        return "Login";
      }
    },
  },
  methods: {
    async submitForm() {
      this.formIsValid = true;
      if (
        this.email === "" ||
        !this.email.includes("@") ||
        this.password.length < 6
      ) {
        this.formIsValid = false;
      }

      const sendingPayload = {
        email: this.email,
        password: this.password,
      };
      this.isLoading = true;
      try {
        if (this.mode === "Login") {
          await this.$store.dispatch("login", sendingPayload);
          const redirectUrl = "/" + (this.$route.query.redirect || "coaches");
          this.$router.replace(redirectUrl);
        } else {
          await this.$store.dispatch("signUp", sendingPayload);
          this.mode = "Login";
          //   this.error = error.message;
        }
      } catch (error) {
        this.error = error.message;
        console.log(error);
      }
      this.isLoading = false;
    },
    switchMode() {
      if (this.mode === "Login") {
        this.mode = "Sign-up";
      } else {
        this.mode = "Login";
      }
    },
    handleError() {
      this.error = null;
    },
  },
};
</script>
