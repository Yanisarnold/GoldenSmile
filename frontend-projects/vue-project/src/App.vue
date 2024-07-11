<script setup lang="ts">
import NavBar from '@/components/NavBarTemplate.vue'
import Footer from '@/components/FooterTemplate.vue'
import '@/assets/weather-app.css'
import { RouterView } from 'vue-router'
</script>
<template>
  <div class="golden_container">
    <NavBar></NavBar>
    <section class="grid_container">
      <div class="item1">
        <div><RouterView /></div>
        <div class="home_content_card">
          <span><h1>Content</h1></span>
          <span><h1>Content</h1></span>
        </div>
      </div>
      <div class="item3"><Footer></Footer></div>
    </section>
  </div>
</template>
