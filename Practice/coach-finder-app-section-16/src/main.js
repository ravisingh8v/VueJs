import { createApp, defineAsyncComponent } from "vue";
import App from "./App.vue";
// files
import router from "./router";
import store from "./store";

// component
import baseCard from "./components/ui/baseCard";
import baseButton from "./components/ui/baseButton";
import baseBadge from "./components/ui/baseBadge";
import baseSpinner from "./components/ui/baseSpinner";
// import baseDialog from "./components/ui/baseDialog";

// async or lazy loaded component
const baseDialog = defineAsyncComponent(() =>
  import("./components/ui/baseDialog")
);

// created App here
const app = createApp(App);

app.component("base-card", baseCard);
app.component("base-button", baseButton);
app.component("base-badge", baseBadge);
app.component("base-spinner", baseSpinner);
app.component("base-dialog", baseDialog);
app.use(router);
app.use(store);
app.mount("#app");
