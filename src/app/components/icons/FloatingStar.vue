<script setup lang="ts">
defineProps<{
  class?: string
}>()
</script>

<template>
  <svg :class="$props.class" viewBox="0 0 40 40" fill="none">
    <path
      d="M20 0L24.49 15.26L40 20L24.49 24.74L20 40L15.51 24.74L0 20L15.51 15.26L20 0Z"
      fill="currentColor"
      class="drop-shadow-sm"
    />
  </svg>
</template>
