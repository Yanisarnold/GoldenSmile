<script setup lang="ts">
import CardTemplate from '@/components/CardTemplate.vue'
import cardData from './data/cardData.json'
</script>

<template>
  <CardTemplate
    v-for="data in cardData"
    :key="data.id"
    :id="data.id"
    v-bind:img="data.profile"
    :name="data.name"
    :job-title="data['job-title']"
    :website="data.website"
    :about="data.About"
    :interest="data.Interests"
  />
</template>
