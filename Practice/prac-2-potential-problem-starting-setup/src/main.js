import { createApp } from "vue";
import App from "./App.vue";
import ActiveElement from "./components/ActiveElement";
import KnowledgeBase from "./components/KnowledgeBase";
import KnowledgeElement from "./components/KnowledgeElement";
import KnowledgeGrid from "./components/KnowledgeGrid";

const app = createApp(App);
app.component("active-element", ActiveElement);
app.component("knowledge-base", KnowledgeBase);
app.component("knowledge-element", KnowledgeElement);
app.component("knowledge-grid", KnowledgeGrid);

app.mount("#app");
