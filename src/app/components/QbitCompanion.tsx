import { useState, useEffect } from 'react';
import { MessageCircle, X } from 'lucide-react';
import { HappyCloud, FloatingStar, RobotCharacter } from './CartoonIllustrations';

const messages = [
  { id: 1, text: "Hey! Hope you're doing great today 😊", mood: 'happy' },
  { id: 2, text: "Wow! Your scores are improving 🔥", mood: 'excited' },
  { id: 3, text: "You might want to check your Geography accuracy!", mood: 'thoughtful' },
  { id: 4, text: "Keep going — you're on a 7-day streak 🚀", mood: 'motivating' },
  { id: 5, text: "That Math score was AMAZING! 💯", mood: 'celebrating' },
];

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
        className="fixed bottom-6 right-6 w-16 h-16 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-full shadow-2xl hover:scale-110 transition-transform flex items-center justify-center border-4 border-white animate-bounce z-50"
      >
        <span className="text-3xl">🤖</span>
      </button>
    );
  }

  return (
    <div className="bg-gradient-to-br from-cyan-50 to-blue-50 rounded-2xl p-4 shadow-md border-2 border-cyan-100 relative overflow-hidden sticky top-20">
      {/* Close Button */}
      <button
        onClick={() => setIsMinimized(true)}
        className="absolute top-2 right-2 w-7 h-7 bg-white/80 rounded-full flex items-center justify-center hover:bg-white transition-colors z-10"
      >
        <X className="w-3.5 h-3.5 text-gray-600" />
      </button>

      <div className="relative z-10">
        {/* Qbit Character */}
        <div className="flex justify-center mb-3">
          <div className="relative">
            {/* Qbit Robot */}
            <div className="w-16 h-16 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-xl flex items-center justify-center shadow-md transform hover:rotate-6 transition-transform border-2 border-white">
              <RobotCharacter className="w-12 h-14 text-white" />
            </div>
          </div>
        </div>

        {/* Qbit Name */}
        <div className="text-center mb-3">
          <h3 className="font-bold text-lg text-gray-800">
            Qbit
          </h3>
          <p className="text-xs text-gray-600">Your Learning Companion</p>
        </div>

        {/* Message Bubble */}
        <div className="bg-white rounded-xl p-3 shadow-sm border border-cyan-200 mb-3 relative">
          {/* Speech Bubble Tail */}
          <div className="absolute -top-1.5 left-1/2 -translate-x-1/2 w-3 h-3 bg-white border-l border-t border-cyan-200 transform rotate-45"></div>
          
          <p className="text-xs text-gray-800 font-medium text-center leading-relaxed">
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
        <div className="mt-3 pt-3 border-t border-cyan-100">
          <button className="w-full bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold py-2 px-3 rounded-lg hover:shadow-md transition-all duration-200 flex items-center justify-center gap-2 text-sm">
            <MessageCircle className="w-3.5 h-3.5" />
            Chat with Qbit
          </button>
        </div>

        {/* Fun Stats */}
        <div className="mt-3 grid grid-cols-2 gap-2">
          <div className="bg-gradient-to-br from-cyan-100 to-blue-100 rounded-lg p-2 text-center">
            <div className="text-xl font-black text-cyan-700">42</div>
            <div className="text-xs text-gray-600">Tips given</div>
          </div>
          <div className="bg-gradient-to-br from-blue-100 to-violet-100 rounded-lg p-2 text-center">
            <div className="text-xl font-black text-blue-700">98%</div>
            <div className="text-xs text-gray-600">Accuracy</div>
          </div>
        </div>
      </div>
    </div>
  );
}
