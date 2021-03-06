import { createRouter, createWebHashHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const routes = [
	{
		path: "/login",
		name: "login",
		component: () => import("../views/account/LoginView.vue")
	},
	{
		path: "/register",
		name: "Register",
		component: () => import("../views/account/Register.vue")
	},
	{
		path: "/forget",
		name: "Forget",
		component: () => import("../views/account/Forget.vue")
	},
	{
		path: "/home",
		name: "home",
		component: HomeView
	},
	{
		path: "/about",
		name: "about",
		// route level code-splitting
		// this generates a separate chunk (about.[hash].js) for this route
		// which is lazy-loaded when the route is visited.
		component: () =>
			import(/* webpackChunkName: "about" */ "../views/AboutView.vue")
	}
];

const router = createRouter({
	history: createWebHashHistory(),
	routes
});

export default router;
