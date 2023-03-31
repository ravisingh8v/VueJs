<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container-fluid">
      <a class="navbar-brand">Navbar</a>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <a
              href="javascript:void(0)"
              :class="{ active: active === 'the-form' }"
              class="nav-link"
              aria-current="page"
              @click="activeLink('the-form')"
              >FORM</a
            >
          </li>
          <li class="nav-item">
            <a
              href="javascript:void(0)"
              :class="{ active: active === 'http-base' }"
              class="nav-link"
              aria-current="page"
              @click="activeLink('http-base')"
              >HTTP</a
            >
          </li>
          <li class="nav-item">
            <a
              href="javascript:void(0)"
              :class="{ active: active === 'the-router' }"
              class="nav-link"
              aria-current="page"
              @click="activeLink('the-router')"
              >Router</a
            >
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>
<script>
export default {
  props: ["active"],
  data() {
    return {};
  },
  methods: {
    activeLink(active) {
      this.$emit("activeLink", active);
    },
  },
};
</script>
