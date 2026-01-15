<script setup lang="ts">
defineProps<{
  class?: string
}>()
</script>

<template>
  <svg :class="$props.class" viewBox="0 0 60 50" fill="none">
    <!-- Controller body -->
    <rect x="10" y="15" width="40" height="25" rx="5" fill="currentColor" opacity="0.6" />
    <rect x="12" y="17" width="36" height="21" rx="3" fill="currentColor" opacity="0.8" />
    <!-- Buttons -->
    <circle cx="22" cy="27" r="4" fill="white" opacity="0.9" />
    <circle cx="38" cy="27" r="4" fill="white" opacity="0.9" />
    <!-- D-pad -->
    <rect x="15" y="20" width="6" height="2" rx="1" fill="white" opacity="0.9" />
    <rect x="17" y="18" width="2" height="6" rx="1" fill="white" opacity="0.9" />
    <!-- Handles -->
    <ellipse cx="5" cy="25" rx="4" ry="8" fill="currentColor" opacity="0.5" />
    <ellipse cx="55" cy="25" rx="4" ry="8" fill="currentColor" opacity="0.5" />
  </svg>
</template>
