<template>
  <div>
    <header v-if="$slots.header">
      <slot name="header"></slot>
    </header>
    <slot></slot>
  </div>
</template>
<style scoped>
div {
  margin: 1rem auto;
  border: 2px solid green;
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: 30%;
  /* color: red; */
  border-radius: 10px;
  padding: 10px;
  box-shadow: 2px 0px 4px 2px grey;
}
header {
  background-color: green;
}
h3 {
  color: red;
}
</style>
