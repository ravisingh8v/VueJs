<template>
  <base-card pad="p-4 ">
    <h3>Filter</h3>
    <div>
      <span class="me-3">
        <input
          type="checkbox"
          class="me-1"
          id="frontend"
          checked
          @change="setFilter"
        />
        <label for="frontend">FrontEnd</label>
      </span>
      <span class="me-3">
        <input
          type="checkbox"
          class="me-1"
          id="backend"
          checked
          @change="setFilter"
        />
        <label for="backend">BackEnd</label>
      </span>
      <span class="me-3">
        <input
          type="checkbox"
          class="me-1"
          id="career"
          checked
          @change="setFilter"
        />
        <label for="career">Career</label>
      </span>
    </div>
  </base-card>
</template>
<script>
export default {
  emits: ["change-filter"],
  data() {
    return {
      filters: { frontend: true, backend: true, career: true },
    };
  },
  methods: {
    setFilter(event) {
      const inputId = event.target.id;
      const isActive = event.target.checked;
      const updatedFilter = {
        ...this.filters,
        [inputId]: isActive,
      };
      this.filters = updatedFilter;
      this.$emit("change-filter", updatedFilter);
    },
  },
};
</script>
