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
    <div class="gs-content" style="padding: 30px">
      <h1 style="width: 500px; font-size: 3rem; line-height: 1.3">
        {{ home_data_props.home_title }}
      </h1>
      <p style="width: 450px">
        {{ home_data_props.home_paragraph }}
      </p>
    </div>
  </div>
</template>
