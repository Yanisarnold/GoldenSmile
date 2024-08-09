<script setup lang="ts">
// import NavBar from '@/components/NavBarTemplate.vue'
import Footer from '@/components/FooterTemplate.vue'
import '@/assets/main.css'
import { RouterView, RouterLink } from 'vue-router'
import Button_component from '@/components/ButtonTemplate.vue'

// button action example
const printConsole = () => {
  console.log('hello')
}
</script>
<template>
  <div class="golden_container">
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
          <Button_component title="contact Us" class="golden_button" />
        </div>
      </nav>
    </header>
    <section class="grid_container">
      <div class="item1">
        <div><RouterView /></div>
        <div class="home_content_card">
          <span
            ><h1>Welcome to Golden Smile</h1>
            <div class="img_card_container">
              <div>
                <img src="" alt="banner " />
                <h1>Our Nursery</h1>
                <p>
                  “Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor
                  incididunt ut labore et dolore magna aliqua. ”
                </p>
                <Button_component title="Learn More" class="golden_button" />
              </div>
            </div>
          </span>
        </div>
      </div>
      <Footer></Footer>
    </section>
  </div>
</template>
