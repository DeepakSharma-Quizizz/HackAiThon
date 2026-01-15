<script setup lang="ts">
defineProps<{
  class?: string
}>()
</script>

<template>
  <svg :class="$props.class" viewBox="0 0 60 50" fill="none">
    <!-- Chart bars -->
    <rect x="8" y="30" width="8" height="15" rx="2" fill="currentColor" opacity="0.6" />
    <rect x="20" y="20" width="8" height="25" rx="2" fill="currentColor" opacity="0.7" />
    <rect x="32" y="15" width="8" height="30" rx="2" fill="currentColor" opacity="0.8" />
    <rect x="44" y="25" width="8" height="20" rx="2" fill="currentColor" opacity="0.6" />
    <!-- Base line -->
    <line x1="5" y1="45" x2="55" y2="45" stroke="currentColor" stroke-width="2" opacity="0.3" />
  </svg>
</template>
