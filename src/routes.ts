import {
  createRouter,
  createWebHistory,
  RouteLocation,
  Router
} from "vue-router"


const routes = [{
  path: "/example",
  name: "name",
  component: {}
},];

export const router = createRouter({ history: createWebHistory(), routes: routes });