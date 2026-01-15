<script setup lang="ts">
defineProps<{
  class?: string
}>()
</script>

<template>
  <svg :class="$props.class" viewBox="0 0 40 40" fill="none">
    <!-- Coin body -->
    <circle cx="20" cy="20" r="18" fill="#fbbf24" />
    <circle cx="20" cy="20" r="15" fill="#f59e0b" />
    <circle cx="20" cy="20" r="12" fill="#fbbf24" />
    <!-- Dollar sign -->
    <text x="20" y="26" text-anchor="middle" font-size="14" font-weight="bold" fill="#92400e">$</text>
    <!-- Shine effect -->
    <ellipse cx="14" cy="14" rx="4" ry="3" fill="white" opacity="0.4" />
  </svg>
</template>
