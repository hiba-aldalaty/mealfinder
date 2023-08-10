import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import HomePage from "./pages/HomePage.vue";
import MealsByLetter from "./pages/MealsByLetter.vue";
import MealsByIngredient from "./pages/MealsByIngredient.vue";
import MealsByName from "./pages/MealsByName.vue";
import Base from "./wrappers/base.vue";
import Meal from "./pages/Meal.vue";
import { createRouter, createWebHistory } from "vue-router";
import store from "./store";

const routes = [
  {
    path: "/",
    component: Base,
    children: [
      {
        path: "/",
        name: "Home",
        component: HomePage,
      },
      {
        path: "/alphabet/:letter?",
        name: "searchByLetter",
        component: MealsByLetter,
      },
      {
        path: "/name/:name?",
        name: "searchByName",
        component: MealsByName,
      },
      {
        path: "/ingredient/:ingredient?",
        name: "searchByIngredient",
        component: MealsByIngredient,
      },
      {
        path: "/meal/:id",
        name: "meal",
        component: Meal,
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes: routes,
});
const app = createApp(App);
app.use(router);
app.use(store);
app.mount("#app");
