import Vue from "vue";
import VueRouter from "vue-router";
import NotesApp from "../views/NotesApp.vue";
import App from "../views/App.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    redirect: "/home",
  },
  {
    path: "/home",
    name: "home",
    component: NotesApp,
  },
  {
    path: "/app",
    name: "app",
    component: App,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
