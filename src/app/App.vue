<script setup lang="ts">
import StudentHeader from '@/app/components/StudentHeader.vue'
import MiniGames from '@/app/components/MiniGames.vue'
import QuizizzJourney from '@/app/components/QuizizzJourney.vue'
import PerformanceInsights from '@/app/components/PerformanceInsights.vue'
import Achievements from '@/app/components/Achievements.vue'
import QbitCompanion from '@/app/components/QbitCompanion.vue'
import BackgroundDecorations from '@/app/components/BackgroundDecorations.vue'
</script>

<template>
  <div class="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50 relative">
    <!-- Background Cartoon Decorations -->
    <BackgroundDecorations />
    
    <!-- Header -->
    <StudentHeader />

    <!-- Main Content -->
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-4">
        <!-- Main Content Area -->
        <div class="lg:col-span-8 space-y-4">
          <MiniGames />
          <PerformanceInsights />
          <QuizizzJourney />
        </div>

        <!-- Sidebar -->
        <div class="lg:col-span-4 space-y-4">
          <QbitCompanion />
          <Achievements />
        </div>
      </div>
    </div>
  </div>
</template>
