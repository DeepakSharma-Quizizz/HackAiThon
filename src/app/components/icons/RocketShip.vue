<script setup lang="ts">
defineProps<{
  class?: string
}>()
</script>

<template>
  <svg :class="$props.class" viewBox="0 0 60 80" fill="none">
    <!-- Rocket body -->
    <ellipse cx="30" cy="50" rx="15" ry="25" fill="currentColor" opacity="0.4" />
    <ellipse cx="30" cy="45" rx="12" ry="20" fill="currentColor" opacity="0.6" />
    <!-- Rocket tip -->
    <path d="M30 10 L20 30 L40 30 Z" fill="currentColor" opacity="0.5" />
    <!-- Window -->
    <circle cx="30" cy="40" r="6" fill="white" opacity="0.8" />
    <circle cx="30" cy="40" r="4" fill="currentColor" opacity="0.3" />
    <!-- Fins -->
    <path d="M15 50 L10 70 L20 70 Z" fill="currentColor" opacity="0.4" />
    <path d="M45 50 L50 70 L40 70 Z" fill="currentColor" opacity="0.4" />
    <!-- Fire -->
    <path d="M20 70 Q25 75 30 70 Q35 75 40 70" fill="currentColor" opacity="0.3" />
  </svg>
</template>
