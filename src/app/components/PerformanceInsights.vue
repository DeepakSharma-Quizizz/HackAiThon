<script setup lang="ts">
import { TrendingUp } from 'lucide-vue-next'
import BookCharacter from './icons/BookCharacter.vue'
import ChartIcon from './icons/ChartIcon.vue'

const subjectData = [
  { subject: 'Math', accuracy: 92, color: '#3b82f6', status: 'strong' },
  { subject: 'Science', accuracy: 88, color: '#10b981', status: 'strong' },
  { subject: 'History', accuracy: 95, color: '#8b5cf6', status: 'strong' },
  { subject: 'English', accuracy: 85, color: '#f59e0b', status: 'improving' },
  { subject: 'Geography', accuracy: 78, color: '#06b6d4', status: 'needs_work' },
]

const strongSubjects = subjectData.filter(s => s.accuracy >= 90)

const getCircumference = () => 2 * Math.PI * 28
const getOffset = (accuracy: number) => getCircumference() - (accuracy / 100) * getCircumference()
</script>

<template>
  <section class="bg-white rounded-xl border-2 border-blue-100 shadow-md p-4 relative overflow-hidden">
    <div class="absolute top-4 right-4 opacity-10">
      <BookCharacter class="w-16 h-20 text-purple-400" />
    </div>
    <div class="relative z-10">
      <div class="flex items-center justify-between mb-3">
        <h2 class="text-base font-semibold text-gray-900 flex items-center gap-2">
          <ChartIcon class="w-5 h-4 text-purple-500" />
          <span>Performance</span>
        </h2>
      </div>

      <!-- Chart -->
      <div class="mb-3 bg-gradient-to-br from-purple-50 to-blue-50 rounded-lg p-3">
        <div class="grid grid-cols-5 gap-2">
          <div 
            v-for="subject in subjectData"
            :key="subject.subject" 
            class="text-center"
          >
            <!-- Circular Progress Ring -->
            <div class="relative w-16 h-16 mx-auto mb-2">
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
                  :stroke="subject.color"
                  stroke-width="4"
                  fill="none"
                  :stroke-dasharray="getCircumference()"
                  :stroke-dashoffset="getOffset(subject.accuracy)"
                  stroke-linecap="round"
                  class="transition-all duration-700"
                />
              </svg>
              <div class="absolute inset-0 flex flex-col items-center justify-center">
                <span class="text-xs font-bold text-gray-900">{{ subject.accuracy }}%</span>
              </div>
            </div>
            <div class="text-xs font-medium text-gray-700">{{ subject.subject }}</div>
          </div>
        </div>
      </div>
    </div>

    <div v-if="strongSubjects.length > 0" class="mt-3 pt-3 border-t border-gray-100">
      <div class="flex items-center gap-2 text-xs text-gray-600">
        <TrendingUp class="w-4 h-4 text-green-500" />
        <span class="font-medium">Strong: {{ strongSubjects.map(s => s.subject).join(', ') }}</span>
      </div>
    </div>
  </section>
</template>
