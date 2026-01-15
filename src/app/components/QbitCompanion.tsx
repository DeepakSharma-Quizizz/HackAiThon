import { useState, useEffect } from 'react';
import { MessageCircle, X, Sparkles } from 'lucide-react';
import { HappyCloud, FloatingStar, QbitDoll, CoinIcon, GiftBoxIcon } from './CartoonIllustrations';

const messages = [
  { id: 1, text: "Hey! Hope you're doing great today 😊", mood: 'happy' },
  { id: 2, text: "Wow! Your scores are improving 🔥", mood: 'excited' },
  { id: 3, text: "You might want to check your Geography accuracy!", mood: 'thoughtful' },
  { id: 4, text: "Keep going — you're on a 7-day streak 🚀", mood: 'motivating' },
  { id: 5, text: "That Math score was AMAZING! 💯", mood: 'celebrating' },
];

const surpriseRewards = [
  { type: 'coins', amount: 10, message: 'You found 10 coins!', emoji: '🪙' },
  { type: 'coins', amount: 25, message: 'Lucky! 25 coins!', emoji: '💰' },
  { type: 'coins', amount: 50, message: 'Jackpot! 50 coins!', emoji: '🎉' },
  { type: 'badge', name: 'Lucky Star', message: 'Lucky Star badge!', emoji: '⭐' },
  { type: 'badge', name: 'Fortune Finder', message: 'Fortune Finder!', emoji: '🏆' },
  { type: 'bonus', name: '2x Points', message: '2x Points bonus!', emoji: '⚡' },
];

export function QbitCompanion() {
  const [currentMessageIndex, setCurrentMessageIndex] = useState(0);
  const [isMinimized, setIsMinimized] = useState(false);
  const [coins, setCoins] = useState(1250);
  const [showSurpriseBox, setShowSurpriseBox] = useState(false);
  const [isBoxOpening, setIsBoxOpening] = useState(false);
  const [reward, setReward] = useState<typeof surpriseRewards[0] | null>(null);
  const [showReward, setShowReward] = useState(false);
  const [confetti, setConfetti] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentMessageIndex((prev) => (prev + 1) % messages.length);
    }, 8000);

    return () => clearInterval(interval);
  }, []);

  // Randomly show surprise box (simulating luck-based appearance)
  useEffect(() => {
    const checkForSurprise = () => {
      // 30% chance to show surprise box
      if (Math.random() < 0.3 && !showSurpriseBox && !showReward) {
        setShowSurpriseBox(true);
      }
    };
    
    // Show immediately on first load for demo
    const initialTimeout = setTimeout(() => {
      if (!showSurpriseBox && !showReward) {
        setShowSurpriseBox(true);
      }
    }, 2000);
    
    // Check periodically (every 45 seconds after that)
    const interval = setInterval(checkForSurprise, 45000);
    
    return () => {
      clearTimeout(initialTimeout);
      clearInterval(interval);
    };
  }, [showSurpriseBox, showReward]);

  const openSurpriseBox = () => {
    setIsBoxOpening(true);
    
    // Pick a random reward
    const randomReward = surpriseRewards[Math.floor(Math.random() * surpriseRewards.length)];
    
    // Box opening animation duration
    setTimeout(() => {
      setConfetti(true);
      setReward(randomReward);
      setShowSurpriseBox(false);
      setIsBoxOpening(false);
      setShowReward(true);
      
      // Add coins if reward is coins
      if (randomReward.type === 'coins') {
        setCoins(prev => prev + randomReward.amount);
      }
      
      // Hide reward after 4 seconds
      setTimeout(() => {
        setShowReward(false);
        setReward(null);
        setConfetti(false);
      }, 4000);
    }, 2000);
  };

  const dismissSurpriseBox = () => {
    setShowSurpriseBox(false);
  };

  const currentMessage = messages[currentMessageIndex];

  if (isMinimized) {
    return (
      <button
        onClick={() => setIsMinimized(false)}
        className="fixed bottom-6 right-6 w-16 h-16 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-full shadow-2xl hover:scale-110 transition-transform flex items-center justify-center border-4 border-white animate-bounce z-50"
      >
        <span className="text-3xl">🤖</span>
      </button>
    );
  }

  return (
    <>
      {/* Main Qbit Card */}
      <div className="bg-gradient-to-br from-cyan-50 to-blue-50 rounded-xl border-2 border-cyan-100 shadow-md p-4 relative overflow-hidden">
        <div className="absolute top-3 left-3 opacity-15">
          <HappyCloud className="w-14 h-9 text-cyan-400" />
        </div>
        <div className="absolute bottom-3 right-3 opacity-15">
          <FloatingStar className="w-8 h-8 text-blue-400" />
        </div>
        
        <button
          onClick={() => setIsMinimized(true)}
          className="absolute top-2 right-2 w-6 h-6 rounded-full bg-white/80 flex items-center justify-center hover:bg-white transition-colors z-10"
        >
          <X className="w-3.5 h-3.5 text-gray-400" />
        </button>

        <div className="relative z-10">
          {/* Coins Card - Matching blue theme */}
          <div className="bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl p-3 mb-3 shadow-md border border-blue-400/50">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-9 h-9 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                  <CoinIcon className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-xs text-blue-100 font-medium">Your Coins</div>
                  <div className="text-lg font-black text-white">{coins.toLocaleString()}</div>
                </div>
              </div>
              <div className="text-right bg-white/10 rounded-lg px-2 py-1">
                <div className="text-xs text-blue-100">Daily</div>
                <div className="text-sm font-bold text-white">+50</div>
              </div>
            </div>
          </div>

          {/* Qbit Character */}
          <div className="flex flex-col items-center mb-3">
            <div className="w-20 h-28 mb-2 flex items-center justify-center">
              <QbitDoll className="w-full h-full text-cyan-500" />
            </div>
            <div className="text-center">
              <h3 className="text-sm font-semibold bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent">Qbit</h3>
              <p className="text-xs text-gray-500">Your Companion</p>
            </div>
          </div>

          <div className="bg-white rounded-lg p-3 mb-3 border border-cyan-200 shadow-sm">
            <p className="text-xs text-gray-700 leading-relaxed">
              {currentMessage.text}
            </p>
          </div>

          <button className="w-full bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-medium py-2 px-3 rounded-lg hover:shadow-md transition-all flex items-center justify-center gap-2 text-xs">
            <MessageCircle className="w-3.5 h-3.5" />
            Chat with Qbit
          </button>
        </div>
      </div>

      {/* Floating Surprise Box - Fixed at bottom */}
      {showSurpriseBox && !showReward && (
        <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 animate-in slide-in-from-bottom-10 duration-500">
          <div className="relative">
            {/* Glow effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-pink-500 to-purple-500 rounded-2xl blur-xl opacity-50 animate-pulse"></div>
            
            {/* Main box */}
            <button
              onClick={openSurpriseBox}
              disabled={isBoxOpening}
              className="relative bg-gradient-to-r from-pink-500 via-purple-500 to-pink-500 rounded-2xl px-6 py-4 shadow-2xl border-2 border-white/50 hover:scale-105 transition-all duration-300 flex items-center gap-4 group"
              style={{
                backgroundSize: '200% 100%',
                animation: isBoxOpening ? 'none' : 'shimmer 2s linear infinite',
              }}
            >
              {/* Sparkles around */}
              <div className="absolute -top-2 -left-2 animate-ping">
                <Sparkles className="w-4 h-4 text-yellow-300" />
              </div>
              <div className="absolute -top-2 -right-2 animate-ping" style={{ animationDelay: '0.5s' }}>
                <Sparkles className="w-4 h-4 text-yellow-300" />
              </div>
              <div className="absolute -bottom-2 left-1/2 animate-ping" style={{ animationDelay: '1s' }}>
                <Sparkles className="w-4 h-4 text-yellow-300" />
              </div>

              {/* Gift box with animation */}
              <div className={`relative ${isBoxOpening ? 'animate-wiggle' : 'animate-bounce'}`}>
                <GiftBoxIcon className="w-14 h-14" />
                {isBoxOpening && (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-8 h-8 border-4 border-white border-t-transparent rounded-full animate-spin"></div>
                  </div>
                )}
              </div>

              <div className="text-left">
                <div className="text-white font-bold text-base flex items-center gap-2">
                  {isBoxOpening ? (
                    <>
                      <span className="animate-pulse">Opening</span>
                      <span className="animate-bounce">.</span>
                      <span className="animate-bounce" style={{ animationDelay: '0.1s' }}>.</span>
                      <span className="animate-bounce" style={{ animationDelay: '0.2s' }}>.</span>
                    </>
                  ) : (
                    '🎁 Surprise Box!'
                  )}
                </div>
                <div className="text-pink-100 text-sm">
                  {isBoxOpening ? 'What will you get?' : 'Tap to open & win!'}
                </div>
              </div>

              {!isBoxOpening && (
                <div className="bg-white/20 rounded-full px-3 py-1 text-white text-xs font-bold animate-pulse">
                  OPEN
                </div>
              )}
            </button>

            {/* Dismiss button */}
            {!isBoxOpening && (
              <button
                onClick={dismissSurpriseBox}
                className="absolute -top-2 -right-2 w-6 h-6 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-100 transition-colors"
              >
                <X className="w-4 h-4 text-gray-500" />
              </button>
            )}
          </div>
        </div>
      )}

      {/* Reward Celebration Popup */}
      {showReward && reward && (
        <div className="fixed inset-0 z-50 flex items-center justify-center pointer-events-none">
          {/* Confetti particles */}
          {confetti && (
            <div className="absolute inset-0 overflow-hidden">
              {Array.from({ length: 50 }).map((_, i) => (
                <div
                  key={i}
                  className="absolute animate-confetti"
                  style={{
                    left: `${Math.random() * 100}%`,
                    top: '-10%',
                    animationDelay: `${Math.random() * 2}s`,
                    animationDuration: `${2 + Math.random() * 2}s`,
                  }}
                >
                  <div
                    className="w-3 h-3 rounded-sm"
                    style={{
                      backgroundColor: ['#f472b6', '#a78bfa', '#60a5fa', '#34d399', '#fbbf24', '#f87171'][Math.floor(Math.random() * 6)],
                      transform: `rotate(${Math.random() * 360}deg)`,
                    }}
                  />
                </div>
              ))}
            </div>
          )}

          {/* Reward card */}
          <div className="animate-in zoom-in-50 duration-500 pointer-events-auto">
            <div className="relative">
              {/* Glow */}
              <div className="absolute inset-0 bg-gradient-to-r from-green-400 to-emerald-400 rounded-3xl blur-2xl opacity-60 animate-pulse"></div>
              
              {/* Card */}
              <div className="relative bg-gradient-to-br from-green-400 via-emerald-500 to-teal-500 rounded-3xl p-8 shadow-2xl border-4 border-white/50 text-center min-w-[280px]">
                {/* Floating stars */}
                <div className="absolute top-4 left-4 animate-float">
                  <FloatingStar className="w-6 h-6 text-yellow-300" />
                </div>
                <div className="absolute top-4 right-4 animate-float-reverse">
                  <FloatingStar className="w-6 h-6 text-yellow-300" />
                </div>
                <div className="absolute bottom-4 left-8 animate-float" style={{ animationDelay: '0.5s' }}>
                  <FloatingStar className="w-5 h-5 text-yellow-300" />
                </div>
                <div className="absolute bottom-4 right-8 animate-float-reverse" style={{ animationDelay: '0.5s' }}>
                  <FloatingStar className="w-5 h-5 text-yellow-300" />
                </div>

                {/* Content */}
                <div className="text-6xl mb-4 animate-bounce">
                  {reward.emoji}
                </div>
                <div className="text-white font-black text-2xl mb-2 drop-shadow-lg">
                  {reward.type === 'coins' ? `+${reward.amount} Coins!` : reward.message}
                </div>
                <div className="text-green-100 text-sm font-medium">
                  {reward.type === 'coins' ? 'Added to your wallet!' : 'Unlocked!'}
                </div>

                {/* Celebration rings */}
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                  <div className="w-32 h-32 rounded-full border-4 border-white/30 animate-ping"></div>
                </div>
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                  <div className="w-48 h-48 rounded-full border-2 border-white/20 animate-ping" style={{ animationDelay: '0.5s' }}></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
