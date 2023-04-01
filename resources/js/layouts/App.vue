<script setup>
import Footer from "../components/Footer.vue"
import Navbar from '../components/Navbar.vue';
</script>

<template>
  <div>
    <div>
      <Navbar />
      <div>
        <router-view v-slot="{ Component, route }">
          <div :key="route.path">
            <Component :is="Component"/>
          </div>
        </router-view>
      </div>
      <Footer/>
    </div>
  </div>
</template>