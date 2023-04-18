import { createRouter, createWebHistory } from "vue-router";
/*
// route components
*/
import coachList from "./../pages/coaches/coachList";
// import coachDetails from "./../pages/coaches/coachDetails";
// import contactCoach from "./../pages/requests/contactCoach";
// import coachRegister from "./../pages/coaches/coachRegister";
// import requestsReceived from "./../pages/requests/requestsReceived";
import pageNotFound from "./../pages/pageNotFound";
// import userAuth from "./../pages/auth/userAuth";
import store from "@/store";

/*
// async component or lazy loaded component
*/
const coachDetails = () => import("./../pages/coaches/coachDetails");

const contactCoach = () => import("./../pages/requests/contactCoach");

const coachRegister = () => import("./../pages/coaches/coachRegister");

const requestsReceived = () => import("./../pages/requests/requestsReceived");

const userAuth = () => import("./../pages/auth/userAuth");

// creating Router
const router = createRouter({
  history: createWebHistory(),
  // paths
  routes: [
    { path: "/", redirect: "/coaches" },
    { path: "/coaches", component: coachList },
    {
      path: "/coaches/:id",
      component: coachDetails,
      props: true,
      children: [{ path: "contact", component: contactCoach }],
    },
    {
      path: "/register",
      component: coachRegister,
      meta: { requiresAuth: true },
    },
    {
      path: "/requests",
      component: requestsReceived,
      meta: { requiresAuth: true },
    },
    { path: "/auth", component: userAuth, meta: { requiresUnAuth: true } },
    { path: "/:notFound(.*)", component: pageNotFound },
  ],

  linkActiveClass: "active",
});
router.beforeEach(function (to, _, next) {
  if (to.meta.requiresAuth && !store.getters.isLoggedIn) {
    next("/auth");
  } else if (to.meta.requiresUnAuth && store.getters.isLoggedIn) {
    next("/coaches");
  } else {
    next(true);
  }
});

export default router;
