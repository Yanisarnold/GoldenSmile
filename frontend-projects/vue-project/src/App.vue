<script setup lang="ts">
// import NavBar from '@/components/NavBarTemplate.vue'
import Footer from '@/components/FooterTemplate.vue'
import '@/assets/main.css'
import { RouterView, RouterLink } from 'vue-router'
import Button_component from '@/components/ButtonTemplate.vue'
import CardTemplate from './components/CardTemplate.vue'

// button action example
const printConsole = () => {
  console.log('hello')
}
</script>
<template>
  <div class="golden_container">
    <header class="golden_nav_bar">
      <div class="logo_container">
        <RouterLink to="/">
          <img src="./icons//Ziara.png" alt="logo_container" class="golden_logo" />
        </RouterLink>
      </div>
      <nav>
        <ul>
          <li><RouterLink to="/">Home</RouterLink></li>
          <li><RouterLink to="/about">About Golden Smile</RouterLink></li>
          <li><RouterLink to="/nursery">Our Nursery</RouterLink></li>
          <li><RouterLink to="/rooms">Our Rooms</RouterLink></li>
          <li><RouterLink to="/fees">Fees</RouterLink></li>
          <li><RouterLink to="/policies">Policies</RouterLink></li>
        </ul>
        <div>
          <RouterLink to="/contact">
            <Button_component title="contact Us" class="golden_button" />
          </RouterLink>
        </div>
      </nav>
    </header>
    <section class="grid_container">
      <div class="item1">
        <div><RouterView /></div>
      </div>
      <Footer></Footer>
    </section>
  </div>
</template>
