<script setup lang="ts">
defineProps<{
  class?: string
}>()
</script>

<template>
  <svg :class="$props.class" viewBox="0 0 50 50" fill="none">
    <!-- Globe -->
    <circle cx="25" cy="25" r="18" fill="currentColor" opacity="0.3" />
    <circle cx="25" cy="25" r="16" fill="white" opacity="0.8" />
    <!-- Latitude lines -->
    <ellipse cx="25" cy="25" rx="16" ry="4" fill="none" stroke="currentColor" stroke-width="1" opacity="0.3" />
    <ellipse cx="25" cy="25" rx="16" ry="8" fill="none" stroke="currentColor" stroke-width="1" opacity="0.3" />
    <!-- Longitude lines -->
    <ellipse cx="25" cy="25" rx="4" ry="16" fill="none" stroke="currentColor" stroke-width="1" opacity="0.3" />
    <ellipse cx="25" cy="25" rx="8" ry="16" fill="none" stroke="currentColor" stroke-width="1" opacity="0.3" />
    <!-- Continents -->
    <path d="M15 20 Q18 18 20 20 Q22 22 20 24 Q18 26 15 24 Z" fill="currentColor" opacity="0.4" />
    <path d="M30 28 Q32 26 35 28 Q33 30 30 30 Z" fill="currentColor" opacity="0.4" />
  </svg>
</template>
