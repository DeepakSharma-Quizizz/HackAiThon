import { useState, useEffect } from 'react';
import { MessageCircle, X } from 'lucide-react';

// Context-aware messages based on time, performance, and streak
const getContextualMessages = (hour: number, streak: number, avgAccuracy: number) => {
  const timeOfDay = hour < 12 ? 'morning' : hour < 17 ? 'afternoon' : 'evening';
  const greeting = timeOfDay === 'morning' ? 'Good morning' : timeOfDay === 'afternoon' ? 'Good afternoon' : 'Good evening';
  
  const baseMessages = [
    { id: 1, text: `${greeting}! Ready to learn today? 😊`, mood: 'happy' },
    { id: 2, text: `Wow! Your scores are improving 🔥`, mood: 'excited' },
    { id: 3, text: `You might want to check your Geography accuracy!`, mood: 'thoughtful' },
    { id: 4, text: `Keep going — you're on a ${streak}-day streak 🚀`, mood: 'motivating' },
    { id: 5, text: `That Math score was AMAZING! 💯`, mood: 'celebrating' },
  ];

  // Add contextual messages based on performance
  if (avgAccuracy >= 90) {
    baseMessages.push({ id: 6, text: `You're crushing it with ${avgAccuracy}% accuracy! 🌟`, mood: 'celebrating' });
  } else if (avgAccuracy < 80) {
    baseMessages.push({ id: 7, text: `Let's aim for 85%+ today! You've got this! 💪`, mood: 'motivating' });
  }

  if (streak >= 7) {
    baseMessages.push({ id: 8, text: `${streak} days in a row! You're unstoppable! 🔥`, mood: 'excited' });
  } else if (streak >= 3) {
    baseMessages.push({ id: 9, text: `Nice ${streak}-day streak! Keep it going! 🎯`, mood: 'happy' });
  }

  return baseMessages;
};

const messages = getContextualMessages(new Date().getHours(), 7, 88);

export function QbitCompanion() {
  const [currentMessageIndex, setCurrentMessageIndex] = useState(0);
  const [isMinimized, setIsMinimized] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentMessageIndex((prev) => (prev + 1) % messages.length);
    }, 8000);

    return () => clearInterval(interval);
  }, []);

  const currentMessage = messages[currentMessageIndex];

  if (isMinimized) {
    return (
      <button
        onClick={() => setIsMinimized(false)}
        className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-full shadow-2xl hover:scale-110 active:scale-95 transition-transform flex items-center justify-center border-4 border-white animate-bounce z-50 touch-manipulation"
        aria-label="Open Qbit Companion"
      >
        <span className="text-2xl sm:text-3xl">🤖</span>
      </button>
    );
  }

  return (
    <div className="bg-gradient-to-br from-cyan-50 to-blue-50 rounded-3xl p-4 sm:p-6 shadow-lg border-4 border-cyan-200 relative overflow-hidden lg:sticky lg:top-24">
      {/* Close Button */}
      <button
        onClick={() => setIsMinimized(true)}
        className="absolute top-3 right-3 w-8 h-8 bg-white/80 rounded-full flex items-center justify-center hover:bg-white transition-colors z-10"
      >
        <X className="w-4 h-4 text-gray-600" />
      </button>

      {/* Decorative Background */}
      <div className="absolute top-0 right-0 w-24 h-24 bg-cyan-200/30 rounded-full -translate-y-12 translate-x-12"></div>
      <div className="absolute bottom-0 left-0 w-32 h-32 bg-blue-200/30 rounded-full translate-y-16 -translate-x-16"></div>

      <div className="relative z-10">
        {/* Qbit Character */}
        <div className="flex justify-center mb-4">
          <div className="relative">
            {/* Qbit Robot */}
            <div className="w-24 h-24 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-3xl flex items-center justify-center shadow-lg transform hover:rotate-6 hover:scale-110 transition-all duration-300 border-4 border-white cursor-pointer">
              <span className="text-5xl animate-in zoom-in duration-500">🤖</span>
            </div>
            {/* Animated Pulse */}
            <div className="absolute inset-0 bg-cyan-400 rounded-3xl animate-ping opacity-20"></div>
            {/* Subtle glow effect */}
            <div className="absolute inset-0 bg-cyan-400 rounded-3xl animate-pulse opacity-10"></div>
          </div>
        </div>

        {/* Qbit Name */}
        <div className="text-center mb-4">
          <h3 className="font-black text-xl bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent">
            Qbit
          </h3>
          <p className="text-xs text-gray-600">Your Learning Companion</p>
        </div>

        {/* Message Bubble */}
        <div className="bg-white rounded-2xl p-4 shadow-md border-2 border-cyan-200 mb-4 relative animate-in fade-in slide-in-from-bottom-2 duration-500">
          {/* Speech Bubble Tail */}
          <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-4 h-4 bg-white border-l-2 border-t-2 border-cyan-200 transform rotate-45"></div>
          
          <p key={currentMessage.id} className="text-sm text-gray-800 font-medium text-center leading-relaxed animate-in fade-in duration-300">
            {currentMessage.text}
          </p>
        </div>

        {/* Message Indicators */}
        <div className="flex justify-center gap-1.5">
          {messages.map((_, index) => (
            <div
              key={index}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                index === currentMessageIndex
                  ? 'w-6 bg-gradient-to-r from-cyan-500 to-blue-500'
                  : 'w-1.5 bg-gray-300'
              }`}
            ></div>
          ))}
        </div>

        {/* Quick Actions */}
        <div className="mt-4 pt-4 border-t-2 border-cyan-100">
          <button className="w-full bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-bold py-3 px-4 rounded-xl hover:shadow-lg transform hover:scale-105 transition-all duration-200 flex items-center justify-center gap-2">
            <MessageCircle className="w-4 h-4" />
            Chat with Qbit
          </button>
        </div>

        {/* Fun Stats */}
        <div className="mt-4 grid grid-cols-2 gap-2">
          <div className="bg-gradient-to-br from-cyan-100 to-blue-100 rounded-xl p-3 text-center">
            <div className="text-2xl font-black text-cyan-700">42</div>
            <div className="text-xs text-gray-600">Tips given</div>
          </div>
          <div className="bg-gradient-to-br from-blue-100 to-purple-100 rounded-xl p-3 text-center">
            <div className="text-2xl font-black text-blue-700">98%</div>
            <div className="text-xs text-gray-600">Accuracy</div>
          </div>
        </div>
      </div>
    </div>
  );
}
