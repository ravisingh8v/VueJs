<template>
  <li class="mt-3">
    <base-card pad="py-2 px-3">
      <a class="text-decoration-none text-info" :href="emailLink">{{
        email
      }}</a>
      <div class="mt-2">
        <p>{{ message }}</p>
      </div>
    </base-card>
  </li>
</template>
<script>
export default {
  props: ["email", "message"],

  computed: {
    emailLink() {
      return "mailto:" + this.email;
    },
  },
};
</script>
