<script setup lang="ts">
defineProps<{
  class?: string
}>()
</script>

<template>
  <svg :class="$props.class" viewBox="0 0 50 60" fill="none">
    <!-- Head -->
    <circle cx="25" cy="15" r="10" fill="currentColor" opacity="0.6" />
    <circle cx="25" cy="15" r="8" fill="currentColor" opacity="0.8" />
    <!-- Eyes -->
    <circle cx="22" cy="13" r="1.5" fill="white" />
    <circle cx="28" cy="13" r="1.5" fill="white" />
    <!-- Smile -->
    <path d="M20 18 Q25 21 30 18" stroke="white" stroke-width="1.5" fill="none" />
    <!-- Body -->
    <path d="M25 25 L20 45 L25 50 L30 45 Z" fill="currentColor" opacity="0.6" />
    <!-- Cape -->
    <path d="M20 30 Q15 35 12 40 Q10 45 15 50 Q20 48 25 50" fill="currentColor" opacity="0.4" />
    <path d="M30 30 Q35 35 38 40 Q40 45 35 50 Q30 48 25 50" fill="currentColor" opacity="0.4" />
    <!-- Star on chest -->
    <path d="M25 32 L26 36 L30 36 L27 38 L28 42 L25 40 L22 42 L23 38 L20 36 L24 36 Z" fill="white" opacity="0.8" />
  </svg>
</template>
