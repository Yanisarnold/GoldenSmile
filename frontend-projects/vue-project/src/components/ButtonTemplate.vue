<script setup>
defineProps({
  id: Number,
  title: String,
  color_primary: String,
  height: Number,
  className: {
    required: false,
    type: String,
    default: ''
  },
  action: String
})
</script>

<template>
  <button :class="className" @click="action">{{ title }}</button>
</template>
