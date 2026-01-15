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
    <div className="bg-gradient-to-br from-cyan-50 to-blue-50 rounded-3xl p-6 shadow-lg border-4 border-cyan-200 relative overflow-hidden sticky top-24">
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
      
      {/* Fun cartoon decorations */}
      <div className="absolute top-4 left-4 opacity-15 animate-float">
        <HappyCloud className="w-16 h-10 text-cyan-400" />
      </div>
      <div className="absolute bottom-4 right-4 opacity-15 animate-gentle-bounce">
        <FloatingStar className="w-10 h-10 text-blue-400" />
      </div>

      <div className="relative z-10">
        {/* Qbit Character */}
        <div className="flex justify-center mb-4">
          <div className="relative">
            {/* Qbit Robot */}
            <div className="w-24 h-24 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-3xl flex items-center justify-center shadow-lg transform hover:rotate-6 transition-transform border-4 border-white">
              <RobotCharacter className="w-16 h-18 text-white" />
            </div>
            {/* Animated Pulse */}
            <div className="absolute inset-0 bg-cyan-400 rounded-3xl animate-ping opacity-20"></div>
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
        <div className="bg-white rounded-2xl p-4 shadow-md border-2 border-cyan-200 mb-4 relative">
          {/* Speech Bubble Tail */}
          <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-4 h-4 bg-white border-l-2 border-t-2 border-cyan-200 transform rotate-45"></div>
          
          <p className="text-sm text-gray-800 font-medium text-center leading-relaxed">
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
