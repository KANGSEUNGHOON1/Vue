import { createRouter, createWebHistory } from "vue-router";
import Home from "@/views/Home.vue";
import About from "@/views/About.vue";
import reservation from "@/views/reservation.vue";

const routes = [
  { path: "/", component: Home },
  { path: "/about", component: About },
  { path: "/reservation", component: reservation },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});
export default router;
