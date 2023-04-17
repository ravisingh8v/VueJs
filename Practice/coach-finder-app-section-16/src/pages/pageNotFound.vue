<template>
  <section class="container">
    <base-card pad="p-4">
      <h1>Page Not Found</h1>
      <p>
        this page could not be found - may checkout our all page
        <router-link to="/coaches" class="text-primary text-decoration-none"
          >Coaches</router-link
        >
      </p>
    </base-card>
  </section>
</template>
<script>
export default {
  name: "pageNotFound",
};
</script>
