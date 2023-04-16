<template>
  <header>
    <nav class="d-flex justify-content-between align-items-center bg-dark p-3">
      <h1>
        <router-link to="/" class="fs-2 text-decoration-none text-warning"
          >Find a Coach</router-link
        >
      </h1>
      <ul class="d-flex list-unstyled p-0 m-0">
        <li class="mx-2">
          <base-button mode="btn-secondary" link to="/coaches"
            >Coach List</base-button
          >
        </li>
        <li class="mx-2">
          <base-button mode="btn-secondary" link to="/requests"
            >Request</base-button
          >
        </li>
      </ul>
    </nav>
  </header>
</template>
<style >
.active {
  background-color: #0d6efd;
  border: inherit;
}
header{
  position: sticky;
  top: 0;
  z-index: 1000;
}
</style>
