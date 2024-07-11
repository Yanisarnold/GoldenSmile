<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'

const printConsole = () => {
  console.log('hello')
}
</script>
<template>
  <header class="golden_nav_bar">
    <div class="logo_container">
      <img src="" alt="logo_container" />
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
        <button class="golden_button" @click="printConsole" type="button">Contact Us</button>
      </div>
    </nav>
  </header>
</template>
