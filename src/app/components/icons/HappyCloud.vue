<script setup lang="ts">
defineProps<{
  class?: string
}>()
</script>

<template>
  <svg :class="$props.class" viewBox="0 0 80 50" fill="none">
    <path
      d="M20 40C9 40 0 31 0 20C0 9 9 0 20 0C20 0 20 0 20 0C25 0 29 2 32 5C35 2 39 0 44 0C54 0 62 8 62 18C62 18 62 18 62 18C71 18 78 25 78 34C78 43 71 50 62 50H20Z"
      fill="currentColor"
      opacity="0.3"
    />
    <circle cx="25" cy="20" r="3" fill="currentColor" opacity="0.6" />
    <circle cx="35" cy="20" r="3" fill="currentColor" opacity="0.6" />
    <path
      d="M20 28 Q30 32 40 28"
      stroke="currentColor"
      stroke-width="2"
      fill="none"
      opacity="0.6"
    />
  </svg>
</template>
