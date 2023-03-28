<template>
  <div class="d-flex justify-content-center mt-4">
    <form class="w-100 card p-3" @submit.prevent="submitForm">
      <div class="d-flex flex-column my-1">
        <label for="username">Username</label>
        <input
          type="text"
          id="username"
          class="form-control"
          placeholder="Enter Your Username"
          v-model="enteredUsername"
        />
      </div>
      <div class="d-flex flex-column my-1">
        <label for="message">Enter Message</label>
        <input
          type="text"
          id="message"
          class="form-control"
          placeholder="Enter your Message"
          v-model="enteredMessage"
        />
      </div>
      <div class="d-flex flex-column mt-4">
        <div class="">
          <span>Rating</span>
        </div>
        <div class="mt-2">
          <input
            class="me-2 form-check-input"
            type="radio"
            name="rating"
            value="poor"
            id="poor"
            v-model="seletedRating"
          />
          <label for="poor">Poor</label>
        </div>
        <div>
          <input
            class="me-2 form-check-input"
            type="radio"
            name="rating"
            value="average"
            id="average"
            v-model="seletedRating"
          />
          <label for="average">Average</label>
        </div>
        <div>
          <input
            class="me-2 form-check-input"
            type="radio"
            name="rating"
            value="good"
            id="good"
            v-model="seletedRating"
          />
          <label for="good">Good</label>
        </div>
      </div>
      <p class="text-danger" v-if="error">{{ error }}</p>
      <div class="mt-3 text-center">
        <button type="submit" class="btn btn-primary w-100">
          <span v-if="loading">Sending....</span>
          <span v-else>Add Your Feedback</span>
        </button>
      </div>
      <!-- {{ editUserData }} -->
    </form>
  </div>
</template>

<!-- Logic started here  -->
<script>
export default {
  props: ["editUserData"],
  inject: ["getListData"],
  data() {
    return {
      enteredUsername: "",
      enteredMessage: "",
      seletedRating: null,
      error: "",
      loading: false,
    };
  },
  methods: {
    submitForm() {
      // this emit for getting data in form when we are submitForm
      //   this.$emit("getData");
      if (this.enteredUsername && this.enteredMessage && this.seletedRating) {
        this.loading = true;
        fetch(
          "https://vue-practice-2b7ca-default-rtdb.firebaseio.com/ratings.json",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              username: this.enteredUsername,
              message: this.enteredMessage,
              rating: this.seletedRating,
            }),
          }
        )
          .then((res) => {
            if (res.ok) {
              this.enteredUsername = "";
              this.enteredMessage = "";
              this.seletedRating = null;
              this.error = "";
              console.log(res);
              this.loading = false;
              this.getListData();
            }
          })
          .catch((error) => {
            console.log(error.message);
            this.loading = false;
            this.error = "something went wrong - please try again later!";
          });
      } else {
        this.error = "please enter your details";
      }
    },
  },
  watch: {
    enteredUsername(value) {
      if (value) {
        this.error = "";
      }
    },
    editUserData() {
      this.enteredUsername = this.editUserData.username;
      this.enteredMessage = this.editUserData.message;
      this.seletedRating = this.editUserData.rating;
    },
  },
};
</script>
