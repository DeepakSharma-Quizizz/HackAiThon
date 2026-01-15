<script setup lang="ts">
import { Trophy, Flame, Star, Zap, Award, Crown } from 'lucide-vue-next'
import TrophyIcon from './icons/TrophyIcon.vue'
import FloatingStar from './icons/FloatingStar.vue'

const badges = [
  { id: 1, name: 'First Win', iconType: 'trophy', unlocked: true, color: 'from-yellow-400 to-orange-500' },
  { id: 2, name: 'Speed Demon', iconType: 'lightning', unlocked: true, color: 'from-purple-400 to-pink-500' },
  { id: 3, name: 'Perfect Score', iconType: 'perfect', unlocked: true, color: 'from-green-400 to-emerald-500' },
  { id: 4, name: 'Streak Master', iconType: 'flame', unlocked: true, color: 'from-red-400 to-orange-500' },
  { id: 5, name: 'Knowledge King', iconType: 'crown', unlocked: false, color: 'from-gray-300 to-gray-400' },
  { id: 6, name: 'Quiz Legend', iconType: 'star', unlocked: false, color: 'from-gray-300 to-gray-400' },
]

const milestones = [
  { id: 1, label: 'Questions answered', value: 847, target: 1000, icon: Zap, color: 'blue' },
  { id: 2, label: 'Perfect scores', value: 12, target: 20, icon: Star, color: 'yellow' },
  { id: 3, label: 'Games played', value: 156, target: 200, icon: Trophy, color: 'purple' },
]

const colorClasses: Record<string, string> = {
  blue: 'bg-blue-500',
  yellow: 'bg-yellow-500',
  purple: 'bg-purple-500',
}

const textColorClasses: Record<string, string> = {
  blue: 'text-blue-500',
  yellow: 'text-yellow-500',
  purple: 'text-purple-500',
}

const currentStreak = 7

const getCircumference = () => 2 * Math.PI * 28
const getOffset = (value: number, target: number) => {
  const percentage = Math.min((value / target) * 100, 100)
  return getCircumference() - (percentage / 100) * getCircumference()
}
const getPercentage = (value: number, target: number) => Math.min((value / target) * 100, 100)
</script>

<template>
  <section class="space-y-3">
    <!-- Streak Card -->
    <div class="bg-gradient-to-br from-orange-500 to-red-500 rounded-xl border-2 border-white shadow-md p-4 text-white relative overflow-hidden">
      <div class="absolute bottom-2 left-2 opacity-20">
        <FloatingStar class="w-10 h-10 text-white" />
      </div>
      <div class="relative z-10">
        <div class="flex items-center justify-between mb-2">
          <h3 class="text-sm font-semibold">Current Streak</h3>
          <Flame class="w-4 h-4" />
        </div>
        <div class="text-center">
          <div class="text-4xl font-black mb-1">{{ currentStreak }}</div>
          <div class="text-xs opacity-90">days in a row</div>
        </div>
      </div>
    </div>

    <!-- Badges -->
    <div class="bg-white rounded-xl border-2 border-yellow-100 shadow-md p-4 relative overflow-hidden">
      <div class="absolute top-3 right-3 opacity-10">
        <TrophyIcon class="w-12 h-14 text-yellow-400" />
      </div>
      <div class="relative z-10">
        <div class="flex items-center justify-between mb-3">
          <h3 class="text-sm font-semibold text-gray-900">Badges</h3>
          <span class="text-xs text-yellow-600 font-semibold bg-yellow-50 px-2 py-0.5 rounded-full">
            {{ badges.filter(b => b.unlocked).length }}/{{ badges.length }}
          </span>
        </div>
        <div class="grid grid-cols-3 gap-3">
          <div
            v-for="badge in badges"
            :key="badge.id"
            :class="`aspect-square rounded-2xl bg-gradient-to-br ${badge.color} flex flex-col items-center justify-center p-3 relative overflow-hidden group ${
              badge.unlocked 
                ? 'shadow-lg hover:shadow-xl hover:scale-105 cursor-pointer transition-all duration-300 border-2 border-white/50' 
                : 'opacity-40 grayscale border-2 border-gray-300'
            }`"
            :style="badge.unlocked ? 'box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.2), 0 0 15px rgba(255, 255, 255, 0.3) inset' : ''"
          >
            <!-- Shine effect for unlocked badges -->
            <template v-if="badge.unlocked">
              <div class="absolute inset-0 bg-gradient-to-br from-white/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div class="absolute top-1 right-1 opacity-60">
                <FloatingStar class="w-4 h-4 text-white" />
              </div>
              <div class="absolute bottom-1 left-1 opacity-40">
                <FloatingStar class="w-3 h-3 text-white" />
              </div>
            </template>
            
            <div class="relative z-10 flex flex-col items-center">
              <div class="mb-1.5 transform group-hover:scale-110 transition-transform duration-300">
                <span v-if="badge.iconType === 'perfect'" class="text-xl font-black text-white drop-shadow-lg">100</span>
                <TrophyIcon v-else-if="badge.iconType === 'trophy'" class="w-7 h-7 text-white drop-shadow-lg" />
                <Zap v-else-if="badge.iconType === 'lightning'" class="w-7 h-7 text-white drop-shadow-lg" />
                <Flame v-else-if="badge.iconType === 'flame'" class="w-7 h-7 text-white drop-shadow-lg" />
                <Crown v-else-if="badge.iconType === 'crown'" class="w-7 h-7 text-white drop-shadow-lg" />
                <FloatingStar v-else-if="badge.iconType === 'star'" class="w-7 h-7 text-white drop-shadow-lg" />
                <Award v-else class="w-7 h-7 text-white drop-shadow-lg" />
              </div>
              <div class="text-xs font-bold text-white text-center leading-tight drop-shadow-md">
                {{ badge.name }}
              </div>
            </div>
            
            <!-- Glow effect for unlocked badges -->
            <div 
              v-if="badge.unlocked"
              class="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              style="box-shadow: 0 0 20px rgba(255, 255, 255, 0.4) inset, 0 0 30px rgba(255, 255, 255, 0.2)"
            ></div>
          </div>
        </div>
      </div>
    </div>

    <!-- Milestones -->
    <div class="bg-white rounded-xl border-2 border-purple-100 shadow-md p-4 relative overflow-hidden">
      <div class="absolute bottom-3 right-3 opacity-10">
        <FloatingStar class="w-10 h-10 text-purple-400" />
      </div>
      <div class="relative z-10">
        <h3 class="text-sm font-semibold text-gray-900 mb-3">Milestones</h3>
        <div class="space-y-3">
          <div 
            v-for="milestone in milestones"
            :key="milestone.id" 
            class="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-4 border-2 border-gray-100 hover:border-purple-200 transition-all"
          >
            <div class="flex items-center gap-4">
              <!-- Circular Progress -->
              <div class="relative w-16 h-16 flex-shrink-0">
                <svg class="transform -rotate-90 w-16 h-16">
                  <circle
                    cx="32"
                    cy="32"
                    r="28"
                    stroke="currentColor"
                    stroke-width="4"
                    fill="none"
                    class="text-gray-200"
                  />
                  <circle
                    cx="32"
                    cy="32"
                    r="28"
                    stroke="currentColor"
                    stroke-width="4"
                    fill="none"
                    :stroke-dasharray="getCircumference()"
                    :stroke-dashoffset="getOffset(milestone.value, milestone.target)"
                    stroke-linecap="round"
                    :class="`transition-all duration-700 ${textColorClasses[milestone.color]}`"
                  />
                </svg>
                <div class="absolute inset-0 flex items-center justify-center">
                  <div :class="`w-10 h-10 ${colorClasses[milestone.color]} rounded-lg flex items-center justify-center shadow-sm`">
                    <component :is="milestone.icon" class="w-5 h-5 text-white" />
                  </div>
                </div>
              </div>
              
              <!-- Content -->
              <div class="flex-1">
                <div class="flex items-center justify-between mb-2">
                  <span class="text-sm font-semibold text-gray-800">
                    {{ milestone.label }}
                  </span>
                  <span class="text-sm font-bold text-gray-800">
                    {{ milestone.value }}/{{ milestone.target }}
                  </span>
                </div>
                <!-- Visual blocks progress -->
                <div class="flex items-center gap-1">
                  <div
                    v-for="i in 10"
                    :key="i"
                    :class="`flex-1 h-2 rounded-full transition-all duration-300 ${
                      i * 10 <= getPercentage(milestone.value, milestone.target)
                        ? colorClasses[milestone.color]
                        : 'bg-gray-200'
                    }`"
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
