import Home from "../pages/Home.vue";
import AboutPage from "../pages/AboutPage.vue";
import Showcase from "../pages/Showcase.vue";
import SingleBook from "../components/SingleBook.vue";
import NotFound from "../pages/NotFound.vue";
import Categories from "../pages/Categories.vue";
import LoginPage from "../pages/LoginPage.vue";
import AccoutPage from "../pages/AccountPage.vue";
import RegistrationPage from "../pages/RegistrationPage.vue";
import EhomePage from "../pages/EhomePage.vue";

import ProductPage from "../pages/ProductPage.vue";

const routes = [
    {
        path: "/",
        name: "home",
        component: Home,
    },
    {
        path: "/about",
        name: "about",
        component: AboutPage,
    },
    {
        path: "/:pathMatch(.*)*",
        name: "not-found",
        component: NotFound,
    },
    {
        path: "/showcase",
        name: "showcase",
        component: Showcase,
    },
    {
        path: "/categories",
        name: "categories",
        component: Categories,
    },
    {
        path: "/book/:id",
        name: "singlebook",
        component: SingleBook,
    },
    {
        path: "/login",
        name: "login",
        component: LoginPage,
    },
    {
        path: "/account",
        name: "account",
        component: AccoutPage,
    },
    {
        path: "/registration",
        name: "registration",
        component: RegistrationPage,
    },
    {
        path: "/products",
        name: "products",
        component: ProductPage,
    },
    {
        path: "/ehome",
        name: "ehome", 
        component: EhomePage,
    },

];

export default routes;
