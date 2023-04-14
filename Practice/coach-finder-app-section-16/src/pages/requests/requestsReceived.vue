<template>
  <base-dialog
    :show="!!error"
    title="An Error occurred!!!"
    @close="handleError"
  >
    <p>{{ error }}</p></base-dialog
  >
  <section class="mx-auto my-3 w-75">
    <base-card pad="p-3">
      <h1 class="mx-auto">Request Received</h1>
      <base-spinner v-if="isLoading"></base-spinner>
      <!-- requests -->
      <ul class="my-2 mx-auto list-unstyled w-50" v-else-if="hasRequest">
        <requestReceived
          v-for="req in requests"
          :key="req.id"
          :email="req.userEmail"
          :message="req.userMessage"
        ></requestReceived>
      </ul>
      <h4 class="mx-auto mt-4" v-else>You Don't Received any Request Yet!!!</h4>
    </base-card>
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
    requests() {
      return this.$store.getters["req/requestsCoach"];
    },
    hasRequest() {
      return !this.isLoading && this.$store.getters["req/hasRequest"];
    },
  },
  methods: {
    async loadRequests() {
      this.isLoading = true;
      try {
        await this.$store.dispatch("req/fetchRequest");
      } catch (error) {
        this.error = error.message;
      }
      this.isLoading = false;
    },
    handleError() {
      this.error = null;
    },
  },
  created() {
    this.loadRequests();
  },
};
</script>
<style></style>
