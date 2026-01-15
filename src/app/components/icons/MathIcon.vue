<script setup lang="ts">
defineProps<{
  class?: string
}>()
</script>

<template>
  <svg :class="$props.class" viewBox="0 0 50 50" fill="none">
    <!-- Calculator/Ruler shape -->
    <rect x="8" y="12" width="34" height="26" rx="2" fill="currentColor" opacity="0.4" />
    <rect x="10" y="14" width="30" height="22" rx="1" fill="white" opacity="0.8" />
    <!-- Math symbols -->
    <path d="M18 22 L22 22 M20 20 L20 24" stroke="currentColor" stroke-width="2" opacity="0.6" />
    <path d="M28 22 L32 26 M32 22 L28 26" stroke="currentColor" stroke-width="2" opacity="0.6" />
    <circle cx="38" cy="24" r="3" fill="currentColor" opacity="0.6" />
  </svg>
</template>
