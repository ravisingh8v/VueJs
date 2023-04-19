import { createRouter, createWebHistory } from "vue-router";
import usersList from "./../pages/users/usersList";
import assignment8 from "./../pages/assignment-8";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    // { path: "/", redirect: "assignment8" },
    { path: "/users", component: usersList },
    { path: "/assignment8", component: assignment8 },
  ],
});
export default router;
