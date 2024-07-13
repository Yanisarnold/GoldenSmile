<script lang="ts" setup>
import HomeContent from '@/components/HomeContent.vue'
import data from '@/data/cardData.json'
</script>

<template>
  <HomeContent
    v-for="item in data"
    :key="item.id"
    :home_title="item.home_title"
    :home_paragraph="item.home_paragraph"
  ></HomeContent>
</template>
