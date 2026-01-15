<script setup lang="ts">
defineProps<{
  class?: string
}>()
</script>

<template>
  <svg :class="$props.class" viewBox="0 0 50 60" fill="none">
    <!-- Flask -->
    <path d="M20 5 L15 45 L35 45 L30 5 Z" fill="currentColor" opacity="0.4" />
    <path d="M22 8 L18 42 L32 42 L28 8 Z" fill="currentColor" opacity="0.6" />
    <!-- Liquid -->
    <ellipse cx="25" cy="35" rx="6" ry="3" fill="currentColor" opacity="0.8" />
    <!-- Bubbles -->
    <circle cx="23" cy="25" r="2" fill="white" opacity="0.6" />
    <circle cx="27" cy="28" r="1.5" fill="white" opacity="0.6" />
  </svg>
</template>
