<script setup lang="ts">
import '@/assets/main.css'
import cardDetails from '@/data/pricingData.json'
import { ref } from 'vue'

const plan = ref('Trial')
const dataPlan = ref('0')

const choosingAplan = (index: number) => {
  plan.value = cardDetails[index].title
  if (cardDetails[index].id === 1) {
    dataPlan.value = cardDetails[index].plan.one
  } else if (cardDetails[index].id === 2) {
    dataPlan.value = '2500 MAUs'
  } else {
    dataPlan.value = cardDetails[index].plan.two
  }
}
</script>

<template>
  <div class="container">
    <div class="header">
      <p>Your current plan:</p>
      <h3>{{ plan }} • {{ dataPlan }}</h3>
    </div>
    <section class="pricing-body">
      <div class="title-body">
        <h1>Choose a plan</h1>
        <span>
          <label class="switch">
            <input type="checkbox" name="body-checkbox" id="body-inp" checked />
            <span class="slider round"></span>
          </label>
        </span>
      </div>
      <div class="card-container">
        <div class="card-body" v-bind:key="items.id" v-for="items in cardDetails">
          <h1 class="card-title">{{ items.title }}</h1>
          <h1 class="card-price">
            {{ (items.id == 2 ? items.price + '/month' : items.price) || items.description }}
          </h1>
          <select name="" id="topics" v-show="items.id == 2">
            <option value="2500 MAUs">2500 MAUs</option>
            <option value="1500 MAUs">2500 MAUs</option>
          </select>
          <span id="card-monthly" v-show="items.id == 2">Monthly active users</span>
          <ul>
            <li v-bind:key="it" v-for="it in items.plan">{{ it }}</li>
          </ul>
          <button class="btn" @click="choosingAplan(items.id - 1)">
            {{ items.id == 1 || items.id == 2 ? 'Choose Pan' : 'Contact Us' }}
          </button>
        </div>
      </div>
    </section>
  </div>
</template>
