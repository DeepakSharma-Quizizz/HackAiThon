<script setup lang="ts">
defineProps<{
  class?: string
}>()
</script>

<template>
  <svg :class="$props.class" viewBox="0 0 50 50" fill="none">
    <!-- Book -->
    <rect x="12" y="10" width="26" height="32" rx="2" fill="currentColor" opacity="0.4" />
    <rect x="14" y="12" width="22" height="28" rx="1" fill="white" opacity="0.8" />
    <line x1="25" y1="12" x2="25" y2="40" stroke="currentColor" stroke-width="1" opacity="0.3" />
    <!-- Clock -->
    <circle cx="25" cy="24" r="8" fill="currentColor" opacity="0.3" />
    <circle cx="25" cy="24" r="6" fill="white" opacity="0.9" />
    <line x1="25" y1="24" x2="25" y2="20" stroke="currentColor" stroke-width="1.5" opacity="0.6" />
    <line x1="25" y1="24" x2="28" y2="24" stroke="currentColor" stroke-width="1" opacity="0.6" />
  </svg>
</template>
