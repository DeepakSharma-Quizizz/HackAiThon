<script setup lang="ts">
import FloatingStar from './icons/FloatingStar.vue'
import HappyCloud from './icons/HappyCloud.vue'
import RocketShip from './icons/RocketShip.vue'
</script>

<template>
  <div class="fixed inset-0 pointer-events-none overflow-hidden z-0">
    <!-- Floating stars -->
    <FloatingStar class="absolute top-20 left-10 w-8 h-8 text-yellow-300 opacity-25 animate-float" />
    <FloatingStar class="absolute top-40 right-20 w-6 h-6 text-purple-300 opacity-20 animate-float-reverse" style="animation-delay: 1s" />
    <FloatingStar class="absolute bottom-40 left-20 w-7 h-7 text-pink-300 opacity-22 animate-gentle-bounce" style="animation-delay: 2s" />
    
    <!-- Happy clouds -->
    <HappyCloud class="absolute top-10 right-10 w-24 h-16 text-blue-200 opacity-18 animate-float" style="animation-delay: 0.5s" />
    <HappyCloud class="absolute bottom-20 left-5 w-20 h-12 text-purple-200 opacity-15 animate-float-reverse" style="animation-delay: 1.5s" />
    
    <!-- Rocket ships -->
    <RocketShip class="absolute top-60 right-5 w-12 h-16 text-orange-300 opacity-18 animate-float" style="animation-delay: 2.5s" />
    <RocketShip class="absolute bottom-60 left-10 w-10 h-14 text-pink-300 opacity-15 animate-float-reverse" style="animation-delay: 3s" />
  </div>
</template>
