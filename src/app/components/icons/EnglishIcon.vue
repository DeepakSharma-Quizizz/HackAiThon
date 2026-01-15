<script setup lang="ts">
defineProps<{
  class?: string
}>()
</script>

<template>
  <svg :class="$props.class" viewBox="0 0 50 50" fill="none">
    <!-- Pencil/Pen -->
    <path d="M15 35 L20 30 L25 35 L30 30 L25 25 L20 30 Z" fill="currentColor" opacity="0.5" />
    <rect x="18" y="12" width="4" height="18" rx="1" fill="currentColor" opacity="0.6" />
    <!-- Paper -->
    <rect x="10" y="8" width="30" height="35" rx="1" fill="white" opacity="0.9" />
    <rect x="12" y="10" width="26" height="31" rx="0.5" fill="currentColor" opacity="0.1" />
    <!-- Lines -->
    <line x1="15" y1="15" x2="35" y2="15" stroke="currentColor" stroke-width="1.5" opacity="0.3" />
    <line x1="15" y1="20" x2="30" y2="20" stroke="currentColor" stroke-width="1.5" opacity="0.3" />
    <line x1="15" y1="25" x2="32" y2="25" stroke="currentColor" stroke-width="1.5" opacity="0.3" />
  </svg>
</template>
