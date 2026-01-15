<script setup lang="ts">
defineProps<{
  class?: string
}>()
</script>

<template>
  <svg :class="$props.class" viewBox="0 0 50 50" fill="none">
    <!-- Box body -->
    <rect x="8" y="22" width="34" height="24" rx="3" fill="#ec4899" />
    <rect x="10" y="24" width="30" height="20" rx="2" fill="#f472b6" />
    <!-- Lid -->
    <rect x="5" y="15" width="40" height="10" rx="2" fill="#ec4899" />
    <rect x="7" y="17" width="36" height="6" rx="1" fill="#f472b6" />
    <!-- Ribbon vertical -->
    <rect x="22" y="15" width="6" height="31" fill="#fbbf24" />
    <!-- Ribbon horizontal -->
    <rect x="5" y="18" width="40" height="4" fill="#fbbf24" />
    <!-- Bow -->
    <ellipse cx="18" cy="12" rx="6" ry="4" fill="#fbbf24" />
    <ellipse cx="32" cy="12" rx="6" ry="4" fill="#fbbf24" />
    <circle cx="25" cy="14" r="3" fill="#f59e0b" />
    <!-- Sparkles -->
    <circle cx="10" cy="10" r="1.5" fill="white" opacity="0.8" />
    <circle cx="40" cy="8" r="1" fill="white" opacity="0.8" />
    <circle cx="42" cy="30" r="1.5" fill="white" opacity="0.6" />
  </svg>
</template>
