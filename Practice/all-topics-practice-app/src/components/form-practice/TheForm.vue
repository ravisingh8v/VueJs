<template>
  <form @submit.prevent="submitForm">
    <div class="form-controls">
      <label for="username">username</label>
      <input
        type="text"
        id="username"
        v-model="username"
        @blur="validateUser"
      />
      <p v-if="uservalidator === 'invalid'">this is invalid</p>
    </div>
    <div class="form-controls">
      <label for="description">description</label>
      <textarea
        name="description"
        id="description"
        cols="30"
        rows="10"
        v-model="description"
      ></textarea>
    </div>
    <div class="form-controls">
      <span> Gender </span>
      <div>
        <label for="male">male</label>
        <input
          type="radio"
          name="gender"
          id="male"
          value="male"
          v-model="gender"
        />
        <label for="female">female</label>
        <input
          type="radio"
          name="gender"
          id="female"
          value="female"
          v-model="gender"
        />
      </div>
    </div>
    <div class="form-controls">
      <span>select Course</span>
      <div>
        <input
          type="checkbox"
          name="course"
          id="math"
          value="math"
          v-model="course"
        />
        <label for="math">Math</label>
        <input
          type="checkbox"
          name="course"
          id="chemistry"
          value="chemistry"
          v-model="course"
        />
        <label for="chemistry">Chemistry</label>
        <input
          type="checkbox"
          name="course"
          id="physics"
          value="physics"
          v-model="course"
        />
        <label for="physics">Physics</label>
        <input
          type="checkbox"
          name="course"
          id="it"
          value="it"
          v-model="course"
        />
        <label for="it">IT</label>
      </div>
    </div>
    <div>
      <label for="">Rating</label>
      <RatingControl v-model="rating"></RatingControl>
    </div>
    <div>
      <button>Submit</button>
    </div>
  </form>
</template>

<script>
import RatingControl from "./RatingControl.vue";
export default {
  components: { RatingControl },
  data() {
    return {
      username: " ",
      description: "",
      gender: "",
      course: [],
      uservalidator: "",
      rating: null,
    };
  },
  methods: {
    submitForm() {
      console.log(this.username);
      console.log(this.description);
      console.log(this.gender);
      console.log(this.course);
      console.log(this.rating);
      this.username = "";
      this.description = "";
      this.gender = "";
      this.course = [];
      this.rating = null;
    },
    validateUser() {
      console.log(this.username);
      if (this.username.trim() === "") {
        this.uservalidator = "invalid";
      } else {
        this.uservalidator = "valid";
      }
    },
  },
};
</script>
<style>
.form-controls {
  display: flex;
  flex-direction: column;
  margin: 20px 0;
}
</style>
