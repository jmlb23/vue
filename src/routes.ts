import {
  createRouter,
  createWebHistory,
  RouteRecordRaw,
} from "vue-router"

import SignUp from "./views/SignUp.vue";
import SignIn from "./views/SignIn.vue";
import Home from "./views/Home.vue";
import NotFound from "./views/NotFound.vue";
import Profile from "./views/Profile.vue";

const routes: RouteRecordRaw[] = [{
  path: "/",
  name: "Home",
  component: Home
}, {
  path: "/signup",
  name: "Sign Up",
  component: SignUp
}, {
  path: "/signin",
  name: "Sign In",
  component: SignIn
}, {
  path: "/profile/:id",
  component: Profile,
  props: (route) => ({ username: route.params.id }),
},
{
  path: "/profile/:id/favorites",
  component: Profile,
  props: (route) => ({ username: route.params.id }),
},
{
  path: "/:catchAll(.*)",
  name: "Not Found",
  component: NotFound,
}];

export const router = createRouter({ history: createWebHistory(), routes: routes });