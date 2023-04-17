<template>
  <section>
    <!-- dialog box to handle errors of http requests  -->
    <base-dialog
      :show="!!error"
      title="An Error occurred!!!"
      @close="handleError"
    >
      <p>{{ error }}</p></base-dialog
    >
    <!-- requests lists wrapper -->
    <section class="mx-auto my-3 w-75">
      <base-card pad="p-3">
        <!-- heading  -->
        <h1 class="mx-auto">Request Received</h1>
        <base-spinner v-if="isLoading"></base-spinner>
        <!-- requests list-->
        <ul class="my-2 mx-auto list-unstyled w-50" v-else-if="hasRequest">
          <requestReceived
            v-for="req in requests"
            :key="req.id"
            :email="req.userEmail"
            :message="req.userMessage"
          ></requestReceived>
        </ul>
        <!-- no data found  message  -->
        <h4 class="mx-auto mt-4" v-else>
          You Don't Received any Request Yet!!!
        </h4>
      </base-card>
    </section>
  </section>
</template>
<script>
import requestReceived from "@/components/requests/requestItem.vue";
export default {
  data() {
    return {
      isLoading: false,
      error: null,
    };
  },
  components: { requestReceived },
  // data() {},
  computed: {
    // getting all requests data
    requests() {
      return this.$store.getters["req/requestsCoach"];
    },
    // if requests data found
    hasRequest() {
      return !this.isLoading && this.$store.getters["req/hasRequest"];
    },
  },
  methods: {
    // when this component created we calling this function to send get request to get all request in store
    async loadRequests() {
      this.isLoading = true;
      try {
        await this.$store.dispatch("req/fetchRequest");
      } catch (error) {
        this.error = error.message;
      }
      this.isLoading = false;
    },
    // to close the error dialog box
    handleError() {
      this.error = null;
    },
  },
  // calling http request get method when component is created
  created() {
    this.loadRequests();
  },
};
</script>
<style></style>
