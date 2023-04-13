import { createRouter, createWebHistory } from "vue-router";

import coachList from "./../pages/coaches/coachList";
import coachDetails from "./../pages/coaches/coachDetails";
import contactCoach from "./../pages/requests/contactCoach";
import coachRegister from "./../pages/coaches/coachRegister";
import requestsReceived from "./../pages/requests/requestsReceived";
import pageNotFound from "./../pages/pageNotFound";
const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", redirect: "/coaches" },
    { path: "/coaches", component: coachList },
    {
      path: "/coaches/:id",
      component: coachDetails,
      props: true,
      children: [{ path: "contact", component: contactCoach }],
    },
    { path: "/register", component: coachRegister },
    { path: "/requests", component: requestsReceived },
    { path: "/:notFound(.*)", component: pageNotFound },
  ],
  linkActiveClass: "active",
});

export default router;
