<script setup lang="ts">
import { ref, onMounted, onUnmounted, computed } from 'vue'
import { MessageCircle, X, Sparkles } from 'lucide-vue-next'
import HappyCloud from './icons/HappyCloud.vue'
import FloatingStar from './icons/FloatingStar.vue'
import QbitDoll from './icons/QbitDoll.vue'
import CoinIcon from './icons/CoinIcon.vue'
import GiftBoxIcon from './icons/GiftBoxIcon.vue'

const messages = [
  { id: 1, text: "Hey! Hope you're doing great today 😊", mood: 'happy' },
  { id: 2, text: "Wow! Your scores are improving 🔥", mood: 'excited' },
  { id: 3, text: "You might want to check your Geography accuracy!", mood: 'thoughtful' },
  { id: 4, text: "Keep going — you're on a 7-day streak 🚀", mood: 'motivating' },
  { id: 5, text: "That Math score was AMAZING! 💯", mood: 'celebrating' },
]

const surpriseRewards = [
  { type: 'coins', amount: 10, message: 'You found 10 coins!', emoji: '🪙' },
  { type: 'coins', amount: 25, message: 'Lucky! 25 coins!', emoji: '💰' },
  { type: 'coins', amount: 50, message: 'Jackpot! 50 coins!', emoji: '🎉' },
  { type: 'badge', name: 'Lucky Star', message: 'Lucky Star badge!', emoji: '⭐' },
  { type: 'badge', name: 'Fortune Finder', message: 'Fortune Finder!', emoji: '🏆' },
  { type: 'bonus', name: '2x Points', message: '2x Points bonus!', emoji: '⚡' },
]

const currentMessageIndex = ref(0)
const isMinimized = ref(false)
const coins = ref(1250)
const showSurpriseBox = ref(false)
const isBoxOpening = ref(false)
const reward = ref<typeof surpriseRewards[0] | null>(null)
const showReward = ref(false)
const confetti = ref(false)

const currentMessage = computed(() => messages[currentMessageIndex.value])

let messageInterval: number
let surpriseTimeout: number
let surpriseInterval: number

onMounted(() => {
  messageInterval = setInterval(() => {
    currentMessageIndex.value = (currentMessageIndex.value + 1) % messages.length
  }, 8000)

  // Show immediately on first load for demo
  surpriseTimeout = setTimeout(() => {
    if (!showSurpriseBox.value && !showReward.value) {
      showSurpriseBox.value = true
    }
  }, 2000)
  
  // Check periodically (every 45 seconds after that)
  surpriseInterval = setInterval(() => {
    if (Math.random() < 0.3 && !showSurpriseBox.value && !showReward.value) {
      showSurpriseBox.value = true
    }
  }, 45000)
})

onUnmounted(() => {
  clearInterval(messageInterval)
  clearTimeout(surpriseTimeout)
  clearInterval(surpriseInterval)
})

const openSurpriseBox = () => {
  isBoxOpening.value = true
  
  const randomReward = surpriseRewards[Math.floor(Math.random() * surpriseRewards.length)]
  
  setTimeout(() => {
    confetti.value = true
    reward.value = randomReward
    showSurpriseBox.value = false
    isBoxOpening.value = false
    showReward.value = true
    
    if (randomReward.type === 'coins') {
      coins.value += randomReward.amount
    }
    
    setTimeout(() => {
      showReward.value = false
      reward.value = null
      confetti.value = false
    }, 4000)
  }, 2000)
}

const dismissSurpriseBox = () => {
  showSurpriseBox.value = false
}

const confettiColors = ['#f472b6', '#a78bfa', '#60a5fa', '#34d399', '#fbbf24', '#f87171']
const getRandomColor = () => confettiColors[Math.floor(Math.random() * confettiColors.length)]
</script>

<template>
  <!-- Minimized button -->
  <button
    v-if="isMinimized"
    @click="isMinimized = false"
    class="fixed bottom-6 right-6 w-16 h-16 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-full shadow-2xl hover:scale-110 transition-transform flex items-center justify-center border-4 border-white animate-bounce z-50"
  >
    <span class="text-3xl">🤖</span>
  </button>

  <template v-else>
    <!-- Main Qbit Card -->
    <div class="bg-gradient-to-br from-cyan-50 to-blue-50 rounded-xl border-2 border-cyan-100 shadow-md p-4 relative overflow-hidden">
      <div class="absolute top-3 left-3 opacity-15">
        <HappyCloud class="w-14 h-9 text-cyan-400" />
      </div>
      <div class="absolute bottom-3 right-3 opacity-15">
        <FloatingStar class="w-8 h-8 text-blue-400" />
      </div>
      
      <button
        @click="isMinimized = true"
        class="absolute top-2 right-2 w-6 h-6 rounded-full bg-white/80 flex items-center justify-center hover:bg-white transition-colors z-10"
      >
        <X class="w-3.5 h-3.5 text-gray-400" />
      </button>

      <div class="relative z-10">
        <!-- Coins Card -->
        <div class="bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl p-3 mb-3 shadow-md border border-blue-400/50">
          <div class="flex items-center justify-between">
            <div class="flex items-center gap-2">
              <div class="w-9 h-9 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                <CoinIcon class="w-6 h-6" />
              </div>
              <div>
                <div class="text-xs text-blue-100 font-medium">Your Coins</div>
                <div class="text-lg font-black text-white">{{ coins.toLocaleString() }}</div>
              </div>
            </div>
            <div class="text-right bg-white/10 rounded-lg px-2 py-1">
              <div class="text-xs text-blue-100">Daily</div>
              <div class="text-sm font-bold text-white">+50</div>
            </div>
          </div>
        </div>

        <!-- Qbit Character -->
        <div class="flex flex-col items-center mb-3">
          <div class="w-20 h-28 mb-2 flex items-center justify-center">
            <QbitDoll class="w-full h-full text-cyan-500" />
          </div>
          <div class="text-center">
            <h3 class="text-sm font-semibold bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent">Qbit</h3>
            <p class="text-xs text-gray-500">Your Companion</p>
          </div>
        </div>

        <div class="bg-white rounded-lg p-3 mb-3 border border-cyan-200 shadow-sm">
          <p class="text-xs text-gray-700 leading-relaxed">
            {{ currentMessage.text }}
          </p>
        </div>

        <button class="w-full bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-medium py-2 px-3 rounded-lg hover:shadow-md transition-all flex items-center justify-center gap-2 text-xs">
          <MessageCircle class="w-3.5 h-3.5" />
          Chat with Qbit
        </button>
      </div>
    </div>

    <!-- Floating Surprise Box -->
    <Teleport to="body">
      <div 
        v-if="showSurpriseBox && !showReward"
        class="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 animate-in slide-in-from-bottom-10 duration-500"
      >
        <div class="relative">
          <!-- Glow effect -->
          <div class="absolute inset-0 bg-gradient-to-r from-pink-500 to-purple-500 rounded-2xl blur-xl opacity-50 animate-pulse"></div>
          
          <!-- Main box -->
          <button
            @click="openSurpriseBox"
            :disabled="isBoxOpening"
            class="relative bg-gradient-to-r from-pink-500 via-purple-500 to-pink-500 rounded-2xl px-6 py-4 shadow-2xl border-2 border-white/50 hover:scale-105 transition-all duration-300 flex items-center gap-4 group"
            :style="{
              backgroundSize: '200% 100%',
              animation: isBoxOpening ? 'none' : 'shimmer 2s linear infinite',
            }"
          >
            <!-- Sparkles around -->
            <div class="absolute -top-2 -left-2 animate-ping">
              <Sparkles class="w-4 h-4 text-yellow-300" />
            </div>
            <div class="absolute -top-2 -right-2 animate-ping" style="animation-delay: 0.5s">
              <Sparkles class="w-4 h-4 text-yellow-300" />
            </div>
            <div class="absolute -bottom-2 left-1/2 animate-ping" style="animation-delay: 1s">
              <Sparkles class="w-4 h-4 text-yellow-300" />
            </div>

            <!-- Gift box with animation -->
            <div :class="`relative ${isBoxOpening ? 'animate-wiggle' : 'animate-bounce'}`">
              <GiftBoxIcon class="w-14 h-14" />
              <div v-if="isBoxOpening" class="absolute inset-0 flex items-center justify-center">
                <div class="w-8 h-8 border-4 border-white border-t-transparent rounded-full animate-spin"></div>
              </div>
            </div>

            <div class="text-left">
              <div class="text-white font-bold text-base flex items-center gap-2">
                <template v-if="isBoxOpening">
                  <span class="animate-pulse">Opening</span>
                  <span class="animate-bounce">.</span>
                  <span class="animate-bounce" style="animation-delay: 0.1s">.</span>
                  <span class="animate-bounce" style="animation-delay: 0.2s">.</span>
                </template>
                <template v-else>
                  🎁 Surprise Box!
                </template>
              </div>
              <div class="text-pink-100 text-sm">
                {{ isBoxOpening ? 'What will you get?' : 'Tap to open & win!' }}
              </div>
            </div>

            <div v-if="!isBoxOpening" class="bg-white/20 rounded-full px-3 py-1 text-white text-xs font-bold animate-pulse">
              OPEN
            </div>
          </button>

          <!-- Dismiss button -->
          <button
            v-if="!isBoxOpening"
            @click="dismissSurpriseBox"
            class="absolute -top-2 -right-2 w-6 h-6 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-100 transition-colors"
          >
            <X class="w-4 h-4 text-gray-500" />
          </button>
        </div>
      </div>

      <!-- Reward Celebration Popup -->
      <div v-if="showReward && reward" class="fixed inset-0 z-50 flex items-center justify-center pointer-events-none">
        <!-- Confetti particles -->
        <div v-if="confetti" class="absolute inset-0 overflow-hidden">
          <div
            v-for="i in 50"
            :key="i"
            class="absolute animate-confetti"
            :style="{
              left: `${Math.random() * 100}%`,
              top: '-10%',
              animationDelay: `${Math.random() * 2}s`,
              animationDuration: `${2 + Math.random() * 2}s`,
            }"
          >
            <div
              class="w-3 h-3 rounded-sm"
              :style="{
                backgroundColor: getRandomColor(),
                transform: `rotate(${Math.random() * 360}deg)`,
              }"
            />
          </div>
        </div>

        <!-- Reward card -->
        <div class="animate-in zoom-in-50 duration-500 pointer-events-auto">
          <div class="relative">
            <!-- Glow -->
            <div class="absolute inset-0 bg-gradient-to-r from-green-400 to-emerald-400 rounded-3xl blur-2xl opacity-60 animate-pulse"></div>
            
            <!-- Card -->
            <div class="relative bg-gradient-to-br from-green-400 via-emerald-500 to-teal-500 rounded-3xl p-8 shadow-2xl border-4 border-white/50 text-center min-w-[280px]">
              <!-- Floating stars -->
              <FloatingStar class="absolute top-4 left-4 w-6 h-6 text-yellow-300 animate-float" />
              <FloatingStar class="absolute top-4 right-4 w-6 h-6 text-yellow-300 animate-float-reverse" />
              <FloatingStar class="absolute bottom-4 left-8 w-5 h-5 text-yellow-300 animate-float" style="animation-delay: 0.5s" />
              <FloatingStar class="absolute bottom-4 right-8 w-5 h-5 text-yellow-300 animate-float-reverse" style="animation-delay: 0.5s" />

              <!-- Content -->
              <div class="text-6xl mb-4 animate-bounce">
                {{ reward.emoji }}
              </div>
              <div class="text-white font-black text-2xl mb-2 drop-shadow-lg">
                {{ reward.type === 'coins' ? `+${reward.amount} Coins!` : reward.message }}
              </div>
              <div class="text-green-100 text-sm font-medium">
                {{ reward.type === 'coins' ? 'Added to your wallet!' : 'Unlocked!' }}
              </div>

              <!-- Celebration rings -->
              <div class="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div class="w-32 h-32 rounded-full border-4 border-white/30 animate-ping"></div>
              </div>
              <div class="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div class="w-48 h-48 rounded-full border-2 border-white/20 animate-ping" style="animation-delay: 0.5s"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Teleport>
  </template>
</template>
