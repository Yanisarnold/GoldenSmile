<script setup>
defineProps({
  id: number,
  title: string,
  color_primary: string,
  height: number
})
</script>

<template>
  <button style="" class="golden_btn" @click="$emit(increasedBy1, 1)">{{ title }}</button>
</template>
