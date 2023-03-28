<template>
  <section class="d-flex justify-content-center">
    <div class="w-50">
      <div>
        <TheForm :editUserData="editUserData"></TheForm>
      </div>
      <div class="my-4">
        <div class="card p-3" v-if="feedbacks.length">
          <h3>Ratings</h3>
          <ul class="list-unstyled p-0 m-0">
            <HttpList
              v-for="feedback in feedbacks"
              :key="feedback.id"
              :id="feedback.id"
              :username="feedback.username"
              :message="feedback.message"
              :rating="feedback.rating"
              @deleteUser="deleteUser"
              @editUser="editUser"
            ></HttpList>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
import TheForm from "./HttpForm.vue";
import HttpList from "./HttpList.vue";
export default {
  components: { TheForm, HttpList },
  provide() {
    return { getListData: this.getData };
  },
  data() {
    return {
      feedbacks: [],
      editUserData: null,
      error: null,
    };
  },
  methods: {
    getData() {
      fetch(
        "https://vue-practice-2b7ca-default-rtdb.firebaseio.com/ratings.json"
      )
        .then((res) => {
          return res.json();
        })
        .then((res) => {
          const result = [];
          for (const id in res) {
            result.push({
              id: id,
              username: res[id].username,
              message: res[id].message,
              rating: res[id].rating,
            });
          }
          this.feedbacks = result;
        })
        .catch((error) => {
          console.log(error);
          this.error = "No Data Found";
        });
    },
    // Delete User From Database
    deleteUser(id) {
      console.log(id);
      fetch(
        `https://vue-practice-2b7ca-default-rtdb.firebaseio.com/ratings/` +
          id +
          ".json",
        { method: "delete" }
      )
        .then((res) => {
          console.log(res);
          this.getData();
          //   const index = this.feedbacks.findIndex((res) => {
          //     res.id === id;
          //   });
          //   this.feedbacks.splice(index, 1);
          return res.json();
        })
        .catch((error) => {
          console.log(error);
        });
    },
    editUser(id) {
      fetch(
        `https://vue-practice-2b7ca-default-rtdb.firebaseio.com/ratings/` +
          id +
          ".json",
        { method: "get" }
      )
        .then((res) => {
          console.log(res);
          return res.json();
        })
        .then((res) => {
          console.log(res);
          this.editUserData = res;
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
  mounted() {
    this.getData();
  },
};
</script>
