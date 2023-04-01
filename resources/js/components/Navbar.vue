<template>
    <div>
        <!-- Responsive navbar design with tailwind css start-->
        <div
            class="bg-primary-color text-white py-3.5 px-6 shadow md:flex justify-between items-center"
        >
            <div class="flex justify-center item-center cursor-pointer">
                <h1
                    class="text-2xl text-secondary-color font-semi-bold text-center"
                >
                    Showcase
                </h1>
            </div>
            <div class="w-full max-w-xl relative flex">
                <span class="absolute left-4 top-3 text-lg text-gray-400">
                    <i class="fa-solid fa-magnifying-glass"></i>
                </span>
                <input
                    type="text"
                    name="search"
                    id="search"
                    class="w-full border border-primary border-r-0 pl-12 py-3 pr-3 rounded-l-md focus:outline-none"
                    placeholder="search"
                />
                <button
                    class="bg-secondary-color border border-primary text-white px-8 rounded-r-md hover:bg-transparent hover:text-primary transition"
                >
                    Search
                </button>
            </div>

            <span
                @click="MenuOpen()"
                class="absolute md:hidden right-6 top-1.5 coursor-pointer text-4xl"
            >
                <i class="fas fa-bars"></i>
            </span>

            <ul
                class="md:flex md:flex-row md:items-start md:px-0 px-10 md:pb-0 pb-10 md:static absolute md:import md:w-auto w-full top-14 duration-700 ease-in"
                :class="[open ? 'left-0' : 'left-[100%]']"
            >
                <li class="md:mx-4 md:my-0 my-6">
                    <router-link
                        class="text-white hover:text-secondary-color mx-3 text-lg font-normal px-2"
                        v-for="item of navlist"
                        :key="item"
                        :to="item.path"
                        >{{ item.name }}
                    </router-link>
                </li>
                <router-link to="/account">
                    <Button @click="profilePage">Login / Registration</Button>
                </router-link>
            </ul>
        </div>
        <!-- Responsive navbar design with tailwind css end-->

        <!-- <nav class="flex items-center justify-between flex-wrap bg-gray-500 p-6">
            <div class="flex items-center flex-shrink-0 text-white mr-6">
                <span class="font-semibold text-xl tracking-tight">Your Logo</span>
            </div>
            <div class="block lg:hidden">
                <button class="flex items-center px-3 py-2 border rounded text-white border-teal-400 hover:text-white hover:border-white">
                <svg class="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
                </button>
            </div>
            <div class="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
                <div class="text-sm lg:flex-grow">
                    <router-link class="hover:bg-gray-300 py-4 px-8  text-black hover:text-white mx-3 text-lg  font-normal tracking-wider" v-for="item of navlist" :key="item" :to=item.path>{{item.name }}
                    </router-link>
                </div>
                <div class="lg:w-1/4 mx-4">
                <input class="border border-gray-400 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-teal-500" type="text" placeholder="Search">
                </div>
            </div>
        </nav> -->

    </div>
</template>

<script setup>
import Button from "./Button.vue";

import { ref } from "vue";

let open = ref(false);

function MenuOpen() {
    open.value = !open.value;
}

const navlist = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Showcase", path: "/showcase" },
    { name: "categories", path: "/categories" },
];


</script>
