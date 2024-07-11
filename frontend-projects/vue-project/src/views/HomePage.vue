<script lang="ts" setup>
import HomeContent from '@/components/HomeContent.vue'
import data from '@/data/cardData.json'
</script>

<template>
  <HomeContent
    :key="data[0].id"
    :home_title="data[0].home_title"
    :home_paragraph="data[0].home_paragraph"
  ></HomeContent>
</template>
