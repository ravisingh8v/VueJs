import { createApp } from "vue";
import App from "./App.vue";
import { createRouter } from "vue-router";
import { createWebHistory } from "vue-router";

// importing component
import TheRouter from "./components/router-practice/TheRouter.vue";
import TeamsList from "./components/router-practice/teams/TeamsList.vue";
import UsersList from "./components/router-practice/users/UsersList.vue";
import BaseList from "./components/router-practice/UI/BaseList.vue";
const app = createApp(App);

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "", redirect: "/the-router" },
    {
      path: "/the-router",
      component: TheRouter,
      children: [
        { path: "", redirect: "the-router/teams-list" },
        { path: "teams-list", component: TeamsList },
        { path: "users-list", component: UsersList },
      ],
    },
  ],
});

app.component("BaseList", BaseList);
app.use(router);
app.mount("#app");
