<script setup>
defineProps({
  id: Number,
  title: String,
  color_primary: String,
  height: Number
})
// @click="$emit(increasedBy1, 1)"
</script>

<template>
  <button class="golden_btn">{{ title }}</button>
</template>
