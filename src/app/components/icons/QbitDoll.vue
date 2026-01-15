<script setup lang="ts">
defineProps<{
  class?: string
}>()
</script>

<template>
  <svg :class="$props.class" viewBox="0 0 100 140" fill="none">
    <!-- Spotlight effect background -->
    <ellipse cx="50" cy="130" rx="45" ry="8" fill="currentColor" opacity="0.1" />
    
    <!-- Pedestal -->
    <ellipse cx="50" cy="135" rx="40" ry="5" fill="currentColor" opacity="0.2" />
    <ellipse cx="50" cy="133" rx="35" ry="3" fill="currentColor" opacity="0.15" />
    
    <!-- Body - Shirt -->
    <rect x="30" y="60" width="40" height="35" rx="8" fill="#ffffff" />
    <!-- V-neck -->
    <path d="M40 60 L50 70 L60 60" stroke="#166534" stroke-width="2.5" fill="none" stroke-linecap="round" />
    <!-- Chest stripe -->
    <rect x="25" y="72" width="50" height="8" fill="#166534" />
    <!-- White circle on stripe -->
    <circle cx="50" cy="76" r="4" fill="#ffffff" />
    <circle cx="50" cy="76" r="3" fill="#166534" />
    <!-- Sleeve bands -->
    <rect x="28" y="68" width="4" height="12" rx="2" fill="#166534" />
    <rect x="68" y="68" width="4" height="12" rx="2" fill="#166534" />
    
    <!-- Arms -->
    <ellipse cx="20" cy="75" rx="6" ry="18" fill="#e5e7eb" />
    <ellipse cx="80" cy="75" rx="6" ry="18" fill="#e5e7eb" />
    
    <!-- Shorts -->
    <path d="M28 95 Q28 90 30 90 L70 90 Q72 90 72 95 L72 110 Q72 115 70 115 L30 115 Q28 115 28 110 Z" fill="#f5f5dc" />
    <!-- Green stripes on shorts -->
    <line x1="35" y1="90" x2="35" y2="115" stroke="#166534" stroke-width="2" />
    <line x1="40" y1="90" x2="40" y2="115" stroke="#166534" stroke-width="2" />
    <line x1="60" y1="90" x2="60" y2="115" stroke="#166534" stroke-width="2" />
    <line x1="65" y1="90" x2="65" y2="115" stroke="#166534" stroke-width="2" />
    <!-- Buttons on shorts -->
    <circle cx="68" cy="100" r="1" fill="#000000" />
    <circle cx="68" cy="105" r="1" fill="#000000" />
    
    <!-- Legs -->
    <ellipse cx="35" cy="120" rx="5" ry="12" fill="#e5e7eb" />
    <ellipse cx="65" cy="120" rx="5" ry="12" fill="#e5e7eb" />
    
    <!-- Shoes -->
    <ellipse cx="35" cy="130" rx="6" ry="4" fill="#dc2626" />
    <ellipse cx="65" cy="130" rx="6" ry="4" fill="#dc2626" />
    <ellipse cx="35" cy="131" rx="5" ry="2" fill="#ffffff" />
    <ellipse cx="65" cy="131" rx="5" ry="2" fill="#ffffff" />
    
    <!-- Head -->
    <circle cx="50" cy="35" r="25" fill="#f3f4f6" />
    
    <!-- Eyes -->
    <ellipse cx="45" cy="32" rx="3" ry="4" fill="#000000" />
    <ellipse cx="55" cy="32" rx="3" ry="4" fill="#000000" />
  </svg>
</template>
