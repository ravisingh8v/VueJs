import { createApp } from "vue";
import App from "./App.vue";
// files
import router from "./router";
import store from "./store";

// component
import baseCard from "./components/ui/baseCard";
import baseButton from "./components/ui/baseButton";
import baseBadge from "./components/ui/baseBadge";

// created App here
const app = createApp(App);

app.component("base-card", baseCard);
app.component("base-button", baseButton);
app.component("base-badge", baseBadge);
app.use(router);
app.use(store);
app.mount("#app");
