<script setup lang="ts">
defineProps<{
  class?: string
}>()
</script>

<template>
  <svg :class="$props.class" viewBox="0 0 50 60" fill="none">
    <!-- Trophy base -->
    <rect x="15" y="50" width="20" height="8" rx="2" fill="currentColor" opacity="0.4" />
    <rect x="18" y="45" width="14" height="6" rx="2" fill="currentColor" opacity="0.5" />
    <!-- Trophy cup -->
    <path
      d="M10 20 L10 40 C10 45 15 48 20 48 C25 48 30 45 30 40 L30 20 L25 15 L20 15 Z"
      fill="currentColor"
      opacity="0.6"
    />
    <!-- Trophy handles -->
    <path
      d="M10 25 Q5 25 5 30 Q5 35 10 35"
      stroke="currentColor"
      stroke-width="3"
      fill="none"
      opacity="0.5"
    />
    <path
      d="M30 25 Q35 25 35 30 Q35 35 30 35"
      stroke="currentColor"
      stroke-width="3"
      fill="none"
      opacity="0.5"
    />
    <!-- Star on trophy -->
    <path
      d="M20 10 L21 15 L26 15 L22 18 L23 23 L20 20 L17 23 L18 18 L14 15 L19 15 Z"
      fill="currentColor"
      opacity="0.8"
    />
  </svg>
</template>
