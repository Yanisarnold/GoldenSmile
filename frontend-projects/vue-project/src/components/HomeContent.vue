<script lang="ts" setup>
const home_data_props = defineProps({
  id: {
    type: Number
  },
  home_title: {
    type: String,
    require: true
  },
  home_paragraph: {
    type: String,
    require: true
  }
})
</script>
<template>
  <div class="home_container">
    <h1>{{ home_data_props.home_title }}</h1>
    <p>
      {{ home_data_props.home_paragraph }}
    </p>
  </div>
</template>
