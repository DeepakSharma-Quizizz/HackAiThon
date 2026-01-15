<script setup lang="ts">
import { ref, computed } from 'vue'
import RocketShip from './icons/RocketShip.vue'
import MathIcon from './icons/MathIcon.vue'
import ScienceIcon from './icons/ScienceIcon.vue'
import HistoryIcon from './icons/HistoryIcon.vue'
import EnglishIcon from './icons/EnglishIcon.vue'
import GeographyIcon from './icons/GeographyIcon.vue'
import BookCharacter from './icons/BookCharacter.vue'

const iconComponents: Record<string, any> = {
  'Mathematics': MathIcon,
  'Math': MathIcon,
  'Science': ScienceIcon,
  'History': HistoryIcon,
  'English': EnglishIcon,
  'Geography': GeographyIcon,
}

const journeyData: Record<5 | 10 | 30, Array<{
  id: number
  game: string
  subject: string
  accuracy: number
  date: string
  iconType: string
  color: string
}>> = {
  5: [
    { id: 1, game: 'Math Challenge', subject: 'Mathematics', accuracy: 92, date: '2 hours ago', iconType: 'Math', color: 'blue' },
    { id: 2, game: 'Science Quiz', subject: 'Science', accuracy: 88, date: 'Yesterday', iconType: 'Science', color: 'green' },
    { id: 3, game: 'History Hunt', subject: 'History', accuracy: 95, date: '2 days ago', iconType: 'History', color: 'purple' },
    { id: 4, game: 'Vocab Master', subject: 'English', accuracy: 85, date: '3 days ago', iconType: 'English', color: 'orange' },
    { id: 5, game: 'Geo Explorer', subject: 'Geography', accuracy: 90, date: '4 days ago', iconType: 'Geography', color: 'cyan' },
  ],
  10: [
    { id: 1, game: 'Math Challenge', subject: 'Mathematics', accuracy: 92, date: '2 hours ago', iconType: 'Math', color: 'blue' },
    { id: 2, game: 'Science Quiz', subject: 'Science', accuracy: 88, date: 'Yesterday', iconType: 'Science', color: 'green' },
    { id: 3, game: 'History Hunt', subject: 'History', accuracy: 95, date: '2 days ago', iconType: 'History', color: 'purple' },
    { id: 4, game: 'Vocab Master', subject: 'English', accuracy: 85, date: '3 days ago', iconType: 'English', color: 'orange' },
    { id: 5, game: 'Geo Explorer', subject: 'Geography', accuracy: 90, date: '4 days ago', iconType: 'Geography', color: 'cyan' },
    { id: 6, game: 'Physics Fun', subject: 'Science', accuracy: 87, date: '5 days ago', iconType: 'Science', color: 'yellow' },
    { id: 7, game: 'Math Sprint', subject: 'Mathematics', accuracy: 93, date: '6 days ago', iconType: 'Math', color: 'blue' },
    { id: 8, game: 'Bio Battle', subject: 'Science', accuracy: 91, date: '7 days ago', iconType: 'Science', color: 'green' },
    { id: 9, game: 'Grammar Game', subject: 'English', accuracy: 89, date: '8 days ago', iconType: 'English', color: 'orange' },
    { id: 10, game: 'Ancient Quest', subject: 'History', accuracy: 94, date: '9 days ago', iconType: 'History', color: 'purple' },
  ],
  30: [
    { id: 1, game: 'Math Challenge', subject: 'Mathematics', accuracy: 92, date: '2 hours ago', iconType: 'Math', color: 'blue' },
    { id: 2, game: 'Science Quiz', subject: 'Science', accuracy: 88, date: 'Yesterday', iconType: 'Science', color: 'green' },
    { id: 3, game: 'History Hunt', subject: 'History', accuracy: 95, date: '2 days ago', iconType: 'History', color: 'purple' },
    { id: 4, game: 'Vocab Master', subject: 'English', accuracy: 85, date: '3 days ago', iconType: 'English', color: 'orange' },
    { id: 5, game: 'Geo Explorer', subject: 'Geography', accuracy: 90, date: '4 days ago', iconType: 'Geography', color: 'cyan' },
    { id: 6, game: 'Physics Fun', subject: 'Science', accuracy: 87, date: '5 days ago', iconType: 'Science', color: 'yellow' },
    { id: 7, game: 'Math Sprint', subject: 'Mathematics', accuracy: 93, date: '1 week ago', iconType: 'Math', color: 'blue' },
    { id: 8, game: 'Bio Battle', subject: 'Science', accuracy: 91, date: '2 weeks ago', iconType: 'Science', color: 'green' },
    { id: 9, game: 'Grammar Game', subject: 'English', accuracy: 89, date: '2 weeks ago', iconType: 'English', color: 'orange' },
    { id: 10, game: 'Ancient Quest', subject: 'History', accuracy: 94, date: '3 weeks ago', iconType: 'History', color: 'purple' },
  ],
}

const calculateAverageAccuracy = (items: typeof journeyData[5]) => {
  if (items.length === 0) return 0
  const sum = items.reduce((acc, item) => acc + item.accuracy, 0)
  return Math.round(sum / items.length)
}

const accuracyStats = {
  5: calculateAverageAccuracy(journeyData[5]),
  10: calculateAverageAccuracy(journeyData[10]),
  30: calculateAverageAccuracy(journeyData[30]),
}

const activeFilter = ref<5 | 10 | 30>(5)

const items = computed(() => journeyData[activeFilter.value])

const filters = [
  { days: 5 as const, label: '5d' },
  { days: 10 as const, label: '10d' },
  { days: 30 as const, label: '30d' },
]

const periods = [
  { days: 5 as const, label: '5 Days', accuracy: accuracyStats[5] },
  { days: 10 as const, label: '10 Days', accuracy: accuracyStats[10] },
  { days: 30 as const, label: '30 Days', accuracy: accuracyStats[30] },
]

const getSubjectIcon = (subject: string) => {
  return iconComponents[subject] || BookCharacter
}
</script>

<template>
  <section class="bg-white rounded-xl border-2 border-purple-100 shadow-md p-4 relative overflow-hidden">
    <div class="absolute top-4 right-4 opacity-10">
      <RocketShip class="w-14 h-18 text-purple-400" />
    </div>
    <div class="relative z-10">
      <div class="flex items-center justify-between mb-3">
        <h2 class="text-base font-semibold text-gray-900 flex items-center gap-2">
          <RocketShip class="w-5 h-6 text-purple-500" />
          <span>Learning Journey</span>
        </h2>
        <div class="flex gap-1 bg-gray-100 rounded p-0.5">
          <button
            v-for="filter in filters"
            :key="filter.days"
            @click="activeFilter = filter.days"
            :class="`px-2 py-1 rounded text-xs font-medium transition-all ${
              activeFilter === filter.days
                ? 'bg-white text-gray-900 shadow-sm'
                : 'text-gray-600'
            }`"
          >
            {{ filter.label }}
          </button>
        </div>
      </div>

      <!-- Accuracy Comparison Cards -->
      <div class="grid grid-cols-3 gap-2 mb-4">
        <div
          v-for="period in periods"
          :key="period.days"
          :class="`rounded-lg p-2.5 border-2 transition-all ${
            activeFilter === period.days
              ? 'bg-gradient-to-br from-purple-50 to-pink-50 border-purple-300 shadow-sm'
              : 'bg-gray-50 border-gray-200'
          }`"
        >
          <div class="text-xs text-gray-600 mb-1">{{ period.label }}</div>
          <div :class="`text-lg font-black ${activeFilter === period.days ? 'text-purple-600' : 'text-gray-700'}`">
            {{ period.accuracy }}%
          </div>
        </div>
      </div>

      <!-- Recent Activities -->
      <div class="space-y-1.5 max-h-80 overflow-y-auto">
        <div
          v-for="item in items.slice(0, 5)"
          :key="item.id"
          class="flex items-center gap-3 p-2 rounded hover:bg-gray-50 transition-colors"
        >
          <div class="w-9 h-9 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
            <component :is="getSubjectIcon(item.iconType || item.subject)" class="w-5 h-5 text-purple-600" />
          </div>
          <div class="flex-1 min-w-0">
            <div class="text-sm font-medium text-gray-900 truncate">{{ item.game }}</div>
            <div class="text-xs text-gray-500">{{ item.subject }} • {{ item.date }}</div>
          </div>
          <div class="text-sm font-semibold text-gray-900">{{ item.accuracy }}%</div>
        </div>
      </div>
    </div>
  </section>
</template>
