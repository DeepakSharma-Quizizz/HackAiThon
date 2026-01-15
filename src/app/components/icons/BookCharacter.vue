<script setup lang="ts">
defineProps<{
  class?: string
}>()
</script>

<template>
  <svg :class="$props.class" viewBox="0 0 70 80" fill="none">
    <!-- Book body -->
    <rect x="15" y="20" width="40" height="50" rx="4" fill="currentColor" opacity="0.3" />
    <rect x="18" y="25" width="34" height="40" rx="2" fill="white" opacity="0.8" />
    <!-- Book pages -->
    <line x1="35" y1="25" x2="35" y2="65" stroke="currentColor" stroke-width="1" opacity="0.2" />
    <!-- Face -->
    <circle cx="28" cy="40" r="3" fill="currentColor" opacity="0.6" />
    <circle cx="42" cy="40" r="3" fill="currentColor" opacity="0.6" />
    <path
      d="M25 50 Q35 55 45 50"
      stroke="currentColor"
      stroke-width="2"
      fill="none"
      opacity="0.6"
    />
  </svg>
</template>
