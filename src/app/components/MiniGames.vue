<script setup lang="ts">
import { Swords, Sparkles, Users } from 'lucide-vue-next'
import FloatingStar from './icons/FloatingStar.vue'
import GameController from './icons/GameController.vue'

const games = [
  {
    id: 1,
    name: 'Tug of War',
    tagline: 'Challenge your friends!',
    icon: '⚔️',
    gradient: 'from-red-400 to-orange-500',
    bgGradient: 'from-red-50 to-orange-50',
    action: 'Challenge',
  },
  {
    id: 2,
    name: 'Quiz Maze',
    tagline: 'Navigate through knowledge',
    icon: '🎯',
    gradient: 'from-blue-400 to-cyan-500',
    bgGradient: 'from-blue-50 to-cyan-50',
    action: 'Start',
  },
  {
    id: 3,
    name: 'Wheel Rush',
    tagline: 'Spin to win together!',
    icon: '🎡',
    gradient: 'from-purple-400 to-pink-500',
    bgGradient: 'from-purple-50 to-pink-50',
    action: 'Play',
  },
]
</script>

<template>
  <section class="bg-white rounded-xl border-2 border-purple-100 shadow-md p-4">
    <div class="flex items-center justify-between mb-3">
      <h2 class="text-base font-semibold text-gray-900 flex items-center gap-2">
        <GameController class="w-5 h-4 text-purple-500" />
        <span>Mini Games</span>
      </h2>
      <span class="text-xs text-purple-600 font-semibold bg-purple-50 px-2.5 py-1 rounded-full">
        3 Available
      </span>
    </div>

    <div class="grid grid-cols-3 gap-3">
      <button
        v-for="game in games"
        :key="game.id"
        :class="`bg-gradient-to-br ${game.bgGradient} rounded-xl p-3 hover:shadow-lg transform hover:-translate-y-0.5 transition-all text-left border-2 border-white/60 relative overflow-hidden group`"
      >
        <div class="absolute top-2 right-2 opacity-20 group-hover:opacity-30 transition-opacity">
          <FloatingStar class="w-6 h-6 text-current" />
        </div>
        <div class="relative z-10">
          <div class="text-2xl mb-2">{{ game.icon }}</div>
          <div class="text-sm font-semibold text-gray-800 mb-0.5">
            {{ game.name }}
          </div>
          <div class="text-xs text-gray-600">{{ game.tagline }}</div>
        </div>
      </button>
    </div>
  </section>
</template>
