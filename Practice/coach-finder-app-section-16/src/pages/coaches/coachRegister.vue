<template>
  <section>

    <section class="p-3 mx-auto w-75">
      <base-card pad="p-4">
      <h2>Register as a Coach Now!!</h2>
      <div class="mt-4">
        <coachForm @save-data="saveData"></coachForm>
      </div>
    </base-card>
  </section>
</section>
</template>
<script>
import coachForm from "./../../components/coaches/coachForm.vue";
export default {
  components: { coachForm },
  methods: {
    saveData(user) {
      this.$store.dispatch("coach/registerCoach", user);
      this.$router.replace("/coaches");
    },
  },
};
</script>
