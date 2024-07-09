<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>
<template>
  <header class="golden_nav_bar">
    <nav>
      <ul>
        <li><RouterLink to="/">Home</RouterLink></li>
        <li><RouterLink to="/about">About Golden Smile</RouterLink></li>
        <li><RouterLink to="/nursery">Our Nurser</RouterLink></li>
        <li><RouterLink to="/rooms">Our Rooms</RouterLink></li>
        <li><RouterLink to="/fees">Fees</RouterLink></li>
        <li><RouterLink to="/policies">Policies</RouterLink></li>
      </ul>
    </nav>
    <button class="golden_button" type="button">Contact Us</button>
  </header>
  <RouterView />
</template>
