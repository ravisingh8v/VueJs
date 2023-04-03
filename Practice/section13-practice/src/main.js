// Importing External Files
import { createApp } from "vue";
import router from "./router";
// component import
import App from "./App.vue";

// Creating App
const app = createApp(App);

app.use(router);
app.mount("#app");

// without storing in variable
// createApp(App).use(router).mount('#app')
